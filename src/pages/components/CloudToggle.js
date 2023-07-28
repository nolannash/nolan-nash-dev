import PropTypes from "prop-types";
import React from "react";
import "./cloudToggle.module.css";

export const CloudButton = ({ cloudsPaused, className, setCloudsPaused }) => {
  const handleToggle = () => {
    setCloudsPaused();
  };

  return (
    <div className="box">

      {cloudsPaused === false && (
        <div className={`cloud-button state-on ${className}`} onClick={handleToggle}>
          <img
            className="on-cloud"
            alt="State on"
            src="https://generation-sessions.s3.amazonaws.com/291802d28be318f04f5c142b690e1d9b/img/state-on.svg"
          />
        </div>
      )}

      {cloudsPaused === true && (
        <div className={`cloud-button state-off ${className}`} onClick={handleToggle}>
          <img
            className="off-cloud"
            alt="Off cloud"
            src="https://generation-sessions.s3.amazonaws.com/291802d28be318f04f5c142b690e1d9b/img/offcloud-1.svg"
          />
        </div>
      )}
    </div>
  );
};

CloudButton.propTypes = {
  cloudsPaused: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default CloudButton;