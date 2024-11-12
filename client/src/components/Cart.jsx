import noCart from "@/assets/noCart.png"
import { pathImage } from "@/lib/helper"
import { getCurrent } from "@/stores/actions/userAction"
import { useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { apiAddToCart } from "@/services/userService"
import toast from "react-hot-toast"
const Cart = () => {
  const [activeSwitchText, setActiveSwitchText] = useState(false)
  const navigate = useNavigate()
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState([])
  const [isCheckedAll, setIsCheckedAll] = useState(false)

  const { currentData } = useSelector((state) => state.user);

  const onChangeChecked = (product) => {
    const check = isChecked?.some((item) => item?._id === product?._id)
    if(check){
      console.log("abc")
      setIsChecked(isChecked.filter(item => item?._id !== product?._id));
     }else{
      setIsChecked([...isChecked, product])
     }
   
  }
  const onChangeCheckedAll = (data) => {
    if(isCheckedAll ) {
      setIsChecked(data)
    }else{
      setIsChecked([])
    }
    
  }
  const addToCart = async(product, type) => {
    if(type === "increment") {
        const res = await apiAddToCart({
            quantity : 1,
            product : product?.product?._id,
            store : product?.store?._id,
            color : product?.color,
            size : product?.size
          })
          if(res?.success) {
            toast.success("Cập nhật giỏ hàng thành công")
            dispatch(getCurrent())
        }
    }else{
      const res = await apiAddToCart({
        quantity : -1,
        product : product?.product?._id,
        store : product?.store?._id,
        color : product?.color,
        size : product?.size
      })
      if(res?.success) {
        toast.success("Cập nhật giỏ hàng thành công")
        dispatch(getCurrent())

    }
    }
    
  }
  useEffect(() => {
    dispatch(getCurrent())
  },[])
  return (
    <div className=' flex flex-col gap-4 bg-gray-50 h-screen w-full relative'>
      <h3 className="w-full text-center text-gray-600 bg-white py-2 shadow-sm">Giỏ hàng</h3>
        <div className='flex items-center justify-between px-2'>
            <span className="text-xl max-sm:text-sm">Tổng cộng {currentData?.cart?.length}</span>
            <span className="text-xl cursor-pointer max-sm:text-sm" onClick={() => setActiveSwitchText(!activeSwitchText)}>{activeSwitchText ? "Hoàn thành" : "Bỏ sản phẩm"}</span>
        </div>
       {currentData?.cart?.length > 0 ? <div className="px-2 flex flex-col gap-4 pb-40">
         {currentData?.cart?.map((product) => (
            <div key={product?._id} className="rounded-xl bg-white py-2 px-4 flex flex-col gap-2">
              <h3 className="max-sm:text-sm font-semibold">{product?.store?.inforByStore?.nameStore}</h3>
              <div className="flex items-center justify-between ">
             <div className="flex items-center gap-8">
             <input type="checkbox" id="checkbox"  checked={isChecked?.length === currentData?.cart?.length ? isChecked?.length === currentData?.cart?.length : isChecked?.some((item) => item?._id === product?._id)} onChange={() => onChangeChecked(product)} />
                <img className="w-28 h-28 max-sm:w-20 max-sm:h-20" src={`${pathImage}/${product?.product?.photos[0]}`} alt="product" />
                <div className="flex flex-col gap-2 ">
                  <span className="line-clamp-1">{product?.product?.title}</span>
                  <span>${product?.product?.price}</span>
                </div>
             </div>
                <div className="flex items-center gap-2 border rounded-[4px]">
                   <div className="px-3 py-1 rounded-l-[4px] bg-gray-100 cursor-pointer" onClick={() => {
                      addToCart(product,"decrement")
                   }}>
                    <RemoveOutlinedIcon sx={{ fontSize : "15px" }} />
                   </div>
                    <div className="px-2">
                    <span>{product?.quantity}</span>
                    </div>
                    <div className="px-3 py-1 rounded-r-[4px] bg-gray-100 cursor-pointer" onClick={() => {
                      addToCart(product,"increment")
                    
                    }
                    }>
                    <AddOutlinedIcon sx={{ fontSize : "15px" }} />
                   </div>
                  </div>

              </div>
            </div>
         ))}
         
       </div>: 

       
       <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center gap-4">
                <img src={noCart} alt="noCart" className="w-[220px] h-[134px]" />
                <span className="text-lg text-gray-400 font-medium max-sm:text-sm">Giỏ hàng trống</span>
            </div>
            <div className="flex items-center justify-center" onClick={() => navigate("/store")}>
                <button className="w-[167px] bg-[#fa3f3f] text-white text-sm px-2 py-4 rounded-full max-sm:text-xs max-sm:py-3">Bắt đầu mua sắm</button>
            </div>
       </div>}
      {currentData?.cart?.length > 0 &&  <div className="fixed bottom-20 w-[30%] max-sm:w-full items-center justify-center flex  mx-auto h-16 bg-slate-100 shadow-md">
          <div className="flex items-center justify-between px-2 w-full ">
          <div className="flex items-center gap-2">
          <input type="checkbox"  checked={isChecked?.length === currentData?.cart?.length} onChange={() => onChangeCheckedAll(currentData?.cart)} onClick={() => setIsCheckedAll(!isCheckedAll)}/>

          <span className="max-sm:text-xs">Chọn tất cả {isChecked?.length} </span>
          </div>
         <div className="flex flex-col items-center line-clamp-1  ">
          <span className="max-sm:text-xs">Tổng tiền</span>
         <span className="max-sm:text-sm text-red-500 font-semibold">${currentData?.cart?.reduce((initValue, currentValue) => {
            const totalProductPrice = currentValue?.product?.price * currentValue?.quantity;
            // Cộng dồn vào tổng tiền (initValue)
            return initValue + totalProductPrice;
          },0)}</span>
         </div>
          <button className="px-4 py-2 max-sm:text-xs rounded-xl bg-red-500 text-white" onClick={() => {
            navigate("/order-cart", {state : {isChecked }})
          }}>Thanh toán</button>
          </div>
         </div>}
    </div>
  )
}

export default Cart