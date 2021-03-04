import React from "react";
import { NavLink, Link } from "react-router-dom";

const mainNavigation = (props) => {
  return (
    <div class="navbar navbar-expand-md navbar-light fixed-top">
      {/* Header with logos */}
      <div class="navbar-header navbar-dark d-none d-md-flex align-items-md-center">
        <div class="navbar-brand navbar-brand-md">
          <NavLink to="/" class="d-inline-block">
            <img
              src="https://res.cloudinary.com/anstagram123/image/upload/v1614875896/dev_setups/logo_light_pettms.png"
              alt=""
            />
          </NavLink>
        </div>

        <div class="navbar-brand navbar-brand-xs">
          <NavLink to="/" class="d-inline-block">
            <img
              src="https://res.cloudinary.com/anstagram123/image/upload/v1614876568/dev_setups/logo_c1n8cr.png"
              alt=""
            />
          </NavLink>
        </div>
      </div>
      {/* header with logos */}

      {/* Mobile controls */}
      <div class="d-flex flex-1 d-md-none">
        <div class="navbar-brand mr-auto">
          <NavLink to="/" class="d-inline-block">
            <img
              src="https://res.cloudinary.com/anstagram123/image/upload/v1614875300/dev_setups/logo_dark_cwjgcz.png"
              alt=""
            />
          </NavLink>
        </div>

        <button class="navbar-toggler sidebar-mobile-main-toggle" type="button">
          <i class="icon-paragraph-justify3"></i>
        </button>
      </div>
      {/* mobile controls */}

      {/* Navbar content */}
      <div class="collapse navbar-collapse" id="navbar-mobile">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link
              to="#"
              class="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block"
            >
              <i class="icon-paragraph-justify3"></i>
            </Link>
          </li>
        </ul>
        {/* <span class="badge badge-pill ml-md-3 mr-md-auto"> </span>
        <ul class="navbar-nav">
          <li class="nav-item">
            <span class="badge bg-pink-400 badge-pill ml-md-3 mr-md-auto">
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
