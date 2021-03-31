import React, { useEffect, useState } from "react";
import { HorizontalBar } from "react-chartjs-2";

const options = {
  legend: { display: false }
};

const HorizontalBarChart = (props) => {
  const [data, setData] = useState({});

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
    setDataAndOptions(labels, datas);
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
    setDataAndOptions(labels, datas);
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
    setDataAndOptions(labels, datas);
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
    setDataAndOptions(labels, datas);
  };

  const setDataAndOptions = (myLabels, myData) => {
    setData({
      labels: myLabels,
      datasets: [
        {
          backgroundColor: [
            "#AB47BC",
            "#F06292",
            "#4FC3F7",
            "#D4E157",
            "#B9F6CA",
            "#9FA8DA",
            "#FF7043"
          ],
          data: myData
        }
      ]
    });
  };

  return (
    <>
      <HorizontalBar data={data} options={options} width={150} height={150} />
    </>
  );
};

export default HorizontalBarChart;
