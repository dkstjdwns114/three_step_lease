import React, { useEffect, useState } from "react";
import RealTimeCityMap from "../Map/RealTimeCityMap";

const RealTimeCityMapView = (props) => {
  const [currentDateValue, setCurrentDateValue] = useState("");
  const [currentKorValue, setCurrentKorValue] = useState("");
  const [openOrClose, setOpenOrClose] = useState("");
  const [cityData, setCityData] = useState([]);
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
    setCityData(props.one_days_ago.close.city);
  }, [props.one_days_ago_date, props.city_name]);

  const oneDaysChangeClickHandler = () => {
    const value = props.one_days_ago_date;
    const korValue = props.one_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCityData(props.one_days_ago.open.city);
    } else if (openOrClose === "폐업") {
      setCityData(props.one_days_ago.close.city);
    }
  };

  const twoDaysChangeClickHandler = () => {
    const value = props.two_days_ago_date;
    const korValue = props.two_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCityData(props.two_days_ago.open.city);
    } else if (openOrClose === "폐업") {
      setCityData(props.two_days_ago.close.city);
    }
  };

  const threeDaysChangeClickHandler = () => {
    const value = props.three_days_ago_date;
    const korValue = props.three_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCityData(props.three_days_ago.open.city);
    } else if (openOrClose === "폐업") {
      setCityData(props.three_days_ago.close.city);
    }
  };

  const fourDaysChangeClickHandler = () => {
    const value = props.four_days_ago_date;
    const korValue = props.four_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCityData(props.four_days_ago.open.city);
    } else if (openOrClose === "폐업") {
      setCityData(props.four_days_ago.close.city);
    }
  };

  const fiveDaysChangeClickHandler = () => {
    const value = props.five_days_ago_date;
    const korValue = props.five_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCityData(props.five_days_ago.open.city);
    } else if (openOrClose === "폐업") {
      setCityData(props.five_days_ago.close.city);
    }
  };

  const sixDaysChangeClickHandler = () => {
    const value = props.six_days_ago_date;
    const korValue = props.six_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCityData(props.six_days_ago.open.city);
    } else if (openOrClose === "폐업") {
      setCityData(props.six_days_ago.close.city);
    }
  };

  const sevenDaysChangeClickHandler = () => {
    const value = props.seven_days_ago_date;
    const korValue = props.seven_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCityData(props.seven_days_ago.open.city);
    } else if (openOrClose === "폐업") {
      setCityData(props.seven_days_ago.close.city);
    }
  };

  const btnClickHandler = () => {
    if (leftBtnActive) {
      setLeftBtnActive(false);
      setOpenOrClose("개업");
      setLeftBtnClass("btn btn-round btn-default btn-pill-left");
      setRightBtnClass("btn btn-round btn-success btn-pill-right");

      if (currentDateValue === props.one_days_ago_date) {
        setCityData(props.one_days_ago.open.city);
      } else if (currentDateValue === props.two_days_ago_date) {
        setCityData(props.two_days_ago.open.city);
      } else if (currentDateValue === props.three_days_ago_date) {
        setCityData(props.three_days_ago.open.city);
      } else if (currentDateValue === props.four_days_ago_date) {
        setCityData(props.four_days_ago.open.city);
      } else if (currentDateValue === props.five_days_ago_date) {
        setCityData(props.five_days_ago.open.city);
      } else if (currentDateValue === props.six_days_ago_date) {
        setCityData(props.six_days_ago.open.city);
      } else if (currentDateValue === props.seven_days_ago_date) {
        setCityData(props.seven_days_ago.open.city);
      }
    } else {
      setLeftBtnActive(true);
      setOpenOrClose("폐업");
      setLeftBtnClass("btn btn-round btn-success btn-pill-left");
      setRightBtnClass("btn btn-round btn-default btn-pill-right");

      if (currentDateValue === props.one_days_ago_date) {
        setCityData(props.one_days_ago.close.city);
      } else if (currentDateValue === props.two_days_ago_date) {
        setCityData(props.two_days_ago.close.city);
      } else if (currentDateValue === props.three_days_ago_date) {
        setCityData(props.three_days_ago.close.city);
      } else if (currentDateValue === props.four_days_ago_date) {
        setCityData(props.four_days_ago.close.city);
      } else if (currentDateValue === props.five_days_ago_date) {
        setCityData(props.five_days_ago.close.city);
      } else if (currentDateValue === props.six_days_ago_date) {
        setCityData(props.six_days_ago.close.city);
      } else if (currentDateValue === props.seven_days_ago_date) {
        setCityData(props.seven_days_ago.close.city);
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
      <div className="row px-30">
        <div className="col-xxl-12 col-lg-12 col-md-12 mb-50">
          <RealTimeCityMap
            city_data={cityData}
            numberComma={props.numberWithCommas}
          />
        </div>
      </div>
    </>
  );
};

export default RealTimeCityMapView;
