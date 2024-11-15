import { faFaceLaughWink, faTachographDigital, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./sb-admin-2.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/stores/actions/authAction';
import toast from 'react-hot-toast';
import { getCurrent } from '@/stores/actions/userAction';

function Sidebar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const { currentData } = useSelector((state) => state.user); 

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center" >
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faFaceLaughWink} size={"2x"} />
                </div>
                <div className="sidebar-brand-text mx-3 text-xs">{currentData?.role === "agent" ? "Wallmart Agent" : "Wallmart Admin"} </div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <FontAwesomeIcon icon={faTachographDigital} style={{ marginRight: "0.5rem" }} />
                    <span>{currentData?.role === "agent" ? "Mua sắm" : "Thống kê doanh thu"} </span>
                </Link>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Users --> */}
           
            <li className="nav-item active">
                <Link className="nav-link" to="/product-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Quản lí sản phẩm</span>
                </Link>
            </li>
           
            <li className="nav-item active">
                <Link className="nav-link" to="/order-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Quản lí đơn hàng</span>
                </Link>
            </li>
            {currentData?.role === "admin" && <>
                <li className="nav-item active">
                <Link className="nav-link" to="/user-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Quản lí người dùng</span>
                </Link>
                </li>
                {/* <li className="nav-item active">
                <Link className="nav-link" to="/store-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Cửa hàng</span>
                </Link>
                </li> */}
                <li className="nav-item active">
                <Link className="nav-link" to="/deposit-user-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Nạp tiền khách hàng</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/store-list-form">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Yêu cầu mở shop</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/transform-history">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Yêu cầu rút tiền</span>
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
                <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                <span>Đăng xuất</span>
            </div>
            </li>
        </ul>
    )
}

export default Sidebar