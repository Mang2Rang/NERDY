import React from "react";
import { HeaderBar } from "./Header/HeaderBar";
import { Footer } from "./Footer/Footer";
import styled from "styled-components";
import { Kakao } from "./Body/Kakao";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import { SlideBar } from "./Header/SlideBar";
=======
import { SwiperComment } from "./Body/SwiperComment";
import { Outlet } from "react-router-dom";
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084

const StyledFooter = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 50px; */
`;

export function Layout() {
  return (
    <>
<<<<<<< HEAD
      <SlideBar />
=======
      {/* <SwiperComment /> */}
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
      <HeaderBar />
      <Outlet />
      <Kakao />
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </>
  );
}
