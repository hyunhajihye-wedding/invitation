import ComponentWrapper from "./ComponentWrapper";
import { Share } from "lucide-react";
import useKakaoShare from "./useKakaoShare";

const FooterComponent = () => {
  const kakao = useKakaoShare();

  const onShareKakaoClick = () => {
    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "딸기 치즈 케익",
        description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
        imageUrl:
          "http://k.kakaocdn.net/dㅡn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: "https://hyunhajihye-wedding.github.io",
          webUrl: "https://hyunhajihye-wedding.github.io",
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "https://hyunhajihye-wedding.github.io",
            webUrl: "https://hyunhajihye-wedding.github.io/invitation",
          },
        },
        {
          title: "앱으로 보기",
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
