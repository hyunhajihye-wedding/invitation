import ComponentWrapper from "./ComponentWrapper";

const TitleComponent = () => {
  return (
    <ComponentWrapper landing fit>
      <div className="guide">
        <div className="host">
          <p>류지혜</p>
          <p className="bar"></p>
          <p>전현하</p>
        </div>
        <div className="detail-info">
          <p>2025년 5월 18일 일요일 낮 3시 40분</p>
          <p>신도림 라마다 호텔 14층 하늘정원</p>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default TitleComponent;
