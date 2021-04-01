import React, { Component } from "react";
import RealTimeBarChart from "../Chart/RealTimeBarChart";
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
    seven_days_ago: {}
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(`/api/real_time/${this.props.city}`)
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
      });
  };

  numberWithCommas = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                  </div>
                </div>
              </div>
              <div className="row pt-30 px-30">
                <div className="col-lg-12">
                  {this.state.isLoading ? (
                    <RoundCircleLoading />
                  ) : (
                    <>
                      <RealTimeBarChart />
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
                      {this.props.city_name} 최근 7일 개·폐업 현황
                    </p>
                    <p>
                      일요일을 제외한 매일 오전 9시에 전날 데이터가 업데이트
                      됩니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row pt-30 px-30">
                <div className="col-lg-12">
                  {this.state.isLoading ? (
                    <RoundCircleLoading />
                  ) : (
                    <>
                      {/* <SameAddressMap
                        address={this.state.same_address}
                        city_hoall_lat={this.props.city_hoall_lat}
                        city_hoall_lng={this.props.city_hoall_lng}
                        same_address_map_level={
                          this.props.same_address_map_level
                        }
                      /> */}
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
