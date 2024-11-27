import noCart from "@/assets/noCart.png"
import { pathImage } from "@/lib/helper"
import hr from "@/assets/hr.png"
import { getCurrent } from "@/stores/actions/userAction"
import { useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { replace, useLocation, useNavigate } from "react-router-dom"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { apiAddToCart } from "@/services/userService"
import toast from "react-hot-toast"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { apiCreateOrder, apiGetOrder, apiGetOrderById } from "@/services/orderServer"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Switch from '@mui/material/Switch';
import { useForm } from "react-hook-form"
import { apiGetMyStore } from "@/services/storeService"
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const RegisterStoreChoose = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
    reset
  } = useForm();
  const [checked, setChecked] = useState("person");
  const [valueChecked, setValueChecked] = useState("")
  const isMobile = useMediaQuery("(max-width:600px)");
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState("")
  const [store, setStore] = useState(null)
  const dispatch = useDispatch();
  const fetchStore = async() => {
    const res = await apiGetMyStore()
    if(res[0]) {
      navigate("/home")
    }
    setStore(res[0])
  }

  const onChecked = (value) => {
    setChecked(value)
  }
  useEffect(() => {
    fetchStore()
  }, [])
  return (
    <div className=' flex flex-col gap-4 bg-gray-50 h-screen w-full relative'>
      <div className="flex items-center w-full max-sm:gap-28 gap-48 ">
      <KeyboardArrowLeftIcon
             sx={{ fontSize  : `${isMobile ? "30px" : "40px"}`, cursor : "pointer"}}
            
            onClick={() => {
              localStorage.setItem("page", 3),
              navigate("/")
            }}
        />
      <h3 className="text-center text-gray-600 py-2">Chọn loại cửa hàng</h3>
      </div>
       
       <form >
       <div>
        <div className="flex items-center px-4 pb-8 pt-4 border-b gap-2 max-sm:text-xs">
            <input type="checkbox"  className="rounded-full w-[10%]" checked={checked === "person"} onClick={() => onChecked("person")}/>

            <span className="w-[90%]">Người bán cá nhân, mạng lưới siêu nhỏ, người nổi tiếng mua ở nước ngoài.</span>
         
        </div>
        
        <div className="flex items-center px-4 pb-8 pt-4 border-b gap-2 max-sm:text-xs">
            <input type="checkbox" className="rounded-full w-[10%]" checked={checked === "company"} onClick={() => onChecked("company")}/>

            <span className="w-[90%]">Doanh nghiệp mở bán, cần tải giấy phép kinh doanh</span>
         
        </div>
        
       </div>
       <div className="py-4">
       <button className="px-8 py-4  max-sm:text-xs w-full rounded-full bg-red-500 text-white"  type="submit" onClick={() => navigate("/register-store", {state : checked})}>Gửi đi</button>
       </div>
       <div className="text-center w-full">Không thể thay đổi sau khi gửi</div>

       </form>
    </div>
  )
}

export default RegisterStoreChoose