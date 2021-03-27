import React, { Component } from "react";
import CityMap from "../Map/CityMap";

export default class MainCityMapView extends Component {
  state = {
    currentValue: ""
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ currentValue: "city_close_20" });
  }

  changeYearsValue = (value) => {
    this.setState({ currentValue: value });
  };

  close_19_click_handler = () => {
    this.setState({ currentValue: "city_close_19" });
  };
  close_20_click_handler = () => {
    this.setState({ currentValue: "city_close_20" });
  };
  open_19_click_handler = () => {
    this.setState({ currentValue: "city_open_19" });
  };
  open_20_click_handler = () => {
    this.setState({ currentValue: "city_open_20" });
  };

  render() {
    return (
      <>
        <div className="col-xxl-4 col-lg-4 col-md-12">
          <div className="card">
            <div className="card-block p-0 p-30 h-full">
              <div className="counter text-left">
                <span className="counter-number">3650</span>
                <div className="counter-label text-uppercase mb-20">
                  views of your project
                </div>
                <p>
                  To use justified button groups with{" "}
                  <code>&lt;button&gt;</code> elements, you must wrap each
                  button in a button group. Most browsers don't properly apply
                  our CSS for justification to
                  <code>&lt;button&gt;</code> elements, but since we support
                  button dropdowns, we can work around that.
                </p>
                <div className="example example-buttons">
                  <div className="btn-group btn-group-justified">
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.close_19_click_handler}
                      >
                        <i className="icon md-star" aria-hidden="true"></i>
                        <br />
                        <span className="text-uppercase hidden-sm-down">
                          19년 폐업
                        </span>
                      </button>
                    </div>

                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={this.open_19_click_handler}
                      >
                        <i className="icon md-time" aria-hidden="true"></i>
                        <br />
                        <span className="text-uppercase hidden-sm-down">
                          19년 개업
                        </span>
                      </button>
                    </div>

                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.close_20_click_handler}
                      >
                        <i className="icon md-account" aria-hidden="true"></i>
                        <br />
                        <span className="text-uppercase hidden-sm-down">
                          20년 폐업
                        </span>
                      </button>
                    </div>

                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.open_20_click_handler}
                      >
                        <i className="icon md-account" aria-hidden="true"></i>
                        <br />
                        <span className="text-uppercase hidden-sm-down">
                          20년 개업
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="counter-label text-uppercase mb-20">
                    <CityMap
                      city_close_19={this.props.city_close_19}
                      city_open_19={this.props.city_open_19}
                      city_close_20={this.props.city_close_20}
                      city_open_20={this.props.city_open_20}
                      valueStr={this.state.currentValue}
                      numberComma={this.props.numberWithCommas}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
