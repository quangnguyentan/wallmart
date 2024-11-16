import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./sb-admin-2.min.css";

function Portal() {
  return (
    <>
      <div id="wrapper" className="scrollbar-hide h-screen">
        <div className="overflow-y-scroll h-screen scrollbar-hide max-sm:hidden">
          <Sidebar />
        </div>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content" className="overflow-y-scroll h-screen scrollbar-hide">
            <Topbar />
            <div className="container-fluid overflow-y-scroll h-screen scrollbar-hide pb-10">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portal;
