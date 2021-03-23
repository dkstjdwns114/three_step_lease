import React, { useEffect } from "react";
const { kakao } = window;

const myAddr = [
  "충청남도 당진시 동부1로 15, 당진농협 (대덕동)",
  "강원도 원주시 라옹정길 55, 203호 (관설동)",
  "대구광역시 수성구 지범로23길 34 (지산동)",
  "경상남도 진주시 도동로232번길 14-1 (하대동)",
  "부산광역시 사하구 낙동대로516번길 23 (하단동)"
];

const TestMap = (props) => {
  useEffect(async () => {
    const container = document.getElementById("map_marker_simple");

    let map = new kakao.maps.Map(container, {
      center: new kakao.maps.LatLng(35.6783, 127.9558), // 지도의 중심좌표
      level: 13
    });

    let geocoder = new kakao.maps.services.Geocoder();

    let clusterer = new kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 10
    });
    let coordinates = [];
    await myAddr.forEach((address) => {
      geocoder.addressSearch(address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          coordinates.push({ lat: result[0].y, lng: result[0].x });
        }
      });
    });
    setTimeout(() => {
      let markers = coordinates.map((coordinate) => {
        console.log(coordinate);
        return new kakao.maps.Marker({
          position: new kakao.maps.LatLng(coordinate.lat, coordinate.lng)
        });
      });
      clusterer.addMarkers(markers);
    }, [1000]);
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-header header-elements-inline">
          <h5 className="card-title">{props.cardTitle}</h5>
        </div>
        <div className="card-body">
          <p className="mb-3">{props.cardDesc}</p>
          <div
            className="map-container"
            id="map_marker_simple"
            style={{ height: "600px" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TestMap;
