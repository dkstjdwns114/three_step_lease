import React, { Component } from "react";
import PageHeader from "../components/Navigation/PageHeader";
import PieChart from "../components/Chart/PieChart";
import MainMap from "../components/Map/MainMap";

export default class HomePage extends Component {
  state = {
    isLoading: true,
    ctprvnNm20: [],
    indsLcls19: [],
    indsLcls20: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch("/api/main")
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        this.setState({
          isLoading: false,
          ctprvnNm20: resData.ctprvnNm20,
          indsLcls19: resData.indsLcls19,
          indsLcls20: resData.indsLcls20
        });
      });
  }

  numberWithCommas = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <h2>
            <PageHeader headerTitle={"메인 페이지"} />
            <div class="content">
              <div class="row">
                {/* Pies */}
                <PieChart
                  cardTitle={"2019년 업종별 폐업 현황"}
                  indsLcls={this.state.indsLcls19}
                  numberComma={this.numberWithCommas}
                />
                <PieChart
                  cardTitle={"2020년 업종별 폐업 현황"}
                  indsLcls={this.state.indsLcls20}
                  numberComma={this.numberWithCommas}
                />
                {/* /pies */}
              </div>
              <MainMap
                cardTitle={"2020년 전국 폐업 현황"}
                cities={this.state.ctprvnNm20}
              />
            </div>
          </h2>
        )}
      </>
    );
  }
}
