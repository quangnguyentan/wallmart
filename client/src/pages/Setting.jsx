import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Setting = () => {
    const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div className="flex flex-col gap-12 max-sm:gap-4 w-full h-screen px-4 ">
    <div className="flex items-center w-full gap-32">
    <KeyboardArrowLeftIcon
         sx={{ fontSize  : `${isMobile ? "40px" : "40px"}`}}
        className="text-gray-400 cursor-pointer"
        onClick={() => window.history.back()}
      />
      <h3 className="text-gray-500 text-center flex items-center justify-start w-full max-sm:text-base text-lg">Thiết lập</h3>     
      
    </div>
    <div>
      <Link to="/login" >
          <AccountCircleIcon sx={{ fontSize: `${isMobile ? "45px" : "60px"}` }} className="text-gray-300 cursor-pointer" />
          <span className="text-2xl cursor-pointer hover:text-gray-200 max-sm:text-base">Đăng nhập/Đăng kí</span>
          <span>4m33sBzh03</span>
          <span>938915502</span>
        </Link>
        </div>
    </div>
  )
}

export default Setting