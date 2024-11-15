import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { apiAddToCartByStore, apiGetMyStore, apiOrderPaymentByStore } from '@/services/storeService';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pathImage } from '@/lib/helper';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetProduct } from '@/services/productService';
import toast from 'react-hot-toast';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
export default function DrawRight() {
  const [open, setOpen] = React.useState(true);
  const [storeList, setstoreList] = useState([])
  const [productList, setproductList] = useState([])
  const { currentData } = useSelector((state) => state.user); 
  const dispatch = useDispatch()

  

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const addToCart = async (product, type) => {
    if (type === "increment") {
      const res = await apiAddToCartByStore({
        quantity: 1,
        product: product?.product?._id,
        status : "not_paid"
      });
  
      if (res?.success) {
        toast.success("Cập nhật giỏ hàng thành công");
        // Cập nhật lại cart trong storeList mà không gọi lại fetchStore
        const updatedStore = { ...storeList };
        updatedStore.cart = updatedStore.cart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setstoreList(updatedStore); // Cập nhật trạng thái giỏ hàng trực tiếp
      }
    } else {
      const res = await apiAddToCartByStore({
        quantity: -1,
        product: product?.product?._id,
        status : "not_paid"

      });
  
      if (res?.success) {
        toast.success("Cập nhật giỏ hàng thành công");
        // Cập nhật lại cart trong storeList mà không gọi lại fetchStore
        const updatedStore = { ...storeList };
        updatedStore.cart = updatedStore.cart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setstoreList(updatedStore); // Cập nhật trạng thái giỏ hàng trực tiếp
      }
    }
  };
 
  
  
  // useEffect(() => {
  //   if(isLoggedIn && token)  dispatch(getCurrent())
  //  },[isLoggedIn, token, dispatch])
  let fetchStore = async () => {
    try {
      const store = await apiGetMyStore()
      console.log(store)
      setstoreList(store[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
   fetchStore();
  }, []);
  
  const onCreateAddressOrder = async () => {
    const res  = await apiOrderPaymentByStore({productsInCart : storeList?.cart})
    if(res?.success) {
        toast.success("Đặt hàng thành công")
        // navigate("/order")
    }
    // toast.success("Thêm địa chỉ thành công")
    // navigate("/order-cart", { state : { isChecked } })
  }
  // useEffect(() => {
  //   getUsers()
  // }, []);

  // let getUsers = async () => {
  //   try {
  //     const products = await apiGetProduct()
  //     setproductList(products);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const DrawerList = (
    <Box sx={{ width: 750 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {storeList?.cart?.length > 0 ? storeList && storeList?.cart?.map((product) => (
          product?.status === "not_paid" && (
          
            <Link key={product?._id}>
              <div className='flex flex-col gap-2 px-4'>
                <div className="px-2 bg-white flex flex-col gap-2 py-2">
                  <div className="flex items-center gap-2 text-balance font-medium text-gray-800 max-sm:text-xs">
                    <span>Số thứ tự:</span>
                    <span>{product?._id}</span>
                  </div>
                  <h3 className="text-gray-600 text-lg max-sm:text-xs">{product?.store?.inforByStore?.nameStore}</h3>
                  <div className="flex justify-between gap-3 max-sm:text-xs">
                    <div className="flex gap-8">
                      <img
                        className="w-32 h-32 max-sm:w-20 max-sm:h-20 mix-blend-darken rounded-xl border-none"
                        src={`${pathImage}/${product?.product?.photos[0]}`}
                        alt=""
                      />
                      <div className="flex flex-col gap-4">
                        <span className="text-lg font-medium text-gray-800 max-sm:text-xs line-clamp-2">{product?.product?.title}</span>
                        <div className="flex items-center gap-2 border w-fit rounded-[4px]">
                          <div
                            className="px-3 w-10 h-10 flex items-center justify-center max-sm:px-0.5 max-sm:py-0.5 py-1 rounded-l-[4px] bg-gray-100 cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault()
                              addToCart(product, "decrement");
                              e.stopPropagation();
                            }}
                          >
                            <RemoveOutlinedIcon sx={{ fontSize: "15px" }} />
                          </div>
                          <div className="px-2 max-sm:px-0">
                            <span>{product?.quantity}</span>
                          </div>
                          <div
                            className="px-3 w-10 h-10 flex items-center justify-center max-sm:px-0.5 max-sm:py-0.5 py-1 rounded-r-[4px] bg-gray-100 cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault()
                              addToCart(product, "increment");
                              e.stopPropagation();
                            }}
                          >
                            <AddOutlinedIcon sx={{ fontSize: "15px" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span>{product?.product?.price}</span>
                      <span className="text-gray-600 font-semibold">X{product?.quantity}</span>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 text-lg font-semibold max-sm:text-xs">
                    <span>Số tiền thực: </span>
                    <span className="text-red-500">${product?.product?.price}</span>
                  </div>
                </div>
              </div>
            </Link>
         
       
          )
        )) : <div className='w-full h-screen flex items-center justify-center text-2xl font-semibold'>
            Bạn chưa nhập đơn nào!
          </div>}
       
      </List>
      <Divider />
      {storeList?.cart?.length > 0 && (
  // Kiểm tra xem có bất kỳ sản phẩm nào có trạng thái "paid"
      storeList?.cart?.some((product) => product?.status === "not_paid") && (
    <div className="text-lg font-semibold px-4 py-4 flex items-center justify-between">
     <div>
      <span>Ví của bạn: </span>
      <span className="max-sm:text-sm text-red-500 font-semibold">{currentData?.deposit}</span>
     </div>

      <div className="text-lg font-semibold px-4 py-4">
        <span>Tổng tiền: </span>
        <span className="max-sm:text-sm text-red-500 font-semibold">
          {/* Tính tổng tiền của các sản phẩm có trạng thái "paid" */}
          ${storeList?.cart?.reduce((total, currentValue) => {
            if (currentValue?.status === "not_paid") {
              return total + (currentValue?.product?.price * currentValue?.quantity);
            }
            return total;
          }, 0)}
        </span>

        <div className="px-2 py-4 max-sm:py-2">
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCreateAddressOrder();
              // setTimeout(() => {
              //   window.location.reload();
              // }, 1000)
            }}
          >
            <span>Thanh toán</span>
            <div className="cart">
              <svg viewBox="0 0 36 26">
                <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
)}


    </Box>
  );
  
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
      <div className="shopping-bag">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
          <path
            fillRule="evenodd"
            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
            clipRule="evenodd"
          />
        </svg>
        <strong className="shopping-bag__counter">
        <span>
  {storeList?.cart?.filter((product) => product?.status === "not_paid").length}
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