import React, { Component } from "react";
import PrevPageHeader from "../components/Navigation/PrevPageHeader";
import PrevPieChart from "../components/Chart/PrevPieChart";
import PrevLoading from "../components/Loading/PrevLoading";
import TestMap from "../components/Map/TestMap";
import ChartistMonth from "../components/Chart/ChartistMonth";
import CategoryChart from "../components/Chart/CategoryChart";
import CityMap from "../components/Map/CityMap";
import TabsAccording from "../components/Table/TabsAccording";

export default class HomeTest extends Component {
  state = {
    isLoading: true,
    ctprvnNm20: [],
    indsLcls19: [],
    indsLcls20: [],
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
          ctprvnNm20: resData.ctprvnNm20,
          indsLcls19: resData.indsLcls19,
          indsLcls20: resData.indsLcls20
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
                <ChartistMonth />
                <CategoryChart />
                <CityMap
                  cardTitle={"2020년 시도별 폐업 현황"}
                  cardDesc={`도시 클릭시 해당 도시의 상세페이지로 이동합니다.`}
                  cities={this.state.ctprvnNm20}
                  numberComma={this.numberWithCommas}
                />
                <TabsAccording />
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
