import React from "react";
import { HeaderBar } from "./HeaderBar";
import { Footer } from "./Footer";
import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  height: 100%;
`;

export function Layout() {
  return (
    <>
      <HeaderBar />
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </>
  );
}
