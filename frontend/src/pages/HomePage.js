import React, { Component } from "react";
import PrevLoading from "../components/Loading/PrevLoading";
import CategoryChart from "../components/Chart/CategoryChart";
import CityMap from "../components/Map/CityMap";
import TabsAccording from "../components/Tab/TabsAccording";
import MainMonthView from "../components/View/MainMonthView";
import TypeDetailView from "../components/View/TypeDetailView";

export default class HomeTest extends Component {
  state = {
    isLoading: true,
    type_close_19: [],
    type_open_19: [],
    type_close_20: [],
    type_open_20: [],
    city_close_20: [],
    month_close_19: [],
    month_open_19: [],
    month_close_20: [],
    month_open_20: [],
    nationwide_most_close_20: [],
    path: ""
  };

  componentDidMount() {
    this.setState({ path: this.props.match.path });
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
          city_close_20: resData.city_close_20,
          month_close_19: resData.month_close_19,
          month_open_19: resData.month_open_19,
          month_close_20: resData.month_close_20,
          month_open_20: resData.month_open_20,
          nationwide_most_close_20: resData.nationwide_most_close_20
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
                <TypeDetailView />
                {/* <CityMap
                  cardTitle={"2020년 시도별 폐업 현황"}
                  cardDesc={`도시 클릭시 해당 도시의 상세페이지로 이동합니다.`}
                  cities={this.state.city_close_20}
                  numberComma={this.numberWithCommas}
                /> */}
                <TabsAccording
                  nationwide_most_close_20={this.state.nationwide_most_close_20}
                />
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
