import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const RealTimeBarChart = (props) => {
  const [resultData, setResultData] = useState({});
  const [myOptions, setMyOptions] = useState({});

  useEffect(() => {
    const getDataHandler = async () => {
      const openData = await openDataHandler();
      const closeData = await closeDataHandler();
      const labels = await labelDataHandler();
      setResultData({
        labels: labels,
        datasets: [openData, closeData]
      });
    };
    setMyOptions({
      tooltips: {
        callbacks: {
          labelColor: (context) => {
            if (context.datasetIndex === 0) {
              return {
                borderColor: "rgba(77, 208, 225, 1)",
                backgroundColor: "rgba(77, 208, 225, 0.6)"
              };
            } else {
              return {
                borderColor: "rgba(240, 98, 146, 1)",
                backgroundColor: "rgba(240, 98, 146, 0.6)"
              };
            }
          },
          label: (context) => {
            let label = " ";
            if (context.datasetIndex === 0) {
              label += "개업: ";
            } else {
              label += "폐업: ";
            }
            if (context.yLabel !== null) {
              label += props.numberWithCommas(context.yLabel) + "개";
            }
            return label;
          }
        }
      }
    });
    getDataHandler();
  }, [props.one_days_ago_date]);

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
      backgroundColor: "rgba(77, 208, 225, 0.6)",
      borderColor: "rgba(77, 208, 225, 1)"
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
      backgroundColor: "rgba(240, 98, 146, 0.6)",
      borderColor: "rgba(240, 98, 146, 1)"
    };
  };

  const labelDataHandler = () => {
    return [
      props.seven_days_ago_date,
      props.six_days_ago_date,
      props.five_days_ago_date,
      props.four_days_ago_date,
      props.three_days_ago_date,
      props.two_days_ago_date,
      props.one_days_ago_date
    ];
  };

  return (
    <>
      <Bar data={resultData} options={myOptions} />
    </>
  );
};

export default RealTimeBarChart;
