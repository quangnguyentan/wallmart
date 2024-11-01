import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import demo2 from "../assets/demo2.png"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import banner_classify from "@/assets/banner_classify.jpg"

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
const SlickSlider = ({ home}) => {
  return (
    <div >
      {home ? <div className="slider-container relative ">

      <div className="w-full absolute z-10 p-4 flex items-center gap-2">
      <Link className="w-[70%]">
        <div className="w-full flex items-center relative ">
            <SearchOutlinedIcon className="absolute" sx={{ fontSize : "30px", color : "gray", marginLeft : "7px", cursor : "pointer" }}/>
            <input type="text" className="w-full h-11 rounded-lg pl-11 text-lg outline-none placeholder:text-orange-600 placeholder:font-medium " placeholder="Vui lòng nhập từ khóa sản phẩm" />  
        </div>
       </Link>
       <div className="w-[30%] flex items-center gap-4">
        <Link>
          <ShoppingCartOutlinedIcon fontSize="large" sx={{ color : "white" }}/>
        </Link>
        <Link>
          <SmsOutlinedIcon fontSize="large" sx={{ color : "white" }}/>
        </Link>
        <Link>
          <TranslateOutlinedIcon fontSize="large" sx={{ color : "white" }}/>
        </Link>
       </div>
      </div>  
      <Slider {...settings} className="w-full p-2">
        <div className="w-full max-sm:h-52 h-72">
          <img
            src={demo2}
            alt="banner"
            className="w-full max-sm:h-52 h-72"
          />
        </div>
        <div className="w-full max-sm:h-52 h-72">
          <img
            src={demo2}
            alt="banner"
            className="w-full max-sm:h-52 h-72"
          />
        </div>
        <div className="w-full max-sm:h-52 h-72">
          <img
            src={demo2}
            alt="banner"
            className="w-full max-sm:h-52 h-72"
          />
        </div>
      </Slider>
    </div> : <div className="slider-container">
      <Slider {...settings} className="w-full p-2 ">
        <div className="w-full ">
          <img
            src={banner_classify}
            alt="banner"
            className="rounded-lg w-full "
          />
        </div>
        <div className="w-full ">
          <img
            src={banner_classify}
            alt="banner"
            className="rounded-lg w-full "
          />
        </div>
        <div className="w-full ">
          <img
            src={banner_classify}
            alt="banner"
            className="rounded-lg w-full "
          />
        </div>
      </Slider>
    </div>}
    </div>
  )
}

export default SlickSlider