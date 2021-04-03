import React, { Component } from "react";
import TabsAccording from "../components/Tab/TabsAccording";
import MainMonthView from "../components/View/MainMonthView";
import TypeDetailView from "../components/View/TypeDetailView";
import MainCityMapView from "../components/View/MainCityMapView";
import SameAddressView from "../components/View/SameAddressView";
import PageLoading from "../components/Loading/PageLoading";
import CategoryView from "../components/View/CategoryView";
import RealTimeView from "../components/View/RealTimeView";
import MainNavigation from "../components/Navigation/MainNavbar";

export default class HomePage extends Component {
  state = {
    isLoading: true,
    type_close_19: [],
    type_open_19: [],
    type_close_20: [],
    type_open_20: [],
    type_detail_close_19: [],
    type_detail_open_19: [],
    type_detail_close_20: [],
    type_detail_open_20: [],
    city_close_19: [],
    city_open_19: [],
    city_close_20: [],
    city_open_20: [],
    month_close_19: [],
    month_open_19: [],
    month_close_20: [],
    month_open_20: [],
    most_close_20: [],
    path: "",
    city_hoall_lat: "",
    city_hoall_lng: "",
    same_address_map_level: "",
    city_name: "",
    city_code: ""
  };

  componentDidMount() {
    this.setState({
      path: this.props.match.path,
      city_hoall_lat: 35.6783,
      city_hoall_lng: 127.9558,
      same_address_map_level: 13,
      city_name: "전국",
      city_code: "nationwide"
    });
    this.fetchData();
  }

  fetchData = () => {
    fetch("/api/main")
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        this.setState({
          isLoading: false,
          type_close_19: resData.type_close_19,
          type_open_19: resData.type_open_19,
          type_close_20: resData.type_close_20,
          type_open_20: resData.type_open_20,
          type_detail_close_19: resData.type_detail_close_19,
          type_detail_open_19: resData.type_detail_open_19,
          type_detail_close_20: resData.type_detail_close_20,
          type_detail_open_20: resData.type_detail_open_20,
          city_close_19: resData.city_close_19,
          city_open_19: resData.city_open_19,
          city_close_20: resData.city_close_20,
          city_open_20: resData.city_open_20,
          month_close_19: resData.month_close_19,
          month_open_19: resData.month_open_19,
          month_close_20: resData.month_close_20,
          month_open_20: resData.month_open_20,
          most_close_20: resData.nationwide_most_close_20
        });
      });
  };

  numberWithCommas = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    return (
      <>
        <MainNavigation isHome={true} />
        {this.state.isLoading ? (
          <PageLoading />
        ) : (
          <>
            <div className="page">
              <div className="page-content container-fluid">
                <div
                  className="row"
                  data-plugin="matchHeight"
                  data-by-row="true"
                >
                  <RealTimeView
                    city_code={this.state.city_code}
                    city_name={this.state.city_name}
                    numberWithCommas={this.numberWithCommas}
                  />
                  <MainMonthView
                    title={"전국 월별 개·폐업 현황"}
                    desc={
                      "차트 포인트에 마우스를 올려놓으면 해당 항목의 상세 정보를 확인할 수 있습니다"
                    }
                    month_close_19={this.state.month_close_19}
                    month_open_19={this.state.month_open_19}
                    month_close_20={this.state.month_close_20}
                    month_open_20={this.state.month_open_20}
                    numberWithCommas={this.numberWithCommas}
                    city_name={this.state.city_name}
                  />
                  <CategoryView
                    type_close_19={this.state.type_close_19}
                    type_open_19={this.state.type_open_19}
                    type_close_20={this.state.type_close_20}
                    type_open_20={this.state.type_open_20}
                    city_name={this.state.city_name}
                  />
                  <TypeDetailView
                    type_detail_close_19={this.state.type_detail_close_19}
                    type_detail_open_19={this.state.type_detail_open_19}
                    type_detail_close_20={this.state.type_detail_close_20}
                    type_detail_open_20={this.state.type_detail_open_20}
                    city_name={this.state.city_name}
                  />
                  <TabsAccording
                    most_close_20={this.state.most_close_20}
                    city={"nationwide"}
                    city_name={this.state.city_name}
                  />
                  <MainCityMapView
                    city_close_19={this.state.city_close_19}
                    city_open_19={this.state.city_open_19}
                    city_close_20={this.state.city_close_20}
                    city_open_20={this.state.city_open_20}
                    numberWithCommas={this.numberWithCommas}
                  />
                  <SameAddressView
                    city={"nationwide"}
                    city_hoall_lat={this.state.city_hoall_lat}
                    city_hoall_lng={this.state.city_hoall_lng}
                    same_address_map_level={this.state.same_address_map_level}
                    city_name={this.state.city_name}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
