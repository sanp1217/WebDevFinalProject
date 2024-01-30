import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <NavLink className="navbar-brand" to="/">
          <p
            className="navbar-text text-white text-center fs-4"
            style={{ width: "25%" }}
          >
            Game List
          </p>
        </NavLink>

        <div className="ml-auto d-flex align-items-center" id="collapseNavbar">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink className="nav-link" to="/reviews">
                My Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
