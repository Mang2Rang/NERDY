import { Left } from "./Left";
import { Right } from "./Right";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MainBanner } from "./MainBanner";
import { SlideItem } from "./SlideItem";
import { SlideFooterBar } from "../Footer/SlideFooterBar";

const Container = styled.div`
  width: calc(100%);
`;

const StyledMainBanner = styled.div`
  display: flex;
  width: 100%;
`;
const StyledMain = styled.div`
  width: 100%;
  height: 400px;
`;

export function Home() {
  return (
    <>
      <Container>
        <StyledMainBanner>
          <MainBanner />
        </StyledMainBanner>
        <SlideItem />
        <StyledMain>
          <Link to="/BestItem" />
          <Left />
        </StyledMain>
        <StyledMain>
          <Link to="/NewItem" />
          <Right />
        </StyledMain>
      </Container>
      <SlideFooterBar />
    </>
  );
}
