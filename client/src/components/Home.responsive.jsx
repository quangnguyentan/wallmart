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
import { apiGetProduct } from "@/services/productService";
import { Link, useNavigate } from "react-router-dom";
import { apiGetMyStore, apiGetStore, apiGetstoreById } from "@/services/storeService";
import { getCurrent } from "@/stores/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
// import { linkCSKH } from "@/lib/helper";
const HomePage = () => {
  const [products, setProducts] = useState([])
  const [store, setStore] = useState("")
  const [stores, setStores] = useState([])
  const linkCSKH = "https://go.crisp.chat/chat/embed/?website_id=cb2c928a-d691-4e80-9022-a3a7588a2f51"
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoggedIn, token } = useSelector((state) => state.auth);

  const getProduct = async() => {
    const res = await apiGetProduct()
    setProducts(res)
  }
  const getStore = async() => {
    const res = await apiGetMyStore()
    setStore(res[0])
  }
  const getAllStore = async() => {
    const res = await apiGetStore()
    setStores(res)
  }
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
  useEffect(() => {
    getProduct() 
    if(isLoggedIn && token) {
      getStore()
    }
    getAllStore()
  }, [])
  return (
    <div className="w-full flex flex-col gap-4 max-sm:gap-2 relative">
      <SlickSlider home />
      <div className="flex w-full items-center max-sm:gap-4 gap-6  justify-center">
        <div className="flex flex-col items-center justify-center max-sm:gap-1 gap-2">
          <div className="w-16 max-sm:w-10 max-sm:h-10 h-16 border flex items-center justify-center rounded-2xl cursor-pointer" onClick={() => {
            if(isLoggedIn && token) {
              dispatch(getCurrent())
            
            if(store) {
              navigate("/home")
            }
            if(!store) {
              navigate("/register-choose")
            }
            }else{
              navigate("/login")
            }
          }}>
            <img src={shop} alt="shop" className="w-12 h-12 max-sm:h-7 max-sm:w-7" />
          </div>
          <span className="text-[17px] max-sm:text-xs font-normal">
          {store && store?.active === "access" ||store?.active === "wait" ? "Shop của tôi" : "Bắt đầu bán"}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center max-sm:gap-1 gap-2">
          <div className="w-16 max-sm:w-10 max-sm:h-10 h-16 border flex items-center justify-center rounded-2xl cursor-pointer">
            <img src={discount} alt="discount" className="w-12 h-12 max-sm:h-7 max-sm:w-7" />
          </div>
          <span className="text-[17px] max-sm:text-xs font-normal">
            Khuyến mãi
          </span>
        </div>
        <div className="flex flex-col items-center justify-center max-sm:gap-1 gap-2">
          <div className="w-16 max-sm:w-10 max-sm:h-10 h-16 border flex items-center justify-center rounded-2xl cursor-pointer">
            <img src={register} alt="register" className="w-12 h-12 max-sm:h-7 max-sm:w-7" />
          </div>
          <span className="text-[17px] max-sm:text-xs font-normal">
            Đăng kí
          </span>
        </div>
        <div className="flex flex-col items-center justify-center max-sm:gap-1 gap-2">
          <div className="w-16 max-sm:w-10 max-sm:h-10 h-16 border flex items-center justify-center rounded-2xl cursor-pointer">
            <img src={score} alt="score" className="w-12 h-12 max-sm:h-7 max-sm:w-7" />
          </div>
          <span className="text-[17px] max-sm:text-xs font-normal">
            Điểm tích lũy
          </span>
        </div>
        <Link to={linkCSKH} target="_bank"  referrerPolicy="no-referrer" className="cursor-pointer">
        <div className="flex flex-col items-center justify-center max-sm:gap-1 gap-2">
          <div className="w-16 max-sm:w-10 max-sm:h-10 h-16 border flex items-center justify-center rounded-2xl cursor-pointer">
            <img src={cskh} alt="cskh" className="w-12 h-12 max-sm:h-7 max-sm:w-7" />
          </div>
          <span className="text-[17px] max-sm:text-xs font-normal">CSKH</span>
        </div>
        </Link>
      </div>
      <div>
        <img src={banner_home} alt="banner_home" />
      </div>
      <Card_Product products={products} stores={stores}/>
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
