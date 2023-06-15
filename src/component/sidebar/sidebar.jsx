import "../sidebar/sidebar.css";
import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="Sidebar">
      <Link to="/"><div className="Admin-title">MyAdmin</div></Link>
      <div className="Admin-option">
        <Link to="/Users"><div className="Admin-selects">Users</div></Link>
        <Link to="/Products"><div className="Admin-selects">Products</div></Link>
        <Link to="/Orders"><div className="Admin-selects">Orders</div></Link>
        <Link to="/CustomerInfo"><div className="Admin-selects">CustumerInfo</div></Link>
        <Link to="/AnalyticsChart"><div className="Admin-selects">AnalyticsChart</div></Link>
        <Link to="/AddProduct"><div className="Admin-selects">AddProducts</div></Link>
      </div>
    </div>
  );
}

export default Sidebar;
