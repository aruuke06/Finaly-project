import React from "react";
import { Outlet, NavLink } from "react-router-dom";
// import "../pages/admin/admin.css";
import "../../PAGES/admin.css";

function AdminLayout() {
  return (
    <div className="admin">
      <div className="admin__container">
        <nav className="admin-nav">
          <NavLink to="/admin" end className="admin-nav__link">
            Dashboard
          </NavLink>
          <NavLink to="/admin/products" className="admin-nav__link">
            Products
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;

