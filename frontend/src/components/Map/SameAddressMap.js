import React, { useEffect } from "react";
const { kakao } = window;

const SameAddressMap = (props) => {
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
    await props.address.forEach((info) => {
      geocoder.addressSearch(info["address"], (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          coordinates.push({ lat: result[0].y, lng: result[0].x });
        }
      });
    });
    setTimeout(() => {
      let markers = coordinates.map((coordinate) => {
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

export default SameAddressMap;
