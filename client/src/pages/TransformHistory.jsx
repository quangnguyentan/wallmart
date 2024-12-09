
  import { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import noCart from "@/assets/noCart.png";
  import { Check, ChevronLeft, X } from "lucide-react";
  import moment from "moment";
  import { apiGetAllWithDraw, apiUpdatedStatusWithDraw,  } from "@/services/userService";
  import { Textarea } from "@/components/ui/textarea";
  import toast from "react-hot-toast";
  import {  faSearch } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  const TransformHistory = () => {
    const [withDraw, setWithDraw] = useState([]);
    const [reson, setReson] = useState(null);
    const navigate = useNavigate();
    const [value, setValue] = useState(null)
    const getWithDrawalHistory = async () => {
      const data = await apiGetAllWithDraw();
      if (data.success) setWithDraw(data?.withDraw);
    };
    const fetchgetWithDrawalHistory = async () => {
      const data = await apiGetAllWithDraw();
      if (data.success) setWithDraw(data?.withDraw);
    };
    const onChangeValue = (e) => {
      setValue(e.target.value)
    }
  
    const handleCheck = async (id, status) => {
      console.log(status)
      const data = await apiUpdatedStatusWithDraw(id,  {
        status: status,
        reson: reson,
      });
      console.log(data)
      if (status === "Thành công") {
        getWithDrawalHistory();
        toast.success("Đã chấp nhận rút tiền thành công");
      } else {
        getWithDrawalHistory();
        toast.error("Không chấp nhận rút tiền");
      }
     
    };
    useEffect(() => {
      getWithDrawalHistory();
    }, []);
    useEffect(() => {
      if(value?.length > 0) {
        fetchgetWithDrawalHistory();
      }
      }, [value]);
    return (
      <div className="h-screen overflow-y-scroll">
        <div className="relative w-full mx-auto">
          <div className="sticky w-full top-0 ">
            <div className="w-full h-[50px] bg-profileColor">
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
            </div>
          </div>
          <div>
            {withDraw && withDraw?.length > 0 ? (
              <div className=" h-fit">
                <div className="w-full px-2 py-4 ">
                  {value?.length > 0 ? withDraw
                    ?.filter(
                      (fill) =>
                        fill?.status?.includes("Đợi duyệt")
                    )
                    ?.map((el) => {
                      if(typeof el?.user?.nameOfUser === "string" && typeof value === "string" && el?.user?.nameOfUser?.toUpperCase().includes(value.toUpperCase())) {
                        return(
                          <div
                          key={el?._id}
                          className="w-full h-fit border-b-2 bg-white flex justify-between gap-1  py-2 rounded-xl px-8"
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
                                {el?.user?.nameOfBank}
                              </span>
                            </div>
                            <div className="flex flex-col gap-2">
                              <span className="text-lg font-semibold text-gray-500">
                                Tên tài khoản
                              </span>
                              <span className="text-lg font-bold">
                                {el?.user?.nameOfUser}
                              </span>
                            </div>
                            <div className="flex flex-col gap-2">
                              <span className="text-lg font-semibold text-gray-500">
                                Số tài khoản
                              </span>
                              <span className="text-lg font-bold">
                                {el?.user?.creditCartOfBank}
                              </span>
                            </div>
                            <div className="flex flex-col gap-2">
                              <span className="text-lg font-semibold text-gray-500">
                                Số tiền hiện có
                              </span>
                              <span className="text-lg font-bold">
                                {el?.user?.deposit} VNĐ
                              </span>
                            </div>
                            <div className="flex flex-col gap-2">
                              <span className="text-lg font-semibold text-gray-500">
                                Số tiền muốn rút
                              </span>
                              <span className="text-lg font-bold">
                                {el?.money}
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
                                <div
                                  className="px-4 py-2  cursor-pointer rounded-full bg-green-100 flex items-center justify-center gap-1"
                                  onClick={() =>
                                    handleCheck(
                                      el?._id,
                                      "Thành công"
                                    )
                                  }
                                >
                                  <span>Đồng ý</span>
                                  <button>
                                    <Check className="text-green-500  " />
                                  </button>
                                </div>
                                <div
                                  className="px-4 py-2  cursor-pointer rounded-full bg-red-100 flex items-center justify-center gap-1"
                                  onClick={() =>
                                    handleCheck(
                                      el?._id,
                                      "Không thành công"
                                    )
                                  }
                                >
                                  <span>Từ chối</span>
                                  <button>
                                    <X className="text-red-500" />
                                  </button>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <span className="text-lg font-semibold text-gray-500">
                                  Nội dung phản hồi
                                </span>
                                <Textarea
                                  className="w-[300px]"
                                  placeholder="Nhập nội dung ở đây"
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
                          fill?.status?.includes("Đợi duyệt")
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
                                    {el?.user?.deposit}
                                  </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                  <span className="text-lg font-semibold text-gray-500">
                                    Số tiền muốn rút
                                  </span>
                                  <span className="text-lg font-bold">
                                    {el?.money}
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
            {/* {withDraw && withDraw?.length > 0 ? (
              <div className="h-fit">
                <div className="w-full px-2 py-4 ">
                  {withDraw
                    ?.filter((fill) => fill?.status?.includes("Đợi duyệt"))
                    ?.map((el) => (
                      <div
                        key={el?._id}
                        className="w-full h-fit border-b-2 bg-white flex justify-between gap-1  py-2 rounded-xl px-8"
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
                              {el?.user?.nameOfBank}
                            </span>
                          </div>
                          <div className="flex flex-col gap-2">
                            <span className="text-lg font-semibold text-gray-500">
                              Tên tài khoản
                            </span>
                            <span className="text-lg font-bold">
                              {el?.user?.nameOfUser}
                            </span>
                          </div>
                          <div className="flex flex-col gap-2">
                            <span className="text-lg font-semibold text-gray-500">
                              Số tài khoản
                            </span>
                            <span className="text-lg font-bold">
                              {el?.user?.creditCartOfBank}
                            </span>
                          </div>
                          <div className="flex flex-col gap-2">
                            <span className="text-lg font-semibold text-gray-500">
                              Số tiền hiện có
                            </span>
                            <span className="text-lg font-bold">
                              {el?.user?.deposit} VNĐ
                            </span>
                          </div>
                          <div className="flex flex-col gap-2">
                            <span className="text-lg font-semibold text-gray-500">
                              Số tiền muốn rút
                            </span>
                            <span className="text-lg font-bold">
                              {el?.money}
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
                              <div
                                className="px-4 py-2  cursor-pointer rounded-full bg-green-100 flex items-center justify-center gap-1"
                                onClick={() =>
                                  handleCheck(
                                    el?._id,
                                    "Thành công"
                                  )
                                }
                              >
                                <span>Đồng ý</span>
                                <button>
                                  <Check className="text-green-500  " />
                                </button>
                              </div>
                              <div
                                className="px-4 py-2  cursor-pointer rounded-full bg-red-100 flex items-center justify-center gap-1"
                                onClick={() =>
                                  handleCheck(
                                    el?._id,
                                    "Không thành công"
                                  )
                                }
                              >
                                <span>Từ chối</span>
                                <button>
                                  <X className="text-red-500" />
                                </button>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <span className="text-lg font-semibold text-gray-500">
                                Nội dung phản hồi
                              </span>
                              <Textarea
                                className="w-[300px]"
                                placeholder="Nhập nội dung ở đây"
                                onChange={(e) => setReson(e.target.value)}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div className="w-full h-screen flex flex-col items-center justify-start">
                <img src={noCart} />
                <span className="text-xl font-semibold text-gray-500">
                  Không có yêu cầu nào !
                </span>
              </div>
            )} */}
          </div>
        </div>
      </div>
    );
  };
  
  export default TransformHistory;