import React, { useEffect } from "react";
const { kakao } = window;

const SameCoordinatesMap = (props) => {
  useEffect(() => {
    const container = document.getElementById("map_marker_simple");
    const options = {
      center: new kakao.maps.LatLng(35.6783, 127.9558),
      level: 13,
      disableDoubleClickZoom: true
    };
    const map = new kakao.maps.Map(container, options);

    let positions = props.coordinates.map((coordinate) => {
      return {
        title: "",
        latlng: new kakao.maps.LatLng(coordinate.lat, coordinate.lon)
      };
    });

    // 마커 이미지의 이미지 주소입니다
    let imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      let imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage // 마커 이미지
      });
    }
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

export default SameCoordinatesMap;
