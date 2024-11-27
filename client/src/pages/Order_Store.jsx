import { Eye } from "lucide-react"
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import { apiAddToCartByStore } from "@/services/storeService";
import toast from "react-hot-toast";
import noCart from "@/assets/noCart.png"
import { apiGetOrderById, apiOrderPaymentStore } from "@/services/orderServer";
import moment from "moment";
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
const StyledGridOverlay = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    '& .no-rows-primary': {
      fill: '#3D4751',
      ...theme.applyStyles('light', {
        fill: '#AEB8C2',
      }),
    },
    '& .no-rows-secondary': {
      fill: '#1D2126',
      ...theme.applyStyles('light', {
        fill: '#E8EAED',
      }),
    },
  }));
function CustomNoRowsOverlay() {
    return (
      <StyledGridOverlay>
        <div className="flex flex-col justify-center items-center" >
            <img src={noCart} alt="noCart" className="w-64 h-44" />
            <span> Không có đơn hàng nào</span>
           </div>
      </StyledGridOverlay>
    );
  }
const statusDelivery = [
    {
        id : 1,
        name : "Chờ xuất hàng"
    },
    {
        id : 2,
        name : "Xuất hàng thành công"
    },
    {
        id : 3,
        name : "Đang giao hàng"
    },
    {
        id : 4,
        name : "Đã giao hàng"
    },
    {
        id : 5,
        name : "Đã hủy"
    },
]
const statusPayment = [
    {
        id : 1,
        name : "Chưa thanh toán"
    },
    {
        id : 2,
        name : "Đã thanh toán"
    },
    {
        id : 3,
        name : "Đã hoàn tiền"
    },
    
]
const Order_Store = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('');
    const [selectedIds, setSelectedIds] = useState([]);
    const isMobile = useMediaQuery("(max-width:600px)");
    const [open, setOpen] = React.useState(false);
   
    const columns = [
      { 
          field: 'id', 
          headerName: 'Mã đặt hàng', 
          width: isMobile && 520, 
          flex : isMobile ? 0 : 2,
          headerAlign: 'center',
          align: 'center', 
          renderCell: (params) => (
            <div className="flex items-center justify-center gap-4 w-full h-full">
                <span className="text-xs">{params.row._id}</span>
            </div>
            ),
          
      },
      { 
          field: 'createdAt', 
          headerName: 'Ngày', 
          width: isMobile && 160, 
          flex : isMobile ? 0 : 1,
          headerAlign: 'center',
          align: 'center', 
          renderCell: (params) => (
              <div className="flex items-center justify-center gap-4 w-full h-full">
                <span className="text-xs">{moment(params.row.createdAt).format('L')}</span>
              </div>
            ),
          
      },
      { 
          field: 'quantity', 
          headerName: 'Số lượng sản phẩm', 
          width: isMobile && 160, 
          flex : isMobile ? 0 : 1,
          headerAlign: 'center',
          align: 'center', 
          renderCell: (params) => (
              <div className="flex items-center justify-center gap-4 w-full h-full">
                <span className="text-xs">{params.row.quantity}</span>
              </div>
            ),
          
      },
      { 
          field: 'revicerName', 
          headerName: 'Khách hàng', 
          width: isMobile && 160, 
          flex : isMobile ? 0 : 1,
          headerAlign: 'center',
          align: 'center', 
          renderCell: (params) => (
              <div className="flex items-center justify-center gap-4 w-full h-full">
                <span className="text-xs">{params.row.revicerName}</span>
              </div>
            ),
          
      },
      { 
          field: 'priceOld', 
          headerName: 'Delivery price', 
          width: isMobile && 160, 
          flex : isMobile ? 0 : 1,
          headerAlign: 'center',
          align: 'center', 
          renderCell: (params) => (
              <div className="flex items-center justify-center gap-4 w-full h-full">
                <span className="text-xs">${params.row.product.priceOld}</span>
              </div>
            ),
          
      },
      { 
        field: 'profit', 
        headerName: 'Lợi nhuận', 
        width: isMobile && 160, 
        flex : isMobile ? 0 : 1,
        headerAlign: 'center',
        align: 'center', 
        renderCell: (params) => (
            <div className="flex items-center justify-center gap-4 w-full h-full">
              <span className="text-xs">${params.row.product.price * 20 / 100}</span>
            </div>
          ),
        
      },
      { 
        field: 'price', 
        headerName: 'Số tiền', 
        width: isMobile && 160, 
        flex : isMobile ? 0 : 1,
        headerAlign: 'center',
        align: 'center', 
        renderCell: (params) => (
            <div className="flex items-center justify-center gap-4 w-full h-full">
              <span className="text-xs">${params.row.product.price}</span>
            </div>
          ),
        
      },
      { 
          field: 'orderStatus', 
          headerName: 'Tình trạng đơn hàng', 
          width: isMobile && 160, 
          flex : isMobile ? 0 : 1,
          headerAlign: 'center',
          align: 'center', 
          renderCell: (params) => (
              <div className="flex items-center justify-center gap-4 w-full h-full">
                <span className="text-xs">{(params.row.status === "waitPay" ? "Chờ xuất hàng" : params.row.status === "waitDelivery" ? "Xuất hàng thành công" : params.row.status === "delivering" ? "Đang giao hàng" :  params.row.status === "successfull" ? "Đã giao hàng" : "Bị hủy" )}</span>
              </div>
            ),
          
      },
      { 
        field: 'deliveryStatus', 
        headerName: 'Tình trạng giao hàng', 
        width: isMobile && 160, 
        flex : isMobile ? 0 : 1,
        headerAlign: 'center',
        align: 'center', 
        renderCell: (params) => (
            <div className="flex items-center justify-center gap-4 w-full h-full">
              <span className="text-xs">{(params.row.status === "waitPay" ? "Đang chờ xử lý" : params.row.status === "waitDelivery" ? "Đã duyệt đơn hàng" : params.row.status === "delivering" ? "Đang giao hàng" :  params.row.status === "successfull" ? "Đã giao hàng" : "Bị hủy" )}</span>
            </div>
          ),
        
      },
      { 
        field: 'paymentStatus', 
        headerName: 'Tình trạng thanh toán', 
        width: isMobile && 160, 
        flex : isMobile ? 0 : 1,
        headerAlign: 'center',
        align: 'center', 
        renderCell: (params) => (
            <div className="flex items-center justify-center gap-4 w-full h-full">
              <span className="text-xs">{(params.row.status === "waitPay" ? "Chưa thanh toán" : params.row.status === "waitDelivery" ? "Đã thanh toán" : params.row.status === "delivering" ? "Đã thanh toán" :  params.row.status === "successfull" ? "Đã thanh toán" : "Đã hoàn tiền" )}</span>
            </div>
          ),
      },
      { 
        field: 'options', 
        headerName: 'Tùy chọn', 
        width: isMobile && 160, 
        flex : isMobile ? 0 : 1,
        headerAlign: 'center',
        align: 'center', 
        renderCell: (params) => (
            <div className="flex items-center justify-center gap-4 w-full h-full">
              <Link to={`${"/order_store"}/${params.row._id}`} className="h-8 w-8 bg-slate-200 items-center justify-center flex rounded-full ">
                <Eye className="h-4 w-4" color="blue" />
              </Link>
            </div>
          ),
      },
    ];
    
    const fetchApiMyOrders = async() => {
        const res = await apiGetOrderById()
        setProducts(res)
    }
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handlePaymentStore = async () => {
        const res = await apiOrderPaymentStore({ orderId : selectedIds, totalPayment, profitPayment })
        if(res?.success){
            toast.success("Thanh toán thành công")
            fetchApiMyOrders()
            setOpen(false)
            
        }else{
          toast.error(res?.msg)
        }
      }
      const totalPayment = products && products?.reduce((total, product) => {
        if (selectedIds?.includes(product?._id)) {
        return total + (Number(product?.product?.price) * product?.quantity); 
        }
        return total;  
    }, 0)
    const profitPayment = products &&  products?.reduce((total, product) => {
        if (selectedIds?.includes(product?._id)) {
        return total + ((Number(product?.product?.price) * 20 / 100)) * product?.quantity; 
        }
        return total;  
    }, 0)
    const filteredProducts = products?.filter((product) => {
        if(product?.status === "waitPay") { 
            return product?._id?.toLowerCase()?.includes(search?.toLowerCase()) || 
            product?.status?.toLowerCase()?.includes(search?.toLowerCase()) || search ===  "waitDelivery" && product?.status?.toLowerCase() === "successfull" || search ===  "waitDelivery" && product?.status?.toLowerCase() === "delivering" 
        }
       if(search.length > 0) {
        return product?._id?.toLowerCase()?.includes(search?.toLowerCase()) || 
            product?.status?.toLowerCase()?.includes(search?.toLowerCase()) || search ===  "waitDelivery" && product?.status?.toLowerCase() === "successfull" || search ===  "waitDelivery" && product?.status?.toLowerCase() === "delivering" 
       }
    }     
    );

    const handleSelectionChange = (newSelection) => {
      setSelectedIds(newSelection);
    }
    useEffect(() => {
        fetchApiMyOrders()
    }, [])
  return (
    <div className="flex flex-col gap-4">
        <h3 className="text-black font-semibold md:hidden max-sm:text-xs">Các sản phẩm trong kho</h3>
        {/* <div className="grid grid-cols-4 gap-8 max-sm:grid-cols-2 ">
            <div className="px-6 py-6 border h-44 max-sm:h-34 flex items-center justify-center rounded-lg bg-[#eb4786]">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <Upload color="white" className="max-sm:w-6 max-sm:h-6"/>
                    <span className="text-3xl font-semibold text-white max-sm:text-lg ">5</span>
                    <span className="text-white font-semibold max-sm:text-[10px]">Sản phẩm hiện có</span>
                </div>
            </div>
            <div className="bg-white px-6 py-6 border h-44 max-sm:h-34 flex items-center justify-center rounded-lg cursor-pointer hover:shadow-lg">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <span className="text-[#0277BD] font-semibold max-sm:text-[10px]">Thêm sản phẩm mới</span>
                    {fileSvgAdd}
                </div>
            </div>
            <div className="bg-white px-6 py-6 border h-44 max-sm:h-34 flex items-center justify-center rounded-lg hover:shadow-lg">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <span className="text-[#0277BD] font-semibold max-sm:text-[10px]">Cài đặt cửa hàng</span>
                    {fileSvgSetting}
                    <button className="bg-[#0277BD] text-white px-12 py-2 rounded-lg max-sm:text-[10px] max-sm:px-4 max-sm:py-1">Đi tới cài đặt</button>
                </div>
            </div>
            <div className="bg-white px-6 py-6 border h-44 max-sm:h-34 flex items-center justify-center rounded-lg cursor-pointer hover:shadow-lg">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <span className="text-[#0277BD] font-semibold max-sm:text-[10px]">Rút tiền</span>
                    {fileSvgWithDraw}
                </div>
            </div>
        </div> */}
        <div className="flex flex-col gap-4 ">
            <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-2">
                <h3 className="text-black font-semibold max-sm:text-xs max-sm:hidden">Đơn hàng</h3>
                {filteredProducts.length > 0 ? <button onClick={handleClickOpen} className="bg-[#0277BD] text-white px-12 py-4 rounded-lg max-sm:text-[10px] max-sm:px-28 max-sm:py-4 max-sm:hidden">Thanh toán tất cả đơn hàng</button> : <button onClick={handleClickOpen} className="bg-[#0277BD] text-white px-12 py-4 rounded-lg max-sm:text-[10px] max-sm:px-28 max-sm:py-4 md:hidden max-sm:hidden">Thanh toán tất cả đơn hàng</button>}
                <Autocomplete
                    disablePortal
                    options={statusPayment?.map((option) => option.name)}
                    sx={{ width: isMobile ? "100%" : 300 }}
                    onChange={(event, newValue) => {
                        if(newValue === "Chưa thanh toán") setSearch("waitPay")
                        if(newValue === "Đã thanh toán") setSearch("waitDelivery")
                        if(newValue === "Đã hoàn tiền") setSearch("canceled")
                    }}
                    renderInput={(params) => <TextField {...params} label="Lọc theo trạng thái phân phối" />}
                />
                <Autocomplete
                    disablePortal
                    options={statusDelivery?.map((option) => option.name)}
                    sx={{ width: isMobile ? "100%" : 300 }}
                    onChange={(event, newValue) => {
                        if(newValue === "Chờ xuất hàng") setSearch("waitPay")
                        if(newValue === "Xuất hàng thành công") setSearch("waitDelivery")
                        if(newValue === "Đang giao hàng") setSearch("delivering")
                        if(newValue === "Đã giao hàng") setSearch("successfull")
                        if(newValue === "Đã hủy") setSearch("canceled")
                    }}
                    onClick={() => setSearch("")}
                    renderInput={(params) => <TextField {...params} label="Lọc theo trạng thái phân phối" />}
                />
                <TextField 
                    label="Nhập mã đặt hàng" 
                    variant="outlined" 
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{  width : isMobile ? "100%" :  600  }} 
                />
                 <button className="bg-[#0277BD] text-white px-12 py-4 rounded-lg max-sm:text-[10px] max-sm:w-full max-sm:py-4 md:hidden" onClick={handleClickOpen}>Thanh toán tất cả đơn hàng</button>

            </div>
            <React.Fragment>
          
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Thanh toán đơn hàng
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div className="px-20 max-sm:px-0 flex-col gap-4 flex ">
                       <div className="bg-[#d4edda] px-20 py-6 max-sm:px-10 max-sm:py-4">
                            <span className="text-[#155724] font-semibold max-sm:text-xs">Thanh toán bằng ví ${totalPayment}</span>
                        </div>
                        <div className="bg-[#d4edda] px-20 py-6 max-sm:px-10 max-sm:py-4">
                            <span className="text-[#155724] font-semibold max-sm:text-xs">Lợi nhuận ${profitPayment}</span>
                       </div>
                    </div>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Hủy bỏ</Button>
                <Button onClick={handlePaymentStore} autoFocus>
                    Thanh toán
                </Button>
                </DialogActions>
            </Dialog>
            </React.Fragment>
            <Box sx={{ width: '100%' }}>
                <DataGrid
                // unstable_rowSpanning
                disableRowSelectionOnClick
                // hideFooter
                showCellVerticalBorder
                showColumnVerticalBorder
                slots={{
                    noRowsOverlay: CustomNoRowsOverlay,
                  }}
                rowHeight={120}
                rows={filteredProducts}
                columns={columns}
                getRowId={(row) => row._id}
                initialState={{
                    pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
                    },
                }}
                
                pageSizeOptions={[5]}
                checkboxSelection
                onRowSelectionModelChange={handleSelectionChange} 
                />
                
            </Box>
        </div>
    </div>
   
  )
}

export default Order_Store