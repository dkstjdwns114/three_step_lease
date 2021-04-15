import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import CustomNoRowsOverlay from "./CustomNoRowsOverlay";

import "./dataGrid.css";

const RealTimeTable = (props) => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    if (props.openOrClose === "개업") {
      setColumns([
        { field: "id", headerName: "번호", width: 90 },
        { field: "store_name", headerName: "가게 이름", width: 160 },
        { field: "city", headerName: "행정구역", width: 180 },
        { field: "classification", headerName: "업종", width: 140 },
        { field: "date", headerName: "개업일자", width: 160 }
      ]);
      const rowsData = props.data_list.map((store, idx) => {
        let authorization_date =
          store.authorization_date.substr(0, 4) +
          "년 " +
          store.authorization_date.substr(4, 2) +
          "월 " +
          store.authorization_date.substr(6) +
          "일";
        let city =
          store.address.split(" ")[0] + " " + store.address.split(" ")[1];
        let classification =
          store.detailed_classification === null
            ? store.open_service
            : store.detailed_classification;
        return {
          id: idx + 1,
          store_name: store.store_name,
          city: city,
          classification: classification,
          date: authorization_date
        };
      });
      setRows(rowsData);
    } else if (props.openOrClose === "폐업") {
      setColumns([
        { field: "id", headerName: "번호", width: 90 },
        { field: "store_name", headerName: "가게 이름", width: 160 },
        { field: "city", headerName: "행정구역", width: 180 },
        { field: "classification", headerName: "업종", width: 140 },
        { field: "date", headerName: "폐업일자", width: 160 }
      ]);
      const rowsData = props.data_list.map((store, idx) => {
        let closed_date =
          store.closed_date.substr(0, 4) +
          "년 " +
          store.closed_date.substr(4, 2) +
          "월 " +
          store.closed_date.substr(6) +
          "일";
        let city =
          store.address.split(" ")[0] + " " + store.address.split(" ")[1];
        let classification =
          store.detailed_classification === null
            ? store.open_service
            : store.detailed_classification;
        return {
          id: idx + 1,
          store_name: store.store_name,
          city: city,
          classification: classification,
          date: closed_date
        };
      });
      setRows(rowsData);
    }
  }, [props.data_list]);
  return (
    <>
      <div
        className="pt-5"
        style={{ height: 605, width: "100%", fontSize: "15px" }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          showCellRightBorder={true}
          components={{ NoRowsOverlay: CustomNoRowsOverlay }}
        />
      </div>
    </>
  );
};

export default RealTimeTable;
