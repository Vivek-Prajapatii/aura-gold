
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import styles from "@/styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div style={{ display: "flex"}}>
        <div className={styles.profile}>
          <span>Hello</span>
          <span>Vivek!</span>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.price}>
          <span className={styles.goldCoin}></span>
          <span>₹ 15,850.00/gm</span>
        </div>
        <div
          style={{
            height: "28px",
            width: "28px",
            padding: "5px",
            borderRadius: "50px",
            border: "1px solid #a785f1",
            backgroundColor: "#835dd4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NotificationsOutlinedIcon
            fontSize={"small"}
            sx={{ color: "a785f1" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
