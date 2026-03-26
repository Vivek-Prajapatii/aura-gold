"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import styles from "@/styles/BannerCaraousel.module.scss";

const BannerCaraousel = () => {
  const images = [
    "/gold-1.jpg",
    "/gold-2.jpg",
    "/gold-3.jpg",
    "/gold-1.jpg",
    "/gold-2.jpg",
    "/gold-3.jpg",
  ];

  return (
    <div className={styles.container}>
      <span className={styles.title}>
        Limited-Time Golden Deals{" "}
        <img
          src="/icons8-stars.gif"
          height="20px"
          width={"20px"}
          alt="icon"
        />
      </span>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.095}
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={1}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        spaceBetween={7}
        className={styles.carousel}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.autoplay.start();
          }, 1000);
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              width={"100%"}
              height={"100%"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCaraousel;
