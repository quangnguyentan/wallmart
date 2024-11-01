import { Player,BigPlayButton, ControlBar, ReplayControl, LoadingSpinner, VolumeMenuButton  } from 'video-react';
import 'video-react/dist/video-react.css'; // Đảm bảo import CSS của video-react
import mochi from "../assets/mochi.jpg"
import play from "../assets/play.webp"
import Hls from 'hls.js';

import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"
import { useEffect, useRef } from 'react';
import { useTheme } from './theme-provider';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const VideoCustom = ({match, home}) => {
  const {  theme } = useTheme();
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current.video.video
    const hls = new Hls();

    if (Hls.isSupported() && video) {
      hls.loadSource('http://10407fbb909.vws.vegacdn.vn/live/_definst_/stream_9_10b2112d/playlist.m3u8');
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play();
      });
  }

    return () => {
        hls.destroy();
    };
}, []);
const handleVideoClick = () => {
  setShowControls(true);
  setTimeout(() => {
      setShowControls(false);
  }, 3000); // 3 giây
};
  return (
    <div className={match ? 'max-lg:w-[800px] xl:w-[100%] w-full' : 'max-lg:w-[800px] xl:w-[1100px] w-full'}>
        <Player
        ref={videoRef} 
        width="100%"
        height="100%"
        playsInline
        muted
        poster="/assets/poster.png"
        autoPlay
        fluid
        className="relative"
    >
          <ControlBar autoHide={false} > 
              <ReplayControl seconds={10} order={2.2}  />
            </ControlBar>
            
            <BigPlayButton position="center"/>
            {home && <Link to="/match">
              <div className='absolute top-[50%] left-[50%] object-cover z-30 px-10 py-4 rounded-lg border border-yellow-500 bg-black transform translate-x-[-50%] translate-y-[-50%] opacity-50 text-yellow-400 text-[20px] font-bold cursor-pointer hover:bg-yellow-300 hover:text-white hover:opacity-100'>
                  Vào phòng live
                </div>
            </Link>} 
            <LoadingSpinner />
    </Player>
    
    {match && <>
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
      </div>}</>}
    </div>
    
  )
}

export default VideoCustom