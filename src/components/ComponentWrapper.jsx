import PropTypes from "prop-types";
import landingImage from "../assets/imgs/AWS00002.jpg";

const ComponentWrapper = ({ children, landing, fit }) => {
  const innerStyle = {
    backgroundImage: landing ? `url(${landingImage})` : "",
  };

  return (
    <div className="component-wrapper-outter">
      <div
        className={`component-wrapper-inner 
          ${landing ? "component-wrapper-landing" : ""} 
          ${fit ? "fit" : ""}`}
        style={innerStyle}
      >
        {children}
      </div>
    </div>
  );
};

ComponentWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  landing: PropTypes.bool,
  fit: PropTypes.bool,
};

ComponentWrapper.defaultProps = {
  landing: false,
  fit: false,
};

export default ComponentWrapper;
