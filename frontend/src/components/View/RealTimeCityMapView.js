import React, { useEffect, useState } from "react";
import RealTimeCityMap from "../Map/RealTimeCityMap";

const RealTimeCityMapView = (props) => {
  const [currentDateValue, setCurrentDateValue] = useState("");
  const [currentKorValue, setCurrentKorValue] = useState("");
  const [openOrClose, setOpenOrClose] = useState("");
  const [csvDownData, setCsvDownData] = useState([]);
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
    setCsvDownData(props.one_days_ago.close.data_list);
  }, [props.one_days_ago_date, props.city_name]);

  const oneDaysChangeClickHandler = () => {
    const value = props.one_days_ago_date;
    const korValue = props.one_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCsvDownData(props.one_days_ago.open.data_list);
    } else if (openOrClose === "폐업") {
      setCsvDownData(props.one_days_ago.close.data_list);
    }
  };

  const twoDaysChangeClickHandler = () => {
    const value = props.two_days_ago_date;
    const korValue = props.two_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCsvDownData(props.two_days_ago.open.data_list);
    } else if (openOrClose === "폐업") {
      setCsvDownData(props.two_days_ago.close.data_list);
    }
  };

  const threeDaysChangeClickHandler = () => {
    const value = props.three_days_ago_date;
    const korValue = props.three_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCsvDownData(props.three_days_ago.open.data_list);
    } else if (openOrClose === "폐업") {
      setCsvDownData(props.three_days_ago.close.data_list);
    }
  };

  const fourDaysChangeClickHandler = () => {
    const value = props.four_days_ago_date;
    const korValue = props.four_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCsvDownData(props.four_days_ago.open.data_list);
    } else if (openOrClose === "폐업") {
      setCsvDownData(props.four_days_ago.close.data_list);
    }
  };

  const fiveDaysChangeClickHandler = () => {
    const value = props.five_days_ago_date;
    const korValue = props.five_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCsvDownData(props.five_days_ago.open.data_list);
    } else if (openOrClose === "폐업") {
      setCsvDownData(props.five_days_ago.close.data_list);
    }
  };

  const sixDaysChangeClickHandler = () => {
    const value = props.six_days_ago_date;
    const korValue = props.six_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCsvDownData(props.six_days_ago.open.data_list);
    } else if (openOrClose === "폐업") {
      setCsvDownData(props.six_days_ago.close.data_list);
    }
  };

  const sevenDaysChangeClickHandler = () => {
    const value = props.seven_days_ago_date;
    const korValue = props.seven_days_ago_date_kor;
    setCurrentDateValue(value);
    setCurrentKorValue(korValue);

    if (openOrClose === "개업") {
      setCsvDownData(props.seven_days_ago.open.data_list);
    } else if (openOrClose === "폐업") {
      setCsvDownData(props.seven_days_ago.close.data_list);
    }
  };

  const btnClickHandler = () => {
    if (leftBtnActive) {
      setLeftBtnActive(false);
      setOpenOrClose("개업");
      setLeftBtnClass("btn btn-round btn-default btn-pill-left");
      setRightBtnClass("btn btn-round btn-success btn-pill-right");

      if (currentDateValue === props.one_days_ago_date) {
        setCsvDownData(props.one_days_ago.open.data_list);
      } else if (currentDateValue === props.two_days_ago_date) {
        setCsvDownData(props.two_days_ago.open.data_list);
      } else if (currentDateValue === props.three_days_ago_date) {
        setCsvDownData(props.three_days_ago.open.data_list);
      } else if (currentDateValue === props.four_days_ago_date) {
        setCsvDownData(props.four_days_ago.open.data_list);
      } else if (currentDateValue === props.five_days_ago_date) {
        setCsvDownData(props.five_days_ago.open.data_list);
      } else if (currentDateValue === props.six_days_ago_date) {
        setCsvDownData(props.six_days_ago.open.data_list);
      } else if (currentDateValue === props.seven_days_ago_date) {
        setCsvDownData(props.seven_days_ago.open.data_list);
      }
    } else {
      setLeftBtnActive(true);
      setOpenOrClose("폐업");
      setLeftBtnClass("btn btn-round btn-success btn-pill-left");
      setRightBtnClass("btn btn-round btn-default btn-pill-right");

      if (currentDateValue === props.one_days_ago_date) {
        setCsvDownData(props.one_days_ago.close.data_list);
      } else if (currentDateValue === props.two_days_ago_date) {
        setCsvDownData(props.two_days_ago.close.data_list);
      } else if (currentDateValue === props.three_days_ago_date) {
        setCsvDownData(props.three_days_ago.close.data_list);
      } else if (currentDateValue === props.four_days_ago_date) {
        setCsvDownData(props.four_days_ago.close.data_list);
      } else if (currentDateValue === props.five_days_ago_date) {
        setCsvDownData(props.five_days_ago.close.data_list);
      } else if (currentDateValue === props.six_days_ago_date) {
        setCsvDownData(props.six_days_ago.close.data_list);
      } else if (currentDateValue === props.seven_days_ago_date) {
        setCsvDownData(props.seven_days_ago.close.data_list);
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
      <div className="row">
        <div className="col-xxl-12 col-lg-12 col-md-12 mb-50">
          <RealTimeCityMap
            data_list={csvDownData}
            date_kor={currentKorValue}
            city_name={props.city_name}
            openOrClose={openOrClose}
            city_hoall_lat={props.city_hoall_lat}
            city_hoall_lng={props.city_hoall_lng}
            same_address_map_level={props.same_address_map_level}
          />
        </div>
      </div>
    </>
  );
};

export default RealTimeCityMapView;
