import noCart from "@/assets/noCart.png"
import { pathImage } from "@/lib/helper"
import { getCurrent } from "@/stores/actions/userAction"
import { useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { apiAddToCart } from "@/services/userService"
import toast from "react-hot-toast"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { apiGetOrder, apiGetOrderById } from "@/services/orderServer"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import hr from "@/assets/hr.png"
import { apiGetAddressById } from "@/services/addressService"

const LocationOrder = () => {
  const navigate = useNavigate()
  const isMobile = useMediaQuery("(max-width:600px)");
  const [order, setOrder] = useState("")
  const [selectedAddress, setSelectedAddress] = useState([])
  const dispatch = useDispatch();
  const location = useLocation();
  const  isChecked  = location.state 
  const fetchOrder = async() => {
    const res = await apiGetAddressById()
    setOrder(res)
  }
  
  useEffect(() => {
    fetchOrder()
  }, [])
 console.log(order)

  return (
    <div className=' flex flex-col gap-4 bg-gray-50 h-screen w-full relative'>
      <div className="flex items-center w-full max-sm:gap-24 gap-48 ">
      <KeyboardArrowLeftIcon
             sx={{ fontSize  : `${isMobile ? "30px" : "40px"}`, cursor : "pointer"}}
            
            onClick={() => window.history.back()}
        />
      <h3 className="text-center text-gray-600 py-2 max-sm:text-sm">Địa chỉ nhận hàng</h3>
      </div>
       
       {order?.length > 0 ? <div className="pb-40 px-2">
        <div className='flex items-center px-2 w-full '>
            {order?.length > 0 ? <div className="flex flex-col w-full">
              {order?.map((orders) => (
            <>
           <div className="flex flex-col gap-2 bg-white py-2 px-4 cursor-pointer"  key={orders?._id} onClick={() => {
             setSelectedAddress(orders)
             navigate("/order-cart", {state : { isChecked, selectedAddress }})
           }}>
           <div className="flex items-center gap-1 w-full ">
                <LocationOnOutlinedIcon sx={{ fontSize : `${isMobile}` ? "20px" : "25px" }}/>
               <div className="flex flex-col gap-1 py-2 ">
              <div className="flex gap-1 items-center">
              <span className="max-sm:text-xs text-black font-semibold text-lg">{orders?.revicerName}</span>
              <span className="max-sm:text-xs text-black font-semibold text-lg">{orders?.phone}</span>
              </div>
              <div className="flex items-center gap-1 pb-2">
              <span className="max-sm:text-xs text-black font-semibold text-lg">{orders?.province}</span>
               <span className="max-sm:text-xs text-black font-semibold text-lg">{orders?.city}</span>
               <span className="max-sm:text-xs text-black font-semibold text-lg">{orders?.stress}</span>

              </div>
               </div>
            </div>
            <div className="flex items-end w-full justify-end gap-4 px-4 max-sm:text-xs">
            <div className="flex items-center gap-1 cursor-pointer">
             <span>Chỉnh sửa</span>
             <BorderColorOutlinedIcon sx={{ fontSize :  `${isMobile ? "15px" : "20px"}` }}/>
             </div>
             <div className="flex items-center gap-1 cursor-pointer">
             <span>Xóa</span>
             <DeleteOutlineOutlinedIcon sx={{ fontSize :  `${isMobile ? "15px" : "20px"}` }}/>
             </div>
            </div>
            <img src={hr} alt="hr" className="pt-8" />
           </div>
              </>
               
              ))}

            </div> : <div className="flex items-center justify-center gap-1 w-full">
                    <LocationOnOutlinedIcon sx={{ fontSize : `${isMobile}` ? "20px" : "25px" }}/>
                    <span className="max-sm:text-xs text-black font-semibold text-lg">Thêm địa chỉ</span>
                </div>}
        </div>
       </div>
       : <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center gap-4">
                <img src={noCart} alt="noCart" className="w-[220px] h-[134px]" />
                <span className="text-lg text-gray-400 font-medium max-sm:text-sm">Không có địa chỉ nào !</span>
            </div>
            
       </div>}
       <div className="fixed bottom-0 w-[30%] max-sm:w-full items-center justify-center flex  mx-auto h-16 bg-slate-100 shadow-md">
         
          <button className="px-8 py-4  max-sm:text-xs w-full rounded-xl bg-red-500 text-white" onClick={() => {
            if(isChecked){
              navigate("/add-address", { state : isChecked})
            }else{
              navigate("/add-new-address")
            }
          }
          }>Thêm dịa chỉ</button>
         </div>
    </div>
  )
}

export default LocationOrder