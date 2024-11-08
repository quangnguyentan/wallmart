import logo_login from "@/assets/logo_login.png"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useMediaQuery } from "@mui/material";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react";
const Login = () => {
    const [activeTab, setActiveTab] = useState('phone');
    const [isLogin, setIsLogin] = useState(true)
    const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
        {isLogin ? <div className="flex flex-col gap-12 max-sm:gap-4 w-full h-screen px-4 ">
        <div className="flex items-center w-full gap-32">
        <KeyboardArrowLeftIcon
             sx={{ fontSize  : `${isMobile ? "40px" : "40px"}`}}
            className="text-gray-400 cursor-pointer"
            onClick={() => window.history.back()}
          />
          <h3 className="text-gray-500 text-center flex items-center justify-start w-full max-sm:text-base text-lg">Đăng nhập</h3>     
        </div>
        <img src={logo_login} alt="logo_login" className="w-[73px] h-[73px] max-sm:w-10 max-sm:h-10" />
        <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold max-sm:text-lg">Chào mừng đăng nhập</h3>
            <h3 className="text-3xl font-bold max-sm:text-lg">Wallmart</h3>
        </div>
        <Tabs defaultValue="phone" className="w-[450px] max-sm:w-[350px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="phone"  className={`text-lg max-sm:text-base ${activeTab === "phone" ? " custom-switch" : ""}`} onClick={() => setActiveTab("phone")}>Đăng nhập di động</TabsTrigger>
        <TabsTrigger value="email" className={`text-lg max-sm:text-base ${activeTab === "email" ? " custom-switch" : ""}`} onClick={() => setActiveTab("email")}>Đăng nhập hộp thư</TabsTrigger>
      </TabsList>
      <TabsContent value="phone" className="w-[450px] max-sm:w-[350px]">
       <div className="flex flex-col gap-10 py-8">
       <div className="flex flex-col gap-4">
       <input type="text" className="h-12 px-4 shadow-sm outline-none font-medium placeholder:text-gray-white max-sm:placeholder:text-xs" placeholder="Vui lòng nhập số điện thoại" />
       <input type="text" className="h-12 px-4 shadow-sm outline-none font-medium placeholder:text-gray-white max-sm:placeholder:text-xs" placeholder="Vui lòng nhập mật khẩu" />
       </div>
        <div className="flex gap-2 items-center max-sm:text-xs max-sm:gap-1">
            <input type="radio" className="w-4 h-4 max-sm:w-2 max-sm:h-2 cursor-pointer"/>
            <span className="break-words text-gray-500">
            Tôi đã đọc và đồng ý .Chính sách bảo mật người dùng
            </span>
        </div>
        <div className="px-8 w-full">
        <button className="w-full py-4 px-4 bg-red-500 rounded-full text-white text-xl max-sm:text-base max-sm:py-2 ">Đăng nhập</button>
        </div>
        <h3 className="text-gray-500 text-xl cursor-pointer max-sm:text-sm hover:text-red-500 " onClick={() => setIsLogin(!isLogin)}>Đăng kí người dùng mới</h3>
       </div>
      </TabsContent>
      <TabsContent value="email" className="w-[450px] max-sm:w-[350px]">
      <div className="flex flex-col gap-10 py-8">
       <div className="flex flex-col gap-4">
       <input type="text" className="h-12 px-4 shadow-sm outline-none font-medium placeholder:text-gray-white max-sm:placeholder:text-xs" placeholder="Vui lòng nhập email" />
       <input type="text" className="h-12 px-4 shadow-sm outline-none font-medium placeholder:text-gray-white max-sm:placeholder:text-xs" placeholder="Vui lòng nhập mật khẩu" />
       </div>
        <div className="flex gap-2 items-center max-sm:text-xs max-sm:gap-1">
            <input type="radio" className="w-4 h-4 max-sm:w-2 max-sm:h-2 cursor-pointer"/>
            <span className="break-words text-gray-500">
            Tôi đã đọc và đồng ý .Chính sách bảo mật người dùng
            </span>
        </div>
        <div className="px-8 w-full">
        <button className="w-full py-4 px-4 bg-red-500 rounded-full text-white text-xl max-sm:text-base max-sm:py-2 ">Đăng nhập</button>
        </div>
        <h3 className="text-gray-500 text-xl cursor-pointer max-sm:text-sm hover:text-red-500 " onClick={() => setIsLogin(!isLogin)}>Đăng kí người dùng mới</h3>
       </div>
      </TabsContent>
    </Tabs>
    </div> : <div className="flex flex-col gap-12  w-full h-screen px-4">
        <div className="flex items-center w-full">
        <KeyboardArrowLeftIcon
            sx={{ fontSize  : `${isMobile ? "40px" : "40px"}`}}
            className="text-gray-400"
            onClick={() => window.history.back()}
          />
          <h3 className="text-gray-500 text-center flex items-center justify-center w-full max-sm:text-base text-lg">Đăng ký</h3>     
        </div>
        <img src={logo_login} alt="logo_login" className="w-[73px] h-[73px] max-sm:w-10 max-sm:h-10" />
        <div className="flex flex-col gap-4">
            <h3 className="text-3xl max-sm:text-lg font-bold">Chào mừng đăng ký</h3>
            <h3 className="text-3xl max-sm:text-lg font-bold">Wallmart</h3>
        </div>
        <Tabs defaultValue="phone" className="w-[450px] max-sm:w-[350px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="phone"  className={`text-lg max-sm:text-base ${activeTab === "phone" ? " custom-switch" : ""}`} onClick={() => setActiveTab("phone")}>Đăng ký di động</TabsTrigger>
        <TabsTrigger value="email" className={`text-lg max-sm:text-base ${activeTab === "email" ? " custom-switch" : ""}`} onClick={() => setActiveTab("email")}>Đăng ký hộp thư</TabsTrigger>
      </TabsList>
      <TabsContent value="phone" className="w-[450px] max-sm:w-[350px]">
       <div className="flex flex-col gap-10 py-8">
       <div className="flex flex-col gap-4">
       <input type="text" className="h-12 max-sm:placeholder:text-xs px-4 shadow-sm outline-none font-medium placeholder:text-gray-white" placeholder="Vui lòng nhập số điện thoại" />
       <input type="text" className="h-12 max-sm:placeholder:text-xs px-4 shadow-sm outline-none font-medium placeholder:text-gray-white" placeholder="Vui lòng nhập mật khẩu" />
       </div>
        <div className="flex gap-2 items-center max-sm:text-xs">
            <input type="radio" className="w-4 h-4 cursor-pointer max-sm:w-2 max-sm:h-2"/>
            <span className="break-words text-gray-500">
            Tôi đã đọc và đồng ý .Chính sách bảo mật người dùng
            </span>
        </div>
        <div className="px-8 w-full">
         <button className="w-full py-4 px-4 max-sm:py-2 max-sm:text-xs bg-red-500 rounded-full text-white text-xl">Đăng ký ngay</button>
        </div>
        <h3 className="text-gray-500 text-xl cursor-pointer max-sm:text-sm hover:text-red-500" onClick={() => setIsLogin(!isLogin)}>Đăng nhập ngay</h3>
       </div>
      </TabsContent>
      <TabsContent value="email" className="w-[450px] max-sm:w-[350px]">
      <div className="flex flex-col gap-10 py-8">
       <div className="flex flex-col gap-4">
       <input type="text" className="h-12 max-sm:placeholder:text-xs px-4 shadow-sm outline-none font-medium placeholder:text-gray-white" placeholder="Vui lòng nhập email" />
       <input type="text" className="h-12 max-sm:placeholder:text-xs px-4 shadow-sm outline-none font-medium placeholder:text-gray-white" placeholder="Vui lòng nhập mật khẩu" />
       </div>
        <div className="flex gap-2 items-center max-sm:text-xs">
            <input type="radio" className="w-4 h-4 cursor-pointer max-sm:w-2 max-sm:h-2"/>
            <span className="break-words text-gray-500">
            Tôi đã đọc và đồng ý .Chính sách bảo mật người dùng
            </span>
        </div>
        <div className="px-8 w-full">
         <button className="w-full py-4 px-4 max-sm:py-2 max-sm:text-xs bg-red-500 rounded-full text-white text-xl">Đăng ký ngay</button>
        </div>
        <h3 className="text-gray-500 text-xl cursor-pointer max-sm:text-sm hover:text-red-500" onClick={() => setIsLogin(!isLogin)}>Đăng nhập ngay</h3>
       </div>
      </TabsContent>
    </Tabs>
    </div>}
    </>
  )
}

export default Login