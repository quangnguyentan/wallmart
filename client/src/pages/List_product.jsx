import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useMediaQuery } from "@mui/material";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { useState, useEffect } from "react";
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import Card_Product from "@/components/Card_Product";
const List_product = () => {
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
        <div className="flex items-center relative w-[90%] px-2">
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
        </div>
        </div>
       <div className="w-full overflow-x-hidden border-none ">
    <Tabs defaultValue="all" className="w-full h-full ">
      <div className="w-full flex flex-col z-40 px-2 bg-white outline-none overflow-hidden ">
        <TabsList className="w-full flex justify-between px-8 overflow-x-scroll scrollbar-hide ">
        <TabsTrigger 
                 value="all" 
                 className={`max-sm:text-xs text-xl ${activeTab === 'all' ? `background-custom ` : 'text-gray-500'}`} 
                 onClick={() => setActiveTab("all")}
            >
               <div className="flex items-center justify-center gap-1">
                    <span className="font-bold ">Tổng hợp</span>
                    {/* <HomeIcon fontSize="small"/> */}
               </div>
            </TabsTrigger>
        <TabsTrigger 
                className={`max-sm:text-xs text-xl ${activeTab === 'sell' ? ` background-custom ` : 'text-gray-500'}`} 
                value="sell" 
                onClick={() => setActiveTab("sell")}
            >
                Bán hàng
            </TabsTrigger>
            <TabsTrigger 
                className={`max-sm:text-xs text-xl cursor-default ${activeTab === 'price' ? 'background-custom  ' : 'text-gray-500'}`} 
                value="price"
                onClick={() => setActiveTab("price")}
            >
               <div className="flex items-center justify-center gap-2">
                 <span className="cursor-pointer"> Giá cả</span>
               <SwapVertOutlinedIcon sx={{ fontSize : `${isMobile && "18px"}` }} className="cursor-pointer"/>
               </div>
            </TabsTrigger>
           
      
        </TabsList>
      </div>
      <div >
      <TabsContent value="all">
        <Card_Product hidden/>
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
      <TabsContent value="sell">
      <Card_Product hidden/>
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
      
      <TabsContent value="price"> 
      <Card_Product hidden/>
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

export default List_product