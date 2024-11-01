import { Player,BigPlayButton, ControlBar, ReplayControl, LoadingSpinner  } from 'video-react';
import 'video-react/dist/video-react.css';
import mochi from "../assets/mochi.jpg"

import { useTheme } from '../components/theme-provider';
import ChatBox from '@/components/ChatBox';
import { ArrowBack, ArrowBackIos } from '@mui/icons-material';
import line from "@/assets/line.png"
import tv from "@/assets/tv.png"
import hd from "@/assets/hd.png"
import logo_meovang from "@/assets/logo-meovang.webp"
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"
import TabVertical from '@/components/TabVertical.match';
const MatchResponsive = ({match}) => {
const navigate = useNavigate()

const {  theme } = useTheme();
  return (
    <div className='flex items-center w-full flex-col bg-white h-screen'>
       <div className="bg-gray-700 fixed top-0 z-50 h-[60px] flex items-center px-4 gap-4 overflow-hidden w-full">
            <img src={logo_meovang} className="h-[45px]" alt="header_gif" onClick={() => {
              localStorage.setItem("page", 2)
              navigate("/")
            }} />
             <div className="flex w-full items-end gap-4 justify-end">
                <button className="w-[120px] h-[35px] bg-yellow-500 text-white font-semibold rounded-sm text-[10px]">Tải app</button>
             </div>
        </div>
    {/* <div className='w-full h-10 bg-gray-700 flex items-center px-4 justify-between' onClick={()=> window.history.back()}> 
      <ArrowBackIos color='info' />
      <div className='flex items-center'>
        <img className='w-[30px] h-[30px]' src={tv} alt="tv" />
        <img className='w-[30px] h-[30px]' src={hd} alt="hd" />
        <img className='w-[30px] h-[30px]' src={line} alt="line" />

      </div>
    </div> */}
    <div className={match ? 'w-full pt-14' : 'w-full pt-14'}>
        <Player
        width="100%"
        height="100%"
        playsInline
        poster="/assets/poster.png"
        // autoPlay={true}
        fluid={true}

      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >
          <ControlBar autoHide={true}   > 
              <ReplayControl seconds={10} order={2.2}  />
            </ControlBar>
            <BigPlayButton position="center" />
            <LoadingSpinner />
    </Player>
     <>
     {theme === "light" ? <div className='bg-gray-50 w-full flex items-center gap-4 p-4'>
      
      <Avatar className="w-11 ">
        <AvatarImage src={mochi} alt="mochi"   />
      </Avatar>
        <div className='flex flex-col justify-center gap-1'>
          <span>CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
        <div className='flex items-center gap-4'>
          <span className='text-sm text-gray-600'>Mochi</span>
          <span className='text-sm text-gray-600'>9832 người theo dõi</span>
        </div>
        </div>
      </div> : <div className='bg-white w-full flex items-center gap-4 p-4'>
      <Avatar className="w-11">
        <AvatarImage src={mochi} alt="mochi"   />
      </Avatar>
        <div className='flex flex-col justify-center gap-1'>
          <span className='text-black'>CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
        <div className='flex items-center gap-4'>
          <span className='text-sm text-gray-500'>Mochi</span>
          <span className='text-sm text-gray-500'>9832 người theo dõi</span>
        </div>
        </div>
      </div>}
     </>
    <TabVertical/>
    {/* {match && <>
      {theme === "light" ? <div className='bg-gray-50 w-full flex items-center gap-4 p-4'>
      
      <Avatar className="w-11 ">
        <AvatarImage src={mochi} alt="mochi"   />
      </Avatar>
        <div className='flex flex-col justify-center gap-1'>
          <span>CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
        <div className='flex items-center gap-4'>
          <span className='text-sm text-gray-600'>Mochi</span>
          <span className='text-sm text-gray-600'>9832 người theo dõi</span>
        </div>
        </div>
      </div> : <div className='bg-[#16181a] w-full flex items-center gap-4 p-4'>
      <Avatar className="w-11 ">
        <AvatarImage src={mochi} alt="mochi"   />
      </Avatar>
        <div className='flex flex-col justify-center gap-1'>
          <span>CSyD Dorados de Sinaloa VS Tlaxcala FC</span>
        <div className='flex items-center gap-4'>
          <span className='text-sm text-gray-400'>Mochi</span>
          <span className='text-sm text-gray-400'>9832 người theo dõi</span>
        </div>
        </div>
      </div>}</>} */}
    </div>
    </div>
    
  )
}

export default MatchResponsive