import React, { Component } from "react";
import CityMap from "../Map/CityMap";

export default class MainCityMapView extends Component {
  state = {
    currentValue: "",
    currentValueKor: "",
    defaultBtnClass: "",
    activeBtnClass: "",
    active1: false,
    active2: false,
    active3: true,
    active4: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      currentValue: "city_close_20",
      currentValueKor: "2020년 폐업",
      defaultBtnClass: "btn btn-default",
      activeBtnClass: "btn btn-info"
    });
  }

  changeYearsValue = (value) => {
    this.setState({ currentValue: value });
  };

  close_19_click_handler = () => {
    this.setState({
      currentValue: "city_close_19",
      currentValueKor: "2019년 폐업",
      active1: true,
      active2: false,
      active3: false,
      active4: false
    });
  };
  close_20_click_handler = () => {
    this.setState({
      currentValue: "city_close_20",
      currentValueKor: "2020년 폐업",
      active1: false,
      active2: false,
      active3: true,
      active4: false
    });
  };
  open_19_click_handler = () => {
    this.setState({
      currentValue: "city_open_19",
      currentValueKor: "2019년 개업",
      active1: false,
      active2: true,
      active3: false,
      active4: false
    });
  };
  open_20_click_handler = () => {
    this.setState({
      currentValue: "city_open_20",
      currentValueKor: "2020년 개업",
      active1: false,
      active2: false,
      active3: false,
      active4: true
    });
  };

  render() {
    return (
      <>
        <div className="col-xxl-4 col-lg-4 col-md-12" id="main_city_map">
          <div className="card">
            <div className="card-block p-0 p-30 h-full">
              <div className="counter text-left">
                <span className="counter-number">전국 행정구역별 현황</span>
                <div className="counter-label text-uppercase mb-20">
                  {this.state.currentValueKor}
                </div>
                <p>년도별 개·폐업 버튼 클릭시 해당 년도로 변경됩니다.</p>
                <p>지역 클릭시 해당 지역 상세페이지로 이동합니다.</p>
                <div className="example example-buttons">
                  <div className="btn-group btn-group-justified">
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className={
                          this.state.active1
                            ? this.state.activeBtnClass
                            : this.state.defaultBtnClass
                        }
                        onClick={this.close_19_click_handler}
                      >
                        <span className="text-uppercase">19년 폐업</span>
                      </button>
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className={
                          this.state.active2
                            ? this.state.activeBtnClass
                            : this.state.defaultBtnClass
                        }
                        onClick={this.open_19_click_handler}
                      >
                        <span className="text-uppercase">19년 개업</span>
                      </button>
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className={
                          this.state.active3
                            ? this.state.activeBtnClass
                            : this.state.defaultBtnClass
                        }
                        onClick={this.close_20_click_handler}
                      >
                        <span className="text-uppercase">20년 폐업</span>
                      </button>
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className={
                          this.state.active4
                            ? this.state.activeBtnClass
                            : this.state.defaultBtnClass
                        }
                        onClick={this.open_20_click_handler}
                      >
                        <span className="text-uppercase">20년 개업</span>
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
