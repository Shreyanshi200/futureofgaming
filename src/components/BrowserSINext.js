import PropTypes from "prop-types";
import "./BrowserSINext.css";

const BrowserSINext = ({
  className = "",
  browserSINextImageW,
  dawnbreaker,
}) => {
  return (
    <div className={`browser-si-next ${className}`}>
      <div className="browser-si-next-bg" />
      <img
        className="browser-si-next-image-w-icon"
        loading="lazy"
        alt=""
        src={browserSINextImageW}
      />
      <div className="next-map-label-container">
        <div className="conquest-large-parent">
          <b className="conquest-large">conquest large</b>
          <b className="dawnbreaker">{dawnbreaker}</b>
        </div>
      </div>
    </div>
  );
};

BrowserSINext.propTypes = {
  className: PropTypes.string,
  browserSINextImageW: PropTypes.string,
  dawnbreaker: PropTypes.string,
};

export default BrowserSINext;
