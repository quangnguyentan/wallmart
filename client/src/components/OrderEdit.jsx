import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiCreateProduct } from '@/services/productService';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { apiGetOrderByIdOrder, apiUpdateOrder } from '@/services/orderServer';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const list_status = [
  {
    id : 1,
    name : "Đợi giao hàng"
  },
  {
    id : 2,
    name : "Đang giao hàng"
  },
  {
    id : 3,
    name : "Giao hàng thành công"
  },
  {
    id : 4,
    name : "Đơn hàng bị hủy"
  },
]
function OrderEdit() {
  const [values, setValues] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [postMultipleFile, setPostMultipleFile] = useState([])
  const navigate = useNavigate();
  const [addNameColorField, setAddNameColorField] = useState([])
  const [addNameSizeField, setAddNameSizeField] = useState([])
  const [order, setOrder] = useState("")
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
  const updateOrder = async (data) => {
    try {
      const formData = new FormData();
    
      
      // formData.append("description", data?.description); 
      // formData.append("price", data?.price); 
      // formData.append("priceOld", data?.priceOld); 
      // formData.append("inventory", data?.inventory); 
      // formData.append("stockOff", Boolean(data?.stock)); 
      setLoading(true);
      const res = await apiUpdateOrder(id, {status : values ? values && values === "Đợi giao hàng" ? "waitDelivery"  : values === "Đang giao hàng"  ? "delivering"  : values === "Giao hàng thành công"  ?  "successfull" : "canceled" : order?.status }); 
      if(res) {
        setLoading(false);
        toast.success("Đăng kí thành công");
        navigate("/order-list")
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Đã xảy ra lỗi, vui lòng thử lại sau");
    }
  };
  const fetchGetOrder = async(id) => {
    const res = await apiGetOrderByIdOrder(id)
    console.log(res)
    setOrder(res)
  }
  useEffect(() => {
    setLoading(true)
    fetchGetOrder(id)
    setLoading(false)
  }, [id])
  


  
  return (
    <div className="w-full mx-auto py-10 flex flex-col gap-2 h-screen bg-gray-50">
      <form onSubmit={handleSubmit(updateOrder)}>
        <div className='flex items-center justify-center w-[40%] mx-auto'>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <div className="py-4">
                        <Autocomplete
                              disablePortal
                              options={list_status?.map((option) => option.name)}
                              // defaultValue={setValue("title", order && order?.status === "waitDelivery" ? "Đợi giao hàng" : order?.status === "delivering" ? "Đang giao hàng" : order?.status === "successfull" ? "Giao hàng thành công"  :  "Đơn hàng bị hủy")}
                            
                              className="w-full h-[40px] outline-none border-none"
                              value={order && order?.status === "waitDelivery" ? "Đợi giao hàng" : order?.status === "delivering" ? "Đang giao hàng" : order?.status === "successfull" ? "Giao hàng thành công"  : "Đơn hàng bị hủy"}
                             
                              onChange={(event, newValue) => {
                                setValues(newValue);
                              }}
                              renderInput={(params) => <TextField {...params} label="Trạng thái đơn hàng" />}
                          />
                         
            </div>
        </div>
        </div>
        <div className="px-8 w-[30%] mx-auto py-10">
          <button
            className="button w-full py-2 px-2 bg-red-500 rounded-full text-white text-xl max-sm:text-base max-sm:py-2"
            type="submit"
            disabled={isLoading} // Disable button khi đang tải
          >
            {isLoading ? "Đang tải..." : "Chỉnh sửa đơn hàng"}
          </button>
        </div>
      </form>
     
    </div>
  );
}

export default OrderEdit;
