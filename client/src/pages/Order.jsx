import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useMediaQuery } from "@mui/material";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { useState, useEffect } from "react";
import Card_Order from "@/components/Card_Order";
import EmptyOrder from "@/components/EmptyOrder";
const Order = () => {
    const [activeTab, setActiveTab] = useState('all');

    const isMobile = useMediaQuery("(max-width:600px)");
    const [visible, setVisible] = useState(false);
    console.log(window.pageYOffset);
    const toggleVisibility = () => {
      if (window.pageYOffset >= 120) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);
  return (
    <div className="bg-[#f5f5f5] h-screen overflow-x-scroll scrollbar-hide">
        <div className="w-full flex items-center bg-white py-2">
      <div className="w-[10%]">
      <KeyboardArrowLeftIcon
             sx={{ fontSize  : `${isMobile ? "35px" : "50px"}`}}
            className="text-gray-400 cursor-pointer"
            onClick={() => window.history.back()}
          />       
      </div>
      <h3 className="text-gray-600 font-semibold text-center w-full max-sm:text-sm">Đặt hàng</h3>
        {/* <div className="flex items-center relative w-[90%] px-2">
            <SearchOutlinedIcon
                  className="absolute"
                  sx={{
                    fontSize: `${isMobile ? "18px" : "30px"}`,
                    color: "gray",
                    marginLeft: "7px",
                    cursor: "pointer",
                  }}
            />
            <input
                  type="text"
                  className="w-full h-11 max-sm:h-8 max-sm:pl-7 rounded-full bg-gray-100  pl-11 text-lg outline-none placeholder:text-orange-600 placeholder:font-medium max-sm:text-xs"
                  placeholder="Tìm kiếm sản phẩm"
            />
        </div> */}
        </div>
       <div className="w-full overflow-x-hidden border-none ">
    <Tabs defaultValue="all" className="w-full h-full ">
      <div className="w-full flex flex-col z-40 px-2 bg-white outline-none overflow-hidden whitespace-nowrap ">
        <TabsList className="w-full flex justify-between px-4  overflow-x-scroll scrollbar-hide ">
        <TabsTrigger 
                 value="all" 
                 className={`max-sm:text-xs h-16 w-[15%] line-clamp-1 text-ellipsis overflow-hidden whitespace-nowrap break-words px-2  ${activeTab === 'all' ? `background-custom ` : 'text-gray-500'}`} 
                 onClick={() => setActiveTab("all")}
            >
               <div className="flex items-center gap-1">
                    <span className="font-bold ">Tất cả</span>
               </div>
            </TabsTrigger>
        <TabsTrigger 
                className={`max-sm:text-xs  h-16 w-[15%] line-clamp-1 text-ellipsis overflow-hidden whitespace-nowrap break-words px-2 ${activeTab === 'waitPayment' ? ` background-custom ` : 'text-gray-500'}`} 
                value="waitPayment" 
                onClick={() => setActiveTab("waitPayment")}
            >
                Đang chờ thanh toán
            </TabsTrigger>
            <TabsTrigger 
                className={`max-sm:text-xs h-16 w-[15%] line-clamp-1 text-ellipsis overflow-hidden whitespace-nowrap break-words px-2 cursor-default ${activeTab === 'waitDelivery' ? 'background-custom  ' : 'text-gray-500'}`} 
                value="waitDelivery"
                onClick={() => setActiveTab("waitDelivery")}
            >
               <div className="flex items-center gap-2">
                 <span className="cursor-pointer">Vận chuyển</span>
               </div>
            </TabsTrigger>
            <TabsTrigger 
                className={`max-sm:text-xs h-16 w-[15%] line-clamp-1 text-ellipsis overflow-hidden whitespace-nowrap break-words px-2 cursor-default ${activeTab === 'Delivering' ? 'background-custom  ' : 'text-gray-500'}`} 
                value="Delivering"
                onClick={() => setActiveTab("Delivering")}
            >
               <div className="flex items-center  gap-2">
                 <span className="cursor-pointer">Đang vận chuyển</span>
               </div>
            </TabsTrigger>
            <TabsTrigger 
                className={`max-sm:text-xs h-16 w-[15%] line-clamp-1 text-ellipsis overflow-hidden whitespace-nowrap break-words px-2 cursor-default ${activeTab === 'Successful' ? 'background-custom  ' : 'text-gray-500'}`} 
                value="Successful"
                onClick={() => setActiveTab("Successful")}
            >
               <div className="flex items-center  gap-2">
                 <span className="cursor-pointer">Đơn hoàn thành</span>
               </div>
            </TabsTrigger>
            <TabsTrigger 
                className={`max-sm:text-xs h-16 w-[15%] line-clamp-1 text-ellipsis overflow-hidden whitespace-nowrap break-words px-2 cursor-default ${activeTab === 'Cancel' ? 'background-custom  ' : 'text-gray-500'}`} 
                value="Cancel"
                onClick={() => setActiveTab("Cancel")}
            >
               <div className="flex items-center  gap-2">
                 <span className="cursor-pointer">Đã hủy</span>
               </div>
            </TabsTrigger>
        </TabsList>
      </div>
      <div >
      <TabsContent value="all">
        <Card_Order hidden/>
        <div className="fixed z-50 bottom-[20%] transform  md:left-[60%] max-sm:right-5">
        {visible && (
          <ArrowUpwardOutlinedIcon
            fontSize="large"
            onClick={scrollToTop}
            className="responsive-icon"
            style={{
              width: "60px",
              height: "60px",
              background: "lightgray",
              border: "none",
              borderRadius: "100%",
              padding: "10px",
              cursor: "pointer",
            }}
          />
        )}
      </div>
      </TabsContent>
      </div>
      <TabsContent value="waitPayment">
      <EmptyOrder hidden/>
      <div className="fixed z-50 bottom-[20%] transform  md:left-[60%] max-sm:right-5">
        {visible && (
          <ArrowUpwardOutlinedIcon
            fontSize="large"
            onClick={scrollToTop}
            className="responsive-icon"
            style={{
              width: "60px",
              height: "60px",
              background: "lightgray",
              border: "none",
              borderRadius: "100%",
              padding: "10px",
              cursor: "pointer",
            }}
          />
        )}
      </div>
      </TabsContent>
      
      <TabsContent value="waitDelivery"> 
      <EmptyOrder hidden/>

      <div className="fixed z-50 bottom-[20%] transform  md:left-[60%] max-sm:right-5">
        {visible && (
          <ArrowUpwardOutlinedIcon
            fontSize="large"
            onClick={scrollToTop}
            className="responsive-icon"
            style={{
              width: "60px",
              height: "60px",
              background: "lightgray",
              border: "none",
              borderRadius: "100%",
              padding: "10px",
              cursor: "pointer",
            }}
          />
        )}
      </div>
      </TabsContent>
      <TabsContent value="Delivering"> 
      <EmptyOrder hidden/>

      <div className="fixed z-50 bottom-[20%] transform  md:left-[60%] max-sm:right-5">
        {visible && (
          <ArrowUpwardOutlinedIcon
            fontSize="large"
            onClick={scrollToTop}
            className="responsive-icon"
            style={{
              width: "60px",
              height: "60px",
              background: "lightgray",
              border: "none",
              borderRadius: "100%",
              padding: "10px",
              cursor: "pointer",
            }}
          />
        )}
      </div>
      </TabsContent>
      <TabsContent value="Successful"> 
      <EmptyOrder hidden/>

      <div className="fixed z-50 bottom-[20%] transform  md:left-[60%] max-sm:right-5">
        {visible && (
          <ArrowUpwardOutlinedIcon
            fontSize="large"
            onClick={scrollToTop}
            className="responsive-icon"
            style={{
              width: "60px",
              height: "60px",
              background: "lightgray",
              border: "none",
              borderRadius: "100%",
              padding: "10px",
              cursor: "pointer",
            }}
          />
        )}
      </div>
      </TabsContent>
      <TabsContent value="Cancel"> 
      <EmptyOrder hidden/>

      <div className="fixed z-50 bottom-[20%] transform  md:left-[60%] max-sm:right-5">
        {visible && (
          <ArrowUpwardOutlinedIcon
            fontSize="large"
            onClick={scrollToTop}
            className="responsive-icon"
            style={{
              width: "60px",
              height: "60px",
              background: "lightgray",
              border: "none",
              borderRadius: "100%",
              padding: "10px",
              cursor: "pointer",
            }}
          />
        )}
      </div>
      </TabsContent>
    </Tabs>
  </div></div>
  
  )
}

export default Order