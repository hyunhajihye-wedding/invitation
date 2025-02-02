import PropTypes from "prop-types";
import landingImage1 from "/imgs/landing/landing01.jpg";
import landingImage2 from "/imgs/landing/landing02.jpg";
import landingImage3 from "/imgs/landing/landing03.jpg";

const ComponentWrapper = ({ children, landing, fit, footer }) => {
  const getLandingImage = () => {
    const variables = [landingImage1, landingImage2, landingImage3];
    const randomIndex = Math.floor(Math.random() * variables.length);

    return variables[randomIndex];
  };
  const innerStyle = {
    backgroundImage: landing ? `url(${getLandingImage()})` : "",
    backgroundColor: footer ? "rgb(242, 242, 242)" : "",
    padding: footer ? "0.3rem" : undefined,
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
