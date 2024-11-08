import { Route, Routes } from "react-router-dom";
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
function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div className="bg-white w-full">
      <Toaster />

      <Routes>
        {isMobile ? (
          <Route path={path.PUBLIC} element={<PublicResponsive />}>
            <Route path={path.HOME} element={<FixedBottomNavigation />} />
            <Route path={path.SEARCH} element={<Search />} />
            <Route path={path.DETAIL_PRODUCT} element={<Detail_product />} />
            <Route path={path.LIST_PRODUCT} element={<List_product />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.SETTING} element={<Setting />} />
            <Route path={path.STORE} element={<Store />} />
            <Route path={path.DETAIL_STORE} element={<Store_detail />} />
            <Route path={path.ORDER} element={<Order />} />


          </Route>
        ) : (
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<FixedBottomNavigation />} />
            <Route path={path.SEARCH} element={<Search />} />
            <Route path={path.DETAIL_PRODUCT} element={<Detail_product />} />
            <Route path={path.LIST_PRODUCT} element={<List_product />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.SETTING} element={<Setting />} />
            <Route path={path.STORE} element={<Store />} />
            <Route path={path.DETAIL_STORE} element={<Store_detail />} />
            <Route path={path.ORDER} element={<Order />} />
          </Route>
        )}
      </Routes>

    </div>
  );
}

export default App;
