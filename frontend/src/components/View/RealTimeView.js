import React, { Component } from "react";
import RealTimeBarChart from "../Chart/RealTimeBarChart";
import RealTimePolarChart from "../Chart/RealTimePolarChart";
import DownLoadCsv from "../Csv/DownLoadCsv";
import RoundCircleLoading from "../Loading/RoundCircleLoading";
import SameAddressMap from "../Map/SameAddressMap";

export default class RealTimeView extends Component {
  state = {
    isLoading: true,
    one_days_ago: {},
    two_days_ago: {},
    three_days_ago: {},
    four_days_ago: {},
    five_days_ago: {},
    six_days_ago: {},
    seven_days_ago: {},
    one_days_ago_date: "",
    two_days_ago_date: "",
    three_days_ago_date: "",
    four_days_ago_date: "",
    five_days_ago_date: "",
    six_days_ago_date: "",
    seven_days_ago_date: "",
    current_date_value: ""
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(`/api/real_time/${this.props.city_code}`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        this.setState({
          isLoading: false,
          one_days_ago: resData.one_days_ago,
          two_days_ago: resData.two_days_ago,
          three_days_ago: resData.three_days_ago,
          four_days_ago: resData.four_days_ago,
          five_days_ago: resData.five_days_ago,
          six_days_ago: resData.six_days_ago,
          seven_days_ago: resData.seven_days_ago
        });
        this.setDateHandler();
      });
  };

  setDateHandler = () => {
    const one_days_ago_date = this.substrDate(this.state.one_days_ago.date);
    const two_days_ago_date = this.substrDate(this.state.two_days_ago.date);
    const three_days_ago_date = this.substrDate(this.state.three_days_ago.date);
    const four_days_ago_date = this.substrDate(this.state.four_days_ago.date);
    const five_days_ago_date = this.substrDate(this.state.five_days_ago.date);
    const six_days_ago_date = this.substrDate(this.state.six_days_ago.date);
    const seven_days_ago_date = this.substrDate(this.state.seven_days_ago.date);
    this.setState({
      one_days_ago_date: one_days_ago_date,
      two_days_ago_date: two_days_ago_date,
      three_days_ago_date: three_days_ago_date,
      four_days_ago_date: four_days_ago_date,
      five_days_ago_date: five_days_ago_date,
      six_days_ago_date: six_days_ago_date,
      seven_days_ago_date: seven_days_ago_date,
      total_current_date_value: one_days_ago_date
    });
  };

  substrDate = (date) => {
    const month = date.substr(4, 2);
    const day = date.substr(6, 2);
    const result = month + "/" + day;
    return result;
  };

  oneDaysChangeClickHandler = () => {
    const value = this.state.one_days_ago_date;
    this.setState({ total_current_date_value: value });
  };

  twoDaysChangeClickHandler = () => {
    const value = this.state.two_days_ago_date;
    this.setState({ total_current_date_value: value });
  };

  threeDaysChangeClickHandler = () => {
    const value = this.state.three_days_ago_date;
    this.setState({ total_current_date_value: value });
  };

  fourDaysChangeClickHandler = () => {
    const value = this.state.four_days_ago_date;
    this.setState({ total_current_date_value: value });
  };

  fiveDaysChangeClickHandler = () => {
    const value = this.state.five_days_ago_date;
    this.setState({ total_current_date_value: value });
  };

  sixDaysChangeClickHandler = () => {
    const value = this.state.six_days_ago_date;
    this.setState({ total_current_date_value: value });
  };

  sevenDaysChangeClickHandler = () => {
    const value = this.state.seven_days_ago_date;
    this.setState({ total_current_date_value: value });
  };

  render() {
    return (
      <>
        <div className="col-xxl-6 col-md-6">
          <div className="card">
            <div className="card-block p-0 h-full">
              <div
                className="pt-20 px-20"
                style={{ height: "calc(100% - 250px);" }}
              >
                <div className="row">
                  <div className="col-12 pt-20 px-20">
                    <p className="font-size-20 grey-700">
                      {this.props.city_name} 최근 7일 개·폐업 현황
                    </p>
                    <p>매일 오전 9시에 전날 데이터가 업데이트 됩니다.</p>
                    <div className="btn-group" role="group">
                      <div
                        className="btn btn-info dropdown-toggle"
                        id="countIconDropdown"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="icon md-calendar" aria-hidden="true"></i>
                        <span className="text-uppercase hidden-sm-down pb-5">
                          &nbsp;{this.state.total_current_date_value}&nbsp;
                        </span>
                      </div>
                      <div className="dropdown-menu">
                        <button
                          className="dropdown-item"
                          onClick={this.oneDaysChangeClickHandler}
                        >
                          {this.state.one_days_ago_date}
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={this.twoDaysChangeClickHandler}
                        >
                          {this.state.two_days_ago_date}
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={this.threeDaysChangeClickHandler}
                        >
                          {this.state.three_days_ago_date}
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={this.fourDaysChangeClickHandler}
                        >
                          {this.state.four_days_ago_date}
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={this.fiveDaysChangeClickHandler}
                        >
                          {this.state.five_days_ago_date}
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={this.sixDaysChangeClickHandler}
                        >
                          {this.state.six_days_ago_date}
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={this.sevenDaysChangeClickHandler}
                        >
                          {this.state.seven_days_ago_date}
                        </button>
                      </div>
                    </div>
                    <span>&nbsp; 데이터 다운로드 다운로드 다운로드</span>
                  </div>
                </div>
              </div>
              <div className="row pt-30 px-30">
                <div className="col-lg-12">
                  {this.state.isLoading ? (
                    <RoundCircleLoading />
                  ) : (
                    <>
                      <RealTimeBarChart
                        one_days_ago={this.state.one_days_ago}
                        two_days_ago={this.state.two_days_ago}
                        three_days_ago={this.state.three_days_ago}
                        four_days_ago={this.state.four_days_ago}
                        five_days_ago={this.state.five_days_ago}
                        six_days_ago={this.state.six_days_ago}
                        seven_days_ago={this.state.seven_days_ago}
                        one_days_ago_date={this.state.one_days_ago_date}
                        two_days_ago_date={this.state.two_days_ago_date}
                        three_days_ago_date={this.state.three_days_ago_date}
                        four_days_ago_date={this.state.four_days_ago_date}
                        five_days_ago_date={this.state.five_days_ago_date}
                        six_days_ago_date={this.state.six_days_ago_date}
                        seven_days_ago_date={this.state.seven_days_ago_date}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-md-6">
          <div className="card">
            <div className="card-block p-0 h-full">
              <div
                className="pt-20 px-20"
                style={{ height: "calc(100% - 250px);" }}
              >
                <div className="row">
                  <div className="col-12 pt-20 px-20">
                    <p className="font-size-20 grey-700">
                      {this.props.city_name} 최근 7일 개·폐업 업종 대분류
                    </p>
                    <p>매일 오전 9시에 전날 데이터가 업데이트 됩니다.</p>
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className="btn btn-info dropdown-toggle"
                        id="exampleIconDropdown3"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="icon md-calendar" aria-hidden="true"></i>
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="exampleIconDropdown3"
                        role="menu"
                      >
                        <a
                          className="dropdown-item"
                          href="javascript:void(0)"
                          role="menuitem"
                        >
                          Dropdown link
                        </a>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0)"
                          role="menuitem"
                        >
                          Dropdown link
                        </a>
                      </div>
                    </div>
                    <span>&nbsp; 3/4</span>
                  </div>
                </div>
              </div>
              <div className="row pt-30 px-30">
                <div className="col-lg-12">
                  {this.state.isLoading ? (
                    <RoundCircleLoading />
                  ) : (
                    <>
                      <RealTimePolarChart />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
