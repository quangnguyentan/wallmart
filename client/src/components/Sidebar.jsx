import { faFaceLaughWink, faTachographDigital, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./sb-admin-2.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/stores/actions/authAction';

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
                <div className="sidebar-brand-text mx-3 text-xs">Wallmart Admin</div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <FontAwesomeIcon icon={faTachographDigital} style={{ marginRight: "0.5rem" }} />
                    <span>Dashboard</span>
                </Link>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Users --> */}
           
            <li className="nav-item active">
                <Link className="nav-link" to="/product-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Sản phẩm</span>
                </Link>
            </li>
           
            <li className="nav-item active">
                <Link className="nav-link" to="/order-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Đơn hàng</span>
                </Link>
            </li>
            {currentData?.role === "admin" && <>
                <li className="nav-item active">
                <Link className="nav-link" to="/user-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Người dùng</span>
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
                    <span>Nạp tiền</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/store-list-form">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Duyệt đơn cửa hàng</span>
                </Link>
            </li>
          
            </>}
            <li className="nav-item active cursor-pointer" onClick={() => {
                dispatch(logout())
                localStorage.setItem("page", 0)
                navigate("/")
                setTimeout(() => {
                    window.location.reload()
                }, 500)
            }}>
            <div className="nav-link ">
                <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                <span>Logout</span>
            </div>
            </li>
        </ul>
    )
}

export default Sidebar