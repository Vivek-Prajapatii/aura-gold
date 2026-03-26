"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/InvestBanner.module.scss";

const InvestBanner = () => {
  const [showTea, setShowTea] = useState(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      setShowTea((prev) => !prev);
    }, 3000); 

    return () => clearTimeout(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.visual}>
        {showTea ? (
          <img
            src="/tea_glass.png"
            className={styles.tea}
            alt="tea"
          />
        ) : (
          <div className={styles.coin}>
            <div className={`${styles.coinFace} ${styles.coinFront}`}></div>
            <div className={`${styles.coinFace} ${styles.coinBack}`}></div>
          </div>
        )}
      </div>

      <div className={styles.bannerText}>Buy Gold daily,</div>
      <div className={styles.bannerText}>
        at price of Tea <span className={styles.goldText}>₹10</span>
      </div>

      <div className={styles.investBtn}>Buy now</div>
    </div>
  );
};


export default InvestBanner;
