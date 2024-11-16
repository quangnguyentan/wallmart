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
      <div className="d-sm-flex  align-items-center justify-content-end mb-4 flex items-center justify-end">
        {/* <h1 className="h3 mb-0 text-gray-800 text-3xl">Sản phẩm</h1> */}
        {currentData?.role === "admin" ? <Link
          to={`/create-product/${currentData?._id}`}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Tạo sản phẩm
        </Link> : <Link
          to={`/buy-product/${currentData?._id}`}
          className=" d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          <span className=" max-sm:text-xs">Nhập sản phẩm</span>
        </Link>}
      </div>
      {/* <!-- DataTables --> */}
      <div className="card shadow mb-4 max-sm:flex-col max-sm:flex">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary max-sm:text-sm">Sản phẩm</h6>
        </div>
        <div className="card-body">
          {isLoading ? (
            <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif" />
          ) : (
            <div className="table-responsive">
              <table
                className="table table-bordered "
                
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr >
                    <th scope="col"  className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words ">Tên sản phẩm</th>
                    <th scope="col"  className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words  ">Giá tiền mặc định</th>
                    <th scope="col"  className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words  ">Giá tiền chưa giảm giá</th>
                    <th scope="col"  className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words  ">Hàng tồn kho</th>
                    <th scope="col"  className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words  ">Hành động</th>

                  </tr>
                </thead>
                
                <tbody>
                  {productList?.map((product) => {
                    return (
                      <tr key={product?.id} className="max-sm:text-xs">
                        <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words ">{product?.title}</td>
                        <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words ">${product?.price}</td>
                        <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">${product?.priceOld}</td>
                        <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{product?.inventory} sản phẩm</td>
                        
                        <th className="flex flex-col gap-2">
                          <Link
                            to={`/product-view/${product?._id}/${currentData?._id}`}
                            className="btn btn-primary btn-sm mr-1 "
                          >
                            <span className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                            Xem chi tiết
                            </span>
                          </Link>
                         {currentData?.role === "admin" && (
                           <Link
                           to={`/product-edit/${product?._id}`}
                           className="btn btn-info btn-sm mr-1"
                         >
                          <span className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words ">
                            Chỉnh sửa
                            </span>
                         </Link>
                         )}
                          {currentData?.role === "admin" && (
                          <button
                            onClick={() => handleDelete(product?._id)}
                            className="btn btn-danger btn-sm mr-1"
                          >
                           <span className="max-sm:text-[10px]">
                            Xóa
                            </span>
                          </button>
                         )}

                        </th>
                      </tr>
                    );
                  })}
                {product?.order?.map((product) => {
                    return (
                      <tr key={product?.product?.id}>
                        <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{product?.product?.title}</td>
                        <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words ">${product?.product?.price}</td>
                        <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words ">${product?.product?.priceOld}</td>
                        <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words ">{product?.quantity} sản phẩm</td>
        
                        <th className="flex flex-col gap-2">
                          <Link
                            to={`/product-view/${product?.product?._id}/${currentData?._id}`}
                            className="btn btn-primary btn-sm mr-1"
                          >
                            <span className="max-sm:text-[10px] verflow-hidden text-ellipsis whitespace-nowrap break-word px-2">
                            Xem chi tiết
                            </span>
                          </Link>
                         {currentData?.role === "admin" && (
                           <Link
                           to={`/product-edit/${product?._id}`}
                           className="btn btn-info btn-sm mr-1"
                         >
                             <span className="max-sm:text-[10px] verflow-hidden text-ellipsis whitespace-nowrap break-words">
                            Chỉnh sửa
                            </span>
                         </Link>
                         )}
                          {currentData?.role === "admin" && (
                          <button
                            onClick={() => handleDelete(product?._id)}
                            className="btn btn-danger btn-sm mr-1"
                          >
                            <span className="max-sm:text-[10px] verflow-hidden text-ellipsis whitespace-nowrap break-words">
                                Xóa
                            </span>
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
