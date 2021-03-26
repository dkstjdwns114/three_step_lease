import React, { Component } from "react";
import TypeDetailYearsBtn from "../Button/TypeDetailYearsBtn";
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
                <TypeDetailYearsBtn
                  buttonChangeHandler={this.changeYearsValue}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
