import PropTypes from "prop-types";

const MapShareIcon = ({ type }) => {
  const mapInformations = {
    tmap: {
      url: "https://tmap.life/20a36b70",
      label: "티맵",
    },
    naver: {
      url: "https://naver.me/GPdo0cW4",
      label: "네이버지도",
    },
    kakao: {
      url: "https://kko.kakao.com/gL9cbbU_N_",
      label: "카카오지도",
    },
  };

  const onIconClick = () => {
    window.open(mapInformations[type].url, "_blank");
  };

  return (
    <div className="location-icon-wrapper">
      <div className={`location-icon ${type}`} onClick={onIconClick}></div>
      <p className="location-label">{mapInformations[type].label}</p>
    </div>
  );
};

MapShareIcon.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MapShareIcon;
