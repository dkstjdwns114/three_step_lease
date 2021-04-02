import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

const headers = [
  { label: "도로명주소", key: "address" },
  { label: "가게 이름", key: "store_name" },
  { label: "업종 대분류명", key: "open_service" },
  { label: "업종 중분류명", key: "detailed_classification" },
  { label: "폐업일자", key: "closed_store_date" },
  { label: "위도", key: "lat" },
  { label: "경도", key: "lon" }
];

const SameAddressDownLoadCsv = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setListHandler();
  }, [props.same_address_list]);

  const setListHandler = async () => {
    let dataList = [];
    await props.same_address_list.forEach((info) => {
      info.stores_info.forEach((store) => {
        dataList.push({
          address: info.address,
          store_name: store.store_name,
          open_service: store.open_service,
          detailed_classification: store.detailed_classification,
          closed_store_date: store.closed_store_date,
          lat: info.lat,
          lon: info.lon
        });
      });
    });
    setData(dataList);
  };
  return (
    <>
      <CSVLink
        data={data}
        headers={headers}
        filename={`${props.city_name}_1920모두폐업데이터.csv`}
      >
        다운로드
      </CSVLink>
    </>
  );
};

export default SameAddressDownLoadCsv;
