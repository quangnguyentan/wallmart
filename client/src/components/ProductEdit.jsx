import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiCreateProduct, apiGetProductByShop, apiUpdateProduct } from '@/services/productService';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function ProductEdit() {
  const [isLoading, setLoading] = useState(false);
  const [postMultipleFile, setPostMultipleFile] = useState([])
  const navigate = useNavigate();
  const [addNameColorField, setAddNameColorField] = useState([])
  const [addNameSizeField, setAddNameSizeField] = useState([])
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
    getValues,
    setValue
  } = useForm();
 

  const updateProduct = async (data) => {
    try {
      const formData = new FormData();
      for(let index = 0; index < postMultipleFile.length; index++) {
        const file = postMultipleFile[index]
        formData.append("photos", file); 
      }
      if(addNameColorField.length > 0 || addNameSizeField.length > 0) {
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
      }else{
        formData.append("color", data.color.split(",").map((c) => c.trim()));
        formData.append("size", data.size.split(",").map((s) => s.trim()));
      }
      formData.append("title", data?.title); 
      formData.append("sold", data?.sold);
      formData.append("price", data?.price); 
      formData.append("priceOld", data?.priceOld); 
      formData.append("inventory", data?.inventory); 
      formData.append("stockOff", Boolean(data?.stock)); 
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
      setValue("sold", product.sold);
      setValue("stock", product.stockOff);
      setValue("color", product.color?.join(", "));
      setValue("size", product.size?.join(", "));
      setValue("photo", product.photos[0]);
    }
  }, [product, setValue]);
  useEffect(() => {
    fetchGetProduct(id)
  }, [id])
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
      <form onSubmit={handleSubmit(updateProduct)}>
        <div className='grid grid-cols-2 gap-4'>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Tên sản phẩm</label>
        <input type="text" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập tên sản phẩm' {...register("title")} />
      
        </div>
        <div  className='flex gap-4 items-center  px-8 w-full'>
         <label htmlFor="photo" {...register("photo")} className=''>Ảnh sản phẩm: <span className='text-lg px-4 bg-white shadow-sm py-4'>Chọn ảnh</span></label>
        <input type="file" title='Chọn ảnh' id='photo' className=' cursor-pointer' multiple onChange={(e) => setPostMultipleFile(e.target.files)} style={{ visibility : "hidden" }} placeholder='Chọn ảnh' accept='image/*' />
        </div>
        
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Giá tiền sau khi giảm giá</label>
        <input type="number" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập giá tiền sau khi giảm giá (vd : 30000$)' {...register("price", )} />
        
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Giá tiền mặc định</label>
        <input type="number" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập giá tiền mặc định (vd:50000$)' {...register("priceOld", {
                  validate: (value) => {
                    if (value < 0 ) {
                      return "Vui lòng nhập số tiền lớn hơn hoặc bằng 0";
                    }
                  },
                })} />
       
        </div>

        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Hàng tồn kho</label>
        <input type="number" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập hàng tồn kho' {...register("inventory",)} />
       
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
        <label >Còn sản phẩm không?</label>
        <select  className='outline-none py-2 placeholder:px-2' {...register("stock")}>
        <option value={true}>Còn hàng</option>
        <option value={false}>Hết hàng</option>
      </select>
        
        </div>
        <div  className='flex flex-col gap-2 justify-between px-8 w-full'>
        <label htmlFor="photo">Sản phẩm đã bán</label>
        <input type="number" className='w-full py-2 placeholder:px-2 rounded-lg shadow-sm bg-white outline-none' placeholder='Nhập số sản phẩm đã bán'  {...register("sold", )} />
        
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
