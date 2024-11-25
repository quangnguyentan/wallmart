import { Upload } from "lucide-react"
import { DataGrid } from '@mui/x-data-grid';
import { Box, TextField, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { apiGetProduct } from "@/services/productService";
import { listLeftCategories, pathImage } from "@/lib/helper";
import Autocomplete from '@mui/material/Autocomplete';
import { apiAddToCart } from "@/services/userService";
import { apiAddToCartByStore } from "@/services/storeService";
import toast from "react-hot-toast";
const fileSvgWithDraw = <svg id="Group_22725" className="max-sm:w-6 max-sm:h-6" data-name="Group 22725" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
<path id="Path_108" d="M24,28.5A1.538,1.538,0,0,1,25.5,30v6a1.5,1.5,0,0,1-3,0V30A1.538,1.538,0,0,1,24,28.5" fill="#2E294E"></path>
<path id="Path_109" d="M36,21H33V43.5A1.538,1.538,0,0,1,31.5,45h-15A1.538,1.538,0,0,1,15,43.5V21H12V43.5A4.481,4.481,0,0,0,16.5,48h15A4.481,4.481,0,0,0,36,43.5Z" fill="#2E294E"></path>
<path id="Path_110" d="M43.5,0H4.5A4.481,4.481,0,0,0,0,4.5v9A4.481,4.481,0,0,0,4.5,18h39A4.481,4.481,0,0,0,48,13.5v-9A4.481,4.481,0,0,0,43.5,0M45,13.5A1.538,1.538,0,0,1,43.5,15H4.5A1.538,1.538,0,0,1,3,13.5v-9A1.538,1.538,0,0,1,4.5,3h39A1.538,1.538,0,0,1,45,4.5Z" fill="#2E294E"></path>
<path id="Path_111" d="M28.5,21h-9a4.5,4.5,0,0,0,9,0" fill="#2E294E"></path>
</svg>
const fileSvgAdd = <svg xmlns="http://www.w3.org/2000/svg" className="max-sm:w-6 max-sm:h-6" width="48" height="48" viewBox="0 0 48 48">
<g id="Group_22724" data-name="Group 22724"  transform="translate(-1284 -875)">
    <rect id="Rectangle_17080" data-name="Rectangle 17080" width="2" height="48" rx="1" transform="translate(1307 875)" fill="#2E294E"></rect>
    <rect id="Rectangle_17081" data-name="Rectangle 17081" width="2" height="48" rx="1" transform="translate(1332 898) rotate(90)" fill="#2E294E"></rect>
</g>
</svg>
const fileSvgSetting = <svg id="Group_31"  data-name="Group 31" xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="max-sm:w-6 max-sm:h-6" viewBox="0 0 32 32">
<path id="Path_78" data-name="Path 78" d="M2,25.723a1,1,0,0,0,.629.928L16,32l3.361-1.344a.5.5,0,0,0-.186-.965.491.491,0,0,0-.185.036L16,30.923l-13-5.2v-11.6a4.428,4.428,0,0,1-1-.2Z" fill="#2E294E"></path>
<path id="Path_79" data-name="Path 79" d="M19.681,24.189a.5.5,0,0,0-.5-.5.493.493,0,0,0-.186.036l-3,1.2L7.432,21.5a.5.5,0,0,0-.65.278.512.512,0,0,0-.035.186.5.5,0,0,0,.314.464L16,26l3.367-1.347a.5.5,0,0,0,.314-.464" fill="#2E294E"></path>
<path id="Path_80" data-name="Path 80" d="M31.5,25.126h-.087a1.368,1.368,0,0,1-.967-2.336l.061-.061a.5.5,0,0,0,0-.707l-.265-.265-.264-.264a.5.5,0,0,0-.707,0l-.061.06a1.368,1.368,0,0,1-2.336-.967V20.5a.5.5,0,0,0-.5-.5h-.748a.5.5,0,0,0-.5.5v.086a1.368,1.368,0,0,1-2.336.967l-.061-.06a.5.5,0,0,0-.707,0l-.265.264-.265.265a.5.5,0,0,0,0,.707l.061.061a1.368,1.368,0,0,1-.967,2.336H20.5a.5.5,0,0,0-.5.5v.748a.5.5,0,0,0,.5.5h.086a1.368,1.368,0,0,1,.967,2.336l-.061.061a.5.5,0,0,0,0,.707l.265.264.265.265a.5.5,0,0,0,.707,0l.061-.061a1.368,1.368,0,0,1,2.336.968V31.5a.5.5,0,0,0,.5.5h.748a.5.5,0,0,0,.5-.5v-.086a1.368,1.368,0,0,1,2.336-.968l.061.061a.5.5,0,0,0,.707,0l.264-.265.265-.264a.5.5,0,0,0,0-.707l-.061-.061a1.368,1.368,0,0,1,.967-2.336H31.5a.5.5,0,0,0,.5-.5v-.748a.5.5,0,0,0-.5-.5M29.171,29a2.373,2.373,0,0,0,.118.285,2.368,2.368,0,0,0-3.171,1.078,2.22,2.22,0,0,0-.118.285,2.369,2.369,0,0,0-3-1.481,2.516,2.516,0,0,0-.285.118A2.367,2.367,0,0,0,21.348,26a2.369,2.369,0,0,0,1.48-3,2.344,2.344,0,0,0-.118-.285,2.37,2.37,0,0,0,3.172-1.077A2.516,2.516,0,0,0,26,21.348a2.367,2.367,0,0,0,3,1.48,2.28,2.28,0,0,0,.285-.118,2.37,2.37,0,0,0,1.077,3.172,2.457,2.457,0,0,0,.286.118,2.367,2.367,0,0,0-1.481,3" fill="#2E294E"></path>
<path id="Path_81" data-name="Path 81" d="M27.5,26A1.5,1.5,0,1,0,26,27.5,1.5,1.5,0,0,0,27.5,26" fill="#2E294E"></path>
<path id="Path_82" data-name="Path 82" d="M16,0A46.43,46.43,0,0,1,0,8.4v2a3.451,3.451,0,0,0,5.333,2.133,3.452,3.452,0,0,0,5.333,2.134A3.453,3.453,0,0,0,16,16.8a3.451,3.451,0,0,0,5.333-2.133,3.451,3.451,0,0,0,5.333-2.134A3.454,3.454,0,0,0,32,10.4v-2A46.421,46.421,0,0,1,16,0M31.021,10.194a2.452,2.452,0,0,1-3.788,1.515,1,1,0,0,0-1.545.618A2.453,2.453,0,0,1,21.9,13.843a1,1,0,0,0-1.545.618A2.451,2.451,0,0,1,16,15.434a2.452,2.452,0,0,1-4.355-.973,1,1,0,0,0-1.545-.618,2.454,2.454,0,0,1-3.789-1.516,1,1,0,0,0-1.184-.772,1.015,1.015,0,0,0-.361.154A2.451,2.451,0,0,1,.978,10.194V9.148A47.458,47.458,0,0,0,16,1.277,47.442,47.442,0,0,0,31.021,9.148Z" fill="#2E294E"></path>
</svg>

const StoreHouse = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('');
    const [selectedIds, setSelectedIds] = useState([]);
    const isMobile = useMediaQuery("(max-width:600px)");
    const columns = [
      { 
          field: 'title', 
          headerName: 'Tên', 
          width: isMobile && 520, 
          flex : isMobile ? 0 : 4,
          headerAlign: 'center',
          align: 'center', 
          renderCell: (params) => (
              <div className="flex items-center gap-4 w-full h-full">
                  {params.row.photos && params.row.photos[0] && (
                  <img 
                    src={`${pathImage}/${params.row.photos[0]}`} 
                    alt="Product" 
                    style={{ width: 50, height: 50, objectFit: 'cover' }} 
                  />
                )}
                <span className="line-clamp-1 text-xs">{params.row.title}</span>
                
              </div>
            ),
          
      },
      { 
          field: 'category', 
          headerName: 'Thể loại', 
          width: isMobile && 160, 
          flex : isMobile ? 0 : 1,
          headerAlign: 'center',
          align: 'center', 
          renderCell: (params) => (
              <div className="flex items-center justify-center gap-4 w-full h-full">
                <span className="text-xs">{params.row.category}</span>
                
              </div>
            ),
          
      },
      { 
          field: 'inventory', 
          headerName: 'Số lượng hiện tại', 
          width: isMobile && 160, 
          flex : isMobile ? 0 : 1,
          headerAlign: 'center',
          align: 'center', 
          renderCell: (params) => (
              <div className="flex items-center justify-center gap-4 w-full h-full">
                <span className="text-xs">{params.row.inventory}</span>
              </div>
            ),
          
      },
      { 
          field: 'price', 
          headerName: 'Giá bán', 
          width: isMobile && 160, 
          flex : isMobile ? 0 : 1,
    
          headerAlign: 'center',
          align: 'center', 
          renderCell: (params) => (
              <div className="flex items-center justify-center gap-4 w-full h-full">
                <span className="text-xs">${params.row.price}</span>
              </div>
            ),
          
      },
      { 
          field: 'priceOld', 
          headerName: 'Giá kho', 
          width: isMobile && 160, 
          flex : isMobile ? 0 : 1,
          headerAlign: 'center',
          align: 'center', 
          renderCell: (params) => (
              <div className="flex items-center justify-center gap-4 w-full h-full">
                <span className="text-xs">${params.row.priceOld}</span>
              </div>
            ),
          
      },
      { 
          field: 'color', 
          headerName: 'Màu sắc', 
          width: isMobile && 160, 
          flex : isMobile ? 0 : 1,
          headerAlign: 'center',
          align: 'center', 
          renderCell: (params) => (
              <div className="flex items-center justify-center gap-4 w-full h-full">
                <span className="text-xs">{(params.row.color).join(",")}</span>
              </div>
            ),
          
      },
      { 
          field: 'size', 
          headerName: 'Kích thước', 
          width: isMobile && 160, 
          flex : isMobile ? 0 : 1,
          headerAlign: 'center',
          align: 'center', 
          renderCell: (params) => (
              <div className="flex items-center justify-center gap-4 w-full h-full">
                <span className="text-xs">{(params.row.size).join(",")}</span>
              </div>
            ),
          
      },
    ];
    
    const fetchApiProduct = async() => {
        const res = await apiGetProduct()
        setProducts(res)
    }
    const handleAddToCart = async() => {
      const res = await apiAddToCartByStore({productsInCart : selectedIds })
      if(res?.success) {
        toast.success("Thêm sản phẩm vào cửa hàng thành công")
      }else{
        toast.error(res?.msg)
      }
    }
    const filteredProducts = products.filter((product) => 
        product?.title?.toLowerCase()?.includes(search?.toLowerCase()) || 
        product?.category?.toLowerCase()?.includes(search?.toLowerCase())
    );
    const handleSelectionChange = (newSelection) => {
      setSelectedIds(newSelection);
    }
    useEffect(() => {
        fetchApiProduct()
    }, [])
  return (
    <div className="flex flex-col gap-4">
        <h3 className="text-black font-semibold md:hidden">Các sản phẩm trong kho</h3>
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
                <h3 className="text-black font-semibold max-sm:text-xs max-sm:hidden">Tất cả sản phẩm trong kho</h3>
                <Autocomplete
                    disablePortal
                    options={listLeftCategories?.flatMap((option) => 
                        option.category?.map((category) => category.name)
                      )}
                    sx={{ width: isMobile ? "100%" : 300 }}
                    onChange={(event, newValue) => {
                        setSearch(newValue)
                    }}
                    renderInput={(params) => <TextField {...params} label="Thể loại" />}
                />
                <TextField 
                    label="Tìm kiếm sản phẩm" 
                    variant="outlined" 
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{  width : isMobile ? "100%" :  600  }} 
                />
                <button className="bg-[#25bcf1] w-56 h-10 max-sm:w-full text-white rounded-full" onClick={handleAddToCart}>Thêm vào cửa hàng của tôi</button>

            </div>
            <Box sx={{ width: '100%' }}>
                <DataGrid
                // unstable_rowSpanning
                disableRowSelectionOnClick
                // hideFooter
                showCellVerticalBorder
                showColumnVerticalBorder
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

export default StoreHouse