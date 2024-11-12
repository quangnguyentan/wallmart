import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sb-admin-2.min.css";
import { apiGetProduct } from "@/services/productService";
import { apiGetStore } from "@/services/storeService";

function StoreList() {
  const [productList, setproductList] = useState([])
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
    
  }, []);

  let getUsers = async () => {
    try {
      const products = await apiGetStore()
      console.log(products)
      setproductList(products);
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
        {/* <Link
          to="/create-store"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Create Store
        </Link> */}
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
                    <th>Ngành</th>
                    <th>Tên người tạo cửa hàng</th>
                    <th>Số điện thoại người tạo cửa hàng</th>
                    <th>Tên cửa hàng</th>
                    <th>Khu vực người đăng ký</th>
                 
                    <th>Hành động</th>

                  </tr>
                </thead>
                
                <tbody>
                  {productList.map((product) => {
                    return (
                      <tr key={product?.id}>
                        <td>{product?.industry}</td>
                        <td>{product?.fullname}</td>
                        <td>{product?.phone}</td>
                        <td>{product?.inforByStore?.nameStore}</td>
                        <td>{product?.address?.area}</td>
                        <th className="flex flex-col gap-2">
                          <Link
                            to={`/store-view/${product?._id}`}
                            className="btn btn-primary btn-sm mr-1"
                          >
                            Xem chi tiết
                          </Link>
                          <Link
                            to={`/store-edit/${product?._id}`}
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

export default StoreList;
