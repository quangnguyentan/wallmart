import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useMediaQuery } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { logout } from "@/stores/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { pathImage } from "@/lib/helper";

const Setting = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const { currentData } = useSelector((state) => state.user);

  return (
    <div className="flex flex-col max-sm:gap-4 w-full h-screen shadow-xl ">
    <div className="flex items-center w-full gap-44 max-sm:gap-32">
    <KeyboardArrowLeftIcon
         sx={{ fontSize  : `${isMobile ? "40px" : "40px"}`}}
        className="text-gray-400 cursor-pointer"
        onClick={() => window.history.back()}
      />
      <h3 className="text-gray-500 text-center flex items-center justify-start w-full  text-lg max-sm:text-sm ">Thiết lập</h3>     
      
    </div>
        <div>
         <div className="py-1">
         <div className="flex items-center justify-between border-b py-4 cursor-pointer pl-2 pr-4" onClick={() => {
          navigate("/edit-profile-user")
         }}>
            <div className="flex items-center gap-2 ">
            {currentData?.avatar ? <img className=" rounded-full w-16 h-16 max-sm:w-10 max-sm:h-10" src={`${pathImage}/${currentData?.avatar}`} alt="" /> :  <AccountCircleIcon sx={{ fontSize: `${isMobile ? "45px" : "80px"}` }} className="text-gray-300 cursor-pointer" />}
            <div className="flex flex-col gap-1 ">
            <span className="text-xl max-sm:text-sm">{currentData?.fullName}</span>
            <span className="text-base max-sm:text-xs">{currentData?.phone ? currentData?.phone : currentData?.email}</span>
            </div>
            </div>
        <Link>
            <KeyboardArrowRightIcon sx={{ fontSize: `${isMobile ? "25px" : "40px"}`, color : "gray"  }}/>
          </Link>
          </div>
           <div className="flex items-center justify-between border-b py-4 cursor-pointer px-4 text-gray-600 " onClick={() => {
            navigate("/add-location")
           }}>
            <span className="text-xl max-sm:text-xs">Quản lý địa chỉ nhận hàng</span>
        <Link>
            <KeyboardArrowRightIcon sx={{ fontSize: `${isMobile ? "25px" : "40px"}`, color : "gray"  }}/>
          </Link>
          </div>
         </div>
          <div className="py-1">
          
          <div className="flex items-center justify-between border-b py-4 cursor-pointer px-4 text-gray-600 "  onClick={() => {
            navigate("/change-password")
           }}>
            <span className="text-xl max-sm:text-xs">Thay đổi mật khẩu đăng nhập</span>
        <Link>
            <KeyboardArrowRightIcon sx={{ fontSize: `${isMobile ? "25px" : "40px"}`, color : "gray"  }}/>
          </Link>
          </div>
           
          <div className="flex items-center justify-between border-b py-4 cursor-pointer px-4 text-gray-600 ">
            <span className="text-xl max-sm:text-xs" onClick={() => {
              dispatch(logout())
              window.location.href = "/login"
              
            }}>Đăng xuất tài khoản</span>
        <Link>
            <KeyboardArrowRightIcon sx={{ fontSize: `${isMobile ? "25px" : "40px"}`, color : "gray"  }}/>
          </Link>
          </div>
          </div>
          {/* <div className="flex items-center justify-between border-b py-4 cursor-pointer px-4 text-gray-600 ">
            <span className="text-xl max-sm:text-xs">Đa ngôn ngữ</span>
        <Link>
            <KeyboardArrowRightIcon sx={{ fontSize: `${isMobile ? "25px" : "40px"}`, color : "gray"  }}/>
          </Link>
          </div> */}
          <div className="flex items-center justify-between border-b py-4 cursor-pointer px-4 text-gray-600 ">
            <span className="text-xl max-sm:text-xs">Về chúng tôi</span>
        <Link>
            <KeyboardArrowRightIcon sx={{ fontSize: `${isMobile ? "25px" : "40px"}`, color : "gray"  }}/>
          </Link>
          </div>
          <div className="flex items-center justify-center border-b py-4 cursor-pointer text-gray-600">
            <span className="text-xl max-sm:text-xs" onClick={() => {
              dispatch(logout())
              window.location.href = "/login"
              
            }}>Đăng xuất tài khoản</span>
      
          </div>
        </div>
    </div>
  )
}

export default Setting