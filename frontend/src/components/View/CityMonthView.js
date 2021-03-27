import React from "react";
import ChartistMonth from "../Chart/ChartistMonth";
import CityMonthLineChart from "../Chart/CityMonthLineChart";
import SmartTable from "../Table/SmartTable";

const CityMonthView = (props) => {
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
                  <p className="font-size-20 grey-700">CSS ANIMATION</p>
                  <p>Quisque volutpat condimentum velit. Class aptent taciti</p>
                </div>
              </div>
            </div>
            <div className="row pt-30 px-30">
              <div className="col-lg-12">
                <CityMonthLineChart
                  month_close_19={props.month_close_19}
                  month_open_19={props.month_open_19}
                  month_close_20={props.month_close_20}
                  month_open_20={props.month_open_20}
                />
              </div>
              {/* <SmartTable
                month_close_19={props.month_close_19}
                month_open_19={props.month_open_19}
                month_close_20={props.month_close_20}
                month_open_20={props.month_open_20}
                numberComma={props.numberComma}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CityMonthView;
