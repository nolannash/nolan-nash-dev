import PropTypes from "prop-types";
import React, { useReducer } from "react";
import "./cloudToggle.module.css";

export const CloudButton = ({ stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "on",
  });

  return (
    <div className="box">
      {state.state === "on" && (
        <div
          className={`cloud-button state-on ${className}`}
          onClick={() => {
            dispatch({ type: "click" });
          }}
        >
          <img
            className="on-cloud"
            alt="State on"
            src="https://generation-sessions.s3.amazonaws.com/291802d28be318f04f5c142b690e1d9b/img/state-on.svg"
          />
        </div>
      )}

      {state.state === "off" && (
        <div
          className={`cloud-button state-off ${className}`}
          onClick={() => {
            dispatch({ type: "click" });
          }}
        >
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

function reducer(state, action) {
  switch (action.type) {
    case "click":
      return {
        ...state,
        state: state.state === "on" ? "off" : "on",
      };
    default:
      return state;
  }
}

CloudButton.propTypes = {
  stateProp: PropTypes.oneOf(["off", "on"]),
  className: PropTypes.string,
};