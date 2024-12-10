import { apiUpdatedUser, apiUpdateWithDraw } from "@/services/userService";
import { getCurrent } from "@/stores/actions/userAction";
import { useMediaQuery } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import atm from "@/assets/atm.png"

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const UpdateBank = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
  const [value, setValue] = useState(0)
  const { register, handleSubmit, watch, getValues, onChange } =
    useForm({
      defaultValues: {
        nameOfUser: "",
        creditCartOfBank: "",
        nameOfBank: "",
      },
    });
  const params = useParams();
  const { currentData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, []);
  const updateUser = async (values) => {
    try {
        if(!values?.creditCartOfBank && !values?.nameOfUser && !values?.nameOfBank){
            toast.error("Bạn chưa điền đủ thông tin")
        }
      const data = await apiUpdatedUser(currentData?._id, {
        creditCartOfBank: values?.creditCartOfBank,
        nameOfUser: values?.nameOfUser,
        nameOfBank: values?.nameOfBank,
      });
      console.log(data);
      if (data.success) {
        toast.success(`Liên kết ngân hàng thành công `);
        // window.location.href = "/collections";
        navigate("/");
      }
    } catch (error) {
      console.log("[collections_POST]", error);
      // toast.error("Something went wrong! Please try again.");
    }
  };
  const fetchWithDraw = async() => {
    if(value <= 0) {
        toast.error("Vui lòng nhập số tiền")
    }
    const res = await apiUpdateWithDraw(currentData?._id, {
        draw : value
    })
    if(res?.success){
        toast.success(res?.message)
    }else{
        toast.error(res?.message)
    }
  }
  return (
    <>
      <div className="h-screen bg-gray-50">
        <div className="relative w-full mx-auto">
          <div className="sticky w-full top-0">
            <div className="w-full h-[50px] bg-profileColor">
              <ChevronLeft
                onClick={() => {
                  navigate(window.history.back());
                }}
                className="absolute top-2 z-30 left-4 text-black cursor-pointer"
                size={isMobile ? "20px" : "30px"}
              />
              <span className=" text-xl  text-black absolute top-2 left-[40%] max-sm:text-xs">
                Thông tin cá nhân
              </span>
            </div>
          </div>
          {currentData?.nameOfBank &&
          currentData.nameOfUser &&
          currentData?.creditCartOfBank ? <div className="flex flex-col gap-8 px-4 w-full h-screen ">
          <div className="flex flex-col gap-4 bg-white px-4 py-4 rounded-xl">
             <div className="flex justify-between items-center">
                <span>Loại rút tiền</span>
                <span>Rút tiền mặt</span>
             </div>
             <div className="flex flex-col">
                <span>Số tiền rút</span>
                <input type="number" step="any" value={`${value}`} onChange={(e) => setValue(e.target.value)} className="outline-none py-2 bg-gray-50" />
             </div>
             <div className="flex items-center justify-between ">
               <div className="flex flex-col gap-2">
               <div className="flex items-center gap-1">
                <span>Số tiền muốn rút:</span>
                <span>{value}</span>
                </div>
                <div className="flex items-center gap-1">
                <span>Số tiền của bạn:</span>
                <span>{currentData?.deposit?.toFixed(2)}</span>
                </div>
               </div>
                <span>Thiết lập rút tiền mặt</span>
             </div>
          </div>
          <div className="flex items-center gap-3 bg-white px-4 py-4 rounded-xl">
            <img src={atm} className="w-16 h-14" alt="atm" />
            <div className="flex flex-col gap-2">
               <span>Số tài khoản:{currentData?.creditCartOfBank}</span>
                <span>Họ và tên: {currentData?.nameOfBank}</span>
            </div>
          </div>
          <button className="w-full bg-red-500 py-4 rounded-full text-white hover:bg-red-600 shadow-sm" onClick={fetchWithDraw}>Rút tiền</button>

        </div> 
           : (
            <form onSubmit={handleSubmit(updateUser)}>
              <div className="flex flex-col gap-4">
                <div className="w-[90%] mx-auto h-[0.5px] bg-[#ebedf0]"></div>
                <div className="flex px-4 py-2 max-sm:text-xs">
                  <span>Vui lòng liên kết ngân hàng</span>
                </div>
                <div className="flex max-sm:items-center max-sm:justify-center items-center justify-between gap-8 px-4 py-2 max-sm:gap-5">
                  <span className="max-sm:text-xs">Chủ tài khoản</span>
                  <input
                    type="text"
                    className="outline-none max-sm:py-2 max-sm:px-6 max-sm:text-xs px-28 py-2  "
                    placeholder="Chủ tài khoản"
                    {...register("nameOfUser")}
                  />
                </div>
                <div className="flex max-sm:items-center max-sm:justify-center items-center justify-between gap-8 px-4 py-2 max-sm:gap-5">
                  <span className="max-sm:text-xs">Số tài khoản</span>
                  <input
                    type="number"
                    className="outline-none max-sm:py-2 max-sm:px-5 max-sm:text-xs px-28 py-2  "
                    placeholder="Số tài khoản"
                    {...register("creditCartOfBank")}
                  />
                </div>
                <div className="flex max-sm:items-center max-sm:justify-center items-center justify-between gap-8 px-4 py-2 max-sm:gap-5">
                  <span className="max-sm:text-xs">Tên ngân hàng</span>
                  <input
                    type="text"
                    className="outline-none max-sm:py-2 max-sm:px-6 max-sm:text-xs px-28 py-2  "
                    placeholder="Tên ngân hàng"
                    {...register("nameOfBank")}
                  />
                </div>
                <div className="flex max-sm:items-center max-sm:justify-center items-center justify-between gap-8 px-4 py-2 max-sm:gap-5">
                  <span className="text-red-500 font-semibold max-sm:text-xs">
                    Để đảm bảo an toàn cho tài khoản của bạn, vui lòng liên kết
                    họ tên thật của bạn và đặt mật khẩu rút. Nếu tên của bạn
                    không khớp với tên tài khoản, bạn sẽ không thể rút.
                  </span>
                </div>
                <div className="flex items-center max-sm:w-[80%] max-sm:mx-auto gap-8 px-4 py-2 bg-red-500 rounded-full hover:bg-red-600 max-sm:py-0 max-sm:text-xs">
                  <button
                    type="submit"
                    className="bg-profileColor w-full max-sm:h-8 max-sm:w-[80%] max-sm:mx-auto rounded-xl h-12 text-white"
                  >
                    Xác nhận
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateBank;