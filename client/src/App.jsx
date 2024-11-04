import { Route, Routes } from "react-router-dom";
import path from "./utils/path";
import Public from "./pages/Public";
import "./index.css";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import { useMediaQuery } from "@mui/material";
import PublicResponsive from "./pages/Pubic.responsive";
import Search from "./pages/Search";
function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div className="bg-white w-full">
      <Routes>
        {isMobile ? (
          <Route path={path.PUBLIC} element={<PublicResponsive />}>
            <Route path={path.HOME} element={<FixedBottomNavigation />} />
          </Route>
        ) : (
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<FixedBottomNavigation />} />
            <Route path={path.SEARCH} element={<Search />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
