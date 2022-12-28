import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Portal() {
    return (
      <div>
        <div className="d-flex">
          <div className="col-2">
      <Sidebar></Sidebar>
      </div>
      
      <div className="col-10">
      
        <Topbar></Topbar>
         <Outlet/>
        </div>
      </div>
      </div>
      
    )
  }
  export default Portal;