import React, { Component } from "react";
import PrevLoading from "../components/Loading/PrevLoading";
import CityMonthView from "../components/View/CityMonthView";
import CityTypeStackedBar from "../components/Chart/CityTypeStackedBar";
import TypeDetailView from "../components/View/TypeDetailView";
import SameAddressView from "../components/View/SameAddressView";
import TabsAccording from "../components/Tab/TabsAccording";

export default class CityPage extends Component {
  state = {
    isLoading: true,
    month_close_19: [],
    month_open_19: [],
    month_close_20: [],
    month_open_20: [],
    type_close_19: [],
    type_open_19: [],
    type_close_20: [],
    type_open_20: [],
    type_detail_close_19: [],
    type_detail_open_19: [],
    type_detail_close_20: [],
    type_detail_open_20: [],
    most_close_20: [],
    same_address: [],
    path: "",
    city_code: "",
    city_hoall_lat: "",
    city_hoall_lng: "",
    same_address_map_level: ""
  };

  componentDidMount() {
    this.setState({
      path: this.props.match.path,
      city_code: this.props.match.params.code
    });
    this.setCityHallCoordinates(this.props.match.params.code);
    this.fetchData();
  }

  setCityHallCoordinates = (city_code) => {
    this.setState({ same_address_map_level: 11 });
    if (city_code === "busan") {
      this.setState({
        city_hoall_lat: 35.17973293209222,
        city_hoall_lng: 129.0750704595212,
        same_address_map_level: 9
      });
    } else if (city_code === "chungbuk") {
      this.setState({
        city_hoall_lat: 36.63560796649084,
        city_hoall_lng: 127.97655434409023
      });
    } else if (city_code === "chungnam") {
      this.setState({
        city_hoall_lat: 36.542379254090626,
        city_hoall_lng: 126.81022377530324
      });
    } else if (city_code === "daegu") {
      this.setState({
        city_hoall_lat: 35.8713744530893,
        city_hoall_lng: 128.6018020525962,
        same_address_map_level: 9
      });
    } else if (city_code === "daejeon") {
      this.setState({
        city_hoall_lat: 36.35055017278345,
        city_hoall_lng: 127.38483211714157,
        same_address_map_level: 9
      });
    } else if (city_code === "gangwon") {
      this.setState({
        city_hoall_lat: 37.75822603443413,
        city_hoall_lng: 128.48496644112984,
        same_address_map_level: 12
      });
    } else if (city_code === "gwangju") {
      this.setState({
        city_hoall_lat: 35.160092943069934,
        city_hoall_lng: 126.85163270703299,
        same_address_map_level: 8
      });
    } else if (city_code === "gyeongbuk") {
      this.setState({
        city_hoall_lat: 36.15443113386747,
        city_hoall_lng: 128.86658989473156,
        same_address_map_level: 12
      });
    } else if (city_code === "gyeongnam") {
      this.setState({
        city_hoall_lat: 35.1999127160616,
        city_hoall_lng: 128.49595212710528
      });
    } else if (city_code === "gyeonggi") {
      this.setState({
        city_hoall_lat: 37.44003915579736,
        city_hoall_lng: 127.06051113622638
      });
    } else if (city_code === "incheon") {
      this.setState({
        city_hoall_lat: 37.45599996769455,
        city_hoall_lng: 126.705260913291,
        same_address_map_level: 10
      });
    } else if (city_code === "jeju") {
      this.setState({
        city_hoall_lat: 33.391904040634316,
        city_hoall_lng: 126.55761200845271
      });
    } else if (city_code === "jeonbuk") {
      this.setState({
        city_hoall_lat: 35.72168172690652,
        city_hoall_lng: 127.12582967098342
      });
    } else if (city_code === "jeonnam") {
      this.setState({
        city_hoall_lat: 34.93866830497094,
        city_hoall_lng: 127.00377642543653
      });
    } else if (city_code === "sejong") {
      this.setState({
        city_hoall_lat: 36.53373898033548,
        city_hoall_lng: 127.30948380077793,
        same_address_map_level: 9
      });
    } else if (city_code === "seoul") {
      this.setState({
        city_hoall_lat: 37.56682195018582,
        city_hoall_lng: 126.97865225946583,
        same_address_map_level: 9
      });
    } else if (city_code === "ulsan") {
      this.setState({
        city_hoall_lat: 35.53947778181926,
        city_hoall_lng: 129.31147053145742,
        same_address_map_level: 9
      });
    }
  };

  fetchData = () => {
    this.setState({ city_code: this.props.match.params.code });
    let cityCode = this.props.match.params.code;

    fetch(`/api/city/${cityCode}`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        this.setState({
          isLoading: false,
          month_close_19: resData.month_data["month_close_19"],
          month_open_19: resData.month_data["month_open_19"],
          month_close_20: resData.month_data["month_close_20"],
          month_open_20: resData.month_data["month_open_20"],
          type_close_19: resData.type_data["type_close_19"],
          type_open_19: resData.type_data["type_open_19"],
          type_close_20: resData.type_data["type_close_20"],
          type_open_20: resData.type_data["type_open_20"],
          type_detail_close_19:
            resData.type_detail_data["type_detail_close_19"],
          type_detail_open_19: resData.type_detail_data["type_detail_open_19"],
          type_detail_close_20:
            resData.type_detail_data["type_detail_close_20"],
          type_detail_open_20: resData.type_detail_data["type_detail_open_20"],
          most_close_20: resData.most_close_20,
          same_address: resData.same_address
        });
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.code !== prevProps.match.params.code) {
      this.setCityHallCoordinates(this.props.match.params.code);
      this.fetchData();
    }
  }

  numberWithCommas = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <PrevLoading />
        ) : (
          <>
            <div className="page-content container-fluid">
              <div className="row" data-plugin="matchHeight" data-by-row="true">
                <CityMonthView
                  month_close_19={this.state.month_close_19}
                  month_open_19={this.state.month_open_19}
                  month_close_20={this.state.month_close_20}
                  month_open_20={this.state.month_open_20}
                  numberComma={this.numberWithCommas}
                />
                <CityTypeStackedBar
                  type_close_19={this.state.type_close_19}
                  type_open_19={this.state.type_open_19}
                  type_close_20={this.state.type_close_20}
                  type_open_20={this.state.type_open_20}
                />
                <TypeDetailView
                  type_detail_close_19={this.state.type_detail_close_19}
                  type_detail_open_19={this.state.type_detail_open_19}
                  type_detail_close_20={this.state.type_detail_close_20}
                  type_detail_open_20={this.state.type_detail_open_20}
                />
                <TabsAccording
                  most_close_20={this.state.most_close_20}
                  city={this.state.city_code}
                />
                <SameAddressView
                  city={this.state.city_code}
                  city_hoall_lat={this.state.city_hoall_lat}
                  city_hoall_lng={this.state.city_hoall_lng}
                  same_address_map_level={this.state.same_address_map_level}
                />
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
