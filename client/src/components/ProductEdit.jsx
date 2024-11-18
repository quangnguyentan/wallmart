import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiCreateProduct, apiGetProductByShop, apiUpdateProduct } from '@/services/productService';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Autocomplete, TextField, useMediaQuery } from '@mui/material';
import { listLeftCategories, pathImage } from '@/lib/helper';

function ProductEdit() {
  const [isLoading, setLoading] = useState(false);
  const [postMultipleFile, setPostMultipleFile] = useState([])
  const navigate = useNavigate();
  const [addNameColorField, setAddNameColorField] = useState([])
  const [addNameSizeField, setAddNameSizeField] = useState([])
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const [selectedCategory, setSelectedCategory] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [values, setValues] = useState("");

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
    setValue
  } = useForm();
 
  const getCategoriesForSelectedName = (selectedName) => {
    
    const selectedCategoryData = listLeftCategories.find(item => item.name === selectedName);
    return selectedCategoryData ? selectedCategoryData.category : [];
  };

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };
  const updateProduct = async (data) => {
    try {
      const formData = new FormData();
      for(let index = 0; index < postMultipleFile.length; index++) {
        const file = postMultipleFile[index]
        formData.append("photos", file); 
      }
      // if(addNameColorField.length > 0 || addNameSizeField.length > 0) {
      //   for(let index = 0; index < addNameColorField.length; index++) {
      //     const file = addNameColorField[index]
         
      //     formData.append("color", [
      //      file
      //     ]); 
      //   }
      //   for(let index = 0; index < addNameSizeField.length; index++) {
      //     const file = addNameSizeField[index]
      //     formData.append("size", [
      //      file
      //     ]); 
      //   }
      // }else{
      //   formData.append("color", data.color.split(",").map((c) => c.trim()));
      //   formData.append("size", data.size.split(",").map((s) => s.trim()));
      // }
      formData.append("title", data?.title); 
      formData.append("description", data?.description); 

      formData.append("sold", data?.sold);
      formData.append("price", data?.price); 
      formData.append("priceOld", data?.priceOld); 
      formData.append("inventory", data?.inventory); 
      formData.append("stockOff", Boolean(data?.stock)); 
      formData.append("industry", values ? values : product?.industry)
      formData.append("category", selectedCategory ? selectedCategory : product?.category)
      // formData.append("industry", values)
      // formData.append("category", selectedCategory)
      setLoading(true);
      const res = await apiUpdateProduct(id, formData); 
      setLoading(false);
      console.log(res)
      if (res?.success) {
        toast.success("Chỉnh sửa sản phẩm thành công");
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
  const fetchGetProduct = async(id) => {
    const res = await apiGetProductByShop(id)
    if(res?.success) {
      setProduct(res?.products)
    }
  }
  useEffect(() => {
    if (product) {
      setValue("title", product.title);
      setValue("price", product.price);
      setValue("priceOld", product.priceOld);
      setValue("inventory", product.inventory);
      setValue("priceOld", product.priceOld);
      setValue("inventory", product.inventory);
      setValue("sold", product.sold);
      setValue("stock", product.stockOff);
    
      // setValue("color", product.color?.join(", "));
      // setValue("size", product.size?.join(", "));
      setValue("photo", product.photos[0]);
      setValue("description", product.description);
      
    }
  }, [product, setValue]);
  useEffect(() => {
    fetchGetProduct(id)
  }, [id])
  console.log(product)
 console.log(postMultipleFile)
  return (
    <div className="w-full mx-auto py-10 flex flex-col gap-2 h-screen bg-gray-50">
      <form onSubmit={handleSubmit(updateProduct)}>
        <div className='grid grid-cols-2 gap-4'>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Tên sản phẩm</label>
        <input type="text" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none px-2' placeholder='Nhập tên sản phẩm' {...register("title")} />
        </div>
        <div  className='flex gap-4 items-center  px-8 w-full'>
         <label htmlFor="photo" {...register("photo")} className=''>Ảnh sản phẩm: {postMultipleFile[0]?.name ? postMultipleFile[0]?.name : <span className='text-lg px-4 bg-white shadow-sm py-4'>Chọn ảnh</span>} </label>
        <input type="file" title='Chọn ảnh' id='photo' className=' cursor-pointer' multiple  onChange={(e) => setPostMultipleFile(e.target.files)} style={{ visibility : "hidden" }} placeholder='Chọn ảnh' accept='image/*' />
        {!postMultipleFile[0]?.name && product?.photos?.map((pt, index) => (
          <div key={index} className='flex '>
             <img src={`${pathImage}/${pt}`} className='w-12 h-12' alt="photo" />
          </div>
        ))}
        </div>
        <div className="px-8">
      <Autocomplete
            disablePortal
            options={listLeftCategories.map((option) => option.name)}
            className="w-full h-[40px] outline-none"
            value={product?.industry ? product?.industry : values}
            onChange={(event, newValue) => {
              setValues(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Ngành kinh doanh" />}
        />
        </div>
    
        <div  onClick={() => {
                if(values.length < 1) {
                  toast.error("Vui lòng chọn ngành kinh doanh")
                }
        }} className="w-full cursor-pointer px-8">
            <Autocomplete
              disablePortal
              options={values ? getCategoriesForSelectedName(values)?.map((category) => category?.name) : []}
              sx={{ fontSize : `${isMobile ? "10px" : "16px"}`, ":placeholder-shown" : {
                fontSize : `${isMobile ? "10px" : "20px"}`
              }, }}
              onChange={handleCategoryChange}
              renderInput={(params) => <TextField {...params} label="Mục kinh doanh" />}
              // disabled={!values}
              value={product?.category ? product?.category : values}
            
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
        <input type="number" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none px-2' placeholder='Nhập giá tiền sau khi giảm giá (vd : 30000$)' {...register("price", )} />
        
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Giá tiền mặc định</label>
        <input type="number" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none px-2' placeholder='Nhập giá tiền mặc định (vd:50000$)' {...register("priceOld", {
                  validate: (value) => {
                    if (value < 0 ) {
                      return "Vui lòng nhập số tiền lớn hơn hoặc bằng 0";
                    }
                  },
                })} />
       
        </div>

        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Hàng tồn kho</label>
        <input type="number" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none px-2' placeholder='Nhập hàng tồn kho' {...register("inventory",)} />
       
        </div>
        {/* <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <div className='flex items-center gap-2'>
        <div >Màu sắc sản phẩm</div>
        <div className='flex items-center gap-2'>{addNameColorField?.map((el) => (
          <span key={el} className='text-red-500'>[{el}]</span>
        ))}</div>
        </div>
        <input type="text" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none px-2' placeholder='Nhập màu sắc' {...register("color")} onKeyDown={handleKeyDownColor}/>
       
        </div>

        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <div className='flex items-center gap-2'>
        <div >Kích thước sản phẩm</div>
        <div className='flex items-center gap-2'>{addNameSizeField?.map((el) => (
          <span key={el} className='text-red-500'>[{el}]</span>
        ))}</div>
        </div>
        <input type="text" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none px-2' placeholder='Nhập kích thước' {...register("size")} onKeyDown={handleKeyDownSize}  />
      
        </div> */}
       
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label >Còn sản phẩm không?</label>
        <select  className='outline-none py-2 placeholder:px-2' {...register("stock")}>
        <option value={true}>Còn hàng</option>
        <option value={false}>Hết hàng</option>
      </select>
        
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Sản phẩm đã bán</label>
        <input type="number" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none px-2' placeholder='Nhập số sản phẩm đã bán'  {...register("sold", )} />
        
        </div>
        </div>
        
        <div className="px-8 w-[30%] mx-auto py-10">
          <button
            className="button w-full py-2 px-2 bg-red-500 rounded-full text-white text-xl max-sm:text-base max-sm:py-2"
            type="submit"
            disabled={isLoading} // Disable button khi đang tải
          >
            {isLoading ? "Đang tải..." : "Chỉnh sửa sản phẩm"}
          </button>
        </div>
      </form>
     
    </div>
  );
}

export default ProductEdit;
