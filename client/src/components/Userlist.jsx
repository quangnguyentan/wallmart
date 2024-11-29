import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

import "./sb-admin-2.min.css";
import { apiGetProduct } from "@/services/productService";
import { useSelector } from "react-redux";
import { apiDeleteUserById, apiGetAllUser } from "@/services/userService";

function Userlist() {
  const [value, setValue] = useState(null)
  const [productList, setproductList] = useState([])
  const [isLoading, setLoading] = useState(true);
  const { currentData } = useSelector((state) => state.user); 
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if(value?.length > 0) {
      getUsers();
    }
    }, [value]);

    const onChangeValue = (e) => {
        setValue(e.target.value)
    }
    
  let getUsers = async () => {
    try {
      const usersResponse = await apiGetAllUser();
    const users = usersResponse?.user || [];

    const adminUsers = users?.filter(user => user.role !== "admin" &&  user.role !== "bot" && user.role !== "botAgent");
    // Set the product list
    setproductList(adminUsers);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  let handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure do you want to delete the data?"
      );
      if (confirmDelete) {
        await apiDeleteUserById(id)
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-end px-4 mb-4">
        {/* <h1 className="h3 mb-0 text-gray-800">User-List</h1> */}
        <Link
          to={`/create-user`}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Tạo người dùng
        </Link>
      </div>
      {/* <!-- DataTables --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 flex items-center justify-center gap-8">
          <h6 className="m-0 font-weight-bold text-primary max-sm:text-sm">Người dùng</h6>
          <form
                className="d-none w-[30%] d-sm-inline-block border form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search relative">
           
                <div className="input-group">
                    <input value={value} onChange={onChangeValue} type="text" className="form-control bg-light border-0 small" placeholder="Tìm kiếm người dùng" 
                        aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div className="card-body">
          {isLoading ? (
            <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif" />
          ) : (
            <div className="table-responsive overflow-y-scroll custom-table">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Số thứ tự</th>
                    <th>Tên người dùng</th>
                    <th>Số điện thoại đăng nhập</th>
                    <th>Email đăng nhập </th>
                    <th>Vai trò</th>
                    <th>Giới tính</th>
                    <th>Số tiền</th>
                    <th>Số tài khoản</th>
                    <th>Tên người hưởng thụ</th>
                    <th>Tên ngân hàng</th>
                    <th>Ngày tạo</th>
                    <th>Ngày sửa</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                
                <tbody>
                  {value?.length > 0 ? productList?.map((product, index) => {
                     if(typeof product?.fullName === "string" && typeof value === "string" && product?.fullName.toUpperCase().includes(value.toUpperCase())) {
                      return (
                        <tr key={product?.id}>
                          <td>{index + 1}</td>
                          <td>{product?.fullName}</td>
                          <td>{product?.phone}</td>
                          <td>{product?.email}</td>
                          <td>{product?.role} {`(${product?.role === "agent" ? "Người bán hàng" : product?.role === "user" ? "Khách hàng" : "Quản trị viên"})`}</td>
                          <td>{product?.gender === "male" ? "Nam" : product?.gender === "female" ? "Nữ" : "Khác"}</td>
                          <td>{product?.deposit}</td>
                          <td>{product?.creditCartOfBank}</td>
                          <td>{product?.nameOfUser}</td>
                          <td>{product?.nameOfBank}</td>
                          <td>{product?.createdAt &&product?.createdAt }</td>
                          <td>{product?.updatedAt &&product?.updatedAt }</td>
  
  
                          <th className="flex flex-col gap-2">
                            <Link
                              to={`/user-view/${product?._id}/${currentData?._id}`}
                              className="btn btn-primary btn-sm mr-1"
                            >
                              Xem chi tiết
                            </Link>
                            <Link
                              to={`/user-edit/${product?._id}`}
                              className="btn btn-info btn-sm mr-1"
                            >
                              Chỉnh sửa
                            </Link>
                            <button
                              onClick={() => handleDelete(product?._id)}
                              className="btn btn-danger btn-sm mr-1"
                            >
                              Xóa
                            </button>
                          </th>
                        </tr>
                      )
                     }
                    ;
                  }) : productList?.map((product, index) => {
                    return (
                      <tr key={product?.id}>
                        <td>{index + 1}</td>
                        <td>{product?.fullName}</td>
                        <td>{product?.phone}</td>
                        <td>{product?.email}</td>
                        <td>{product?.role} {`(${product?.role === "agent" ? "Người bán hàng" : product?.role === "user" ? "Khách hàng" : "Quản trị viên"})`}</td>
                        <td>{product?.gender === "male" ? "Nam" : product?.gender === "female" ? "Nữ" : "Khác"}</td>
                        <td>{product?.deposit}</td>
                        <td>{product?.creditCartOfBank}</td>
                        <td>{product?.nameOfUser}</td>
                        <td>{product?.nameOfBank}</td>
                        <td>{product?.createdAt &&product?.createdAt }</td>
                        <td>{product?.updatedAt &&product?.updatedAt }</td>


                        <th className="flex flex-col gap-2">
                          <Link
                            to={`/user-view/${product?._id}/${currentData?._id}`}
                            className="btn btn-primary btn-sm mr-1"
                          >
                            Xem chi tiết
                          </Link>
                          <Link
                            to={`/user-edit/${product?._id}`}
                            className="btn btn-info btn-sm mr-1"
                          >
                            Chỉnh sửa
                          </Link>
                          <button
                            onClick={() => handleDelete(product?._id)}
                            className="btn btn-danger btn-sm mr-1"
                          >
                            Xóa
                          </button>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Userlist;
