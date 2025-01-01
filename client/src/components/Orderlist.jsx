import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiGetOrder } from "@/services/orderServer"; // Adjust the API service
import toast from 'react-hot-toast';
import moment from "moment";
import { pathImage } from "@/lib/helper";

function OrderList() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Track current page
  const [totalPages, setTotalPages] = useState(1); // Track total pages
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [store, setStore] = useState("")
  const navigate = useNavigate();

  const fetchOrders = async (page = 1) => {
    setLoading(true);
    try {
      const res = await apiGetOrder({ page, limit: 10 });
      setProductList(res.orders);
      setTotalPages(res.totalPages); 
      setStore(res?.stores)
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Error loading orders!");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders(page);
  }, [page]);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      fetchOrders(page);  // Re-fetch orders when the search query changes
    }
  }, [page, searchQuery]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage); // Update page number
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1); 
    fetchOrders(1); 
  };
  const filteredOrders = productList.filter((item, index) => {
    const storeForItem = store[index] ? store[index].inforByStore?.nameStore : "";
    return (
      item?.product?.title?.toUpperCase().includes(searchQuery.toUpperCase()) ||
      storeForItem?.toUpperCase().includes(searchQuery.toUpperCase())
    );
  });
  console.log(searchQuery)
  return (
    <div className="">
      <div className="card">
        {/* Search bar */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Order List</h2>
          <form onSubmit={handleSearchSubmit} className="flex space-x-2">
            <input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Search
            </button>
          </form>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center">
            <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="Loading" />
          </div>
        ) : (
          <>
            <div className="table-responsive overflow-x-auto custom-table shadow-2xl">
              <table className="table table-bordered w-full text-sm">
              <thead>
                  <tr>
                  <th className="max-sm:text-[10px] max-sm:overflow-hidden text-center max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Số thứ tự</th>
                  <th className="max-sm:text-[10px] max-sm:overflow-hidden text-center max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Tên đơn hàng</th>
                  <th className="max-sm:text-[10px] max-sm:overflow-hidden text-center max-sm:text-ellipsis max-sm:whitespace-nowrap max-sm:break-words">Thời gian đặt đơn</th>
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
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((item, index) => {
                      const storeForItem = store[index] ? store[index].inforByStore?.nameStore : "Không có cửa hàng";
                      return (
                        <tr key={item._id}>
                          <td className="p-2">{(page - 1) * 10 + index + 1}</td>
                          <td className="p-2">{item?.product?.title}</td>
                          <td className="p-2">{moment(item?.createdAt).format("DD-MM-YYYY HH:mm:ss")}</td>
                          <td className="p-2"><img src={`${pathImage}/${item?.product?.photos[0]}`} className="w-12 h-12" alt="product" /></td>
                          <td className="p-2">{storeForItem}</td>
                          <td className="p-2">{item?.user?.fullName}</td>
                          <td className="p-2">{item?.product?.price}$</td>
                          <td className="p-2">{item?.quantity}</td>
                          <td className="p-2">{item?.quantity * item?.product?.price}$</td>
                          <td className="p-2">
                            <div className="flex items-center justify-center py-10">
                              {item?.status === "waitDelivery" && (
                                <span className="px-2 py-1 text-white bg-amber-900 font-semibold text-sm">Đợi giao hàng</span>
                              )}
                              {item?.status === "delivering" && (
                                <span className="px-2 py-1 text-white bg-yellow-400 font-semibold text-sm">Đang giao hàng</span>
                              )}
                              {item?.status === "successfull" && (
                                <span className="px-2 py-1 text-white bg-green-500 font-semibold text-sm">Giao hàng thành công</span>
                              )}
                              {item?.status === "waitPay" && (
                                <span className="px-2 py-1 text-white bg-pink-600 font-semibold text-sm">Chưa thanh toán</span>
                              )}
                              {item?.status === "cancelled" && (
                                <span className="px-2 py-1 text-white bg-red-600 font-semibold text-sm">Đơn hàng bị hủy</span>
                              )}
                            </div>
                          </td>
                          <td className="p-2 flex flex-col gap-2">
                            <Link to={`/order-view/${item?._id}`} className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 mr-2">
                              Xem chi tiết
                            </Link>
                            <Link to={`/order-edit/${item?._id}`} className="btn btn-info btn-sm p-1 mr-2">
                              Cập nhật
                            </Link>
                            <button className="bg-red-500 text-white p-1 rounded hover:bg-red-600">
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="11" className="text-center p-4">Không có đơn hàng phù hợp với tìm kiếm</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4 px-4 pb-10">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="bg-blue-500 text-white p-2 rounded cursor-pointer disabled:opacity-50"
              >
                Trang trước
              </button>
              <span>Page {page} of {totalPages}</span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="bg-blue-500 text-white p-2 rounded cursor-pointer disabled:opacity-50"
              >
                Trang tiếp
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderList;
