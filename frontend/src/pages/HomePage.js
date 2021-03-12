import React, { Component } from "react";
import PageHeader from "../components/Navigation/PageHeader";
import PieChart from "../components/Chart/PieChart";
import MainMap from "../components/Map/MainMap";

export default class HomePage extends Component {
  state = {
    isLoading: true,
    ctprvnNm20: [],
    indsLcls19: [],
    indsLcls20: [],
    path: ""
  };

  constructor(props) {
    super(props);
  }

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
        console.log(resData);
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
          <h2>Loading...</h2>
        ) : (
          <>
            <PageHeader headerTitle={"메인 페이지"} />
            <div className="content">
              <div className="row">
                {/* Pies */}
                <PieChart
                  cardTitle={"2019년 업종별 폐업 현황"}
                  indsLcls={this.state.indsLcls19}
                  numberComma={this.numberWithCommas}
                  path={this.state.path}
                />
                <PieChart
                  cardTitle={"2020년 업종별 폐업 현황"}
                  indsLcls={this.state.indsLcls20}
                  numberComma={this.numberWithCommas}
                  path={this.state.path}
                />
                {/* /pies */}
              </div>
              <MainMap
                cardTitle={"2020년 시도별 폐업 현황"}
                cities={this.state.ctprvnNm20}
                numberComma={this.numberWithCommas}
              />
            </div>
          </>
        )}
      </>
    );
  }
}
