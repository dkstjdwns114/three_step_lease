import React from "react";
import ChartistMonth from "../Chart/ChartistMonth";
import SmartTable from "../Table/SmartTable";

const MainMonthView = (props) => {
  return (
    <>
      <div className="col-xxl-12 col-md-12">
        <div className="card">
          <div className="card-block p-0 h-full">
            <div
              className="pt-30 px-30"
              style={{ height: "calc(100% - 250px);" }}
            >
              <div className="row">
                <div className="col-8 pt-30 px-30">
                  <p className="font-size-20 grey-700">{props.title}</p>
                  <p>{props.desc}</p>
                </div>

                <div className="col-4 pt-30 px-30">
                  <div className="float-right clearfix">
                    <ul className="list-unstyled">
                      <li className="mb-5">
                        <i
                          className="icon md-circle red-600 mr-5"
                          aria-hidden="true"
                        ></i>{" "}
                        2019년 폐업
                      </li>
                      <li className="mb-5">
                        <i
                          className="icon md-circle pink-400 mr-5"
                          aria-hidden="true"
                        ></i>{" "}
                        2019년 개업
                      </li>
                      <li className="mb-5">
                        <i
                          className="icon md-circle yellow-a300 mr-5"
                          aria-hidden="true"
                        ></i>{" "}
                        2020년 폐업
                      </li>
                      <li className="mb-5">
                        <i
                          className="icon md-circle brown-400 mr-5"
                          aria-hidden="true"
                        ></i>{" "}
                        2020년 개업
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-30 px-30">
              <div className="col-lg-12">
                <ChartistMonth
                  month_close_19={props.month_close_19}
                  month_open_19={props.month_open_19}
                  month_close_20={props.month_close_20}
                  month_open_20={props.month_open_20}
                  numberComma={props.numberWithCommas}
                />
              </div>
              <SmartTable
                month_close_19={props.month_close_19}
                month_open_19={props.month_open_19}
                month_close_20={props.month_close_20}
                month_open_20={props.month_open_20}
                numberComma={props.numberComma}
                city_name={props.city_name}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMonthView;
