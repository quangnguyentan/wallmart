import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./sb-admin-2.min.css";
import { apiGetProduct } from "@/services/productService";
import { useDispatch, useSelector } from "react-redux";
import { apiGetAllUser } from "@/services/userService";
import { apiDeleteOrderById, apiGetOrder, apiGetOrderByShop } from "@/services/orderServer";
import { apiGetMyStore, apiGetStore } from "@/services/storeService";
import { getCurrent } from "@/stores/actions/userAction";
import toast from "react-hot-toast";



function Orderlist() {
  const [productList, setproductList] = useState([])
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate()
  const { currentData } = useSelector((state) => state.user); 
  useEffect(() => {
    getUsers();
  }, []);
  
 
  let getUsers = async () => {
    try {
      if(currentData?.role === "agent"){
        const user = await apiGetOrderByShop()
        const filterOrderUser = user?.filter((res) => res?.user?.role === "user")
        setproductList(filterOrderUser);
        setLoading(false);
      }else{
        const store = await apiGetOrder()
        setproductList(store);
        setLoading(false);
      }
    
    } catch (error) {
      console.log(error);
    }
  };
  let handleDelete = async (id) => {
    try {
      window.confirm(
        "Are you sure do you want to delete the data?"
      );
        await apiDeleteOrderById(id)
        toast.success("Xóa đơn hàng thành công")
        navigate("/product-list")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        {/* <h1 className="h3 mb-0 text-gray-800 text-2xl">Đơn mua sản phẩm của shop</h1> */}
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
          <h6 className="m-0 font-weight-bold text-primary max-sm:text-sm">Đơn hàng</h6>
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
                  <th className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Số thứ tự</th>
                  <th className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Tên đơn hàng</th>
                    <th className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Giá tiền </th>
                    <th className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Số lượng</th>
                    <th className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Tổng tiền</th>
                    <th className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Trạng thái vận chuyển</th>
                  
                    <th className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Hành động</th>
                  </tr>
                </thead>
                
                <tbody>
                  {currentData?.role === "agent" && productList?.map((product, index) => {
                    if(product?.user?.role === "user"){
                      return (
                        <tr key={product?._id}>
                          <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{index + 1}</td>
                          <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{product?.product?.title}</td>
                          <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{product?.product?.price}$</td>

                          <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{product?.quantity}</td>
                          <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{product?.product?.price * product?.quantity}$</td>
                          <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{product && product?.status === "waitDelivery" ? "Đợi giao hàng" : product?.status === "delivering" ? "Đang giao hàng" : product?.status === "successfull" ? "Giao hàng thành công"  :  "Đơn hàng bị hủy"}</td>
                        
                          <th className="flex flex-col gap-2">
                          
                            <Link
                              to={`/order-view/${product?._id}`}
                              className="btn btn-primary btn-sm mr-1"
                            >
                              <span className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Xem chi tiết</span>
                            
                            </Link>
                            <Link
                              to={`/order-edit/${product?._id}`}
                              className="btn btn-info btn-sm mr-1"
                            >
                                 <span className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{currentData?.role === "agent" ? "Cập nhật trạng thái đơn hàng" : "Chỉnh sửa"}</span>
                            
                            
                            </Link>
                            <button
                              onClick={() => handleDelete(product?._id)}
                              className="btn btn-danger btn-sm mr-1"
                            >
                              <span className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Xóa</span>
                            </button>
                          </th>
                        </tr>
                      ); 
                    }
                  })}
                 {currentData?.role === "admin" &&
                      productList?.map((item, index) => {
                        return (
                          <tr key={item?._id}>
                            {/* Tên sản phẩm */}
                            <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{index + 1}</td>
                            <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                              {item?.product?.title}
                            </td>
                            {/* Giá sản phẩm */}
                            <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                              {item?.product?.price}$
                            </td>
                            {/* Trạng thái */}
                           
                            {/* Hành động */}
                            
                            <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                              {item?.quantity}
                            </td>
                            <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                              {item?.quantity * item?.product?.price}$
                            </td>
                            <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                            {item && item?.status === "waitDelivery" ? "Đợi giao hàng" : item?.status === "delivering" ? "Đang giao hàng" : item?.status === "successfull" ? "Giao hàng thành công"  :  "Đơn hàng bị hủy"}
                            </td>
                            <td>
                              <div className="flex flex-col gap-2">
                                <Link
                                  to={`/order-view/${item?._id}`}
                                  state={item}
                                  className="btn btn-primary btn-sm"
                                >
                                  Xem chi tiết
                                </Link>
                                <Link
                                  to={`/order-edit/${item?._id}`}
                                  className="btn btn-info btn-sm"
                                >
                                  Chỉnh sửa
                                </Link>
                                <button
                                  onClick={() => handleDelete(item?._id)}
                                  className="btn btn-danger btn-sm"
                                >
                                  Xóa
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      }
                    )}

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
