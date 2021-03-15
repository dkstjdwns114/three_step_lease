import React, { Component } from "react";
import Top5Table from "../components/Table/Top5Table";
import PageHeader from "../components/Navigation/PageHeader";
import SameCoordinatesMap from "../components/Map/SameCoordinatesMap";
import Loading from "../components/Loading/Loading";

export default class SameCoordinatesPage extends Component {
  state = {
    isLoading: true,
    most_area: [],
    most_coordinates: [],
    same_coordinates: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("/api/same_coordinates")
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        this.setState({
          isLoading: false,
          most_area: resData.most_area,
          most_coordinates: resData.most_coordinates,
          same_coordinates: resData.same_coordinates
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
            <PageHeader headerTitle={"2019년, 2020년 모두 폐업한 상가"} />
            <div className="content">
              <div className="row">
                <Top5Table
                  cardTitle={"지역별 Top5"}
                  cardDesc={"2019년, 2020년 모두 폐업한 상가가 많은 지역 Top5"}
                  contents={this.state.most_area}
                />
                <Top5Table
                  cardTitle={"좌표별 Top5"}
                  cardDesc={"2019년, 2020년 모두 폐업한 상가가 많은 주소 Top5"}
                  contents={this.state.most_coordinates}
                />
              </div>
              <SameCoordinatesMap
                cardTitle={"지도"}
                cardDesc={`2019년, 2020년 모두 폐업한 상가 위치 총 ${this.numberWithCommas(
                  this.state.same_coordinates.length
                )}개`}
                coordinates={this.state.same_coordinates}
              />
            </div>
          </>
        )}
      </>
    );
  }
}
