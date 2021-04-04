import React from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";

const mainNavigation = (props) => {
  return (
    <nav
      className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega bg-cyan-600 navbar-inverse"
      role="navigation"
    >
      <div className="navbar-header">
        <DropDownMenu isHome={props.isHome} />
        <div
          className="navbar-brand navbar-brand-center site-gridmenu-toggle"
          data-toggle="gridmenu"
        >
          <Link to="/">
            <img
              className="navbar-brand-logo"
              src="https://res.cloudinary.com/anstagram123/image/upload/v1616484448/dev_setups/white_smal_logo_wmp3zk.png"
              title="THREESTEPLEASE"
            />
            <span className="navbar-brand-text hidden-xs-down text-white">
              THREESTEPLEASE
            </span>
          </Link>
        </div>

        <ul className="nav navbar-toolbar navbar-right navbar-toolbar-right">
          <li className="nav-item hidden-sm-down" id="toggleFullscreen">
            <a
              className="nav-link icon icon-fullscreen"
              data-toggle="fullscreen"
              href="#"
              role="button"
            >
              <span className="sr-only">Toggle fullscreen</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <i className="icon md-notifications" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-container container-fluid">
        {/* <!-- Navbar Collapse --> */}
        <div
          className="collapse navbar-collapse navbar-collapse-toolbar"
          id="site-navbar-collapse"
        >
          {/* <!-- Navbar Toolbar --> */}
          <DropDownMenu isHome={props.isHome} />
          {/* <!-- End Navbar Toolbar --> */}

          {/* <!-- Navbar Toolbar Right --> */}
          <ul className="nav navbar-toolbar navbar-right navbar-toolbar-right">
            <li className="nav-item hidden-sm-down" id="toggleFullscreen">
              <a
                className="nav-link icon icon-fullscreen"
                data-toggle="fullscreen"
                href="#"
                role="button"
              >
                <span className="sr-only">Toggle fullscreen</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="icon md-notifications" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          {/* <!-- End Navbar Toolbar Right --> */}

          <div className="navbar-brand navbar-brand-center">
            <Link to="/">
              <img
                className="navbar-brand-logo navbar-brand-logo-normal"
                src="https://res.cloudinary.com/anstagram123/image/upload/v1616484448/dev_setups/white_smal_logo_wmp3zk.png"
                title="THREESTEPLEASE"
              />
              <img
                className="navbar-brand-logo navbar-brand-logo-special"
                src="https://res.cloudinary.com/anstagram123/image/upload/v1616518702/dev_setups/black_small_logo_i8satl.png"
                title="THREESTEPLEASE"
              />
            </Link>
          </div>
        </div>
        {/* <!-- End Navbar Collapse --> */}

        {/* <!-- Site Navbar Seach --> */}
        <div className="collapse navbar-search-overlap" id="site-navbar-search">
          <form role="search">
            <div className="form-group">
              <div className="input-search">
                <i
                  className="input-search-icon md-search"
                  aria-hidden="true"
                ></i>
                <input
                  type="text"
                  className="form-control"
                  name="site-search"
                  placeholder="Search..."
                />
                <button
                  type="button"
                  className="input-search-close icon md-close"
                  data-target="#site-navbar-search"
                  data-toggle="collapse"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </form>
        </div>
        {/* <!-- End Site Navbar Seach --> */}
      </div>
    </nav>
  );
};

export default mainNavigation;
