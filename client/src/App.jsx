import { Route, Routes } from "react-router-dom";
import path from "./utils/path";
import Public from "./pages/Public";
import "./index.css";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import { useMediaQuery } from '@mui/material';
import MatchResponsive from "./pages/Match.responsive";
import PublicResponsive from "./pages/Pubic.responsive";
function App() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
      <>
      <Routes>
        {isMobile ? <Route path={path.PUBLIC} element={<PublicResponsive />}>
          <Route path={path.HOME} element={<FixedBottomNavigation />}/> 
          <Route path={path.MATCH} element={<MatchResponsive />} />
        </Route> :<Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<FixedBottomNavigation />}/> 
        </Route>}
       
      </Routes>
        
      </>
  );
}

export default App;
