import React, { Component } from "react";
import BasicTable from "../components/Table/BasicTable";
import PageHeader from "../components/Navigation/PageHeader";
import SameCoordinatesMap from "../components/Map/SameCoordinatesMap";

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
    fetch("/api/same_coordinates")
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        this.setState({
          isLoading: false,
          most_area: resData.most_area,
          most_coordinates: resData.most_coordinates,
          same_coordinates: resData.same_coordinates
        });
      });
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <PageHeader headerTitle={"2019년, 2020년 모두 폐업한 상가"} />
            <div className="content">
              <div className="row">
                <BasicTable
                  cardTitle={"지역별 Top5"}
                  cardDesc={"2019년, 2020년 모두 폐업한 상가가 많은 지역 Top5"}
                  contents={this.state.most_area}
                />
                <BasicTable
                  cardTitle={"좌표별 Top5"}
                  cardDesc={"2019년, 2020년 모두 폐업한 상가가 많은 주소 Top5"}
                  contents={this.state.most_coordinates}
                />
              </div>
              <SameCoordinatesMap
                cardTitle={"2019년, 2020년 모두 폐업한 상가"}
                coordinates={this.state.same_coordinates}
              />
            </div>
          </>
        )}
      </>
    );
  }
}
