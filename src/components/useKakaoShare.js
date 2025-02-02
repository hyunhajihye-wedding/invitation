import { useEffect, useState } from "react";

const useKakaoShare = () => {
  const [kakaoSDK, setKakaoSDK] = useState();

  const KAKAO_CLIENT_ID = import.meta.env.VITE_APP_KAKAO_CLIENT_ID;
  const KAKAO_INTEGRITY_VALUE = import.meta.env.VITE_APP_KAKAO_INTEGRITY_VALUE;
  const KAKAO_SDK_VERSION = import.meta.env.VITE_APP_KAKAO_SDK_VERSION;

  const KAKAO_SDK_SRC = `https://t1.kakaocdn.net/kakao_js_sdk/${KAKAO_SDK_VERSION}/kakao.min.js`;

  console.log(KAKAO_CLIENT_ID);
  console.log(KAKAO_INTEGRITY_VALUE);
  console.log(KAKAO_SDK_VERSION);
  console.log(kakaoSDK);
  useEffect(() => {
    const kakaoSDKURL = `${KAKAO_SDK_SRC}`;
    let script = document.querySelector(`script[src="${kakaoSDKURL}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = kakaoSDKURL;
      script.type = "text/javascript";
      script.async = true;
      script.integrity = `${KAKAO_INTEGRITY_VALUE}`;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    const loadHandler = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAO_CLIENT_ID);
      }
      setKakaoSDK(window.Kakao);
    };
    script.addEventListener("load", loadHandler);
    return () => {
      if (script) {
        script.removeEventListener("load", loadHandler);
        document.head.removeChild(script);
      }
    };
  }, [kakaoSDK]);

  return kakaoSDK;
};

export default useKakaoShare;
