import React, { useEffect } from "react";
const { kakao } = window;

const MainMap = (props) => {
  useEffect(() => {
    let busan;
    let chungbuk;
    let chungnam;
    let daegu;
    let daejeon;
    let gangwon;
    let gwangju;
    let gyeonggi;
    let gyeongbuk;
    let gyeongnam;
    let incheon;
    let jeju;
    let jeonbuk;
    let jeonnam;
    let sejong;
    let seoul;
    let ulsan;

    props.cities.forEach((res) => {
      res.city === "busan" && (busan = res.count);
      res.city === "chungbuk" && (chungbuk = res.count);
      res.city === "chungnam" && (chungnam = res.count);
      res.city === "daegu" && (daegu = res.count);
      res.city === "daejeon" && (daejeon = res.count);
      res.city === "gangwon" && (gangwon = res.count);
      res.city === "gwangju" && (gwangju = res.count);
      res.city === "gyeonggi" && (gyeonggi = res.count);
      res.city === "gyeongbuk" && (gyeongbuk = res.count);
      res.city === "gyeongnam" && (gyeongnam = res.count);
      res.city === "incheon" && (incheon = res.count);
      res.city === "jeju" && (jeju = res.count);
      res.city === "jeonbuk" && (jeonbuk = res.count);
      res.city === "jeonnam" && (jeonnam = res.count);
      res.city === "sejong" && (sejong = res.count);
      res.city === "seoul" && (seoul = res.count);
      res.city === "ulsan" && (ulsan = res.count);
    });

    const container = document.getElementById("map_marker_simple");
    const options = {
      center: new kakao.maps.LatLng(35.6783, 127.9558),
      level: 13,
      disableDoubleClickZoom: true
    };
    const map = new kakao.maps.Map(container, options);

    // 마우스 드래그와 모바일 터치를 이용한 지도 이동을 막는다
    map.setDraggable(false);

    // 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소를 막는다
    map.setZoomable(false);

    // 경기
    let gyeonggidoContent = `
      <a href="/city/41">
        <div class="overlaybox">
          <div class="boxtitle">경기</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(gyeonggi)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let gyeonggidoPosition = new kakao.maps.LatLng(37.63887, 127.436581);

    let gyeonggidoOverlay = new kakao.maps.CustomOverlay({
      position: gyeonggidoPosition,
      content: gyeonggidoContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    gyeonggidoOverlay.setMap(map);
    // end 경기

    // 서울
    let seoulContent = `
      <a href="/city/11">
        <div class="overlaybox">
          <div class="boxtitle">서울</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(seoul)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let seoulPosition = new kakao.maps.LatLng(36.97112, 127.757781);

    let seoulOverlay = new kakao.maps.CustomOverlay({
      position: seoulPosition,
      content: seoulContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    seoulOverlay.setMap(map);
    // end 서울

    // 인천
    let incheonContent = `
      <a href="/city/28">
        <div class="overlaybox">
          <div class="boxtitle">인천</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(incheon)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let incheonPosition = new kakao.maps.LatLng(37.00887, 126.846581);

    let incheonOverlay = new kakao.maps.CustomOverlay({
      position: incheonPosition,
      content: incheonContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    incheonOverlay.setMap(map);
    // end 인천

    // 강원
    let gangwondoContent = `
      <a href="/city/42">
        <div class="overlaybox">
          <div class="boxtitle">강원</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(gangwon)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let gangwondoPosition = new kakao.maps.LatLng(37.78889, 128.446977);

    let gangwondoOverlay = new kakao.maps.CustomOverlay({
      position: gangwondoPosition,
      content: gangwondoContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    gangwondoOverlay.setMap(map);
    // end 강원

    // 충북
    let chungbukContent = `
      <a href="/city/43">
        <div class="overlaybox">
          <div class="boxtitle">충북</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(chungbuk)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let chungbukPosition = new kakao.maps.LatLng(37.23889, 128.616977);

    let chungbukOverlay = new kakao.maps.CustomOverlay({
      position: chungbukPosition,
      content: chungbukContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    chungbukOverlay.setMap(map);
    // end 충북

    // 경북
    let gyeongbukContent = `
      <a href="/city/47">
        <div class="overlaybox">
          <div class="boxtitle">경북</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(gyeongbuk)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let gyeongbukPosition = new kakao.maps.LatLng(36.68889, 128.846977);

    let gyeongbukOverlay = new kakao.maps.CustomOverlay({
      position: gyeongbukPosition,
      content: gyeongbukContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    gyeongbukOverlay.setMap(map);
    // end 경북

    // 충남
    let chungnamContent = `
      <a href="/city/44">
        <div class="overlaybox">
          <div class="boxtitle">충남</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(chungnam)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let chungnamPosition = new kakao.maps.LatLng(36.36887, 126.766581);

    let chungnamOverlay = new kakao.maps.CustomOverlay({
      position: chungnamPosition,
      content: chungnamContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    chungnamOverlay.setMap(map);
    // end 충남

    // 세종
    let sejongContent = `
      <a href="/city/36">
        <div class="overlaybox">
          <div class="boxtitle">세종</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(sejong)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let sejongPosition = new kakao.maps.LatLng(36.39887, 127.746581);

    let sejongOverlay = new kakao.maps.CustomOverlay({
      position: sejongPosition,
      content: sejongContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    sejongOverlay.setMap(map);
    // end 세종

    // 대전
    let daejeonContent = `
      <a href="/city/30">
        <div class="overlaybox">
          <div class="boxtitle">대전</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(daejeon)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let daejeonPosition = new kakao.maps.LatLng(35.78345, 127.886581);

    let daejeonOverlay = new kakao.maps.CustomOverlay({
      position: daejeonPosition,
      content: daejeonContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    daejeonOverlay.setMap(map);
    // end 대전

    // 대구
    let daeguContent = `
      <a href="/city/27">
        <div class="overlaybox">
          <div class="boxtitle">대구</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(daegu)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let daeguPosition = new kakao.maps.LatLng(36.01889, 128.766977);

    let daeguOverlay = new kakao.maps.CustomOverlay({
      position: daeguPosition,
      content: daeguContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    daeguOverlay.setMap(map);
    // end 대구

    // 전북
    let jeonbukContent = `
      <a href="/city/45">
        <div class="overlaybox">
          <div class="boxtitle">전북</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(jeonbuk)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let jeonbukPosition = new kakao.maps.LatLng(35.76887, 126.856581);

    let jeonbukOverlay = new kakao.maps.CustomOverlay({
      position: jeonbukPosition,
      content: jeonbukContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    jeonbukOverlay.setMap(map);
    // end 전북

    // 광주
    let gwangjuContent = `
      <a href="/city/29">
        <div class="overlaybox">
          <div class="boxtitle">광주</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(gwangju)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let gwangjuPosition = new kakao.maps.LatLng(35.10887, 126.646581);

    let gwangjuOverlay = new kakao.maps.CustomOverlay({
      position: gwangjuPosition,
      content: gwangjuContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    gwangjuOverlay.setMap(map);
    // end 광주

    // 전남
    let jeonnamContent = `
      <a href="/city/46">
        <div class="overlaybox">
          <div class="boxtitle">전남</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(jeonnam)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let jeonnamPosition = new kakao.maps.LatLng(34.50887, 126.746581);

    let jeonnamOverlay = new kakao.maps.CustomOverlay({
      position: jeonnamPosition,
      content: jeonnamContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    jeonnamOverlay.setMap(map);
    // end 전남

    // 경남
    let gyeongnamContent = `
      <a href="/city/48">
        <div class="overlaybox">
          <div class="boxtitle">경남</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(gyeongnam)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let gyeongnamPosition = new kakao.maps.LatLng(35.10887, 127.546581);

    let gyeongnamOverlay = new kakao.maps.CustomOverlay({
      position: gyeongnamPosition,
      content: gyeongnamContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    gyeongnamOverlay.setMap(map);
    // end 경남

    // 부산
    let busanContent = `
      <a href="/city/26">
        <div class="overlaybox">
          <div class="boxtitle">부산</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(busan)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let busanPosition = new kakao.maps.LatLng(34.50587, 127.776581);

    let busanOverlay = new kakao.maps.CustomOverlay({
      position: busanPosition,
      content: busanContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    busanOverlay.setMap(map);
    // end 부산

    // 울산
    let ulsanContent = `
      <a href="/city/31">
        <div class="overlaybox">
          <div class="boxtitle">울산</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(ulsan)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let ulsanPosition = new kakao.maps.LatLng(35.20587, 128.626581);

    let ulsanOverlay = new kakao.maps.CustomOverlay({
      position: ulsanPosition,
      content: ulsanContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    ulsanOverlay.setMap(map);
    // end 울산

    // 제주
    let jejuContent = `
      <a href="/city/50">
        <div class="overlaybox">
          <div class="boxtitle">제주</div>
          <ul>
            <li class="up">
              <span class="title">${props.numberComma(jeju)}개</span>
            </li>
          </ul>
        </div>
      </a>
    `;
    let jejuPosition = new kakao.maps.LatLng(33.50887, 126.746581);

    let jejuOverlay = new kakao.maps.CustomOverlay({
      position: jejuPosition,
      content: jejuContent,
      xAnchor: 0.3,
      yAnchor: 0.91
    });
    jejuOverlay.setMap(map);
    // end 제주
  }, [props]);

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

export default MainMap;
