import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sb-admin-2.min.css";
import { apiGetProduct } from "@/services/productService";
import { useSelector } from "react-redux";
import { apiGetAllUser } from "@/services/userService";
import { apiGetOrder } from "@/services/orderServer";

function Orderlist() {
  const [productList, setproductList] = useState([])
  const [isLoading, setLoading] = useState(true);
  const { currentData } = useSelector((state) => state.user); 
  useEffect(() => {
    getUsers();
  }, []);

  let getUsers = async () => {
    try {
      const user = await apiGetOrder()
      console.log(user)
      setproductList(user);
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
        <h1 className="h3 mb-0 text-gray-800">User-List</h1>
        <Link
          to={`/create-product/${currentData?._id}`}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Create User
        </Link>
      </div>
      {/* <!-- DataTables --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables</h6>
        </div>
        <div className="card-body">
          {isLoading ? (
            <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif" />
          ) : (
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Người nhận</th>
                    <th>Số điện thoại</th>
                    <th>Tỉnh </th>
                    <th>Thành phố</th>
                    <th>Đường phố, số nhà</th>
                    <th>Hành động</th>
                    

                  </tr>
                </thead>
                
                <tbody>
                  {productList?.map((product) => {
                    return (
                      <tr key={product?._id}>
                        <td>{product?.revicerName}</td>
                        <td>{product?.phone}</td>
                        <td>{product?.province}</td>
                        <td>{product?.city}</td>
                        <td>{product?.stress}</td>
                        
                        <th className="flex flex-col gap-2">
                          <Link
                            to={`/order-view/${product?._id}`}
                            className="btn btn-primary btn-sm mr-1"
                          >
                            View
                          </Link>
                          <Link
                            to={`/order-edit/${product?._id}`}
                            className="btn btn-info btn-sm mr-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(product?._id)}
                            className="btn btn-danger btn-sm mr-1"
                          >
                            Delete
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

export default Orderlist;
