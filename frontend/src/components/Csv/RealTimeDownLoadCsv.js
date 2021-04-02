import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

const headers = [
  { label: "주소", key: "address" },
  { label: "가게 이름", key: "store_name" },
  { label: "업종 대분류명", key: "open_service" },
  { label: "업종 중분류명", key: "detailed_classification" },
  { label: "개업일자", key: "authorization_date" },
  { label: "폐업일자", key: "closed_date" },
  { label: "개·폐업 상태", key: "state" }
];

const RealTimeDownLoadCsv = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setListHandler();
  }, [props.data_list]);

  const setListHandler = async () => {
    let dataList = [];
    await props.data_list.forEach((info) => {
      dataList.push({
        address: info.address,
        store_name: info.store_name,
        open_service: info.open_service,
        detailed_classification: info.detailed_classification,
        authorization_date: info.authorization_date,
        closed_date: info.closed_date,
        state: info.state
      });
    });
    setData(dataList);
  };
  return (
    <>
      <CSVLink
        data={data}
        headers={headers}
        filename={`${props.city_name}_${props.date_kor}_${props.openOrClose}데이터.csv`}
      >
        다운로드
      </CSVLink>
    </>
  );
};

export default RealTimeDownLoadCsv;
