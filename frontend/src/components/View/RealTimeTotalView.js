import React, { useEffect, useState } from "react";
import RealTimeBarChart from "../Chart/RealTimeBarChart";
import RealTimeDownLoadCsv from "../Csv/RealTimeDownLoadCsv";

const RealTimeTotalView = (props) => {
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
  }, [props.one_days_ago_date]);

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
        &nbsp; {currentKorValue} {openOrClose}데이터{" "}
        <RealTimeDownLoadCsv
          data_list={csvDownData}
          date_kor={currentKorValue}
          city_name={props.city_name}
          openOrClose={openOrClose}
        />
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
          />
        </div>
      </div>
    </>
  );
};

export default RealTimeTotalView;
