import React, { useEffect } from "react";
const { kakao } = window;

const TestMap = (props) => {
  useEffect(() => {
    const container = document.getElementById("map_marker_simple");

    let map = new kakao.maps.Map(container, {
      center: new kakao.maps.LatLng(props.city_hoall_lat, props.city_hoall_lng), // 지도의 중심좌표
      level: props.same_address_map_level
    });

    let clusterer = new kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 8,
      disableClickZoom: true
    });

    let markers = props.same_address_list.map((coordinate, idx) => {
      if (props.city_name === "전국") {
        let stores_cnt = coordinate.stores_info.length;
        if (stores_cnt < 70) {
          return new kakao.maps.Marker({
            text: coordinate.address,
            position: new kakao.maps.LatLng(coordinate.lat, coordinate.lon)
          });
        }
      } else {
        return new kakao.maps.Marker({
          text: coordinate.address,
          position: new kakao.maps.LatLng(coordinate.lat, coordinate.lon)
        });
      }
    });

    clusterer.addMarkers(markers);

    kakao.maps.event.addListener(clusterer, "clusterclick", function (cluster) {
      let level = map.getLevel() - 1;

      map.setLevel(level, { anchor: cluster.getCenter() });
    });
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

export default TestMap;
