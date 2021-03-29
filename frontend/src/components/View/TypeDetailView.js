import React, { Component } from "react";
import StandardTabs from "../Tab/StandardTabs";

export default class TypeDetailView extends Component {
  state = {
    currentValue: "",
    currentValueKor: ""
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      currentValue: "type_detail_close_20",
      currentValueKor: "2020년 폐업"
    });
  }

  changeYearsValue = (value) => {
    this.setState({ currentValue: value });
  };

  close_19_click_handler = () => {
    this.setState({
      currentValue: "type_detail_close_19",
      currentValueKor: "2019년 폐업"
    });
  };
  close_20_click_handler = () => {
    this.setState({
      currentValue: "type_detail_close_20",
      currentValueKor: "2020년 폐업"
    });
  };
  open_19_click_handler = () => {
    this.setState({
      currentValue: "type_detail_open_19",
      currentValueKor: "2019년 개업"
    });
  };
  open_20_click_handler = () => {
    this.setState({
      currentValue: "type_detail_open_20",
      currentValueKor: "2020년 개업"
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
                        className="btn btn-danger"
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
                        className="btn btn-success"
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
                        className="btn btn-danger"
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
                        className="btn btn-success"
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
                <div className="counter-label text-uppercase mb-20">
                  <StandardTabs
                    type_detail_close_19={this.props.type_detail_close_19}
                    type_detail_open_19={this.props.type_detail_open_19}
                    type_detail_close_20={this.props.type_detail_close_20}
                    type_detail_open_20={this.props.type_detail_open_20}
                    yearsValue={this.state.currentValue}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
