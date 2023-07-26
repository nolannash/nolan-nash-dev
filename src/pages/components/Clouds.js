import * as React from "react";
import * as styles from './clouds.module.css'; // Import the Clouds styles using CSS Modules

const Clouds = () => {
    return (
    <div id="clouds" className={`fixed top-0 left-0 w-full h-full z-0 pointer-events-none`}>
        <div className={`${styles.cloud} ${styles.x1} animate-cloud absolute`}></div>
        <div className={`${styles.cloud} ${styles.x2} animate-cloud absolute`}></div>
        <div className={`${styles.cloud} ${styles.x3} animate-cloud absolute`}></div>
        <div className={`${styles.cloud} ${styles.x4} animate-cloud absolute`}></div>
        <div className={`${styles.cloud} ${styles.x5} animate-cloud absolute`}></div>
    </div>
    );
};

export default Clouds;


