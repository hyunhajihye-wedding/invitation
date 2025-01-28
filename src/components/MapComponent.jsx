import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

import CommonHeader from "./CommonHeader";
import ComponentWrapper from "./ComponentWrapper";

const MapComponent = () => {
  const navermaps = useNavermaps();

  return (
    <ComponentWrapper>
      <CommonHeader title="오시는 길" />
      <MapDiv style={{ width: "100%", height: "300px" }}>
        <NaverMap
          defaultCenter={new navermaps.LatLng(37.5063, 126.88535)}
          defaultZoom={16}
        >
          <Marker defaultPosition={new navermaps.LatLng(37.5063, 126.88535)} />
        </NaverMap>
      </MapDiv>
      <div className="map-icon-wrapper"></div>
      <div className="location-trans-wrapper">
        <h3>✅ 셔틀버스</h3>
        <p>- 신도림역 1번 출구 앞 (배차 간격 5분)</p>
        <h3>지하철</h3>
        <p>- 지하철 1호선, 2호선 신도림역 1번 출구</p>
        <p>&nbsp;&nbsp;&nbsp;(신도림 광장 도보 5분)</p>
        <h3>버스 (신도림역/구로역)</h3>
        <p>- 간선버스 : 160, 503, 600, 662, 660, N16(심야)</p>
        <p>- 지선버스 : 6513, 6515, 6516, 6637, 6640B</p>
        <p>- 경기일반 : 10, 11-1, 11-2, 510, 530, 83, 88</p>
        <p>- 좌석버스 : 301, 320</p>
        <h3>주차 (1시간 30분 무료 / 초과시 15분당 1,000원)</h3>
        <p>- 호텔 지하주차장 (B1-B7)</p>
        <p>- 외부 주차장 (서울특별시 구로구 신도림동 427-3)</p>
      </div>
    </ComponentWrapper>
  );
};

export default MapComponent;
