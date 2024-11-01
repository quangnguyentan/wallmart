import product_test from "@/assets/product_test.jpg"
import product_test1 from "@/assets/product_test1.jpg"
import loading from "@/assets/loading.gif"

const Card_Product = () => {
  return (
    <div className='flex flex-col gap-2 bg-[#f5f5f5]'>
        <div className='flex items-center gap-2 px-6 py-2'>
            <h3 className='text-2xl font-semibold'>Đoán là anh thích</h3>
            <div className='w-20 h-6 rounded-bl-lg rounded-tr-lg bg-red-500'>
                <span className='text-[11px] px-1 text-white'>Chọn hàng tốt</span>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-2 px-4 '>
            <div className='w-full h-full bg-white'>
                <img src={product_test} alt="product_test" className="h-[256px] w-full object-cover" />
                <div className="flex flex-col gap-2 px-2">
                    <span className="line-clamp-2 break-all text-ellipsis font-medium text-[18px]">Grocery & Gourmet Food</span>
                    <span className="text-[#ed5435] font-semibold text-2xl">$41.89</span>
                </div>
            </div>
            <div className='w-full h-full bg-white'>
            <img src={product_test1} alt="product_test1" className="h-[256px] w-full object-cover" />
           
                <div className="flex flex-col gap-2 px-2">
                    <span className="line-clamp-2 break-all text-ellipsis font-medium text-[18px]"> COMFIER Shiatsu Neck Back Massager with Heat, 2D ro 3D Kneading Massage Chair Pad, Adjustable Compression Seat Massager for Full Body Relaxation, Gifts for Women Men,Dark Gray</span>
                    <span className="text-[#ed5435] font-semibold text-2xl">$190.32</span>
                </div>
            </div>
            <div className='w-full h-full bg-white'>
                <img src={product_test} alt="product_test" className="h-[256px] w-full object-cover" />
                <div className="flex flex-col gap-2 px-2">
                    <span className="line-clamp-2 break-all text-ellipsis font-medium text-[18px]">Grocery & Gourmet Food</span>
                    <span className="text-[#ed5435] font-semibold text-2xl">$41.89</span>
                </div>
            </div>
            <div className='w-full h-full bg-white'>
            <img src={product_test1} alt="product_test1" className="h-[256px] w-full object-cover" />
           
                <div className="flex flex-col gap-2 px-2">
                    <span className="line-clamp-2 break-all text-ellipsis font-medium text-[18px]"> COMFIER Shiatsu Neck Back Massager with Heat, 2D ro 3D Kneading Massage Chair Pad, Adjustable Compression Seat Massager for Full Body Relaxation, Gifts for Women Men,Dark Gray</span>
                    <span className="text-[#ed5435] font-semibold text-2xl">$190.32</span>
                </div>
            </div>
            <div className='w-full h-full bg-white'>
                <img src={product_test} alt="product_test" className="h-[256px] w-full object-cover" />
                <div className="flex flex-col gap-2 px-2">
                    <span className="line-clamp-2 break-all text-ellipsis font-medium text-[18px]">Grocery & Gourmet Food</span>
                    <span className="text-[#ed5435] font-semibold text-2xl">$41.89</span>
                </div>
            </div>
            <div className='w-full h-full bg-white'>
            <img src={product_test1} alt="product_test1" className="h-[256px] w-full object-cover" />
           
                <div className="flex flex-col gap-2 px-2">
                    <span className="line-clamp-2 break-all text-ellipsis font-medium text-[18px]"> COMFIER Shiatsu Neck Back Massager with Heat, 2D ro 3D Kneading Massage Chair Pad, Adjustable Compression Seat Massager for Full Body Relaxation, Gifts for Women Men,Dark Gray</span>
                    <span className="text-[#ed5435] font-semibold text-2xl">$190.32</span>
                </div>
            </div>
        </div>
        <div className="pt-10 flex items-center justify-center bg-transparent">
            <img src={loading} className="w-8 h-8 object-contain mix-blend-darken" alt="loading" />
            <span className="text-xl text-gray-500 font-semibold">Tải thêm</span>
        </div>
    </div>
  )
}

export default Card_Product