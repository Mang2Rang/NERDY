import React from "react";
import { HeaderBar } from "./Header/HeaderBar";
import { Footer } from "./Footer/Footer";
import styled from "styled-components";
import { Kakao } from "./Body/Kakao";
import { SwiperComment } from "./Body/SwiperComment";
import { Outlet } from "react-router-dom";

const StyledFooter = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 50px; */
`;

export function Layout() {
  return (
    <>
      {/* <SwiperComment /> */}
      <HeaderBar />
      <Outlet />
      <Kakao />
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </>
  );
}
