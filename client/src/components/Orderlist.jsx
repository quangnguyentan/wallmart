import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sb-admin-2.min.css";
import { apiGetProduct } from "@/services/productService";
import { useDispatch, useSelector } from "react-redux";
import { apiGetAllUser } from "@/services/userService";
import { apiDeleteOrderById, apiGetOrder, apiGetOrderByShop } from "@/services/orderServer";
import { apiGetMyStore, apiGetStore } from "@/services/storeService";
import { getCurrent } from "@/stores/actions/userAction";



function Orderlist() {
  const [productList, setproductList] = useState([])
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const { currentData } = useSelector((state) => state.user); 
  useEffect(() => {
    getUsers();
    dispatch(getCurrent())
  }, []);
  
 
  let getUsers = async () => {
    try {
      if(currentData?.role === "agent"){
        const user = await apiGetOrderByShop()
        setproductList(user);
        setLoading(false);
      }else{
        const store = await apiGetStore()
        setproductList(store);
        setLoading(false);
      }
    
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
        await apiDeleteOrderById(id)
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800 text-2xl">Đơn mua sản phẩm của shop</h1>
        {/* <Link
          to={`/create-product/${currentData?._id}`}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Create User
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
                  <th>Tên sản phẩm</th>
                    <th>Giá tiền mặc định</th>
                    <th>Giá tiền chưa giảm giá</th>
                    <th>Hàng tồn kho</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                
                <tbody>
                  {currentData?.role === "agent" && productList?.map((product) => {
                    if(product?.user?.role === "user"){
                      return (
                        <tr key={product?._id}>
                          <td>{product?.revicerName}</td>
                          <td>{product?.phone}</td>
                          <td>{product && product?.status === "waitDelivery" ? "Đợi giao hàng" : product?.status === "delivering" ? "Đang giao hàng" : product?.status === "successfull" ? "Giao hàng thành công"  :  "Đơn hàng bị hủy"}</td>
                          <td>{product?.province}</td>
                          <td>{product?.city}</td>
                          <td>{product?.stress}</td>
  
                          <th className="flex flex-col gap-2">
                          
                            <Link
                              to={`/order-view/${product?._id}`}
                              className="btn btn-primary btn-sm mr-1"
                            >
                              Xem chi tiết
                            </Link>
                            <Link
                              to={`/order-edit/${product?._id}`}
                              className="btn btn-info btn-sm mr-1"
                            >
                              {currentData?.role === "agent" ? "Cập nhật trạng thái đơn hàng" : "Chỉnh sửa"}
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
                    }
                  })}
                  {currentData?.role === "admin" && productList?.map((product) => {
                     product?.order?.map((item) => {
                      return (
                        <tr key={item?._id} >
                          <td>{item?.product?.title}</td>
                          <td>{product?.phone?.price}</td>
                          <td>{product && product?.status === "waitDelivery" ? "Đợi giao hàng" : product?.status === "delivering" ? "Đang giao hàng" : product?.status === "successfull" ? "Giao hàng thành công"  :  "Đơn hàng bị hủy"}</td>
                          <td>{product?.province}</td>
                          <td>{product?.city}</td>
                          <td>{product?.stress}</td>
                          <th className="flex flex-col gap-2">
                          
                            <Link
                              to={`/order-view/${product?._id}`}
                              className="btn btn-primary btn-sm mr-1"
                            >
                              Xem chi tiết
                            </Link>
                            <Link
                              to={`/order-edit/${product?._id}`}
                              className="btn btn-info btn-sm mr-1"
                            >
                              {currentData?.role === "agent" ? "Cập nhật trạng thái đơn hàng" : "Chỉnh sửa"}
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
                     })
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
