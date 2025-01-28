import Lightbox from "yet-another-react-lightbox"; // 라이트 박스 라이브러리 불러오기
import "yet-another-react-lightbox/styles.css";

import { useState } from "react";
import CommonHeader from "./CommonHeader";
import ComponentWrapper from "./ComponentWrapper";

const GalleryComponent = () => {
  const baseURL = import.meta.env.BASE_URL;
  const [current, setCurrent] = useState(-1);

  const imgs = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ].map((number) => ({
    src: `${baseURL}imgs/gallery/gallery${number}.jpg`,
  }));

  const galleryContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3열 고정
    gap: "0.1rem", // 이미지 간격
    boxSizing: "border-box",
    maxWidth: "100%",
  };
  const imageStyle = {
    width: "100%", // 그리드 셀에 맞게 이미지 크기 조정
    height: "auto",
    objectFit: "cover", // 이미지 비율 유지
  };

  return (
    <ComponentWrapper>
      <CommonHeader title="갤러리" />
      <div style={galleryContainerStyle}>
        {imgs.map((img, index) => (
          <img
            key={index}
            id={index}
            src={img.src}
            alt={`Gallery Image ${index + 1}`}
            style={imageStyle}
            onClick={(e) => {
              setCurrent(e.target.id);
            }}
          />
        ))}
      </div>
      <Lightbox
        slides={imgs}
        open={current >= 0}
        index={current}
        close={() => setCurrent(-1)}
      ></Lightbox>
    </ComponentWrapper>
  );
};

export default GalleryComponent;
