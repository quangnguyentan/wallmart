import logo from "../assets/logo.png"
import logo_meovang from "@/assets/logo-meovang.webp"
import bellowVideo from "../assets/bellow_img.png"
import bellowVideo1 from "../assets/bellow_img1.png"

import che_do from "../assets/che_do.png"
import { Link, useLocation } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { ModeToggle } from "./mode-toggle";
import home_logo from "../assets/Home.png"
import home_page from "../assets/home_page.png"

import lich_logo from "../assets/Cup.png"
import download_logo from "../assets/download.png"
import hot from "../assets/hot.svg"
import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"

const TopBar = () => {
  const [scrollScreen, setScrollScreen] = useState("")
  const {theme} = useTheme()
  const path = useLocation()
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    setScrollScreen(scrolled)
  })
  return (
    <div>
        <div className="relative ">
          {path?.pathname === "/" && (
            <>
             {theme === "light" ?  <img src={bellowVideo1} alt="" className="absolute -z-10 " /> :  <img src={bellowVideo} alt="" className="absolute -z-10 bg-[rgba(16,17,20,.9)]" />}</>
          )}
           <div className={path.pathname === "/match" || path.pathname === "/calendar" || path.pathname === "/download" ? `p-12 flex w-full items-center justify-between fixed top-0 overflow-hidden z-50 ${scrollScreen > 0 && `${theme === "light" ? "bg-gray-300" : "bg-gray-800"}  delay-100 duration-100 ease-in-out`} ` : `p-8 flex w-full items-center fixed top-0 overflow-hidden z-50 ${scrollScreen > 0 && `${theme === "light" ? "bg-gray-300" : "bg-gray-800"} delay-100 duration-100  ease-in-out`} `}>
            <div className={path.pathname === "/match" || path.pathname === "/calendar" || path.pathname === "/download" ? "flex items-center gap-4 flex-2" : "flex items-center gap-4 flex-1"} >
              <Link to="/">
              <img src={logo_meovang} alt="logo" className=" h-[45px] rounded-lg" /></Link>
              {/* {theme === "light" ? <div className="flex flex-col ">
                <span className="text-black font-medium">JalaLive</span>
                <p className="text-black font-thin text-[10px]">Truyền phát miễn phí và HD</p>
              </div> : <div className="flex flex-col ">
                <span className="text-white font-medium">JalaLive</span>
                <p className="text-gray-400 font-thin text-[10px]">Truyền phát miễn phí và HD</p>
              </div>} */}
            </div>
            {path.pathname === "/match" &&  <div className="px-8 flex gap-8 ">
              <>
              {theme === "light" ? <> <Link to="/">
              <div className="flex items-center gap-4 cursor-pointer">
                <img src={home_page} alt="home" className="w-[23px] h-[23px]" />
                <span className="text-gray-500 text-base ">Trang chủ</span>
              </div></Link>
             <Link to={`/calendar`}>
             <div className="flex items-center gap-4 cursor-pointer hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
                <img src={lich_logo} alt="home" className="text-white w-[23px] h-[23px]" />
                <span className="text-gray-500 text-base">Lịch thi đấu</span>
              </div></Link>
             <Link to={`/download`}>
             <div className="flex items-center gap-4 cursor-pointer relative hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
                <img src={download_logo} alt="home" className="text-white w-[23px] h-[23px] " />
                <span className="text-gray-500 text-base ">Tải xuống</span>
                <img src={hot} alt="home" className="text-white w-[23px] h-[23px] absolute -top-3 left-20" />
              </div></Link> </> : <>
              <Link to="/">
              <div className="flex items-center gap-4 cursor-pointer">
                <img src={home_logo} alt="home" className="w-[23px] h-[23px]" />
                <span className="text-white text-base">Trang chủ</span>
              </div></Link>
             <Link to={`/calendar`}>
             <div className="flex items-center gap-4 cursor-pointer hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
                <img src={lich_logo} alt="home" className="text-white w-[23px] h-[23px]" />
                <span className="text-white text-base">Lịch thi đấu</span>
              </div></Link>
              <Link to={`/download`}>
              <div className="flex items-center gap-4 cursor-pointer relative hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
                <img src={download_logo} alt="home" className="text-white w-[23px] h-[23px] " />
                <span className="text-white text-base ">Tải xuống</span>
                <img src={hot} alt="home" className="text-white w-[23px] h-[23px] absolute -top-3 left-20" />
              </div>
              </Link></>}
              </>
            </div>}
            {path.pathname === "/calendar" &&  <div className="px-8 flex gap-8 ">
              <>
              {theme === "light" ? <> <Link to="/">
              <div className="flex items-center gap-4 cursor-pointer">
                <img src={home_page} alt="home" className="w-[23px] h-[23px]" />
                <span className="text-gray-500 text-base ">Trang chủ</span>
              </div></Link>
             <Link to={`/calendar`}>
             <div className="flex items-center gap-4 cursor-pointer hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
                <img src={lich_logo} alt="home" className="text-white w-[23px] h-[23px]" />
                <span className="text-gray-500 text-base">Lịch thi đấu</span>
              </div></Link>
             <Link to={`/download`}>
             <div className="flex items-center gap-4 cursor-pointer relative hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
                <img src={download_logo} alt="home" className="text-white w-[23px] h-[23px] " />
                <span className="text-gray-500 text-base ">Tải xuống</span>
                <img src={hot} alt="home" className="text-white w-[23px] h-[23px] absolute -top-3 left-20" />
              </div></Link> </> : <>
              <Link to="/">
              <div className="flex items-center gap-4 cursor-pointer">
                <img src={home_logo} alt="home" className="w-[23px] h-[23px]" />
                <span className="text-white text-base">Trang chủ</span>
              </div></Link>
             <Link to={`/calendar`}>
             <div className="flex items-center gap-4 cursor-pointer hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
                <img src={lich_logo} alt="home" className="text-white w-[23px] h-[23px]" />
                <span className="text-white text-base">Lịch thi đấu</span>
              </div></Link>
             <Link to={`/download`}>
             <div className="flex items-center gap-4 cursor-pointer relative hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
                <img src={download_logo} alt="home" className="text-white w-[23px] h-[23px] " />
                <span className="text-white text-base ">Tải xuống</span>
                <img src={hot} alt="home" className="text-white w-[23px] h-[23px] absolute -top-3 left-20" />
              </div></Link></>}
              </>
            </div>}
            {path.pathname === "/download" &&  <div className="px-8 flex gap-8 ">
              <>
              {theme === "light" ? <> <Link to="/">
              <div className="flex items-center gap-4 cursor-pointer">
                <img src={home_page} alt="home" className="w-[23px] h-[23px]" />
                <span className="text-gray-500 text-base ">Trang chủ</span>
              </div></Link>
             <Link to={`/calendar`}>
             <div className="flex items-center gap-4 cursor-pointer hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
                <img src={lich_logo} alt="home" className="text-white w-[23px] h-[23px]" />
                <span className="text-gray-500 text-base">Lịch thi đấu</span>
              </div></Link>
             <Link to={`/download`}>
             <div className="flex items-center gap-4 cursor-pointer relative hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
                <img src={download_logo} alt="home" className="text-white w-[23px] h-[23px] " />
                <span className="text-gray-500 text-base ">Tải xuống</span>
                <img src={hot} alt="home" className="text-white w-[23px] h-[23px] absolute -top-3 left-20" />
              </div></Link> </> : <>
              <Link to="/">
              <div className="flex items-center gap-4 cursor-pointer">
                <img src={home_logo} alt="home" className="w-[23px] h-[23px]" />
                <span className="text-white text-base">Trang chủ</span>
              </div></Link>
             <Link to={`/calendar`}>
             <div className="flex items-center gap-4 cursor-pointer hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
                <img src={lich_logo} alt="home" className="text-white w-[23px] h-[23px]" />
                <span className="text-white text-base">Lịch thi đấu</span>
              </div></Link>
             <Link to={`/download`}>
             <div className="flex items-center gap-4 cursor-pointer relative hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
                <img src={download_logo} alt="home" className="text-white w-[23px] h-[23px] " />
                <span className="text-white text-base ">Tải xuống</span>
                <img src={hot} alt="home" className="text-white w-[23px] h-[23px] absolute -top-3 left-20" />
              </div></Link></>}
              </>
            </div>}
            {theme ==="light" ? <div className="flex items-center rounded-lg flex-5">
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="border-r-0 rounded-l-sm p-2  focus:outline-1 focus:rounded-none bg-inherit border border-gray-400  text-black w-2/4 placeholder:text-black outline-none"
                  />
                <button className="p-2 border border-l-0 outline-1 rounded-r-sm  border-gray-400 bg-[hsla(0,0%,91%,.6)]">
                  <CiSearch  className="h-6 w-16 text-gray-500 outline-none" />
                </button>
            </div>: <div className="flex items-center rounded-lg flex-5">
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="rounded-l-sm p-2 outline-none bg-inherit border border-gray-500  text-white w-2/4"
                  />
                <button className="p-2 border border-l-0 border-gray-500 outline-1 rounded-r-sm outline-none bg-[#21212199]">
                  <CiSearch  className="h-6 w-16 text-white outline-none" />
                </button>
            </div>}
            <div className={path.pathname === "/match" || path.pathname === "/calendar" || path.pathname === "/download" ? "flex-2 flex items-center justify-end gap-3" : "flex-3 flex items-center gap-3"}>
                {theme === "light" ?  <img src={che_do} alt="che_do" className="w-[30px] h-[30px] filter brightness-0" /> : <img src={che_do} alt="che_do" className="w-[30px] h-[30px]" />}
                <ModeToggle/>
            </div>
           </div>
        </div>
    </div>
  )
}

export default TopBar