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
import { apiAddToCartByStore, apiGetMyStore, apiGetstoreById, apiOrderPaymentByStore } from '@/services/storeService';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { pathImage } from '@/lib/helper';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetProduct } from '@/services/productService';
import toast from 'react-hot-toast';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useMediaQuery } from '@mui/material';
export default function DrawRight({ products }) {
 
  const [open, setOpen] = React.useState(false);
  const [storeList, setstoreList] = useState([])
  const [productList, setproductList] = useState([])
  const { currentData } = useSelector((state) => state.user); 
  const dispatch = useDispatch()
  const isMobile = useMediaQuery("(max-width:600px)");
  const { id } = useParams()
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const addToCart = async (product, type) => {
    const quantity = type === "increment" ? 1 : -1;
    try {
      const res = await apiAddToCartByStore({
        quantity,
        product: product?.product?._id,
        status: "not_paid",
      });
      if (res?.success) {
        toast.success("Cập nhật giỏ hàng thành công");
        fetchStore(); // Gọi lại để cập nhật danh sách
      } else {
        toast.error(res?.msg);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
 
  
  
  console.log(id)
  let fetchStore = async () => {
    try {
      const store = await apiGetMyStore()
      setstoreList(store[0]);
    } catch (error) {
      console.log(error);
    }
  };
  let fetchStoreById = async (id) => {
    try {
      const store = await apiGetstoreById(id)
      console.log(store)
      // setstoreList(store[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if(products) {
      fetchStore();
    }
  }, [products]);
  useEffect(() => {
    if(id) {
      fetchStoreById(id);
    }
  }, [id]);
  
  const onCreateAddressOrder = async () => {
    const res  = await apiOrderPaymentByStore({productsInCart : storeList?.cart})
    if(res?.success) {
        toast.success("Đặt hàng thành công")
        fetchStore()
        // navigate("/order")
    }else {
      toast.error(res?.msg);
    }
    // toast.success("Thêm địa chỉ thành công")
    // navigate("/order-cart", { state : { isChecked } })
  }


 
  const DrawerList = (
   <>
    {products && storeList &&  <Box className="w-[750px] max-sm:w-[250px]"  role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {storeList?.cart?.length > 0 ? storeList && storeList?.cart?.map((product) => (
          product?.status === "not_paid" && (
          
            <Link key={product?._id}>
              <div className='flex flex-col gap-2 px-4'>
                <div className="px-2 bg-white flex flex-col gap-2 py-2">
                  <div className="flex items-center gap-2 text-balance font-medium text-gray-800 max-sm:text-xs">
                    <span className='max-sm:text-xs line-clamp-1'>Mã đơn hàng:</span>
                    <span className='max-sm:text-xs line-clamp-1'>{product?._id}</span>
                  </div>
                  <h3 className="text-gray-600  text-lg max-sm:text-xs">{product?.store?.inforByStore?.nameStore}</h3>
                  <div className="flex justify-between gap-3 max-sm:text-xs">
                    <div className="flex gap-8">
                      <img
                        className="w-32 h-32 max-sm:w-14 max-sm:h-14 mix-blend-darken rounded-xl border-none"
                        src={`${pathImage}/${product?.product?.photos[0]}`}
                        alt=""
                      />
                      <div className="flex flex-col gap-4">
                        <span className="text-lg font-medium text-gray-800 max-sm:text-xs line-clamp-2">{product?.product?.title}</span>
                        <div className="flex items-center gap-2 border w-fit rounded-[4px]">
                          <div
                            className="px-3 w-10 h-10 max-sm:w-6 max-sm:h-6 flex items-center justify-center max-sm:px-0.5 max-sm:py-0.5 py-1 rounded-l-[4px] bg-gray-100 cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault()
                              addToCart(product, "decrement");
                              e.stopPropagation();
                            }}
                          >
                            <RemoveOutlinedIcon sx={{ fontSize: `${isMobile ? "10px" : "15px"}` }} />
                          </div>
                          <div className="px-2 max-sm:px-0 max-sm:text-[9px]">
                            <span>{product?.quantity}</span>
                          </div>
                          <div
                            className="px-3 w-10 h-10 max-sm:w-6 max-sm:h-6 flex items-center justify-center max-sm:px-0.5 max-sm:py-0.5 py-1 rounded-r-[4px] bg-gray-100 cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault()
                              addToCart(product, "increment");
                              e.stopPropagation();
                            }}
                          >
                            <AddOutlinedIcon sx={{ fontSize: `${isMobile ? "10px" : "15px"}` }} />
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
        )) : <div className='w-full h-screen flex items-center justify-center text-2xl font-semibold max-sm:text-sm'>
            Bạn chưa nhập đơn nào!
          </div>}
       
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
        {isMobile ? <div className="px-2 py-4 max-sm:py-0 max-sm:px-3 flex items-center justify-center  bg-[#362a89] rounded-xl ">
                        <button className="max-sm:text-[8px] text-white"  onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              onCreateAddressOrder();  
                            }}>
                          Thanh toán
                        </button>

        </div> :  <div className="px-2 py-4 max-sm:py-2">
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
        </div>}
       
        
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
          {storeList && storeList?.cart?.filter((product) => product?.status === "not_paid").length}
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