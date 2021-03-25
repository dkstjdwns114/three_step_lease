import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";

const CategoryChart = (props) => {
  const [data, setData] = useState({});
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions({
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
        backgroundColor: "rgba(220,220,220,0.2)",
        pointBackgroundColor: "rgba(220,220,220,1)",
        data: close_19_data
      });
      datasetsArr.push({
        label: "2019년 개업",
        hidden: true,
        data: open_19_data
      });
      datasetsArr.push({
        label: "2020년 폐업",
        backgroundColor: "rgba(151,187,205,0.2)",
        pointBackgroundColor: "rgba(151,187,205,1)",
        hoverPointBackgroundColor: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: close_20_data
      });
      datasetsArr.push({
        label: "2020년 개업",
        hidden: true,
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
      <div className="col-xxl-6 col-lg-6 col-md-12">
        <div class="card">
          <div class="card-block p-0 p-30 h-full">
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
    </>
  );
};

export default CategoryChart;
