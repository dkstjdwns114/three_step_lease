import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

const PieChart = (props) => {
  const [data, setData] = useState({});
  const [options, setOptions] = useState({});

  useEffect(() => {
    let myLabels = [];
    let myData = [];
    let tooltipTitle = "";
    if (props.yearsValue === "type_detail_close_19") {
      tooltipTitle = "2019년 폐업";
      props.close_19.type_list.forEach((list) => {
        myLabels.push(list.kor_type);
        myData.push(list.count);
      });
    } else if (props.yearsValue === "type_detail_open_19") {
      tooltipTitle = "2019년 개업";
      props.open_19.type_list.forEach((list) => {
        myLabels.push(list.kor_type);
        myData.push(list.count);
      });
    } else if (props.yearsValue === "type_detail_close_20") {
      tooltipTitle = "2020년 폐업";
      props.close_20.type_list.forEach((list) => {
        myLabels.push(list.kor_type);
        myData.push(list.count);
      });
    } else if (props.yearsValue === "type_detail_open_20") {
      tooltipTitle = "2020년 개업";
      props.open_20.type_list.forEach((list) => {
        myLabels.push(list.kor_type);
        myData.push(list.count);
      });
    }
    setDataAndOptions(myLabels, myData, tooltipTitle);
  }, [props.yearsValue]);

  const setDataAndOptions = (myLabels, myData, tooltipTitle) => {
    setData({
      labels: myLabels,
      datasets: [
        {
          backgroundColor: [
            "rgba(144, 202, 249, 0.8)",
            "rgba(224, 64, 251, 0.8)",
            "rgba(132, 255, 255, 0.8)",
            "rgba(77, 182, 172, 0.8)",
            "rgba(255, 205, 210, 0.8)",
            "rgba(205, 220, 57, 0.8)",
            "rgba(245, 124, 0, 0.8)",
            "rgba(161, 136, 127, 0.8)",
            "rgba(105, 240, 174, 0.8)",
            "rgba(255, 209, 128, 0.8)",
            "rgba(56, 142, 60, 0.8)"
          ],
          data: myData
        }
      ]
    });
    setOptions({
      tooltips: {
        callbacks: {
          title: (context) => {
            return tooltipTitle;
          },
          label: (context) => {
            let label = " ";
            label += myLabels[context.index] + ": ";
            label += props.numberWithCommas(myData[context.index]) + "개";
            return label;
          }
        }
      }
    });
  };

  return <Pie data={data} options={options} width={120} height={120} />;
};

export default PieChart;
