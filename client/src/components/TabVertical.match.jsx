import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "video-react/dist/video-react.css";
import football from "@/assets/football.gif"
import star from "@/assets/star.png"
import nathan from "@/assets/nathan.png"
import trangsao from "@/assets/trangsao.png"
import none2 from "../assets/none2.webp"
import { useState } from "react";
import ChatBox from "./ChatBox";
import mochi from "../assets/mochi.jpg"
import HomeIcon from '@mui/icons-material/Home';
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"
import { Link, useNavigate } from "react-router-dom";
import CalendarReponsive from "./Calendar.responsive";
const TabVertical = () => {
const [activeTab, setActiveTab] = useState('foryou');
  const handleClick = (value) => {
    setActiveTab(value)
    
  }
  const navigate = useNavigate()
  return (
    <div><div className="w-full overflow-x-hidden border-none">
    <Tabs defaultValue="foryou" className="w-full h-full ">
      <div className="w-full flex flex-col z-40 py-4 px-2 bg-gray-50 outline-none overflow-hidden ">
        <TabsList className="w-full flex justify-start overflow-x-scroll scrollbar-hide">
        <TabsTrigger 
                className={`text-[10px] font-semibold text-black `} 
                
                onClick={() => {
                    localStorage.setItem("page", 2)
                    navigate("/")
                }}
            >
               <div className="flex items-center justify-center gap-1">
                    <span className="font-bold">Trang chủ</span>
                    {/* <HomeIcon fontSize="small"/> */}
               </div>
            </TabsTrigger>
        <TabsTrigger 
                className={`text-[10px] font-semibold  ${activeTab === 'foryou' ? `text-white background-custom ` : 'text-gray-500'}`} 
                value="foryou" 
                onClick={() => handleClick("foryou")}
            >
                Trò chuyện
            </TabsTrigger>
            <TabsTrigger 
                className={`text-[10px] font-semibold  ${activeTab === 'footbal' ? 'background-custom  text-white' : 'text-gray-500'}`} 
                value="footbal"
                onClick={() => handleClick("footbal")}
            >
               Follow BLV
            </TabsTrigger>
           
            <TabsTrigger 
                className={`text-[10px] font-semibold  ${activeTab === 'game' ? 'background-custom  text-white' : 'text-gray-500'}`} 
                value="game" 
                onClick={() => handleClick("game")}
            >
                Lịch trình
            </TabsTrigger>
            <TabsTrigger className={`mx-2 text-sm background-info `} value="voleyball"  onClick={() => {
                    localStorage.setItem("page", 2)
                    navigate("/")
                }}>
              Phản hồi
            </TabsTrigger>
        </TabsList>
      </div>
      <div >
      <TabsContent value="foryou">
        <ChatBox phone/>
      </TabsContent>
      </div>
      <TabsContent value="footbal">
      <div className="w-full flex  flex-col px-4 py-2 gap-4 ">
            <h3 className="text-black font-semibold text-lg">NBA: Los Angeles Clippers vs Dallas Mavericks</h3>
          <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar className="w-11 ">
                        <AvatarImage src={mochi} alt="mochi"   />
                    </Avatar>
                    <div className="flex flex-col gap-2">
                        <span className="text-black text-sm font-semibold">BLV MOCHI</span>
                        <span className="text-black text-xs">WAT IT DO BABE ! ALE HÚP nào ae</span>
                    </div>
                </div>
                <div className="bg-[#ffc71c] w-16 h-8 flex items-center justify-center rounded-sm font-semibold text-sm">Follow</div>
          </div>
        </div>
       
        
      </TabsContent>
      
      <TabsContent value="game"> 
      <div className="px-4 flex flex-col gap-4 h-[400px] overflow-y-scroll bg-white">
      <Link to="/match"> 
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
                  <span className=" text-red-500 font-semibold text-sm ">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1 text-black">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl text-black">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1 text-black">Trang chủSao</span>
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
          
      </Link>
      <Link to="/match"> 
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
                  <span className=" text-red-500 font-semibold text-sm ">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1 text-black">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl text-black">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1 text-black">Trang chủSao</span>
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
          
      </Link>
      <Link to="/match"> 
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
                  <span className=" text-red-500 font-semibold text-sm ">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1 text-black">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl text-black">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1 text-black">Trang chủSao</span>
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
          
      </Link>
      <Link to="/match"> 
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
                  <span className=" text-red-500 font-semibold text-sm ">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1 text-black">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl text-black">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1 text-black">Trang chủSao</span>
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
          
      </Link>
      <Link to="/match"> 
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
                  <span className=" text-red-500 font-semibold text-sm ">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1 text-black">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl text-black">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1 text-black">Trang chủSao</span>
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
          
      </Link>
      <Link to="/match"> 
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
                  <span className=" text-red-500 font-semibold text-sm ">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1 text-black">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl text-black">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1 text-black">Trang chủSao</span>
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
          
      </Link>
      <Link to="/match"> 
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
                  <span className=" text-red-500 font-semibold text-sm ">Trực tiếp 71'</span>
                  </div>
                  <div className="flex-4 flex items-end justify-end">
                    <img className="w-[30px] h-[30px] brightness-0" src={star} alt="star" />
                  </div>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 ">
                    <span className="text-[13px] line-clamp-1 text-black">Na Thần FC</span>
                    <img className="w-[15px] h-[15px] rounded-full" src={nathan} alt="nathan" />
                  </div>
                  <span style={{ fontFamily : "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} className="text-2xl text-black">1-1</span>
                  <div className="flex items-center gap-1">
                    <img className="w-[15px] h-[15px] rounded-full" src={trangsao} alt="trangsao" />
                    <span className="text-[13px] line-clamp-1 text-black">Trang chủSao</span>
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
          
      </Link>
      
       </div>
     
      </TabsContent>
        
    </Tabs>
  </div></div>
  )
}

export default TabVertical