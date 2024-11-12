import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo_brand from "@/assets/logo_brand.jpg"
import iphone from "@/assets/iphone.jpg"
import cloth from "@/assets/cloth.jpg"

import { useMediaQuery } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { apiGetStore, apiGetstoreFromShop } from "@/services/storeService";
import { pathImage } from "@/lib/helper";
import { apiGetProduct } from "@/services/productService";
const Store = () => {
    const [dropDown, setDropDown] = useState(false);
    const [store, setStore] = useState([])
    const [products, setProducts] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const isMobile = useMediaQuery("(max-width:600px)");
    const navigate = useNavigate()
    const fetchStore = async() => {
      const res = await apiGetStore()
      setStore(res)   
    }
    const fetchProduct = async() => {
      const res = await apiGetProduct()
      setProducts(res)

    }
    
    useEffect(() => {
      setIsLoading(true)
      fetchStore() && fetchProduct()
      setIsLoading(false)

    },[])
    console.log(products)
  return (
  <>
  {isLoading && !products?.length > 0 && !store?.length > 0 ? <div className="flex w-full h-screen items-center justify-center">
      <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif"  /> 
    </div> : <div className="w-full h-screen text-gray-500 shadow-xl bg-gray-50 px-4 flex flex-col gap-8 ">
    <div className="flex items-center ">
      <div className="flex items-center justify-between flex-4 ">
        <KeyboardArrowLeftIcon
          sx={{ fontSize: `${isMobile ? "30px" : "50px"}`, }}
          onClick={() => window.history.back()}
        />
        <span className="text-blue-600 max-sm:text-[10px]">Cửa hàng</span>
        <div className="relative">
          <KeyboardArrowDownIcon
            fontSize={`${isMobile ? "medium" : "large"}`}
            className={`${
              dropDown ? "rotate-180 transform" : ""
            } transition-transform duration-700 ease-in-out delay-150 text-blue-600`}
            onClick={() => setDropDown(!dropDown)}
          />
          {dropDown && (
            <div className="absolute z-50 w-24 h-40 max-sm:h-20 max-sm:py-4 bg-[#fff] flex flex-col gap-2 items-center left-[-80px] py-2 px-2">
              <div className="h-[50%]  w-full border-b">
                <p className="text-xl text-center text-blue-500  max-sm:text-xs">Hàng hóa</p>
              </div>
              <div className="h-[50%] w-full " onClick={() => {
                localStorage.setItem("page", 1)
                navigate("/")
              }}>
                <p className="text-xl text-center text-blue-500  max-sm:text-xs">Cửa hàng</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex items-center relative flex-8">
        <SearchOutlinedIcon
          className="absolute"
          sx={{
            fontSize: `${isMobile ? "20px" : "30px"}`,
            color: "gray",
            marginLeft: "7px",
            cursor: "pointer",
          }}
        />
        <input
          type="text"
          className="w-full h-11 rounded-lg max-sm:pl-8 pl-11 text-lg outline-none placeholder:text-gray-500 placeholder:font-medium placeholder:max-sm:text-xs"
          placeholder="Tìm kiếm sản phẩm"
        />
      </div>
    </div>
  <div className="flex flex-col gap-8">
      {store?.map((sto) => (
        <div className="flex flex-col gap-2" key={sto?._id}>
        <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
            <img src={`${pathImage}/${sto?.logoStore}`} alt="logo_brand" className="w-16 h-16 max-sm:w-12 max-sm:h-12 mix-blend-darken" />
            <div className="flex flex-col max-sm:gap-2">
               <span className="text-lg  max-sm:text-xs font-semibold text-black">{sto?.inforByStore?.nameStore}</span>
               <span className="text-lg  max-sm:text-xs font-semibold text-black">{sto?.follow ? sto?.follow : "1"}Người đã follow</span>

            </div>
            </div>
            <Link to={`/detail-store/${sto?._id}`}>
              <div className="w-32 max-sm:h-6 max-sm:w-28 h-8 flex justify-center items-center rounded-full bg-[#fdf6ec] border-[#fcbd71] border cursor-pointer" >
                  <span className="text-[#f90] max-sm:text-xs" >Dạo cửa hàng</span>
              </div>
            </Link>
        </div>
        <div className="grid grid-cols-3">
          {products && products
            .filter((product) => product?.store === sto?._id) 
            .slice(0, 3) 
            .map((product) => (
              <div key={product?._id}>
                <div className="flex flex-col gap-1 px-2">
                  <img
                    src={`${pathImage}/${product?.photos[0]}`}
                    alt="product"
                    className="h-44 max-sm:h-24 mix-blend-darken rounded-xl shadow-xl object-cover"
                  />
                  <span className="line-clamp-1 max-sm:text-xs">
                   {product?.title}
                  </span>
                  <span className="line-clamp-1 max-sm:text-xs">${product?.price}</span>
                </div>
              </div>
            ))}
        </div>
        </div>
      ))}
      
  </div>
  </div>}</>
    
  )
}

export default Store