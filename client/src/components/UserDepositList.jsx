import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
       
      </div>
      {/* <!-- DataTables --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Quản lí nạp tiền</h6>
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
                  {productList?.map((product) => {
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

export default UserDepositList;
