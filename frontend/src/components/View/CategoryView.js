import React, { Component } from "react";
import CategoryChart from "../Chart/CategoryChart";

export default class CategoryView extends Component {
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
      currentValue: "type_detail_close_20",
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
      currentValue: "type_detail_close_19",
      currentValueKor: "2019년 폐업",
      active1: true,
      active2: false,
      active3: false,
      active4: false
    });
  };
  close_20_click_handler = () => {
    this.setState({
      currentValue: "type_detail_close_20",
      currentValueKor: "2020년 폐업",
      active1: false,
      active2: false,
      active3: true,
      active4: false
    });
  };
  open_19_click_handler = () => {
    this.setState({
      currentValue: "type_detail_open_19",
      currentValueKor: "2019년 개업",
      active1: false,
      active2: true,
      active3: false,
      active4: false
    });
  };
  open_20_click_handler = () => {
    this.setState({
      currentValue: "type_detail_open_20",
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
        <div className="col-xxl-6 col-lg-6 col-md-12">
          <div className="card">
            <div className="card-block p-0 p-30 h-full">
              <div className="counter text-left">
                <span className="counter-number">
                  {this.props.city_name} 업종 중분류 개·폐업 현황
                </span>
                <div className="counter-label text-uppercase mb-20">
                  {this.state.currentValueKor}
                </div>
                <p>
                  년도별 개·폐업 버튼 클릭시 해당 년도로 변경됩니다. <br />
                  업종 대분류 버튼 클릭시 해당 항목의 중분류 차트가 보여집니다.
                </p>
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
                        <i className="icon md-time" aria-hidden="true"></i>
                        <br />
                        <span className="text-uppercase hidden-sm-down">
                          2019년도 폐업
                        </span>
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
                        <i className="icon md-time" aria-hidden="true"></i>
                        <br />
                        <span className="text-uppercase hidden-sm-down">
                          2019년도 개업
                        </span>
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
                        <i className="icon md-time" aria-hidden="true"></i>
                        <br />
                        <span className="text-uppercase hidden-sm-down">
                          2020년도 폐업
                        </span>
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
                        <i className="icon md-time" aria-hidden="true"></i>
                        <br />
                        <span className="text-uppercase hidden-sm-down">
                          2020년도 개업
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <CategoryChart
                  type_close_19={this.props.type_close_19}
                  type_open_19={this.props.type_open_19}
                  type_close_20={this.props.type_close_20}
                  type_open_20={this.props.type_open_20}
                  yearsValue={this.state.currentValue}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
