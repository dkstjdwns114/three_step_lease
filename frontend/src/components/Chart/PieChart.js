import React from "react";
import { Link } from "react-router-dom";
import Chart from "react-google-charts";

const pieOptions = {
  title: "",
  slices: [
    {
      color: "#2ec7c9"
    },
    {
      color: "#b6a2de"
    },
    {
      color: "#5ab1ef"
    },
    {
      color: "#ffb980"
    },
    {
      color: "#d87a80"
    },
    {
      color: "#8d98b3"
    },
    {
      color: "#e5cf0d"
    },
    {
      color: "#97b552"
    }
  ],
  chartArea: {
    left: 50,
    width: "90%",
    height: "90%"
  },
  fontName: "Roboto",
  backgroundColor: "transparent"
};

const pieChart = (props) => {
  return (
    <>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header header-elements-inline">
            <h5 class="card-title">{props.cardTitle}</h5>
          </div>

          <div class="card-body">
            {/* <p class="mb-3">설명</p> */}
            <div class="chart-container has-scroll text-center">
              <div class="d-inline-block">
                <Chart
                  width={"500px"}
                  height={"320px"}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Task", "Hours per Day"],
                    ["음식점", 10],
                    ["의료시설", 2],
                    ["Commute", 2],
                    ["Watch TV", 2],
                    ["Sleep", 7]
                  ]}
                  options={pieOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default pieChart;
