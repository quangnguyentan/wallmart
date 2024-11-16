import { faFaceLaughWink,faMoneyBills , faUsers, faReorder, faProcedures, faMoneyBill, faShop, faMoneyBillTransfer, faPerson, faBookBible } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import "./sb-admin-2.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/stores/actions/authAction';
import toast from 'react-hot-toast';
import { useMediaQuery } from '@mui/material';
import { LogOut } from 'lucide-react';
import { useEffect } from 'react';

function Sidebar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentData } = useSelector((state) => state.user); 
    const isMobile = useMediaQuery("(max-width:600px)");
    

    useEffect(() => {
        if(currentData?.role === "admin") {
            navigate("/product-list")
        }
    },[])

    return (
        <ul id="accordionSidebar" className={`${isMobile ? "bg-gradient-primary overflow-hidden  w-full  sidebar-dark h-full py-10 "   : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion "  } `}
        >

            {/* <!-- Sidebar - Brand --> */}
            <Link to="/product-list" className={`${isMobile ? "sidebar-brand d-flex align-items-center px-3 py-2" : "sidebar-brand d-flex align-items-center "} `}>
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faFaceLaughWink} size={"2x"} />
                </div>
                <div className="sidebar-brand-text mx-3 text-xs">{currentData?.role === "agent" ? "Wallmart Agent" : "Wallmart Admin"} </div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            {/* <li className="nav-item active py-1">
                <Link className="nav-link" to="/">
                    <FontAwesomeIcon icon={faTachographDigital} style={{ marginRight: "0.5rem" }}/>
                    <span className='max-sm:text-xs'>{currentData?.role === "agent" ? "Mua sắm" : "Thống kê doanh thu"} </span>
                </Link>
            </li> */}
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0 " />

            {/* <!-- Nav Item - Users --> */}
           
            <li className="nav-item active py-1">
                <Link className="nav-link" to="/product-list">
                    <FontAwesomeIcon icon={faProcedures} style={{ marginRight: "0.5rem" }}/>
                    <span className='max-sm:text-xs'>Quản lí sản phẩm</span>
                </Link>
            </li>
           
            <li className="nav-item active py-1">
                <Link className="nav-link" to="/order-list">
                    <FontAwesomeIcon icon={faReorder} style={{ marginRight: "0.5rem" }}/>
                    <span className='max-sm:text-xs'>Quản lí đơn hàng</span>
                </Link>
            </li>
            {currentData?.role === "admin" && <>
                <li className="nav-item active">
                <Link className="nav-link" to="/user-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }}/>
                    <span className='max-sm:text-xs'>Quản lí người dùng</span>
                </Link>
                </li>
                <li className="nav-item active">
                <Link className="nav-link" to="/bot-list">
                    <FontAwesomeIcon icon={faPerson} style={{ marginRight: "0.5rem" }}/>
                    <span className='max-sm:text-xs'>Quản lí bot</span>
                </Link>
                </li>
                <li className="nav-item active">
                <Link className="nav-link" to="/with-draw">
                    <FontAwesomeIcon icon={faMoneyBills} style={{ marginRight: "0.5rem" }}/>
                    <span className='max-sm:text-xs'>Quản lí lịch sử rút tiền</span>
                </Link>
                </li>
                {/* <li className="nav-item active">
                <Link className="nav-link" to="/store-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }}/>
                    <span className='max-sm:text-xs'>Cửa hàng</span>
                </Link>
                </li> */}
                <li className="nav-item active">
                <Link className="nav-link" to="/deposit-user-list">
                    <FontAwesomeIcon icon={faMoneyBill} style={{ marginRight: "0.5rem" }}/>
                    <span className='max-sm:text-xs'>Nạp tiền khách hàng</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/store-list-form">
                    <FontAwesomeIcon icon={faShop} style={{ marginRight: "0.5rem" }}/>
                    <span className='max-sm:text-xs'>Yêu cầu mở shop</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/transform-history">
                    <FontAwesomeIcon icon={faMoneyBillTransfer} style={{ marginRight: "0.5rem" }}/>
                    <span className='max-sm:text-xs'>Yêu cầu rút tiền</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/store-list">
                    <FontAwesomeIcon icon={faBookBible} style={{ marginRight: "0.5rem" }}/>
                    <span className='max-sm:text-xs'>Đặt đơn ảo</span>
                </Link>
                </li>
            </>}
            
            <li className="nav-item active cursor-pointer" onClick={() => {
                dispatch(logout())
                localStorage.setItem("page", 3)
                toast.success("Đã đăng xuất tài khoản")
                navigate("/")
                setTimeout(() => {
                    window.location.reload()
                }, 500)
            }}>
            <div className="nav-link ">
                <div className='flex items-center'>
                <LogOut style={{ marginRight: "0.5rem" }} size={20}/>
                <span className='max-sm:text-xs'>Đăng xuất</span>
                </div>
            </div>
            </li>
        </ul>
    )
}

export default Sidebar