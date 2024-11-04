import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Public = () => {
  const path = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return (
    <div className="lg:w-[30%] lg:mx-auto w-full">
      <Outlet />
    </div>
  );
};

export default Public;
