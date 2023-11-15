import { MainBanner } from "./MainBanner";
import { Left } from "./Left";
import { Right } from "./Right";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HeaderBar } from "./HeaderBar";
import { Footer } from "./Footer";

const Container = styled.div`
  width: calc(100vw);
`;
// const StyledHeaderBar = styled.div`
//   width: 100%;
//   height: 70px;
//   background-color: lightblue;
//   display: grid;
//   grid-template-columns: 15% 45% 10% 10% 10% 10%;
// `;
const StyledMainBanner = styled.div`
  width: 100%;
  height: 780px;
  background-color: lightcoral;
`;
const StyledMain = styled.div`
  width: 100%;
  height: 400px;
`;
// const StyledFooter = styled.div`
//   width: 100%;
//   height: 100%;
//   margin: 50px;
// `;

export function Home() {
  return (
    <>
      <Container>
        <StyledMainBanner>
          <MainBanner />
        </StyledMainBanner>
        <StyledMain>
          <Link to="/BestItem" />
          <Left />
        </StyledMain>
        <StyledMain>
          <Link to="/NewItem" />
          <Right />
        </StyledMain>
      </Container>
    </>
  );
}
