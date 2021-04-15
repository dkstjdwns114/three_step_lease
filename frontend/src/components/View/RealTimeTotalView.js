import React, { useEffect, useState } from "react";
import RealTimeBarChart from "../Chart/RealTimeBarChart";

const RealTimeTotalView = (props) => {
  return (
    <>
      <div className="row pt-10">
        <div className="col-xxl-12 col-lg-12 col-md-12 mb-50">
          <RealTimeBarChart
            one_days_ago={props.one_days_ago}
            two_days_ago={props.two_days_ago}
            three_days_ago={props.three_days_ago}
            four_days_ago={props.four_days_ago}
            five_days_ago={props.five_days_ago}
            six_days_ago={props.six_days_ago}
            seven_days_ago={props.seven_days_ago}
            one_days_ago_date={props.one_days_ago_date}
            two_days_ago_date={props.two_days_ago_date}
            three_days_ago_date={props.three_days_ago_date}
            four_days_ago_date={props.four_days_ago_date}
            five_days_ago_date={props.five_days_ago_date}
            six_days_ago_date={props.six_days_ago_date}
            seven_days_ago_date={props.seven_days_ago_date}
            numberWithCommas={props.numberWithCommas}
          />
        </div>
      </div>
    </>
  );
};

export default RealTimeTotalView;
