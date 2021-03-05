import React, { Component } from "react";
import PageHeader from "../components/Navigation/PageHeader";
import PieChart from "../components/Chart/PieChart";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <PageHeader headerTitle={"메인 페이지"} />
        <div class="content">
          <div class="row">
            {/* Pies */}
            <PieChart cardTitle={"2019년 폐업 현황"} />
            <PieChart cardTitle={"2020년 폐업 현황"} />
            {/* /pies */}
          </div>
        </div>
      </>
    );
  }
}
