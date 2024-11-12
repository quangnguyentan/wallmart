import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./sb-admin-2.min.css";
import { apiGetProductById } from '@/services/productService';
import { apiGetUserById } from '@/services/userService';
import { pathImage } from '@/lib/helper';

function UserDepositView() {
    const { id } = useParams();
    const [productList, setproductList] = useState([])
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
                                        <th>Số tiền của khách</th>
                    

                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        <tr>
                                        <td>{productList?.fullName}</td>
                                        <td>{productList?.phone}</td>
                                        <td>{productList?.email}</td>
                                        <td>{productList?.deposit}</td>
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

export default UserDepositView