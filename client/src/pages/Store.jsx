import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo_brand from "@/assets/logo_brand.jpg"
import iphone from "@/assets/iphone.jpg"
import cloth from "@/assets/cloth.jpg"

import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Store = () => {
    const [dropDown, setDropDown] = useState(false);
    const isMobile = useMediaQuery("(max-width:600px)");
    const navigate = useNavigate()
  return (
    <div className="w-full h-screen text-gray-500 shadow-xl bg-gray-50 px-4 flex flex-col gap-8 ">
      <div className="flex items-center ">
        <div className="flex items-center justify-between flex-4 ">
          <KeyboardArrowLeftIcon
            sx={{ fontSize: `${isMobile ? "30px" : "50px"}`, }}
            onClick={() => window.history.back()}
          />
          <span className="text-blue-600 max-sm:text-sm">Cửa hàng</span>
          <div className="relative">
            <KeyboardArrowDownIcon
              fontSize={`${isMobile ? "medium" : "large"}`}
              className={`${
                dropDown ? "rotate-180 transform" : ""
              } transition-transform duration-700 ease-in-out delay-150 text-blue-600`}
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown && (
              <div className="absolute z-50 w-24 h-40 max-sm:h-20 max-sm:py-4 bg-[#fff] flex flex-col gap-2 items-center left-[-80px] py-2 px-2">
                <div className="h-[50%]  w-full border-b">
                  <p className="text-xl text-center text-blue-500  max-sm:text-xs">Hàng hóa</p>
                </div>
                <div className="h-[50%] w-full ">
                  <p className="text-xl text-center text-blue-500  max-sm:text-xs">Cửa hàng</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex items-center relative flex-8">
          <SearchOutlinedIcon
            className="absolute"
            sx={{
              fontSize: `${isMobile ? "20px" : "30px"}`,
              color: "gray",
              marginLeft: "7px",
              cursor: "pointer",
            }}
          />
          <input
            type="text"
            className="w-full h-11 rounded-lg max-sm:pl-8 pl-11 text-lg outline-none placeholder:text-gray-500 placeholder:font-medium placeholder:max-sm:text-xs"
            placeholder="Tìm kiếm sản phẩm"
          />
        </div>
      </div>
    <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
            <img src={logo_brand} alt="logo_brand" className="w-16 h-16 max-sm:w-12 max-sm:h-12 mix-blend-darken" />
            <div className="flex flex-col max-sm:gap-2">
               <span className="text-lg  max-sm:text-xs font-semibold text-black"> Tinnn STORE</span>
               <span className="text-lg  max-sm:text-xs font-semibold text-black">20Người đã follow</span>

            </div>
            </div>
            <div className="w-32 max-sm:h-6 max-sm:w-28 h-8 flex justify-center items-center rounded-full bg-[#fdf6ec] border-[#fcbd71] border cursor-pointer" onClick={() => navigate("/detail-store")}>
                <span className="text-[#f90] max-sm:text-xs" >Dạo cửa hàng</span>
            </div>
        </div>
        <div className="grid grid-cols-3">
            <div className="flex flex-col gap-1 px-2 ">
                <img src={iphone} alt="iphone" className="h-44 max-sm:h-24 mix-blend-darken rounded-xl shadow-xl object-cover" />
                <span className="line-clamp-1 max-sm:text-xs">Apple iPhone 16 Pro Max (1 TB) - White Titanium. Apple Intelligence.</span>
                <span className="line-clamp-1 max-sm:text-xs">$1119.30</span>

            </div>
            <div className="flex flex-col gap-1 px-2 ">
                <img src={cloth} alt="iphone" className="h-44 max-sm:h-24 mix-blend-darken rounded-xl shadow-xl object-cover" />
                <span className="line-clamp-1 max-sm:text-xs">Apple iPhone 16 Pro Max (1 TB) - White Titanium. Apple Intelligence.</span>
                <span className="line-clamp-1 max-sm:text-xs">$1119.30</span>

            </div>
            <div className="flex flex-col gap-1 px-2 ">
                <img src={cloth} alt="iphone" className="h-44 max-sm:h-24 mix-blend-darken rounded-xl shadow-xl object-cover" />
                <span className="line-clamp-1 max-sm:text-xs">Apple iPhone 16 Pro Max (1 TB) - White Titanium. Apple Intelligence.</span>
                <span className="line-clamp-1 max-sm:text-xs">$1119.30</span>

            </div>
            
        </div>
        </div>
        <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
            <img src={logo_brand} alt="logo_brand" className="w-16 h-16  max-sm:w-12 max-sm:h-12 mix-blend-darken" />
            <div className="flex flex-col max-sm:gap-2">
               <span className="text-lg  max-sm:text-xs font-semibold text-black"> Tinnn STORE</span>
               <span className="text-lg  max-sm:text-xs font-semibold text-black">20Người đã follow</span>

            </div>
            </div>
            <div className="w-32 max-sm:h-6 max-sm:w-28 h-8 flex justify-center items-center rounded-full bg-[#fdf6ec] border-[#fcbd71] border cursor-pointer" onClick={() => navigate("/detail-store")}>
                <span className="text-[#f90] max-sm:text-xs">Dạo cửa hàng</span>
            </div>
        </div>
        <div className="grid grid-cols-3">
            <div className="flex flex-col gap-1 px-2 ">
                <img src={iphone} alt="iphone" className="h-44 max-sm:h-24 mix-blend-darken rounded-xl shadow-xl object-cover" />
                <span className="line-clamp-1 max-sm:text-xs">Apple iPhone 16 Pro Max (1 TB) - White Titanium. Apple Intelligence.</span>
                <span className="line-clamp-1 max-sm:text-xs">$1119.30</span>

            </div>
            <div className="flex flex-col gap-1 px-2 ">
                <img src={cloth} alt="iphone" className="h-44 max-sm:h-24 mix-blend-darken rounded-xl shadow-xl object-cover" />
                <span className="line-clamp-1 max-sm:text-xs">Apple iPhone 16 Pro Max (1 TB) - White Titanium. Apple Intelligence.</span>
                <span className="line-clamp-1 max-sm:text-xs">$1119.30</span>

            </div>
            <div className="flex flex-col gap-1 px-2 ">
                <img src={cloth} alt="iphone" className="h-44 max-sm:h-24 mix-blend-darken rounded-xl shadow-xl object-cover" />
                <span className="line-clamp-1 max-sm:text-xs">Apple iPhone 16 Pro Max (1 TB) - White Titanium. Apple Intelligence.</span>
                <span className="line-clamp-1 max-sm:text-xs">$1119.30</span>

            </div>
            
        </div>
        </div>
    </div>
    </div>
  )
}

export default Store