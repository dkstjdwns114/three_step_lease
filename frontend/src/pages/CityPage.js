import React, { Component } from "react";
import PageHeader from "../components/Navigation/PageHeader";
import PieChart from "../components/Chart/PieChart";
import BasicTable from "../components/Table/BasicTable";

export default class CityPage extends Component {
  state = {
    isLoading: true,
    cityName: "",
    indsLclsCds: [],
    signgus: [],
    most_coordinates: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("City Page에 들어옴!!!");
    let cityCode = this.props.match.params.code;
    fetch(`/api/city/${cityCode}`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        this.setState({
          isLoading: false,
          indsLclsCds: resData.indsLclsCds,
          signgus: resData.signgus,
          most_coordinates: resData.most_coordinates,
          cityName: resData.title
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
          <>
            <PageHeader headerTitle={`${this.state.cityName} 폐업 현황`} />
            <div className="content">
              <div className="row">
                <PieChart
                  cardTitle={`${this.state.cityName} 2020년 업종별 폐업 현황`}
                  indsLcls={this.state.indsLclsCds}
                  numberComma={this.numberWithCommas}
                />
                <BasicTable
                  cardTitle={`${this.state.cityName} 지역별 Top5`}
                  cardDesc={"2019년, 2020년 모두 폐업한 상가가 많은 지역 Top5"}
                  contents={this.state.most_coordinates}
                />
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
