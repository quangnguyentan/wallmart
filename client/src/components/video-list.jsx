import { Link } from "react-router-dom"
import demo from "../assets/demo_list.jpg"
import mochi from "../assets/mochi.jpg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "video-react/dist/video-react.css";
import nga from "../assets/nga.png"
import japan from "../assets/japan.jpg"
import none2 from "../assets/none2.webp"
import living from "../assets/living.webp"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import path from "@/utils/path"
import { useTheme } from "./theme-provider";
import { useState } from "react";

const VideoList = ({match}) => {
  const {theme} = useTheme()
  const [activeTab, setActiveTab] = useState('foryou');
  const handleClick = (value) => {
    setActiveTab(value)
    
  }
  return (
    <div className="w-full  border-none ">
    <Tabs defaultValue="foryou" className="w-full h-full ">
      <div className="w-full flex flex-col px-2 outline-none ">
      <TabsList className="w-1/4 flex justify-start px-4">
            <TabsTrigger 
                className={`text-sm font-semibold px-6 ${activeTab === 'foryou' ? `text-white background-custom ` : 'text-gray-500'}`} 
                value="foryou" 
                onClick={() => handleClick("foryou")}
            >
                Tất cả
            </TabsTrigger>
            <TabsTrigger 
                className={`text-sm font-semibold px-6 ${activeTab === 'footbal' ? 'background-custom  text-white' : 'text-gray-500'}`} 
                value="footbal"
                onClick={() => handleClick("footbal")}
            >
                Đang live
            </TabsTrigger>
            <TabsTrigger 
                className={`text-sm font-semibold px-6 ${activeTab === 'basketball' ? 'background-custom  text-white' : 'text-gray-500'}`} 
                value="basketball"  
                onClick={() => handleClick("basketball")}
            >
                Hôm nay
            </TabsTrigger>
            <TabsTrigger 
                className={`text-sm font-semibold px-6 ${activeTab === 'game' ? 'background-custom  text-white' : 'text-gray-500'}`} 
                value="game" 
                onClick={() => handleClick("game")}
            >
                Ngày mai
            </TabsTrigger>
        </TabsList>
      </div>
      <div className="">
      <TabsContent value="foryou">
      <div className={match ? "w-full" : "w-11/12 pr-16"}>
       <div className={match ? "grid grid-cols-5 gap-4" : "grid grid-cols-4 gap-y-2 gap-x-8 px-6"}>
          {theme === "light" ? <>
           <Link to={`/${path.MATCH}`}>
           <div className="w-[350px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-4 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[12px] h-[12px]" />
                  <span className="text-white text-[12px]">Live</span>
                </div>
                
              </div>
              <div className="flex items-center justify-between px-12">
                  <div className="flex flex-col gap-2 items-center">
                    <img src={japan} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold">JPN League2</span>
                  </div>
                  <span className="text-3xl font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center">
                    <img src={nga} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold">Nga FNL2</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-6 w-6">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-xs">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-xs text-gray-500">11.22K</span>
                <span className="text-xs text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
          </div></Link>
          <Link to={`/${path.MATCH}`}>
           <div className="w-[350px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-4 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[12px] h-[12px]" />
                  <span className="text-white text-[12px]">Live</span>
                </div>
                
              </div>
              <div className="flex items-center justify-between px-12">
                  <div className="flex flex-col gap-2 items-center">
                    <img src={japan} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold">JPN League2</span>
                  </div>
                  <span className="text-3xl font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center">
                    <img src={nga} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold">Nga FNL2</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-6 w-6">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-xs">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-xs text-gray-500">11.22K</span>
                <span className="text-xs text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
          </div></Link>
          <Link to={`/${path.MATCH}`}>
           <div className="w-[350px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-4 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[12px] h-[12px]" />
                  <span className="text-white text-[12px]">Live</span>
                </div>
                
              </div>
              <div className="flex items-center justify-between px-12">
                  <div className="flex flex-col gap-2 items-center">
                    <img src={japan} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold">JPN League2</span>
                  </div>
                  <span className="text-3xl font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center">
                    <img src={nga} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold">Nga FNL2</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-6 w-6">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-xs">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-xs text-gray-500">11.22K</span>
                <span className="text-xs text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
          </div></Link>
          <Link to={`/${path.MATCH}`}>
           <div className="w-[350px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-4 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[12px] h-[12px]" />
                  <span className="text-white text-[12px]">Live</span>
                </div>
                
              </div>
              <div className="flex items-center justify-between px-12">
                  <div className="flex flex-col gap-2 items-center">
                    <img src={japan} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold">JPN League2</span>
                  </div>
                  <span className="text-3xl font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center">
                    <img src={nga} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold">Nga FNL2</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-6 w-6">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-xs">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-xs text-gray-500">11.22K</span>
                <span className="text-xs text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
          </div></Link>
          <Link to={`/${path.MATCH}`}>
           <div className="w-[350px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-4 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[12px] h-[12px]" />
                  <span className="text-white text-[12px]">Live</span>
                </div>
                
              </div>
              <div className="flex items-center justify-between px-12">
                  <div className="flex flex-col gap-2 items-center">
                    <img src={japan} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold">JPN League2</span>
                  </div>
                  <span className="text-3xl font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center">
                    <img src={nga} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold">Nga FNL2</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-6 w-6">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-xs">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-xs text-gray-500">11.22K</span>
                <span className="text-xs text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
          </div></Link>
          
          
          </> : <>
          <Link to={`/${path.MATCH}`}>
          <div className="w-[350px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-4 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-4">
              <div className="flex items-center justify-between ">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[12px] h-[12px]" />
                  <span className="text-white text-[12px]">Live</span>
                </div>
                
              </div>
              <div className="flex items-center justify-between  px-12">
                  <div className="flex flex-col gap-2 items-center">
                    <img src={japan} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold text-black">JPN League2</span>
                  </div>
                  <span className="text-3xl font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center">
                    <img src={nga} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold text-black">Nga FNL2</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-6 w-6">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-xs text-black">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-xs text-gray-500">11.22K</span>
                <span className="text-xs text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
          </div>
          </Link>
          <Link to={`/${path.MATCH}`}>
          <div className="w-[350px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-4 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-4">
              <div className="flex items-center justify-between ">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[12px] h-[12px]" />
                  <span className="text-white text-[12px]">Live</span>
                </div>
                
              </div>
              <div className="flex items-center justify-between  px-12">
                  <div className="flex flex-col gap-2 items-center">
                    <img src={japan} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold text-black">JPN League2</span>
                  </div>
                  <span className="text-3xl font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center">
                    <img src={nga} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold text-black">Nga FNL2</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-6 w-6">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-xs text-black">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-xs text-gray-500">11.22K</span>
                <span className="text-xs text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
          </div>
          </Link>
          <Link to={`/${path.MATCH}`}>
          <div className="w-[350px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-4 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-4">
              <div className="flex items-center justify-between ">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[12px] h-[12px]" />
                  <span className="text-white text-[12px]">Live</span>
                </div>
                
              </div>
              <div className="flex items-center justify-between  px-12">
                  <div className="flex flex-col gap-2 items-center">
                    <img src={japan} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold text-black">JPN League2</span>
                  </div>
                  <span className="text-3xl font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center">
                    <img src={nga} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold text-black">Nga FNL2</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-6 w-6">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-xs text-black">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-xs text-gray-500">11.22K</span>
                <span className="text-xs text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
          </div>
          </Link>
          <Link to={`/${path.MATCH}`}>
          <div className="w-[350px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-4 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-4">
              <div className="flex items-center justify-between ">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[12px] h-[12px]" />
                  <span className="text-white text-[12px]">Live</span>
                </div>
                
              </div>
              <div className="flex items-center justify-between  px-12">
                  <div className="flex flex-col gap-2 items-center">
                    <img src={japan} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold text-black">JPN League2</span>
                  </div>
                  <span className="text-3xl font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center">
                    <img src={nga} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold text-black">Nga FNL2</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-6 w-6">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-xs text-black">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-xs text-gray-500">11.22K</span>
                <span className="text-xs text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
          </div>
          </Link>
          <Link to={`/${path.MATCH}`}>
          <div className="w-[350px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-4 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-4">
              <div className="flex items-center justify-between ">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[12px] h-[12px]" />
                  <span className="text-white text-[12px]">Live</span>
                </div>
                
              </div>
              <div className="flex items-center justify-between  px-12">
                  <div className="flex flex-col gap-2 items-center">
                    <img src={japan} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold text-black">JPN League2</span>
                  </div>
                  <span className="text-3xl font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center">
                    <img src={nga} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold text-black">Nga FNL2</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-6 w-6">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-xs text-black">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-xs text-gray-500">11.22K</span>
                <span className="text-xs text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
          </div>
          </Link>
          <Link to={`/${path.MATCH}`}>
          <div className="w-[350px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out bg-[#e8f0c6] p-4 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-4">
              <div className="flex items-center justify-between ">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[12px] h-[12px]" />
                  <span className="text-white text-[12px]">Live</span>
                </div>
                
              </div>
              <div className="flex items-center justify-between  px-12">
                  <div className="flex flex-col gap-2 items-center">
                    <img src={japan} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold text-black">JPN League2</span>
                  </div>
                  <span className="text-3xl font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center">
                    <img src={nga} alt="nga" className="w-[60px] h-[60px] object-contain rounded-full" />
                    <span className="text-xs font-semibold text-black">Nga FNL2</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-6 w-6">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-xs text-black">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-xs text-gray-500">11.22K</span>
                <span className="text-xs text-gray-500">Người xem</span>
              </div>
              </div>
              </div>
          </div>
          </Link>

         </>}
       </div>
        
    </div>
      </TabsContent>
      <TabsContent value="footbal">
        <div className="w-full flex items-center justify-center flex-col">
          <img src={none2} alt="none2" />
          <span className="text-gray-400 font-semibold">Anh em chờ trận nhé!</span>
        </div>
      </TabsContent>
      <TabsContent value="basketball"> <div className="w-full flex items-center justify-center flex-col">
          <img src={none2} alt="none2" />
          <span className="text-gray-400 font-semibold">Anh em chờ trận nhé!</span>
        </div></TabsContent>
      <TabsContent value="game"> <div className="w-full flex items-center justify-center flex-col">
          <img src={none2} alt="none2" />
          <span className="text-gray-400 font-semibold">Anh em chờ trận nhé!</span>
        </div></TabsContent>

      </div>
      
      
    </Tabs>
  </div>


    ///sort
    
  )
}

export default VideoList