import React, { useEffect, useState } from "react";
import RealTimePolarChart from "../Chart/RealTimePolarChart";

const RealTimeCategorylView = (props) => {
  const [currentDateValue, setCurrentDateValue] = useState("");
  const [currentKorValue, setCurrentKorValue] = useState("");
  const [openOrClose, setOpenOrClose] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [leftBtnActive, setLeftBtnActive] = useState(true);
  const [tooltipTitle, setTooltipTitle] = useState("");
  const [leftBtnClass, setLeftBtnClass] = useState(
    "btn btn-round btn-success btn-pill-left"
  );
  const [rightBtnClass, setRightBtnClass] = useState(
    "btn btn-round btn-default btn-pill-right"
  );

  useEffect(() => {
    setCurrentDateValue(props.one_days_ago_date);
    setCurrentKorValue(props.one_days_ago_date_kor);
    setOpenOrClose("폐업");
    setCategoryData(props.one_days_ago.close.category);
    setTooltipTitle(props.one_days_ago_date + " 폐업");
  }, [props.one_days_ago_date, props.city_name]);

  const oneDaysChangeClickHandler = () => {
    const value = props.one_days_ago_date;
    const korValue = props.one_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCategoryData(props.one_days_ago.open.category);
      setTooltipTitle(value + " 개업");
    } else if (openOrClose === "폐업") {
      setCategoryData(props.one_days_ago.close.category);
      setTooltipTitle(value + " 폐업");
    }
  };

  const twoDaysChangeClickHandler = () => {
    const value = props.two_days_ago_date;
    const korValue = props.two_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCategoryData(props.two_days_ago.open.category);
      setTooltipTitle(value + " 개업");
    } else if (openOrClose === "폐업") {
      setCategoryData(props.two_days_ago.close.category);
      setTooltipTitle(value + " 폐업");
    }
  };

  const threeDaysChangeClickHandler = () => {
    const value = props.three_days_ago_date;
    const korValue = props.three_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCategoryData(props.three_days_ago.open.category);
      setTooltipTitle(value + " 개업");
    } else if (openOrClose === "폐업") {
      setCategoryData(props.three_days_ago.close.category);
      setTooltipTitle(value + " 폐업");
    }
  };

  const fourDaysChangeClickHandler = () => {
    const value = props.four_days_ago_date;
    const korValue = props.four_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCategoryData(props.four_days_ago.open.category);
      setTooltipTitle(value + " 개업");
    } else if (openOrClose === "폐업") {
      setCategoryData(props.four_days_ago.close.category);
      setTooltipTitle(value + " 폐업");
    }
  };

  const fiveDaysChangeClickHandler = () => {
    const value = props.five_days_ago_date;
    const korValue = props.five_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCategoryData(props.five_days_ago.open.category);
      setTooltipTitle(value + " 개업");
    } else if (openOrClose === "폐업") {
      setCategoryData(props.five_days_ago.close.category);
      setTooltipTitle(value + " 폐업");
    }
  };

  const sixDaysChangeClickHandler = () => {
    const value = props.six_days_ago_date;
    const korValue = props.six_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCategoryData(props.six_days_ago.open.category);
      setTooltipTitle(value + " 개업");
    } else if (openOrClose === "폐업") {
      setCategoryData(props.six_days_ago.close.category);
      setTooltipTitle(value + " 폐업");
    }
  };

  const sevenDaysChangeClickHandler = () => {
    const value = props.seven_days_ago_date;
    const korValue = props.seven_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCategoryData(props.seven_days_ago.open.category);
      setTooltipTitle(value + " 개업");
    } else if (openOrClose === "폐업") {
      setCategoryData(props.seven_days_ago.close.category);
      setTooltipTitle(value + " 폐업");
    }
  };

  const btnClickHandler = () => {
    if (leftBtnActive) {
      setLeftBtnActive(false);
      setOpenOrClose("개업");
      setLeftBtnClass("btn btn-round btn-default btn-pill-left");
      setRightBtnClass("btn btn-round btn-success btn-pill-right");

      if (currentDateValue === props.one_days_ago_date) {
        setCategoryData(props.one_days_ago.open.category);
        setTooltipTitle(props.one_days_ago_date + " 개업");
      } else if (currentDateValue === props.two_days_ago_date) {
        setCategoryData(props.two_days_ago.open.category);
        setTooltipTitle(props.two_days_ago_date + " 개업");
      } else if (currentDateValue === props.three_days_ago_date) {
        setCategoryData(props.three_days_ago.open.category);
        setTooltipTitle(props.three_days_ago_date + " 개업");
      } else if (currentDateValue === props.four_days_ago_date) {
        setCategoryData(props.four_days_ago.open.category);
        setTooltipTitle(props.four_days_ago_date + " 개업");
      } else if (currentDateValue === props.five_days_ago_date) {
        setCategoryData(props.five_days_ago.open.category);
        setTooltipTitle(props.five_days_ago_date + " 개업");
      } else if (currentDateValue === props.six_days_ago_date) {
        setCategoryData(props.six_days_ago.open.category);
        setTooltipTitle(props.six_days_ago_date + " 개업");
      } else if (currentDateValue === props.seven_days_ago_date) {
        setCategoryData(props.seven_days_ago.open.category);
        setTooltipTitle(props.seven_days_ago_date + " 개업");
      }
    } else {
      setLeftBtnActive(true);
      setOpenOrClose("폐업");
      setLeftBtnClass("btn btn-round btn-success btn-pill-left");
      setRightBtnClass("btn btn-round btn-default btn-pill-right");

      if (currentDateValue === props.one_days_ago_date) {
        setCategoryData(props.one_days_ago.close.category);
        setTooltipTitle(props.one_days_ago_date + " 폐업");
      } else if (currentDateValue === props.two_days_ago_date) {
        setCategoryData(props.two_days_ago.close.category);
        setTooltipTitle(props.two_days_ago_date + " 폐업");
      } else if (currentDateValue === props.three_days_ago_date) {
        setCategoryData(props.three_days_ago.close.category);
        setTooltipTitle(props.three_days_ago_date + " 폐업");
      } else if (currentDateValue === props.four_days_ago_date) {
        setCategoryData(props.four_days_ago.close.category);
        setTooltipTitle(props.four_days_ago_date + " 폐업");
      } else if (currentDateValue === props.five_days_ago_date) {
        setCategoryData(props.five_days_ago.close.category);
        setTooltipTitle(props.five_days_ago_date + " 폐업");
      } else if (currentDateValue === props.six_days_ago_date) {
        setCategoryData(props.six_days_ago.close.category);
        setTooltipTitle(props.six_days_ago_date + " 폐업");
      } else if (currentDateValue === props.seven_days_ago_date) {
        setCategoryData(props.seven_days_ago.close.category);
        setTooltipTitle(props.seven_days_ago_date + " 폐업");
      }
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
          <span className="text-uppercase pb-5">
            &nbsp;{currentDateValue}&nbsp;
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
      <p className="pt-20">
        &nbsp; {currentKorValue} {openOrClose}데이터
      </p>
      <div className="row pt-30 px-30">
        <div className="col-xxl-12 col-lg-12 col-md-12 mb-50">
          <RealTimePolarChart
            data_list={categoryData}
            numberWithCommas={props.numberWithCommas}
            tooltipTitle={tooltipTitle}
          />
        </div>
      </div>
    </>
  );
};

export default RealTimeCategorylView;
