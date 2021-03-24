import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";

const data = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running"
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(220,220,220,0.2)",
      pointBackgroundColor: "rgba(220,220,220,1)",
      data: ["1", "2", "3", "4", "5", "6", "7"]
    },
    {
      label: "Hidden dataset",
      hidden: true,
      data: ["7", "6", "5", "4", "3", "2", "1"]
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgba(151,187,205,0.2)",
      pointBackgroundColor: "rgba(151,187,205,1)",
      hoverPointBackgroundColor: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: ["4", "5", "6", "1", "2", "7", "1000"]
    }
  ]
};

const options = {
  legend: {
    position: "top"
  },
  title: {
    display: true,
    text: "Chart.js Radar Chart"
  },
  scale: {
    reverse: false,
    gridLines: {
      color: [
        "black",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet"
      ]
    },
    ticks: {
      beginAtZero: true
    }
  }
};

const categoryChart = (props) => {
  return (
    <>
      {/* <div className="panel-body"> */}
      <div className="col-xxl-3 col-lg-6 col-md-12">
        <div class="card card-shadow">
          <div class="card-block p-0 p-30 h-full">
            <div className="card card-shadow">
              <div class="counter text-left">
                <span class="counter-number">3650</span>
                <div class="counter-label text-uppercase mb-20">
                  views of your project
                </div>
              </div>
              <Radar data={data} options={options} width={150} height={150} />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default categoryChart;
