import PropTypes from "prop-types";
import landingImage from "/imgs/landing/landing02.jpg";

const ComponentWrapper = ({ children, landing, fit, footer }) => {
  const innerStyle = {
    backgroundImage: landing ? `url(${landingImage})` : "",
    backgroundColor: footer ? "rgb(242, 242, 242)" : "",
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
  footer: PropTypes.bool,
};

ComponentWrapper.defaultProps = {
  landing: false,
  fit: false,
  footer: false,
};

export default ComponentWrapper;
