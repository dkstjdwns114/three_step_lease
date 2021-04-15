import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import CustomNoRowsOverlay from "./CustomNoRowsOverlay";

import "./dataGrid.css";

const columns = [
  { field: "id", headerName: "분류", width: 120 },
  { field: "January", headerName: "1월", width: 95 },
  { field: "February", headerName: "2월", width: 95 },
  { field: "March", headerName: "3월", width: 95 },
  { field: "April", headerName: "4월", width: 95 },
  { field: "May", headerName: "5월", width: 95 },
  { field: "June", headerName: "6월", width: 95 },
  { field: "July", headerName: "7월", width: 95 },
  { field: "August", headerName: "8월", width: 95 },
  { field: "September", headerName: "9월", width: 95 },
  { field: "October", headerName: "10월", width: 95 },
  { field: "November", headerName: "11월", width: 95 },
  { field: "December", headerName: "12월", width: 95 },
  { field: "total", headerName: "합계", width: 100 }
];

const MonthTable = (props) => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    let close19 = { id: "2019년 폐업" };
    let open19 = { id: "2019년 개업" };
    let close20 = { id: "2020년 폐업" };
    let open20 = { id: "2020년 개업" };

    let close19_total = 0;
    let open19_total = 0;
    let close20_total = 0;
    let open20_total = 0;

    props.month_close_19.forEach((data) => {
      close19[data.month] = props.numberWithCommas(data.count) + "개";
      close19_total += data.count;
    });
    props.month_open_19.forEach((data) => {
      open19[data.month] = props.numberWithCommas(data.count) + "개";
      open19_total += data.count;
    });
    props.month_close_20.forEach((data) => {
      close20[data.month] = props.numberWithCommas(data.count) + "개";
      close20_total += data.count;
    });
    props.month_open_20.forEach((data) => {
      open20[data.month] = props.numberWithCommas(data.count) + "개";
      open20_total += data.count;
    });
    setTimeout(() => {
      close19["total"] = props.numberWithCommas(close19_total) + "개";
      open19["total"] = props.numberWithCommas(open19_total) + "개";
      close20["total"] = props.numberWithCommas(close20_total) + "개";
      open20["total"] = props.numberWithCommas(open20_total) + "개";

      setRows([close19, close20, open19, open20]);
    }, 500);
  }, []);
  return (
    <>
      <div className="panel-title" id="month_table">
        <p className="font-size-20 grey-700 mb-5">
          {props.city_name} 최근 2년 월별 개·폐업 표
        </p>
        <span className="panel-desc">
          표 제목 클릭시 해당 열 기준으로 내림차순 또는 오름차순으로 정렬됩니다.
        </span>
      </div>
      <div
        className="panel-body pt-0"
        style={{ height: 310, width: "100%", fontSize: "15px" }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize={true}
          hideFooter={true}
          hideFooterPagination={true}
          components={{ NoRowsOverlay: CustomNoRowsOverlay }}
        />
      </div>
    </>
  );
};

export default MonthTable;
