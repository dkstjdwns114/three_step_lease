import React, { useEffect } from "react";
const { kakao } = window;

const SameCoordinatesMap = (props) => {
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
  }, [props]);

  return (
    <>
      <div className="card">
        <div className="card-body">
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

export default SameCoordinatesMap;
