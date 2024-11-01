import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { useMediaQuery } from "@mui/material";
import Card from "./Card.responsive";
function useWindowHeight() {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize); // Thêm sự kiện resize
        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup
        };
    }, []);

    return height;
}
const ChatBox = ({phone}) => {
  const {  theme } = useTheme();
  const height = useWindowHeight();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
       {isMobile ?  theme === "light" ? <div style={{ height: `${height / 2 - 200}px` }} className={`${phone ?`flex flex-col gap-2  overflow-scroll scrollbar-hide w-full ` : "flex flex-col gap-2 h-[790px] overflow-scroll scrollbar-hide w-full"}`}>
        <div className="flex flex-col h-full mx-auto w-full border rounded-sm shadow-lg border-none ">
            <div className="bg-blue-500 text-white px-4 rounded-t-sm">
            </div>
            <div className="flex-1 px-4 overflow-y-auto">
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Quản trị viên Dimas:</span>
                <span className="ml-2 text-sm">Xin chào mọi người... chào mừng bạn đến với JALALIVE, phát trực tuyến miễn phí mà không phải trả tiền, chất lượng tốt nhất và không có quảng cáo!</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Dexx..R:</span>
                <span className="ml-2 text-sm">Năm tới, người ta nói rằng khuôn mặt của người dẫn chương trình sẽ xuất hiện, chị Mochi?</span>
                </div>
                <div className="mb-2 pb-24">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm">Chúng ta chọn màu gì đây anh bạn?</span>
                    
                </div>
               
                {/* Thêm nhiều tin nhắn ở đây */}
            </div>
            <div className="fixed bottom-0 w-full">
            <div className="flex p-4 bg-white rounded-b-sm relative ">
                <input
                type="text"
                className="flex-1 p-2 border border-gray-400 rounded-l-sm focus:outline-none text-black"
                />
                <div className="absolute left-6 top-7 flex items-center gap-1">
                <span className="text-blue-700 text-sm font-semibold">Đăng nhập</span>
                <span className="text-black text-sm"> để chat nhé~~</span>
                </div>
                <button className="bg-blue-500 text-white p-2 rounded-r-sm hover:bg-blue-600">
                    Gửi
                </button>
            </div>
            </div>
           
        </div>
     </div> : <div style={{ height: `${height / 2 - 200}px` }}  className={`${phone ? `flex flex-col gap-2 h-full  overflow-scroll scrollbar-hide w-full border-none` : "flex flex-col gap-2 h-[790px] overflow-scroll scrollbar-hide w-full"}`}>
        <div className="flex flex-col h-full mx-auto w-full rounded-sm shadow-lg">
            <div className="flex-1 px-4 overflow-y-auto bg-white">
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Quản trị viên Dimas:</span>
                <span className="ml-2 text-sm text-black">Xin chào mọi người... chào mừng bạn đến với JALALIVE, phát trực tuyến miễn phí mà không phải trả tiền, chất lượng tốt nhất và không có quảng cáo!</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Dexx..R:</span>
                <span className="ml-2 text-sm text-black">Năm tới, người ta nói rằng khuôn mặt của người dẫn chương trình sẽ xuất hiện, chị Mochi?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-black">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
              
               
                
               
                {/* Thêm nhiều tin nhắn ở đây */}
            </div>
            {/* <div className="flex p-4 bg-white rounded-b-sm relative">
                <input
                    type="text"
                    className="flex-1 p-2 border border-gray-400 rounded-l-sm focus:outline-none text-black"
                    placeholder="Đăng nhập để chat nhé~~"
                />
               
                <button className="bg-blue-500 text-white p-2 rounded-r-sm hover:bg-blue-600">
                    Gửi
                </button>
            </div> */}
            <div className="fixed bottom-0 w-full">
            <div className="flex p-4 bg-white rounded-b-sm relative ">
                <input
                disabled
                type="text"
                className="flex-1 p-2 border border-gray-400 rounded-l-sm focus:outline-none text-black"
                />
                <div className="absolute left-6 top-7 flex items-center gap-1">
                <span className="text-blue-700 text-sm font-semibold">Đăng nhập</span>
                <span className="text-black text-sm"> để chat nhé~~</span>
                </div>
                <button className="bg-blue-500 text-white p-2 rounded-r-sm hover:bg-blue-600">
                    Gửi
                </button>
            </div>
            </div>
        </div>
     </div> :  theme === "light" ? <div className={`${phone ?`flex flex-col gap-2  overflow-scroll scrollbar-hide w-full` : "flex flex-col gap-2 h-[790px] overflow-scroll scrollbar-hide w-full"}`}>
        <div className="flex flex-col h-full mx-auto w-full border rounded-sm shadow-lg">
            <div className="bg-[#ffc71c] text-white p-4 rounded-t-sm">
                <h2 className="text-lg font-semibold text-center">Trò chuyện</h2>
            </div>
            <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Quản trị viên Dimas:</span>
                <span className="ml-2 text-sm">Xin chào mọi người... chào mừng bạn đến với JALALIVE, phát trực tuyến miễn phí mà không phải trả tiền, chất lượng tốt nhất và không có quảng cáo!</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Dexx..R:</span>
                <span className="ml-2 text-sm">Năm tới, người ta nói rằng khuôn mặt của người dẫn chương trình sẽ xuất hiện, chị Mochi?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                {/* Thêm nhiều tin nhắn ở đây */}
            </div>
            <div className="flex p-4 bg-gray-100 rounded-b-sm">
                <input
                type="text"
                className="flex-1 p-2 border-2 border-gray-200 bg-gray-100  rounded-l-sm focus:outline-none text-black border-r-0"
                placeholder="Đăng nhập để chat"
                />
                <button className="bg-gray-100 border-2 border-gray-200 text-blue-500 p-2 border-l-0  rounded-r-sm  ">
                Gửi
                </button>
            </div>
        </div>
     </div> : <div className={`${phone ? `flex flex-col gap-2  overflow-scroll scrollbar-hide w-full` : "flex flex-col gap-2 h-[790px] overflow-scroll scrollbar-hide w-full"}`}>
        <div className="flex flex-col h-full mx-auto w-full border rounded-sm shadow-lg">
            <div className="bg-gray-800 text-white p-4 rounded-t-sm">
                <h2 className="text-lg font-semibold text-center">Trò chuyện</h2>
            </div>
            <div className="flex-1 p-4 overflow-y-auto bg-[#16181a] scrollbar-custom">
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Quản trị viên Dimas:</span>
                <span className="ml-2 text-sm text-white">Xin chào mọi người... chào mừng bạn đến với JALALIVE, phát trực tuyến miễn phí mà không phải trả tiền, chất lượng tốt nhất và không có quảng cáo!</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Dexx..R:</span>
                <span className="ml-2 text-sm text-white">Năm tới, người ta nói rằng khuôn mặt của người dẫn chương trình sẽ xuất hiện, chị Mochi?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>

                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>
                <div className="mb-2">
                <span className="font-semibold text-blue-400">Rully:</span>
                <span className="ml-2 text-sm text-white">Chúng ta chọn màu gì đây anh bạn?</span>
                </div>

                {/* Thêm nhiều tin nhắn ở đây */}
            </div>
            
            <div className="flex p-4 bg-[#16181a] rounded-b-sm">
                <input
                type="text"
                className="flex-1 p-2 border border-gray-400 rounded-l-sm focus:outline-none text-black"
                placeholder="Đăng nhập để chat nhé~~"
                />
                <button className="bg-blue-500 text-white p-2 rounded-r-sm hover:bg-blue-600">
                Gửi
                </button>
            </div>
            
        </div>
     </div>}
     {/* <Card phone/> */}
    </>
  );
};

export default ChatBox;