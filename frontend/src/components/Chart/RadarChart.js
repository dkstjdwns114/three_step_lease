import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = (props) => {
  const [data, setData] = useState({});
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions({
      scale: {
        reverse: false,
        gridLines: {
          color: [
            "#424242",
            "#F50057",
            "#9FA8DA",
            "#64B5F6",
            "#FF7043",
            "#AED581",
            "#B3E5FC",
            "#F06292",
            "#42A5F5",
            "#9C27B0",
            "#FF1744"
          ]
        }
      }
    });
    let labelArr = [];
    let datasetsArr = [];
    let close_19_data = [];
    let open_19_data = [];
    let close_20_data = [];
    let open_20_data = [];

    props.type_close_19.forEach((data) => {
      labelArr.push(data.type);
      close_19_data.push(data.count);
    });
    props.type_open_19.forEach((data) => {
      open_19_data.push(data.count);
    });
    props.type_close_20.forEach((data) => {
      close_20_data.push(data.count);
    });
    props.type_open_20.forEach((data) => {
      open_20_data.push(data.count);
    });
    setTimeout(() => {
      datasetsArr.push({
        label: "2019년 폐업",
        backgroundColor: "rgba(238, 255, 65, 0.2)",
        pointBackgroundColor: "rgba(238, 255, 65, 1)",
        pointHighlightStroke: "rgba(238, 255, 65, 1)",
        hoverPointBackgroundColor: "#fff",
        data: close_19_data
      });
      datasetsArr.push({
        label: "2020년 폐업",
        backgroundColor: "rgba(240, 98, 146, 0.2)",
        pointBackgroundColor: "rgba(240, 98, 146, 1)",
        pointHighlightStroke: "rgba(240, 98, 146, 1)",
        hoverPointBackgroundColor: "#fff",
        data: close_20_data
      });
      datasetsArr.push({
        label: "2019년 개업",
        hidden: true,
        backgroundColor: "rgba(105, 240, 174, 0.2)",
        pointBackgroundColor: "rgba(105, 240, 174, 1)",
        pointHighlightStroke: "rgba(105, 240, 174, 1)",
        hoverPointBackgroundColor: "#fff",
        data: open_19_data
      });
      datasetsArr.push({
        label: "2020년 개업",
        hidden: true,
        backgroundColor: "rgba(100, 181, 246, 0.2)",
        pointBackgroundColor: "rgba(100, 181, 246, 1)",
        pointHighlightStroke: "rgba(100, 181, 246, 1)",
        hoverPointBackgroundColor: "#fff",
        data: open_20_data
      });
      setDataAndOptions(labelArr, datasetsArr);
    }, 500);
  }, []);

  const setDataAndOptions = (labelArr, datasetsArr) => {
    setData({
      labels: labelArr,
      datasets: datasetsArr
    });
  };
  return (
    <>
      <Radar data={data} options={options} width={150} height={150} />
    </>
  );
};
export default RadarChart;
