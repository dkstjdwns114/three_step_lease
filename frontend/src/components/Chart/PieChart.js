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
            "#90CAF9",
            "#E040FB",
            "#84FFFF",
            "#4DB6AC",
            "#FFCDD2",
            "#CDDC39",
            "#F57C00",
            "#A1887F",
            "#69F0AE",
            "#FFD180",
            "#388E3C"
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
