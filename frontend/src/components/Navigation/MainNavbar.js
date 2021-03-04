import React from "react";
import { NavLink, Link } from "react-router-dom";

const mainNavigation = (props) => {
  return (
    <div className="navbar navbar-expand-md navbar-light fixed-top">
      {/* Header with logos */}
      <div className="navbar-header navbar-dark d-none d-md-flex align-items-md-center">
        <div className="navbar-brand navbar-brand-md">
          <NavLink to="/" className="d-inline-block">
            <img
              src="https://res.cloudinary.com/anstagram123/image/upload/v1614875896/dev_setups/logo_light_pettms.png"
              alt=""
            />
          </NavLink>
        </div>

        <div className="navbar-brand navbar-brand-xs">
          <NavLink to="/" className="d-inline-block">
            <img
              src="https://res.cloudinary.com/anstagram123/image/upload/v1614876568/dev_setups/logo_c1n8cr.png"
              alt=""
            />
          </NavLink>
        </div>
      </div>
      {/* header with logos */}

      {/* Mobile controls */}
      <div className="d-flex flex-1 d-md-none">
        <div className="navbar-brand mr-auto">
          <NavLink to="/" className="d-inline-block">
            <img
              src="https://res.cloudinary.com/anstagram123/image/upload/v1614875300/dev_setups/logo_dark_cwjgcz.png"
              alt=""
            />
          </NavLink>
        </div>

        <button
          className="navbar-toggler sidebar-mobile-main-toggle"
          type="button"
        >
          <i className="icon-paragraph-justify3"></i>
        </button>
      </div>
      {/* mobile controls */}

      {/* Navbar content */}
      <div className="collapse navbar-collapse" id="navbar-mobile">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="#"
              className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block"
            >
              <i className="icon-paragraph-justify3"></i>
            </Link>
          </li>
        </ul>
        {/* <span className="badge badge-pill ml-md-3 mr-md-auto"> </span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <span className="badge bg-pink-400 badge-pill ml-md-3 mr-md-auto">
              공지사항
            </span>
          </li>
        </ul> */}
      </div>
      {/* navbar content */}
    </div>
  );
};

export default mainNavigation;
