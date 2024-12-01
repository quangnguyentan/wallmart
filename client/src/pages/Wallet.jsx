import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useMediaQuery } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { logout } from "@/stores/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import wallet from "@/assets/wallet.jpg"
import DiamondIcon from '@mui/icons-material/Diamond';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Wallet = () => {
  const [open, setOpen] = React.useState(false);
    const isMobile = useMediaQuery("(max-width:600px)");
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const { currentData } = useSelector((state) => state.user);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <div className="flex flex-col max-sm:gap-4 w-full h-screen shadow-xl bg-gray-50">
    <div className="flex items-center w-full gap-44 max-sm:gap-32">
    <KeyboardArrowLeftIcon
         sx={{ fontSize  : `${isMobile ? "40px" : "40px"}`}}
        className="text-gray-400 cursor-pointer"
        onClick={() => window.history.back()}
      />
      <h3 className="text-gray-500 text-center flex items-center justify-start w-full  text-lg max-sm:text-sm ">Ví của tôi</h3>     
      
    </div>
        <div className="flex flex-col gap-4">
            <div className="py-3 px-4">
                <div className="relative">
                    <img src={wallet} alt="wallet" />
                    <div className="absolute top-4 px-4 w-full flex flex-col gap-8 max-sm:gap-4">
                        <div className="flex items-center text-white gap-2">
                            <h3 className="text-xl max-sm:text-xs max-sm:font-semibold font-bold">Tài khoản của tôi</h3>
                            <DiamondIcon sx={{ fontSize : `${isMobile ? "15px" : "25px"}` }}/>
                        </div>
                        <div className="flex items-center text-white gap-2 w-full justify-around">
                        <div className="flex flex-col gap-1 text-center">
                        <h3 className="text-xl max-sm:text-xs max-sm:font-semibold font-bold">Số dư</h3>
                            <h3 className="text-3xl font-bold max-sm:text-sm">${currentData?.deposit}</h3>
                        </div>   
                        <div className="flex flex-col gap-1 text-center">
                                <h3 className="text-xl max-sm:text-xs max-sm:font-semibold font-bold">Loại thẻ</h3>
                                <h3 className="text-xl max-sm:text-xs max-sm:font-semibold font-bold">Thẻ ngân hàng</h3>
                        </div>   
                            
                        </div>
                        <div className="flex items-center text-white gap-2 w-full justify-between text-center">
                        <div className="flex flex-col gap-1 ">
                        <h3 className="text-xl max-sm:text-xs max-sm:font-semibold font-bold">Khuyến mãi</h3>
                            <h3 className="text-lg max-sm:text-xs font-bold">0 phiếu</h3>
                        </div>   
                        <div className="flex flex-col gap-1 text-center">
                                <h3 className="text-xl max-sm:text-xs max-sm:font-semibold font-bold">Điểm thưởng</h3>
                                <h3 className="text-xl max-sm:text-xs max-sm:font-semibold font-bold">{currentData?.profit}</h3>
                        </div>   
                        <div className="flex flex-col gap-1 text-center">
                                <h3 className="text-xl max-sm:text-xs max-sm:font-semibold font-bold">Cấp thành viên</h3>
                                <h3 className="text-xl max-sm:text-xs max-sm:font-semibold font-bold">Vip 1</h3>
                        </div>   
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="flex px-8 bg-white items-center justify-center">
            <div className="flex flex-col cursor-pointer gap-1 justify-center py-4 px-12 max-sm:px-6 max-sm:text-[10px]  items-center text-black font-normal" >
                <MonetizationOnOutlinedIcon sx={{ fontSize : `${isMobile ? "15px" : "25px"}`}}/>
                <span>Số dư nạp</span>
            </div>
            <div onClick={() => {
              if(!currentData?.nameOfBank && !currentData?.creditCartOfBank && !currentData?.nameOfUser){
                handleClickOpen()
              }else{
                navigate("/update-bank")
              }
            }} className="flex flex-col cursor-pointer gap-1 justify-center py-4 px-14 max-sm:px-8 max-sm:text-[10px]  border-l items-center text-black font-normal" >
                <SavingsOutlinedIcon sx={{ fontSize : `${isMobile ? "15px" : "25px"}`}}/>
                <span>Rút tiền</span>
            </div>
            <div  className="flex flex-col cursor-pointer gap-1 justify-center  py-4 px-12 max-sm:px-6 max-sm:text-[10px] border-l items-center text-black font-normal">
                <RedeemOutlinedIcon sx={{ fontSize : `${isMobile ? "15px" : "25px"}`}}/>
                <span>Kiếm điểm</span>
            </div>
            </div>
            <div className="flex flex-col bg-white ">
            <Link to={`/deposit-wallet`}>
         <div className="flex items-center justify-between border-b py-4 cursor-pointer px-4 text-gray-600 ">
           <div className="flex items-center gap-2 "> 
                    <MonetizationOnOutlinedIcon  sx={{ fontSize : `${isMobile ? "15px" : "20px"} ` , fill : "red" }}/>
            
            <span className="text-lg text-black max-sm:text-xs">Lịch sử nạp tiền</span>
            </div>
            <KeyboardArrowRightIcon sx={{ fontSize: `${isMobile ? "25px" : "40px"}`, color : "gray"  }}/>
          </div>
          </Link>
            <Link to={`/withdraw-wallet`}>
          <div className="flex items-center justify-between  py-4 cursor-pointer px-4 text-gray-600 ">
           <div className="flex items-center gap-2 "> 
                    <MonetizationOnOutlinedIcon  sx={{ fontSize : `${isMobile ? "15px" : "20px"} ` , fill : "red" }}/>
            
            <span className="text-lg text-black max-sm:text-xs">Lịch sử rút tiền</span>
            </div>
            <KeyboardArrowRightIcon sx={{ fontSize: `${isMobile ? "25px" : "40px"}`, color : "gray"  }}/>
          </div>
          </Link>
            </div>
         
       
        </div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
      
    
      <DialogContent>
        <DialogContentText id="alert-dialog-description" >
            <span className="max-sm:text-xs text-lg text-red-500 font-semibold">
              Vui lòng liên kết ngân hàng trước
            </span>
        </DialogContentText>
      </DialogContent>
      <DialogActions className="flex items-center gap-4">
        <button className="max-sm:text-xs text-lg hover:text-blue-500" onClick={handleClose}>Hủy bỏ</button>
        <button className="max-sm:text-xs text-lg hover:text-blue-500" onClick={() => {
          handleClose
          navigate("/update-bank")
        }} autoFocus>
          Đồng ý
        </button>
      </DialogActions>
    </Dialog>
    </div>
  )
}

export default Wallet