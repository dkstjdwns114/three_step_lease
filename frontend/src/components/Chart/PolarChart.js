import React, { useEffect, useState } from "react";
import { Polar } from "react-chartjs-2";
import StandardTabs from "../Tab/StandardTabs";

const PolarChart = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // let labelArr = [];
    // let datasetsArr = [];
    // let close_19_data = [];
    // let open_19_data = [];
    // let close_20_data = [];
    // let open_20_data = [];
    // props.type_close_19.forEach((data) => {
    //   labelArr.push(data.type);
    //   close_19_data.push(data.count);
    // });
    // props.type_open_19.forEach((data) => {
    //   open_19_data.push(data.count);
    // });
    // props.type_close_20.forEach((data) => {
    //   close_20_data.push(data.count);
    // });
    // props.type_open_20.forEach((data) => {
    //   open_20_data.push(data.count);
    // });
    // setTimeout(() => {
    //   datasetsArr.push({
    //     label: "2019년 폐업",
    //     backgroundColor: "rgba(220,220,220,0.2)",
    //     pointBackgroundColor: "rgba(220,220,220,1)",
    //     data: close_19_data
    //   });
    //   datasetsArr.push({
    //     label: "2019년 개업",
    //     hidden: true,
    //     data: open_19_data
    //   });
    //   datasetsArr.push({
    //     label: "2020년 폐업",
    //     backgroundColor: "rgba(151,187,205,0.2)",
    //     pointBackgroundColor: "rgba(151,187,205,1)",
    //     hoverPointBackgroundColor: "#fff",
    //     pointHighlightStroke: "rgba(151,187,205,1)",
    //     data: close_20_data
    //   });
    //   datasetsArr.push({
    //     label: "2020년 개업",
    //     hidden: true,
    //     data: open_20_data
    //   });
    setDataAndOptions();
    // }, 500);
  }, []);

  const setDataAndOptions = () => {
    setData({
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: [
            "#90CAF9",
            "#CE93D8",
            "#84FFFF",
            "#B0BEC5",
            "#FFCDD2",
            "#A7FFEB",
            "#FFCCBC"
          ],
          data: [2478, 5267, 734, 784, 433]
        }
      ]
    });
  };

  return <Polar data={data} width={150} height={150} />;
};

export default PolarChart;
