import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { Left } from "./Left";
import { Right } from "./Right";
import styled from "styled-components";
import { HeaderBar } from "./HeaderBar";
import { Search } from "./Search";
import { Login } from "./Login";
import { Mypage } from "./Mypage";
import { Poket } from "./Poket";
import { NewItem } from "./NewItem";
import { BestItem } from "./BestItem";

const Container = styled.div`
  width: calc(100vw-10px);
`;
const StyledHeaderBar = styled.div`
  width: 100%;
  height: 70px;
  background-color: lightblue;
  display: grid;
  grid-template-columns: 15% 45% 10% 10% 10% 10%;
`;
const StyledNav = styled.div`
  width: 100%;
  height: 400px;
  background-color: lightcoral;
`;
const StyledMain = styled.div`
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: 50% 50%;
`;
const StyledFooter = styled.div`
  width: 100%;
  height: 100px;
  background-color: lightcyan;
`;

export function Home() {
  return (
    <>
      <Container>
        <StyledHeaderBar>
          <HeaderBar>
            <Menu>
              <BestItem />
              <NewItem />
            </Menu>
            <Search />
            <Login />
            <Mypage />
            <Poket />
          </HeaderBar>
        </StyledHeaderBar>
        <StyledNav>
          <NavBar />
        </StyledNav>
        <StyledMain>
          <Left />
          <Right />
        </StyledMain>
        <StyledFooter>
          <Footer />
        </StyledFooter>
      </Container>
    </>
  );
}
