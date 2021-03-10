import React from "react";
import { Link } from "react-router-dom";

const sideNavigation = ({ location }) => {
  return (
    <>
      {/* Main sidebar */}
      <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md">
        {/* Sidebar mobile toggler */}
        <div className="sidebar-mobile-toggler text-center">
          <a href="#" className="sidebar-mobile-main-toggle">
            <i className="icon-arrow-left8"></i>
          </a>
          Navigation
          <a href="#" className="sidebar-mobile-expand">
            <i className="icon-screen-full"></i>
            <i className="icon-screen-normal"></i>
          </a>
        </div>
        {/* sidebar mobile toggler */}

        {/* Sidebar content */}
        <div className="sidebar-content">
          {/* Main navigation */}
          <div className="card card-sidebar-mobile">
            <ul className="nav nav-sidebar" data-nav-type="accordion">
              {/* Main */}
              <li className="nav-item-header">
                <div className="text-uppercase font-size-xs line-height-xs">
                  Pages
                </div>{" "}
                <i className="icon-menu" title="Main"></i>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                >
                  <i className="icon-home4"></i>
                  <span>Main</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/coordinate_map"
                  className={
                    location.pathname === "/coordinate_map"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <i className="icon-sphere"></i> <span>Same Coordinates</span>
                </Link>
              </li>
              <li className="nav-item nav-item-submenu">
                <Link to="#" className="nav-link">
                  <i className="icon-copy"></i> <span>Layouts</span>
                </Link>

                <ul className="nav nav-group-sub" data-submenu-title="Layouts">
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      Default layout
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      Layout 2
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      Layout 3
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      Layout 3
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      Layout 3
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link disabled">
                      Layout 6{" "}
                      <span className="badge bg-transparent align-self-center ml-auto">
                        Coming soon
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link">
                  <i className="icon-color-sampler"></i> <span>Themes</span>
                </a>

                <ul className="nav nav-group-sub" data-submenu-title="Themes">
                  <li className="nav-item">
                    <a href="index.html" className="nav-link active">
                      Default
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../../../LTR/material/full/index.html"
                      className="nav-link"
                    >
                      Material
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../../../LTR/dark/full/index.html"
                      className="nav-link"
                    >
                      Dark
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../../../LTR/clean/full/index.html"
                      className="nav-link disabled"
                    >
                      Clean{" "}
                      <span className="badge bg-transparent align-self-center ml-auto">
                        Coming soon
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link">
                  <i className="icon-stack"></i> <span>Starter kit</span>
                </a>

                <ul
                  className="nav nav-group-sub"
                  data-submenu-title="Starter kit"
                >
                  <li className="nav-item">
                    <a
                      href="../seed/layout_nav_horizontal.html"
                      className="nav-link"
                    >
                      Horizontal navigation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../seed/sidebar_none.html" className="nav-link">
                      No sidebar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../seed/sidebar_main.html" className="nav-link">
                      1 sidebar
                    </a>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">
                      2 sidebars
                    </a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item">
                        <a
                          href="../seed/sidebar_secondary.html"
                          className="nav-link"
                        >
                          Secondary sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../seed/sidebar_right.html"
                          className="nav-link"
                        >
                          Right sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">
                      3 sidebars
                    </a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item">
                        <a
                          href="../seed/sidebar_right_hidden.html"
                          className="nav-link"
                        >
                          Right sidebar hidden
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../seed/sidebar_right_visible.html"
                          className="nav-link"
                        >
                          Right sidebar visible
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">
                      Content sidebars
                    </a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item">
                        <a
                          href="../seed/sidebar_content_left.html"
                          className="nav-link"
                        >
                          Left sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../seed/sidebar_content_right.html"
                          className="nav-link"
                        >
                          Right sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="../seed/layout_boxed.html" className="nav-link">
                      Boxed layout
                    </a>
                  </li>
                  <li className="nav-item-divider"></li>
                  <li className="nav-item">
                    <a
                      href="../seed/navbar_fixed_main.html"
                      className="nav-link"
                    >
                      Fixed main navbar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../seed/navbar_fixed_secondary.html"
                      className="nav-link"
                    >
                      Fixed secondary navbar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../seed/navbar_fixed_both.html"
                      className="nav-link"
                    >
                      Both navbars fixed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../seed/layout_fixed.html" className="nav-link">
                      Fixed layout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* main navigation */}
        </div>
        {/* sidebar content */}
      </div>
      {/* main sidebar */}
    </>
  );
};

export default sideNavigation;
