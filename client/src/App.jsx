import { Route, Routes, useNavigate } from "react-router-dom";
import path from "./utils/path";
import Public from "./pages/Public";
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
import Userlist from "./components/Userlist";
import UserCreate from "./components/UserCreate";
import UserView from "./components/UserView";
import UserEdit from "./components/UserEdit";
import { getCurrent } from "./stores/actions/userAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import EditProfileUser from "./components/EditProfileUser";
import PasswordChange from "./components/PasswordChange";
import Wallet from "./pages/Wallet";
import Edit_Address from "./components/Edit_Address";
import Buy_Product_From_Admin from "./pages/Buy_Product_From_Admin";
import Detail_product_agent from "./pages/Detail_product_agent";
import WithDrawalHistory from "./components/WithDrawalHistory";
import DepositHistory from "./components/DepositHistory";
import UpdateBank from "./pages/UpdateBank";
import WithDrawByAdmin from "./pages/WithDrawByAdmin";
import TransformHistory from "./pages/TransformHistory";
import Botlist from "./components/Botlist";
import BotCreate from "./components/BotCreate";
import BotView from "./components/BotView";
import BotEdit from "./components/BotEdit";
import BookProductFromStore from "./pages/BookProductFromStore";
import Order_Cart from "./pages/Order_Cart";
function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { isLoggedIn, token } = useSelector((state) => state.auth);
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
  }, [isLoggedIn, token, dispatch]);
  function clearIndexedDB() {
    // Kiểm tra xem trình duyệt có hỗ trợ IndexedDB không
    if (!window.indexedDB) {
      console.log("IndexedDB is not supported by this browser.");
      return;
    }
  
    // Lấy tất cả các database hiện có trong trình duyệt
    const request = indexedDB?.open("your-database-name", 1); // Đặt tên cho database của bạn
  
    request.onsuccess = (event) => {
      const db = event?.target?.result;
      const transaction = db?.transaction(db?.objectStoreNames, "readwrite");
  
      // Lặp qua tất cả các object store và xóa tất cả dữ liệu
      for (let storeName of db.objectStoreNames) {
        const objectStore = transaction?.objectStore(storeName);
        const clearRequest = objectStore?.clear(); // Xóa tất cả dữ liệu trong object store
  
        clearRequest.onsuccess = () => {
          console.log(`Successfully cleared store: ${storeName}`);
        };
  
        clearRequest.onerror = (error) => {
          console.error(`Failed to clear store: ${storeName}`, error);
        };
      }
  
      transaction.oncomplete = () => {
        db.close();
        console.log("IndexedDB cache cleared successfully.");
      };
  
      transaction.onerror = (error) => {
        console.error("Transaction error: ", error);
      };
    };
  
    request.onerror = (error) => {
      console.error("Error opening IndexedDB: ", error);
    };
  }
  useEffect(() => {
    clearIndexedDB();
    sessionStorage.clear();

    if ('caches' in window) {
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          caches.delete(cacheName); 
        });
      });
    }
  }, []); 
  return (
 <>
    {loading ? <div className="flex w-full h-screen items-center justify-center">
      <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif"  /> 
    </div> : <div className="bg-white w-full">
      <Toaster />

      <Routes>
      {isLoggedIn && token && currentData && currentData?.role === "admin" ? <Route path='/' element={<Portal />}>
               {/* {!isMobile &&  <Route  path='/' element={<Dashboard />} />} */}
                <Route path='user-list' element={<Userlist />} />
                <Route path='create-user' element={<UserCreate />} />
                <Route path='user-view/:id/:userId' element={<UserView />} />
                <Route path='user-edit/:id' element={<UserEdit />} />
                <Route path='bot-list' element={<Botlist />} />
                <Route path='create-bot' element={<BotCreate />} />
                <Route path='bot-view/:id/:userId' element={<BotView />} />
                <Route path='bot-edit/:id' element={<BotEdit />} />
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
                <Route path={path.BUY_PRODUCT} element={<Buy_Product_From_Admin />} />
                <Route path={path.WITHDRAW_ADMIN} element={<WithDrawByAdmin />} />
                <Route path={path.TRANSFORM_HISTORY} element={<TransformHistory />} />
                <Route path={path.BOOK_PRODUCT} element={<BookProductFromStore />} />
                <Route path={path.ORDER_CART} element={<Order_Cart />} />

              </Route> : 
           <>
            { isMobile ?  <Route path={path.PUBLIC} element={<PublicResponsive />}>
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
            <Route path={path.EDIT_PROFILE_USER} element={<EditProfileUser />} />
            <Route path={path.CHANGE_PASSWORD} element={<PasswordChange />} />
            <Route path={path.WALLET} element={<Wallet />} />
            <Route path={path.WITHDRAW_WALLET} element={<WithDrawalHistory />} />
            <Route path={path.DEPOSIT_WALLET} element={<DepositHistory />} />
            <Route path={path.UPDATE_BANK} element={<UpdateBank />} />
         
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
          <Route path={path.EDIT_PROFILE_USER} element={<EditProfileUser />} />
          <Route path={path.CHANGE_PASSWORD} element={<PasswordChange />} />
          <Route path={path.WALLET} element={<Wallet />} />
          <Route path={path.UPDATE_ADDRESS} element={<Edit_Address />} />
          <Route path={path.WITHDRAW_WALLET} element={<WithDrawalHistory />} />
          <Route path={path.DEPOSIT_WALLET} element={<DepositHistory />} />
          <Route path={path.UPDATE_BANK} element={<UpdateBank />} />

         
        </Route>}
        {isLoggedIn && token && currentData && currentData?.role === "agent" && <Route path='/'   element={<Portal />}>
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
                <Route path={path.UPDATE_ADDRESS} element={<Edit_Address />} />     
                <Route path={path.BUY_PRODUCT} element={<Buy_Product_From_Admin />} />
                <Route path={path.DETAIL_PRODUCT_AGENT} element={<Detail_product_agent />} />

        </Route>}  
                

            </>}

              </Routes>

    </div>}</>
  );
}

export default App;
