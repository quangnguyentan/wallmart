import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiCreateProduct } from '@/services/productService';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { apiGetUserById, apiUpdatedUser } from '@/services/userService';
import { Autocomplete, TextField } from '@mui/material';
import { pathImage } from '@/lib/helper';
const list_role = [
  {
    id : 1,
    name : "admin"
  },
  {
    id : 2,
    name : "user"
  },
  {
    id : 3,
    name : "agent"
  },
  {
    id : 4,
    name : "bot"
  },
  {
    id : 4,
    name : "botAgent"
  },
]
function UserEdit() {
  const [values, setValues] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [postMultipleFile, setPostMultipleFile] = useState([])
  const [productList, setproductList] = useState(null)
  const navigate = useNavigate();

  const { id } = useParams()
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
    setValue,
  } = useForm();
  const createProduct = async (data) => {
    console.log(data?.password && data?.password)
    try {
      const formData = new FormData(); 
      formData.append("fullName", data?.title); 
      formData.append("images", postMultipleFile?.length > 0  ? postMultipleFile : productList?.avatar); 
      formData.append("role", values ? values : productList?.role); 
      formData.append("deposit", data?.price); 
      formData.append("creditCartOfBank", data?.creditCartOfBank); 
      formData.append("nameOfBank", data?.nameOfBank); 
      formData.append("nameOfUser", data?.nameOfUser); 
      formData.append("password", data?.password && data?.password); 
      formData.append("bonusPoints", data?.bonusPoints); 

      
      setLoading(true);
      const res = await apiUpdatedUser(id, formData); 
      console.log(res)
      setLoading(false);
      if (res?.success) {
        toast.success("Chỉnh sửa người dùng thành công");
        navigate("/user-list")
      } else {
        toast.error(res.message || "Đã xảy ra lỗi");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Đã xảy ra lỗi, vui lòng thử lại sau");
    }
  };
  useEffect(() => {
    if (productList) {
      setValue("title", productList.fullName);
      setValue("description", productList?.role);
      setValue("price", productList.deposit);
      setValue("creditCartOfBank", productList?.creditCartOfBank);
      setValue("nameOfBank", productList?.nameOfBank);
      setValue("nameOfUser", productList?.nameOfUser);
      setValue("bonusPoints", productList?.bonusPoints);
    }
  }, [productList, setValue]);
  useEffect(() => {
      getUsers(id);
  }, [id]);

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
  return (
    <div className="w-full mx-auto py-10 flex flex-col gap-2 h-screen bg-gray-50">
      <form onSubmit={handleSubmit(createProduct)}>
        <div className='grid grid-cols-2 gap-4'>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Tên người dùng</label>
        <input type="text" className='w-full py-2 placeholder:px-2 px-2 rounded-lg shadow-sm bg-white outline-none'   placeholder='Nhập tên người dùng' {...register("title", {
                  required: "Tên người dùng là bắt buộc",
                 
                })} />
        {errors.title && (
              <p className="text-red-500 text-xs px-2">{errors.title.message}</p>
            )}
        </div>
        {/* <div  className='flex gap-4 items-center  px-8 w-full'>
        <label htmlFor="photo">Ảnh người dùng:       </label>
        <input type="file" title='Chọn ảnh' className=' cursor-pointer' id='photo'  onChange={(e) => setPostMultipleFile(e.target.files[0])} placeholder='Chọn ảnh' accept='image/*' />
        {postMultipleFile.length === 0 &&  <img src={`${pathImage}/${productList?.avatar}`} className='w-8 h-8' alt="" />  }
        </div> */}
       <div className='px-8 py-4'>
       <Autocomplete
            disablePortal
                              options={list_role?.map((option) => option.name)}
                              // defaultValue={setValue("title", order && order?.status === "waitDelivery" ? "Đợi giao hàng" : order?.status === "delivering" ? "Đang giao hàng" : order?.status === "successfull" ? "Giao hàng thành công"  :  "Đơn hàng bị hủy")}
                            
                              className="w-full h-[40px] outline-none border-none"
                              value={values && productList && productList?.role === "admin" ? "admin" : productList?.role === "user" ? "user" : productList?.role === "agent" ? "agent"  : productList?.role === "bot" ? "bot" : "botAgent"}
                             
                              onChange={(event, newValue) => {
                                setValues(newValue);
                              }}
            renderInput={(params) => <TextField {...params} label="Vai trò" />}
        />
       </div>
        {/* <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Vai trò</label>
        <input type="text" className='w-full py-2 placeholder:px-2 px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập vai trò' {...register("description", {
                  required: "Vai trò là bắt buộc",
                 
                })} />
        {errors.description && (
              <p className="text-red-500 text-xs px-2">{errors.description.message}</p>
            )}
        </div> */}
        {/* <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Nạp tiền</label>
        <input type="number" className='w-full py-2 placeholder:px-2 px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='(vd : 30000$)' {...register("price", {
                  required: "Giá tiền sau khi giảm giá là bắt buộc",
                  validate: (value) => {
                    if (value < 0 ) {
                      return "Vui lòng nhập số tiền lớn hơn hoặc bằng 0";
                    }
                  },
                })} />
        {errors.price && (
              <p className="text-red-500 text-xs px-2">{errors.price.message}</p>
            )}
        </div> */}
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Số tài khoản</label>
        <input type="number" className='w-full py-2 placeholder:px-2 px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Số tài khoản' {...register("creditCartOfBank", {
                  required: "Số tài khoản là bắt buộc",
                  validate: (value) => {
                    if (value < 0 ) {
                      return "Vui lòng nhập số tài khoản";
                    }
                  },
                })} />
        {errors.creditCartOfBank && (
              <p className="text-red-500 text-xs px-2">{errors.creditCartOfBank.message}</p>
            )}
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Tên ngân hàng</label>
        <input type="text" className='w-full py-2 placeholder:px-2 px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Tên ngân hàng' {...register("nameOfBank", {
                  required: "Số tài khoản là bắt buộc",
                  validate: (value) => {
                    if (value < 0 ) {
                      return "Vui lòng nhập số tài khoản";
                    }
                  },
                })} />
        {errors.nameOfBank && (
              <p className="text-red-500 text-xs px-2">{errors.nameOfBank.message}</p>
            )}
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Tên người thụ hưởng</label>
        <input type="text" className='w-full py-2 placeholder:px-2 px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Tên người thụ hưởng' {...register("nameOfUser", {
                  required: "Tên người thụ hưởng là bắt buộc",
                  validate: (value) => {
                    if (value < 0 ) {
                      return "Vui lòng nhập tên người thụ hưởng";
                    }
                  },
                })} />
        {errors.nameOfUser && (
              <p className="text-red-500 text-xs px-2">{errors.nameOfUser.message}</p>
            )}
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Mật khẩu</label>
        <input type="password"  className='w-full py-2 placeholder:px-2 px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Mật khẩu' {...register("password")} />
       
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="bonusPoints">Điểm thưởng</label>
        <input type="bonusPoints"  className='w-full py-2 placeholder:px-2 px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Điểm thưởng' {...register("bonusPoints")} />
       
        </div>
       
        </div>
        
        <div className="px-8 w-[30%] mx-auto py-10">
          <button
            className="button w-full py-2 px-2 bg-red-500 rounded-full text-white text-xl max-sm:text-base max-sm:py-2"
            type="submit"
            disabled={isLoading} // Disable button khi đang tải
          >
            {isLoading ? "Đang tải..." : "Chỉnh sửa người dùng"}
          </button>
        </div>
      </form>
     
    </div>
  );
}

export default UserEdit;
