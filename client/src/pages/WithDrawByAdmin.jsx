
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import noCart from "@/assets/noCart.png";
  import { Check, X } from "lucide-react";
  import moment from "moment";
  import { apiGetAllWithDraw, apiUpdatedStatusWithDraw } from "@/services/userService";
  import { Textarea } from "@/components/ui/textarea";
  import {  faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  const WithDrawByAdmin = () => {
    const [withDraw, setWithDraw] = useState([]);
    const [reson, setReson] = useState(null);
    const navigate = useNavigate();
    const [value, setValue] = useState(null)
    const onChangeValue = (e) => {
      setValue(e.target.value)
  }
  
    const getWithDrawalHistory = async () => {
      const data = await apiGetAllWithDraw();
      console.log(data)
      if (data.success) setWithDraw(data?.withDraw);
    };
   
    const fetchgetWithDrawalHistory = async () => {
      const data = await apiGetAllWithDraw();
      console.log(data)
      if (data.success) setWithDraw(data?.withDraw);
    };
    useEffect(() => {
      if(value?.length > 0) {
        fetchgetWithDrawalHistory();
      }
      }, [value]);
  
    const handleCheck = async (id,  status) => {
      console.log(id, status)
      const data = await apiUpdatedStatusWithDraw(id, {
        status: status,
        reason: reson,
      });
    };
    useEffect(() => {
      getWithDrawalHistory();
    }, []);
    return (
      <div className="h-screen overflow-y-scroll ">
        <div className="relative w-full mx-auto">
        <form
                className="d-none w-[30%] d-sm-inline-block border form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search relative">
           
                <div className="input-group">
                    <input value={value} onChange={onChangeValue} type="text" className="form-control bg-light border-0 small" placeholder="Tìm kiếm tên người rút tiền" 
                        aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </form>
          {/* <div className="sticky w-full top-0 ">
            <div className="w-full h-[50px] bg-profileColor">
              <span className=" text-xl text-black absolute top-2 left-[40%]">
                Lịch sử giao dịch
              </span>
            </div>
          </div> */}




          <div>
            {withDraw?.length > 0 ? (
              <div className=" h-fit">
                <div className="w-full px-2 py-4 ">
                  {value?.length > 0 ? withDraw
                    ?.filter(
                      (fill) =>
                        fill?.status?.includes("Thành công") |
                        fill?.status?.includes("Không thành công")
                    )
                    ?.map((el) => {
                      if(typeof el?.user?.nameOfUser === "string" && typeof value === "string" && el?.user?.nameOfUser?.toUpperCase().includes(value.toUpperCase())) {
                        return(
                          <div
                            key={el?._id}
                            className="w-full h-fit border-b-2 bg-white flex justify-between gap-1 py-2 rounded-xl px-8"
                          >
                            <div>
                              <div className="flex flex-col gap-2">
                                <span className="text-lg font-semibold text-gray-500">
                                  Khoảng thời gian
                                </span>
                                <span className="text-lg font-bold">
                                  {moment(el?.createdAt).format(
                                    "DD-MM-YYYY HH:mm:ss"
                                  )}
                                </span>
                              </div>
                              <div className="flex flex-col gap-2">
                                <span className="text-lg font-semibold text-gray-500">
                                  Tên người muốn rút tiền
                                </span>
                                <span className="text-lg font-bold">
                                  {el?.user?.nameOfUser}
                                </span>
                              </div>
                              <div className="flex flex-col gap-2">
                                <span className="text-lg font-semibold text-gray-500">
                                  Số tiền hiện có
                                </span>
                                <span className="text-lg font-bold">
                                  {el?.user?.deposit?.toFixed(1)}
                                </span>
                              </div>
                              <div className="flex flex-col gap-2">
                                <span className="text-lg font-semibold text-gray-500">
                                  Số tiền muốn rút
                                </span>
                                <span className="text-lg font-bold">
                                  {Number(el?.money)?.toFixed(1)}
                                </span>
                              </div>
                              <div className="flex flex-col gap-2">
                                <span className="text-lg font-semibold text-gray-500">
                                  Trạng thái
                                </span>
                                <span className="text-lg font-bold">
                                  {el?.status}
                                </span>
                              </div>
                            </div>
                            {el?.status === "Thành công" ? (
                              ""
                            ) : el?.status === "Không thành công" ? (
                              ""
                            ) : (
                              <div className="flex flex-col gap-4 ">
                                <div className="flex items-center gap-4 ">
                                  <button>
                                    <Check
                                      onClick={() =>
                                        handleCheck(
                                          el?._id,
                                          el?.users?._id,
                                          "Thành công"
                                        )
                                      }
                                      className="text-green-500  cursor-pointer"
                                    />
                                  </button>
                                  <button>
                                    <X
                                      className="text-red-500 cursor-pointer"
                                      onClick={() =>
                                        handleCheck(
                                          el?._id,
                                          el?.user?._id,
                                          "Không thành công"
                                        )
                                      }
                                    />
                                  </button>
                                </div>
                                <div className="flex flex-col gap-2">
                                  <span className="text-lg font-semibold text-gray-500">
                                    Nội dung
                                  </span>
                                  <Textarea
                                    className="w-[300px]"
                                    placeholder="Nhập nội dung"
                                    onChange={(e) => setReson(e.target.value)}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        )
                       }
                      }) :  withDraw
                      ?.filter(
                        (fill) =>
                          fill?.status?.includes("Thành công") |
                          fill?.status?.includes("Không thành công")
                      )
                      ?.map((el) => {
                          return(
                            <div
                              key={el?._id}
                              className="w-full h-fit border-b-2 bg-white flex justify-between gap-1 py-2 rounded-xl px-8"
                            >
                              <div>
                                <div className="flex flex-col gap-2">
                                  <span className="text-lg font-semibold text-gray-500">
                                    Khoảng thời gian
                                  </span>
                                  <span className="text-lg font-bold">
                                    {moment(el?.createdAt).format(
                                      "DD-MM-YYYY HH:mm:ss"
                                    )}
                                  </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                  <span className="text-lg font-semibold text-gray-500">
                                    Tên người muốn rút tiền
                                  </span>
                                  <span className="text-lg font-bold">
                                    {el?.user?.nameOfUser}
                                  </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                  <span className="text-lg font-semibold text-gray-500">
                                    Số tiền hiện có
                                  </span>
                                  <span className="text-lg font-bold">
                                    {el?.user?.deposit?.toFixed(1)}
                                  </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                  <span className="text-lg font-semibold text-gray-500">
                                    Số tiền muốn rút
                                  </span>
                                  <span className="text-lg font-bold">
                                    {Number(el?.money)?.toFixed(1)}
                                  </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                  <span className="text-lg font-semibold text-gray-500">
                                    Trạng thái
                                  </span>
                                  <span className="text-lg font-bold">
                                    {el?.status}
                                  </span>
                                </div>
                              </div>
                              {el?.status === "Thành công" ? (
                                ""
                              ) : el?.status === "Không thành công" ? (
                                ""
                              ) : (
                                <div className="flex flex-col gap-4 ">
                                  <div className="flex items-center gap-4 ">
                                    <button>
                                      <Check
                                        onClick={() =>
                                          handleCheck(
                                            el?._id,
                                            el?.users?._id,
                                            "Thành công"
                                          )
                                        }
                                        className="text-green-500  cursor-pointer"
                                      />
                                    </button>
                                    <button>
                                      <X
                                        className="text-red-500 cursor-pointer"
                                        onClick={() =>
                                          handleCheck(
                                            el?._id,
                                            el?.user?._id,
                                            "Không thành công"
                                          )
                                        }
                                      />
                                    </button>
                                  </div>
                                  <div className="flex flex-col gap-2">
                                    <span className="text-lg font-semibold text-gray-500">
                                      Nội dung
                                    </span>
                                    <Textarea
                                      className="w-[300px]"
                                      placeholder="Nhập nội dung"
                                      onChange={(e) => setReson(e.target.value)}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                         }
                        )}
                </div>
              </div>
            ) : (
              <div className="w-full h-screen flex flex-col items-center justify-start">
                <img src={noCart} />
                <span className="text-xl font-semibold text-gray-500">
                  Chưa có giao dịch nào !
                </span>
              </div>
            )}
          </div>
          
        </div>
      </div>
    );
  };
  
  export default WithDrawByAdmin;