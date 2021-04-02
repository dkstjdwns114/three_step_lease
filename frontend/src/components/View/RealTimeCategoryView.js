import React, { useEffect, useState } from "react";
import RealTimePolarChart from "../Chart/RealTimePolarChart";

const RealTimeCategorylView = (props) => {
  const [currentDateValue, setCurrentDateValue] = useState("");
  const [currentKorValue, setCurrentKorValue] = useState("");
  const [openOrClose, setOpenOrClose] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [leftBtnActive, setLeftBtnActive] = useState(true);
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
  }, [props.one_days_ago_date]);

  const oneDaysChangeClickHandler = () => {
    const value = props.one_days_ago_date;
    const korValue = props.one_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCategoryData(props.one_days_ago.open.category);
    } else if (openOrClose === "폐업") {
      setCategoryData(props.one_days_ago.close.category);
    }
  };

  const twoDaysChangeClickHandler = () => {
    const value = props.two_days_ago_date;
    const korValue = props.two_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCategoryData(props.two_days_ago.open.category);
    } else if (openOrClose === "폐업") {
      setCategoryData(props.two_days_ago.close.category);
    }
  };

  const threeDaysChangeClickHandler = () => {
    const value = props.three_days_ago_date;
    const korValue = props.three_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCategoryData(props.three_days_ago.open.category);
    } else if (openOrClose === "폐업") {
      setCategoryData(props.three_days_ago.close.category);
    }
  };

  const fourDaysChangeClickHandler = () => {
    const value = props.four_days_ago_date;
    const korValue = props.four_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCategoryData(props.four_days_ago.open.category);
    } else if (openOrClose === "폐업") {
      setCategoryData(props.four_days_ago.close.category);
    }
  };

  const fiveDaysChangeClickHandler = () => {
    const value = props.five_days_ago_date;
    const korValue = props.five_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCategoryData(props.five_days_ago.open.category);
    } else if (openOrClose === "폐업") {
      setCategoryData(props.five_days_ago.close.category);
    }
  };

  const sixDaysChangeClickHandler = () => {
    const value = props.six_days_ago_date;
    const korValue = props.six_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCategoryData(props.six_days_ago.open.category);
    } else if (openOrClose === "폐업") {
      setCategoryData(props.six_days_ago.close.category);
    }
  };

  const sevenDaysChangeClickHandler = () => {
    const value = props.seven_days_ago_date;
    const korValue = props.seven_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCategoryData(props.seven_days_ago.open.category);
    } else if (openOrClose === "폐업") {
      setCategoryData(props.seven_days_ago.close.category);
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
      } else if (currentDateValue === props.two_days_ago_date) {
        setCategoryData(props.two_days_ago.open.category);
      } else if (currentDateValue === props.three_days_ago_date) {
        setCategoryData(props.three_days_ago.open.category);
      } else if (currentDateValue === props.four_days_ago_date) {
        setCategoryData(props.four_days_ago.open.category);
      } else if (currentDateValue === props.five_days_ago_date) {
        setCategoryData(props.five_days_ago.open.category);
      } else if (currentDateValue === props.six_days_ago_date) {
        setCategoryData(props.six_days_ago.open.category);
      } else if (currentDateValue === props.seven_days_ago_date) {
        setCategoryData(props.seven_days_ago.open.category);
      }
    } else {
      setLeftBtnActive(true);
      setOpenOrClose("폐업");
      setLeftBtnClass("btn btn-round btn-success btn-pill-left");
      setRightBtnClass("btn btn-round btn-default btn-pill-right");

      if (currentDateValue === props.one_days_ago_date) {
        setCategoryData(props.one_days_ago.close.category);
      } else if (currentDateValue === props.two_days_ago_date) {
        setCategoryData(props.two_days_ago.close.category);
      } else if (currentDateValue === props.three_days_ago_date) {
        setCategoryData(props.three_days_ago.close.category);
      } else if (currentDateValue === props.four_days_ago_date) {
        setCategoryData(props.four_days_ago.close.category);
      } else if (currentDateValue === props.five_days_ago_date) {
        setCategoryData(props.five_days_ago.close.category);
      } else if (currentDateValue === props.six_days_ago_date) {
        setCategoryData(props.six_days_ago.close.category);
      } else if (currentDateValue === props.seven_days_ago_date) {
        setCategoryData(props.seven_days_ago.close.category);
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
          <span className="text-uppercase hidden-sm-down pb-5">
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
      <span>
        &nbsp; {currentKorValue} {openOrClose}데이터
      </span>
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
          <RealTimePolarChart data_list={categoryData} />
        </div>
      </div>
    </>
  );
};

export default RealTimeCategorylView;
