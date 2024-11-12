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
import { apiAddToCart } from "@/services/userService"
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
const RegisterStore = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
    reset
  } = useForm();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [value, setValue] = useState("");
  
    const [loading, setLoading] = useState(false)
  const location = useLocation();
  const  checked  = location.state  
  const [imageStore, setImageStore] = useState("")
  const [fontId, setFontId] = useState("")
  const [backId, setBackId] = useState("")
  const [store, setStore] = useState("")
  const [yourFace, setYourFace] = useState("")
  const createStore = async (data) => {
    try {
      const formData = new FormData();
      formData.append("industry", value)
      formData.append("images", imageStore)
      formData.append("fullname", data?.fullname); 
      formData.append("phone", data?.phone); 
      formData.append("idYourself", data?.idYourself); 
      formData.append("nameStore",  data?.nameStore); 
      formData.append("service", checked); 
      formData.append("descriptionStore", data?.descriptionStore); 
      formData.append("front", fontId); 
      formData.append("back", backId); 
      formData.append("yourFace", yourFace); 
      formData.append("emailYourself", data?.emailYourself); 
      formData.append("area", data?.area); 
      formData.append("street",  data?.street)
      const res = await apiCreatestore(formData)
      console.log(res)
       if(res?.success) {
        toast.success("Đã đăng kí thành công! Vui lòng đợi quản trị viên duyệt.")
        localStorage.setItem("page", 0)
        navigate("/")
       }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Đã xảy ra lỗi, vui lòng thử lại sau");
    }
  };
  const getStore = async() => {
    const res = await apiGetMyStore()
    setStore(res[0])
  }
  useEffect(() => {
    getStore()
  }, [])
  
 
  console.log(store)
  return (
    <div className=' flex flex-col gap-4 bg-white h-screen w-full overflow-y-scroll overflow-x-hidden pb-28  scrollbar-hide shadow-sm'>
      <div className="flex items-center w-full max-sm:gap-28 gap-48 ">
      <KeyboardArrowLeftIcon
             sx={{ fontSize  : `${isMobile ? "30px" : "40px"}`, cursor : "pointer"}}
            
            onClick={() => window.history.back()}
        />
      <h3 className="text-center text-gray-600 py-2">Điền thông tin</h3>
      </div>
       
       {store && store?.active === "access" || store?.active !== "wait"  && <form onSubmit={handleSubmit(createStore)} >
       <div className="flex flex-col gap-4">
      <div className="w-full h-12 bg-[#eee] py-2 ">
        <span className="text-lg font-semibold px-2 text-black max-sm:text-sm">Thông tin cơ bản</span>
      </div> 
     <div  className="flex flex-col gap-8">
     <div className="px-2">
      <Autocomplete
            disablePortal
            options={listLeftCategories.map((option) => option.name)}
            className="w-full h-[40px] outline-none"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Ngành kinh doanh" />}
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
        <div className="flex items-center px-4 py-4 max-sm:py-1  gap-2 max-sm:text-xs justify-between">
        <span className="">Logo cửa hàng</span>
        <div className="">
          <label htmlFor="fileUpload"  className="flex flex-col items-center ">
          <AddOutlinedIcon sx={{ fontSize : `${isMobile ? "15px" : "35px"}` }}/>
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
        <div className="flex items-center px-4 py-4 max-sm:py-1 border-b gap-2 max-sm:text-xs">
            <input type="text" className="w-full py-2 outline-none bg-transparent" placeholder="Vui lòng nhập tên thật" {...register("fullname")}/>
        </div>
        <div className="flex items-center px-4 py-4 max-sm:py-1 border-b gap-2 max-sm:text-xs">
            <input type="text" className="w-full py-2 outline-none bg-transparent" placeholder="Vui lòng nhập số điện thoại" {...register("phone")}/>
        </div>
        <div className="flex items-center px-4 py-4 max-sm:py-1 border-b gap-2 max-sm:text-xs">
            <input type="text" className="w-full py-2 outline-none bg-transparent" placeholder="Vui lòng nhập số căn cước" {...register("idYourself")}/>
        </div>
        <div className="flex items-center px-4 py-4 max-sm:py-1 border-b gap-2 max-sm:text-xs">
            <input type="text" className="w-full py-2 outline-none bg-transparent" placeholder="Vui lòng nhập email" {...register("emailYourself")}/>
        </div>
     
        <div className="w-full h-12 bg-[#eee] py-2">
        <span className="text-lg font-semibold px-2 text-black max-sm:text-sm">Giấy tờ tùy thân</span>
      </div> 
     <div className="flex items-center gap-2 w-full justify-between px-8">
     <div className="w-[30%] flex flex-col gap-2 items-center max-sm:text-xs ">
          <AddOutlinedIcon sx={{ fontSize : `${isMobile ? "15px" : "35px"}` }}/>
          <label htmlFor="fileFront" className="text-center">{fontId?.name ? `${fontId?.name}` : "Mặt trước căn cước công dân"}</label>
          <input type="file" accept="image/*" name="uploadfile" id="fileFront" style={{visibility:"hidden"}} onChange={(e) => (setFontId(e.target.files[0]))}/>
      </div>
      <div className="w-[30%] flex flex-col gap-2 items-center max-sm:text-xs">
      <AddOutlinedIcon sx={{ fontSize : `${isMobile ? "15px" : "35px"}` }}/>

          <label htmlFor="fileBack" className="text-center">{backId?.name ? `${backId?.name}` : "Mặt sau căn cước công dân"}</label>
          <input type="file" accept="image/*" name="uploadfile" id="fileBack" style={{visibility:"hidden"}} onChange={(e) => (setBackId(e.target.files[0]))}/>
      </div>
      <div className="w-[30%] flex flex-col gap-2 items-center max-sm:text-xs">
      <AddOutlinedIcon sx={{ fontSize : `${isMobile ? "15px" : "35px"}` }}/>

          <label htmlFor="fileFace" className="text-center">{yourFace?.name ? `${yourFace?.name}` : "Ảnh chân dung"}</label>
          <input type="file" accept="image/*" name="uploadfile" id="fileFace" style={{visibility:"hidden"}} onChange={(e) => (setYourFace(e.target.files[0]))}/>
      </div>
     </div>
     <div className="w-full h-12 bg-[#eee] ">
        <span className="text-lg font-semibold px-2 text-black max-sm:text-sm">Thông tin chứng nhận</span>
      </div> 
        <div className="flex items-center px-4 py-4 max-sm:py-1 border-b gap-2 max-sm:text-xs">
            <input type="text" className="w-full py-2 outline-none bg-transparent" placeholder="Vui lòng nhập tên cửa hàng" {...register("nameStore")}/>
        </div>
        <div className="flex items-center px-4 py-4 max-sm:py-1 border-b gap-2 max-sm:text-xs">
          <textarea name="" id="" className="w-full py-2 outline-none bg-transparent scrollbar-hide" placeholder="Vui lòng nhập mô tả" {...register("descriptionStore")}></textarea>
        </div>
        <div className="flex items-center px-4 py-4 max-sm:py-1 border-b gap-2 max-sm:text-xs">
            <input type="text" className="w-full py-2 outline-none bg-transparent" placeholder="Vui lòng nhập khu vực" {...register("area")}/>
        </div>
        <div className="flex items-center px-4 py-4 max-sm:py-1 border-b gap-2 max-sm:text-xs">
            <input type="text" className="w-full py-2 outline-none bg-transparent" placeholder="Tên đường, tòa nhà, số nhà" {...register("street")}/>
        </div>
        <div className="flex flex-col gap-2 px-4 max-sm:text-xs">
          <span className="max-sm:text-xs text-black font-medium">1.Vui lòng điền đầy đủ thông tin trước khi gửi. Sau khi gửi đi không thể thay đổi thông tin.</span>
          <span className="max-sm:text-xs text-black font-medium">2. Thông tin chỉ được sử dụng cho ứng dụng xác thực tên thật để đảm bảo an ninh thông tin của bạn</span>
        </div>
       </div>
       <div className="fixed bottom-0 w-[30%] max-sm:w-full py-0.5">
       <button className="px-8 py-4  max-sm:text-xs w-full rounded-full bg-red-500 text-white"  type="submit">Đăng kí cửa hàng</button>
       </div>
       </form>  }
       {store &&  store?.active === "wait" && 
       
       <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center gap-4">
                <img src={noCart} alt="noCart" className="w-[220px] h-[134px]" />
                <span className="text-lg text-gray-400 font-medium max-sm:text-sm">Quản trị đang duyệt đơn đăng ký! Vui lòng đợi.</span>
            </div>
            <div className="flex items-center justify-center" onClick={() =>{ 
              localStorage.setItem("page", 0)
              navigate("/")
            }}>
                <button className="w-[167px] bg-[#fa3f3f] text-white text-sm px-2 py-4 rounded-full max-sm:text-xs max-sm:py-3">Quay lại trang chủ</button>
            </div>
       </div>}
    </div>
  )
}

export default RegisterStore