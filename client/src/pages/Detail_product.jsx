import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import icon_comments from "@/assets/icon-comments.png"
import SlickSlider from "@/components/SlickSlider";
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import img_demo_grey from "@/assets/img_demo_grey.jpg";
import img_demo_black from "@/assets/img_demo_black.jpg";

import demo_product_img from "@/assets/demo_product_img.jpg";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import toast, { Toaster } from "react-hot-toast";
import { apiGetProductById, apiGetProductByShop } from "@/services/productService";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "@/stores/actions/userAction";
import { pathImage } from "@/lib/helper";

import { apiAddToCart } from "@/services/userService";
import { apiGetstoreById } from "@/services/storeService";

const productColor = [
  {
    id : 1,
    img : demo_product_img,
    name : "white"
  },
  {
    id : 2,
    img : img_demo_grey,
    name : "grey"
  },
  {
    id : 3,
    img : img_demo_black,
    name : "black"
  },
  {
    id : 4,
    img : demo_product_img,
    name : "blue"
  },
  {
    id : 5,
    img : img_demo_grey,
    name : "green"
  },
  {
    id : 6,
    img : img_demo_black,
    name : "yellowdsadasdsadas"
  },
]
const Detail_product = ({agent}) => {
  const { id } = useParams()
  const [dropDown, setDropDown] = useState(false);
  const [drawerBottom, setDrawerBottom] = useState(false)
  const [products, setProducts] = useState([])
  const [isSelectedSize, setIsSelectedSize] = useState([])
  const [isSelectedColor, setIsSelectedColor] = useState([])
  const [quantity, setQuantity] = useState(1)
  const { isLoggedIn, token } = useSelector((state) => state.auth);
  const location = useLocation();
  const store = location.state;
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate()
  const fetchProductById = async(id) => {
    const res = await apiGetProductByShop(id)
    setProducts(res?.products)
  }
  
  const onChangeQuantity = (type) => {
    if(type === "increment") {
      setQuantity(quantity + 1)
    }else{
      if(quantity <= 1) return
      setQuantity(quantity - 1)
    }
  }
  const onSelectColor = (color) => {
    if(isSelectedColor?.includes(color) ){
      setIsSelectedColor(isSelectedColor?.filter(item => item !== color));

     }else{
      setIsSelectedColor([ color])
     }
  }
  const onSelectSize = (size) => {
    if(isSelectedSize?.includes(size) ){
      setIsSelectedSize(isSelectedSize?.filter(item => item !== size));
     }else{
      setIsSelectedSize([ size])
     }
  }
  const addToCart = async() => {
    const res = await apiAddToCart({
      quantity,
      color : isSelectedColor[0],
      size : isSelectedSize[0],
      product : products?._id,
      store : store?._id
    })
    if(res?.success) {
      setDrawerBottom(false)
      setIsSelectedColor([])
      setIsSelectedSize([])
      setQuantity(1)
      localStorage.setItem("page", 2)
      navigate(`/`)
      toast.success("Thêm giỏ hàng thành công")
    }
  }
  useEffect(() => {
    fetchProductById(id)
  },[id])
  return (
    <div className="w-full  h-screen pb-20 py-2 scrollbar-hide overflow-y-scroll text-gray-500 shadow-xl bg-gray-50 px-4 flex flex-col gap-2">
      <div className="flex items-center">
        <div className="flex items-center justify-between flex-4 ">
          <KeyboardArrowLeftIcon
             sx={{ fontSize  :  `${isMobile ? "30px" : "50px"}`, cursor : "pointer"}}
            onClick={() => window.history.back()}
          />
          <span className="text-blue-600 max-sm:text-xs">Hàng hóa</span>
          <div className="relative">
            <KeyboardArrowDownIcon
              fontSize={`${isMobile ? "small" : "large"}`}
              className={`${
                dropDown ? "rotate-180 transform" : ""
              } transition-transform duration-700 ease-in-out delay-150 text-blue-600 cursor-pointer`}
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown && (
              <div className="absolute z-50 w-24 h-40 max-sm:h-24 max-sm:w-16 bg-[#fff] flex flex-col gap-2 items-center left-[-80px] py-2 px-2">
                <div className="h-[50%] w-full cursor-pointer border-b" onClick={() => {
                    localStorage.setItem("page", 1)
                    navigate("/")
                }}>
                  <p className="text-xl text-center text-blue-500 max-sm:text-xs">Hàng hóa</p>
                </div>
                <div className="h-[50%] w-full cursor-pointer " onClick={() => navigate("/store")}>
                  <p className="text-xl text-center text-blue-500 max-sm:text-xs">Cửa hàng</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex items-center relative flex-8 ">
          <SearchOutlinedIcon
            className="absolute"
            sx={{
              fontSize  :  `${isMobile ? "15px" : "30px"}`,
              color: "gray",
              marginLeft: "7px",
              cursor: "pointer",
            }}
            
          />
          <input
            type="text"
            className="w-full h-11 max-sm:placeholder:text-xs rounded-xl max-sm:h-8 pl-11 max-sm:pl-6 max-sm:text-sm text-lg outline-none placeholder:text-gray-500 placeholder:font-medium "
            placeholder="Tìm kiếm sản phẩm"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <SlickSlider detail products={products?.photos}/>
        <div className="flex flex-col w-full py-4 px-2 gap-2 bg-white rounded-xl">
            <div className="flex items-center gap-4 ">
                <span className="text-3xl max-sm:text-lg text-[#fe5000]">${products?.price}</span>
               <div className="">
                <span className="max-sm:text-xs">Giá cả </span>
                <span className="line-through max-sm:text-xs">${products?.priceOld}</span>
               </div>
            </div>
            <span className="max-sm:text-xs">
              {products?.title}
            </span>
            <div className="w-32 max-sm:h-6 max-sm:w-28 h-8 flex justify-center items-center rounded-full bg-[#fdf6ec] border-[#fcbd71] border">
                <span className="text-[#f90] max-sm:text-xs">Tự kinh doanh</span>
            </div>
        </div>
        <div className="flex flex-col w-full py-4 px-2 gap-2 bg-white rounded-xl">
            <div className="flex items-center justify-between gap-4 max-sm:text-xs">
                <span>Vận chuyển</span>
                <div className="flex items-center gap-2">
                    <span>Chi phí vận chuyển</span>
                    <span>0 đồng</span>

                </div>
                <span>Bán hàng: {products?.sold}</span>
            </div>
            
            <div className="flex items-center gap-4 justify-between max-sm:text-xs">
                <div className="flex items-center gap-4">
                    <span>Vui lòng chọn màu sắc</span>
                    <div className="flex items-center">
                        <span>color;</span>
                        <span>size</span>
                    </div>
                </div>
                <KeyboardArrowRightIcon sx={{ fontSize  :  `${isMobile ? "20px" : "30px"}`}} className="cursor-pointer"/>
            </div>
        </div>
        {/* <div className="flex flex-col w-full py-4 px-2 gap-8 bg-white rounded-xl">
            <div className="flex items-center justify-between gap-4 ">
               <div className="flex items-center gap-4 justify-center">
                <AccountCircleIcon sx={{ fontSize  :  `${isMobile ? "40px" : "70px"}`}} className="text-gray-300"/>
                    <div className="flex flex-col gap-1 ">
                        <span className="text-xl max-sm:text-sm font-medium text-black">{store?.inforByStore?.nameStore}</span>
                        <span className="text-lg max-sm:text-sm font-medium">{store?.industry}</span>

                    </div>
               </div>
                <KeyboardArrowRightIcon ssx={{ fontSize  :  `${isMobile ? "20px" : "30px"}`}} className="cursor-pointer"/>

            </div>
            
           <div className="w-full flex items-center justify-center cursor-pointer">
            <div className="w-32 h-8 flex justify-center items-center rounded-full bg-gray-100 border ">
                    <span className="max-sm:text-xs">Liên hệ hỗ trợ</span>
                </div>
           </div>
        </div> */}
        <div className="flex flex-col w-full py-4 px-2 gap-8 bg-white rounded-xl">
            <div className="flex items-center justify-between gap-4 ">
                <div className="flex gap-4 items-center">
                    <span className="text-2xl max-sm:text-sm font-medium">Đánh giá</span>
                    <span className="text-lg max-sm:text-sm font-medium">0+</span>
                </div>
                <KeyboardArrowRightIcon sx={{ fontSize  :  `${isMobile ? "20px" : "30px"}`}} className="cursor-pointer"/>

            </div>
            
           <div className="w-full flex items-center justify-center cursor-pointer">
            <div className="flex flex-col items-center justify-center">
                <img src={icon_comments} alt="icon_comments" className="w-52 h-36" />
                <span className="text-lg font-semibold text-gray-400 max-sm:text-sm">Chưa có bình luận</span>
            </div>
           </div>
        </div>
        <div className="flex flex-col w-full py-4 px-2 gap-8 bg-white rounded-xl ">
            <span className="text-xl font-medium text-black max-sm:text-base">Chi tiết</span>
            
          <div className="text-black px-2 w-full break-words max-sm:text-sm">
            <li>{products?.description}</li>
          </div>
        </div>
      </div>
      {/* <div className="fixed bottom-0 w-full h-16 bg-white left-0 right-0 flex items-center justify-center">
           <div className="flex items-center justify-center gap-4 max-sm:gap-4">
           <div className="flex items-center justify-center gap-4 max-sm:gap-2">
                <div className="flex flex-col gap-1 justify-center items-center">
                    <HeadsetMicOutlinedIcon sx={{ fontSize  :  `${isMobile ? "20px" : "25px"}`}}/>
                    <span className="max-sm:text-xs">CSKH</span>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                    <BookmarkBorderOutlinedIcon sx={{ fontSize  :  `${isMobile ? "20px" : "25px"}`}}/>
                    <span className="max-sm:text-xs">Cửa hàng</span>
                </div>
               <Link to="/" onClick={() => {
                localStorage.setItem("page", 2)
              
               }}> 
               <div className="flex flex-col gap-1 justify-center items-center">
                    <ShoppingCartOutlinedIcon sx={{ fontSize  :  `${isMobile ? "20px" : "25px"}`}}/>
                    <span className="max-sm:text-xs">Giỏ hàng</span>
                </div></Link>
            </div>
            <div className="flex items-center justify-center gap-2  text-white">
            <Drawer >
            <DrawerTrigger asChild value="addToCart">
              <button className="p-2 bg-[#ffcc14] max-sm:text-xs" onClick={() => {
                setDrawerBottom(!drawerBottom)
                setDropDown(false)
              }}>Thêm vào giỏ hàng</button>
            </DrawerTrigger>
            <DrawerTrigger asChild value="buyNow">
           
            </DrawerTrigger>
            
            <DrawerContent  className="bg-white h-[80%] lg:w-[30%] mx-auto">
              <DrawerHeader >
              <div className="flex flex-col gap-4 ">
                 {isSelectedColor?.length > 0 || isSelectedSize?.length > 0 ?
                  <div className="flex items-center gap-2">
                   <img src={`${products?.photos?.length > 0 && `${pathImage}/${products?.photos[0]}`}`} alt="product_demo" className=" w-36 h-36  max-sm:w-20 max-sm:h-20" />
                  <div className="flex flex-col items-start w-full py-4 px-2 gap-2 bg-white rounded-xl">
                      <div className="flex items-center gap-4 ">
                          <span className="text-3xl text-[#fe5000] max-sm:text-base">${products?.price}</span>
                        
                      </div>
            
                     
                    <span className="max-sm:text-xs text-gray-500 text-start">
                        Hàng tồn kho : {products?.inventory}
                    </span>
                    <span className="max-sm:text-xs text-gray-700 text-lg text-start">
                     Đã chọn màu: Màu {isSelectedColor};Size {isSelectedSize}
                    </span>
                        
                  </div>
                  </div>
                :   <div className="flex items-center gap-2">
                <img src={`${products?.photos?.length > 0 && `${pathImage}/${products?.photos[0]}`}`} alt="product_demo" className=" w-36 h-36  max-sm:w-20 max-sm:h-20" />
                <div className="flex flex-col items-start w-full py-4 px-2 gap-2 bg-white rounded-xl">
                    <div className="flex items-center gap-4 ">
                        <span className="text-3xl text-[#fe5000] max-sm:text-base">${products?.price}</span>
                      
                    </div>
          
                   
                  <span className="max-sm:text-xs text-gray-500">
                      Hàng tồn kho : {products?.inventory}
                  </span>
                  <span className="max-sm:text-xs text-gray-700 text-lg ">
                  Vui lòng chọn màu sắc color;size
                  </span>
                      
                </div>
                </div>}
          <div className="flex flex-col w-full py-4 px-2 gap-2 bg-white rounded-xl border-b">
              <div className="flex items-center justify-between gap-4 max-sm:text-xs">
                  <span className="text-xl font-semibold  max-sm:text-sm">Color</span>
                 
              </div>
              
              <div className="grid grid-cols-3 gap-2 max-sm:text-xs">
                {products?.color?.map((product,index) => (
                     <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer" key={index} onClick={() => onSelectColor(product)}>
                     {product?.photos?.length > 0 && <img src={product?.img} alt="demo_product_img" className="w-7 h-7 mix-blend-darken" />}
                     <span className={product?.photos?.length > 0 ? "font-semibold line-clamp-1" : `${isSelectedColor.length > 0 &&  isSelectedColor[0] === `${product}` ? "font-semibold line-clamp-1 w-full text-center text-red-500" : "font-semibold line-clamp-1 w-full text-center"}`}>{product}</span>
                    </div>
                ))}
              
                 
                 
              </div>
          </div>
          <div className="flex flex-col w-full pb-4 px-2 gap-2 bg-white rounded-xl border-b">
              <div className="flex items-center justify-between gap-4 max-sm:text-xs">
                  <span className="text-xl font-semibold  max-sm:text-sm">Sizes</span>
                 
              </div>
              
              <div className="grid grid-cols-10 gap-4 max-sm:text-xs">
              {products?.size?.map((product,  index) => (
                  <div className={`${isSelectedSize.length > 0 && isSelectedSize[0] === product ? "flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100 text-red text-red-500" : "flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100"}`} key={index} onClick={() => onSelectSize(product)}>
                      {product}            
                  </div>

              ))}
                 
              </div>
          </div>
          <div className="flex flex-col w-full pb-4 px-2 gap-2 bg-white rounded-xl border-b">
              <div className="flex items-center justify-between gap-4 max-sm:text-xs">
                  <span className="text-xl font-semibold max-sm:text-sm">Quantity</span>
                  <div className="flex items-center gap-2 border rounded-[4px]">
                   <div className="px-3 py-1 rounded-l-[4px] bg-gray-100 cursor-pointer" onClick={() => onChangeQuantity("decrement")}>
                    <RemoveOutlinedIcon sx={{ fontSize : "15px" }} />
                   </div>
                    <div className="px-2">
                    <span>{quantity}</span>
                    </div>
                    <div className="px-3 py-1 rounded-r-[4px] bg-gray-100 cursor-pointer" onClick={() => onChangeQuantity("increment")}>
                    <AddOutlinedIcon sx={{ fontSize : "15px" }} />
                   </div>
                  </div>
              </div>
              
            
          </div>
          <div className="px-8 w-full py-4 max-sm:py-2">
        <button className="w-full py-4 px-4 bg-red-500 rounded-full text-white text-xl max-sm:py-2 max-sm:text-sm" onClick={() => {
        if(isLoggedIn && token) {
          if(isSelectedColor?.length < 1 || isSelectedSize?.length < 1) {
            toast.error(`${isSelectedSize.length < 1 ? "Vui lòng chọn size" : "Vui lòng chọn color"}`)
          }
         if(isSelectedColor.length > 0 && isSelectedSize.length > 0) {
          addToCart()
         }
        }else{
          navigate("/login")
        }
        }}>Thêm vào giỏ hàng</button>
        </div>
         
                </div>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer >
           
            <DrawerTrigger asChild value="buyNow">
           
              <button id="custom-button" className="p-2  max-sm:text-xs" onClick={() => {
                setDrawerBottom(!drawerBottom)
                setDropDown(false)
              }}>Mua ngay</button>

            </DrawerTrigger>
            
            <DrawerContent  className="bg-white h-[80%] lg:w-[30%] mx-auto ">
              <DrawerHeader>
              <div className="flex flex-col gap-4 ">
                 {isSelectedColor?.length > 0 || isSelectedSize?.length > 0 ?
                  <div className="flex items-center gap-2">
                   <img src={`${products?.photos?.length > 0 && `${pathImage}/${products?.photos[0]}`}`} alt="product_demo" className=" w-36 h-36  max-sm:w-20 max-sm:h-20" />
                  <div className="flex flex-col items-start w-full py-4 px-2 gap-2 bg-white rounded-xl">
                      <div className="flex items-center gap-4 ">
                          <span className="text-3xl text-[#fe5000] max-sm:text-base">${products?.price}</span>
                        
                      </div>
            
                     
                    <span className="max-sm:text-xs text-gray-500 text-start">
                        Hàng tồn kho : {products?.inventory}
                    </span>
                    <span className="max-sm:text-xs text-gray-700 text-lg text-start">
                     Đã chọn màu: Màu {isSelectedColor};Size {isSelectedSize}
                    </span>
                        
                  </div>
                  </div>
                :   <div className="flex items-center gap-2">
                <img src={`${products?.photos?.length > 0 && `${pathImage}/${products?.photos[0]}`}`} alt="product_demo" className=" w-36 h-36  max-sm:w-20 max-sm:h-20" />
                <div className="flex flex-col items-start w-full py-4 px-2 gap-2 bg-white rounded-xl">
                    <div className="flex items-center gap-4 ">
                        <span className="text-3xl text-[#fe5000] max-sm:text-base">${products?.price}</span>
                      
                    </div>
          
                   
                  <span className="max-sm:text-xs text-gray-500">
                      Hàng tồn kho : {products?.inventory}
                  </span>
                  <span className="max-sm:text-xs text-gray-700 text-lg ">
                  Vui lòng chọn màu sắc color;size
                  </span>
                      
                </div>
                </div>}
          <div className="flex flex-col w-full py-4 px-2 gap-2 bg-white rounded-xl border-b">
              <div className="flex items-center justify-between gap-4 max-sm:text-xs">
                  <span className="text-xl font-semibold  max-sm:text-sm">Color</span>
                 
              </div>
              
              <div className="grid grid-cols-3 gap-2 max-sm:text-xs">
                {products?.color?.map((product,index) => (
                     <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer" key={index} onClick={() => onSelectColor(product)}>
                     {product?.photos?.length > 0 && <img src={product?.img} alt="demo_product_img" className="w-7 h-7 mix-blend-darken" />}
                     <span className={product?.photos?.length > 0 ? "font-semibold line-clamp-1" : `${isSelectedColor[0] === `${product}` ? "font-semibold line-clamp-1 w-full text-center text-red-500" : "font-semibold line-clamp-1 w-full text-center"}`}>{product}</span>
                    </div>
                ))} 
              </div>
          </div>
          <div className="flex flex-col w-full pb-4 px-2 gap-2 bg-white rounded-xl border-b">
              <div className="flex items-center justify-between gap-4 max-sm:text-xs">
                  <span className="text-xl font-semibold  max-sm:text-sm">Sizes</span>
                 
              </div>
              
              <div className="grid grid-cols-10 gap-4 max-sm:text-xs">
              {products?.size?.map((product,  index) => (
                  <div className={`${isSelectedSize.length > 0 && isSelectedSize[0] === product ? "flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100 text-red text-red-500" : "flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100"}`} key={index} onClick={() => onSelectSize(product)}>
                      {product}            
                  </div>

              ))}
                 
              </div>
          </div>
          <div className="flex flex-col w-full pb-4 px-2 gap-2 bg-white rounded-xl border-b">
              <div className="flex items-center justify-between gap-4 max-sm:text-xs">
                  <span className="text-xl font-semibold max-sm:text-sm">Quantity</span>
                  <div className="flex items-center gap-2 border rounded-[4px]">
                   <div className="px-3 py-1 rounded-l-[4px] bg-gray-100 cursor-pointer" onClick={() => onChangeQuantity("decrement")}>
                    <RemoveOutlinedIcon sx={{ fontSize : "15px" }} />
                   </div>
                    <div className="px-2">
                    <span>{quantity}</span>
                    </div>
                    <div className="px-3 py-1 rounded-r-[4px] bg-gray-100 cursor-pointer" onClick={() => onChangeQuantity("increment")}>
                    <AddOutlinedIcon sx={{ fontSize : "15px" }} />
                   </div>
                  </div>
              </div>
              
            
          </div>
          <div className="px-8 w-full py-4 max-sm:py-2" onClick={() =>{
          
             if(isLoggedIn && token) {
              if(isSelectedColor?.length < 1 || isSelectedSize?.length < 1) {
                toast.error(`${isSelectedSize.length < 1 ? "Vui lòng chọn size" : "Vui lòng chọn color"}`)
              }else{
                const isChecked = [
                  {
                    ...products,
                    color: products.color[0], 
                    size: products.size[0] ,
                    quantity : quantity   
                  }
                ]
            
               navigate("/order-cart", {state : { isChecked }})
              }
             }else{
              navigate("/login")
             }
            
           
          }}>
        <button className="w-full py-4 px-4 bg-red-500 rounded-full text-white text-xl max-sm:py-2 max-sm:text-sm" >Mua hàng</button>
        </div>
         
                </div>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
            </div>

           </div>
          
      </div> */}
    </div>
  )
}

export default Detail_product