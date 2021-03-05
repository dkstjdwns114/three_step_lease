/*global kakao*/
import React, { useEffect } from "react";
const { kakao } = window;
import { Link } from "react-router-dom";

const MainMap = (props) => {
  useEffect(() => {
    const container = document.getElementById("map_marker_simple");
    const options = {
      center: new kakao.maps.LatLng(36.1683, 127.6358),
      level: 12
    };
    const map = new kakao.maps.Map(container, options);

    map.setZoomable(false);
    let content = `
    <div class="overlaybox">
      <div class="boxtitle">금주 영화순위</div>
        <div class="first">
      </div>
      <ul>
        <li class="up">
          <span class="title">명량</span>
        </li>
      </ul>
    </div>
    `;
    let position = new kakao.maps.LatLng(37.49887, 127.026581);

    let customOverlay = new kakao.maps.CustomOverlay({
      position: position,
      content: content,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    customOverlay.setMap(map);
  }, []);

  return (
    <>
      <div class="card">
        <div class="card-header header-elements-inline">
          <h5 class="card-title">{props.cardTitle}</h5>
        </div>

        <div class="card-body">
          <p class="mb-3">
            Example of basic map <code>markers</code>. A marker identifies a
            location on a map. By default, a marker uses a standard image.
            Markers can display custom images, in which case they are usually
            referred to as "icons." Markers and icons are objects of type{" "}
            <code>Marker</code>. Markers are designed to be interactive, you can
            allow users to move a marker on the map by setting the marker's{" "}
            <code>draggable</code> property to <code>true</code>.
          </p>

          <div
            class="map-container"
            id="map_marker_simple"
            style={{ height: "800px" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default MainMap;
