import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  display: flex;
`;

//Heaer 로고 부분
const Logo = styled.div`
  position: absolute;
  left: 10px;
  top: 30px;
`;
const Logo_Img = styled.img`
  height: 22px;
`;

//Header Nav 중간
const Nav_Mid = styled.div`
  padding: 0 0 0 0;
  max-width: calc(100%- 360px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
`;
const Li = styled.li`
  font-weight: bold;
  font-size: 15px;
`;
const Li_Small = styled.li`
  font-size: 13px;
  font-weight: 500;
`;
const Li_Bar = styled.li`
  color: #eaeaea;
`;

//Header 오른쪽 메뉴
const Right_Menu = styled.div`
  position: absolute;
  right: 45px;
  top: 17px;
  width: 150px;
`;
const R_Ul = styled.ul`
  display: flex;
  justify-content: right;
  list-style: none;
`;
const R_Li = styled.li`
  display: inline-block;
  font-size: 12px;
  padding-right: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 1;
  color: #999999;
`;

const ICON = styled.div`
  display: flex;
  justify-content: space-around;
`;
// const NavLink = styled.a`
//   text-decoration: none;
//   color: black;
// `;

export function HeaderBar() {
  return (
    <>
      <Container>
        <Logo>
          <Link to="/" target="_self">
            <Logo_Img src="https://whoisnerdy.com/web/upload/images/logo_blank.png" />
          </Link>
        </Logo>
        <Nav_Mid>
          <Ul>
            <Li>
              <strong>with THE 8</strong>
            </Li>
            <Li>
              <NavLink
                to="/bestItem"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>BEST</strong>
              </NavLink>
            </Li>
            <Li>
              <NavLink
                to="/newItem"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>New</strong>
              </NavLink>
            </Li>
            <Li>
              <strong>SHOES</strong>
            </Li>
            <Li>
              <strong>ACC</strong>
            </Li>
            <Li>
              <strong>OUTLET</strong>
            </Li>
            <Li_Bar>|</Li_Bar>
            <Li_Small>BENEFIT</Li_Small>
            <Li_Small>LOOKBOOK</Li_Small>
            <Li_Small>COMMUNITY</Li_Small>
          </Ul>
        </Nav_Mid>
        <Right_Menu>
          {/* 상단 */}
          <R_Ul>
            <R_Li>로그인</R_Li>
            <R_Li>멤버쉽가입</R_Li>
          </R_Ul>
          {/* 하단 */}
          <ICON>
            <a href="/search">
              <img src="https://whoisnerdy.com/web/upload/images/icotb_zoom.png" />
            </a>
            <a href="/cart">
              <img src="https://whoisnerdy.com/web/upload/images/icotb_cart.png" />
            </a>
            <a href="/member">
              <img src="https://whoisnerdy.com/web/upload/images/icotb_my.png" />
            </a>
          </ICON>
        </Right_Menu>
      </Container>
      <Outlet />
    </>
  );
}
