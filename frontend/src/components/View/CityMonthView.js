import React from "react";
import CityMonthLineChart from "../Chart/CityMonthLineChart";
import SmartTable from "../Table/SmartTable";

const CityMonthView = (props) => {
  return (
    <>
      <div className="col-xxl-12 col-md-12">
        <div className="card">
          <div className="card-block p-0 h-full">
            <div
              className="pt-20 px-20"
              style={{ height: "calc(100% - 250px);" }}
            >
              <div className="row">
                <div className="col-8 pt-20 px-20">
                  <p className="font-size-20 grey-700">
                    {props.city_name} {props.title}
                  </p>
                  <p>{props.desc}</p>
                </div>
              </div>
            </div>
            <div className="row pt-20 px-20">
              <div className="col-lg-12" id="city_month_chart">
                <CityMonthLineChart
                  month_close_19={props.month_close_19}
                  month_open_19={props.month_open_19}
                  month_close_20={props.month_close_20}
                  month_open_20={props.month_open_20}
                />
              </div>
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
    </>
  );
};

export default CityMonthView;
