import React from "react";
import { Link } from "react-router-dom";

const sideNavigation = (props) => {
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
          {/* User menu */}
          <div className="sidebar-user">
            <div className="card-body">
              <div className="media">
                <div className="mr-3">
                  <a href="#">
                    <img
                      src="https://res.cloudinary.com/anstagram123/image/upload/v1614876015/dev_setups/placeholder_jwn8zg.jpg"
                      width="38"
                      height="38"
                      className="rounded-circle"
                      alt=""
                    />
                  </a>
                </div>

                <div className="media-body">
                  <div className="media-title font-weight-semibold">
                    Victoria Baker
                  </div>
                  <div className="font-size-xs opacity-50">
                    <i className="icon-pin font-size-sm"></i> &nbsp;Santa Ana,
                    CA
                  </div>
                </div>

                <div className="ml-3 align-self-center">
                  <a href="#" className="text-white">
                    <i className="icon-cog3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* user menu */}

          {/* Main navigation */}
          <div className="card card-sidebar-mobile">
            <ul className="nav nav-sidebar" data-nav-type="accordion">
              {/* Main */}
              <li className="nav-item-header">
                <div className="text-uppercase font-size-xs line-height-xs">
                  Main
                </div>{" "}
                <i className="icon-menu" title="Main"></i>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  <i className="icon-home4"></i>
                  <span>
                    Dashboard
                    <span className="d-block font-weight-normal opacity-50">
                      No active orders
                    </span>
                  </span>
                </a>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link">
                  <i className="icon-copy"></i> <span>Layouts</span>
                </a>

                <ul className="nav nav-group-sub" data-submenu-title="Layouts">
                  <li className="nav-item">
                    <a
                      href="../../../../layout_1/LTR/default/full/index.html"
                      className="nav-link"
                    >
                      Default layout
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="index.html" className="nav-link active">
                      Layout 2
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../../../../layout_3/LTR/default/full/index.html"
                      className="nav-link"
                    >
                      Layout 3
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../../../../layout_4/LTR/default/full/index.html"
                      className="nav-link"
                    >
                      Layout 4
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../../../../layout_5/LTR/default/full/index.html"
                      className="nav-link"
                    >
                      Layout 5
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../../../../layout_6/LTR/default/full/index.html"
                      className="nav-link disabled"
                    >
                      Layout 6{" "}
                      <span className="badge bg-transparent align-self-center ml-auto">
                        Coming soon
                      </span>
                    </a>
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
              <li className="nav-item">
                <a
                  href="../../../RTL/default/full/index.html"
                  className="nav-link"
                >
                  <i className="icon-width"></i> <span>RTL version</span>
                </a>
              </li>
              {/* main */}

              {/* Layout */}
              <li className="nav-item-header">
                <div className="text-uppercase font-size-xs line-height-xs">
                  Layout
                </div>{" "}
                <i className="icon-menu" title="Layout options"></i>
              </li>
              <li className="nav-item nav-item-submenu nav-item-expanded nav-item-open">
                <a href="#" className="nav-link">
                  <i className="icon-stack2"></i> <span>Page layouts</span>
                </a>

                <ul
                  className="nav nav-group-sub"
                  data-submenu-title="Page layouts"
                >
                  <li className="nav-item">
                    <a
                      href="layout_fixed_navbar.html"
                      className="nav-link active"
                    >
                      Fixed navbar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="layout_fixed_sidebar_custom.html"
                      className="nav-link"
                    >
                      Fixed sidebar - custom scroll
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="layout_fixed_sidebar_native.html"
                      className="nav-link"
                    >
                      Fixed sidebar - native scroll
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="layout_fixed_footer.html" className="nav-link">
                      Fixed footer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="layout_hideable_navbar.html" className="nav-link">
                      Hideable navbar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="layout_without_header.html" className="nav-link">
                      Without page header
                    </a>
                  </li>
                  <li className="nav-item-divider"></li>
                  <li className="nav-item">
                    <a href="layout_boxed_default.html" className="nav-link">
                      Boxed with default sidebar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="layout_boxed_mini.html" className="nav-link">
                      Boxed with mini sidebar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="layout_boxed_full.html" className="nav-link">
                      Boxed full width
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="layout_boxed_content.html" className="nav-link">
                      Boxed content
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link">
                  <i className="icon-page-break2"></i>{" "}
                  <span>Headers &amp; footers</span>
                </a>
                <ul
                  className="nav nav-group-sub"
                  data-submenu-title="Content styling"
                >
                  <li className="nav-item">
                    <a href="content_page_header.html" className="nav-link">
                      Page header
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="content_page_footer.html"
                      className="nav-link disabled"
                    >
                      Page footer{" "}
                      <span className="badge bg-transparent align-self-center ml-auto">
                        Coming soon
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link">
                  <i className="icon-indent-decrease2"></i>{" "}
                  <span>Sidebars</span>
                </a>
                <ul className="nav nav-group-sub" data-submenu-title="Sidebars">
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">
                      Main sidebar
                    </a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item">
                        <a
                          href="sidebar_default_collapse.html"
                          className="nav-link"
                        >
                          Default collapsible
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_default_hide.html"
                          className="nav-link"
                        >
                          Default hideable
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_default_hidden.html"
                          className="nav-link"
                        >
                          Default hidden
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_mini_collapse.html"
                          className="nav-link"
                        >
                          Mini collapsible
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="sidebar_mini_hide.html" className="nav-link">
                          Mini hideable
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="sidebar_mini_hidden.html" className="nav-link">
                          Mini hidden
                        </a>
                      </li>
                      <li className="nav-item-divider"></li>
                      <li className="nav-item">
                        <a
                          href="sidebar_default_color_light.html"
                          className="nav-link"
                        >
                          Light color
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_default_color_custom.html"
                          className="nav-link"
                        >
                          Custom color
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">
                      Secondary sidebar
                    </a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item">
                        <a
                          href="sidebar_secondary_after.html"
                          className="nav-link"
                        >
                          After default
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_secondary_before.html"
                          className="nav-link"
                        >
                          Before default
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_secondary_hidden.html"
                          className="nav-link"
                        >
                          Hidden by default
                        </a>
                      </li>
                      <li className="nav-item-divider"></li>
                      <li className="nav-item">
                        <a
                          href="sidebar_secondary_color_dark.html"
                          className="nav-link"
                        >
                          Dark color
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_secondary_color_custom.html"
                          className="nav-link"
                        >
                          Custom color
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">
                      Right sidebar
                    </a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item">
                        <a
                          href="sidebar_right_default_collapse.html"
                          className="nav-link"
                        >
                          Show - collapse main
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_right_default_hide.html"
                          className="nav-link"
                        >
                          Show - hide main
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_right_default_toggle.html"
                          className="nav-link"
                        >
                          Show - fix default width
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_right_mini_toggle.html"
                          className="nav-link"
                        >
                          Show - fix mini width
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_right_secondary_hide.html"
                          className="nav-link"
                        >
                          Show - hide secondary
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_right_visible.html"
                          className="nav-link"
                        >
                          Visible by default
                        </a>
                      </li>
                      <li className="nav-item-divider"></li>
                      <li className="nav-item">
                        <a
                          href="sidebar_right_color_dark.html"
                          className="nav-link"
                        >
                          Dark color
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_right_color_custom.html"
                          className="nav-link"
                        >
                          Custom color
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">
                      Content sidebar
                    </a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item">
                        <a
                          href="sidebar_content_left.html"
                          className="nav-link"
                        >
                          Left position
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_content_left_stretch.html"
                          className="nav-link"
                        >
                          Left stretched
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_content_left_hidden.html"
                          className="nav-link"
                        >
                          Left hidden
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_content_right.html"
                          className="nav-link"
                        >
                          Right position
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_content_right_stretch.html"
                          className="nav-link"
                        >
                          Right stretched
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_content_right_hidden.html"
                          className="nav-link"
                        >
                          Right hidden
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_content_sections.html"
                          className="nav-link"
                        >
                          Sectioned sidebar
                        </a>
                      </li>
                      <li className="nav-item-divider"></li>
                      <li className="nav-item">
                        <a
                          href="sidebar_content_color_dark.html"
                          className="nav-link"
                        >
                          Dark color
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_content_color_custom.html"
                          className="nav-link"
                        >
                          Custom color
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="sidebar_content_color_sections_custom.html"
                          className="nav-link"
                        >
                          Custom sections color
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item-divider"></li>
                  <li className="nav-item">
                    <a href="sidebar_components.html" className="nav-link">
                      Sidebar components
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link">
                  <i className="icon-menu3"></i> <span>Navbars</span>
                </a>
                <ul className="nav nav-group-sub" data-submenu-title="Navbars">
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">
                      Single navbar
                    </a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item">
                        <a
                          href="navbar_single_top_static.html"
                          className="nav-link"
                        >
                          Single top static
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="navbar_single_top_fixed.html"
                          className="nav-link"
                        >
                          Single top fixed
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="navbar_single_bottom_static.html"
                          className="nav-link"
                        >
                          Single bottom static
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="navbar_single_bottom_fixed.html"
                          className="nav-link"
                        >
                          Single bottom fixed
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="navbar_single_header_before.html"
                          className="nav-link"
                        >
                          Before page header
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="navbar_single_header_after.html"
                          className="nav-link"
                        >
                          After page header
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="navbar_single_content_after.html"
                          className="nav-link"
                        >
                          After page content
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">
                      Multiple navbars
                    </a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item">
                        <a
                          href="navbar_multiple_top_static.html"
                          className="nav-link"
                        >
                          Multiple top static
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="navbar_multiple_top_fixed.html"
                          className="nav-link"
                        >
                          Multiple top fixed
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="navbar_multiple_bottom_static.html"
                          className="nav-link"
                        >
                          Multiple bottom static
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="navbar_multiple_bottom_fixed.html"
                          className="nav-link"
                        >
                          Multiple bottom fixed
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="navbar_multiple_top_bottom.html"
                          className="nav-link"
                        >
                          Multiple - top and bottom
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="navbar_multiple_secondary_sticky.html"
                          className="nav-link"
                        >
                          Multiple - secondary sticky
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">
                      Content navbar
                    </a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item">
                        <a
                          href="navbar_component_single.html"
                          className="nav-link"
                        >
                          Single navbar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="navbar_component_multiple.html"
                          className="nav-link"
                        >
                          Multiple navbars
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item-divider"></li>
                  <li className="nav-item">
                    <a href="navbar_colors.html" className="nav-link">
                      Color options
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="navbar_sizes.html" className="nav-link">
                      Sizing options
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="navbar_hideable.html" className="nav-link">
                      Hide on scroll
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="navbar_components.html" className="nav-link">
                      Navbar components
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link">
                  <i className="icon-sort"></i> <span>Vertical navigation</span>
                </a>
                <ul
                  className="nav nav-group-sub"
                  data-submenu-title="Vertical navigation"
                >
                  <li className="nav-item">
                    <a
                      href="navigation_vertical_collapsible.html"
                      className="nav-link"
                    >
                      Collapsible menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="navigation_vertical_accordion.html"
                      className="nav-link"
                    >
                      Accordion menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="navigation_vertical_bordered.html"
                      className="nav-link"
                    >
                      Bordered navigation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="navigation_vertical_right_icons.html"
                      className="nav-link"
                    >
                      Right icons
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="navigation_vertical_badges.html"
                      className="nav-link"
                    >
                      Badges
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="navigation_vertical_disabled.html"
                      className="nav-link"
                    >
                      Disabled items
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link">
                  <i className="icon-transmission"></i>{" "}
                  <span>Horizontal navigation</span>
                </a>
                <ul
                  className="nav nav-group-sub"
                  data-submenu-title="Horizontal navigation"
                >
                  <li className="nav-item">
                    <a
                      href="navigation_horizontal_click.html"
                      className="nav-link"
                    >
                      Submenu on click
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="navigation_horizontal_hover.html"
                      className="nav-link"
                    >
                      Submenu on hover
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="navigation_horizontal_elements.html"
                      className="nav-link"
                    >
                      With custom elements
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="navigation_horizontal_tabs.html"
                      className="nav-link"
                    >
                      Tabbed navigation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="navigation_horizontal_disabled.html"
                      className="nav-link"
                    >
                      Disabled navigation links
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="navigation_horizontal_mega.html"
                      className="nav-link"
                    >
                      Horizontal mega menu
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link">
                  <i className="icon-tree5"></i> <span>Menu levels</span>
                </a>
                <ul
                  className="nav nav-group-sub"
                  data-submenu-title="Menu levels"
                >
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="icon-IE"></i> Second level
                    </a>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">
                      <i className="icon-firefox"></i> Second level with child
                    </a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="icon-android"></i> Third level
                        </a>
                      </li>
                      <li className="nav-item nav-item-submenu">
                        <a href="#" className="nav-link">
                          <i className="icon-apple2"></i> Third level with child
                        </a>
                        <ul className="nav nav-group-sub">
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="icon-html5"></i> Fourth level
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="icon-css3"></i> Fourth level
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="icon-windows"></i> Third level
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="icon-chrome"></i> Second level
                    </a>
                  </li>
                </ul>
              </li>
              {/* layout */}
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
