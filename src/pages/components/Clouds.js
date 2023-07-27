import React from "react";
import * as styles from "./clouds.module.css";

const Clouds = () => {
    return (
    <div id="clouds">
        <div className='pt-10'></div>
            <div className={`${styles.cloud} ${styles.x1}`}></div>
            <div className={`${styles.cloud} ${styles.x2}`}></div>
            <div className={`${styles.cloud} ${styles.x3}`}></div>
            <div className={`${styles.cloud} ${styles.x4}`}></div>
            <div className={`${styles.cloud} ${styles.x5}`}></div>
        <div/>

        <div className='pt-10'>
            <div className={`${styles.cloud} ${styles.x6}`}></div>
            <div className={`${styles.cloud} ${styles.x7}`}></div>
            <div className={`${styles.cloud} ${styles.x8}`}></div>
            <div className={`${styles.cloud} ${styles.x9}`}></div>
            <div className={`${styles.cloud} ${styles.x10}`}></div>
        </div>

        <div className='pt-10'>
            <div className={`${styles.cloud} ${styles.x11}`}></div>
            <div className={`${styles.cloud} ${styles.x12}`}></div>
            <div className={`${styles.cloud} ${styles.x13}`}></div>
            <div className={`${styles.cloud} ${styles.x14}`}></div>
            <div className={`${styles.cloud} ${styles.x15}`}></div>
        </div>
    </div>
    );
};

export default Clouds;
