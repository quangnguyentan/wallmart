import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import "./sb-admin-2.min.css";
import { apiGetProductById } from '@/services/productService';
import { apiGetUserById } from '@/services/userService';
import { pathImage } from '@/lib/helper';
import { apiGetOrderById, apiGetOrderByIdOrder } from '@/services/orderServer';
import { apiGetstoreById } from '@/services/storeService';

function OrderView() {
    const { id } = useParams();
    const [productList, setproductList] = useState([])
    const [storeList, setStoreList] = useState([])
    const [isLoading, setLoading] = useState(true);
    const location = useLocation(); // Lấy thông tin về state từ URL
    // const productList = location.state;

    useEffect(() => {
        getUsers(id);
    }, []);

    let getUsers = async (id) => {
        try {
            const products = await apiGetstoreById(id)
            setproductList(products);
            setLoading(false);
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
                                        <tr>
                                        <th>Tên người mở cửa hàng</th>
                                        <th>Số điện thoại </th>
                                        <th>Email </th>
                                        <th>Loại kinh doanh</th>
                                        <th>Tên cửa hàng</th>
                                        <th>Ảnh cửa hàng</th>

                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        <tr>
                                        <td>{productList?.fullname}</td>
                                        <td>{productList?.phone}</td>
                                        <td>{productList?.emailYourself}</td>
                                        <td>{productList?.industry}</td>
                                        <td>{productList?.inforByStore?.nameStore}</td>
                                        <td><img className='h-8 w-8' src={`${pathImage}/${productList?.logoStore}`} alt="" /></td>
                                       
                                       
                                        
                                        
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    }
                </div>
            </div>}
        </>

    )
}

export default OrderView