import PropTypes from "prop-types";

const CommonHeader = ({ title }) => {
  return (
    <div className="common-header">
      <div className="common-header-info">
        <div>{title}</div>
      </div>
      <div className="horizontal-line" />
    </div>
  );
};

CommonHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CommonHeader;
