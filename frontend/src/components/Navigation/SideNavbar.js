import React from "react";
import { Link } from "react-router-dom";

const sideNavigation = ({ location }) => {
  return (
    <>
      {/* Main sidebar */}
      <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md">
        {/* Sidebar mobile toggler */}
        <div className="sidebar-mobile-toggler text-center">
          <Link to="#" className="sidebar-mobile-main-toggle">
            <i className="icon-arrow-left8"></i>
          Navigation
          </Link>
          <Link to="#" className="sidebar-mobile-expand">
            <i className="icon-screen-full"></i>
            <i className="icon-screen-normal"></i>
          </Link>
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
                  to="/same_coordinates"
                  className={
                    location.pathname === "/same_coordinates"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <i className="icon-location4"></i>{" "}
                  <span>Same Coordinates</span>
                </Link>
              </li>
              <li className="nav-item nav-item-submenu">
                <Link
                  to="#"
                  className={
                    location.pathname.substr(1, 4) === "city"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <i className="icon-city"></i> <span>Cities</span>
                </Link>
                <ul className="nav nav-group-sub" data-submenu-title="Cities">
                  <li className="nav-item">
                    <Link
                      to="/city/42"
                      className={
                        location.pathname.substr(6, 2) === "42"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      강원
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/41"
                      className={
                        location.pathname.substr(6, 2) === "41"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      경기
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/48"
                      className={
                        location.pathname.substr(6, 2) === "48"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      경남
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/47"
                      className={
                        location.pathname.substr(6, 2) === "47"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      경북
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/29"
                      className={
                        location.pathname.substr(6, 2) === "29"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      광주
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/27"
                      className={
                        location.pathname.substr(6, 2) === "27"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      대구
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/30"
                      className={
                        location.pathname.substr(6, 2) === "30"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      대전
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/26"
                      className={
                        location.pathname.substr(6, 2) === "26"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      부산
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/11"
                      className={
                        location.pathname.substr(6, 2) === "11"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      서울
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/36"
                      className={
                        location.pathname.substr(6, 2) === "36"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      세종
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/31"
                      className={
                        location.pathname.substr(6, 2) === "31"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      울산
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/28"
                      className={
                        location.pathname.substr(6, 2) === "28"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      인천
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/46"
                      className={
                        location.pathname.substr(6, 2) === "46"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      전남
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/45"
                      className={
                        location.pathname.substr(6, 2) === "45"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      전북
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/50"
                      className={
                        location.pathname.substr(6, 2) === "50"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      제주
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/44"
                      className={
                        location.pathname.substr(6, 2) === "44"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      충남
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/city/43"
                      className={
                        location.pathname.substr(6, 2) === "43"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      충북
                    </Link>
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
