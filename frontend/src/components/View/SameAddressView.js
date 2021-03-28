import React, { Component } from "react";
import PrevSameCoordinatesMap from "../Map/PrevSameCoordinatesMap";
import PrevLoading from "../Loading/PrevLoading";
import SameAddressMap from "../Map/SameAddressMap";
import TestMap from "../Map/TestMap";

export default class SameAddressView extends Component {
  state = {
    isLoading: true,
    same_address: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(`/api/same_address/${this.props.city}`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        this.setState({
          isLoading: false,
          same_address: resData.same_address_list
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
            <div className="col-xxl-12 col-md-12">
              <div className="card">
                <div className="card-block p-0 h-full">
                  <div
                    className="pt-30 px-30"
                    style={{ height: "calc(100% - 250px);" }}
                  >
                    <div className="row">
                      <div className="col-8 pt-30 px-30">
                        <p className="font-size-20 grey-700">CSS ANIMATION</p>
                        <p>
                          Quisque volutpat condimentum velit. Class aptent
                          taciti
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-30 px-30">
                    <div className="col-lg-12">
                      <SameAddressMap address={this.state.same_address} />
                      {/* <PrevSameCoordinatesMap
                        coordinates={this.state.same_coordinates}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="content">
              <div className="row"></div>
              <PrevSameCoordinatesMap
                cardTitle={"지도"}
                cardDesc={`2019년, 2020년 모두 폐업한 상가 위치 총 ${this.numberWithCommas(
                  this.state.same_coordinates.length
                )}개`}
                coordinates={this.state.same_coordinates}
              />
            </div> */}
          </>
        )}
      </>
    );
  }
}
