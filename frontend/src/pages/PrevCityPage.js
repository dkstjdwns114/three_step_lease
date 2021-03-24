import React, { Component } from "react";
import PrevPageHeader from "../components/Navigation/PrevPageHeader";
import PrevPieChart from "../components/Chart/PrevPieChart";
import PrevTop5Table from "../components/Table/PrevTop5Table";
import PrevSignguTable from "../components/Table/PrevSignguTable";
import PrevLoading from "../components/Loading/PrevLoading";

export default class CityPage extends Component {
  state = {
    isLoading: true,
    cityName: "",
    indsLclsCds: [],
    signgus: [],
    most_coordinates: [],
    path: ""
  };

  componentDidMount() {
    this.setState({ path: this.props.match.path });
    this.fetchData();
  }

  fetchData = () => {
    let cityCode = this.props.match.params.code;
    fetch(`/api/city/${cityCode}`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        this.setState({
          isLoading: false,
          indsLclsCds: resData.indsLclsCds,
          signgus: resData.signgus,
          most_coordinates: resData.most_coordinates,
          cityName: resData.title
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
            <PrevPageHeader headerTitle={`${this.state.cityName} 폐업 현황`} />
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
                  cardDesc={"2019년, 2020년 모두 폐업한 상가가 많은 주소 Top5"}
                  contents={this.state.most_coordinates}
                />
              </div>
              <PrevSignguTable
                cardTitle={`${this.state.cityName} 현황`}
                cardDesc={"시/구 별 현황"}
                numberComma={this.numberWithCommas}
                contents={this.state.signgus}
              />
            </div>
          </>
        )}
      </>
    );
  }
}
