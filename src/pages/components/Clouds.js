import React from "react";
import * as styles from "./clouds.module.css";

const Clouds = ({ cloudsPaused }) => {
  const cloudStyles = {
    animationPlayState: cloudsPaused ? "paused" : "running",
  };

  return (
    <div id="clouds" >
      <div className={`p-5 ${styles.cloud} ${styles.x1}`} style={cloudStyles}></div>
      <div className={`p-5 ${styles.cloud} ${styles.x2}`} style={cloudStyles}></div>
      <div className={`p-5 ${styles.cloud} ${styles.x3}`} style={cloudStyles}></div>
      <div className={`p-5 ${styles.cloud} ${styles.x4}`} style={cloudStyles}></div>
      <div className={`p-5 ${styles.cloud} ${styles.x5}`} style={cloudStyles}></div>

      <div className="p-7">
        <div className={`p-5 ${styles.cloud} ${styles.x6}`} style={cloudStyles}></div>
        <div className={`p-5 ${styles.cloud} ${styles.x7}`} style={cloudStyles}></div>
        <div className={`p-5 ${styles.cloud} ${styles.x8}`} style={cloudStyles}></div>
        <div className={` ${styles.cloud} ${styles.x9}`} style={cloudStyles}></div>
        <div className={`p-5 ${styles.cloud} ${styles.x10}`} style={cloudStyles}></div>
      </div>

      <div className="p-2">
        <div className={`p-5 ${styles.cloud} ${styles.x11}`} style={cloudStyles}></div>
        <div className={` ${styles.cloud} ${styles.x12}`} style={cloudStyles}></div>
        <div className={`p-5 ${styles.cloud} ${styles.x13}`} style={cloudStyles}></div>
        <div className={`p-5 ${styles.cloud} ${styles.x14}`} style={cloudStyles}></div>
        <div className={`p-5 ${styles.cloud} ${styles.x15}`} style={cloudStyles}></div>
      </div>
      <div className="p-30">
        <div className={`p-5 ${styles.cloud} ${styles.x11}`} style={cloudStyles}></div>
        <div className={` ${styles.cloud} ${styles.x12}`} style={cloudStyles}></div>
        <div className={`p-5 ${styles.cloud} ${styles.x13}`} style={cloudStyles}></div>
        <div className={`p-5 ${styles.cloud} ${styles.x14}`} style={cloudStyles}></div>
        <div className={` ${styles.cloud} ${styles.x15}`} style={cloudStyles}></div>
      </div>
    </div>

  );
};

export default Clouds;