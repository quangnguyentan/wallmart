import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./sb-admin-2.min.css";
import { apiGetProductById } from '@/services/productService';
import { apiGetUserById } from '@/services/userService';
import { pathImage } from '@/lib/helper';

function UserView() {
    const { id } = useParams();
    const [productList, setproductList] = useState([])
    const [storeList, setStoreList] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getUsers(id);
    }, []);
    console.log(id)

    let getUsers = async (id) => {
        try {
            const products = await apiGetUserById(id)
            setproductList(products?.user);
            setLoading(false);
        } catch (error) {
            console.log(error);
            // setLoading(false);
        }
    }
    console.log(productList)

    return (
        <>
            <div>UserView - {id}</div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">UserView</h6>
                </div>
                <div className="card-body">
                    {
                        isLoading ? <img src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif' />
                            :
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                        <th>Tên người dùng</th>
                                        <th>Số điện thoại đăng nhập</th>
                                        <th>Email đăng nhập </th>
                                        <th>Vai trò</th>
                                        <th>Giới tính</th>
                                        <th>Giỏ hàng</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Ảnh sản phẩm</th>
                    

                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        <tr>
                                        <td>{productList?.username}</td>
                                        <td>{productList?.phone}</td>
                                        <td>{productList?.email}</td>
                                        <td>{productList?.role}</td>
                                        <td>{productList?.gender}</td>
                                        <td>{productList?.cart?.map((cart,index) => (
                                            <span key={cart?._id}>
                                                <span>Sản phẩm {index + 1}</span>
                                            </span>
                                        ))}</td>
                                        <td>{productList?.cart?.map((cart) => (
                                            <span key={cart?._id}>
                                                <span>{cart?.product?.title}</span>
                                            </span>
                                        ))}</td>
                                        <td>{productList?.cart?.map((cart) => (
                                            <span key={cart?._id} className='flex items-center justify-center'>
                                                <img src={`${pathImage}/${cart?.product?.photos[0]}`} alt=""  className='w-12 h-12'/>
                                            </span>
                                        ))}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    }
                </div>
            </div>
        </>

    )
}

export default UserView