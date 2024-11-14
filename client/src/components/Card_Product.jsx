import product_test from "@/assets/product_test.jpg";
import product_test1 from "@/assets/product_test1.jpg";
import loading from "@/assets/loading.gif";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { listLeftCategories, pathImage } from "@/lib/helper";
import DrawRight from "./DrawRight";

const Card_Product = ({ profile, hidden, products,agent }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop()
  }, [])
  return (
    <>
      {agent ? <div className="flex flex-col gap-2 bg-[#f5f5f5]">
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
     <div className="grid grid-cols-6 gap-2 px-4">
       {products && products?.map((product) => (
         product && product?.store && <Link to={`/detail-product/${product?._id}`} key={product._id}>
          <div className="w-full h-full bg-white cursor-pointe flex flex-col gap-2">
            <img
              src={`${pathImage}/${product?.photos[0]}`}
              alt="product_test"
              className="h-[256px] max-sm:h-[180px] w-full object-cover"
            />
            <div className="flex flex-col gap-2 px-2">
              <span className="line-clamp-2 break-all text-ellipsis font-medium text-[18px] max-sm:text-xs max-sm:font-medium">
                {product?.title}
              </span>
              <span className="text-[#ed5435] font-semibold text-2xl  max-sm:text-base max-sm:font-semibold">
                  ${product?.price}
              </span>
            </div>
          </div>
         </Link>
         
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
       {products && products?.map((product) => (
         product && product?.store && <Link to={`/detail-product/${product?._id}`} key={product._id}>
          <div className="w-full h-full bg-white cursor-pointe flex flex-col gap-2">
            <img
              src={`${pathImage}/${product?.photos[0]}`}
              alt="product_test"
              className="h-[256px] max-sm:h-[180px] w-full object-cover"
            />
            <div className="flex flex-col gap-2 px-2">
              <span className="line-clamp-2 break-all text-ellipsis font-medium text-[18px] max-sm:text-xs max-sm:font-medium">
                {product?.title}
              </span>
              <span className="text-[#ed5435] font-semibold text-2xl  max-sm:text-base max-sm:font-semibold">
                  ${product?.price}
              </span>
            </div>
          </div>
         </Link>
         
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
