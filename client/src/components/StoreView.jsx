import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./sb-admin-2.min.css";
import { apiGetProductById } from '@/services/productService';

function StoreView() {
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
            const user = await apiGetProductById(id)
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
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>E-Mail</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Country</th>
                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        <tr>
                                            <td>{userList.id}</td>
                                            <td> {userList.username} </td>
                                            <td>{userList.email}</td>
                                            <td>{userList.city}</td>
                                            <td>{userList.state}</td>
                                            <td>{userList.country}</td>
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

export default StoreView