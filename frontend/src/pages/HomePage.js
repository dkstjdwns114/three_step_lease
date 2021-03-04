import React, { Component } from "react";
import PageHeader from "../components/Navigation/PageHeader";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <PageHeader headerTitle={"메인 페이지"} />
        {/* Content area */}
        <div class="content">
          {/* Pies */}
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-header header-elements-inline">
                  <h5 class="card-title">Basic donut chart</h5>
                </div>

                <div class="card-body">
                  <div class="chart-container text-center">
                    <div class="d-inline-block" id="c3-donut-chart"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card">
                <div class="card-header header-elements-inline">
                  <h5 class="card-title">Basic donut chart</h5>
                </div>

                <div class="card-body">
                  <div class="chart-container text-center">
                    <div class="d-inline-block" id="c3-donut-chart"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /pies */}

          {/* Bar chart */}
          <div class="card">
            <div class="card-header header-elements-inline">
              <h5 class="card-title">Basic bar chart</h5>
              <div class="header-elements">
                <div class="list-icons">
                  <a class="list-icons-item" data-action="collapse"></a>
                  <a class="list-icons-item" data-action="reload"></a>
                  <a class="list-icons-item" data-action="remove"></a>
                </div>
              </div>
            </div>

            <div class="card-body">
              <div class="chart-container">
                <div class="chart" id="c3-bar-chart"></div>
              </div>
            </div>
          </div>
          {/* /bar chart */}

          {/* Stacked bar chart */}
          <div class="card">
            <div class="card-header header-elements-inline">
              <h5 class="card-title">Stacked bar chart</h5>
              <div class="header-elements">
                <div class="list-icons">
                  <a class="list-icons-item" data-action="collapse"></a>
                  <a class="list-icons-item" data-action="reload"></a>
                  <a class="list-icons-item" data-action="remove"></a>
                </div>
              </div>
            </div>

            <div class="card-body">
              <div class="chart-container">
                <div class="chart" id="c3-bar-stacked-chart"></div>
              </div>
            </div>
          </div>
          {/* /stacked bar chart */}

          {/* Combined chart */}
          <div class="card">
            <div class="card-header header-elements-inline">
              <h5 class="card-title">Combination of charts</h5>
              <div class="header-elements">
                <div class="list-icons">
                  <a class="list-icons-item" data-action="collapse"></a>
                  <a class="list-icons-item" data-action="reload"></a>
                  <a class="list-icons-item" data-action="remove"></a>
                </div>
              </div>
            </div>

            <div class="card-body">
              <div class="chart-container">
                <div class="chart" id="c3-combined-chart"></div>
              </div>
            </div>
          </div>
          {/* /combined chart */}

          {/* Scatter plot */}
          <div class="card">
            <div class="card-header header-elements-inline">
              <h5 class="card-title">Scatter plot</h5>
              <div class="header-elements">
                <div class="list-icons">
                  <a class="list-icons-item" data-action="collapse"></a>
                  <a class="list-icons-item" data-action="reload"></a>
                  <a class="list-icons-item" data-action="remove"></a>
                </div>
              </div>
            </div>

            <div class="card-body">
              <div class="chart-container">
                <div class="chart" id="c3-scatter-chart"></div>
              </div>
            </div>
          </div>
          {/* /scatter plot  */}
        </div>
        {/* /content area  */}
      </>
    );
  }
}
