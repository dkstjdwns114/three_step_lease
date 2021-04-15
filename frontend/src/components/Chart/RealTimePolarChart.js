import React, { useEffect, useState } from "react";
import { Polar } from "react-chartjs-2";
import RealTimeCategoryEmpty from "../Table/RealTimeCategoryEmpty";

const RealTimePolarChart = (props) => {
  const [data, setData] = useState({});
  const [options, setOptions] = useState({});
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setIsEmpty(false);
    let myLabels = [];
    let myData = [];

    props.data_list.forEach((info) => {
      if (info.count !== 0) {
        myLabels.push(info.type);
        myData.push(info.count);
      }
    });
    setDataAndOptions(myLabels, myData);
    if (myData.length === 0) {
      setIsEmpty(true);
    }
  }, [props.data_list, props.tooltipTitle]);

  const setDataAndOptions = (myLabels, myData) => {
    setData({
      labels: myLabels,
      datasets: [
        {
          backgroundColor: [
            "rgba(144, 202, 249, 0.5)",
            "rgba(224, 64, 251, 0.5)",
            "rgba(132, 255, 255, 0.5)",
            "rgba(77, 182, 172, 0.5)",
            "rgba(255, 205, 210, 0.5)",
            "rgba(205, 220, 57, 0.5)",
            "rgba(245, 124, 0, 0.5)",
            "rgba(161, 136, 127, 0.5)",
            "rgba(105, 240, 174, 0.5)",
            "rgba(255, 209, 128, 0.5)",
            "rgba(56, 142, 60, 0.5)"
          ],
          data: myData
        }
      ]
    });
    setOptions({
      tooltips: {
        callbacks: {
          title: (context) => {
            return props.tooltipTitle;
          },
          label: (context) => {
            let label = " ";
            myLabels.forEach((myLabel, idx) => {
              if (context.index === idx) {
                label += myLabel + ": ";
              }
            });
            if (context.yLabel !== null) {
              label += props.numberWithCommas(context.yLabel) + "개";
            }
            return label;
          }
        }
      }
    });
  };

  return (
    <>
      {isEmpty ? (
        <RealTimeCategoryEmpty />
      ) : (
        <>
          <p className="text-center mb-5">
            업종 라벨 클릭시
            <br />
            해당 항목이 추가/제거 됩니다.
          </p>
          <Polar data={data} options={options} width={510} height={320} />
        </>
      )}
    </>
  );
};

export default RealTimePolarChart;
