import { Route, Routes, useNavigate } from "react-router-dom";
import path from "./utils/path";
import Public from "./pages/Public";
import "./index.css";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import { useMediaQuery } from "@mui/material";
import PublicResponsive from "./pages/Pubic.responsive";
import Search from "./pages/Search";
import Detail_product from "./pages/Detail_product";
import List_product from "./pages/List_product";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Setting from "./pages/Setting";
import Store from "./pages/Store";
import Store_detail from "./pages/Store_detail";
import Order from "./pages/Order";
import Portal from "./components/Portal";
import Dashboard from "./components/Dashboard";
import Userlist from "./components/Userlist";
import UserCreate from "./components/UserCreate";
import UserView from "./components/UserView";
import UserEdit from "./components/UserEdit";
import LoginAdmin from "./components/LoginAdmin";
import { getCurrent } from "./stores/actions/userAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";
import ProductView from "./components/ProductView";
import ProductEdit from "./components/ProductEdit";
import StoreList from "./components/StoreList";
import StoreCreate from "./components/StoreCreate";
import StoreEdit from "./components/StoreEdit";
import OrderCart from "./components/OrderCart";
import LocationOrder from "./components/LocaltionOrder";
import Address_Order from "./components/Address_Order";
import Orderlist from "./components/Orderlist";
import OrderCreate from "./components/OrderCreate";
import StoreView from "./components/StoreView";
import OrderView from "./components/OrderView";
import OrderEdit from "./components/OrderEdit";
import RegisterStoreChoose from "./components/RegisterStoreChoose";
import RegisterStore from "./components/RegisterStore";
import UserDepositList from "./components/UserDepositList";
import UserDepositCreate from "./components/UserDepositCreate";
import UserDepositView from "./components/UserDepositView";
import UserDepositEdit from "./components/UserDepositEdit";
import StoreFromView from "./components/StoreFormView";
import StoreFormEdit from "./components/StoreFormEdit";
import StoreFormList from "./components/StoreFormList";
import Addnew_Address from "./components/Addnew_Address";
function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentData } = useSelector((state) => state.user);
   useEffect(() => {
    if (isLoggedIn && token) {
      setLoading(true);
      setTimeout(() => {
        dispatch(getCurrent());
        setLoading(false);
      }, 500);
    } 
  }, [isLoggedIn, token]);

  return (
 <>
    {loading ? <div className="flex w-full h-screen items-center justify-center">
      <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif"  /> 
    </div> : <div className="bg-white w-full">
      <Toaster />

      <Routes>
      {currentData && currentData?.role === "admin" ? <Route path='/' element={<Portal />}>
                <Route path='/' element={<Dashboard />} />
                <Route path='user-list' element={<Userlist />} />
                <Route path='create-user' element={<UserCreate />} />
                <Route path='user-view/:id/:userId' element={<UserView />} />
                <Route path='user-edit/:id' element={<UserEdit />} />
                <Route path='product-list' element={<ProductList />} />
                <Route path='create-product/:userId' element={<ProductCreate />} />
                <Route path='product-view/:id/:userId' element={<ProductView />} />
                <Route path='product-edit/:id' element={<ProductEdit />} />
                <Route path='store-list' element={<StoreList />} />
                <Route path='create-store' element={<StoreCreate />} />
                <Route path='store-view/:id' element={<StoreView />} />
                <Route path='store-edit/:id' element={<StoreEdit />} />
                <Route path='order-list' element={<Orderlist />} />
                <Route path='create-order' element={<OrderCreate />} />
                <Route path='order-view/:id' element={<OrderView />} />
                <Route path='order-edit/:id' element={<OrderEdit />} />
                <Route path='deposit-user-list' element={<UserDepositList />} />
                <Route path='deposit-user-create' element={<UserDepositCreate />} />
                <Route path='deposit-user-view/:id' element={<UserDepositView />} />
                <Route path='deposit-user-edit/:id' element={<UserDepositEdit />} />
                <Route path='store-list-form' element={<StoreFormList />} />
                <Route path='store-view-form/:id' element={<StoreFromView />} />
                <Route path='store-edit-form/:id' element={<StoreFormEdit />} />
              </Route> : 
           <>
            {isMobile ?   <Route path={path.PUBLIC} element={<PublicResponsive />}>
            <Route path={path.HOME} element={<FixedBottomNavigation />} />
            <Route path={path.SEARCH} element={<Search />} />
            <Route path={path.DETAIL_PRODUCT} element={<Detail_product />} />
            <Route path={path.LIST_PRODUCT} element={<List_product />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.SETTING} element={<Setting />} />
            <Route path={path.STORE} element={<Store />} />
            <Route path={path.DETAIL_STORE} element={<Store_detail />} />
            <Route path={path.ORDER} element={<Order />} />
            <Route path={path.ORDER_CART} element={<OrderCart />} />
            <Route path={path.ADD_LOCATION} element={<LocationOrder />} />
            <Route path={path.ADD_ADDRESS} element={<Address_Order />} />
            <Route path={path.REGISTER_STORE_CHOOSE} element={<RegisterStoreChoose />} />
            <Route path={path.REGISTER_STORE} element={<RegisterStore />} />
            <Route path={path.ADDNEW_ADDRESS} element={<Addnew_Address />} />
         
          </Route>  : <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<FixedBottomNavigation />} />
          <Route path={path.SEARCH} element={<Search />} />
          <Route path={path.DETAIL_PRODUCT} element={<Detail_product />} />
          <Route path={path.LIST_PRODUCT} element={<List_product />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.SETTING} element={<Setting />} />
          <Route path={path.STORE} element={<Store />} />
          <Route path={path.DETAIL_STORE} element={<Store_detail />} />
          <Route path={path.ORDER} element={<Order />} />
          <Route path={path.ORDER_CART} element={<OrderCart />} />
          <Route path={path.ADD_LOCATION} element={<LocationOrder />} />
          <Route path={path.ADD_ADDRESS} element={<Address_Order />} />
          <Route path={path.REGISTER_STORE_CHOOSE} element={<RegisterStoreChoose />} />
          <Route path={path.REGISTER_STORE} element={<RegisterStore />} />
          <Route path={path.ADDNEW_ADDRESS} element={<Addnew_Address />} />
         

        </Route>}
        {currentData?.role === "agent" && <Route path='/'   element={<Portal />}>
            <Route path='/dashboard'  element={<Dashboard />} />
                <Route index path='user-list' element={<Userlist />} />
                <Route index path='create-user' element={<UserCreate />} />
                <Route index path='user-view/:id/:userId' element={<UserView />} />
                <Route index path='user-edit/:id' element={<UserEdit />} />
                <Route index path='product-list' element={<ProductList />} />
                <Route index path='create-product/:userId' element={<ProductCreate />} />
                <Route index path='product-view/:id/:userId' element={<ProductView />} />
                <Route index path='product-edit/:id' element={<ProductEdit />} />
                <Route index path='store-list' element={<StoreList />} />
                <Route index path='create-store' element={<StoreCreate />} />
                <Route index path='store-view/:id' element={<StoreView />} />
                <Route index path='store-edit/:id' element={<StoreEdit />} />
                <Route index path='order-list' element={<Orderlist />} />
                <Route index path='create-order' element={<OrderCreate />} />
                <Route index path='order-view/:id' element={<OrderView />} />
                <Route index path='order-edit/:id' element={<OrderEdit />} />
              </Route>}  
            </>}
          
         
        
              
      
              </Routes>

    </div>}</>
  );
}

export default App;
