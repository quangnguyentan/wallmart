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
import { apiCreateOrder, apiGetOrder, apiGetOrderById, apiOrderPayment } from "@/services/orderServer"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import hr from "@/assets/hr.png"
import { apiGetAddressById } from "@/services/addressService"
const OrderCart = () => {
  const [activeSwitchText, setActiveSwitchText] = useState(false)
  const navigate = useNavigate()
  const location = useLocation();
  const { isChecked,  selectedAddress } = location.state 
  const isMobile = useMediaQuery("(max-width:600px)");
  const [loading, setLoading] = useState(false);
  const [money, setMoney] = useState("")
  const [order, setOrder] = useState("")
  const dispatch = useDispatch();
  const { currentData } = useSelector((state) => state.user);
  const totalBuy = isChecked && isChecked?.reduce((initValue, currentValue) => {
    const totalProductPrice = (currentValue?.product?.price || currentValue?.price) * currentValue?.quantity;
    // Cộng dồn vào tổng tiền (initValue)
    
    return initValue + totalProductPrice;
  },0)
 
  const fetchOrder = async() => {
    const res = await apiGetAddressById ()
    setOrder(res)
  }
  const onCreateAddressOrder = async () => {
    const res  = await apiOrderPayment({productsInCart : isChecked, selectedAddress : selectedAddress })
    if(res?.success) {
        toast.success("Đặt hàng thành công")
        navigate("/order")
    }
    // toast.success("Thêm địa chỉ thành công")
    // navigate("/order-cart", { state : { isChecked } })
  }
  useEffect(() => {
    fetchOrder()
  }, [])
  return (
    <div className=' flex flex-col gap-4 bg-gray-50 h-screen w-full relative'>
      <div className="flex items-center w-full max-sm:gap-28 gap-48 ">
      <KeyboardArrowLeftIcon
             sx={{ fontSize  : `${isMobile ? "30px" : "40px"}`, cursor : "pointer"}}
            
            onClick={() => window.history.back()}
        />
      <h3 className="text-center text-gray-600 py-2">Thanh toán</h3>
      </div>
      <div className="flex items-center px-2 cursor-pointer" onClick={() => navigate("/add-location", { state: isChecked })}>
  {selectedAddress ? (
    <div className="flex flex-col gap-2 bg-white px-4" key={selectedAddress?._id}>
      <div className="flex items-center gap-1 w-full py-4">
        <LocationOnOutlinedIcon sx={{ fontSize: isMobile ? "20px" : "25px" }} />
        <div className="flex flex-col gap-1 py-2">
          <div className="flex gap-1 items-center">
            <span className="max-sm:text-xs text-black font-semibold text-lg">{selectedAddress?.revicerName}</span>
            <span className="max-sm:text-xs text-black font-semibold text-lg">{selectedAddress?.phone}</span>
          </div>
          <div className="flex items-center gap-1 pb-2">
            <span className="max-sm:text-xs text-black font-semibold text-lg">{selectedAddress?.province}</span>
            <span className="max-sm:text-xs text-black font-semibold text-lg"> {selectedAddress?.city}</span>
            <span className="max-sm:text-xs text-black font-semibold text-lg">{selectedAddress?.stress}</span>
          </div>
        </div>
      </div>
      <img src={hr} alt="hr" className="py-2" />
    </div>
  ) : (
    <div className="flex items-center justify-center gap-1 w-full">
      <LocationOnOutlinedIcon sx={{ fontSize: isMobile ? "20px" : "25px" }} />
      <span className="max-sm:text-xs text-black font-semibold text-lg">Thêm địa chỉ</span>
    </div>
  )}
</div>

       {isChecked?.length > 0 ? <div className="pb-40 px-2">
        <div className="flex flex-col gap-4 ">
         {isChecked?.map((product) => (
            <div key={product?._id} className="rounded-xl rounded-b-none bg-white py-4 px-4 flex flex-col gap-2">
              <h3 className="max-sm:text-xs text-black font-semibold">{product?.store?.inforByStore?.nameStore}</h3>
              <div className="flex items-center justify-between ">
             <div className="flex items-center gap-8">
            
                <img className="w-28 h-28 max-sm:w-20 max-sm:h-20" src={`${pathImage}/${product?.product?.photos[0]|| product?.photos[0]}`} alt="product" />
                <div className="flex flex-col gap-2 ">
                  <span className="line-clamp-2 text-lg max-sm:text-sm text-black font-semibold">{product?.product?.title}</span>
                  <span className="text-red-500 text-base font-semibold max-sm:text-sm">${product?.product?.price}/sản phẩm</span>
                  <span className="max-sm:text-sm text-base font-semibold text-black">Số lượng mua: {product?.quantity}</span>

                </div>
             </div>
                

              </div>
            </div>
         ))}
         
       </div>
       <div className="flex flex-col gap-4 bg-white rounded-b-xl py-4">

       <div className="flex items-center justify-between px-2 text-lg font-semibold text-black border-b py-2 max-sm:text-xs">
       <span>Khuyến mãi</span>
       <span>$0.00</span>
       </div>
       <div className="flex items-center justify-between px-2 text-lg font-semibold text-black border-b py-2 max-sm:text-xs">
       <span>Chi phí vận chuyển</span>
       <span>$0.00 Bao vận chuyển</span>
       </div>
       <div className="flex items-center justify-between px-2 text-lg font-semibold text-black py-2 pb-4 max-sm:text-xs">
       <span>Tổng thanh toán</span>
       <span className="max-sm:text-sm text-red-500 font-semibold">${}</span>
       </div>
       </div>
       </div>
       : <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center gap-4">
                <img src={noCart} alt="noCart" className="w-[220px] h-[134px]" />
                <span className="text-lg text-gray-400 font-medium max-sm:text-sm">Giỏ hàng trống</span>
            </div>
            <div className="flex items-center justify-center" onClick={() => navigate("/store")}>
                <button className="w-[167px] bg-[#fa3f3f] text-white text-sm px-2 py-4 rounded-full max-sm:text-xs max-sm:py-3">Bắt đầu mua sắm</button>
            </div>
       </div>}
       <div className="fixed bottom-0 w-[30%] max-sm:w-full items-center justify-center flex  mx-auto h-16 bg-slate-100 shadow-md">
          <div className="flex items-center justify-between w-full px-4 max-sm:px-1">
          <span className="max-sm:text-[11px] text-black text-lg font-semibold">Số tiền của bạn: <span className="text-red-500 max-sm:text-[11px]">${currentData?.deposit}</span></span>
         <div className="flex gap-2 items-center line-clamp-1">
          <span className="max-sm:text-[11px] text-black text-lg font-semibold">Tổng tiền:</span>
          <span className="max-sm:text-[11px] text-red-500 font-semibold text-xl">${isChecked?.reduce((initValue, currentValue) => {
            const totalProductPrice = (currentValue?.product?.price || currentValue?.price) * currentValue?.quantity;
            return initValue + totalProductPrice;
          },0)}</span>
         </div>
         

          <button className="px-8 py-2 max-sm:text-[10px] rounded-xl bg-red-500 text-white" onClick={() => {
            if(currentData?.deposit >= totalBuy && isChecked && selectedAddress) {
              onCreateAddressOrder()
            }else{
              toast.error(currentData?.deposit < totalBuy ? "Bạn không đủ tiền để thanh toán" : "Bạn chưa chọn địa chỉ hoặc đơn hàng")
            }
          }} type="submit">Đặt hàng</button>
          </div>
         </div>
    </div>
  )
}

export default OrderCart