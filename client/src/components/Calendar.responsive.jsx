import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "video-react/dist/video-react.css";
import SlickSlider from "./SlickSlider";
import Card from "./Card.responsive";
import football from "@/assets/football.gif"
import star from "@/assets/star.png"
import nathan from "@/assets/nathan.png"
import trangsao from "@/assets/trangsao.png"
import none2 from "../assets/none2.webp"
import logo from "@/assets/1.png"
import logo1 from "@/assets/2.png"
import logo2 from "@/assets/3.png"
import logo3 from "@/assets/4.png"

import logo_meovang from "@/assets/logo-meovang.webp"
import { useState } from "react";

const CalendarReponsive = () => {
  const [activeTab, setActiveTab] = useState('foryou');
  const handleClick = (value) => {
    setActiveTab(value)
    
  }
  return (
    <>
    <div className="bg-black fixed top-0 z-50 h-[60px] flex items-center px-4 gap-4 overflow-hidden w-full">
            <img src={logo_meovang} className="h-[45px]" alt="header_gif" />
             <div className="flex w-full items-end gap-4 justify-end">
                <button className="w-[120px] h-[35px] bg-yellow-500 text-white font-semibold rounded-sm text-[10px]">Tải app</button>
             </div>
        </div>
    <div className="w-full h-screen overflow-scroll overflow-x-hidden border-none">
    <Tabs defaultValue="foryou" className="w-full h-full ">
      <div className="w-full flex flex-col fixed top-12 z-40 py-4 px-2 bg-gray-50 outline-none overflow-hidden ">
        <TabsList className="w-full flex justify-start overflow-x-scroll scrollbar-hide gap-4">
        <TabsTrigger 
                className={`text-sm font-semibold  ${activeTab === 'foryou' ? `text-white background-custom ` : 'text-gray-500'}`} 
                value="foryou" 
                onClick={() => handleClick("foryou")}
            >
                Tất cả
            </TabsTrigger>
            <TabsTrigger 
                className={`text-sm font-semibold  ${activeTab === 'footbal' ? 'background-custom  text-white' : 'text-gray-500'}`} 
                value="footbal"
                onClick={() => handleClick("footbal")}
            >
                Bóng đá
            </TabsTrigger>
            <TabsTrigger 
                className={`text-sm font-semibold ${activeTab === 'basketball' ? 'background-custom  text-white' : 'text-gray-500'}`} 
                value="basketball"  
                onClick={() => handleClick("basketball")}
            >
                Poker
            </TabsTrigger>
        
        
        </TabsList>
      </div>
      <div className="pt-28">
      <TabsContent value="foryou">
       <div className="px-4 flex flex-col gap-4">
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Trang chủSao</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="pb-24 pt-4 flex w-full items-center justify-center">
          <h3 className="text-sm text-center ">Đang cập nhập thêm lịch mới</h3>
        </div>
       </div>
      </TabsContent>
      </div>
      <TabsContent value="footbal">
      <div className="px-4 flex flex-col gap-4">
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Golden State </span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo1} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo2} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Turks Caicos</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Golden State </span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo1} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo2} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Turks Caicos</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Golden State </span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo1} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo2} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Turks Caicos</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Golden State </span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo1} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo2} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Turks Caicos</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Golden State </span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo1} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo2} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Turks Caicos</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Golden State </span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo1} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo2} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Turks Caicos</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Golden State </span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo1} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo2} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Turks Caicos</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Golden State </span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo1} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo2} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Turks Caicos</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Golden State </span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo1} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo2} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">Turks Caicos</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>

          <div className="pb-24 pt-4 flex w-full items-center justify-center">
          <h3 className="text-sm text-center ">Đang cập nhập thêm lịch mới</h3>
        </div>
       </div>
       
      </TabsContent>
      <TabsContent value="basketball"> <div className="px-4 flex flex-col gap-4">
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Mexico</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo3} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">USA</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Mexico</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo3} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">USA</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Mexico</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo3} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">USA</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Mexico</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo3} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">USA</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Mexico</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo3} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">USA</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Mexico</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo3} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">USA</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Mexico</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo3} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">USA</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Mexico</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo3} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">USA</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          <div className="w-full rounded-lg bg-gray-100 flex flex-col py-4 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-300 px-4">
                  <div className="flex items-center gap-1 flex-4">
                  <img className="w-[15px] h-[15px]" src={football} alt="football" />
                  <span className="text-xs text-gray-500">
                    22:00
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1 w-10">
                    GHA Phân khu 1
                  </span>
                </div>    
                  <div className="flex-4  flex items-end justify-center">
                  <span className=" text-red-500 font-semibold text-sm">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1">Mexico</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={logo} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={logo3} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1">USA</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span>
                    Hiệp 1: 1-1
                  </span>
                  <span>
                    Hiệp 2: 2-2
                  </span>
                </div>
              </div>
          </div>
          
        
          <div className="pb-24 pt-4 flex w-full items-center justify-center">
          <h3 className="text-sm text-center ">Đang cập nhập thêm lịch mới</h3>
        </div>
       </div></TabsContent>
     
    </Tabs>
  </div></>
  )
}

export default CalendarReponsive