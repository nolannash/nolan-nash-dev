import PropTypes from "prop-types";
import React, { useReducer } from "react";
import "./cloudToggle.module.css";

const CloudToggle = ({ stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "off",
  });

  return (
    <div
      className={`toggle ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`overlap-group ${state.state}`}>
        <div className="rectangle" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24" // Change the width to match your desired size
          height="24" // Change the height to match your desired size
          viewBox="0 0 24 24"
          fill="none"
          className="cloud"
        >
          <g style={{ mixBlendMode: "multiply" }} opacity="0.01">
            <rect x="1" y="1" width="22" height="6" rx="3" fill="#D9D9D9" />
          </g>
          <g style={{ mixBlendMode: "hard-light" }} filter="url(#filter0_d_3_34)">
            <path
              d="M9 2C4.58172 2 1 5.58172 1 10C1 14.4183 4.58172 18 9 18C13.4183 18 17 14.4183 17 10C17 5.58172 13.4183 2 9 2Z"
              fill="#010101"
            />
            <path
              d="M17 10C17 14.4183 13.4183 18 9 18C4.58172 18 1 14.4183 1 10C1 5.58172 4.58172 2 9 2C13.4183 2 17 5.58172 17 10Z"
              stroke="#333333"
              strokeWidth="2"
            />
          </g>
          <g style={{ mixBlendMode: "multiply" }} opacity="0.01">
            <rect x="1" y="16" width="22" height="6" rx="3" fill="#D9D9D9" />
          </g>
          <g style={{ mixBlendMode: "hard-light" }} filter="url(#filter1_d_3_34)">
            <path
              d="M23 17C23 21.4183 19.4183 25 15 25C10.5817 25 7 21.4183 7 17C7 12.5817 10.5817 9 15 9C19.4183 9 23 12.5817 23 17Z"
              fill="#EDEDED"
            />
            <path
              d="M7 17C7 21.4183 10.5817 25 15 25C19.4183 25 23 21.4183 23 17C23 12.5817 19.4183 9 15 9C10.5817 9 7 12.5817 7 17Z"
              stroke="#3F3F3F"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "off") {
    switch (action) {
      case "click":
        return {
          state: "on",
        };
      default:
        return state;
    }
  }

  if (state.state === "on") {
    switch (action) {
      case "click":
        return {
          state: "off",
        };
      default:
        return state;
    }
  }

  return state;
}

CloudToggle.propTypes = {
  stateProp: PropTypes.oneOf(["off", "on"]),
};

export default CloudToggle;
