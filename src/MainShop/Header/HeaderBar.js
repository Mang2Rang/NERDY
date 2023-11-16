import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  width: 100%;
  display: flex;
  z-index: 1000;
  background-color: white;
`;

//Heaer 로고 부분
const Logo = styled.div`
  position: absolute;
  left: 50px;
  top: 30px;
`;
const LogoImg = styled.img`
  height: 22px;
`;

//Header Nav 중간
const NavMid = styled.div`
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
const LiSmall = styled.li`
  font-size: 13px;
  font-weight: 500;
`;
const LiBar = styled.li`
  color: #eaeaea;
`;

//Header 오른쪽 메뉴
const RightMenu = styled.div`
  position: absolute;
  right: 45px;
  top: 17px;
  width: 150px;
`;
const RUl = styled.ul`
  display: flex;
  justify-content: right;
  list-style: none;
`;
const RLi = styled.li`
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
const HeaderSpacer = styled.div`
  height: 80px;
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
          <Link to="/" target="self">
            <LogoImg
              src="https://whoisnerdy.com/web/upload/images/logo_blank.png"
              alt="Logo_Icon"
            />
          </Link>
        </Logo>
        <NavMid>
          <Ul>
            <Li>
              <NavLink
                to="/the8"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>with THE 8</strong>
              </NavLink>
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
              <NavLink
                to="/shoes"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>Shoes</strong>
              </NavLink>
            </Li>
            <Li>
              <NavLink
                to="/acc"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>ACC</strong>
              </NavLink>
            </Li>
            <Li>
              <NavLink
                to="/outlet"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>OUTLET</strong>
              </NavLink>
            </Li>
            <LiBar>|</LiBar>
            <LiSmall>
              <NavLink
                to="/benefit"
                style={{ textDecoration: "none", color: "black" }}
              >
                BENEFIT
              </NavLink>
            </LiSmall>
            <LiSmall>
              <NavLink
                to="/lookbook"
                style={{ textDecoration: "none", color: "black" }}
              >
                LOOKBOOK
              </NavLink>
            </LiSmall>
            <LiSmall>
              <NavLink
                to="/community"
                style={{ textDecoration: "none", color: "black" }}
              >
                COMMUNITY
              </NavLink>
            </LiSmall>
          </Ul>
        </NavMid>
        <RightMenu>
          {/* 상단 */}
          <RUl>
            <RLi>
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "grey" }}
              >
                로그인
              </NavLink>
            </RLi>
            <RLi>멤버쉽가입</RLi>
          </RUl>
          {/* 하단 */}
          <ICON>
            <a href="/search">
              <img
                src="https://whoisnerdy.com/web/upload/images/icotb_zoom.png"
                alt="search_Icon"
              />
            </a>
            <a href="/cart">
              <img
                src="https://whoisnerdy.com/web/upload/images/icotb_cart.png"
                alt="cart_Icon"
              />
            </a>
            <a href="/member">
              <img
                src="https://whoisnerdy.com/web/upload/images/icotb_my.png"
                alt="member_Icon"
              />
            </a>
          </ICON>
        </RightMenu>
      </Container>
      <HeaderSpacer />
    </>
  );
}
