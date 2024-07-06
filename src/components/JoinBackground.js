import PropTypes from "prop-types";
import "./JoinBackground.css";

const JoinBackground = ({ className = "" }) => {
  return <div className={`join-background ${className}`} />;
};

JoinBackground.propTypes = {
  className: PropTypes.string,
};

export default JoinBackground;
