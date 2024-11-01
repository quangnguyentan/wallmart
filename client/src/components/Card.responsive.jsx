import { Link } from "react-router-dom"
import demo from "../assets/demo_list.jpg"
import mochi from "../assets/mochi.jpg"
import mochi1 from "../assets/mochi1.jpg"
import mochi2 from "../assets/mochi2.png"


import host from "../assets/host.gif"
import hot_live from "../assets/hot-live.webp"
import living from "../assets/living.webp"

import "video-react/dist/video-react.css";
import nga from "../assets/nga.png"
import japan from "../assets/japan.jpg"
import none2 from "../assets/none2.webp"
import HomeIcon from '@mui/icons-material/Home';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import path from "@/utils/path"
import { useMediaQuery } from "@mui/material"
import { useState } from "react"
import logo from "@/assets/1.png"
import logo1 from "@/assets/2.png"
import logo2 from "@/assets/3.png"
import logo3 from "@/assets/4.png"
const Card = ({match, phone, football, poker, all}) => {
  const isMobile = useMediaQuery('(max-width:600px)');
 
  return (
   <>
    {isMobile &&  <div > 
     {football && <>
      {phone ?  <div className={match ? "w-full bg-white" : "w-full px-4 bg-white"}>
        {/* <p className="text-xl font-semibold">Xu hướng</p> */}
        <img src={hot_live} alt="hot_live" className="w-[183px] h-[47px]" />
       <div className={match ? "grid grid-cols-2 gap-4 py-4" : "grid grid-cols-2 gap-4 py-4"}>
       {/* <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 relative">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
                <div className="absolute flex items-center justify-between top-[45%] w-full px-1">
                  <span className="text-white font-semibold text-xs">Bé kim</span>
                  <img src={host} alt="host" className="w-[47px] h-[17px]" />
                </div>
              <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <span className="line-clamp-2">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
                  <div className="flex items-center gap-2">
                    <HomeIcon/>
                    <span className="text-sm text-gray-500">11.22K</span>
                  
                </div>
               </div>
             
              </div>
              </div>
              
        </div></Link> */}
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
               <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
       
        
       
        </div>
        <div className="pb-20 pt-4 flex w-full items-center justify-center">
          <h3 className="text-sm text-center text-black ">Đang cập nhập thêm video mới</h3>
        </div>
    </div> :  <div className={match ? "w-full" : "w-full px-4 "}>
        {/* <p className="text-xl font-semibold">Xu hướng</p> */}
        <img src={hot_live} alt="hot_live" className="w-[183px] h-[47px]" />
       <div className={match ? "grid grid-cols-2 gap-4 py-2" : "grid grid-cols-2 gap-1 py-4"}>
       {/* <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 relative">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
                <div className="absolute flex items-center justify-between top-[45%] w-full px-1">
                  <span className="text-white font-semibold text-xs">Bé kim</span>
                  <img src={host} alt="host" className="w-[47px] h-[17px]" />
                </div>
              <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <span className="line-clamp-2">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
                  <div className="flex items-center gap-2">
                    <HomeIcon/>
                    <span className="text-sm text-gray-500">11.22K</span>
                  
                </div>
               </div>
             
              </div>
              </div>
              
        </div></Link> */}
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={logo} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">Golden State Warriors</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={logo1} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Turks Caicos Islands</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi1} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Laura Fey</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={logo} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">Golden State Warriors</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={logo1} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Turks Caicos Islands</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi1} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Laura Fey</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={logo} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">Golden State Warriors</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={logo1} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Turks Caicos Islands</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi1} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Laura Fey</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={logo} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">Golden State Warriors</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={logo1} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Turks Caicos Islands</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi1} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Laura Fey</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={logo} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">Golden State Warriors</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={logo1} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Turks Caicos Islands</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi1} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Laura Fey</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={logo} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">Golden State Warriors</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={logo1} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Turks Caicos Islands</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi1} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Laura Fey</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={logo} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">Golden State Warriors</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={logo1} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Turks Caicos Islands</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi1} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Laura Fey</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>

    
      
      
        
       
        </div>
        <div className="pb-32 pt-4 flex w-full items-center justify-center">
          <h3 className="text-sm text-center ">Đang cập nhập thêm video mới</h3>
        </div>
    </div>} </>}
     {poker && <>
      {phone ?  <div className={match ? "w-full bg-white" : "w-full px-4 bg-white"}>
        {/* <p className="text-xl font-semibold">Xu hướng</p> */}
        <img src={hot_live} alt="hot_live" className="w-[183px] h-[47px]" />
       <div className={match ? "grid grid-cols-2 gap-4 py-4" : "grid grid-cols-2 gap-4 py-4"}>
       {/* <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 relative">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
                <div className="absolute flex items-center justify-between top-[45%] w-full px-1">
                  <span className="text-white font-semibold text-xs">Bé kim</span>
                  <img src={host} alt="host" className="w-[47px] h-[17px]" />
                </div>
              <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <span className="line-clamp-2">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
                  <div className="flex items-center gap-2">
                    <HomeIcon/>
                    <span className="text-sm text-gray-500">11.22K</span>
                  
                </div>
               </div>
             
              </div>
              </div>
              
        </div></Link> */}
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
               <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
       
        
       
        </div>
        <div className="pb-20 pt-4 flex w-full items-center justify-center">
          <h3 className="text-sm text-center text-black ">Đang cập nhập thêm video mới</h3>
        </div>
    </div> :  <div className={match ? "w-full" : "w-full px-4 "}>
        {/* <p className="text-xl font-semibold">Xu hướng</p> */}
        <img src={hot_live} alt="hot_live" className="w-[183px] h-[47px]" />
       <div className={match ? "grid grid-cols-2 gap-4 py-2" : "grid grid-cols-2 gap-1 py-4"}>
       {/* <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 relative">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
                <div className="absolute flex items-center justify-between top-[45%] w-full px-1">
                  <span className="text-white font-semibold text-xs">Bé kim</span>
                  <img src={host} alt="host" className="w-[47px] h-[17px]" />
                </div>
              <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <span className="line-clamp-2">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
                  <div className="flex items-center gap-2">
                    <HomeIcon/>
                    <span className="text-sm text-gray-500">11.22K</span>
                  
                </div>
               </div>
             
              </div>
              </div>
              
        </div></Link> */}
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={logo2} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">Mexico</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={logo3} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">USA</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi2} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mr Yap</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={logo2} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">Mexico</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={logo3} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">USA</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi2} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mr Yap</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={logo2} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">Mexico</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={logo3} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">USA</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi2} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mr Yap</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={logo2} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">Mexico</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={logo3} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">USA</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi2} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mr Yap</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={logo2} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">Mexico</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={logo3} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">USA</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi2} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mr Yap</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={logo2} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">Mexico</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={logo3} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">USA</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi2} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mr Yap</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={logo2} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">Mexico</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={logo3} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">USA</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi2} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mr Yap</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
    
      
      
        
       
        </div>
        <div className="pb-32 pt-4 flex w-full items-center justify-center">
          <h3 className="text-sm text-center ">Đang cập nhập thêm video mới</h3>
        </div>
    </div>}</>}
    {all && <>
      {phone ?  <div className={match ? "w-full bg-white" : "w-full px-4 bg-white"}>
        {/* <p className="text-xl font-semibold">Xu hướng</p> */}
        <img src={hot_live} alt="hot_live" className="w-[183px] h-[47px]" />
       <div className={match ? "grid grid-cols-2 gap-4 py-4" : "grid grid-cols-2 gap-4 py-4"}>
       {/* <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 relative">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
                <div className="absolute flex items-center justify-between top-[45%] w-full px-1">
                  <span className="text-white font-semibold text-xs">Bé kim</span>
                  <img src={host} alt="host" className="w-[47px] h-[17px]" />
                </div>
              <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <span className="line-clamp-2">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
                  <div className="flex items-center gap-2">
                    <HomeIcon/>
                    <span className="text-sm text-gray-500">11.22K</span>
                  
                </div>
               </div>
             
              </div>
              </div>
              
        </div></Link> */}
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
               <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className="  bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1 text-black">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-semibold">
                    <span className="text-black ">14-10-2024</span>
                    <span className="text-black ">04:00:00</span>
                  </div>
                </div>
                <span className="text-red-500 font-semibold text-xs ">Live</span>
                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center text-black">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center text-black">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] text-black ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
       
        
       
        </div>
        <div className="pb-20 pt-4 flex w-full items-center justify-center">
          <h3 className="text-sm text-center text-black ">Đang cập nhập thêm video mới</h3>
        </div>
    </div> :  <div className={match ? "w-full" : "w-full px-4 "}>
        {/* <p className="text-xl font-semibold">Xu hướng</p> */}
        <img src={hot_live} alt="hot_live" className="w-[183px] h-[47px]" />
       <div className={match ? "grid grid-cols-2 gap-4 py-2" : "grid grid-cols-2 gap-1 py-4"}>
       {/* <Link to={`/${path.MATCH}`}>
       <div className="cursor-pointer flex flex-col items-center gap-4 relative">
                <img src={demo} alt="demo" className="w-[278px] hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out"  />
                <div className="absolute flex items-center justify-between top-[45%] w-full px-1">
                  <span className="text-white font-semibold text-xs">Bé kim</span>
                  <img src={host} alt="host" className="w-[47px] h-[17px]" />
                </div>
              <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <span className="line-clamp-2">CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
               <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-clamp-1">Giải bóng ngoại hạng anh</span>
                  <div className="flex items-center gap-2">
                    <HomeIcon/>
                    <span className="text-sm text-gray-500">11.22K</span>
                  
                </div>
               </div>
             
              </div>
              </div>
              
        </div></Link> */}
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
    
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
    
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
    
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
    
        <Link to={`/${path.MATCH}`}>
           <div className=" bg-[#e8f0c6] p-2 cursor-pointer rounded-lg  border-yellow-500 border-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <span className="font-semibold text-xs line-clamp-1">Canadian Soccer League</span>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
                    <span>14-10-2024</span>
                    <span>04:00:00</span>
                  </div>
                </div>
                <div className="bg-[#fa3434] flex px-2 py-1 items-start gap-1 justify-center rounded-sm">
                  <img src={living} alt="living" className="w-[8px] h-[8px]" />
                  <span className="text-white text-[8px]">Live</span>
                </div>

                
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 items-center w-[70px]">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words w-full text-center">JPN League2</span>
                  </div>
                  <span className="text-sm font-semibold">
                    1 : 1
                  </span>
                  <div className="flex flex-col gap-2 items-center w-14">
                    <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <span className="text-[10px] font-semibold line-clamp-1 break-words text-center">Nga FNL2dasdsasadasass</span>
                  </div>
                  
              </div>
              <div>
              <div className="flex justify-between">
                 <div className="flex items-center gap-2">
                 <Avatar className="h-5 w-5">
                    <AvatarImage src={mochi} alt="mochi" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-[11px] ">Blv Mochi</span>
                 </div>
                  <div className="flex items-center gap-2 font-semibold">
                <span className="text-[11px] text-gray-500">11.22K</span>
              </div>
              </div>
              </div>
        </div></Link>
    
      
      
        
       
        </div>
        <div className="pb-32 pt-4 flex w-full items-center justify-center">
          <h3 className="text-sm text-center ">Đang cập nhập thêm video mới</h3>
        </div>
    </div>}
    </>}
     </div>}
   </>
  )
}

export default Card