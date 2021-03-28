import React, { Component } from "react";
import PrevLoading from "../components/Loading/PrevLoading";
import CategoryChart from "../components/Chart/CategoryChart";
import TabsAccording from "../components/Tab/TabsAccording";
import MainMonthView from "../components/View/MainMonthView";
import TypeDetailView from "../components/View/TypeDetailView";

import MainCityMapView from "../components/View/MainCityMapView";
import SameAddressView from "../components/View/SameAddressView";

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
    same_address_map_level: ""
  };

  componentDidMount() {
    this.setState({
      path: this.props.match.path,
      city_hoall_lat: 35.6783,
      city_hoall_lng: 127.9558,
      same_address_map_level: 13
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
        {this.state.isLoading ? (
          <PrevLoading />
        ) : (
          <>
            <div className="page-content container-fluid">
              <div className="row" data-plugin="matchHeight" data-by-row="true">
                <MainMonthView
                  month_close_19={this.state.month_close_19}
                  month_open_19={this.state.month_open_19}
                  month_close_20={this.state.month_close_20}
                  month_open_20={this.state.month_open_20}
                  numberComma={this.numberWithCommas}
                />
                <CategoryChart
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
                  city={"nationwide"}
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
                />
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
