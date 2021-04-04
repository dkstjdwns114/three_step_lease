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
                <div className="col-md-6">
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
                <div className="col-md-3">
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
                <div className="col-md-3">
                  <h5 className="mb-0">Q&amp;A</h5>
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
                          1. 데이터의 출처는 어디인가요?
                        </a>
                      </div>
                      <div
                        className="panel-collapse collapse"
                        id="siteMegaCollapseOne"
                        aria-labelledby="siteMegaAccordionHeadingOne"
                        role="tabpanel"
                      >
                        <div className="panel-body">
                          지방 행정 인허가 데이터입니다.
                          <br />
                          실시간 데이터는 매일 오전 9시에 업데이트되며,
                          <br />
                          2019년, 2020년 데이터의 경우 약 820만건의 데이터를
                          가공하여 제작하였습니다.
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
                          2. 이 프로그램이 주로 어디에 활용되나요?
                        </a>
                      </div>
                      <div
                        className="panel-collapse collapse"
                        id="siteMegaCollapseTwo"
                        aria-labelledby="siteMegaAccordionHeadingTwo"
                        role="tabpanel"
                      >
                        <div className="panel-body">
                          어디에 직접 활용하려고 만들었다기보다는 현재
                          COVID-19로 인해 폐업한 가게들이 많아 뉴스에 '삼보임대'
                          라는 말이 나왔었는데 개발자가 길거리를 보니 진짜 임대
                          나온 상가들이 많아서 실제로 얼마나 많은 가게들이
                          폐업을 했는지, 개업 대비 폐업 수가 어떻게되는지
                          궁금해서 프로그램을 제작하게 되었습니다.
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
                          3. 핸드폰으로 접속하니 화면이 잘 안보이는 경우가
                          있는데 해결방법이 있나요?
                        </a>
                      </div>
                      <div
                        className="panel-collapse collapse"
                        id="siteMegaCollapseThree"
                        aria-labelledby="siteMegaAccordionHeadingThree"
                        role="tabpanel"
                      >
                        <div className="panel-body">
                          모바일용이 아니라 PC용으로 제작해서 그렇습니다. <br />
                          테블릿의 경우 불편함 없이 이용하실 수 있으며,
                          안드로이드 핸드폰의 경우 어플을 제공하고 있으며 구글
                          앱스토어에 등록하는데 오랜 기간이 걸리기 때문에
                          등록하기 이전에는 sungjoon256@gmail.com 으로 메일을
                          주시면 어플 apk파일을 보내드립니다.
                          <br />
                          어플 이용시 매일 업데이트 되는 정보를 푸시알림으로
                          받아보실 수 있습니다.
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
