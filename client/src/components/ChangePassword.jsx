import noCart from "@/assets/noCart.png"
import { listLeftCategories, pathImage } from "@/lib/helper"
import hr from "@/assets/hr.png"
import { getCurrent } from "@/stores/actions/userAction"
import { useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { replace, useLocation, useNavigate } from "react-router-dom"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { apiAddToCart, apiUpdatedUser } from "@/services/userService"
import toast from "react-hot-toast"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { apiCreateOrder, apiGetOrder, apiGetOrderById } from "@/services/orderServer"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Switch from '@mui/material/Switch';
import { useForm } from "react-hook-form"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { apiCreatestore, apiGetMyStore } from "@/services/storeService"
import { apichangePassword } from "@/services/authService"
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const gender = [
    {
        id : 1,
        name : "Nam",

    },
    {
        id : 2,
        name : "Nữ",
        
    },
    {
        id : 3,
        name : "Khác",
        
    }
]
const ChangePassword = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
    reset,
    setValue
  } = useForm();
  const isMobile = useMediaQuery("(max-width:600px)");
  
    const [loading, setLoading] = useState(false)

  const { currentData } = useSelector((state) => state.user);
  const EditUser = async (data) => {
    console.log(data)
    try {
      
      const res = await apichangePassword(currentData?._id, {
         password : data?.password,
         newPassword:data?.newPassword,
         rePassword : data?.rePassword
      })
      console.log(res)
       if(res?.success) {
        toast.success("Cập nhật mật khẩu thành công")
        localStorage.setItem("page", 0)
        navigate("/")
       }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Đã xảy ra lỗi, vui lòng thử lại sau");
    }
  };
 
 
  return (
    <div className=' flex flex-col gap-4 bg-white h-screen w-full overflow-y-scroll overflow-x-hidden pb-28  scrollbar-hide shadow-sm'>
      <div className="flex items-center w-full max-sm:gap-28 gap-48 ">
      <KeyboardArrowLeftIcon
             sx={{ fontSize  : `${isMobile ? "30px" : "40px"}`, cursor : "pointer"}}
            
            onClick={() => window.history.back()}
        />
      <h3 className="text-center text-gray-600 py-2">Đổi mật khẩu</h3>
      </div>
       
       <form onSubmit={handleSubmit(EditUser)} >
       <div className="flex flex-col gap-4">
    
   
       
        <div className="w-full h-12 bg-[#eee] py-2">
        <span className="text-lg font-semibold px-2 text-black max-sm:text-sm">Điền thông tin</span>
      </div> 
        <div className="flex flex-col px-4 py-4 max-sm:py-1 border-b gap-2 max-sm:text-xs">
            <label htmlFor="name"  className=" ">Mật khẩu cũ</label>
            <input type="password" className="w-full py-2 outline-none bg-transparent" placeholder="Vui lòng nhập mật khẩu cũ" {...register("password")}/>
        </div>
        <div className="flex flex-col px-4 py-4 max-sm:py-1 border-b gap-2 max-sm:text-xs">
            <label htmlFor="name"  className=" ">Mật khẩu mới</label>
            <input type="password" className="w-full py-2 outline-none bg-transparent" placeholder="Vui lòng nhập mật khẩu mới" {...register("newPassword")}/>
        </div>
        <div className="flex flex-col px-4 py-4 max-sm:py-1 border-b gap-2 max-sm:text-xs">
            <label htmlFor="name"  className=" ">Nhập lại mật khẩu mới</label>
            <input type="password" className="w-full py-2 outline-none bg-transparent" placeholder="Vui lòng nhập lại mật khẩu" {...register("rePassword")}/>
        </div>
       
        <div  className="flex flex-col gap-8">
    
      {/* <div onClick={() => {
              if(value.length < 1) {
                toast.error("Vui lòng chọn ngành kinh doanh")
              }
      }} className="w-full cursor-pointer px-2">
           <Autocomplete
            disablePortal
            options={listLeftCategories.map((option) => option.name)}
            sx={{ fontSize : `${isMobile ? "10px" : "16px"}`, ":placeholder-shown" : {
              fontSize : `${isMobile ? "10px" : "20px"}`
            }, }}
            renderInput={(params) => <TextField {...params} label="Mục kinh doanh" />}
            disabled={value.length < 1 ? true : false}
           
        />
      </div> */}
        
     </div>
      
    
       </div>
       <div className="py-8">
       <button className="px-8 py-4  max-sm:text-xs w-full rounded-full bg-red-500 text-white"  type="submit">Cập nhật mật khẩu</button>
       </div>
       </form>  
     
    </div>
  )
}

export default ChangePassword