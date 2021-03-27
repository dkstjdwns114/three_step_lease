import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Risk Level", "hello", "world", "test", "test1", "test2", "test3"],
  datasets: [
    {
      label: "Low",
      data: [67.8, 100, 10, 20, 30, 40, 50],
      backgroundColor: "#D6E9C6"
    },
    {
      label: "Moderate",
      data: [20.7, 13, 20, 10, 20, 30, 40],
      backgroundColor: "#FAEBCC"
    },
    {
      label: "High",
      data: [11.4, 20, 30, 40, 50, 20, 10],
      backgroundColor: "#EBCCD1"
    }
  ]
};

const options = {
  scales: {
    xAxes: [{ stacked: true }],
    yAxes: [{ stacked: true }]
  }
};

export default function CityTypeStackedBar() {
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
                <Bar data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
