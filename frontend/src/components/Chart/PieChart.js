import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

const PieChart = (props) => {
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
    setDataAndOptions(myLabels, myData);
  }, [props.yearsValue]);

  const setDataAndOptions = (myLabels, myData) => {
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
  };

  return <Pie data={data} width={120} height={120} />;
};

export default PieChart;
