import React, { useEffect, useState } from "react";
import RealTimePolarChart from "../Chart/RealTimePolarChart";

const RealTimeCategorylView = (props) => {
  const [currentValue, setCurrentValue] = useState("");
  useEffect(() => {
    console.log("props", props);
    setCurrentValue(props.one_days_ago_date);
  }, [props.one_days_ago_date]);

  const oneDaysChangeClickHandler = () => {
    const value = props.one_days_ago_date;
    setCurrentValue(value);
  };

  const twoDaysChangeClickHandler = () => {
    const value = props.two_days_ago_date;
    setCurrentValue(value);
  };

  const threeDaysChangeClickHandler = () => {
    const value = props.three_days_ago_date;
    setCurrentValue(value);
  };

  const fourDaysChangeClickHandler = () => {
    const value = props.four_days_ago_date;
    setCurrentValue(value);
  };

  const fiveDaysChangeClickHandler = () => {
    const value = props.five_days_ago_date;
    setCurrentValue(value);
  };

  const sixDaysChangeClickHandler = () => {
    const value = props.six_days_ago_date;
    setCurrentValue(value);
  };

  const sevenDaysChangeClickHandler = () => {
    const value = props.seven_days_ago_date;
    setCurrentValue(value);
  };

  return (
    <>
      <div className="btn-group" role="group">
        <div
          className="btn btn-info dropdown-toggle"
          id="countIconDropdown"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="icon md-calendar" aria-hidden="true"></i>
          <span className="text-uppercase hidden-sm-down pb-5">
            &nbsp;{currentValue}&nbsp;
          </span>
        </div>
        <div className="dropdown-menu">
          <button className="dropdown-item" onClick={oneDaysChangeClickHandler}>
            {props.one_days_ago_date}
          </button>
          <button className="dropdown-item" onClick={twoDaysChangeClickHandler}>
            {props.two_days_ago_date}
          </button>
          <button
            className="dropdown-item"
            onClick={threeDaysChangeClickHandler}
          >
            {props.three_days_ago_date}
          </button>
          <button
            className="dropdown-item"
            onClick={fourDaysChangeClickHandler}
          >
            {props.four_days_ago_date}
          </button>
          <button
            className="dropdown-item"
            onClick={fiveDaysChangeClickHandler}
          >
            {props.five_days_ago_date}
          </button>
          <button className="dropdown-item" onClick={sixDaysChangeClickHandler}>
            {props.six_days_ago_date}
          </button>
          <button
            className="dropdown-item"
            onClick={sevenDaysChangeClickHandler}
          >
            {props.seven_days_ago_date}
          </button>
        </div>
      </div>
      <span>&nbsp; 데이터 다운로드 다운로드 다운로드</span>
      <div className="row pt-30 px-30">
        <div className="col-lg-12">
          <RealTimePolarChart />
        </div>
      </div>
    </>
  );
};

export default RealTimeCategorylView;
