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

import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import { apiGetProduct } from '@/services/productService';
import { apiGetMyStore } from '@/services/storeService';
import { useSelector } from 'react-redux';
import { pathImage } from '@/lib/helper';

function Topbar() {
    const [open, setOpen] = React.useState(false);
    const [productList, setproductList] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [value, setValue] = useState([])
    const { currentData } = useSelector((state) => state.user); 
    useEffect(() => {
        fetchApi();
    }, [window.location.pathname]);
  
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
                {/* <div className='absolute top-10 overflow-y-scroll w-full h-[750px] scrollbar-hide bg-white shadow-sm z-50'>
                    {productList?.order?.map((product) => (
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
                </div> */}
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." 
                        aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
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

                {/* <!-- Nav Item - Alerts --> */}
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon={faBell} />
                        {/* <!-- Counter - Alerts --> */}
                        <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                    {/* <!-- Dropdown - Alerts --> */}
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown">
                        <h6 className="dropdown-header">
                            Alerts Center
                        </h6>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="mr-3">
                                <div className="icon-circle bg-primary">
                                    <i className="fas fa-file-alt text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 12, 2019</div>
                                <span className="font-weight-bold">A new monthly report is ready to download!</span>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="mr-3">
                                <div className="icon-circle bg-success">
                                    <i className="fas fa-donate text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 7, 2019</div>
                                $290.29 has been deposited into your account!
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="mr-3">
                                <div className="icon-circle bg-warning">
                                    <i className="fas fa-exclamation-triangle text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 2, 2019</div>
                                Spending Alert: We've noticed unusually high spending for your account.
                            </div>
                        </a>
                        <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                    </div>
                </li>

                {/* <!-- Nav Item - Messages --> */}
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon={faEnvelope} />
                        {/* <!-- Counter - Messages --> */}
                        <span className="badge badge-danger badge-counter">7</span>
                    </a>
                    {/* <!-- Dropdown - Messages --> */}
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="messagesDropdown">
                        <h6 className="dropdown-header">
                            Message Center
                        </h6>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                    alt="..." />
                                <div className="status-indicator bg-success"></div>
                            </div>
                            <div className="font-weight-bold">
                                <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                    problem I've been having.</div>
                                <div className="small text-gray-500">Emily Fowler · 58m</div>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                    alt="..." />
                                <div className="status-indicator"></div>
                            </div>
                            <div>
                                <div className="text-truncate">I have the photos that you ordered last month, how
                                    would you like them sent to you?</div>
                                <div className="small text-gray-500">Jae Chun · 1d</div>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                    alt="..." />
                                <div className="status-indicator bg-warning"></div>
                            </div>
                            <div>
                                <div className="text-truncate">Last month's report looks great, I am very happy with
                                    the progress so far, keep up the good work!</div>
                                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                    alt="..." />
                                <div className="status-indicator bg-success"></div>
                            </div>
                            <div>
                                <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                    told me that people say this to all dogs, even if they aren't good...</div>
                                <div className="small text-gray-500">Chicken the Dog · 2w</div>
                            </div>
                        </a>
                        <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                    </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                    <Link className="nav-link dropdown-toggle" to="/" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                        <FontAwesomeIcon icon={faCircleUser} size={"xl"} />
                    </Link>
                    {/* <!-- Dropdown - User Information --> */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
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
                    </div>
                </li>

            </ul>

        </nav>
    )
}

export default Topbar