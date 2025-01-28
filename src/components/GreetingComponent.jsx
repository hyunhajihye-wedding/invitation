import CommonHeader from "./CommonHeader";
import ComponentWrapper from "./ComponentWrapper";

const GreetingComponent = () => {
  return (
    <ComponentWrapper>
      <CommonHeader title="인사말" />
      <div className="greetings">
        <p>추운 겨울날, 처음 만났던 저희는</p>
        <p>서로에게 따스한 온기가 되어주었습니다.</p>
        <br />
        <p>따스한 봄날, 저희의 사랑이 결실을 맺는 자리에</p>
        <p>소중한 분들과 함께 그 순간을 나누고 싶습니다.</p>
      </div>
      <div className="host-introduction-container">
        <p>
          <span className="introduction">
            <span className="parent">전상식 · 제지정</span>의&nbsp;
            <span className="order">장남&nbsp;</span>
          </span>
          <span className="child">현하</span>
        </p>
        <p>
          <span className="introduction">
            <span className="parent"> 류재만 · 최인영</span>의&nbsp;
            <span className="order">장녀&nbsp;</span>
          </span>
          <span className="child">지혜</span>
        </p>
      </div>
    </ComponentWrapper>
  );
};

export default GreetingComponent;
