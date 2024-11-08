import shop from "@/assets/shop.jpg";
import wallet from "@/assets/wallet.png";
import cskh from "@/assets/cskh.png";
import info from "@/assets/info.png";
import dangerous from "@/assets/dangerous.png";
import options from "@/assets/options.png";
import location from "@/assets/location.png";
import banner_home from "@/assets/banner_home.jpg";
import icon_myWaitPay from "@/assets/icon-myWaitPay.png";
import icon_myWaitDeliver from "@/assets/icon-myWaitDeliver.png";
import icon_myWaitComent from "@/assets/icon-myWaitComment.png";
import icon_myWaitReturn from "@/assets/icon-myWaitReturn.png";
import icon_myTakeGoods from "@/assets/icon-myTakeGoods.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card_Product from "./Card_Product";
import { Link, useNavigate } from "react-router-dom";
import icon_newsWhite from "@/assets/icon-newsWhite.png"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useMediaQuery } from "@mui/material";
const Profile = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate()
  return (
    <div className="w-full bg-gray-50 h-screen">
      <div className="bg-blue-600 opacity-80 w-full h-56 max-sm:h-36 flex items-center gap-2 px-2 justify-between   ">
        <div>
          <AccountCircleIcon sx={{ fontSize: `${isMobile ? "45px" : "80px"}` }} className="text-gray-300 cursor-pointer" />
      <Link to="/login" >
          <span className="text-2xl cursor-pointer hover:text-gray-200 max-sm:text-base">Đăng nhập/Đăng kí</span>
        </Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          <img src={icon_newsWhite} className="h-8 w-8 cursor-pointer max-sm:w-4 max-sm:h-4" alt="icon_newsWhite" />
          <SettingsOutlinedIcon onClick={() => navigate("/setting")} sx={{ fontSize : `${isMobile ? "20px" : "32px"}`, color : "white", cursor : "pointer" }}/>
        </div>
      </div>
      <div className="px-4">
        <div className="px-2 bg-white rounded-2xl py-8 flex flex-col gap-8">
          <div className=" flex flex-col">
            <div className="flex items-center justify-between px-2">
              <span className="text-xl font-bold max-sm:text-sm">Đơn của tôi</span>
              <Link to="/order">
              <div className="text-gray-500 flex items-center gap-2">
                <span className=" max-sm:text-xs">Xem tất cả</span>
                <ArrowForwardIosIcon sx={{ fontSize : `${isMobile ? "12px" : "20px"}`, cursor : "pointer" }} />
              </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between px-2 gap-4 max-sm:text-xs">
            <div className="flex flex-col items-center gap-1">
              <img
                src={icon_myWaitPay}
                alt="icon_myWaitPay"
                className="w-10 h-10 max-sm:w-5 max-sm:h-5"
              />
              <span className="line-clamp-1">Đang chờ thanh toán</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src={icon_myWaitDeliver}
                alt="icon_myWaitDeliver"
                className="w-10 h-10 max-sm:w-5 max-sm:h-5"
              />
              <span className="line-clamp-1">Vận chuyển</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src={icon_myTakeGoods}
                alt="icon_myTakeGoods"
                className="w-10 h-10 max-sm:w-5 max-sm:h-5"
              />
              <span className="line-clamp-1">Đang vận chuyển</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src={icon_myWaitComent}
                alt="icon_myWaitComent"
                className="w-10 h-10 max-sm:w-5 max-sm:h-5"
              />
              <span className="line-clamp-1">Đơn hoàn thành</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src={icon_myWaitReturn}
                alt="icon_myWaitReturn"
                className="w-10 h-10 max-sm:w-5 max-sm:h-5"
              />
              <span className="line-clamp-1">Sau bán hàng</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 py-2">
        <img src={banner_home} alt="banner_home" className="rounded-xl" />
      </div>
      <div className="px-4">
        <div className="grid grid-cols-4 bg-white rounded-2xl px-4 py-8 gap-4 max-sm:text-xs">
          <div className="flex flex-col items-center gap-3 ">
            <img src={shop} alt="shop" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1">Bắt đầu bán</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={wallet} alt="wallet" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1">Ví của tôi</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={location} alt="location" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1">Địa chỉ nhận</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={options} alt="options" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1">Đánh giá của tôi</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={cskh} alt="cskh" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1">CSKH</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={dangerous} alt="dangerous" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1">Khiếu nại</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={info} alt="info" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1">Về chúng tôi</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={info} alt="shop" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1">Thiết lập</span>
          </div>
        </div>
      </div>
      <Card_Product profile />
    </div>
  );
};

export default Profile;
