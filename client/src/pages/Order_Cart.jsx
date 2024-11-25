import noCart from "@/assets/noCart.png"
import { pathImage } from "@/lib/helper"
import { getCurrent } from "@/stores/actions/userAction"
import { Switch, useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { apiAddToCart, apiGetAllUser } from "@/services/userService"
import toast from "react-hot-toast"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { apiCreateOrder, apiGetOrder, apiGetOrderById, apiOrderPayment, apiOrderPaymentBot } from "@/services/orderServer"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import hr from "@/assets/hr.png"
import { apiGetAddressById } from "@/services/addressService"
import { useForm } from "react-hook-form"
const Order_Cart = () => {
  const [activeSwitchText, setActiveSwitchText] = useState(false)
  const navigate = useNavigate()
  const location = useLocation();
  const { isChecked,  id } = location.state 
  const isMobile = useMediaQuery("(max-width:600px)");
  const [loading, setLoading] = useState(false);
  const [money, setMoney] = useState("")
  const [order, setOrder] = useState("")
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
    reset
  } = useForm();
  const [userList, setUserList] = useState([])
  const { currentData } = useSelector((state) => state.user);
  useEffect(() => {
    getUsers();
  }, []);
  const [isCheck, setIsCheck] = useState([])
  const [isCheckedAll, setIsCheckedAll] = useState(false)


  const onChangeChecked = ( product) => {
 
    const check = isCheck?.some((item) => item?._id === product?._id)
    if(check){
      setIsCheck(isCheck.filter(item => item?._id !== product?._id));
     }else{
      setIsCheck([...isCheck, product])
     }
  }
  const onChangeCheckedAll = (data) => {
    if(isCheckedAll ) {
      setIsCheck(data)
    }else{
      setIsCheck([])
    }
    
  }

  let getUsers = async () => {
    try {
      const userResponse = await apiGetAllUser(); 
      const findRole = userResponse?.user?.filter(user => 
        user?.role === "bot"
      );
      setUserList(findRole);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);  // Đảm bảo setLoading là false ngay cả khi có lỗi
    }
  };
  const totalBuy = isChecked && isChecked?.reduce((initValue, currentValue) => {
    const totalProductPrice = (currentValue?.product?.price || currentValue?.price) * currentValue?.quantity;
    // Cộng dồn vào tổng tiền (initValue)
    
    return initValue + totalProductPrice;
  },0)
 
  const fetchOrder = async() => {
    const res = await apiGetAddressById ()
    setOrder(res)
  }

  const onCreateAddressOrder = async (data) => {
    // isCheck?.map(product => {
    //   if( isCheck?.length > product?.quantity) {
    //    toast.error("Sản phẩm không đủ để đặt hàng" )
    //   }
    // } );

    
    if(!data?.city || !data?.phone || !data?.province || !data?.revicerName || !data?.stress){
      toast.error("Bạn chưa nhập địa chỉ")
      return
    }
    const res  = await apiOrderPaymentBot({productsInCart : isChecked, selectedAddress: {
      ...data, 
      active: isChecked ? true : false // Thêm thông tin "active" vào
    }, usersList: isCheck , storeId : id})
    if(res?.success) {
      toast.success("Đặt hàng thành công")
      navigate("/order-list")
    }
    if(res?.err === 1) {
      toast.error(res?.msg)
    }
    // if(res?.success) {
    //     toast.success("Đặt hàng thành công")
    //     navigate("/order")
    // }
    // toast.success("Thêm địa chỉ thành công")
    // navigate("/order-cart", { state : { isChecked } })
  }
  useEffect(() => {
    fetchOrder()
  }, [])
  return (
    <div className=' flex flex-col gap-4 bg-gray-50 h-screen w-full relative'>
       <form onSubmit={handleSubmit(onCreateAddressOrder)}>

      <div className="flex items-center justify-center text-xl ">
      
      <h3 className="text-center text-gray-600 py-2">Thanh toán</h3>
      </div>
      <div className="flex items-center px-2 cursor-pointer" onClick={() => navigate("/add-location", { state: isChecked })}>
     
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
                  <span className="max-sm:text-sm text-base font-semibold text-black">Số lượng mua: {product?.quantityInit}</span>
                </div>
             </div>
                

              </div>
            </div>
         ))}
         
       </div>
       <div className="flex flex-col gap-4 bg-white rounded-b-xl py-4">

      
       <div className="flex items-center justify-between px-2 text-lg font-semibold text-black py-2 pb-4 max-sm:text-xs">
       <span>Tổng thanh toán</span>
       <span className="max-sm:text-sm text-red-500 font-semibold">${totalBuy}</span>
       </div>
       <div className="flex flex-col ">
        <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
            <span className="w-[30%] text-black font-semibold">Người nhận hàng</span>
            <input type="text" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập tên người nhận hàng"  {...register("revicerName")} />
         
        </div>
        
        <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
            <span className="w-[30%] text-black font-semibold">Số điện thoại</span>
            <input type="number" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập số điện thoại liên hệ" {...register("phone")}/>
        </div>
        <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
            <span className="w-[30%] text-black font-semibold">Tỉnh</span>
            <input type="text" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập tỉnh" {...register("province")}/>
        </div>
        <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
            <span className="w-[30%] text-black font-semibold">Thành phố</span>
            <input type="text" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập thành phố" {...register("city")}/>
        </div>
        <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
            <span className="w-[30%] text-black font-semibold">Tên đường, Tòa nhà, Số nhà</span>
            <input type="text" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập tên đường, tòa nhà, số nhà" {...register("stress")}/>
        </div>
       
       </div>
       <div className="py-4">
       
       </div>
       {userList?.map((user) => (
        <div className="flex items-center gap-8 px-4 " key={user?._id}>
             <input type="checkbox" id="checkbox" onClick={(e) => {
                e.stopPropagation()
             }}  checked={isCheck?.length === userList?.length ? isCheck?.length === userList?.length : isCheck?.some((item) => item?._id === user?._id)} onChange={() => onChangeChecked(user) } />
        <div className="flex items-center gap-2">
        <span>Tên: {user?.fullName}</span> 
        <span>({user?.role})</span>     
        </div>
        </div>
       ))}
        <div className="flex items-center gap-8 px-4">
          <input type="checkbox" checked={isCheck?.length === userList?.length} onChange={() => onChangeCheckedAll(userList)} onClick={(e) => {
            e.stopPropagation()
            setIsCheckedAll(!isCheckedAll)
          }}/>

          <span className="max-sm:text-xs">Chọn tất cả bot ({isCheck?.length}) </span>
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
      

       <div className="fixed bottom-0 w-[70%] right-48 max-sm:w-full items-center justify-center flex  mx-auto h-16 bg-slate-100 shadow-md">
       
          <div className="flex items-center justify-between w-full px-4 max-sm:px-1">
          {/* <span className="max-sm:text-[11px] text-black text-lg font-semibold">Số tiền của bạn: <span className="text-red-500 max-sm:text-[11px]">${currentData?.deposit}</span></span> */}
         <div className="flex gap-2 items-center line-clamp-1">
          <span className="max-sm:text-[11px] text-black text-lg font-semibold">Tổng tiền:</span>
          <span className="max-sm:text-[11px] text-red-500 font-semibold text-xl">${isChecked?.reduce((initValue, currentValue) => {
            const totalProductPrice = (currentValue?.product?.price || currentValue?.price) * currentValue?.quantity;
            return initValue + totalProductPrice;
          },0)}</span>
         </div>
         

          <button className="px-8 py-2 max-sm:text-[10px] rounded-xl bg-red-500 text-white" onClick={() => {
          

            // const isCheck = isChecked?.filter(user => user.deposit >= totalBuy);
          
          }} type="submit">Đặt hàng</button>
          </div>
         </div>
       </form>

    </div>
  )
}

export default Order_Cart