
import { useEffect, useState } from "react";
import SlickSlider from "@/components/SlickSlider";
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
import { apiAddToCartByStore, apiGetstoreById } from "@/services/storeService";
import Sidebar from "@/components/Sidebar";

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
const Detail_product_agent = () => {
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
  console.log(products)
  const fetchAddToCart = async() => {
    try {
     const res = await apiAddToCartByStore({
       quantity : quantity,
       color : products?.color && products?.color,
       size :  products?.size && products?.size,
       product : products?._id,
     })
     if(res?.success) {
       toast.success("Thêm giỏ hàng thành công")
     }
    } catch (error) {
     console.log(error)
    }
   
   }
  useEffect(() => {
    fetchProductById(id)
  },[id])
  return (
    <div className="w-full h-screen pb-20 py-2 scrollbar-hide overflow-y-scroll text-gray-500 flex flex-col gap-2">
      {/* <div className="flex items-center">
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
      </div> */}
      <div className="flex w-full gap-12 bg-white px-8 py-12 rounded-xl  justify-center">
        <div className="w-[40%} h-[320px]">
        <img src={`${pathImage}/${products?.photos && products?.photos[0]}`} alt="" className="w-full h-full mix-blend-darken" />
        {/* <SlickSlider detail products={products?.photos} /> */}
        </div>
        <div className="flex flex-col w-[50%] py-4 px-2 gap-2 bg-white rounded-xl">
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
         
        </div>
        
      </div>
     
    </div>
  )
}

export default Detail_product_agent