import React, { Component } from "react";
import RoundCircleLoading from "../Loading/RoundCircleLoading";
import SameAddressMap from "../Map/SameAddressMap";

export default class SameAddressView extends Component {
  state = {
    isLoading: true,
    same_address_list: []
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
          same_address_list: resData.same_address_list
        });
      });
  };

  numberWithCommas = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    return (
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
                    {!this.state.isLoading && (
                      <p>
                        Quisque volutpat condimentum velit. Class aptent taciti
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="row pt-30 px-30">
                <div className="col-lg-12">
                  {this.state.isLoading ? (
                    <RoundCircleLoading />
                  ) : (
                    <>
                      {/* <SameAddressMap
                        address={this.state.same_address}
                        city_hoall_lat={this.props.city_hoall_lat}
                        city_hoall_lng={this.props.city_hoall_lng}
                        same_address_map_level={
                          this.props.same_address_map_level
                        }
                      /> */}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
