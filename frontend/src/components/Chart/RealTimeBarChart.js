import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const RealTimeBarChart = (props) => {
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    console.log(props);
    const getDataHandler = async () => {
      const openData = await openDataHandler();
      const closeData = await closeDataHandler();
      const labels = await labelDataHandler();
      setResultData({
        labels: labels,
        datasets: [openData, closeData]
      });
    };
    getDataHandler();
  }, [props.one_days_ago]);

  const openDataHandler = () => {
    const one_days_ago = props.one_days_ago.open.total;
    const two_days_ago = props.two_days_ago.open.total;
    const three_days_ago = props.three_days_ago.open.total;
    const four_days_ago = props.four_days_ago.open.total;
    const five_days_ago = props.five_days_ago.open.total;
    const six_days_ago = props.six_days_ago.open.total;
    const seven_days_ago = props.seven_days_ago.open.total;

    return {
      label: "개업",
      data: [
        seven_days_ago,
        six_days_ago,
        five_days_ago,
        four_days_ago,
        three_days_ago,
        two_days_ago,
        one_days_ago
      ],
      backgroundColor: "rgba(0, 99, 132, 0.6)",
      borderColor: "rgba(0, 99, 132, 1)"
    };
  };

  const closeDataHandler = () => {
    const one_days_ago = props.one_days_ago.close.total;
    const two_days_ago = props.two_days_ago.close.total;
    const three_days_ago = props.three_days_ago.close.total;
    const four_days_ago = props.four_days_ago.close.total;
    const five_days_ago = props.five_days_ago.close.total;
    const six_days_ago = props.six_days_ago.close.total;
    const seven_days_ago = props.seven_days_ago.close.total;

    return {
      label: "폐업",
      data: [
        seven_days_ago,
        six_days_ago,
        five_days_ago,
        four_days_ago,
        three_days_ago,
        two_days_ago,
        one_days_ago
      ],
      backgroundColor: "rgba(0, 99, 132, 0.6)",
      backgroundColor: "rgba(99, 132, 0, 0.6)",
      borderColor: "rgba(99, 132, 0, 1)"
    };
  };

  const labelDataHandler = () => {
    const one_days_ago = substrDate(props.one_days_ago.date);
    const two_days_ago = substrDate(props.two_days_ago.date);
    const three_days_ago = substrDate(props.three_days_ago.date);
    const four_days_ago = substrDate(props.four_days_ago.date);
    const five_days_ago = substrDate(props.five_days_ago.date);
    const six_days_ago = substrDate(props.six_days_ago.date);
    const seven_days_ago = substrDate(props.seven_days_ago.date);

    return [
      seven_days_ago,
      six_days_ago,
      five_days_ago,
      four_days_ago,
      three_days_ago,
      two_days_ago,
      one_days_ago
    ];
  };

  const substrDate = (date) => {
    const month = date.substr(4, 2);
    const day = date.substr(6, 2);
    const result = month + "/" + day;
    return result;
  };
  return (
    <>
      <Bar data={resultData} />
    </>
  );
};

export default RealTimeBarChart;
