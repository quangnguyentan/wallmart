import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import noCart from "@/assets/noCart.png"
import { pathImage } from "@/lib/helper"
import { getCurrent } from "@/stores/actions/userAction"
import { useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { apiAddToCart, apiGetUserById } from "@/services/userService"
import toast from "react-hot-toast"
import { apiAddToCartByStore, apiGetMyStore, apiGetstoreById, apiOrderPaymentByStore } from '@/services/storeService';
import { Link, useParams } from 'react-router-dom';
import { apiGetProduct } from '@/services/productService';
export default function DrawRightAdmin({ productItem, userId }) {
  const [open, setOpen] = React.useState(false);
  const [products, setProducts] = useState(productItem || [])
  const [storeList, setstoreList] = useState([])
  const [productList, setproductList] = useState([])
  const [quantity, setQuantity] = useState(1)
  const { isLoggedIn, token } = useSelector((state) => state.auth);
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate()
 
    const [currentData, setCurrentData] = useState(null)
  const dispatch = useDispatch()

  const { id } = useParams()

  const [activeSwitchText, setActiveSwitchText] = useState(false)


  const [isChecked, setIsChecked] = useState([])
  const [isCheckedAll, setIsCheckedAll] = useState(false)


  const onChangeChecked = ( product) => {
 
    const check = isChecked?.some((item) => item?._id === product?._id)
    if(check){
      setIsChecked(isChecked.filter(item => item?._id !== product?._id));
     }else{
      setIsChecked([...isChecked, product])
     }
   
  }
  
  useEffect(() => {
    if (productItem) {
      setProducts(productItem);
    }
  }, [productItem]);
  const onChangeCheckedAll = (data) => {
    if(isCheckedAll ) {
      setIsChecked(data)
    }else{
      setIsChecked([])
    }
    
  }
  const fetchGetByUserId = async (userId) =>{
    const res = await apiGetUserById(userId)
    if(res.success) {
        setCurrentData(res?.user)
    }
  }
  useEffect(() => {
    fetchGetByUserId(userId)
  },[])
  const onChangeQuantity = (product, type) => {
    const updatedProducts = products.map((item) => {
      if (item._id === product._id) {
        if (item.quantityInit >= item.quantity) {
            toast.error("Sản phẩm đã hết hàng! Không thể tăng thêm số lượng");
            return item; 
        }
        const newQuantity = type === "increment" 
          ? item.quantityInit + 1 
          : Math.max(1, item.quantityInit - 1);
        return { ...item, quantityInit: newQuantity };
      }
      return item;
    });
  
    setProducts(updatedProducts); // Cập nhật state để giao diện re-render
  };
  
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
   if(isLoggedIn && token)  dispatch(getCurrent())
  },[isLoggedIn, token, dispatch])

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

 
  const DrawerList = (
   <>
     {products && productItem &&  <Box className="w-[750px] max-sm:w-[250px]"  role="presentation" onClick={toggleDrawer(false)}>
      <List>
      <div className=' flex flex-col gap-4 bg-gray-50 h-screen w-full relative'>
      <h3 className="w-full text-center text-gray-600 bg-white py-2 shadow-sm">Giỏ hàng</h3>
        <div className='flex items-center justify-between px-2'>
            <span className="text-xl max-sm:text-sm">Tổng cộng {products?.length}</span>
            <span className="text-xl cursor-pointer max-sm:text-sm" onClick={() => setActiveSwitchText(!activeSwitchText)}>{activeSwitchText ? "Hoàn thành" : "Bỏ sản phẩm"}</span>
        </div>
       {products && products?.length> 0 ? <div className="px-4 flex flex-col gap-4 pb-40">
         {products?.map((product) => (
            <div key={product?._id} className="rounded-xl bg-white py-2 px-4 flex flex-col gap-2">
              <div className="flex items-center justify-between ">
             <div className="flex items-center gap-8 justify-between ">
             <input type="checkbox" id="checkbox" onClick={(e) => {
                e.stopPropagation()
             }}  checked={isChecked?.length === products?.length ? isChecked?.length === products?.length : isChecked?.some((item) => item?._id === product?._id)} onChange={() => onChangeChecked(product) } />
                <img className="w-28 h-28 max-sm:w-20 max-sm:h-20" src={`${pathImage}/${product?.product?.photos[0]}`} alt="product" />
                <div className="flex flex-col gap-2 ">
                  <span className="line-clamp-1">{product?.product?.title}</span>
                  <span>${product?.product?.price}</span>
                </div>
             </div>
                <div className="flex items-center gap-2 border rounded-[4px] ">
                   <div className="px-3 w-10 h-10 flex items-center justify-center  max-sm:px-0.5 max-sm:py-0.5 py-1 rounded-l-[4px] bg-gray-100 cursor-pointer" onClick={(e) => {
                      e.stopPropagation()
                      onChangeQuantity(product,"decrement")

                   }}>
                    <RemoveOutlinedIcon sx={{ fontSize : "15px" }} />
                   </div>
                    <div className="px-2 max-sm:px-0">
                    <span>{product?.quantityInit}</span>
                    </div>
                    <div className="px-3 w-10 h-10 flex items-center justify-center max-sm:px-0.5 max-sm:py-0.5 py-1 rounded-r-[4px] bg-gray-100 cursor-pointer" onClick={(e) => {
                        e.stopPropagation()
                      onChangeQuantity(product, "increment")
                    
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
           
       </div>}
      {products?.length > 0 &&  <div className="fixed bottom-4 w-[35%]   max-sm:w-full items-center justify-center flex  mx-auto right-14 h-16 bg-slate-100 shadow-md">
          <div className="flex items-center justify-between px-2 w-full ">
          <div className="flex items-center gap-2">
          <input type="checkbox"   checked={isChecked?.length === products?.length} onChange={() => onChangeCheckedAll(products)} onClick={(e) => {
            e.stopPropagation()
            setIsCheckedAll(!isCheckedAll)
          }}/>

          <span className="max-sm:text-xs">Chọn tất cả {isChecked?.length} </span>
          </div>
         <div className="flex flex-col items-center line-clamp-1  ">
          <span className="max-sm:text-xs">Tổng tiền</span>
         <span className="max-sm:text-sm text-red-500 font-semibold">${isChecked?.length === products?.length  ?  products?.reduce((initValue, currentValue) => {
            const totalProductPrice = currentValue?.product?.price * currentValue?.quantity;
            return initValue + totalProductPrice;
          },0) : isChecked?.reduce((initValue, currentValue) => {
            const totalProductPrice = currentValue?.product?.price * currentValue?.quantity;
            return initValue + totalProductPrice;
          },0)}</span>
         </div>
          <button className="px-4 py-2 max-sm:text-xs rounded-xl bg-red-500 text-white" onClick={(e) => {
            e.stopPropagation()
            if(isChecked?.length > 0) {
              navigate("/order-cart", {state : {isChecked, id }})

            }else{
              toast.error("Vui lòng chọn sản phẩm để thanh toán")
            }
          }} >Thanh toán</button>
          </div>
         </div>}
    </div>

       
      </List>
      <Divider />
      {storeList && storeList?.cart?.length > 0 && (
  // Kiểm tra xem có bất kỳ sản phẩm nào có trạng thái "paid"
      storeList?.cart?.some((product) => product?.status === "not_paid") && (
    <div className="text-lg font-semibold px-4 py-4 flex items-center justify-between">
     <div className='flex items-center justify-center flex-col gap-1'>
      <span className='max-sm:text-xs'>Số tiền của bạn: </span>
      <span className="max-sm:text-xs text-red-500 font-semibold">{currentData?.deposit}</span>
     </div>

      <div className="text-lg font-semibold px-4 py-4 max-sm:px-2 max-sm:py-2 flex flex-col gap-1">
       <div className='flex items-center justify-center gap-2'>
        <span className='max-sm:text-xs'>Tổng tiền: </span>
        <span className="max-sm:text-xs text-red-500 font-semibold ">
          {/* Tính tổng tiền của các sản phẩm có trạng thái "paid" */}
          ${storeList?.cart?.reduce((total, currentValue) => {
            if (currentValue?.status === "not_paid") {
              return total + (currentValue?.product?.price * currentValue?.quantity);
            }
            return total;
          }, 0)}
        </span>
       </div>     
      </div>
    </div>
  )
)}
    </Box>}
   </>
  );
  
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
      <div className="shopping-bag max-sm:w-7 max-sm:h-7">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
          <path
            fillRule="evenodd"
            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
            clipRule="evenodd"
          />
        </svg>
        <strong className="shopping-bag__counter">
        <span>
          {products &&  products?.length}
        </span>
        </strong>
      </div>
      </Button>
  
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}