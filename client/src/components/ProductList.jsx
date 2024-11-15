import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sb-admin-2.min.css";
import { apiDeleteProductById, apiGetProduct } from "@/services/productService";
import { useSelector } from "react-redux";
import { apiGetMyStore } from "@/services/storeService";

function ProductList() {
  const [productList, setproductList] = useState([])
  const [product, setProduct] = useState(null)
  const [isLoading, setLoading] = useState(true);
  const { currentData } = useSelector((state) => state.user); 
  useEffect(() => {
    getUsers();
  }, []);
  let getUsers = async () => {
    try {
     if(currentData?.role === "admin"){
      const products = await apiGetProduct()
      console.log(products)
      setproductList(products);
    
      setLoading(false);
     }else{
      const products = await apiGetMyStore()
      setProduct(products[0]);
      setLoading(false);
     }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(product)
  let handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure do you want to delete the data?"
      );
      if (confirmDelete) {
        await apiDeleteProductById(id)
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800 text-3xl">Sản phẩm</h1>
        {currentData?.role === "admin" ? <Link
          to={`/create-product/${currentData?._id}`}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Tạo sản phẩm
        </Link> : <Link
          to={`/buy-product`}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Nhập sản phẩm
        </Link>}
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
                  {productList?.map((product) => {
                    return (
                      <tr key={product?.id}>
                        <td>{product?.title}</td>
                        <td>${product?.price}</td>
                        <td>${product?.priceOld}</td>
                        <td>{product?.inventory} sản phẩm</td>
                        
                        <th className="flex flex-col gap-2">
                          <Link
                            to={`/product-view/${product?._id}/${currentData?._id}`}
                            className="btn btn-primary btn-sm mr-1"
                          >
                            Xem chi tiết
                          </Link>
                         {currentData?.role === "admin" && (
                           <Link
                           to={`/product-edit/${product?._id}`}
                           className="btn btn-info btn-sm mr-1"
                         >
                           Chỉnh sửa
                         </Link>
                         )}
                          {currentData?.role === "admin" && (
                          <button
                            onClick={() => handleDelete(product?._id)}
                            className="btn btn-danger btn-sm mr-1"
                          >
                            Xóa
                          </button>
                         )}

                        </th>
                      </tr>
                    );
                  })}
                {product?.order?.map((product) => {
                    return (
                      <tr key={product?.product?.id}>
                        <td>{product?.product?.title}</td>
                        <td>${product?.product?.price}</td>
                        <td>${product?.product?.priceOld}</td>
                        <td>{product?.quantity} sản phẩm</td>
        
                        <th className="flex flex-col gap-2">
                          <Link
                            to={`/product-view/${product?.product?._id}/${currentData?._id}`}
                            className="btn btn-primary btn-sm mr-1"
                          >
                            Xem chi tiết
                          </Link>
                         {currentData?.role === "admin" && (
                           <Link
                           to={`/product-edit/${product?._id}`}
                           className="btn btn-info btn-sm mr-1"
                         >
                           Chỉnh sửa
                         </Link>
                         )}
                          {currentData?.role === "admin" && (
                          <button
                            onClick={() => handleDelete(product?._id)}
                            className="btn btn-danger btn-sm mr-1"
                          >
                            Xóa
                          </button>
                         )}

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

export default ProductList;
