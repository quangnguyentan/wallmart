import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useMediaQuery } from "@mui/material";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { useState, useEffect } from "react";
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import Card_Product from "@/components/Card_Product";
import GridViewIcon from '@mui/icons-material/GridView';
import logo_brand from "@/assets/logo_brand.jpg"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { apiGetProductByStoreId } from "@/services/productService";
import { apiGetstoreById } from "@/services/storeService";
import { pathImage } from "@/lib/helper";
const Store_detail = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [products, setProducts] = useState([])
    const [store, setStore] = useState("")
    const isMobile = useMediaQuery("(max-width:600px)");
    const [visible, setVisible] = useState(false);
    const {id } = useParams()
    console.log(id)
    const navigate = useNavigate()
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
  const fetchProduct = async(id) => {
    const res = await apiGetProductByStoreId(id)
    if(res?.success ) {
      setProducts(res?.products)
    }
  }
  const fetchStore = async(id) => {
    const res = await apiGetstoreById(id)
    setStore(res)
  }
  useEffect(() => {
    fetchProduct(id) && fetchStore(id)
  }, [id])
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);
  return (
    <div className="bg-[#f5f5f5] h-screen overflow-x-scroll scrollbar-hide">
        <div className="w-full flex items-center bg-white py-2 justify-between px-2">
      <div className="">
      <KeyboardArrowLeftIcon
             sx={{ fontSize  : `${isMobile ? "35px" : "50px"}`}}
            className="text-gray-400 cursor-pointer"
            onClick={() => window.history.back()}
          />   
      </div>
      <h3 className="text-gray-500 font-semibold text-xl max-sm:text-base">{store?.inforByStore?.nameStore}</h3>    
      <GridViewIcon sx={{ fontSize : `${isMobile ? "20px" : "30px"}`, color : "gray" }}/>
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
        <div className="px-2 py-2">
          <div className="py-8 bg-white px-2 rounded-xl flex items-center justify-between">
          <img src={`${pathImage}/${store?.logoStore}`} className="w-[73px] h-[73px] max-sm:w-14 max-sm:h-14 mix-blend-darken " alt="logo_brand" />
            <div className="flex flex-col gap-2 ">
            <span className="text-gray-500 text-xl font-semibold max-sm:text-xs">{store?.inforByStore?.nameStore}</span>
            <div className="w-48 max-sm:h-9 max-sm:w-32 h-18 flex justify-center items-center rounded-full bg-[#fdf6ec] border-[#fcbd71] border cursor-pointer" onClick={() => navigate("/detail-store")}>
                <span className="text-[#f90] max-sm:text-xs max-sm:text-center" >Thương hiệu Trực Doanh</span>
            </div>
            </div>
            <div className="flex flex-col items-center text-gray-500 max-sm:text-xs">
              <span>Người theo dõi:</span>
              <span>{store?.follow ?store?.follow : "1" }</span>
            </div>
            <div className="flex flex-col items-center text-gray-500 max-sm:text-xs">
              <FavoriteBorderIcon sx={{ color : "orange" }}/>
              <span>Theo dõi</span>
            </div>
          </div>
          
        </div>
       <div className="w-full overflow-x-hidden border-none ">
    <Tabs defaultValue="all" className="w-full h-full ">
      <div className="w-full flex flex-col z-40 px-2 bg-white outline-none overflow-hidden ">
        <TabsList className="w-full flex justify-between px-8 overflow-x-scroll scrollbar-hide ">
        <TabsTrigger 
                 value="all" 
                 className={`max-sm:text-xs text-lg ${activeTab === 'all' ? `background-custom ` : 'text-gray-500'}`} 
                 onClick={() => setActiveTab("all")}
            >
               <div className="flex items-center justify-center gap-1">
                    <span className="font-bold ">Sắp xếp</span>
                    {/* <HomeIcon fontSize="small"/> */}
               </div>
            </TabsTrigger>
        <TabsTrigger 
                className={`max-sm:text-xs text-lg ${activeTab === 'sell' ? ` background-custom ` : 'text-gray-500'}`} 
                value="sell" 
                onClick={() => setActiveTab("sell")}
            >
                Ưu tiên
            </TabsTrigger>
        
            <TabsTrigger 
                className={`max-sm:text-xs text-lg cursor-default ${activeTab === 'price' ? 'background-custom  ' : 'text-gray-500'}`} 
                value="price"
                onClick={() => setActiveTab("price")}
            >
               <div className="flex items-center justify-center gap-2">
                 <span className="cursor-pointer">Giá cả</span>
               <SwapVertOutlinedIcon sx={{ fontSize : `${isMobile && "18px"}` }} className="cursor-pointer"/>
               </div>
            </TabsTrigger>
            <TabsTrigger 
                className={`max-sm:text-xs text-lg ${activeTab === 'product' ? ` background-custom ` : 'text-gray-500'}`} 
                value="product" 
                onClick={() => setActiveTab("product")}
            >
                Sản phẩm
        </TabsTrigger>
      
        </TabsList>
      </div>
      <div >
      <TabsContent value="all">
        <Card_Product stores={store} products={products} hidden/>
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
      <Card_Product stores={store} products={products} hidden/>
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
      <Card_Product stores={store} products={products} hidden/>
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
      <TabsContent value="product"> 
      <Card_Product stores={store} products={products} hidden/>
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

export default Store_detail