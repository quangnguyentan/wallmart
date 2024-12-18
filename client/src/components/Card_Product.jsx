import product_test from "@/assets/product_test.jpg";
import product_test1 from "@/assets/product_test1.jpg";
import loading from "@/assets/loading.gif";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { listLeftCategories, pathImage } from "@/lib/helper";
import DrawRight from "./DrawRight";
import { apiAddToCartByStore, apiGetMyStore, apiGetStore } from "@/services/storeService";
import toast from "react-hot-toast";
import DrawBottom from "./DrawBottom";
import { useState } from "react";
import { apiGetProduct } from "@/services/productService";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
function shuffleRandomly(arr) {
  let shuffledArr = arr.slice(); // Tạo bản sao của mảng gốc để tránh sửa đổi mảng gốc
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Chọn ngẫu nhiên một chỉ số trong mảng
    // Hoán đổi vị trí giữa phần tử tại chỉ số i và j
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return shuffledArr;
}

const Card_Product = ({ profile, hidden, products,agent, stores, listProduct, category }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
  const [allProduct, setAllProduct] = useState([])
  const [loadingData, setLoadingData] = useState(false);
  const [productList, setproductList] = useState([])
  const isMobile = useMediaQuery("(max-width:600px)");
  const location = useLocation()
  
  useEffect(() => {
    getUsers() && getProducts()
  }, []);

  let getUsers = async () => {
    try {
      const products = await apiGetMyStore()
      setproductList(products[0]);
    } catch (error) {
      console.log(error);
    }
  };
  let getProducts = async () => {
    try {
      const products = await apiGetProduct()
      setAllProduct(products);
    } catch (error) {
      console.log(error);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const fetchAddToCart = async(product) => {
   try {
    const res = await apiAddToCartByStore({
      quantity : 1,
      product : product?._id,
      status : "not_paid"
    })
    if(res?.success) {
      getUsers()
      toast.success("Thêm giỏ hàng thành công")
    }else{
      toast.error(res?.msg)
    }
   } catch (error) {
    console.log(error)
   }
  
  }

  // Hàm điều khiển khi click vào sản phẩm
  const handleProductClick = (e, product) => {
    if (isDrawerOpen) {
      e.preventDefault(); 
    } else {
      // Logic click vào sản phẩm bình thường
    }
  };
  const generateProducts = () => {
    const filteredProducts = allProduct.filter(
      (item) => !category || item?.category === category
    );
    const productCount = 10; // Mỗi category cần 30 sản phẩm

    // Nhân bản sản phẩm sao cho có đủ 30 sản phẩm cho mỗi category
    let repeatedProducts = [];
    filteredProducts.forEach((item) => {
      const repetitions = Math.ceil(productCount / filteredProducts.length); // Tính số lần lặp
      for (let i = 0; i < repetitions; i++) {
        repeatedProducts.push(item);
      }
    });

    // Xáo trộn ngẫu nhiên các sản phẩm
    return shuffleRandomly(repeatedProducts).slice(0, productCount); // Lấy chính xác 30 sản phẩm
  };
  const filteredProducts = allProduct &&  allProduct?.filter(
    (item) => !category || item?.category === category
  );
  useEffect(() => {
    scrollToTop()
   
    document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
      if(!button.classList.contains('loading')) {
  
          button.classList.add('loading');
  
          setTimeout(() => button.classList.remove('loading'), 3700);
      }
      e.preventDefault();
    }));
  }, [])
  return (
    <>
      {agent ? <div className="flex flex-col gap-2 bg-[#f5f5f5] pb-12">
      {!hidden && <div
        className={
          profile
            ? "flex items-center gap-2 px-6 py-2 justify-center pt-8 "
            : "flex items-center gap-2 px-6 py-2"
        }
      >
        <h3 className="text-2xl font-semibold max-sm:text-lg">Đoán là anh thích</h3>
        <div className="w-20 h-6 rounded-bl-lg rounded-tr-lg bg-red-500">
          <span className="text-[11px] px-1 text-white ">Chọn hàng tốt</span>
        </div>
      </div> }
     <div className="flex items-center justify-end px-4">
      <DrawRight products={productList}/>
     </div>
     <div className="grid grid-cols-5 gap-2 px-4 max-sm:grid max-sm:grid-cols-2">
        {products &&
          products?.map((product) => (
            product  && (
              <div key={product._id} className="w-full h-full bg-white cursor-pointer flex flex-col gap-2 relative">
                <Link
                  to={`/detail-product-agent/${product?._id}`}
                  onClick={(e) => handleProductClick(e, product)} // Ngừng click nếu Drawer mở
                >
                  <span className="absolute top-0 right-0 px-2 py-2 text-sm font-semibold text-white bg-[#6435bb] max-sm:text-[10px]">Hàng tồn kho: {product?.inventory}</span>
                  <img
                    src={`${pathImage}/${product?.photos[0]}`}
                    alt="product_test"
                    className="h-[256px] max-sm:h-[120px] w-full object-cover"
                  />
                  <div className="flex flex-col gap-2 px-2">
                    <span className="line-clamp-2 break-all text-ellipsis font-medium text-[18px] max-sm:text-xs max-sm:font-medium">
                      {product?.title}
                    </span>
                    <div className="flex items-center  justify-between px-0 py-2">
                      <span className="text-[#ed5435] font-semibold text-2xl max-sm:font-semibold max-sm:text-xs">
                        ${product?.price}
                      </span>
                     {isMobile ?  <div className="px-2 py-4 flex items-center justify-center max-sm:py-2 max-sm:px-1 max-sm bg-[#362a89] rounded-xl o">
                        <button className="px-2 flex items-center justify-center gap-1"  onClick={(e) => {
                              e.preventDefault()
                              fetchAddToCart(product)
                            
                            }}>
                            <span className="max-sm:text-[10px] text-white">Nhập hàng</span> 
                        </button>

                      </div> :  <div className="px-2 py-4 max-sm:py-2 max-sm:px-0 max-sm">
                        <button className="button"  onClick={(e) => {
                              e.preventDefault()
                              fetchAddToCart(product)
                            
                            }}>
                            <span className="max-sm:text-xs">Nhập hàng</span>
                            <div className="cart">
                                <svg viewBox="0 0 36 26">
                                    <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                                    <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                                </svg>
                            </div>
                        </button>

                      </div>}
                      
                    </div>
                  </div>
                </Link>
              </div>
            )
          ))}
      </div>
    </div> : <div className="flex flex-col gap-2 bg-[#f5f5f5]">
      {!hidden && <div
        className={
          profile
            ? "flex items-center gap-2 px-6 py-2 justify-center pt-8 "
            : "flex items-center gap-2 px-6 py-2"
        }
      >
        <h3 className="text-2xl font-semibold max-sm:text-lg">Đoán là anh thích</h3>
        <div className="w-20 h-6 rounded-bl-lg rounded-tr-lg bg-red-500">
          <span className="text-[11px] px-1 text-white ">Chọn hàng tốt</span>
        </div>
      </div> }
      <div className="grid grid-cols-2 gap-2 px-4 h-screen overflow-y-scroll tabs-list">
 
        {/* <React.Fragment >
          {location.pathname === "/list-product" &&  allProduct?.length > 0 && allProduct?.map((item) => {
            // Kiểm tra xem có category và sản phẩm có category đó không
            const isCategoryMatch = category && item?.category === category;
            if (!category || isCategoryMatch) {
              return (
                <Link to={`/detail-product/${item?._id}`} key={item?._id}>
                  <div className="w-full h-full bg-white cursor-pointer flex flex-col gap-2">
                    <img
                      src={`${pathImage}/${item?.photos?.[0]}`}
                      alt="product_test"
                      className="h-[256px] max-sm:h-[180px] w-full object-cover"
                    />
                    <div className="flex flex-col gap-2 px-2">
                      <span className="line-clamp-2 break-all text-ellipsis font-medium text-[18px] max-sm:text-xs max-sm:font-medium">
                        {item?.title}
                      </span>
                      <span className="text-[#ed5435] font-semibold text-2xl max-sm:text-base max-sm:font-semibold">
                        ${item?.price}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            }
            return null;
          })}
        </React.Fragment> */}
    {filteredProducts?.map((product) => (
            <div key={product._id} className="w-full h-full bg-white cursor-pointer flex flex-col gap-2 relative">
              <Link to={`/detail-product/${product?._id}`}>
                <img
                  src={`${pathImage}/${product?.photos?.[0]}`}
                  alt="product_test"
                  className="h-[256px] max-sm:h-[120px] w-full object-cover"
                />
                <div className="flex flex-col gap-2 px-2">
                  <span className="line-clamp-2 break-all text-ellipsis font-medium text-[18px] max-sm:text-xs max-sm:font-medium">
                    {product?.title}
                  </span>
                  <span className="text-[#ed5435] font-semibold text-2xl max-sm:text-base max-sm:font-semibold">
                    ${product?.price}
                  </span>
                </div>
              </Link>
            </div>
          ))}





    
 
      </div>
      <div className="grid grid-cols-2 gap-2 px-4 overflow-y-scroll tabs-list">
      {products && products?.map((product) => (
    product  && (
      <div key={product._id} className="w-full h-full bg-white cursor-pointer flex flex-col gap-2 relative">
         <Link
              state={product}
              to={`/detail-product/${product?._id}`}
              key={product._id}
            >
              <div className="w-full h-full bg-white cursor-pointer flex flex-col gap-2">
                <img
                  src={`${pathImage}/${product?.photos?.[0]}`}
                  alt="product_test"
                  className="h-[256px] max-sm:h-[180px] w-full object-cover rounded-lg"
                />
                <div className="flex flex-col gap-2 px-2">
                  <span className="line-clamp-2 break-words font-medium text-[18px] max-sm:text-sm text-gray-800">
                    {product?.title}
                  </span>
                  <span className="text-[#ed5435] font-semibold text-2xl max-sm:text-base">
                    ${product?.price}
                  </span>
                </div>
              </div>
            </Link>
      </div>
    )
    )
      )}
   
      </div>
      
      <div
        className={
          profile
            ? "pt-10 pb-20 flex items-center justify-center bg-transparent"
            : `pt-10 pb-20 ${hidden && "pb-5"}  flex items-center justify-center bg-transparent`
        }
      >
        <img
          src={loading}
          className="w-8 h-8 max-sm:w-6 max-sm:h-6 object-contain mix-blend-darken"
          alt="loading"
        />
        <span className="text-xl text-gray-500 font-semibold max-sm:text-sm">Tải thêm</span>
      </div>
    </div>}
    </>
  );
};

export default Card_Product;
