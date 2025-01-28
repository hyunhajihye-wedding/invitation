import PropTypes from "prop-types";

const CalendarWrapper = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0)",
          cursor: "not-allowed",
          zIndex: 1,
        }}
        onClick={(e) => e.stopPropagation()} // 클릭 이벤트 차단
        onMouseDown={(e) => e.preventDefault()} // 드래그 방지
      />
    </div>
  );
};

CalendarWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
export default CalendarWrapper;
