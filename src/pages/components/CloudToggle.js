import PropTypes from "prop-types";
import React from "react";
import "./cloudToggle.module.css";

const CloudButton = ({ cloudsPaused, className, setCloudsPaused }) => {
  const handleToggle = () => {
    setCloudsPaused();
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={`box drop-shadow-2xl mr-auto cloud-button ${cloudsPaused ? 'state-off' : 'state-on'} ${className}`}
      style={{ fontFamily: "'Lexend Variable', sans-serif" }}
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleToggle();
        }
      }}
    >
      {cloudsPaused ? (
        <img
          className="off-cloud"
          alt="Off cloud"
          src="https://generation-sessions.s3.amazonaws.com/291802d28be318f04f5c142b690e1d9b/img/offcloud-1.svg"
        />
      ) : (
        <img
          className="on-cloud"
          alt="State on"
          src="https://generation-sessions.s3.amazonaws.com/291802d28be318f04f5c142b690e1d9b/img/state-on.svg"
        />
      )}
    </div>
  );
};

CloudButton.propTypes = {
  cloudsPaused: PropTypes.bool.isRequired,
  className: PropTypes.string,
  setCloudsPaused: PropTypes.func.isRequired,
};

export default CloudButton;