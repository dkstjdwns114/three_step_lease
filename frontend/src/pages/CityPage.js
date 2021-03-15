import React, { Component } from "react";
import PageHeader from "../components/Navigation/PageHeader";
import PieChart from "../components/Chart/PieChart";
import Top5Table from "../components/Table/Top5Table";
import SignguTable from "../components/Table/SignguTable";
import Loading from "../components/Loading/Loading";

export default class CityPage extends Component {
  state = {
    isLoading: true,
    cityName: "",
    indsLclsCds: [],
    signgus: [],
    most_coordinates: [],
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
          <Loading />
        ) : (
          <>
            <PageHeader headerTitle={`${this.state.cityName} 폐업 현황`} />
            <div className="content">
              <div className="row">
                <PieChart
                  cardTitle={`${this.state.cityName} 2020년 업종별 폐업 현황`}
                  indsLcls={this.state.indsLclsCds}
                  numberComma={this.numberWithCommas}
                  path={this.state.path}
                />
                <Top5Table
                  cardTitle={`${this.state.cityName} 지역별 Top5`}
                  cardDesc={"2019년, 2020년 모두 폐업한 상가가 많은 지역 Top5"}
                  contents={this.state.most_coordinates}
                />
              </div>
              <SignguTable
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
