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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCurrent } from "@/stores/actions/userAction";
import { apiGetProduct } from "@/services/productService";
import { apiGetMyStore, apiGetStore } from "@/services/storeService";
import { linkCSKH, pathImage } from "@/lib/helper";
import { apiGetOrderById } from "@/services/orderServer";
import { logout } from "@/stores/actions/authAction";
const Profile = () => {
  const [products, setProducts] = useState([])
  const [store, setStore] = useState("")
  const dispatch = useDispatch()
  const isMobile = useMediaQuery("(max-width:600px)");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { currentData } = useSelector((state) => state.user);
  const { isLoggedIn, token } = useSelector((state) => state.auth);
  const [stores, setStores] = useState([])
  const [order, setOrder] = useState([]) 
  const getAllStore = async() => {
    const res = await apiGetStore()
    setStores(res)
  }
  const getProduct = async() => {
    const res = await apiGetProduct()
    setProducts(res)
  }
  const getOrder = async() => {
    const res = await apiGetOrderById()
    setOrder(res)
  }
  const getMyStore = async() => {
    const  res = await apiGetMyStore() 
    setStore(res[0])
  }
  useEffect(() => {
    getAllStore() && getProduct() 
    if(isLoggedIn && token) {
      getMyStore() && getOrder()
    }
    
  },[isLoggedIn, token, dispatch])
  useEffect(() => {
    if (isLoggedIn && token) {
      setLoading(true);
      setTimeout(() => {
        dispatch(getCurrent());
        setLoading(false);
      }, 500);
    } 
  }, [isLoggedIn, token, dispatch]);


  return (
    <div className="w-full bg-gray-50 h-screen">
      <div className="bg-blue-600 opacity-80 w-full h-56 max-sm:h-36 flex items-center gap-2 px-2 justify-between   ">
        <div className="flex items-center gap-2">
        <Link to="/login" className="flex items-center gap-2">
          {currentData?.avatar ? <img className=" rounded-full w-20 h-20 max-sm:w-10 max-sm:h-10" src={`${pathImage}/${currentData?.avatar}`} alt="" /> :  <AccountCircleIcon sx={{ fontSize: `${isMobile ? "45px" : "80px"}` }} className="text-gray-300 cursor-pointer" />}
          {currentData && currentData?.role === "user" || currentData?.role === "agent" || currentData && currentData?.role === "bot" || currentData?.role === "botAgent" ? 
            <div className="flex flex-col gap-2">
              <span className="text-2xl text-white cursor-pointer hover:text-gray-200 max-sm:text-xs">{currentData && currentData?.fullName}</span>
              <div className={`${!store || store &&  store?.active === "wait"  ? "px-4  py-1 bg-red-500  font-semibold max-sm:text-[8px] rounded-xl text-center max-sm:py-1" : "px-4 py-1 bg-green-400 font-semibold max-sm:text-[8px] rounded-xl text-center max-sm:py-1"}`}>{ !store || store &&  store?.active === "wait"  ? <span className="text-white text-xs  ">Chưa được xác minh</span> : <span className="text-white text-xs">Người bán đã được xác minh</span>}
            </div>
            </div>
          : <span className="text-2xl cursor-pointer hover:text-gray-200 max-sm:text-base">Đăng nhập/Đăng kí</span>}
          
        </Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          
          <img src={icon_newsWhite} className="h-8 w-8 cursor-pointer max-sm:w-4 max-sm:h-4" alt="icon_newsWhite" onClick={() => {
             if(currentData && isLoggedIn && token) {
               return
            }else{
              navigate("/login")
            }
          }} />
          <SettingsOutlinedIcon onClick={() => {
            if(currentData && isLoggedIn && token) {
              navigate("/setting")
            }else{
              navigate("/login")
            }
          }} sx={{ fontSize : `${isMobile ? "20px" : "32px"}`, color : "white", cursor : "pointer" }}/>
        </div>
      </div>
      <div className="px-4">
        <div className="px-2 bg-white rounded-2xl py-8 flex flex-col gap-8">
          <div className=" flex flex-col">
            <div className="flex items-center justify-between px-2">
              <span className="text-xl font-bold max-sm:text-sm">Đơn của tôi</span>
              <div onClick={() => {
                if(isLoggedIn && token) {
                  navigate("/order")
                }else{
                  navigate("/login")
                }
              }}>
              <div className="text-gray-500 flex items-center gap-2 cursor-pointer">
                <span className=" max-sm:text-xs">Xem tất cả</span>
                <ArrowForwardIosIcon sx={{ fontSize : `${isMobile ? "12px" : "20px"}`, cursor : "pointer" }} />
              </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 gap-6 max-sm:text-xs">
            <div className="flex flex-col items-center gap-1 py-2 cursor-pointer relative" onClick={() => {
             if(isLoggedIn && token) {
              navigate("/order")
              }else{
                navigate("/login")
              }
            }}>
              <img
                src={icon_myWaitPay}
                alt="icon_myWaitPay"
                className="w-8 h-8 max-sm:w-5 max-sm:h-5"
              />
             <div className="absolute top-0 max-sm:top-0 bg-red-500 px-2 max-sm:px-[5px] rounded-full max-sm:right-0 right-0">
              <span className="font-semibold text-white text-sm max-sm:text-xs">{order && order?.filter((item) => item?.status === "waitPay")?.length}</span>
             </div>
              <span className="line-clamp-1">Chờ thanh toán</span>
            </div>
            <div className="flex flex-col items-center gap-1 py-2 cursor-pointer relative" onClick={() => {
              if(isLoggedIn && token) {
                navigate("/order")
              }else{
                navigate("/login")
              }
            }}>
              <img
                src={icon_myWaitDeliver}
                alt="icon_myWaitDeliver"
                className="w-8 h-8 max-sm:w-5 max-sm:h-5"
              />
              <div className="absolute top-0 max-sm:top-0 bg-red-500 px-2 max-sm:px-[5px] rounded-full max-sm:right-0 right-0">
              <span className="font-semibold text-white text-sm max-sm:text-xs">{order && order?.filter((item) => item?.status === "waitDelivery")?.length}</span>
             </div>
              <span className="line-clamp-1">Vận chuyển</span>
            </div>
            <div className="flex flex-col items-center gap-1 py-2 cursor-pointer relative" onClick={() => {
             if(isLoggedIn && token) {
              navigate("/order")
              }else{
                navigate("/login")
              }
            }}>
              <img
                src={icon_myTakeGoods}
                alt="icon_myTakeGoods"
                className="w-8 h-8 max-sm:w-5 max-sm:h-5"
              />
               <div className="absolute top-0 max-sm:top-0 bg-red-500 px-2 max-sm:px-[5px] rounded-full max-sm:right-0 right-0">
              <span className="font-semibold text-white text-sm max-sm:text-xs">{order && order?.filter((item) => item?.status === "delivering")?.length}</span>
             </div>
              <span className="line-clamp-1">Đang vận chuyển</span>
            </div>
            <div className="flex flex-col items-center gap-1 py-2 cursor-pointer relative" onClick={() => {
              if(isLoggedIn && token) {
                navigate("/order")
              }else{
                navigate("/login")
              }
            }}>
              <img
                src={icon_myWaitComent}
                alt="icon_myWaitComent"
                className="w-8 h-8 max-sm:w-5 max-sm:h-5"
              />
              <div className="absolute top-0 max-sm:top-0 bg-red-500 px-2 max-sm:px-[5px] rounded-full max-sm:right-0 right-0">
              <span className="font-semibold text-white text-sm max-sm:text-xs">{order && order?.filter((item) => item?.status === "successfull")?.length}</span>
             </div>
              <span className="line-clamp-1">Đơn hoàn thành</span>
            </div>
            <div className="flex flex-col items-center gap-1 py-2 cursor-pointer relative" onClick={() => {
              if(isLoggedIn && token) {
                navigate("/order")
              }else{
                navigate("/login")
              }
            }}>
              <img
                src={icon_myWaitReturn}
                alt="icon_myWaitReturn"
                className="w-8 h-8 max-sm:w-5 max-sm:h-5"
              />
                <div className="absolute top-0 max-sm:top-0 bg-red-500 px-2 max-sm:px-[5px] rounded-full max-sm:right-0 right-0">
                <span className="font-semibold text-white text-sm max-sm:text-xs">{order && order?.filter((item) => item?.status === "canceled")?.length}</span>
              </div>
              <span className="line-clamp-1">Đơn hàng hủy bỏ</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 py-2">
        <img src={banner_home} alt="banner_home" className="rounded-xl" />
      </div>
      <div className="px-4">
        <div className="grid grid-cols-4 bg-white rounded-2xl px-4 py-8 gap-4 max-sm:text-xs">
          <div className="flex flex-col items-center gap-3 cursor-pointer " onClick={() => {
            
           if(isLoggedIn && token) {
            if(store) {
              navigate("/home")
            }else{
              navigate("/register-choose")
            }
           
           }else{
            navigate("/login")
           }
          }}>
            <img src={shop} alt="shop" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1">{store && store?.active === "access" ||store?.active === "wait" ? "Shop của tôi" : "Bắt đầu bán"}</span>
          </div>
          <div className="flex flex-col items-center gap-3 cursor-pointer" onClick={() => {
            if(isLoggedIn && token) {
              navigate("/wallet")
            }else{
              navigate("/login")

            }
          }}> 
            <img src={wallet} alt="wallet" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1" >Ví của tôi</span>
          </div>
          <div className="flex flex-col items-center gap-3 cursor-pointer" onClick={() => {
              if(isLoggedIn && token) {
                navigate("/add-location")
              }else{
                navigate("/login")
              }
            }}> 
            <img src={location} alt="location" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1" >Địa chỉ nhận</span>
          </div>
          <div className="flex flex-col items-center gap-3 cursor-pointer"> 
            <img src={options} alt="options" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1">Đánh giá của tôi</span>
          </div>
          <Link to={linkCSKH} target="_bank"  referrerPolicy="no-referrer" className="cursor-pointer">
          <div className="flex flex-col items-center gap-3 cursor-pointer">
            <img src={cskh} alt="cskh" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1">CSKH</span>
          </div></Link>
          <div className="flex flex-col items-center gap-3 cursor-pointer"> 
            <img src={dangerous} alt="dangerous" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1">Khiếu nại</span>
          </div>
          <div className="flex flex-col items-center gap-3 cursor-pointer"> 
            <img src={info} alt="info" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1">Về chúng tôi</span>
          </div>
          <div className="flex flex-col items-center gap-3 cursor-pointer" onClick={() => {
              if(isLoggedIn && token) {
                navigate("/setting")
              }else{
                navigate("/login")
              }
            }}> 
            <img src={info} alt="shop" className="h-11 w-11 max-sm:w-7 max-sm:h-7" />
            <span className="line-clamp-1">Thiết lập</span>
          </div>
        </div>
      </div>
      <Card_Product profile products={products} stores={stores}/>
    </div>
  );
};

export default Profile;
