import React, { useEffect, useState } from "react";
import SmartDataTable from "react-smart-data-table";
import "react-smart-data-table/dist/react-smart-data-table.css";

const SmartTableTest = (props) => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    let close19 = { index: "2019년 폐업" };
    let open19 = { index: "2019년 개업" };
    let close20 = { index: "2020년 폐업" };
    let open20 = { index: "2020년 개업" };

    props.month_close_19.forEach((data) => {
      close19[data.abbreviations] = props.numberComma(data.count);
    });
    props.month_open_19.forEach((data) => {
      open19[data.abbreviations] = props.numberComma(data.count);
    });
    props.month_close_20.forEach((data) => {
      close20[data.abbreviations] = props.numberComma(data.count);
    });
    props.month_open_20.forEach((data) => {
      open20[data.abbreviations] = props.numberComma(data.count);
    });
    setTimeout(() => {
      setTableData([close19, close20, open19, open20]);
    }, 500);
  }, []);

  return (
    <>
      <div className="col-xxl-12 mt-20">
        <div className="panel">
          <header className="panel-heading">
            <div className="panel-title">
              <p className="font-size-20 grey-700">
                {props.city_name} 월별 개·폐업 표
              </p>
              <span className="panel-desc">
                화살표 클릭시 해당 열 기준으로 내림차순 또는 오름차순으로
                정렬됩니다.
              </span>
            </div>
          </header>
          <div className="panel-body">
            <SmartDataTable
              data={tableData}
              name="test-table"
              className="tablesaw table-striped table-bordered table-hover fs-3"
              sortable
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartTableTest;
