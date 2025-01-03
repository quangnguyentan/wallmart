import product_test from "@/assets/product_test.jpg"
import { pathImage } from "@/lib/helper"
import { apiGetOrderById } from "@/services/orderServer"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const Card_Order = ({hidden, type}) => {
  const [order, setOrder] = useState("")
  const navigate = useNavigate()
  const getMyOrder = async() => {
    const res = await apiGetOrderById()
    setOrder(res)
  }
  useEffect(() => {
    getMyOrder()
  },[])
  const totalAmount = order &&  order?.reduce((total, order) => {
    if (type === "wait" && order?.status === "waitPay") {
      return total + (order?.product?.price * order?.quantity || 0);
    }
    return total;
  }, 0);
  return (
    <div className="flex flex-col gap-2">
       {type === "wait" && <div className="flex justify-end font-semibold text-lg px-4 text-red-500">
            <span>Tổng tiền: ${totalAmount}</span>
         </div>}
      {order && order?.map((ord) => (
        <>
        {type === "all" &&  <>
          {ord?.product && <div className="px-2 bg-white flex flex-col gap-2 py-2 cursor-pointer" key={ord?._id} onClick={() => navigate(`/order_store/${ord?._id}`)} >
        <div className="flex items-center gap-2 text-balance font-medium text-gray-800 max-sm:text-xs">
            <span>Mã đơn hàng:</span>
            <span>{ord?._id}</span>
        </div>
        <h3 className="text-gray-600 text-lg max-sm:text-xs">{ord?.store?.inforByStore?.nameStore}</h3>
        <div className="flex justify-between gap-3 max-sm:text-xs">
            <div className="flex  gap-2">
            <img className="w-32 h-32 max-sm:w-20 max-sm:h-20 mix-blend-darken border rounded-xl" src={`${pathImage}/${ord?.product?.photos[0]}`} alt="" />
           <div className="flex flex-col gap-1">
           <span className="text-lg font-medium text-gray-800 max-sm:text-xs">{ord?.product?.title}  </span>
           <span className="text-gray-600 max-sm:text-xs">
                Color:{ord?.color};size:{ord?.size}
           </span>
            </div>
           </div>
           <div className="flex flex-col items-end">
           <span>{ord?.product?.price}</span>
           <span className="text-gray-600 font-semibold">X{ord?.quantity}</span>
           </div>
        </div>
        <div className="flex justify-end gap-2 text-lg font-semibold max-sm:text-xs">
            <span>Số tiền thực: </span>
            <span className="text-red-500">${ord?.product?.price}</span>
        </div>
    </div>}</>}
      {type === "wait" && ord?.status === "waitPay" &&  <>
      
      {ord?.product && <div className="px-2 bg-white flex flex-col gap-2 py-2 cursor-pointer" key={ord?._id} onClick={() => navigate(`/order_store/${ord?._id}`)}>
      <div className="flex items-center gap-2 text-balance font-medium text-gray-800 max-sm:text-xs ">
         <div>
            <span>Mã đơn hàng:</span>
            <span>{ord?._id}</span>
         </div>
        
      </div>
      <h3 className="text-gray-600 text-lg max-sm:text-xs">{ord?.store?.inforByStore?.nameStore}</h3>
      <div className="flex justify-between gap-3 max-sm:text-xs">
          <div className="flex  gap-2">
          <img className="w-32 h-32 max-sm:w-20 max-sm:h-20 mix-blend-darken border rounded-xl" src={`${pathImage}/${ord?.product?.photos[0]}`} alt="" />
         <div className="flex flex-col gap-1">
         <span className="text-lg font-medium text-gray-800 max-sm:text-xs">{ord?.product?.title}  </span>
         <span className="text-gray-600 max-sm:text-xs">
              Color:{ord?.color};size:{ord?.size}
         </span>
          </div>
         </div>
         <div className="flex flex-col items-end">
         <span>{ord?.product?.price}</span>
         <span className="text-gray-600 font-semibold">X{ord?.quantity}</span>
         </div>
      </div>
      <div className="flex justify-end gap-2 text-lg font-semibold max-sm:text-xs">
          <span>Số tiền thực: </span>
          <span className="text-red-500">${ord?.product?.price}</span>
      </div>
  </div>}
      </>}
      {type === "waitDelivery" && ord?.status === "waitDelivery" &&  <>
      {ord?.product && <div className="px-2 bg-white flex flex-col gap-2 py-2 cursor-pointer" key={ord?._id} onClick={() => navigate(`/order_store/${ord?._id}`)}>
      <div className="flex items-center gap-2 text-balance font-medium text-gray-800 max-sm:text-xs">
          <span>Mã đơn hàng:</span>
          <span>{ord?._id}</span>
      </div>
      <h3 className="text-gray-600 text-lg max-sm:text-xs">{ord?.store?.inforByStore?.nameStore}</h3>
      <div className="flex justify-between gap-3 max-sm:text-xs">
          <div className="flex  gap-2">
          <img className="w-32 h-32 max-sm:w-20 max-sm:h-20 mix-blend-darken border rounded-xl" src={`${pathImage}/${ord?.product?.photos[0]}`} alt="" />
         <div className="flex flex-col gap-1">
         <span className="text-lg font-medium text-gray-800 max-sm:text-xs">{ord?.product?.title}  </span>
         <span className="text-gray-600 max-sm:text-xs">
              Color:{ord?.color};size:{ord?.size}
         </span>
          </div>
         </div>
         <div className="flex flex-col items-end">
         <span>{ord?.product?.price}</span>
         <span className="text-gray-600 font-semibold">X{ord?.quantity}</span>
         </div>
      </div>
      <div className="flex justify-end gap-2 text-lg font-semibold max-sm:text-xs">
          <span>Số tiền thực: </span>
          <span className="text-red-500">${ord?.product?.price}</span>
      </div>
  </div>}
      </>}
      {type === "delivering" && ord?.status === "delivering" &&  <>
      {ord?.product && <div className="px-2 bg-white flex flex-col gap-2 py-2 cursor-pointer" key={ord?._id} onClick={() => navigate(`/order_store/${ord?._id}`)}>
      <div className="flex items-center gap-2 text-balance font-medium text-gray-800 max-sm:text-xs">
          <span>Mã đơn hàng:</span>
          <span>{ord?._id}</span>
      </div>
      <h3 className="text-gray-600 text-lg max-sm:text-xs">{ord?.store?.inforByStore?.nameStore}</h3>
      <div className="flex justify-between gap-3 max-sm:text-xs">
          <div className="flex  gap-2">
          <img className="w-32 h-32 max-sm:w-20 max-sm:h-20 mix-blend-darken border rounded-xl" src={`${pathImage}/${ord?.product?.photos[0]}`} alt="" />
         <div className="flex flex-col gap-1">
         <span className="text-lg font-medium text-gray-800 max-sm:text-xs">{ord?.product?.title}  </span>
         <span className="text-gray-600 max-sm:text-xs">
              Color:{ord?.color};size:{ord?.size}
         </span>
          </div>
         </div>
         <div className="flex flex-col items-end">
         <span>{ord?.product?.price}</span>
         <span className="text-gray-600 font-semibold">X{ord?.quantity}</span>
         </div>
      </div>
      <div className="flex justify-end gap-2 text-lg font-semibold max-sm:text-xs">
          <span>Số tiền thực: </span>
          <span className="text-red-500">${ord?.product?.price}</span>
      </div>
  </div>}
      </>}
      {type === "successfull" && ord?.status === "successfull" &&  <>
      {ord?.product && <div className="px-2 bg-white flex flex-col gap-2 py-2 cursor-pointer" key={ord?._id} onClick={() => navigate(`/order_store/${ord?._id}`)}>
      <div className="flex items-center gap-2 text-balance font-medium text-gray-800 max-sm:text-xs">
          <span>Mã đơn hàng:</span>
          <span>{ord?._id}</span>
      </div>
      <h3 className="text-gray-600 text-lg max-sm:text-xs">{ord?.store?.inforByStore?.nameStore}</h3>
      <div className="flex justify-between gap-3 max-sm:text-xs">
          <div className="flex  gap-2">
          <img className="w-32 h-32 max-sm:w-20 max-sm:h-20 mix-blend-darken border rounded-xl" src={`${pathImage}/${ord?.product?.photos[0]}`} alt="" />
         <div className="flex flex-col gap-1">
         <span className="text-lg font-medium text-gray-800 max-sm:text-xs">{ord?.product?.title}  </span>
         <span className="text-gray-600 max-sm:text-xs">
              Color:{ord?.color};size:{ord?.size}
         </span>
          </div>
         </div>
         <div className="flex flex-col items-end">
         <span>{ord?.product?.price}</span>
         <span className="text-gray-600 font-semibold">X{ord?.quantity}</span>
         </div>
      </div>
      <div className="flex justify-end gap-2 text-lg font-semibold max-sm:text-xs">
          <span>Số tiền thực: </span>
          <span className="text-red-500">${ord?.product?.price}</span>
      </div>
  </div>}
      </>}
      {type === "canceled" && ord?.status === "canceled" &&  <>
      {ord?.product && <div className="px-2 bg-white flex flex-col gap-2 py-2 cursor-pointer" key={ord?._id} onClick={() => navigate(`/order_store/${ord?._id}`)}>
      <div className="flex items-center gap-2 text-balance font-medium text-gray-800 max-sm:text-xs">
          <span>Mã đơn hàng:</span>
          <span>{ord?._id}</span>
      </div>
      <h3 className="text-gray-600 text-lg max-sm:text-xs">{ord?.store?.inforByStore?.nameStore}</h3>
      <div className="flex justify-between gap-3 max-sm:text-xs">
          <div className="flex  gap-2">
          <img className="w-32 h-32 max-sm:w-20 max-sm:h-20 mix-blend-darken border rounded-xl" src={`${pathImage}/${ord?.product?.photos[0]}`} alt="" />
         <div className="flex flex-col gap-1">
         <span className="text-lg font-medium text-gray-800 max-sm:text-xs">{ord?.product?.title}  </span>
         <span className="text-gray-600 max-sm:text-xs">
              Color:{ord?.color};size:{ord?.size}
         </span>
          </div>
         </div>
         <div className="flex flex-col items-end">
         <span>{ord?.product?.price}</span>
         <span className="text-gray-600 font-semibold">X{ord?.quantity}</span>
         </div>
      </div>
      <div className="flex justify-end gap-2 text-lg font-semibold max-sm:text-xs">
          <span>Số tiền thực: </span>
          <span className="text-red-500">${ord?.product?.price}</span>
      </div>
  </div>}
      </>}
       </>
      ))}
      
    </div>
  )
}

export default Card_Order