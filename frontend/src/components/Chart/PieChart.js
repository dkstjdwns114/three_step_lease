import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chart from "react-google-charts";

const pieOptions = {
  title: "",
  slices: [
    {
      color: "#2ec7c9"
    },
    {
      color: "#b6a2de"
    },
    {
      color: "#5ab1ef"
    },
    {
      color: "#ffb980"
    },
    {
      color: "#d87a80"
    },
    {
      color: "#8d98b3"
    },
    {
      color: "#e5cf0d"
    },
    {
      color: "#97b552"
    },
    {
      color: "#e6693e"
    }
  ],
  chartArea: {
    left: 50,
    width: "90%",
    height: "90%"
  },
  fontName: "Roboto",
  backgroundColor: "transparent"
};

const PieChart = (props) => {
  const [qCnt, setQCnt] = useState(0);
  const [pCnt, setPCnt] = useState(0);
  const [rCnt, setRCnt] = useState(0);
  const [dCnt, setDCnt] = useState(0);
  const [nCnt, setNCnt] = useState(0);
  const [sCnt, setSCnt] = useState(0);
  const [fCnt, setFCnt] = useState(0);
  const [oCnt, setOCnt] = useState(0);
  const [lCnt, setLCnt] = useState(0);
  const [totalCnt, setTotalCnt] = useState(0);

  useEffect(() => {
    let total = 0;
    props.indsLcls.forEach((res) => {
      res.type === "소매" && setDCnt(res.count);
      res.type === "생활서비스" && setFCnt(res.count);
      res.type === "부동산" && setLCnt(res.count);
      res.type === "관광/여가/오락" && setNCnt(res.count);
      res.type === "숙박" && setOCnt(res.count);
      res.type === "스포츠" && setPCnt(res.count);
      res.type === "음식" && setQCnt(res.count);
      res.type === "학문/교육" && setRCnt(res.count);
      res.type === "의료" && setSCnt(res.count);
      total += res.count;
    });
    setTotalCnt(total);
  }, []);
  return (
    <>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header header-elements-inline">
            <h5 className="card-title">
              {props.cardTitle}
              <br />
              (총 {props.numberComma(totalCnt)}개)
            </h5>
          </div>
          <div className="card-body">
            <div className="chart-container has-scroll text-center">
              <div className="d-inline-block">
                <Chart
                  width={"500px"}
                  height={"320px"}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["", ""],
                    ["소매", dCnt],
                    ["생활서비스", fCnt],
                    ["부동산", lCnt],
                    ["관광/여가/오락", nCnt],
                    ["숙박", oCnt],
                    ["스포츠", pCnt],
                    ["음식", qCnt],
                    ["학문/교육", rCnt],
                    ["의료", sCnt]
                  ]}
                  options={pieOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChart;
