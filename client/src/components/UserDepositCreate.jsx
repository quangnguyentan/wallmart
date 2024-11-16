import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiCreateProduct } from '@/services/productService';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Textarea } from './ui/textarea';

function UserDepositCreate() {
  const [isLoading, setLoading] = useState(false);
  const [postMultipleFile, setPostMultipleFile] = useState([])
  const navigate = useNavigate();
  const [addNameColorField, setAddNameColorField] = useState([])
  const [addNameSizeField, setAddNameSizeField] = useState([])
  const [addImageNameField, setAddImageNameField] = useState([])
  const [addImageSizeField, setAddImageSizeField] = useState([])
  const { userId } = useParams()
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
      formData.append("userId", userId); 
      formData.append("sold", data?.sold); 

      setLoading(true);
      const res = await apiCreateProduct(formData); 
      setLoading(false);
      console.log(res)
      if (res?.success) {
        toast.success("Tạo sản phẩm thành công");
        navigate("/product-list")
       
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
        <div className='flex items-center justify-center'>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo " className='mx-auto'>Nạp tiền</label>
        <input type="number" className='w-[50%] mx-auto py-2  px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập tên số tiền muốn nạp' {...register("title", {
                  required: "Trường này là bắt buộc",
                })} />
        {errors.title && (
              <p className="text-red-500 text-xs px-2">{errors.title.message}</p>
            )}
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

export default UserDepositCreate;
