import product_test from "@/assets/product_test.jpg";
import product_test1 from "@/assets/product_test1.jpg";
import loading from "@/assets/loading.gif";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { listLeftCategories, pathImage } from "@/lib/helper";
import DrawRight from "./DrawRight";
import { apiAddToCartByStore, apiGetStore } from "@/services/storeService";
import toast from "react-hot-toast";
import DrawBottom from "./DrawBottom";
import { useState } from "react";
import { apiGetProduct } from "@/services/productService";
import { useSelector } from "react-redux";

const Card_Product = ({ profile, hidden, products,agent, stores }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
  const [loadingData, setLoadingData] = useState(false);
  const [productList, setproductList] = useState([])
  
  useEffect(() => {
    getUsers()
  }, []);

  let getUsers = async () => {
    try {
      const products = await apiGetStore()
      setproductList(products);
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
      console.log("Chuyển đến chi tiết sản phẩm", product?._id);
    }
  };
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
      <DrawRight/>
     </div>
     <div className="grid grid-cols-5 gap-2 px-4">
        {products &&
          products?.map((product) => (
            product && product?.store && (
              <div key={product._id} className="w-full h-full bg-white cursor-pointer flex flex-col gap-2 relative">
                <Link
                  to={`/detail-product-agent/${product?._id}`}
                  onClick={(e) => handleProductClick(e, product)} // Ngừng click nếu Drawer mở
                >
                  <span className="absolute top-0 right-0 px-2 py-2 text-sm font-semibold text-white bg-[#6435bb]">Hàng tồn kho: {product?.inventory}</span>
                  <img
                    src={`${pathImage}/${product?.photos[0]}`}
                    alt="product_test"
                    className="h-[256px] max-sm:h-[180px] w-full object-cover"
                  />
                  <div className="flex flex-col gap-2 px-2">
                    <span className="line-clamp-2 break-all text-ellipsis font-medium text-[18px] max-sm:text-xs max-sm:font-medium">
                      {product?.title}
                    </span>
                    <div className="flex items-center justify-between px-2 py-2">
                      <span className="text-[#ed5435] font-semibold text-2xl max-sm:text-base max-sm:font-semibold">
                        ${product?.price}
                      </span>
                      <div className="px-2 py-4 max-sm:py-2">
                        <button className="button"  onClick={(e) => {
                              e.preventDefault()
                              fetchAddToCart(product)
                              getUsers()
                              // setTimeout(() => {
                              //   window.location.reload()
                              // }, 1000)
                            }}>
                            <span>Nhập hàng</span>
                            <div className="cart">
                                <svg viewBox="0 0 36 26">
                                    <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                                    <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                                </svg>
                            </div>
                        </button>

                      </div>
                      
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
      <div className="grid grid-cols-2 gap-2 px-4">
      {stores?.map((product) => (
    product?.cart?.some(item => item.status === "not_paid") && (
      <React.Fragment key={product._id}>
        {product.cart.map((item) => (
          item.status === "not_paid" && (
            <Link state={product} to={`/detail-product/${item?.product?._id}`} key={product._id}>
            <div className="w-full h-full bg-white cursor-pointe flex flex-col gap-2">
              <img
                src={`${pathImage}/${item?.product?.photos && item?.product?.photos[0]}`}
                alt="product_test"
                className="h-[256px] max-sm:h-[180px] w-full object-cover"
              />
              <div className="flex flex-col gap-2 px-2">
                <span className="line-clamp-2 break-all text-ellipsis font-medium text-[18px] max-sm:text-xs max-sm:font-medium">
                  {item?.product?.title}
                </span>
                <span className="text-[#ed5435] font-semibold text-2xl  max-sm:text-base max-sm:font-semibold">
                    ${item?.product?.price}
                </span>
              </div>
            </div>
           </Link>
          )
        ))}
      </React.Fragment>
    )
  ))}
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
