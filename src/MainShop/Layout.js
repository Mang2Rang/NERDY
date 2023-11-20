import React from "react";
import { HeaderBar } from "./Header/HeaderBar";
import { Footer } from "./Footer/Footer";
import styled from "styled-components";
import { Kakao } from "./Body/Kakao";
import { Outlet } from "react-router-dom";
import { SlideBar } from "./Header/SlideBar";

const StyledFooter = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 50px; */
`;

export function Layout() {
  return (
    <>
      <SlideBar />
      <HeaderBar />
      <Outlet />
      <Kakao />
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </>
  );
}
