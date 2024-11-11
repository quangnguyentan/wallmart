import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiCreateProduct } from '@/services/productService';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function OrderCreate() {
  const [isLoading, setLoading] = useState(false);
  const [postMultipleFile, setPostMultipleFile] = useState([])
  const navigate = useNavigate();
  const [addNameColorField, setAddNameColorField] = useState([])
  const [addNameSizeField, setAddNameSizeField] = useState([])
  const [addImageNameField, setAddImageNameField] = useState([])
  const [addImageSizeField, setAddImageSizeField] = useState([])

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const createProduct = async (data) => {
    try {
      const formData = new FormData();
      for(let index = 0; index < postMultipleFile.length; index++) {
        const file = postMultipleFile[index]
        formData.append("photos", file); 
      }
      for(let index = 0; index < addNameColorField.length; index++) {
        const file = addNameColorField[index]
       
        formData.append("color", [
         file
        ]); 
      }
      for(let index = 0; index < addNameSizeField.length; index++) {
        const file = addNameSizeField[index]
        formData.append("size", [
         file
        ]); 
      }
      formData.append("title", data?.title); 
      formData.append("description", data?.description); 
      formData.append("price", data?.price); 
      formData.append("priceOld", data?.priceOld); 
      formData.append("inventory", data?.inventory); 
      formData.append("stockOff", Boolean(data?.stock)); 
      setLoading(true);
      const res = await apiCreateProduct(formData); 
      setLoading(false);
      console.log(res)
      if (res?.success) {
        toast.success("Đăng kí thành công");
       
      } else {
        toast.error(res.message || "Đã xảy ra lỗi");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Đã xảy ra lỗi, vui lòng thử lại sau");
    }
  };
  const handleKeyDownSize = (e) => {
    if(e.key === "Enter") {
      e.preventDefault()

     if(addNameSizeField.includes(e.target.value) ){
      setAddNameSizeField(addNameSizeField.filter(item => item !== e.target.value));

      resetField("size")
     }else{
      setAddNameSizeField([...addNameSizeField, e.target.value])
      resetField("size")
     }
    }

  }
  const handleKeyDownColor = (e) => {
    if(e.key === "Enter") {
      e.preventDefault()

     if(addNameColorField.includes(e.target.value)){
      setAddNameColorField(addNameColorField.filter(item => item !== e.target.value));
      resetField("color")
     }else{
      setAddNameColorField([...addNameColorField, e.target.value])
      resetField("color")
     }
    }

  }
  return (
    <div className="w-full mx-auto py-10 flex flex-col gap-2 h-screen bg-gray-50">
      <form onSubmit={handleSubmit(createProduct)}>
        <div className='grid grid-cols-2 gap-4'>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Tên sản phẩm</label>
        <input type="text" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập tên sản phẩm' {...register("title", {
                  required: "Tên sản phẩm là bắt buộc",
                 
                })} />
        {errors.title && (
              <p className="text-red-500 text-xs px-2">{errors.title.message}</p>
            )}
        </div>
        <div  className='flex gap-4 items-center  px-8 w-full'>
        <label htmlFor="photo">Ảnh sản phẩm:</label>
        <input type="file" title='Chọn ảnh' className=' cursor-pointer' multiple onChange={(e) => setPostMultipleFile(e.target.files)} placeholder='Chọn ảnh' accept='image/*' required />
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Mô tả</label>
        <input type="text" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập Mô tả' {...register("description", {
                  required: "Mô tả là bắt buộc",
                 
                })} />
        {errors.description && (
              <p className="text-red-500 text-xs px-2">{errors.description.message}</p>
            )}
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Giá tiền sau khi giảm giá</label>
        <input type="number" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập giá tiền sau khi giảm giá (vd : 30000$)' {...register("price", {
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
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Giá tiền mặc định</label>
        <input type="number" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập giá tiền mặc định (vd:50000$)' {...register("priceOld", {
                  required: "Giá tiền mặc định là bắt buộc",
                  validate: (value) => {
                    if (value < 0 ) {
                      return "Vui lòng nhập số tiền lớn hơn hoặc bằng 0";
                    }
                  },
                })} />
        {errors.priceOld && (
              <p className="text-red-500 text-xs px-2">{errors.priceOld.message}</p>
            )}
        </div>

        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Hàng tồn kho</label>
        <input type="number" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập hàng tồn kho' {...register("inventory", {
                  required: "Hàng tồn kho là bắt buộc",
                  validate: (value) => {
                    if (value < 0 ) {
                      return "Vui lòng nhập hàng tồn kho lớn hơn hoặc bằng 0";
                    }
                  },
                 
                })} />
        {errors.inventory && (
              <p className="text-red-500 text-xs px-2">{errors.inventory.message}</p>
            )}
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <div className='flex items-center gap-2'>
        <div >Màu sắc sản phẩm</div>
        <div className='flex items-center gap-2'>{addNameColorField?.map((el) => (
          <span key={el} className='text-red-500'>[{el}]</span>
        ))}</div>
        </div>
        <input type="text" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập màu sắc' {...register("color")} onKeyDown={handleKeyDownColor}/>
       
        </div>

        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <div className='flex items-center gap-2'>
        <div >Kích thước sản phẩm</div>
        <div className='flex items-center gap-2'>{addNameSizeField?.map((el) => (
          <span key={el} className='text-red-500'>[{el}]</span>
        ))}</div>
        </div>
        <input type="text" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập kích thước' {...register("size")} onKeyDown={handleKeyDownSize}  />
      
        </div>
       
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Còn sản phẩm không?</label>
        <select  className='outline-none py-2 placeholder:px-2' {...register("stock")}>
        <option value={true}>Còn hàng</option>
        <option value={false}>Hết hàng</option>
      </select>
        
        </div>
       
        </div>
        
        <div className="px-8 w-[30%] mx-auto py-10">
          <button
            className="button w-full py-2 px-2 bg-red-500 rounded-full text-white text-xl max-sm:text-base max-sm:py-2"
            type="submit"
            disabled={isLoading} // Disable button khi đang tải
          >
            {isLoading ? "Đang tải..." : "Tạo sản phẩm"}
          </button>
        </div>
      </form>
     
    </div>
  );
}

export default OrderCreate;
