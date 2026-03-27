import styles from "@/styles/LowerBanner.module.scss";
import { useEffect, useRef, useState } from "react";

const LowerBanner = () => {
  const knowMoreRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [typedText, setTypedText] = useState("");
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const fullText = "Your Savings Insured and Protected";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 },
    );

    const currentRef = knowMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeadingVisible(true);
            headingObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    const currentHeadingRef = headingRef.current;
    if (currentHeadingRef) {
      headingObserver.observe(currentHeadingRef);
    }

    return () => {
      if (currentHeadingRef) {
        headingObserver.unobserve(currentHeadingRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isHeadingVisible) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isHeadingVisible]);

  return (
    <div className={styles.container}>
      <h1 style={ {height: "90px"}} ref={headingRef}>{typedText}</h1>

      <div className={styles.vaultImage}>
        <div className={styles.vaultContent}>
          <h4>
            Certified storage backed by <br />
            global safety standards
          </h4>
          <div ref={knowMoreRef} className={styles.knowMore}>
            Know More
          </div>
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
