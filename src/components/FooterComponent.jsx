import ComponentWrapper from "./ComponentWrapper";
import { Share } from "lucide-react";
import useKakaoShare from "./useKakaoShare";

const FooterComponent = () => {
  const kakao = useKakaoShare();

  const onShareKakaoClick = () => {
    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "전현하 🩷 류지혜, 결혼합니다!",
        description:
          "2025년 5월 18일 일요일 낮 3시 40분 신도림 라마다 웨딩 14층 하늘정원홀",
        imageUrl:
          "https://hyunhajihye-wedding.github.io/invitation/imgs/landing/landing02.jpg",
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: "https://hyunhajihye-wedding.github.io/invitation",
          webUrl: "https://hyunhajihye-wedding.github.io/invitation",
        },
      },
      buttons: [
        {
          title: "모바일 청첩장 보기",
          link: {
            mobileWebUrl: "https://hyunhajihye-wedding.github.io/invitation",
            webUrl: "https://hyunhajihye-wedding.github.io/invitation",
          },
        },
      ],
    });
  };

  return (
    <ComponentWrapper footer>
      <div className="footer-wrapper">
        <div className="share-kakao">
          <span>Shared by KakaoTalk</span>
          <Share width="0.7rem" onClick={onShareKakaoClick} />
        </div>
        <div className="closing">
          Developed by 전현하. Powered by{" "}
          <a
            href="https://pages.github.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#393939" }}
          >
            Github Page
          </a>
          <br />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default FooterComponent;
