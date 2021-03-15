import React, { useEffect } from "react";
const { kakao } = window;

const TestMap = (props) => {
  useEffect(() => {
    const container = document.getElementById("map_marker_simple");

    let map = new kakao.maps.Map(container, {
      center: new kakao.maps.LatLng(35.6783, 127.9558), // 지도의 중심좌표
      level: 13
    });

    let clusterer = new kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 10
    });

    let markers = props.coordinates.map((coordinate) => {
      return new kakao.maps.Marker({
        titile: coordinate.rdmAdr,
        position: new kakao.maps.LatLng(coordinate.lat, coordinate.lon)
      });
    });

    clusterer.addMarkers(markers);
  }, []);

  return (
    <>
      <div class="card">
        <div class="card-header header-elements-inline">
          <h5 class="card-title">{props.cardTitle}</h5>
        </div>
        <div class="card-body">
          <p class="mb-3">{props.cardDesc}</p>
          <div
            class="map-container"
            id="map_marker_simple"
            style={{ height: "600px" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TestMap;
