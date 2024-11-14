import noCart from "@/assets/noCart.png"
import { pathImage } from "@/lib/helper"
import hr from "@/assets/hr.png"
import { getCurrent } from "@/stores/actions/userAction"
import { useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { replace, useLocation, useNavigate, useParams } from "react-router-dom"
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
import { apiCreateAddress, apiGetAddress, apiUpdateAddress } from "@/services/addressService"
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Edit_Address = () => {
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
  const [address, setAddress] = useState(null)
  const [checked, setChecked] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const { id } = useParams()

  const fetchAddress = async(id) => {
    const res = await apiGetAddress(id)
    setAddress(res)
    
  }
  const hanleChange = (e) => {
    setChecked(e.target.checked);
  }
  const onUpdateAddressOrder = async (data) => {
    try {
        await apiUpdateAddress(id, {...data, active: checked ? true : false})
        toast.success("Chỉnh sửa địa chỉ thành công")
        navigate("/add-location")
    } catch (error) {
        toast.error("Đã có lỗi xảy ra khi cập nhật địa chỉ.");
        console.error("Error updating address:", error);
    }
  }
  useEffect(() => {
    fetchAddress(id)
   
  },[id])
  useEffect(() => {
    if (address) {
      // Cập nhật giá trị các trường trong form từ `address`
      setValue("revicerName", address?.revicerName);
      setValue("phone", address?.phone);
      setValue("province", address?.province);
      setValue("city", address?.city);
      setValue("stress", address?.stress);
      setChecked(address?.active);  // Cập nhật trạng thái switch từ `address.active`
    }
  }, [address, setValue]);
  return (
    <div className=' flex flex-col gap-4 bg-gray-50 h-screen w-full relative'>
      <div className="flex items-center w-full max-sm:gap-20 gap-48 ">
      <KeyboardArrowLeftIcon
             sx={{ fontSize  : `${isMobile ? "30px" : "40px"}`, cursor : "pointer"}}
            
            onClick={() => window.history.back()}
        />
      <h3 className="text-center text-gray-600 py-2 max-sm:text-sm">Thêm địa chỉ nhận hàng</h3>
      </div>
       
       <form onSubmit={handleSubmit(onUpdateAddressOrder)}>
       <div>
        <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
            <span className="w-[30%]">Người nhận hàng</span>
            <input type="text" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập tên người nhận hàng"  {...register("revicerName")} />
         
        </div>
        
        <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
            <span className="w-[30%]">Số điện thoại</span>
            <input type="number" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập số điện thoại liên hệ" {...register("phone")}/>
        </div>
        <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
            <span className="w-[30%]">Tỉnh</span>
            <input type="text" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập tỉnh" {...register("province")}/>
        </div>
        <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
            <span className="w-[30%]">Thành phố</span>
            <input type="text" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập thành phố" {...register("city")}/>
        </div>
        <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
            <span className="w-[30%]">Tên đường, Tòa nhà, Số nhà</span>
            <input type="text" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập tên đường, tòa nhà, số nhà" {...register("stress")}/>
        </div>
        <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
            <span className="w-[30%]">Địa chỉ mặc định</span>
            <Switch {...label} checked={checked} onChange={hanleChange} />
        </div>
       </div>
       <div className="py-4">
       <button className="px-8 py-4  max-sm:text-xs w-full rounded-full bg-red-500 text-white"  type="submit">Lưu dịa chỉ</button>
       </div>
       </form>
    </div>
  )
}

export default Edit_Address