import React, { Component } from "react";
import StandardTabs from "../Tab/StandardTabs";

export default class TypeDetailView extends Component {
  state = {
    currentValue: ""
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ currentValue: "type_detail_close_20" });
  }

  changeYearsValue = (value) => {
    this.setState({ currentValue: value });
  };

  close_19_click_handler = () => {
    this.setState({ currentValue: "type_detail_close_19" });
  };
  close_20_click_handler = () => {
    this.setState({ currentValue: "type_detail_close_20" });
  };
  open_19_click_handler = () => {
    this.setState({ currentValue: "type_detail_open_19" });
  };
  open_20_click_handler = () => {
    this.setState({ currentValue: "type_detail_open_20" });
  };

  render() {
    return (
      <>
        <div className="col-xxl-6 col-lg-6 col-md-12">
          <div className="card">
            <div className="card-block p-0 p-30 h-full">
              <div className="counter text-left">
                <span className="counter-number">3650</span>
                <div className="counter-label text-uppercase mb-20">
                  views of your project
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
                          2019년도 폐업
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
                          2019년도 개업
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
                        <i className="icon md-account" aria-hidden="true"></i>
                        <br />
                        <span className="text-uppercase hidden-sm-down">
                          2020년도 개업
                        </span>
                      </button>
                    </div>
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
