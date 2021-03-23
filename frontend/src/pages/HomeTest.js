import React, { Component } from "react";
import PageHeader from "../components/Navigation/PageHeader";
import PieChart from "../components/Chart/PieChart";
import MainMap from "../components/Map/MainMap";
import Loading from "../components/Loading/Loading";
import TestMap from "../components/Map/TestMap";
import ChartistTest from "../components/Chart/ChartistTest";

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
          <Loading />
        ) : (
          <>
            <div className="page-content container-fluid">
              <ChartistTest />
            </div>
          </>
        )}
      </>
    );
  }
}
