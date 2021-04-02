import React, { Component } from "react";
import RoundCircleLoading from "../Loading/RoundCircleLoading";
import RealTimeCategorylView from "./RealTimeCategoryView";
import RealTimeTotalView from "./RealTimeTotalView";

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
    one_days_ago_date_kor: "",
    two_days_ago_date_kor: "",
    three_days_ago_date_kor: "",
    four_days_ago_date_kor: "",
    five_days_ago_date_kor: "",
    six_days_ago_date_kor: "",
    seven_days_ago_date_kor: ""
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
    const one_days_ago_date_kor = this.substrKorDate(
      this.state.one_days_ago.date
    );
    const two_days_ago_date_kor = this.substrKorDate(
      this.state.two_days_ago.date
    );
    const three_days_ago_date_kor = this.substrKorDate(
      this.state.three_days_ago.date
    );
    const four_days_ago_date_kor = this.substrKorDate(
      this.state.four_days_ago.date
    );
    const five_days_ago_date_kor = this.substrKorDate(
      this.state.five_days_ago.date
    );
    const six_days_ago_date_kor = this.substrKorDate(
      this.state.six_days_ago.date
    );
    const seven_days_ago_date_kor = this.substrKorDate(
      this.state.seven_days_ago.date
    );
    this.setState({
      one_days_ago_date: one_days_ago_date,
      two_days_ago_date: two_days_ago_date,
      three_days_ago_date: three_days_ago_date,
      four_days_ago_date: four_days_ago_date,
      five_days_ago_date: five_days_ago_date,
      six_days_ago_date: six_days_ago_date,
      seven_days_ago_date: seven_days_ago_date,
      one_days_ago_date_kor: one_days_ago_date_kor,
      two_days_ago_date_kor: two_days_ago_date_kor,
      three_days_ago_date_kor: three_days_ago_date_kor,
      four_days_ago_date_kor: four_days_ago_date_kor,
      five_days_ago_date_kor: five_days_ago_date_kor,
      six_days_ago_date_kor: six_days_ago_date_kor,
      seven_days_ago_date_kor: seven_days_ago_date_kor
    });
  };

  substrDate = (date) => {
    const month = date.substr(4, 2);
    const day = date.substr(6, 2);
    const result = month + "/" + day;
    return result;
  };

  substrKorDate = (date) => {
    const month = date.substr(4, 2);
    const day = date.substr(6, 2);
    const result = month + "월" + day + "일";
    return result;
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
                    {this.state.isLoading ? (
                      <RoundCircleLoading />
                    ) : (
                      <>
                        <p>
                          왼쪽에 날짜와 오른쪽에 개·폐업 선택시 해당 데이터를
                          다운로드할 수 있습니다.
                        </p>
                        <RealTimeTotalView
                          city_name={this.props.city_name}
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
                          one_days_ago_date_kor={
                            this.state.one_days_ago_date_kor
                          }
                          two_days_ago_date_kor={
                            this.state.two_days_ago_date_kor
                          }
                          three_days_ago_date_kor={
                            this.state.three_days_ago_date_kor
                          }
                          four_days_ago_date_kor={
                            this.state.four_days_ago_date_kor
                          }
                          five_days_ago_date_kor={
                            this.state.five_days_ago_date_kor
                          }
                          six_days_ago_date_kor={
                            this.state.six_days_ago_date_kor
                          }
                          seven_days_ago_date_kor={
                            this.state.seven_days_ago_date_kor
                          }
                        />
                      </>
                    )}
                  </div>
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
                    {this.state.isLoading ? (
                      <RoundCircleLoading />
                    ) : (
                      <>
                        <RealTimeCategorylView
                          city_name={this.props.city_name}
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
                          one_days_ago_date_kor={
                            this.state.one_days_ago_date_kor
                          }
                          two_days_ago_date_kor={
                            this.state.two_days_ago_date_kor
                          }
                          three_days_ago_date_kor={
                            this.state.three_days_ago_date_kor
                          }
                          four_days_ago_date_kor={
                            this.state.four_days_ago_date_kor
                          }
                          five_days_ago_date_kor={
                            this.state.five_days_ago_date_kor
                          }
                          six_days_ago_date_kor={
                            this.state.six_days_ago_date_kor
                          }
                          seven_days_ago_date_kor={
                            this.state.seven_days_ago_date_kor
                          }
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
