import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./sb-admin-2.min.css";
import { apiDeleteOrderById, apiGetOrder, apiGetOrderByIdOrder, apiGetOrderByShop, apiUpdateOrder } from "@/services/orderServer";
import toast from 'react-hot-toast';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { pathImage } from "@/lib/helper";


const list_status = [
  {
    id : 1,
    name : "Chưa thanh toán"
  },
  {
    id : 2,
    name : "Đợi giao hàng"
  },
  {
    id : 3,
    name : "Đang giao hàng"
  },
  {
    id : 4,
    name : "Giao hàng thành công"
  },
  {
    id : 5,
    name : "Đơn hàng bị hủy"
  },
]
function OrderlistDone() {
  const [productList, setproductList] = useState([])
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate()
  const { currentData } = useSelector((state) => state.user);
  const [values, setValues] = useState("");
  const [order, setOrder] = useState("")
  const [store, setStore] = useState("")
  const { id } = useParams()
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
    watch,
    getValues,
    setValue,

  } = useForm();
  // const updateOrder = async (data) => {
  //   console.log(data)
  //   try {
  //     const formData = new FormData(); 
  //     setLoading(true);
  //     // const res = await apiUpdateOrder(id, {status : values ? values && values === "Đợi giao hàng" ? "waitDelivery"  : values === "Đang giao hàng"  ? "delivering"  : values === "Giao hàng thành công"  ?  "successfull" : values === "Chưa thanh toán" ? "waitPay" : "canceled" : order?.status }); 
  //     // if(res) {
  //     //   setLoading(false);
  //     //   toast.success("Đăng kí thành công");
  //     //   navigate("/order-list")
  //     // }
  //   } catch (error) {
  //     console.error(error);
  //     setLoading(false);
  //     toast.error("Đã xảy ra lỗi, vui lòng thử lại sau");
  //   }
  // };
 
  useEffect(() => {
    getUsers();
  }, []);
  
 
  let getUsers = async () => {
    try {
      if(currentData?.role === "agent"){
        const user = await apiGetOrderByShop()
        const filterOrderUser = user?.filter((res) => res?.user?.role === "user")
        setproductList(filterOrderUser);
        setLoading(false);
      }else{
        const store = await apiGetOrder()
        console.log(store)
        setproductList(store?.orders1);
        setStore(store?.stores1);
        setLoading(false);
      }
    
    } catch (error) {
      console.log(error);
    }
  };
  let handleDelete = async (id) => {
    try {
      window.confirm(
        "Are you sure do you want to delete the data?"
      );
        await apiDeleteOrderById(id)
        toast.success("Xóa đơn hàng thành công")
        navigate("/product-list")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        {/* <h1 className="h3 mb-0 text-gray-800 text-2xl">Đơn mua sản phẩm của shop</h1> */}
        {/* <Link
          to={`/create-product/${currentData?._id}`}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Create User
        </Link> */}
      </div>
      {/* <!-- DataTables --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary max-sm:text-sm">Đơn hàng</h6>
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
                  <th className="max-sm:text-[10px] max-sm:overflow-hidden text-center max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Số thứ tự</th>
                  <th className="max-sm:text-[10px] max-sm:overflow-hidden text-center max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Tên đơn hàng</th>
                  <th className="max-sm:text-[10px] max-sm:overflow-hidden text-center max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Ảnh sản phẩm</th>
                    <th className="max-sm:text-[10px] max-sm:overflow-hidden text-center max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Tên cửa hàng</th>
                    <th className="max-sm:text-[10px] max-sm:overflow-hidden text-center max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Tên khách hàng</th>
                     <th className="max-sm:text-[10px] max-sm:overflow-hidden text-center max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Giá tiền </th>
                    <th className="max-sm:text-[10px] max-sm:overflow-hidden text-center max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Số lượng</th>
                    <th className="max-sm:text-[10px] max-sm:overflow-hidden text-center max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Tổng tiền</th>
                    <th className="max-sm:text-[10px] max-sm:overflow-hidden text-center max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Trạng thái vận chuyển</th>
                  
                    <th className="max-sm:text-[10px] max-sm:overflow-hidden text-center max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Hành động</th>
                  </tr>
                </thead>
                
                <tbody>
                  {currentData?.role === "agent" && productList?.map((product, index) => {
                    if(product?.user?.role === "user"){
                      return (
                        <tr key={product?._id}>
                          <td className="max-sm:text-[10px] max-sm:overflow-hidden text-center max-sm:text-ellipsis  max-sm:whitespace-nowrap max-sm:break-words">{index + 1}</td>
                          <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{product?.product?.title}</td>
                          <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{product?.product?.price}$</td>

                          <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{product?.quantity}</td>
                          <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{product?.product?.price * product?.quantity}$</td>
                          <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{product &&  product?.status === "waitDelivery" ? "Đợi giao hàng" : product?.status === "delivering" ? "Đang giao hàng" : product?.status === "successfull" ? "Giao hàng thành công"  :  product?.status === "waitPay" ? "Chưa thanh toán"  : "Đơn hàng bị hủy"}</td>
                          <th className="flex flex-col gap-2">
                          
                            <Link
                              to={`/order-view/${product?._id}`}
                              className="btn btn-primary btn-sm mr-1"
                            >
                              <span className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Xem chi tiết</span>
                            
                            </Link>
                            <Link
                              to={`/order-edit/${product?._id}`}
                              className="btn btn-info btn-sm mr-1"
                            >
                                 <span className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">{currentData?.role === "agent" ? "Cập nhật trạng thái đơn hàng" : "Chỉnh sửa"}</span>
                            
                            
                            </Link>
                            <button
                              onClick={() => handleDelete(product?._id)}
                              className="btn btn-danger btn-sm mr-1"
                            >
                              <span className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Xóa</span>
                            </button>
                          </th>
                        </tr>
                      ); 
                    }
                  })}
                 {currentData?.role === "admin" &&
                      productList?.map((item, index) => {
                        const storeForItem = store ? store[index] : null; 
                        return (
                          <tr key={item?._id}>
                            {/* Tên sản phẩm */}
                            <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                            <div className="flex items-center justify-center py-10">
                            {index + 1}
                             </div>
                            </td>
                            <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                              <div className="flex items-center line-clamp-1 w-80 justify-center py-10">
                               {item?.product?.title}
                             </div>
                            </td>
                            <td className="max-sm:text-[10px]   max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                            <div className="flex items-center justify-center py-10">
                            <img src={`${pathImage}/${item?.product?.photos[0]}`}  className="w-8 h-8" alt="photos" />
                            </div>
                            </td>
                            <td className="max-sm:text-[10px]  max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                             <div className="flex items-center justify-center py-10">
                             {storeForItem ? storeForItem?.inforByStore?.nameStore : "Không có cửa hàng"}
                             </div>
                            </td>

                            <td className="max-sm:text-[10px]  max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                              <div className="flex items-center justify-center py-10">
                              {item?.user?.fullName}
                             </div>
                            </td>
                            <td className="max-sm:text-[10px]  max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                            
                              <div className="flex items-center justify-center py-10">
                              {item?.product?.price}$
                             </div>
                            </td>
                            {/* Trạng thái */}
                           
                            {/* Hành động */}
                            
                            <td className="max-sm:text-[10px]  max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                              <div className="flex items-center justify-center py-10">
                              {item?.quantity}

                             </div>
                            </td>
                            <td className="max-sm:text-[10px]  max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                            
                              <div className="flex items-center justify-center py-10">
                              {item?.quantity * item?.product?.price}$

                             </div>
                            </td>
                            
                            <td className="max-sm:text-[10px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">
                       <div className="flex items-center justify-center py-10">
                       {item &&  item?.status === "waitDelivery" ?<span className="px-2 py-1  text-white bg-amber-900 font-semibold text-sm">Đợi giao hàng</span> : item?.status === "delivering" ? <span className="px-2 py-1  text-white bg-yellow-400 font-semibold text-sm">Đang giao hàng</span> : item?.status === "successfull" ? <span className="px-2 py-1  text-white bg-green-500 font-semibold text-sm">Giao hàng thành công</span>  :  item?.status === "waitPay" ? <span className="px-2 py-1  text-white bg-pink-600 font-semibold text-sm">Chưa thanh toán</span>  :  <span className="px-2 py-1  text-white bg-red-600 font-semibold text-sm">Đơn hàng bị hủy</span>}
                       </div>
                            </td>
                            <td>
                            <div className="flex items-center justify-center">
                            <div className="flex flex-col gap-2">
                                <Link
                                  to={`/order-view-done/${item?._id}`}
                                  state={item}
                                  className="btn btn-primary btn-sm"
                                >
                                  Xem chi tiết
                                </Link>
                                <Link
                                  // to={`/order-edit-done/${item?._id}`}
                                  className="btn btn-info btn-sm"
                                  onClick={() => {
                                    if(item?.status === "successfull"){
                                      toast.success("Đơn hàng đã hoàn thành")
                                    }else{
                                      toast.error("Đơn hàng đã bị hủy")
                                    }
                                  }}
                                >
                                  Cập nhật đơn hàng
                                </Link>
                                <button
                                  onClick={() => handleDelete(item?._id)}
                                  className="btn btn-danger btn-sm"
                                >
                                  Xóa
                                </button>
                              </div>

                             </div>
                             
                            </td>
                          </tr>
                        );
                      }
                    )}

                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default OrderlistDone;
