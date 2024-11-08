import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useMediaQuery } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const Search = () => {
  const [search, setSearch] = useState([])
  const [dropDown, setDropDown] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate()
  
  const onSearch = (e) => { 
    if (e.key === "Enter") {
      const searchValue = e.target.value;
      console.log(searchValue);
    
      // Lấy danh sách tìm kiếm đã lưu từ localStorage
      let oldInfo = JSON.parse(localStorage.getItem('searchList')) || [];
    
      // Lưu search mới vào danh sách cũ
      oldInfo.push(searchValue);
    
      // Lưu lại danh sách vào localStorage
      localStorage.setItem('searchList', JSON.stringify(oldInfo));
      
      e.target.value = ""
      window.location.reload()
    }
   
  }
  const onDeleteHistory = () => {
    localStorage.removeItem("searchList")
    window.location.reload()
    
  }
  return (
    <div className="w-full h-screen py-2 text-gray-500 shadow-xl bg-gray-50 px-4 flex flex-col gap-8 ">
       <div className="flex items-center">
        <div className="flex items-center justify-between flex-4 ">
          <KeyboardArrowLeftIcon
             sx={{ fontSize  :  `${isMobile ? "30px" : "50px"}`}}
            
            onClick={() => window.history.back()}
          />
          <span className="text-blue-600 max-sm:text-xs">Hàng hóa</span>
          <div className="relative">
            <KeyboardArrowDownIcon
              fontSize={`${isMobile ? "small" : "large"}`}
              className={`${
                dropDown ? "rotate-180 transform" : ""
              } transition-transform duration-700 ease-in-out delay-150 text-blue-600`}
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown && (
              <div className="absolute z-50 w-24 h-40 max-sm:h-24 max-sm:w-16 bg-[#fff] flex flex-col gap-2 items-center left-[-80px] py-2 px-2">
                <div className="h-[50%] w-full cursor-pointer border-b">
                  <p className="text-xl text-center text-blue-500 max-sm:text-xs">Hàng hóa</p>
                </div>
                <div className="h-[50%] w-full cursor-pointer " onClick={() => navigate("/store")}>
                  <p className="text-xl text-center text-blue-500 max-sm:text-xs">Cửa hàng</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex items-center relative flex-8 ">
          <SearchOutlinedIcon
            className="absolute"
            sx={{
              fontSize  :  `${isMobile ? "15px" : "30px"}`,
              color: "gray",
              marginLeft: "7px",
              cursor: "pointer",
            }}
            
          />
          <input
            type="text"
            className="w-full h-11 max-sm:placeholder:text-xs rounded-xl max-sm:h-8 pl-11 max-sm:pl-6 max-sm:text-sm text-lg outline-none placeholder:text-gray-500 placeholder:font-medium "
            placeholder="Tìm kiếm sản phẩm"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between ">
          <h3 className="max-sm:text-sm">Lịch sử tìm kiếm</h3>
          <DeleteOutlineOutlinedIcon sx={{ fontSize : `${isMobile ? "20px" : "25px"}`, cursor: "pointer" }} onClick={onDeleteHistory} />
        </div>
     <div className="grid grid-cols-3 gap-2 px-2 max-sm:text-xs">
          
          {JSON.parse(localStorage.getItem('searchList'))?.map((search, index) => (
            <span className=" w-full line-clamp-1 break-words px-3 py-2 bg-gray-300 rounded-full text-center flex items-center justify-center " key={index}>
              {search}
            </span>

          ))}

        
      </div>
      </div>
      <div>
        <div className="flex items-center justify-between ">
          <h3 className="max-sm:text-sm">Tìm kiếm phổ biến</h3>
          <DeleteOutlineOutlinedIcon sx={{ fontSize : `${isMobile ? "20px" : "25px"}` }} />
        </div>
        <div className="grid grid-cols-3 gap-3 max-sm:text-[9px]">
          <span className=" break-words px-3  py-2 bg-gray-300 rounded-full text-center flex items-center justify-center ">
            Women's Clothing
          </span>

          <span className=" break-words px-3  py-2 bg-gray-300 rounded-full text-center flex items-center justify-center">
            Perfume
          </span>
          <span className=" break-words px-3  py-2 bg-gray-300 rounded-full text-center flex items-center justify-center">
            Mobile Phone
          </span>
          <span className=" break-words px-3  py-2 bg-gray-300 rounded-full text-center flex items-center justify-center">
            Lipstick
          </span>
          <span className=" break-words px-3  py-2 bg-gray-300 rounded-full text-center flex items-center justify-center">
            Makeup
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;
