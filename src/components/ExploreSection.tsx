import styles from "@/styles/Explore.module.scss";

const ExploreSection = () => {
  const content = [
    {
      title: "Auto Savings",
      description: "Start with Rs 50",
      icons: "/icons8-calendar.gif",
    },
    {
      title: "Buy Jewellery",
      description: "Buy jewellery with ease",
      icons: "/icons8-ring-64.png",
    },
    {
      title: "Coin Delivery",
      description: "Deliver at your Doorstep",
      icons: "/icons8-truck-94.png",
    },
    {
      title: "Wallet",
      description: "Invest anytime",
      icons: "/icons8-wallet-64.png",
    },
    {
      title: "Refer & Earn",
      description: "Share & earn Rewards",
      icons: "/icons8-gift-100.png",
    },
    {
      title: "FAQ's",
      description: "Quick help",
      icons: "/icons8-faq-48.png",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleBar}>
        <span className={styles.title}>Explore Aura Gold</span>
        <div className={styles.whatsNew}>What&apos;s New</div>
      </div>

      <div className={styles.cardsGrid}>
        {content.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
              <div className={styles.iconPlaceholder}>
                <img
                  width="64"
                  height="64"
                  src={item?.icons}
                  alt="absent"
                />
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
