import React from "react";
import { NavLink, Link } from "react-router-dom";

const mainNavigation = (props) => {
  return (
    <nav
      className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega bg-cyan-600 navbar-inverse"
      role="navigation"
    >
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggler collapsed"
          data-target="#site-navbar-collapse"
          data-toggle="collapse"
        >
          <i className="icon md-more" aria-hidden="true"></i>
        </button>
        <div
          className="navbar-brand navbar-brand-center site-gridmenu-toggle"
          data-toggle="gridmenu"
        >
          <img
            className="navbar-brand-logo"
            src="https://res.cloudinary.com/anstagram123/image/upload/v1616484448/dev_setups/white_smal_logo_wmp3zk.png"
            title="THREESTEPLEASE"
          />
          <span className="navbar-brand-text hidden-xs-down">
            THREESTEPLEASE
          </span>
        </div>
        <button
          type="button"
          className="navbar-toggler collapsed"
          data-target="#site-navbar-search"
          data-toggle="collapse"
        >
          <span className="sr-only">Toggle Search</span>
          <i className="icon md-search" aria-hidden="true"></i>
        </button>
      </div>

      <div className="navbar-container container-fluid">
        {/* <!-- Navbar Collapse --> */}
        <div
          className="collapse navbar-collapse navbar-collapse-toolbar"
          id="site-navbar-collapse"
        >
          {/* <!-- Navbar Toolbar --> */}
          <ul className="nav navbar-toolbar">
            <li className="nav-item dropdown dropdown-fw dropdown-mega">
              <a
                className="nav-link"
                data-toggle="dropdown"
                href="#"
                aria-expanded="false"
                data-animation="fade"
                role="button"
              >
                <i className="icon hamburger hamburger-arrow-left">
                  <span className="sr-only">Toggle menubar</span>
                  <span className="hamburger-bar"></span>
                </i>
              </a>
              <div className="dropdown-menu" role="menu">
                <div className="mega-content">
                  <div className="row">
                    <div className="col-md-4">
                      <h5>UI Kit</h5>
                      <ul className="blocks-2">
                        <li className="mega-menu m-0">
                          <ul className="list-icons">
                            <li>
                              <i
                                className="md-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <a href="advanced/animation.html">Animation</a>
                            </li>
                            <li>
                              <i
                                className="md-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <a href="uikit/buttons.html">Buttons</a>
                            </li>
                            <li>
                              <i
                                className="md-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <a href="uikit/colors.html">Colors</a>
                            </li>
                            <li>
                              <i
                                className="md-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <a href="uikit/dropdowns.html">Dropdowns</a>
                            </li>
                            <li>
                              <i
                                className="md-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <a href="uikit/icons.html">Icons</a>
                            </li>
                            <li>
                              <i
                                className="md-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <a href="advanced/lightbox.html">Lightbox</a>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu m-0">
                          <ul className="list-icons">
                            <li>
                              <i
                                className="md-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <a href="uikit/modals.html">Modals</a>
                            </li>
                            <li>
                              <i
                                className="md-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <a href="uikit/panel-structure.html">Panels</a>
                            </li>
                            <li>
                              <i
                                className="md-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <a href="structure/overlay.html">Overlay</a>
                            </li>
                            <li>
                              <i
                                className="md-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <a href="uikit/tooltip-popover.html ">Tooltips</a>
                            </li>
                            <li>
                              <i
                                className="md-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <a href="advanced/scrollable.html">Scrollable</a>
                            </li>
                            <li>
                              <i
                                className="md-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <a href="uikit/typography.html">Typography</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h5>
                        Media
                        <span className="badge badge-pill badge-success">
                          4
                        </span>
                      </h5>
                      <ul className="blocks-3">
                        <li>
                          <a
                            className="thumbnail m-0"
                            href="javascript:void(0)"
                          >
                            <img
                              className="w-full"
                              // src="../../global/photos/placeholder.png"
                              alt="..."
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            className="thumbnail m-0"
                            href="javascript:void(0)"
                          >
                            <img
                              className="w-full"
                              // src="../../global/photos/placeholder.png"
                              alt="..."
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            className="thumbnail m-0"
                            href="javascript:void(0)"
                          >
                            <img
                              className="w-full"
                              // src="../../global/photos/placeholder.png"
                              alt="..."
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            className="thumbnail m-0"
                            href="javascript:void(0)"
                          >
                            <img
                              className="w-full"
                              // src="../../global/photos/placeholder.png"
                              alt="..."
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            className="thumbnail m-0"
                            href="javascript:void(0)"
                          >
                            <img
                              className="w-full"
                              // src="../../global/photos/placeholder.png"
                              alt="..."
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            className="thumbnail m-0"
                            href="javascript:void(0)"
                          >
                            <img
                              className="w-full"
                              // src="../../global/photos/placeholder.png"
                              alt="..."
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h5 className="mb-0">Accordion</h5>
                      {/* <!-- Accordion --> */}
                      <div
                        className="panel-group panel-group-simple"
                        id="siteMegaAccordion"
                        aria-multiselectable="true"
                        role="tablist"
                      >
                        <div className="panel">
                          <div
                            className="panel-heading"
                            id="siteMegaAccordionHeadingOne"
                            role="tab"
                          >
                            <a
                              className="panel-title"
                              data-toggle="collapse"
                              href="#siteMegaCollapseOne"
                              data-parent="#siteMegaAccordion"
                              aria-expanded="false"
                              aria-controls="siteMegaCollapseOne"
                            >
                              Collapsible Group Item #1
                            </a>
                          </div>
                          <div
                            className="panel-collapse collapse"
                            id="siteMegaCollapseOne"
                            aria-labelledby="siteMegaAccordionHeadingOne"
                            role="tabpanel"
                          >
                            <div className="panel-body">
                              De moveat laudatur vestra parum doloribus labitur
                              sentire partes, eripuit praesenti congressus
                              ostendit alienae, voluptati ornateque accusamus
                              clamat reperietur convicia albucius.
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div
                            className="panel-heading"
                            id="siteMegaAccordionHeadingTwo"
                            role="tab"
                          >
                            <a
                              className="panel-title collapsed"
                              data-toggle="collapse"
                              href="#siteMegaCollapseTwo"
                              data-parent="#siteMegaAccordion"
                              aria-expanded="false"
                              aria-controls="siteMegaCollapseTwo"
                            >
                              Collapsible Group Item #2
                            </a>
                          </div>
                          <div
                            className="panel-collapse collapse"
                            id="siteMegaCollapseTwo"
                            aria-labelledby="siteMegaAccordionHeadingTwo"
                            role="tabpanel"
                          >
                            <div className="panel-body">
                              Praestabiliorem. Pellat excruciant legantur ullum
                              leniter vacare foris voluptate loco ignavi, credo
                              videretur multoque choro fatemur mortis animus
                              adoptionem, bello statuat expediunt naturales.
                            </div>
                          </div>
                        </div>

                        <div className="panel">
                          <div
                            className="panel-heading"
                            id="siteMegaAccordionHeadingThree"
                            role="tab"
                          >
                            <a
                              className="panel-title collapsed"
                              data-toggle="collapse"
                              href="#siteMegaCollapseThree"
                              data-parent="#siteMegaAccordion"
                              aria-expanded="false"
                              aria-controls="siteMegaCollapseThree"
                            >
                              Collapsible Group Item #3
                            </a>
                          </div>
                          <div
                            className="panel-collapse collapse"
                            id="siteMegaCollapseThree"
                            aria-labelledby="siteMegaAccordionHeadingThree"
                            role="tabpanel"
                          >
                            <div className="panel-body">
                              Horum, antiquitate perciperet d conspectum locus
                              obruamus animumque perspici probabis suscipere.
                              Desiderat magnum, contenta poena desiderant
                              concederetur menandri damna disputandum corporum.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Accordion --> */}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item hidden-float">
              <a
                className="nav-link icon md-search"
                data-toggle="collapse"
                href="#"
                data-target="#site-navbar-search"
                role="button"
              >
                <span className="sr-only">Toggle Search</span>
              </a>
            </li>
          </ul>
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
            <a href="index.html">
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
            </a>
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
