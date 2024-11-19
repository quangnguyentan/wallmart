import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiCreateProduct } from '@/services/productService';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { apiGetMyStore } from '@/services/storeService';
import { listLeftCategories } from '@/lib/helper';
import { Autocomplete, TextField, useMediaQuery } from '@mui/material';

function ProductCreate() {
  const [isLoading, setLoading] = useState(false);
  const [postMultipleFile, setPostMultipleFile] = useState([])
  const navigate = useNavigate();
  const [addNameColorField, setAddNameColorField] = useState([])
  const [addNameSizeField, setAddNameSizeField] = useState([])
  const [addImageNameField, setAddImageNameField] = useState([])
  const [addImageSizeField, setAddImageSizeField] = useState([])
  const [store, setStore] = useState("")
  const [value, setValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const { userId } = useParams()
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const fetchGetMyStore = async() => {
    const res = await apiGetMyStore()
    setStore(res[0])
  }
  useEffect(() => {
    fetchGetMyStore()
  },[])


  const getCategoriesForSelectedName = (selectedName) => {
    
    const selectedCategoryData = listLeftCategories.find(item => item.name === selectedName);
    return selectedCategoryData ? selectedCategoryData.category : [];
  };

  const handleCategoryChange = (event, newValue) => {
    if (value.length < 1) {
      toast.error("Vui lòng chọn ngành kinh doanh");
    } else {
      setSelectedCategory(newValue);
    }
  };
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
      formData.append("industry", value)
      formData.append("category", selectedCategory)
      formData.append("price", data?.price); 
      formData.append("priceOld", data?.priceOld); 
      formData.append("inventory", data?.inventory); 
      formData.append("stockOff", Boolean(data?.stock)); 
      formData.append("userId", userId); 
      formData.append("sold", data?.sold);
      setLoading(true);
      const res = await apiCreateProduct(formData); 
      setLoading(false);
      if (res?.success) {
        toast.success("Tạo sản phẩm thành công");
        // navigate("/product-list")
       
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
        <input type="text" className='w-full py-2  px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập tên sản phẩm' {...register("title", {
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
        <div className="px-8">
      <Autocomplete
            disablePortal
            options={listLeftCategories.map((option) => option.name)}
            className="w-full h-[40px] outline-none"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Ngành kinh doanh" />}
        />
        </div>
    
        <div  onClick={() => {
                if(value.length < 1) {
                  toast.error("Vui lòng chọn ngành kinh doanh")
                }
        }} className="w-full cursor-pointer px-8">
            <Autocomplete
              disablePortal
              options={value ? getCategoriesForSelectedName(value)?.map((category) => category?.name) : []}
              sx={{ fontSize : `${isMobile ? "10px" : "16px"}`, ":placeholder-shown" : {
                fontSize : `${isMobile ? "10px" : "20px"}`
              }, }}
              onChange={handleCategoryChange}
              renderInput={(params) => <TextField {...params} label="Mục kinh doanh" />}
              disabled={!value}
            
          />
        </div>
        
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Mô tả sản phẩm</label>
        <input type="text" className='w-full py-2  px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập mô tả sản phẩm' {...register("description", {
                  required: "Mô tả sản phẩm là bắt buộc",
                 
                })} />
        {errors.description && (
              <p className="text-red-500 text-xs px-2">{errors.description.message}</p>
            )}
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Giá tiền sau khi giảm giá</label>
        <input type="number" className='w-full py-2  px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập giá tiền sau khi giảm giá (vd : 30000$)' {...register("price", {
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
        <input type="number" className='w-full py-2  px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập giá tiền mặc định (vd:50000$)' {...register("priceOld", {
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
        <input type="number" className='w-full py-2  px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập hàng tồn kho' {...register("inventory", {
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
        <input type="text" className='w-full py-2  px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập màu sắc' {...register("color")} onKeyDown={handleKeyDownColor}/>
       
        </div>

        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <div className='flex items-center gap-2'>
        <div >Kích thước sản phẩm</div>
        <div className='flex items-center gap-2'>{addNameSizeField?.map((el) => (
          <span key={el} className='text-red-500'>[{el}]</span>
        ))}</div>
        </div>
        <input type="text" className='w-full py-2  px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập kích thước' {...register("size")} onKeyDown={handleKeyDownSize}  />
      
        </div>
       
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Còn sản phẩm không?</label>
        <select  className='outline-none py-2  px-2' {...register("stock")}>
        <option value={false}>Còn hàng</option>
        <option value={true}>Hết hàng</option>
      </select>
        
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Sản phẩm đã bán</label>
        <input type="number" className='w-full py-2  px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập số sản phẩm đã bán' {...register("sold", {
                  required: "Sản phẩm đã bán là bắt buộc",
                  validate: (value) => {
                    if (value < 0 ) {
                      return "Vui lòng nhập sản phẩm đã bán lớn hơn hoặc bằng 0";
                    }
                  },
                })} />
        {errors.sold && (
              <p className="text-red-500 text-xs px-2">{errors.sold.message}</p>
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

export default ProductCreate;
