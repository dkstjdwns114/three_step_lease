import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const CityMonthLineChart = (props) => {
  const [data, setData] = useState({});
  const [options, setOptions] = useState({});

  useEffect(() => {
    let close_19_data = [];
    let open_19_data = [];
    let close_20_data = [];
    let open_20_data = [];

    let labelsArr = [];
    let datasetsArr = [];

    props.month_close_19.forEach((data) => {
      labelsArr.push(data.month_num + "월");
      close_19_data.push(data.count);
    });
    props.month_open_19.forEach((data) => {
      open_19_data.push(data.count);
    });
    props.month_close_20.forEach((data) => {
      close_20_data.push(data.count);
    });
    props.month_open_20.forEach((data) => {
      open_20_data.push(data.count);
    });
    setTimeout(() => {
      datasetsArr.push({
        label: "2019년 폐업",
        data: close_19_data,
        fill: true,
        backgroundColor: "rgba(178, 235, 242, 0.3)",
        borderColor: "#4DD0E1"
      });
      datasetsArr.push({
        label: "2020년 폐업",
        data: close_20_data,
        fill: true,
        backgroundColor: "rgba(225, 190, 231, 0.3)",
        borderColor: "#AB47BC"
      });
      datasetsArr.push({
        label: "2019년 개업",
        data: open_19_data,
        fill: false,
        borderColor: "#81C784"
      });
      datasetsArr.push({
        label: "2020년 개업",
        data: open_20_data,
        fill: false,
        borderColor: "#E91E63"
      });
      setDataAndOptions(labelsArr, datasetsArr);
    }, 500);
  }, []);

  const setDataAndOptions = (labelsArr, datasetsArr) => {
    setData({
      labels: labelsArr,
      datasets: datasetsArr
    });
    setOptions({
      responsive: true,
      tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
          labelColor: (context) => {
            if (context.datasetIndex === 0) {
              return {
                borderColor: "#4DD0E1",
                backgroundColor: "#4DD0E1"
              };
            } else if (context.datasetIndex === 1) {
              return {
                borderColor: "#AB47BC",
                backgroundColor: "#AB47BC"
              };
            } else if (context.datasetIndex === 2) {
              return {
                borderColor: "#81C784",
                backgroundColor: "#81C784"
              };
            } else if (context.datasetIndex === 3) {
              return {
                borderColor: "#E91E63",
                backgroundColor: "#E91E63"
              };
            }
          },
          label: (context) => {
            let label = "";
            if (context.datasetIndex === 0) {
              label += "2019년 폐업: ";
              label += props.numberWithCommas(context.yLabel) + "개";
            } else if (context.datasetIndex === 1) {
              label += "2020년 폐업: ";
              label += props.numberWithCommas(context.yLabel) + "개";
            } else if (context.datasetIndex === 2) {
              label += "2019년 개업: ";
              label += props.numberWithCommas(context.yLabel) + "개";
            } else if (context.datasetIndex === 3) {
              label += "2020년 개업: ";
              label += props.numberWithCommas(context.yLabel) + "개";
            }
            return label;
          }
        }
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
              display: true
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
