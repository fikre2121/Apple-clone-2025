import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "../../assets/images/1378x774 (2).jpg";
import image2 from "../../assets/images/1378x774 (4).jpg";
import image3 from "../../assets/images/1378x774 (5).jpg";
import image4 from "../../assets/images/1378x774 (6).jpg";
import image5 from "../../assets/images/1378x774 (7).jpg";
export default function Carousel() {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        centeredSlides={true}
        spaceBetween={20}
        speed={2000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="swiper-wrapper"
      >
        <SwiperSlide className="swiper-slide">
          <img src={image1} alt="image 2" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={image2} alt="image 4" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={image3} alt="image 5" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={image4} alt="image 6" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={image5}alt="image 7" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
