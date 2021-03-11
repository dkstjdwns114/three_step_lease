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
          {/* <p class="mb-3">
            Example of basic map <code>markers</code>. A marker identifies a
            location on a map. By default, a marker uses a standard image.
            Markers can display custom images, in which case they are usually
            referred to as "icons." Markers and icons are objects of type{" "}
            <code>Marker</code>. Markers are designed to be interactive, you can
            allow users to move a marker on the map by setting the marker's{" "}
            <code>draggable</code> property to <code>true</code>.
          </p> */}
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
