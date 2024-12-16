import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sb-admin-2.min.css";
import { apiGetProduct } from "@/services/productService";
import { useSelector } from "react-redux";
import { apiGetAllUser } from "@/services/userService";
function UserDepositList() {
  const [productList, setproductList] = useState([])
  const [isLoading, setLoading] = useState(true);
  const { currentData } = useSelector((state) => state.user); 
  const [value, setValue] = useState(null)

  useEffect(() => {
    getUsers();
  }, []);

  let getUsers = async () => {
    try {
      const user = await apiGetAllUser()
      const filterRole = user?.user?.filter((rs) => rs?.role !== "admin")
      setproductList(filterRole);
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
        await axios.delete(
          `https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${id}`
        );
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if(value?.length > 0) {
      getUsers();
    }
    }, [value]);

    const onChangeValue = (e) => {
        setValue(e.target.value)
    }
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
       
      </div>
      {/* <!-- DataTables --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 flex items-center justify-center gap-8">
          <h6 className="m-0 font-weight-bold text-primary">Quản lí nạp tiền</h6>
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
                    <th>Tên người dùng</th>
                    <th>Số điện thoại đăng nhập</th>
                    <th>Email đăng nhập </th>
                    <th>Số tiền của khách</th>
                    <th>Vai trò</th>

                    <th>Hành động</th>
                  </tr>
                </thead>
                
                <tbody>
                {value?.length > 0 ? productList?.map((product) => {
                     if(typeof product?.fullName === "string" && typeof value === "string" && product?.fullName?.toUpperCase()?.includes(value?.toUpperCase()) || product?.phone?.toUpperCase()?.includes(value?.toUpperCase()) || product?.email?.toUpperCase()?.includes(value?.toUpperCase()) || product?.role?.toUpperCase()?.includes(value?.toUpperCase())) {
                      return (
                        <tr key={product?.id}>
                          <td>{product?.fullName}</td>
                          <td>{product?.phone}</td>
                          <td>{product?.email}</td>
                          <td>{product?.deposit?.toFixed(1)}</td>
                          <td>{product?.role}</td>
                          <th className="flex flex-col gap-2">
                            <Link
                              to={`/deposit-user-view/${product?._id}`}
                              className="btn btn-primary btn-sm mr-1"
                            >
                            Xem chi tiết
                            </Link>
                            <Link
                              to={`/deposit-user-edit/${product?._id}`}
                              className="btn btn-info btn-sm mr-1"
                            >
                              Nạp tiền
                            </Link>
                            <button
                              onClick={() => handleDelete(product?._id)}
                              className="btn btn-danger btn-sm mr-1"
                            >
                             Xóa người dùng
                            </button>
                          </th>
                        </tr>
                      );
                     }
                    ;
                  }) : productList?.map((product) => {
                    return (
                      <tr key={product?.id}>
                        <td>{product?.fullName}</td>
                        <td>{product?.phone}</td>
                        <td>{product?.email}</td>
                        <td>{product?.deposit?.toFixed(1)}</td>
                        <td>{product?.role}</td>
                        <th className="flex flex-col gap-2">
                          <Link
                            to={`/deposit-user-view/${product?._id}`}
                            className="btn btn-primary btn-sm mr-1"
                          >
                          Xem chi tiết
                          </Link>
                          <Link
                            to={`/deposit-user-edit/${product?._id}`}
                            className="btn btn-info btn-sm mr-1"
                          >
                            Nạp tiền
                          </Link>
                          <button
                            onClick={() => handleDelete(product?._id)}
                            className="btn btn-danger btn-sm mr-1"
                          >
                           Xóa người dùng
                          </button>
                        </th>
                      </tr>
                    );
                  })}
                  {/* {productList?.map((product) => {
                      return (
                        <tr key={product?.id}>
                          <td>{product?.fullName}</td>
                          <td>{product?.phone}</td>
                          <td>{product?.email}</td>
                          <td>{product?.deposit}</td>
                          <td>{product?.role}</td>
                          <th className="flex flex-col gap-2">
                            <Link
                              to={`/deposit-user-view/${product?._id}`}
                              className="btn btn-primary btn-sm mr-1"
                            >
                            Xem chi tiết
                            </Link>
                            <Link
                              to={`/deposit-user-edit/${product?._id}`}
                              className="btn btn-info btn-sm mr-1"
                            >
                              Nạp tiền
                            </Link>
                            <button
                              onClick={() => handleDelete(product?._id)}
                              className="btn btn-danger btn-sm mr-1"
                            >
                             Xóa người dùng
                            </button>
                          </th>
                        </tr>
                      );
                   
                  })} */}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserDepositList;
