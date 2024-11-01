import VideoCustom from "@/components/video-custom"
import LeftBar from "../components/LeftBar"
import demo from "../assets/demo.jpg"
import demo4 from "../assets/demo4.jpg"
import demo3 from "../assets/demo3.webp"
import demo6 from "../assets/demo4.webp"
import demo5 from "../assets/demo5.webp"
import demo_list from "../assets/demo_list.jpg"

import demo1 from "../assets/demo1.webp"
import demo2 from "../assets/demo2.webp"


import VideoList from "@/components/video-list"
import { Link } from "react-router-dom"
import path from "@/utils/path"
const Home = () => {
  return (
    <>
      <div className="fixed left-0">
        <LeftBar/>
      </div>
      <div className="w-[100%] pl-[12.5%] flex flex-col gap-8">
      <div className="flex gap-4">
        <VideoCustom home/>
       <div className="flex flex-col gap-2 h-[620px] overflow-scroll scrollbar-hide">
      <Link to={path.MATCH}>
      <div className="w-[340px] h-[170px] cursor-pointer">
          <img src={demo2} alt="demo" className="w-full h-full" />
        </div></Link>
        <Link to={path}>
      <div className="w-[340px] h-[170px] cursor-pointer">
          <img src={demo3} alt="demo" className="w-full h-full" />
        </div></Link>
        <Link to={path}>
      <div className="w-[340px] h-[170px] cursor-pointer">
          <img src={demo1} alt="demo" className="w-full h-full" />
        </div></Link>
        <Link to={path}>
      <div className="w-[340px] h-[170px] cursor-pointer">
          <img src={demo5} alt="demo" className="w-full h-full" />
        </div></Link>
        <Link to={path}>
      <div className="w-[340px] h-[170px] cursor-pointer">
          <img src={demo6} alt="demo" className="w-full h-full" />
        </div></Link>
       </div>
      </div>
      <VideoList />
      </div>
    </>
  )
}

export default Home