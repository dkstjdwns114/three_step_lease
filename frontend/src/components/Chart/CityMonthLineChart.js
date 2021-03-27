import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const CityMonthLineChart = (props) => {
  const [data, setData] = useState({});
  const [options, setOptions] = useState({});

  useEffect(() => {
    // let myLabels = [];
    // let myData = [];
    // if (props.yearsValue === "type_detail_close_19") {
    //   props.close_19.type_list.forEach((list) => {
    //     myLabels.push(list.kor_type);
    //     myData.push(list.count);
    //   });
    // } else if (props.yearsValue === "type_detail_open_19") {
    //   props.open_19.type_list.forEach((list) => {
    //     myLabels.push(list.kor_type);
    //     myData.push(list.count);
    //   });
    // } else if (props.yearsValue === "type_detail_close_20") {
    //   props.close_20.type_list.forEach((list) => {
    //     myLabels.push(list.kor_type);
    //     myData.push(list.count);
    //   });
    // } else if (props.yearsValue === "type_detail_open_20") {
    //   props.open_20.type_list.forEach((list) => {
    //     myLabels.push(list.kor_type);
    //     myData.push(list.count);
    //   });
    // }
    // setTimeout(() => {
    setDataAndOptions();
    // }, 500);
  }, [props.yearsValue]);

  const setDataAndOptions = () => {
    setData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "First dataset",
          data: [33, 53, 85, 41, 44, 65],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)"
        },
        {
          label: "Second dataset",
          data: [33, 25, 35, 51, 54, 76],
          fill: false,
          borderColor: "#742774"
        },
        {
          label: "Thrid dataset",
          data: [25, 35, 76, 54, 35, 33],
          fill: false,
          borderColor: "rgba(75,192,192,0.2)"
        }
      ]
    });
    setOptions({
      responsive: true,
      tooltips: {
        mode: "index",
        intersect: false
      },
      hover: {
        mode: "nearest",
        intersect: true
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Month"
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ]
      }
    });
  };

  return <Line data={data} options={options} />;
};

export default CityMonthLineChart;
