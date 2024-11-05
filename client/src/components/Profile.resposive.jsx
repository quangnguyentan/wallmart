import shop from "@/assets/shop.jpg";
import discount from "@/assets/discount.png";
import register from "@/assets/register.png";
import wallet from "@/assets/wallet.png";
import score from "@/assets/score.png";
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
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="w-full bg-gray-50 h-screen">
      <Link to="/login">
      <div className="bg-blue-600 opacity-80 w-full h-56 flex items-center gap-2 px-2 hover:text-gray-200  cursor-pointer">
        <AccountCircleIcon sx={{ fontSize: 80 }} className="text-gray-300 " />
        <span className="text-2xl">Đăng nhập/Đăng kí</span>
      </div></Link>
      <div className="px-4">
        <div className="px-2 bg-white rounded-2xl py-8 flex flex-col gap-8">
          <div className=" flex flex-col">
            <div className="flex items-center justify-between px-2">
              <span className="text-xl font-bold">Đơn của tôi</span>
              <div className="text-gray-500">
                <span>Xem tất cả</span>
                <ArrowForwardIosIcon fontSize="small" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-2 gap-4">
            <div className="flex flex-col items-center gap-1">
              <img
                src={icon_myWaitPay}
                alt="icon_myWaitPay"
                className="w-10 h-10"
              />
              <span className="line-clamp-1">Đang chờ thanh toán</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src={icon_myWaitDeliver}
                alt="icon_myWaitDeliver"
                className="w-10 h-10"
              />
              <span className="line-clamp-1">Vận chuyển</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src={icon_myTakeGoods}
                alt="icon_myTakeGoods"
                className="w-10 h-10"
              />
              <span className="line-clamp-1">Đang vận chuyển</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src={icon_myWaitComent}
                alt="icon_myWaitComent"
                className="w-10 h-10"
              />
              <span className="line-clamp-1">Đơn hoàn thành</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                src={icon_myWaitReturn}
                alt="icon_myWaitReturn"
                className="w-10 h-10"
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
        <div className="grid grid-cols-4 bg-white rounded-2xl px-4 py-8 gap-4">
          <div className="flex flex-col items-center gap-3">
            <img src={shop} alt="shop" className="h-11 w-11" />
            <span className="line-clamp-1">Bắt đầu bán</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={wallet} alt="wallet" className="h-11 w-11" />
            <span className="line-clamp-1">Ví của tôi</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={location} alt="location" className="h-11 w-11" />
            <span className="line-clamp-1">Địa chỉ nhận</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={options} alt="options" className="h-11 w-11" />
            <span className="line-clamp-1">Đánh giá của tôi</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={cskh} alt="cskh" className="h-11 w-11" />
            <span className="line-clamp-1">CSKH</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={dangerous} alt="dangerous" className="h-11 w-11" />
            <span className="line-clamp-1">Khiếu nại</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={info} alt="info" className="h-11 w-11" />
            <span className="line-clamp-1">Về chúng tôi</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={info} alt="shop" className="h-11 w-11" />
            <span className="line-clamp-1">Thiết lập</span>
          </div>
        </div>
      </div>
      <Card_Product profile />
    </div>
  );
};

export default Profile;
