import React, { useEffect, useState } from "react";
import { HorizontalBar } from "react-chartjs-2";

const HorizontalBarChart = (props) => {
  const [data, setData] = useState({});
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (props.yearsValue === "type_detail_close_19") {
      type_close_19_handler();
    } else if (props.yearsValue === "type_detail_open_19") {
      type_open_19_handler();
    } else if (props.yearsValue === "type_detail_close_20") {
      type_close_20_handler();
    } else if (props.yearsValue === "type_detail_open_20") {
      type_open_20_handler();
    }
  }, [props.yearsValue]);

  const type_close_19_handler = async () => {
    const sorted_close_19 = await props.type_close_19.sort((a, b) => {
      return a.count > b.count ? -1 : a.count < b.count ? 1 : 0;
    });
    const labels = await sorted_close_19.map((data) => {
      return data.type;
    });
    const datas = await sorted_close_19.map((data) => {
      return data.count;
    });
    setDataAndOptions(labels, datas, "2019년 폐업");
  };

  const type_close_20_handler = async () => {
    const sorted_close_20 = await props.type_close_20.sort((a, b) => {
      return a.count > b.count ? -1 : a.count < b.count ? 1 : 0;
    });
    const labels = await sorted_close_20.map((data) => {
      return data.type;
    });
    const datas = await sorted_close_20.map((data) => {
      return data.count;
    });
    setDataAndOptions(labels, datas, "2020년 폐업");
  };

  const type_open_19_handler = async () => {
    const sorted_open_19 = await props.type_open_19.sort((a, b) => {
      return a.count > b.count ? -1 : a.count < b.count ? 1 : 0;
    });
    const labels = await sorted_open_19.map((data) => {
      return data.type;
    });
    const datas = await sorted_open_19.map((data) => {
      return data.count;
    });
    setDataAndOptions(labels, datas, "2019년 개업");
  };

  const type_open_20_handler = async () => {
    const sorted_open_20 = await props.type_open_20.sort((a, b) => {
      return a.count > b.count ? -1 : a.count < b.count ? 1 : 0;
    });
    const labels = await sorted_open_20.map((data) => {
      return data.type;
    });
    const datas = await sorted_open_20.map((data) => {
      return data.count;
    });
    setDataAndOptions(labels, datas, "2020년 개업");
  };

  const setDataAndOptions = (myLabels, myData, tooltipTitle) => {
    setData({
      labels: myLabels,
      datasets: [
        {
          backgroundColor: [
            "rgba(171, 71, 188, 0.6)",
            "rgba(240, 98, 146, 0.6)",
            "rgba(79, 195, 247, 0.6)",
            "rgba(212, 225, 87, 0.6)",
            "rgba(185, 246, 202, 0.6)",
            "rgba(159, 168, 218, 0.6)",
            "rgba(255, 112, 67, 0.6)"
          ],
          data: myData
        }
      ]
    });
    setOptions({
      legend: { display: false },
      tooltips: {
        callbacks: {
          title: (context) => {
            return tooltipTitle;
          },
          label: (context) => {
            let label = " " + context.label + ": ";
            label += props.numberWithCommas(context.xLabel) + "개";
            return label;
          }
        }
      }
    });
  };

  return (
    <>
      <HorizontalBar data={data} options={options} width={150} height={150} />
    </>
  );
};

export default HorizontalBarChart;
