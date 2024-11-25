import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import noCart from "@/assets/noCart.png"
import { pathImage } from "@/lib/helper"
import { getCurrent } from "@/stores/actions/userAction"
import { Autocomplete, TextField, useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { apiGetAllUser, apiGetUserById } from "@/services/userService"
import toast from "react-hot-toast"
import { useParams } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import hr from "@/assets/hr.png"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { apiCreateAddresById, apiCreateAddress, apiGetAddressByUserId } from '@/services/addressService';
import Switch from '@mui/material/Switch';
import { useForm } from "react-hook-form"
import { apiOrderPaymentBot } from '@/services/orderServer';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function DrawRightAdmin({ productItem }) {
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState(productItem || [])
  const [isAddOpen, setIsAddOpen] = useState(false)
  const { isLoggedIn, token } = useSelector((state) => state.auth);
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate()
  const [userList, setUserList] = useState([])
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState(null)
  const [currentData, setCurrentData] = useState(null)
  const [address, setAddress] = useState([])
  const [selectAddress, setSelectAddress] = useState(null)
  const dispatch = useDispatch()
  const { id, userId } = useParams()
  const [activeSwitchText, setActiveSwitchText] = useState(false)
  const [isChecked, setIsChecked] = useState([])
  const [isCheckedAll, setIsCheckedAll] = useState(true)
  const [ids, setIds] = useState(null)
  const {
    register,
    handleSubmit,
    reset,
    getValues
  } = useForm();
  const [checked, setChecked] = useState(false);
  const hanleChange = (e) => {
    setChecked(e.target.checked);
  }
  const createOrderByBot = async () => {
    
    const res  = await apiOrderPaymentBot({productsInCart : isChecked, selectedAddress: selectAddress || address[0] , usersList: ids , storeId : userId})
    if(res?.success) {
      toast.success("Đặt đơn cho cửa hàng thành công")
      navigate("/order-list")
    }
    if(res?.err === 1) {
      toast.error(res?.msg)
    }
    
  }
  const onCreateAddressOrder = async (id) => {
    await apiCreateAddresById(id, {revicerName :getValues("revicerName"),phone :getValues("phone"), city : getValues("city"), province : getValues("province"),stress : getValues("stress"), active: checked ? true : false})
    toast.success("Thêm địa chỉ thành công")
    getAddress(id)
    setIsAddOpen(false);
    reset()
  }
  const getAddress = async(userId) => {
    const res = await apiGetAddressByUserId(userId)
    setAddress(res)
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
 
  const onChangeQuantity = (product, type) => {
    const updatedProducts = products.map((item) => {
      if (item._id === product._id) {
        if (item.quantityInit >= item.product?.inventory) {
            toast.error("Sản phẩm đã hết hàng! Không thể tăng thêm số lượng");
            return item; 
        }
        const newQuantity = type === "increment" 
          ? item.quantityInit + 1 
          : Math.max(1, item.quantityInit - 1);
          // if(newQuantity === 1) {
          //   // console.log(item)
          //   const filterProduct = products?.filter((product) => product?._id !== item?._id)
          //   return filterProduct[0]
          // }
        return { ...item, quantityInit: newQuantity };
      }
      return item;
    });
  
    setProducts(updatedProducts); // Cập nhật state để giao diện re-render
  };
 
  // const addToCart = async(product, type) => {
  
  //   if(type === "increment") {
  //       const res = await apiAddToCart({
  //           quantity : 1,
  //           product : product?.product?._id,
  //           store : product?.store?._id,
  //           color : product?.color,
  //           size : product?.size
  //         })
  //         if(res?.success) {
  //           toast.success("Cập nhật giỏ hàng thành công")
  //           dispatch(getCurrent())
  //       }
  //   }else{
  //     const res = await apiAddToCart({
  //       quantity : -1,
  //       product : product?.product?._id,
  //       store : product?.store?._id,
  //       color : product?.color,
  //       size : product?.size
  //     })
  //     if(res?.success) {
  //       toast.success("Cập nhật giỏ hàng thành công")
  //       dispatch(getCurrent())

  //   }
  //   }
    
  // }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleClickAddOpen = () => {
    setIsAddOpen(true);
  };

  const handleAddClose = () => {
    setIsAddOpen(false);
  };
  useEffect(() => {
    if(isLoggedIn && token)  dispatch(getCurrent())
   },[isLoggedIn, token, dispatch])
 
  useEffect(() => {
    fetchGetByUserId(userId) && getUsers()
  },[userId])

  const DrawerList = (
   <>
     {products && productItem &&  <Box className="w-[750px] max-sm:w-[250px]"  role="presentation" onClick={(e) => {
      e.stopPropagation()
      toggleDrawer(false)
     }}>
      <List>
      <div className=' flex flex-col gap-4 bg-gray-50 h-screen w-full relative'>
      <h3 className="w-full text-center text-gray-600 bg-white py-2 shadow-sm">Đặt đơn ảo cửa hàng</h3>
      <div className='flex flex-col gap-8'>
        <React.Fragment>
        {address && address?.length > 0 ? <div className="flex flex-col gap-2 bg-white px-4" key={address[0]?._id} >
          <div className="flex items-center gap-1 w-full py-4 justify-between">
            <div className='flex items-center gap-2 cursor-pointer' onClick={handleClickOpen}>
            <LocationOnOutlinedIcon sx={{ fontSize: isMobile ? "20px" : "25px" }} />
           {selectAddress ?  <div className="flex flex-col gap-1 py-2">
              <div className="flex gap-1 items-center">
                <span className="max-sm:text-xs text-black font-semibold text-base">{selectAddress?.revicerName}</span>
                <span className="max-sm:text-xs text-black font-semibold text-base">{selectAddress?.phone}</span>
              </div>
              <div className="flex items-center gap-1 pb-2">
                <span className="max-sm:text-xs text-black font-semibold text-base">{selectAddress?.province}</span>
                <span className="max-sm:text-xs text-black font-semibold text-base"> {selectAddress?.city}</span>
                <span className="max-sm:text-xs text-black font-semibold text-base">{selectAddress?.stress}</span>
              </div>
            </div> : <div className="flex flex-col gap-1 py-2">
              <div className="flex gap-1 items-center">
                <span className="max-sm:text-xs text-black font-semibold text-base">{address[0]?.revicerName}</span>
                <span className="max-sm:text-xs text-black font-semibold text-base">{address[0]?.phone}</span>
              </div>
              <div className="flex items-center gap-1 pb-2">
                <span className="max-sm:text-xs text-black font-semibold text-base">{address[0]?.province}</span>
                <span className="max-sm:text-xs text-black font-semibold text-base"> {address[0]?.city}</span>
                <span className="max-sm:text-xs text-black font-semibold text-base">{address[0]?.stress}</span>
              </div>
            </div>}
            </div>
            <div className='w-1/2'>
              <Autocomplete
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                    disablePortal
                    value={values}
                    options={userList?.map((option) => option.fullName)}    
                    className="w-full h-[40px] outline-none border-none"           
                    onChange={(event, newValue) => {
                      const selectedUser = userList?.find((user) => user?.fullName === newValue);
                      if (selectedUser) {
                        setIds(selectedUser?._id); 
                        getAddress(selectedUser?._id)
                      }
                      setValues(newValue); 
                    }}
                    renderInput={(params) => <TextField {...params} label="Chọn bot" />}
              />
            </div>
          </div>
          <img src={hr} alt="hr" className="py-2" />
        </div> : <div className="flex items-center justify-between px-4 gap-1 w-full cursor-pointer">
      <div onClick={() => {
        if(values) {
          handleClickOpen()
        }else{
          toast.error("Vui lòng chọn bot trước khi thêm địa chỉ")
        }
      }} className='flex items-center gap-2'>
      <LocationOnOutlinedIcon sx={{ fontSize: isMobile ? "20px" : "30px" }} />
      <div className='flex flex-col'>
      <span className="max-sm:text-xs text-black font-semibold text-base">Chưa có địa chỉ</span>
      <span className="max-sm:text-xs text-black font-semibold text-base">Thêm địa chỉ</span>
      </div>
      </div>

      <div className='w-1/2'>
              <Autocomplete
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                    disablePortal
                    value={values}
                    options={userList?.map((option) => option.fullName)}    
                    className="w-full h-[40px] outline-none border-none"           
                    onChange={(event, newValue) => {
                      console.log(newValue)
                      const selectedUser = userList?.find((user) => user?.fullName === newValue);
                      if (selectedUser) {
                        setIds(selectedUser?._id); 
                        getAddress(selectedUser?._id)
                      }
                      setValues(newValue); 
                    }}
                    renderInput={(params) => <TextField {...params} label="Chọn bot" />}
              />
            </div>
    </div>}
       
        <Dialog
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
           Địa chỉ giao hàng
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" className='flex flex-col gap-4'>
              {address?.map((add) => (
                <div className="flex flex-col gap-1 cursor-pointer py-4 rounded-xl border-[1px] px-4 border-[#25bcf1]" key={add?._id} onClick={(e) => {
                  e.preventDefault()
                  setSelectAddress(add)
                  toast.success("Chọn địa chỉ thành công")
                  setIsOpen(false)
                }}>
                  <div className="flex gap-2 items-center">
                    <span className="max-sm:text-xs text-black text-base">Tên người nhận hàng:</span>
                    <span className="max-sm:text-xs text-black text-base">{add?.revicerName}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="max-sm:text-xs text-black text-base">Số điện thoại: </span>
                    <span className="max-sm:text-xs text-black text-base">{add?.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 pb-2">
                    <span className="max-sm:text-xs text-black text-base">Địa chỉ người nhận hàng:</span>
                    <div className='flex items-center gap-1'>
                      <span className="max-sm:text-xs text-black text-base">{add?.stress},</span>
                      <span className="max-sm:text-xs text-black text-base">{add?.province},</span>
                      <span className="max-sm:text-xs text-black text-base"> {add?.city}</span>
                      
                    </div>
                  </div>
                </div>
              ))}
              
              <React.Fragment>
                <div className='flex items-center px-40 py-10 hover:shadow-xl justify-center gap-2 cursor-pointer' onClick={handleClickAddOpen} >
                <LocationOnOutlinedIcon sx={{ fontSize: isMobile ? "20px" : "25px" }} />
                <span className="max-sm:text-xs text-black text-base">Thêm địa chỉ</span>
                </div>
                <Dialog
                  open={isAddOpen}
                  onClose={handleAddClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    Thêm địa chỉ giao hàng
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <div className='flex flex-col gap-4 w-full relative'>
                          <form onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(onCreateAddressOrder(ids))
                          }}>
                          <div>
                            <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
                                <span className="w-[30%]">Người nhận hàng</span>
                                <input type="text" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập tên người nhận hàng"  {...register("revicerName")} />
                            
                            </div>
                            
                            <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
                                <span className="w-[30%]">Số điện thoại</span>
                                <input type="number" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập số điện thoại liên hệ" {...register("phone")}/>
                            </div>
                            <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
                                <span className="w-[30%]">Tỉnh</span>
                                <input type="text" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập tỉnh" {...register("province")}/>
                            </div>
                            <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
                                <span className="w-[30%]">Thành phố</span>
                                <input type="text" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập thành phố" {...register("city")}/>
                            </div>
                            <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
                                <span className="w-[30%]">Tên đường, Tòa nhà, Số nhà</span>
                                <input type="text" className="w-[70%] py-2 outline-none bg-transparent" placeholder="Vui lòng nhập tên đường, tòa nhà, số nhà" {...register("stress")}/>
                            </div>
                            <div className="flex items-center px-4 py-4 border-b gap-2 max-sm:text-xs">
                                <span className="w-[30%]">Địa chỉ mặc định</span>
                                <Switch {...label} onChange={hanleChange} />
                            </div>
                          </div>
                          <div className="py-4">
                          <button className="px-8 py-4 max-sm:text-xs w-full rounded-full bg-red-500 text-white"  type="submit">Lưu dịa chỉ</button>
                          </div>
                          </form>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleAddClose}>Hủy bỏ</Button>
                    {/* <Button onClick={handleAddClose} autoFocus>
                      Agree
                    </Button> */}
                  </DialogActions>
                </Dialog>
              </React.Fragment>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Hủy bỏ</Button>
            {/* <Button onClick={handleClose} autoFocus>
              Đồng Ý
            </Button> */}
          </DialogActions>
        </Dialog>
        </React.Fragment>
      </div>
      <div className='flex items-center justify-between px-2'>
            <span className="text-base max-sm:text-sm">Tổng cộng {products?.length}</span>
            <span className="text-base cursor-pointer max-sm:text-sm" onClick={() => setActiveSwitchText(!activeSwitchText)}>{activeSwitchText ? "Hoàn thành" : "Bỏ sản phẩm"}</span>
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
         <span className="max-sm:text-sm text-red-500 font-semibold">${isChecked?.length === products?.length ?  products?.reduce((initValue, currentValue) => {
            const totalProductPrice = currentValue?.product?.price * currentValue?.quantityInit;
            return initValue + totalProductPrice;
          },0) : isChecked?.reduce((initValue, currentValue) => {
            const totalProductPrice = currentValue?.product?.price * currentValue?.quantityInit;
            return initValue + totalProductPrice;
          },0)}</span>
         </div>
          <button className="px-4 py-2 max-sm:text-xs rounded-xl bg-red-500 text-white" onClick={(e) => {
            e.stopPropagation()
            if(isChecked?.length > 0) {
             createOrderByBot()
            }
            if(!address && !selectAddress){
              toast.error("Chưa có địa chỉ giao hàng")
              return
            }
            if(isChecked?.length <= 0){
              toast.error("Vui lòng chọn sản phẩm để thanh toán")
              return
            }
          }} >Đặt đơn cho cửa hàng</button>
          </div>
         </div>}
    </div>

       
      </List>
      <Divider />
      {/* {storeList && storeList?.cart?.length > 0 && (
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
          ${products?.reduce((total, currentValue) => {
            console.log(currentValue)
            if (currentValue?.status === "not_paid") {
              return total + (currentValue?.product?.price * currentValue?.quantityInit);
            }
            return total;
          }, 0)}
        </span>
       </div>     
      </div>
    </div>
  )
      )} */}
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