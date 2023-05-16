import React from "react";
import "./SideNav.css";
import { _remove } from "../../helper/storage";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // temporary

function SideNav() {
  // temporary redirection as it will be on profile setting
  const navigate = useNavigate();
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
                to="projects"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fa fa-cogs" aria-hidden="true"></i>
                Projects
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => {
                  _remove("auth");
                  navigate("/admin");
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default SideNav;
