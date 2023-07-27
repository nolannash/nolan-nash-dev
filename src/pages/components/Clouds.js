import React from "react";
import * as styles from "./clouds.module.css";



const Clouds = () => {
    return (
    <div id="clouds">
	<div className={`${styles.cloud} ${styles.x1}`}></div>
	<div className={`${styles.cloud} ${styles.x2}`}></div>
	<div className={`${styles.cloud} ${styles.x3}`}></div>
	<div className={`${styles.cloud} ${styles.x4}`}></div>
	<div className={`${styles.cloud} ${styles.x5}`}></div>
</div>
    );
};

export default Clouds;
