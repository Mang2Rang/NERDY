import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Style/SlideItem_styles.css";

// import required modules
import { Autoplay, Navigation, FreeMode } from "swiper/modules";
import styled from "styled-components";

const Container = styled.div`
  background: #f9fafd;
`;
const Notice = styled.div`
  display: flex;
  line-height: 40px;
  margin-right: 5px;
  font-size: 14px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.35);
  padding: 10px 0 0 50px;
  background: #f9fafd;
`;
const Notice_Img = styled.img`
  height: 35px;
`;

export function SlideItem() {
  return (
    <>
      <Container>
        <Notice>
          <Notice_Img
            src="https://whoisnerdy.com/web/upload/images/ico_finger3.png"
            alt=""
          />
          스와이프하여 원하는 제품을 골라보세요.
        </Notice>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          speed={1500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[FreeMode, Autoplay, Navigation]}
          className="SlideItem_Swiper"
        >
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/1af16c22d07550f24445277c1635e1c3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/1fa0ee4d773bb80f3a765c8d309172a1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/9e8e093b72984389873f96ea4d04c235.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/48bceadda820a2461427d4974c656a8d.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/83bdb9e9b92e4c09a2eb3e53568d6bec.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/59ad7fb98d31095b5c4b72c06f1c78e7.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/633c35e3e9d350a4d9b5bd896b773286.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/35b27d65d165ee989ca8f720585cb44a.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
