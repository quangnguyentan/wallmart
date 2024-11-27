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
const EditProfileUser = () => {
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
  const [values, setValues] = useState("");
  
    const [loading, setLoading] = useState(false)
  const [imageStore, setImageStore] = useState("")

  const { currentData } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const EditUser = async (data) => {
    try {
      const formData = new FormData();
      formData.append("images", imageStore)
      formData.append("fullName", data?.fullName); 
      formData.append("gender",values ? values === "Nam" ? "male" :  values === "Nữ" ? "female" : "other" : currentData?.gender); 
      const res = await apiUpdatedUser(currentData?._id, formData)
      console.log(res)
       if(res?.success) {
        toast.success("Cập nhật hồ sơ thành công.")
        localStorage.setItem("page", 0)
        navigate("/")
       }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Đã xảy ra lỗi, vui lòng thử lại sau");
    }
  };
  useEffect(() => {
    dispatch(getCurrent())
    setValue("fullName", currentData?.fullName)

  },[setValue])
 
  return (
    <div className=' flex flex-col gap-4 bg-white h-screen w-full overflow-y-scroll overflow-x-hidden pb-28  scrollbar-hide shadow-sm'>
      <div className="flex items-center w-full max-sm:gap-28 gap-48 ">
      <KeyboardArrowLeftIcon
             sx={{ fontSize  : `${isMobile ? "30px" : "40px"}`, cursor : "pointer"}}
            
            onClick={() => window.history.back()}
        />
      <h3 className="text-center text-gray-600 py-2">Điền thông tin</h3>
      </div>
       
       <form onSubmit={handleSubmit(EditUser)} >
       <div className="flex flex-col gap-4">
      <div className="w-full h-12 bg-[#eee] py-2 ">
        <span className="text-lg font-semibold px-2 text-black max-sm:text-sm">Ảnh đại diện</span>
      </div> 
     <div  className="flex flex-col gap-8">
     </div>
        <div className="flex items-center px-4 py-4 max-sm:py-1  gap-2 max-sm:text-xs justify-between">
        <span className="">Logo người dùng</span>
        <div className="">
          <label htmlFor="fileUpload"  className="flex flex-col items-center ">
          <div className="flex items-center">
          
          {currentData && currentData?.avatar ?<img src={`${pathImage}/${currentData?.avatar}`} alt="" className="w-16 max-sm:w-10 h-16 max-sm:h-10" />  : <AddOutlinedIcon sx={{ fontSize : `${isMobile ? "15px" : "35px"}` }}/>}
          </div>
          <span>
          {imageStore?.name ? `${imageStore?.name}` : "  Chọn ảnh"}
        </span>
          <input type="file" accept="image/*" name="uploadfile" id="fileUpload"  style={{visibility:"hidden"}} onChange={(e) => (setImageStore(e.target.files[0]))}/>
          
          </label >
      </div>
        </div>
        <div className="w-full h-12 bg-[#eee] py-2">
        <span className="text-lg font-semibold px-2 text-black max-sm:text-sm">Thông tin chứng nhận</span>
      </div> 
        <div className="flex flex-col px-4 py-4 max-sm:py-1 border-b gap-2 max-sm:text-xs">
            <label htmlFor="name"  className=" ">Tên người dùng</label>
            <input type="text" className="w-full py-2 outline-none bg-transparent" placeholder="Vui lòng nhập tên thật" {...register("fullName")}/>
        </div>
       
        <div  className="flex flex-col gap-8">
     <div className="px-2">
      <Autocomplete
            disablePortal
            options={gender.map((option) => option.name)}
            className="w-full h-[40px] outline-none"
            value={currentData?.gender === "other" ? "Khác" : currentData?.gender === "male" ? "Nam" : "Nữ"}
            onChange={(event, newValue) => {
            setValues(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Giới tính" />}
        />
      </div>
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
       <button className="px-8 py-4  max-sm:text-xs w-full rounded-full bg-red-500 text-white"  type="submit">Cập nhật hồ sơ </button>
       </div>
       </form>  
     
    </div>
  )
}

export default EditProfileUser