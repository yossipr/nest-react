import * as React from "react";
import { Link, Navigate } from "react-router-dom";

const Menu = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              <span data-feather="home" className="align-text-bottom">
                Main
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="/admin/products"
            >
              <span data-feather="home" className="align-text-bottom"></span>
              Admin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
