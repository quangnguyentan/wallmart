import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import "./sb-admin-2.min.css";
import { apiGetProductById } from '@/services/productService';
import { apiGetUserById } from '@/services/userService';
import { pathImage } from '@/lib/helper';
import { apiGetOrderById, apiGetOrderByIdOrder } from '@/services/orderServer';
import { apiGetstoreById } from '@/services/storeService';
import { useSelector } from 'react-redux';

function OrderViewDone() {
    const { id } = useParams();
    const [productList, setproductList] = useState([])
    const [storeList, setStoreList] = useState([])
    const [isLoading, setLoading] = useState(true);
    const location = useLocation(); // Lấy thông tin về state từ URL
    // const productList = location.state;
    const { currentData } = useSelector((state) => state.user); 

    useEffect(() => {
        getUsers(id);
    }, []);

    let getUsers = async (id) => {
        try {
           if(currentData?.role === "agent"){
            const products = await apiGetOrderByIdOrder(id)
            setproductList(products);
            setLoading(false);
           }else{
            const products = await apiGetOrderByIdOrder(id)
            console.log(products)
            setproductList(products);
            setLoading(false);
           }
        } catch (error) {
            console.log(error);
            // setLoading(false);
        }
    }
    console.log(productList)

    return (
        <>
           { 
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Xem chi tiết đơn h</h6>
                </div>
                <div className="card-body">
                    {
                        isLoading ? <img src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif' />
                            :
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                       {currentData?.role === "admin" ?  <tr>
                                        <th>Tên người nhận hàng</th>
                                        <th>Số điện thoại </th>
                                        <th>Thành phố </th>
                                        <th>Tỉnh</th>
                                        <th>Số nhà, tên đường</th>
                                        <th>Trạng thái nhận hàng</th>

                                        </tr> :  <tr>
                                        <th>Tên người nhận hàng</th>
                                        <th>Số điện thoại </th>
                                        <th>Thành phố </th>
                                        <th>Tỉnh</th>
                                        <th>Số nhà, tên đường</th>
                                        <th>Trạng thái nhận hàng</th>

                                        </tr>}
                                    </thead>
                                   
                                    <tbody>
                                        {currentData?.role === "admin" ? <tr>
                                        <td>{productList?.revicerName}</td>
                                        <td>{productList?.phone}</td>
                                        <td>{productList?.city}</td>
                                        <td>{productList?.province}</td>
                                        <td>{productList?.stress}</td>
                                       <td>  {productList &&  productList?.status === "waitDelivery" ? "Đợi giao hàng" : productList?.status === "delivering" ? "Đang giao hàng" : productList?.status === "successfull" ? "Giao hàng thành công"  :  productList?.status === "waitPay" ? "Chưa thanh toán"  : "Đơn hàng bị hủy"}</td>
                                       
                                        
                                        
                                        </tr> : <tr>
                                        <td>{productList?.revicerName}</td>
                                        <td>{productList?.phone}</td>
                                        <td>{productList?.city}</td>
                                        <td>{productList?.province}</td>
                                        <td>{productList?.stress}</td>
                                       <td>  {productList &&  productList?.status === "waitDelivery" ? "Đợi giao hàng" : productList?.status === "delivering" ? "Đang giao hàng" : productList?.status === "successfull" ? "Giao hàng thành công"  :  productList?.status === "waitPay" ? "Chưa thanh toán"  : "Đơn hàng bị hủy"}</td>
                                       
                                       
                                        
                                        
                                        </tr>}
                                    </tbody>
                                </table>
                            </div>
                    }
                </div>
            </div>}
        </>

    )
}

export default OrderViewDone