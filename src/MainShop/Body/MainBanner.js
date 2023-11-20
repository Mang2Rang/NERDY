import styled from "styled-components";
<<<<<<< HEAD
import React, { useRef, useEffect } from "react";
=======
import React, { useRef, useState } from "react";
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "../Style/MainBanner_Styles.css";
import { Scrollbar } from "swiper/modules";

const Banner = styled.img`
  width: 100%;
  height: 100%;
  z-index: -1;
`;
<<<<<<< HEAD
//커스텀 Swiper 작성 부분
const MainBannerSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  padding: 0;
  z-index: 1;
  display: block;
`;

const TxtdivWrapper = styled.div`
=======

export const TxtdivWrapper = styled.div`
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  bottom: 30px;
  left: 10%;
  padding-right: 30px;
  bottom: 15%;
  color: #fff;
  transition: all 1s ease-out;
  transition-delay: 0.5s;
  opacity: 1;
  z-index: 5;
`;

const Txtdiv1 = styled.div`
  display: block;
  font-size: 18px;
  font-weight: 300;
  margin: 0 0 20px;
  line-height: 1.5;
`;
const Txtdiv2 = styled.div`
  display: block;
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 8px 0;
  line-height: 1.2;
`;
const Txtdiv3 = styled.div`
  display: block;
  font-size: 20px;
  font-weight: 200;
  line-height: 1.2;
`;

export function MainBanner() {
  return (
    <>
<<<<<<< HEAD
      <MainBannerSwiper
        scrollbar={true}
        modules={[Scrollbar]}
        className="swiper-container-1"
=======
      <Swiper
        scrollbar={true}
        modules={[Scrollbar]}
        className="MainBanner_Swiper"
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
      >
        <SwiperSlide>
          <Banner
            src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/04e7f7ca1797c81236959ab9395b1552.jpg"
            alt="Main Banner"
          />
<<<<<<< HEAD
          <TxtdivWrapper>
=======
          <TxtdivWrapper id="TxtdivWrapper">
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
            <Txtdiv1>11.10 - 11.26</Txtdiv1>
            <Txtdiv2>PURPLE FRIDAY</Txtdiv2>
            <Txtdiv3>1년에 단 한번! 역대급 할인 혜택</Txtdiv3>
          </TxtdivWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/f85c783fe46b384389d73b0bb2e04784.jpg"
            alt="Main Banner"
          />
<<<<<<< HEAD
          <TxtdivWrapper>
            <Txtdiv1>23FW</Txtdiv1>
            <Txtdiv2>RISE ANEW, NERDY</Txtdiv2>
            <Txtdiv3>세븐틴 THE 8과 함께한 23F/W 컬렉션</Txtdiv3>
          </TxtdivWrapper>
        </SwiperSlide>
      </MainBannerSwiper>
=======
          <txtWrap>
            <div>23FW</div>
            <div>RISE ANEW, NERDY</div>
            <div>세븐틴 THE 8과 함께한 23F/W 컬렉션</div>
          </txtWrap>
        </SwiperSlide>
      </Swiper>
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
    </>
  );
}
