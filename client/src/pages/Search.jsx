import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const Search = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="w-full h-screen text-gray-500 shadow-xl bg-gray-50 px-4 flex flex-col gap-8">
      <div className="flex items-center ">
        <div className="flex items-center justify-between flex-4 ">
          <KeyboardArrowLeftIcon
            sx={{ fontSize: "50px" }}
            onClick={() => window.history.back()}
          />
          <span className="text-blue-600">Hàng hóa</span>
          <div className="relative">
            <KeyboardArrowDownIcon
              fontSize="large"
              className={`${
                dropDown ? "rotate-180 transform" : ""
              } transition-transform duration-700 ease-in-out delay-150 text-blue-600`}
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown && (
              <div className="absolute w-24 h-40 bg-[#fff] flex flex-col gap-2 items-center left-[-80px] py-2 px-2">
                <div className="h-[50%] w-full border-b">
                  <p className="text-xl text-center text-blue-500 ">Hàng hóa</p>
                </div>
                <div className="h-[50%] w-full ">
                  <p className="text-xl text-center text-blue-500 ">Cửa hàng</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex items-center relative flex-8">
          <SearchOutlinedIcon
            className="absolute"
            sx={{
              fontSize: "30px",
              color: "gray",
              marginLeft: "7px",
              cursor: "pointer",
            }}
          />
          <input
            type="text"
            className="w-full h-11 rounded-lg pl-11 text-lg outline-none placeholder:text-gray-500 placeholder:font-medium "
            placeholder="Tìm kiếm sản phẩm"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between ">
          <h3>Lịch sử tìm kiếm</h3>
          <DeleteOutlineOutlinedIcon />
        </div>
        <div className="grid grid-flow-row-dense auto-cols-auto gap-2 px-2 ">
          <span className=" w-full line-clamp-1 break-words px-3  py-2 bg-gray-300 rounded-full text-center flex items-center">
            abcđasadasdasdsadasdsadsadasdadsadasdsdasdsadsadasdádsadsda
          </span>

          <span className=" w-full line-clamp-1 break-words px-3 py-2 bg-gray-300 rounded-full text-center flex items-center">
            abcđasadasdasdsadasdsadsadasdadsadasdsdasdsadsadasdádsadsdađdádasdasddâdasdadấddasdsadasdasdasd
          </span>
          <span className=" w-full line-clamp-1 break-words px-3  py-2 bg-gray-300 rounded-full text-center flex items-center">
            abcđasadasdasdsadasdsadsadasdadsadasdsdasdsadsadasdádsadsda
          </span>
          <span className=" w-full line-clamp-1 break-words px-3  py-2 bg-gray-300 rounded-full text-center flex items-center">
            abcđasadasdasdsadasdsadsadasdadsadasdsdasdsadsadasdádsadsda
          </span>
          <span className=" w-full line-clamp-1 break-words px-3  py-2 bg-gray-300 rounded-full text-center flex items-center">
            abcđasadasdasdsadasdsadsadasdadsadasdsdasdsadsadasdádsadsda
          </span>
          <span className=" w-full line-clamp-1 break-words px-3  py-2 bg-gray-300 rounded-full text-center flex items-center">
            abcđasadasdasdsadasdsadsadasdadsadasdsdasdsadsadasdádsadsda
          </span>
          <span className=" w-full line-clamp-1 break-words px-3  py-2 bg-gray-300 rounded-full text-center flex items-center">
            abcđasad
          </span>
          <span className=" w-full line-clamp-1 break-words px-3  py-2 bg-gray-300 rounded-full text-center flex items-center">
            abcđasad
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between ">
          <h3>Tìm kiếm phổ biến</h3>
          <DeleteOutlineOutlinedIcon />
        </div>
        <div className="grid grid-cols-3 gap-3">
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
