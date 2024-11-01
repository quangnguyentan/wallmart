import home_logo from "../assets/Home.png"
import home_page from "../assets/home_page.png"

import lich_logo from "../assets/Cup.png"
import download_logo from "../assets/download.png"
import hot from "../assets/hot.svg"
import player from "../assets/player.png"
import qrcode from "../assets/qrcode.png"
import { Link } from "react-router-dom"
import path from "@/utils/path"
import { useTheme } from "./theme-provider"

const LeftBar = () => {
  const {  theme } = useTheme();
  
  return (
      <div>
        <div className="px-8 flex flex-col gap-8">
      {theme === "light" ? <Link to="/">
      <div className="flex items-center gap-4 cursor-pointer">
        <img src={home_page} alt="home" className="font-semibold w-[23px] h-[23px] " />
        <span className="text-gray-500 font-semibold text-base">Trang chủ</span>
      </div></Link> : <Link to="/">
      <div className="flex items-center gap-4 cursor-pointer">
        <img src={home_logo} alt="home" className="w-[23px] h-[23px]" />
        <span className="text-white text-base">Trang chủ</span>
      </div></Link>}
      <Link to={`/${path.CALENDAR}`}>
      <div className="flex items-center gap-4 cursor-pointer hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
        {theme === "light" ? <>
          <img src={lich_logo} alt="home" className="text-gray-500 w-[23px] h-[23px]" />
          <span className="text-gray-500 text-base font-semibold">Lịch thi đấu</span></>: <>
          <img src={lich_logo} alt="home" className="text-white w-[23px] h-[23px]" />
        <span className="text-white text-base ">Lịch thi đấu</span></>}
      </div></Link>
      {theme === "light" ? <Link to={`/${path.DOWNLOAD}`}>
        <div className="flex items-center gap-4 cursor-pointer relative hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
        <img src={download_logo} alt="home" className="text-gray-500 font-semibold w-[23px] h-[23px] " />
        <span className="text-gray-500 font-semibold text-base ">Tải xuống</span>
        <img src={hot} alt="home" className="text-white w-[23px] h-[23px] absolute -top-3 left-20" />
      </div>
      </Link> : <Link to={`/${path.DOWNLOAD}`}>
      <div className="flex items-center gap-4 cursor-pointer relative hover:translate-x-2 hover:scale-110 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out">
        <img src={download_logo} alt="home" className="text-white w-[23px] h-[23px] " />
        <span className="text-white text-base ">Tải xuống</span>
        <img src={hot} alt="home" className="text-white w-[23px] h-[23px] absolute -top-3 left-20" />
      </div></Link>}
        </div>
        <div className="relative -bottom-80 flex flex-col justify-center left-4 ">
        <img src={player} alt="player" className="absolute -z-40 -top-28 w-[170px] left-8" />
          <div className="h-fit bg-[#202020] w-[210px] rounded-md flex flex-col justify-center items-center gap-4 p-4 ">
            <span className={theme === "light" ? "text-xs text-center text-white" : "text-xs text-center text-white"}>Quét mã để tải xuống ứng dụng và tương tác với chủ nhà, thưởng thức màn hình lớn HD, xem bản ghi, nhận tín dụng miễn phí. Hãy hành động ngay lập tức!</span>
            <img src={qrcode} alt="qrcode" className="w-[90px] h-[90px]" />
            <span className={theme === "light" ? "text-xs text-center text-white" : "text-xs text-center text-white"}>Quét mã QR để tải ứng dụng</span>
          </div>
        </div>
      </div>
  )
}

export default LeftBar