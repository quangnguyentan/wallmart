import noCart from "@/assets/noCart.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const EmptyOrder = () => {
    const [activeSwitchText, setActiveSwitchText] = useState(false)
    const navigate = useNavigate()
  return (
    <div className='py-2 flex flex-col gap-4 bg-gray-50 h-screen w-full'>
        {/* <div className='flex items-center justify-between px-2'>
            <span className="text-xl max-sm:text-sm">Tổng cộng 0</span>
            <span className="text-xl cursor-pointer max-sm:text-sm" onClick={() => setActiveSwitchText(!activeSwitchText)}>{activeSwitchText ? "Hoàn thành" : "Bỏ sản phẩm"}</span>
        </div> */}
       <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center gap-4">
                <img src={noCart} alt="noCart" className="w-[220px] h-[134px]" />
                <span className="text-lg text-gray-400 font-medium max-sm:text-sm">Không có đơn hàng</span>
            </div>
            <div className="flex items-center justify-center" >
                <button className="w-[167px] bg-[#fa3f3f] text-white text-sm px-2 py-4 rounded-full max-sm:text-xs max-sm:py-3">Bắt đầu mua sắm</button>
            </div>
       </div>
    </div>
  )
}

export default EmptyOrder