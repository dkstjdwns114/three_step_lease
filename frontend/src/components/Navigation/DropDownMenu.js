import React from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";

const ScrollLink = Scroll.Link;

const DropDownMenu = (props) => {
  return (
    <>
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
                  <h5>행정구역</h5>
                  <ul className="blocks-3">
                    <li className="mega-menu m-0">
                      <ul className="list-icons">
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/">전국</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/gangwon">강원도</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/gyeonggi">경기도</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/gyeongnam">경상남도</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/gyeongbuk">경상북도</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/gwangju">광주광역시</Link>
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
                          <Link to="/city/daegu">대구광역시</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/daejeon">대전광역시</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/busan">부산광역시</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/seoul">서울특별시</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/sejong">세종특별자치시</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/ulsan">울산광역시</Link>
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
                          <Link to="/city/incheon">인천광역시</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/jeonnam">전라남도</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/jeonbuk">전라북도</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/jeju">제주특별자치도</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/chungnam">충청남도</Link>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <Link to="/city/chungbuk">충청북도</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h5>정보</h5>
                  <ul className="blocks-2">
                    <li className="mega-menu m-0">
                      <ul className="list-icons">
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <ScrollLink
                            to="realtime_total"
                            spy={true}
                            smooth={true}
                          >
                            <a href="#">실시간 총합</a>
                          </ScrollLink>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <ScrollLink
                            to="realtime_category"
                            spy={true}
                            smooth={true}
                          >
                            <a href="#">실시간 업종대분류</a>
                          </ScrollLink>
                        </li>
                        {props.isHome ? (
                          <li>
                            <i
                              className="md-chevron-right"
                              aria-hidden="true"
                            ></i>
                            <ScrollLink
                              to="main_month_chart"
                              spy={true}
                              smooth={true}
                            >
                              <a href="#">월별 차트</a>
                            </ScrollLink>
                          </li>
                        ) : (
                          <li>
                            <i
                              className="md-chevron-right"
                              aria-hidden="true"
                            ></i>
                            <ScrollLink
                              to="city_month_chart"
                              spy={true}
                              smooth={true}
                            >
                              <a href="#">월별 차트</a>
                            </ScrollLink>
                          </li>
                        )}

                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <ScrollLink to="month_table" spy={true} smooth={true}>
                            <a href="#">월별 테이블</a>
                          </ScrollLink>
                        </li>
                        {props.isHome && (
                          <li>
                            <i
                              className="md-chevron-right"
                              aria-hidden="true"
                            ></i>
                            <ScrollLink
                              to="category_view"
                              spy={true}
                              smooth={true}
                            >
                              <a href="#">업종 대분류 차트</a>
                            </ScrollLink>
                          </li>
                        )}
                      </ul>
                    </li>
                    <li className="mega-menu m-0">
                      <ul className="list-icons">
                        {!props.isHome && (
                          <li>
                            <i
                              className="md-chevron-right"
                              aria-hidden="true"
                            ></i>
                            <ScrollLink
                              to="category_view"
                              spy={true}
                              smooth={true}
                            >
                              <a href="#">업종 대분류 차트</a>
                            </ScrollLink>
                          </li>
                        )}
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <ScrollLink
                            to="type_detail_view"
                            spy={true}
                            smooth={true}
                          >
                            <a href="#">업종 중분류 차트</a>
                          </ScrollLink>
                        </li>
                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <ScrollLink
                            to="same_address_table"
                            spy={true}
                            smooth={true}
                          >
                            <a href="#">같은주소 테이블</a>
                          </ScrollLink>
                        </li>
                        {props.isHome && (
                          <li>
                            <i
                              className="md-chevron-right"
                              aria-hidden="true"
                            ></i>
                            <ScrollLink
                              to="main_city_map"
                              spy={true}
                              smooth={true}
                            >
                              <a href="#">행정구역별 현황</a>
                            </ScrollLink>
                          </li>
                        )}

                        <li>
                          <i
                            className="md-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <ScrollLink
                            to="same_address_map"
                            spy={true}
                            smooth={true}
                          >
                            <a href="#">같은주소 지도</a>
                          </ScrollLink>
                        </li>
                      </ul>
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
                          sentire partes, eripuit praesenti congressus ostendit
                          alienae, voluptati ornateque accusamus clamat
                          reperietur convicia albucius.
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
        <li className="nav-item">
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
    </>
  );
};

export default DropDownMenu;
