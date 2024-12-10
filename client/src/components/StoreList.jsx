import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sb-admin-2.min.css";
import { apiGetStore } from "@/services/storeService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
function StoreList() {
  const [productList, setproductList] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [value, setValue] = useState(null)
  useEffect(() => {
    if(value?.length > 0) {
      getUsers();
    }
    }, [value]);

    const onChangeValue = (e) => {
        setValue(e.target.value)
    }
  useEffect(() => {
    getUsers();
    
  }, []);

  let getUsers = async () => {
    try {
      const products = await apiGetStore()
      setproductList(products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  let handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure do you want to delete the data?"
      );
      if (confirmDelete) {
        await axios.delete(
          `https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${id}`
        );
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        {/* <h1 className="h3 mb-0 text-gray-800">User-List</h1> */}
        {/* <Link
          to="/create-store"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Create Store
        </Link> */}
      </div>
      {/* <!-- DataTables --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 flex items-center justify-center gap-8">
          <h6 className="m-0 font-weight-bold text-primary">Người dùng</h6>
          <form
                className="d-none w-[30%] d-sm-inline-block border form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search relative">
           
                <div className="input-group">
                    <input value={value} onChange={onChangeValue} type="text" className="form-control bg-light border-0 small" placeholder="Tìm kiếm tên hoặc ngành hoặc tên người tạo cửa hàng" 
                        aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div className="card-body">
          {isLoading ? (
            <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif" />
          ) : (
            <div className="table-responsive overflow-y-scroll custom-table">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                  <th>Tên cửa hàng</th>

                    <th>Ngành</th>
                    <th>Tên người tạo cửa hàng</th>
                    <th>Số điện thoại người tạo cửa hàng</th>
                    <th>Khu vực người đăng ký</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                
                <tbody>
                  {/* {productList.map((product) => {
                   if(product?.active === "access") {
                    return (
                      <tr key={product?.id}>
                        <td>{product?.inforByStore?.nameStore}</td>
                        <td>{product?.industry}</td>
                        <td>{product?.fullname}</td>
                        <td>{product?.phone}</td>
                        <td>{product?.address?.area}</td>
                        <th className="flex flex-col gap-2">
                          <Link
                            to={`/book-product/${product?._id}/${product?.userId}`}
                            className="btn btn-primary btn-sm mr-1"
                          >
                            Đặt đơn ảo
                          </Link>
                    
                        </th>
                      </tr>
                    );
                   }
                  })} */}
                  {value?.length > 0 ? productList?.map((product, index) => {
                     if(typeof product?.inforByStore?.nameStore === "string" && typeof value === "string" && product?.inforByStore?.nameStore?.toUpperCase().includes(value.toUpperCase()) || product?.fullname?.toUpperCase().includes(value.toUpperCase()) || product?.industry?.toUpperCase().includes(value.toUpperCase()) || product?.phone?.toUpperCase().includes(value.toUpperCase()) || product?.address?.area?.toUpperCase().includes(value.toUpperCase())) {
                      if(product?.active === "access") {
                        return (
                          <tr key={product?.id}>
                            <td>{product?.inforByStore?.nameStore}</td>
                            <td>{product?.industry}</td>
                            <td>{product?.fullname}</td>
                            <td>{product?.phone}</td>
                            <td>{product?.address?.area}</td>
                            <th className="flex flex-col gap-2">
                              <Link
                                to={`/book-product/${product?._id}/${product?.userId}`}
                                className="btn btn-primary btn-sm mr-1"
                              >
                                Đặt đơn ảo
                              </Link>
                        
                            </th>
                          </tr>
                        );
                       }
                     }
                    ;
                  }) : productList?.map((product, index) => {
                    if(product?.active === "access") {
                      return (
                        <tr key={product?.id}>
                          <td>{product?.inforByStore?.nameStore}</td>
                          <td>{product?.industry}</td>
                          <td>{product?.fullname}</td>
                          <td>{product?.phone}</td>
                          <td>{product?.address?.area}</td>
                          <th className="flex flex-col gap-2">
                            <Link
                              to={`/book-product/${product?._id}/${product?.userId}`}
                              className="btn btn-primary btn-sm mr-1"
                            >
                              Đặt đơn ảo
                            </Link>
                      
                          </th>
                        </tr>
                      );
                     }
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

export default StoreList;
