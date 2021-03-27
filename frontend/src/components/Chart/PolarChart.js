import React, { useEffect, useState } from "react";
import { Polar } from "react-chartjs-2";

const PolarChart = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    let myLabels = [];
    let myData = [];
    if (props.yearsValue === "type_detail_close_19") {
      props.close_19.type_list.forEach((list) => {
        myLabels.push(list.kor_type);
        myData.push(list.count);
      });
    } else if (props.yearsValue === "type_detail_open_19") {
      props.open_19.type_list.forEach((list) => {
        myLabels.push(list.kor_type);
        myData.push(list.count);
      });
    } else if (props.yearsValue === "type_detail_close_20") {
      props.close_20.type_list.forEach((list) => {
        myLabels.push(list.kor_type);
        myData.push(list.count);
      });
    } else if (props.yearsValue === "type_detail_open_20") {
      props.open_20.type_list.forEach((list) => {
        myLabels.push(list.kor_type);
        myData.push(list.count);
      });
    }
    setTimeout(() => {
      setDataAndOptions(myLabels, myData);
    }, 500);
  }, [props.yearsValue]);

  const setDataAndOptions = (myLabels, myData) => {
    setData({
      labels: myLabels,
      datasets: [
        {
          backgroundColor: [
            "#90CAF9",
            "#CE93D8",
            "#84FFFF",
            "#B0BEC5",
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
  };

  return <Polar data={data} width={120} height={120} />;
};

export default PolarChart;
