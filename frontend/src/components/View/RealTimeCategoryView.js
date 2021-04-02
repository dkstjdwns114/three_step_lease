import React, { useEffect, useState } from "react";
import RealTimePolarChart from "../Chart/RealTimePolarChart";

const RealTimeCategorylView = (props) => {
  const [currentValue, setCurrentValue] = useState("");
  const [leftBtnActive, setLeftBtnActive] = useState(true);
  const [rightBtnActive, setRightBtnActive] = useState(false);
  const [leftBtnClass, setLeftBtnClass] = useState(
    "btn btn-round btn-success btn-pill-left"
  );
  const [rightBtnClass, setRightBtnClass] = useState(
    "btn btn-round btn-default btn-pill-right"
  );

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

  const btnClickHandler = () => {
    if (leftBtnActive) {
      setLeftBtnActive(false);
      setLeftBtnClass("btn btn-round btn-default btn-pill-left");
      setRightBtnActive(true);
      setRightBtnClass("btn btn-round btn-success btn-pill-right");
    } else {
      setLeftBtnActive(true);
      setLeftBtnClass("btn btn-round btn-success btn-pill-left");
      setRightBtnActive(false);
      setRightBtnClass("btn btn-round btn-default btn-pill-right");
    }
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
      <div className="float-right clearfix">
        <button
          type="button"
          className={leftBtnClass}
          onClick={btnClickHandler}
        >
          폐업
        </button>
        <button
          type="button"
          className={rightBtnClass}
          onClick={btnClickHandler}
        >
          개업
        </button>
      </div>

      <div className="row pt-30 px-30">
        <div className="col-lg-12 mb-50">
          <RealTimePolarChart />
        </div>
      </div>
    </>
  );
};

export default RealTimeCategorylView;
