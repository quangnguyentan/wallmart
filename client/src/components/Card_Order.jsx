import product_test from "@/assets/product_test.jpg"
const Card_Order = () => {
  return (
    <div className="px-2 bg-white flex flex-col gap-2 py-2">
        <div className="flex items-center gap-2 text-balance font-medium text-gray-800 max-sm:text-xs">
            <span>Số thứ tự:</span>
            <span>D2024103018000856489848</span>
        </div>
        <h3 className="text-gray-600 text-lg max-sm:text-xs">Za Za Shop</h3>
        <div className="flex justify-between gap-3 max-sm:text-xs">
            <div className="flex  gap-2">
            <img className="w-32 h-32 max-sm:w-20 max-sm:h-20 mix-blend-darken border rounded-xl" src={product_test} alt="product_test" />
           <div className="flex flex-col gap-1">
           <span className="text-lg font-medium text-gray-800 max-sm:text-xs">Grocery & Gourmet  </span>
           <span className="text-gray-600 max-sm:text-xs">
                Color:wine;size:2XL
           </span>
            </div>
           </div>
           <div className="flex flex-col items-end">
           <span>48.67</span>
           <span className="text-gray-600 font-semibold">X1</span>
           </div>
        </div>
        <div className="flex justify-end gap-2 text-lg font-semibold max-sm:text-xs">
            <span>Số tiền thực: </span>
            <span className="text-red-500">$48.67</span>
        </div>
    </div>
  )
}

export default Card_Order