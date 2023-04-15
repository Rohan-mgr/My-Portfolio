import React from "react";
import "./SideNav.css";
// import { ROUTES } from "../../helper/routes";
// import { _removeAllLs, _getSecureLs } from "../../helper/storage";
import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <aside className="main-sidebar sidebar-dark-primary ">
      <a
        href="/admin/dashboard"
        className="brand-link d-flex align-items-center"
      >
        <img src={require("../../Assets/Images/logo.png")} alt="logo" />
      </a>

      <div className="sidebar ">
        <nav className="d-flex flex-column justify-content-between align-items-between">
          <ul className="nav nav-pills nav-sidebar flex-column" role="menu">
            <li className="nav-item">
              <NavLink
                exact
                to="welcome"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fa fa-house-user" aria-hidden="true"></i>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="resume"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fa fa-house-user" aria-hidden="true"></i>
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default SideNav;
