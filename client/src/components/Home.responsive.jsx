import SlickSlider from "./SlickSlider";
import shop from "@/assets/shop.jpg";
import discount from "@/assets/discount.png";
import register from "@/assets/register.png";
import score from "@/assets/score.png";
import cskh from "@/assets/cskh.png";
import banner_home from "@/assets/banner_home.jpg";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { useState, useEffect } from "react";
import Card_Product from "./Card_Product";
const HomePage = () => {
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
    <div className="w-full flex flex-col gap-4 max-sm:gap-2 relative">
      <SlickSlider home />
      <div className="flex w-full items-center max-sm:gap-4 gap-6  justify-center">
        <div className="flex flex-col items-center justify-center max-sm:gap-1 gap-2">
          <div className="w-16 max-sm:w-10 max-sm:h-10 h-16 border flex items-center justify-center rounded-2xl">
            <img src={shop} alt="shop" className="w-12 h-12 max-sm:h-7 max-sm:w-7" />
          </div>
          <span className="text-[17px] max-sm:text-xs font-normal">
            Bắt đầu bán
          </span>
        </div>
        <div className="flex flex-col items-center justify-center max-sm:gap-1 gap-2">
          <div className="w-16 max-sm:w-10 max-sm:h-10 h-16 border flex items-center justify-center rounded-2xl">
            <img src={discount} alt="discount" className="w-12 h-12 max-sm:h-7 max-sm:w-7" />
          </div>
          <span className="text-[17px] max-sm:text-xs font-normal">
            Khuyến mãi
          </span>
        </div>
        <div className="flex flex-col items-center justify-center max-sm:gap-1 gap-2">
          <div className="w-16 max-sm:w-10 max-sm:h-10 h-16 border flex items-center justify-center rounded-2xl">
            <img src={register} alt="register" className="w-12 h-12 max-sm:h-7 max-sm:w-7" />
          </div>
          <span className="text-[17px] max-sm:text-xs font-normal">
            Đăng kí
          </span>
        </div>
        <div className="flex flex-col items-center justify-center max-sm:gap-1 gap-2">
          <div className="w-16 max-sm:w-10 max-sm:h-10 h-16 border flex items-center justify-center rounded-2xl">
            <img src={score} alt="score" className="w-12 h-12 max-sm:h-7 max-sm:w-7" />
          </div>
          <span className="text-[17px] max-sm:text-xs font-normal">
            Điểm tích lũy
          </span>
        </div>
        <div className="flex flex-col items-center justify-center max-sm:gap-1 gap-2">
          <div className="w-16 max-sm:w-10 max-sm:h-10 h-16 border flex items-center justify-center rounded-2xl">
            <img src={cskh} alt="cskh" className="w-12 h-12 max-sm:h-7 max-sm:w-7" />
          </div>
          <span className="text-[17px] max-sm:text-xs font-normal">CSKH</span>
        </div>
      </div>
      <div>
        <img src={banner_home} alt="banner_home" />
      </div>
      <Card_Product />
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
    </div>
  );
};

export default HomePage;
