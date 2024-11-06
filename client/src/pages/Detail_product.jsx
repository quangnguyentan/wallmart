import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import icon_comments from "@/assets/icon-comments.png"
import SlickSlider from "@/components/SlickSlider";
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import product_demo from "@/assets/product_demo.jpg";
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
const Detail_product = () => {
  const [dropDown, setDropDown] = useState(false);
  const [drawerBottom, setDrawerBottom] = useState(false)
  const [isSelected, setIsSelected] = useState([])
  const isMobile = useMediaQuery("(max-width:600px)");

  
  return (
    <div className="w-full  h-screen pb-20 py-2 scrollbar-hide overflow-y-scroll text-gray-500 shadow-xl bg-gray-50 px-4 flex flex-col gap-2">
      <div className="flex items-center">
        <div className="flex items-center justify-between flex-4 ">
          <KeyboardArrowLeftIcon
             sx={{ fontSize  :  `${isMobile ? "30px" : "50px"}`}}
            
            onClick={() => window.history.back()}
          />
          <span className="text-blue-600 max-sm:text-xs">Hàng hóa</span>
          <div className="relative">
            <KeyboardArrowDownIcon
              fontSize={`${isMobile ? "medium" : "large"}`}
              className={`${
                dropDown ? "rotate-180 transform" : ""
              } transition-transform duration-700 ease-in-out delay-150 text-blue-600`}
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown && (
              <div className="absolute z-50 w-24 h-40 bg-[#fff] flex flex-col gap-2 items-center left-[-80px] py-2 px-2">
                <div className="h-[50%] w-full border-b">
                  <p className="text-xl text-center text-blue-500 max-sm:text-base">Hàng hóa</p>
                </div>
                <div className="h-[50%] w-full ">
                  <p className="text-xl text-center text-blue-500 max-sm:text-base">Cửa hàng</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex items-center relative flex-8 ">
          <SearchOutlinedIcon
            className="absolute"
            sx={{
              fontSize  :  `${isMobile ? "20px" : "30px"}`,
              color: "gray",
              marginLeft: "7px",
              cursor: "pointer",
            }}
            
          />
          <input
            type="text"
            className="w-full h-11 rounded-xl max-sm:h-8 pl-11 max-sm:pl-8 max-sm:text-sm text-lg outline-none placeholder:text-gray-500 placeholder:font-medium "
            placeholder="Tìm kiếm sản phẩm"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <SlickSlider detail/>
        <div className="flex flex-col w-full py-4 px-2 gap-2 bg-white rounded-xl">
            <div className="flex items-center gap-4 ">
                <span className="text-3xl text-[#fe5000]">$27.99</span>
               <div className="">
                <span className="">Giá cả </span>
                <span className="line-through">$39.99</span>
               </div>
            </div>
            <span>
            TSIODFO Women's Sneakers Athletic Sport Running Tennis Walking Shoes
            </span>
            <div className="w-32 h-8 flex justify-center items-center rounded-full bg-[#fdf6ec] border-[#fcbd71] border">
                <span className="text-[#f90]">Tự kinh doanh</span>
            </div>
        </div>
        <div className="flex flex-col w-full py-4 px-2 gap-2 bg-white rounded-xl">
            <div className="flex items-center justify-between gap-4 max-sm:text-xs">
                <span>Vận chuyển</span>
                <div className="flex items-center gap-2">
                    <span>Chi phí vận chuyển</span>
                    <span>0 đồng</span>

                </div>
                <span>Bán hàng: 8</span>
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
        <div className="flex flex-col w-full py-4 px-2 gap-8 bg-white rounded-xl">
            <div className="flex items-center justify-between gap-4 ">
               <div className="flex items-center gap-4 justify-center">
                <AccountCircleIcon sx={{ fontSize  :  `${isMobile ? "40px" : "70px"}`}} className="text-gray-300"/>
                    <div className="flex flex-col gap-1 ">
                        <span className="text-xl max-sm:text-sm font-medium text-black">Logistic</span>
                        <span className="text-lg max-sm:text-sm font-medium">ngành toàn diện</span>

                    </div>
               </div>
                <KeyboardArrowRightIcon ssx={{ fontSize  :  `${isMobile ? "20px" : "30px"}`}} className="cursor-pointer"/>

            </div>
            
           <div className="w-full flex items-center justify-center cursor-pointer">
            <div className="w-32 h-8 flex justify-center items-center rounded-full bg-gray-100 border ">
                    <span className="max-sm:text-xs">Liên hệ hỗ trợ</span>
                </div>
           </div>
        </div>
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
            <li>Imported</li>
            <li>MD+Air Cushion sole</li>
            <li>COMFORTABLE AND BREATHABLE MATERIAL: Yhoon road running shoes' Upper with breathable lightweight air fly woven,it is excellent,flexible and comfortable.</li>
            <li>SUITABLE FOR ALL OCCASION:Daily walking,casual running,nursing,working,tennis,shopping,traveling,long standing,outdoor sports,driving,yoga,pilates,dancing and indoor activities,etc.</li>
            <li>ABOUT SIZE: Please refer to our size chart to choose size.if there's any question,please contact us.</li>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full h-16 bg-white left-0 right-0 flex items-center justify-center">
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
              <button className="p-2 bg-[#ffcc14] max-sm:text-xs" onClick={() => setDrawerBottom(!drawerBottom)}>Thêm vào giỏ hàng</button>
            </DrawerTrigger>
            <DrawerTrigger asChild value="buyNow">
           
            </DrawerTrigger>
            
            <DrawerContent  className="bg-white h-[80%] lg:w-[30%] mx-auto">
              <DrawerHeader >
              <div className="flex flex-col gap-4 ">
                  <div className="flex items-center gap-2">
                  <img src={product_demo} alt="product_demo" className="w-36 h-36" />
                  <div className="flex flex-col w-full py-4 px-2 gap-2 bg-white rounded-xl">
                      <div className="flex items-center gap-4 ">
                          <span className="text-3xl text-[#fe5000]">$27.99</span>
                        
                      </div>
            
                     
                    <span className="text-gray-500">
                        Hàng tồn kho : 854280Phần
                    </span>
                    <span className="text-gray-700 text-lg">
                    Vui lòng chọn màu sắc color;size
                    </span>
                        
                  </div>
                  </div>
          <div className="flex flex-col w-full py-4 px-2 gap-2 bg-white rounded-xl border-b">
              <div className="flex items-center justify-between gap-4 max-sm:text-xs">
                  <span className="text-xl font-semibold">Color</span>
                 
              </div>
              
              <div className="grid grid-cols-3 gap-4 max-sm:text-xs">
                 <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer">
                  <img src={demo_product_img} alt="demo_product_img" className="w-7 h-7 mix-blend-darken" />
                  <span className="font-semibold">White</span>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer">
                  <img src={demo_product_img} alt="demo_product_img" className="w-7 h-7 mix-blend-darken" />
                  <span className="font-semibold">White</span>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer">
                  <img src={demo_product_img} alt="demo_product_img" className="w-7 h-7 mix-blend-darken" />
                  <span className="font-semibold break-words">Bone/Almond Milk</span>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer">
                  <img src={demo_product_img} alt="demo_product_img" className="w-7 h-7 mix-blend-darken" />
                  <span className="font-semibold">White</span>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer">
                  <img src={demo_product_img} alt="demo_product_img" className="w-7 h-7 mix-blend-darken" />
                  <span className="font-semibold">White</span>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer">
                  <img src={demo_product_img} alt="demo_product_img" className="w-7 h-7 mix-blend-darken" />
                  <span className="font-semibold break-words">Bone/Almond Milk</span>
                 </div>
                 
              </div>
          </div>
          <div className="flex flex-col w-full py-4 px-2 gap-2 bg-white rounded-xl border-b">
              <div className="flex items-center justify-between gap-4 max-sm:text-xs">
                  <span className="text-xl font-semibold">Color</span>
                 
              </div>
              
              <div className="grid grid-cols-10 gap-4 max-sm:text-xs">
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    6
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    6.5
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    7
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    7.5
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    8
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    9
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    10
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    11
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    12
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    13
                 </div>
                 
                 
              </div>
          </div>
          <div className="flex flex-col w-full py-4 px-2 gap-2 bg-white rounded-xl border-b">
              <div className="flex items-center justify-between gap-4 max-sm:text-xs">
                  <span className="text-xl font-semibold">Color</span>
                  <div className="flex items-center gap-2 border rounded-[4px]">
                   <div className="px-3 py-1 rounded-l-[4px] bg-gray-100 cursor-pointer">
                    <RemoveOutlinedIcon sx={{ fontSize : "15px" }} />
                   </div>
                    <div className="px-2">
                    <span>1</span>
                    </div>
                    <div className="px-3 py-1 rounded-r-[4px] bg-gray-100 cursor-pointer">
                    <AddOutlinedIcon sx={{ fontSize : "15px" }} />
                   </div>
                  </div>
              </div>
              
            
          </div>
          <div className="px-8 w-full py-4">
        <button className="w-full py-4 px-4 bg-red-500 rounded-full text-white text-xl">Thêm vào giỏ hàng</button>
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
           
              <button id="custom-button" className="p-2  max-sm:text-xs" onClick={() => setDrawerBottom(!drawerBottom)}>Mua ngay</button>

            </DrawerTrigger>
            
            <DrawerContent  className="bg-white h-[80%] lg:w-[30%] mx-auto ">
              <DrawerHeader>
                <div className="flex flex-col gap-4 ">
                  <div className="flex items-center gap-2">
                  <img src={product_demo} alt="product_demo" className="w-36 h-36" />
                  <div className="flex flex-col w-full py-4 px-2 gap-2 bg-white rounded-xl">
                      <div className="flex items-center gap-4 ">
                          <span className="text-3xl text-[#fe5000]">$27.99</span>
                        
                      </div>
            
                     
                    <span className="text-gray-500">
                        Hàng tồn kho : 854280Phần
                    </span>
                    <span className="text-gray-700 text-lg">
                    Vui lòng chọn màu sắc color;size
                    </span>
                        
                  </div>
                  </div>
          <div className="flex flex-col w-full py-4 px-2 gap-2 bg-white rounded-xl border-b">
              <div className="flex items-center justify-between gap-4 max-sm:text-xs">
                  <span className="text-xl font-semibold">Color</span>
                 
              </div>
              
              <div className="grid grid-cols-3 gap-4 max-sm:text-xs">
                 <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer">
                  <img src={demo_product_img} alt="demo_product_img" className="w-7 h-7 mix-blend-darken" />
                  <span className="font-semibold">White</span>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer">
                  <img src={demo_product_img} alt="demo_product_img" className="w-7 h-7 mix-blend-darken" />
                  <span className="font-semibold">White</span>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer">
                  <img src={demo_product_img} alt="demo_product_img" className="w-7 h-7 mix-blend-darken" />
                  <span className="font-semibold break-words">Bone/Almond Milk</span>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer">
                  <img src={demo_product_img} alt="demo_product_img" className="w-7 h-7 mix-blend-darken" />
                  <span className="font-semibold">White</span>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer">
                  <img src={demo_product_img} alt="demo_product_img" className="w-7 h-7 mix-blend-darken" />
                  <span className="font-semibold">White</span>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer">
                  <img src={demo_product_img} alt="demo_product_img" className="w-7 h-7 mix-blend-darken" />
                  <span className="font-semibold break-words">Bone/Almond Milk</span>
                 </div>
                 
              </div>
          </div>
          <div className="flex flex-col w-full py-4 px-2 gap-2 bg-white rounded-xl border-b">
              <div className="flex items-center justify-between gap-4 max-sm:text-xs">
                  <span className="text-xl font-semibold">Color</span>
                 
              </div>
              
              <div className="grid grid-cols-10 gap-4 max-sm:text-xs">
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    6
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    6.5
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    7
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    7.5
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    8
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    9
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    10
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    11
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    12
                 </div>
                 <div className="flex items-center cursor-pointer gap-2 px-2 justify-center rounded-xl py-2 bg-gray-100">
                    13
                 </div>
                 
                 
              </div>
          </div>
          <div className="flex flex-col w-full py-4 px-2 gap-2 bg-white rounded-xl border-b">
              <div className="flex items-center justify-between gap-4 max-sm:text-xs">
                  <span className="text-xl font-semibold">Color</span>
                  <div className="flex items-center gap-2 border rounded-[4px]">
                   <div className="px-3 py-1 rounded-l-[4px] bg-gray-100 cursor-pointer">
                    <RemoveOutlinedIcon sx={{ fontSize : "15px" }} />
                   </div>
                    <div className="px-2">
                    <span>1</span>
                    </div>
                    <div className="px-3 py-1 rounded-r-[4px] bg-gray-100 cursor-pointer">
                    <AddOutlinedIcon sx={{ fontSize : "15px" }} />
                   </div>
                  </div>
              </div>
              
            
          </div>
          <div className="px-8 w-full py-4">
        <button className="w-full py-4 px-4 bg-red-500 rounded-full text-white text-xl">Mua hàng</button>
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
          
      </div>
    </div>
  )
}

export default Detail_product