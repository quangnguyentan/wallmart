import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./sb-admin-2.min.css";
import { apiGetProductById } from '@/services/productService';

function ProductView() {
    const { id, userId } = useParams();
    console.log(userId)
    const [productList, setproductList] = useState([])
    const [storeList, setStoreList] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        //On Load
        getUsers(id);
        console.log("welcome to userview");
    }, []);

    let getUsers = async (id) => {
        try {
            const products = await apiGetProductById(id, userId)
            setproductList(products?.products);
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
                                        <th>Tên sản phẩm</th>
                                        <th>Giá tiền mặc định</th>
                                        <th>Giá tiền chưa giảm giá</th>
                                        <th>Hàng tồn kho</th>
                                        <th>Kích thước sản phẩm</th>
                                        <th>Màu sắc sản phẩm</th>
                                        <th>Tên cửa hàng</th>

                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        <tr>
                                        <td>{productList?.title}</td>
                                        <td>{productList?.price}$</td>
                                        <td>{productList?.priceOld}$</td>
                                        <td>{productList?.inventory} sản phẩm</td>
                                        <td>{productList?.size?.join(",")}</td>
                                        <td>{productList?.color?.join(",")}</td>
                                        <td>{productList?.store?.inforByStore?.nameStore}</td>
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

export default ProductView