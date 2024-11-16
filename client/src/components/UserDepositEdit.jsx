import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiCreateProduct } from '@/services/productService';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { apiGetUserById, apiUpdatedDesposit } from '@/services/userService';
import { Textarea } from './ui/textarea';

function UserDepositEdit() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [addNameColorField, setAddNameColorField] = useState([])
  const [addNameSizeField, setAddNameSizeField] = useState([])
  const [reson, setReson] = useState(null)

  const { id} = useParams()
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const [productList, setproductList] = useState([])

    useEffect(() => {
        getUsers(id);
    }, []);
    console.log(id)

    let getUsers = async (id) => {
        try {
            const products = await apiGetUserById(id)
            setproductList(products?.user);
            setLoading(false);
        } catch (error) {
            console.log(error);
            // setLoading(false);
        }
    }
  const createProduct = async (data) => {
    try {
      
      setLoading(true);
      const res = await apiUpdatedDesposit(id, { deposit : data?.title, reason : reson}); 
      console.log(res)
      setLoading(false);
      if (res?.success) {
        toast.success("Nạp tiền thành công");
        navigate("/deposit-user-list")
       
      } else {
        toast.error(res.message || "Đã xảy ra lỗi");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Đã xảy ra lỗi, vui lòng thử lại sau");
    }
  };

  return (
    <div className="w-full mx-auto  flex flex-col gap-2 h-screen bg-gray-50">
    <form onSubmit={handleSubmit(createProduct)}>
      <div className='flex  justify-center items-center py-4 gap-4 text-red-500'>
        <span>Tên người dùng : {productList?.fullName}</span>
        <span>Số tiền còn lại: {productList?.deposit}</span>

      </div>
      <div className='flex flex-col items-center justify-center'>
      <div  className='flex flex-col gap-4 justify-between px-8 w-full'>
      <label htmlFor="photo " className='mx-auto text-xl font-semibold'>Nạp tiền</label>
      <input type="number" className='w-[50%] mx-auto py-2  px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập tên số tiền muốn nạp' {...register("title", {
                required: "Trường này là bắt buộc",
              })} />
     <div className='flex items-center justify-center'>
     {errors.title && (
            <p className="text-red-500 text-xs ">{errors.title.message}</p>
          )}
     </div>
      </div>
      <div className="flex gap-2 px-8 w-full">
                              
                              <Textarea
                                className="w-[50%] mx-auto shadow-md placeholder:text-base"
                                placeholder="Nhập nội dung nạp tiền"
                                onChange={(e) => setReson(e.target.value)}
                              />
        </div>
      </div>
      
      <div className="px-8 w-[30%] mx-auto py-10">
        <button
          className="button w-full py-2 px-2 bg-red-500 rounded-full text-white text-xl max-sm:text-base max-sm:py-2"
          type="submit"
          disabled={isLoading} // Disable button khi đang tải
        >
          {isLoading ? "Đang tải..." : "Nạp tiền"}
        </button>
      </div>
    </form>
   
  </div>
  );
}

export default UserDepositEdit;
