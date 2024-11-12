import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./sb-admin-2.min.css";
import { apiGetProductById } from '@/services/productService';
import { apiGetstoreById } from '@/services/storeService';
import ProductList from './ProductList';
import { pathImage } from '@/lib/helper';

function StoreFromView() {
    const { id } = useParams();
    const [userList, setUserList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        //On Load
        getUsers(id);
        console.log("welcome to userview");
    }, []);

    let getUsers = async (id) => {
        try {
            const user = await apiGetstoreById(id)
            console.log(user)
            // console.log(user);
            setUserList(user);
            // console.log(userList);
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
                                        <th>Ngành</th>
                                        <th>Tên người tạo cửa hàng</th>
                                        <th>Số điện thoại người tạo cửa hàng</th>
                                        <th>Email người tạo cửa hàng</th>

                                        <th>Tên cửa hàng</th>
                                        <th>Khu vực người đăng ký</th>
                                        <th>Loại giấy phép kinh doanh</th>

                                        <th>Số căn cước</th>
                                        <th>Ảnh mặt trước căn cước</th>
                                        <th>Ảnh mặt sau căn cước</th>
                                        <th>Ảnh chân dung</th>
                                        <th>Địa chỉ </th>

                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        <tr>
                                        <td>{userList?.industry}</td>
                                        <td>{userList?.fullname}</td>
                                        <td>{userList?.phone}</td>
                                        <td>{userList?.emailYourself}</td>
                                        <td>{userList?.inforByStore?.nameStore}</td>
                                        <td>{userList?.address?.area}</td>
                                        <td>{userList?.service ==="company" ? "Doanh nghiệp" : "Bán lẻ"}</td>
                                        <td>{userList?.idYourself}</td>
                                        <td><img className='w-12 h-12' src={`${pathImage}/${userList?.identification?.front}`} alt="" /></td>
                                        <td><img className='w-12 h-12' src={`${pathImage}/${userList?.identification?.backside}`} alt="" /></td>
                                        <td><img className='w-12 h-12' src={`${pathImage}/${userList?.identification?.yourFace}`} alt="" /></td>
                                        <td>{userList?.address?.street}</td>
                                       
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

export default StoreFromView