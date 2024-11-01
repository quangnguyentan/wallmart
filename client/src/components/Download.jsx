import banner_bellow from "@/assets/bellow_banner.png"
import banner_bellow1 from "@/assets/bellow_banner1.png"
import banner from "@/assets/banner.png"
import qrcode from "@/assets/qrcode.png"
import { useTheme } from "./theme-provider";

const Download = () => {
  const {  theme } = useTheme();

  return (
    <>
        {theme === "light" ?<div>
        <img src={banner_bellow1} alt="banner_bellow1" className="relative " />
        <div className="absolute z-20 top-[30%] left-[20%] text-white flex flex-col gap-10 justify-center items-center">
            <div className="w-[250px] flex flex-col items-center gap-2">
                <span className="text-2xl font-semibold text-black">
                MeoVangTV·APP
                </span>
                <span className="text-xs text-gray-400">
                Tận hưởng các dịch vụ phát sóng thể thao HD và miễn phí trong tay bạn thông qua MeoVangTV
                </span>
            </div>
            <button className="p-4 bg-[#91EF11] text-xs font-light text-black rounded-full">Tải xuống bằng cách quét mã QR</button>
            <img src={qrcode} alt="qrcode" className="w-[222px] h-[222px]" />
        </div>
        <div className="absolute z-20 top-[20%] right-[20%] text-white">
            <img src={banner} alt="banner" className="w-[30vw] " />
        </div>
    </div> : <div className="">
        <img src={banner_bellow} alt="banner_bellow1" className="relative" />
        <div className="absolute z-20 top-[30%] left-[20%] text-white flex flex-col gap-10 justify-center items-center">
            <div className="w-[250px] flex flex-col items-center gap-2">
                <span className="text-2xl font-semibold ">
                MeoVangTV·APP
                </span>
                <span className="text-xs text-gray-400">
                Tận hưởng các dịch vụ phát sóng thể thao HD và miễn phí trong tay bạn thông qua MeoVangTV
                </span>
            </div>
            <button className="p-4 bg-[#91EF11] text-xs font-light text-black rounded-full">Tải xuống bằng cách quét mã QR</button>
            <img src={qrcode} alt="qrcode" className="w-[222px] h-[222px]" />
        </div>
        <div className="absolute z-20 top-[20%] right-[20%] text-white">
            <img src={banner} alt="banner" className="w-[30vw] " />
        </div>
    </div>}
    </>
  )
}

export default Download