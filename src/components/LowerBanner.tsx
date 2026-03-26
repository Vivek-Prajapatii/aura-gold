import styles from "@/styles/LowerBanner.module.scss";

const LowerBanner = () => {
  return (
    <div className={styles.container}>
      <h1>Your Savings Insured and Protected</h1>

      <div className={styles.vaultImage}>
        <div className={styles.vaultContent}>
          <h4>Certified storage backed by <br/>global safety standards</h4>
          <div className={styles.knowMore}>Know More</div>
        </div>
        <img
          height="200px"
          width="200px"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/bank-vault-3d-icon-png-download-7479397.png"
        />
      </div>
      <div className={styles.endBanner}>
        <h1>Invest Like a pro!</h1>
        <h4>
          <img
            width="20px"
            height={"20px"}
            src="/hiclipart.com.png"
            alt="icon"
          />{" "}
          Trusted by 15 Lakh Indians
        </h4>
      </div>
    </div>
  );
};

export default LowerBanner;
