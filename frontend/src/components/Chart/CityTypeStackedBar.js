import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const options = {
  scales: {
    xAxes: [{ stacked: true }],
    yAxes: [{ stacked: true }]
  }
};

export default function CityTypeStackedBar(props) {
  const [data, setData] = useState({});
  useEffect(() => {
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
        data: close_19_data,
        backgroundColor: "#D6E9C6"
      });
      datasetsArr.push({
        label: "2020년 폐업",
        data: close_20_data,
        backgroundColor: "#FAEBCC"
      });
      datasetsArr.push({
        label: "2019년 개업",
        data: open_19_data,
        backgroundColor: "#EBCCD1"
      });
      datasetsArr.push({
        label: "2020년 개업",
        data: open_20_data,
        backgroundColor: "#CE93D8"
      });
      setDataHandler(labelArr, datasetsArr);
    }, 500);
  }, []);

  const setDataHandler = (labelArr, datasetsArr) => {
    setData({
      labels: labelArr,
      datasets: datasetsArr
    });
  };
  return (
    <>
      <div className="col-xxl-6 col-lg-6 col-md-12">
        <div className="card">
          <div className="card-block p-0 p-30 h-full">
            <div className="counter text-left">
              <span className="counter-number">
                {props.city_name} 업종 중분류 개·폐업 현황
              </span>
              <div className="counter-label text-uppercase mb-20">
                아래의 라벨 클릭시 해당 값이 제거 또는 추가됩니다.
              </div>
              <div className="counter-label text-uppercase mb-20">
                <Bar data={data} options={options} height={"400"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
