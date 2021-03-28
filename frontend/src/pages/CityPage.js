import React, { Component } from "react";
import PrevPageHeader from "../components/Navigation/PrevPageHeader";
import PrevPieChart from "../components/Chart/PrevPieChart";
import PrevTop5Table from "../components/Table/PrevTop5Table";
import PrevSignguTable from "../components/Table/PrevSignguTable";
import PrevLoading from "../components/Loading/PrevLoading";
import CityMonthLineChart from "../components/Chart/CityMonthLineChart";
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
    city_code: ""
  };

  componentDidMount() {
    this.setState({
      path: this.props.match.path,
      city_code: this.props.match.params.code
    });
    this.fetchData();
  }

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
                <SameAddressView city={this.state.city_code} />
                <TabsAccording
                  most_close_20={this.state.most_close_20}
                  city={this.state.city_code}
                />
                {/* <CityMonthLineChart />
                <div className="content">
                  <div className="row">
                    <PrevPieChart
                      cardTitle={`${this.state.cityName} 2020년 업종별 폐업 현황`}
                      indsLcls={this.state.indsLclsCds}
                      numberComma={this.numberWithCommas}
                      path={this.state.path}
                    />
                    <PrevTop5Table
                      cardTitle={`${this.state.cityName} 지역별 Top5`}
                      cardDesc={
                        "2019년, 2020년 모두 폐업한 상가가 많은 주소 Top5"
                      }
                      contents={this.state.most_coordinates}
                    />
                  </div>
                  <PrevSignguTable
                    cardTitle={`${this.state.cityName} 현황`}
                    cardDesc={"시/구 별 현황"}
                    numberComma={this.numberWithCommas}
                    contents={this.state.signgus}
                  />
                </div> */}
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
