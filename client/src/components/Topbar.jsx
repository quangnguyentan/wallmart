import { faBell, faCircleUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import "./sb-admin-2.min.css";
import cskh from "@/assets/cskh.png"
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import { apiGetProduct } from '@/services/productService';
import { apiGetMyStore } from '@/services/storeService';
import { useSelector } from 'react-redux';
import { pathImage } from '@/lib/helper';
import { AlignLeft, Globe } from 'lucide-react';

function Topbar() {
    const [open, setOpen] = React.useState(false);
    const [productList, setproductList] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [value, setValue] = useState(null)
    const { currentData } = useSelector((state) => state.user); 
    useEffect(() => {
        if(value?.length > 0) {
            fetchApi();
        }
    }, [window.location.pathname, value]);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
    const onChangeValue = (e) => {
        setValue(e.target.value)
    }
    const fetchApi = async() => {
        try {
            if(window.location.pathname === "/product-list") {
                if(currentData?.role === "admin"){
                    const products = await apiGetProduct()
                    setproductList(products);
                    setLoading(false);
                   }else{
                    const products = await apiGetMyStore()
                    setproductList(products[0]);
                    setLoading(false);
                   }
            }
           
           } catch (error) {
             console.log(error);
           }
      
    }
    const DrawerList = (
        <Box sx={{ width: 250, height : "100%", overflow : "hidden" }} role="presentation" onClick={toggleDrawer(false)}>
            <Sidebar/>
          <Divider />
          <List>
           
          </List>
        </Box>
      );
    
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <FontAwesomeIcon icon={faBars} onClick={toggleDrawer(true)}/>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                </Drawer>
            </button>
            <form
                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search relative">
                {/* {value?.length > 0 && <div className='absolute top-10 overflow-y-scroll w-full h-[750px] scrollbar-hide bg-white shadow-sm z-50'>
                    {currentData?.role === "admin" && productList?.map((product) => {
                        if(typeof product?.title === "string" && typeof value === "string" && product.title.toUpperCase().includes(value.toUpperCase())){
                            return <div className="w-full h-fit scrollbar-hide overflow-y-scroll text-gray-500 flex flex-col gap-2" key={product?._id}>
                     
                            <div className="flex items-center w-full gap-12 bg-white px-8  rounded-xl justify-center">
                              <div className="w-[80px] h-[80px] max-sm:w-[120px] max-sm:h-[150px]">
                              <img src={`${pathImage}/${product?.photos && product?.photos[0]}`} alt="" className="w-full h-full mix-blend-darken" />
                              </div>
                              <div className="flex flex-col w-[50%] py-4 px-2 max-sm:px-0 gap-2 bg-white rounded-xl">
                                  <div className="flex items-center gap-4 ">
                                      <span className="text-xl max-sm:text-xs text-[#fe5000]">${product?.price}</span>
                                     <div className="">
                                      <span className="max-sm:text-xs">Giá cũ </span>
                                      <span className="line-through max-sm:text-xs">${product?.priceOld}</span>
                                     </div>
                                  </div>
                                  <span className="max-sm:text-xs line-clamp-4">
                                    {product?.title}
                                  </span>
                               
                              </div>
                              
                            </div>
                           
                          </div>
                        }
                    })}
                      {currentData?.role === "agent" && productList?.order?.map((product) => (
                         <div className="w-full h-fit scrollbar-hide overflow-y-scroll text-gray-500 flex flex-col gap-2" key={product?._id}>
                     
                         <div className="flex items-center w-full gap-12 bg-white px-8  rounded-xl justify-center">
                           <div className="w-[80px] h-[80px] max-sm:w-[120px] max-sm:h-[150px]">
                           <img src={`${pathImage}/${product?.product?.photos && product?.product?.photos[0]}`} alt="" className="w-full h-full mix-blend-darken" />
                           </div>
                           <div className="flex flex-col w-[50%] py-4 px-2 max-sm:px-0 gap-2 bg-white rounded-xl">
                               <div className="flex items-center gap-4 ">
                                   <span className="text-xl max-sm:text-xs text-[#fe5000]">${product?.product?.price}</span>
                                  <div className="">
                                   <span className="max-sm:text-xs">Giá cả </span>
                                   <span className="line-through max-sm:text-xs">${product?.product?.priceOld}</span>
                                  </div>
                               </div>
                               <span className="max-sm:text-xs line-clamp-4">
                                 {product?.product?.title}
                               </span>
                            
                           </div>
                           
                         </div>
                        
                       </div>
                    ))}
                </div>} */}
                <div className="input-group flex items-center gap-6">
                    <AlignLeft className='cursor-pointer' />
                    <Globe className='cursor-pointer'/>
                    <img src={cskh} alt="cskh" className='w-7 h-7 cursor-pointer' />
                    {/* <input value={value} onChange={onChangeValue} type="text" className="form-control bg-light border-0 small" placeholder="Search for..." 
                        aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div> */}
                </div>
            </form>

            {/* <!-- Topbar Navbar --> */}
            <ul className="navbar-nav ml-auto">

                {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon={faSearch} />
                    </a>
                    {/* <!-- Dropdown - Messages --> */}
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                    placeholder="Search for..." aria-label="Search"
                                    aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow flex items-center">
                    <div className='flex flex-col gap-1'>
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{currentData?.fullName}</span>
                        <span className='mr-2 text-[10px] d-none d-lg-inline text-gray-600'>
                            {currentData?.role === "agent" ? "Người bán hàng" : "Quản trị"}
                        </span>
                    </div>
                    <Link className="nav-link dropdown-toggle" to={currentData?.role === "admin" ? "product-list" : "/"} id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {currentData?.avatar ?  <img src={`${pathImage}/${currentData?.avatar}`} className='w-6 h-6 rounded-full' alt="" /> :  <FontAwesomeIcon icon={faCircleUser} size={"xl"} />}
                    </Link>
                    {/* <!-- Dropdown - User Information --> */}
                    {/* <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div> */}
                </li>

            </ul>

        </nav>
    )
}

export default Topbar