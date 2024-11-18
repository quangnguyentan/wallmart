import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiCreateProduct } from '@/services/productService';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { apiCreateUser, apiGetUserById, apiUpdatedUser } from '@/services/userService';
import { Autocomplete, TextField } from '@mui/material';
import { pathImage } from '@/lib/helper';
const list_role = [
  {
    id : 1,
    name : "bot"
  },
  {
    id : 2,
    name : "botAgent"
  },
]
function BotCreate() {
  const [values, setValues] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [postMultipleFile, setPostMultipleFile] = useState([])
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
    try {
  

      setLoading(true);
      const res = await apiCreateUser({
        "fullName":  data?.title,
        "images" : postMultipleFile.length > 0 && postMultipleFile,
        "role": values,
        "deposit": data?.price,
        "creditCartOfBank" : data?.creditCartOfBank,
        "nameOfBank" : data?.nameOfBank,
        "nameOfUser" : data?.nameOfUser,
          "password" : data?.password,
          "phone" : data?.phone


      }); 
      
      setLoading(false);
      if (res?.success) {
        toast.success("Thêm người dùng thành công");
        navigate("/user-list")
      } else {
        toast.error(res.msg );
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Đã xảy ra lỗi, vui lòng thử lại sau");
    }
  };
 
 



  return (
    <div className="w-full mx-auto py-10 flex flex-col gap-2 h-screen bg-gray-50">
      <form onSubmit={handleSubmit(createProduct)}>
        <div className='grid grid-cols-2 gap-4'>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Tên bot</label>
        <input type="text" className='w-full py-2 placeholder:px-2 px-2 rounded-lg shadow-sm bg-white outline-none'   placeholder='Nhập tên bot' {...register("title", {
                  required: "Tên bot là bắt buộc",
                 
                })} />
        {errors.title && (
              <p className="text-red-500 text-xs px-2">{errors.title.message}</p>
            )}
        </div>
        <div  className='flex gap-4 items-center  px-8 w-full'>
        <label htmlFor="photo">Ảnh bot:       </label>
        <input type="file" title='Chọn ảnh' className=' cursor-pointer' id='photo'  onChange={(e) => setPostMultipleFile(e.target.files[0])} placeholder='Chọn ảnh' accept='image/*' />
        </div>
       <div className='px-8 py-4'>
       <Autocomplete
            disablePortal
                              options={list_role?.map((option) => option.name)}
                              // defaultValue={setValue("title", order && order?.status === "waitDelivery" ? "Đợi giao hàng" : order?.status === "delivering" ? "Đang giao hàng" : order?.status === "successfull" ? "Giao hàng thành công"  :  "Đơn hàng bị hủy")}
                            
                              className="w-full h-[40px] outline-none border-none"
                             
                             
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
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Nạp tiền</label>
        <input type="number" className='w-full py-2 placeholder:px-2 px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='(vd : 30000$)' {...register("price", {
                  required: "Tiền nạp là bắt buộc",
                  validate: (value) => {
                    if (value < 0 ) {
                      return "Vui lòng nhập số tiền lớn hơn hoặc bằng 0";
                    }
                  },
                })} />
        {errors.price && (
              <p className="text-red-500 text-xs px-2">{errors.price.message}</p>
            )}
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Số điện thoại đăng nhập</label>
        <input type="tel" className='w-full py-2 placeholder:px-2 px-2 rounded-lg shadow-sm bg-white outline-none'  {...register("phone", {
                  required: "Số điện thoại đăng nhập là bắt buộc",
                  validate: (value) => {
                    if (value < 10 && value > 12 ) {
                      return "Vui lòng nhập đúng số điện thoại";
                    }
                  },
                })} />
        {errors.phone && (
              <p className="text-red-500 text-xs px-2">{errors.phone.message}</p>
            )}
        </div>
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
        <input type="password" className='w-full py-2 placeholder:px-2 px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Mật khẩu' {...register("password", {
                  required: "Mật khẩu là bắt buộc",
                  validate: (value) => {
                    if (value < 0 ) {
                      return "Vui lòng nhập mật khẩu";
                    }
                  },
                })} />
        {errors.password && (
              <p className="text-red-500 text-xs px-2">{errors.password.message}</p>
            )}
        </div>
       
        </div>
        
        <div className="px-8 w-[30%] mx-auto py-10">
          <button
            className="button w-full py-2 px-2 bg-red-500 rounded-full text-white text-xl max-sm:text-base max-sm:py-2"
            type="submit"
            disabled={isLoading} // Disable button khi đang tải
          >
            {isLoading ? "Đang tải..." : "Thêm bot"}
          </button>
        </div>
      </form>
     
    </div>
  );
}

export default BotCreate;
