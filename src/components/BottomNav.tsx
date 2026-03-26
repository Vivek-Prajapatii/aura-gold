import React from "react";
import styles from "@/styles/BottomNav.module.scss";
import Image from "next/image";

const BottomNav = () => {
  const items = [
    {
      icon: "/icons8-home.png",
      label: "Home",
    },
    {
      icon: "/icons8-portfolio.png",
      label: "Portfolio",
    },
    {
      icon: "/icons8-history.png",
      label: "Transactions",
    },
    {
      icon: "/icons8-profile.png",
      label: "Profile",
    },
  ];

  return (
    <div className={styles.bottomNav}>
      {items?.map((item) => {
        return (
          <div
            key={item?.label}
            className={`${styles.navItem}`}
          >
            <Image src={item.icon} alt={item.label} height="24" width="24"/>
            <p>{item?.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNav;
