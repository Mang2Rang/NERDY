import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
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
  text-align: center;
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const Li = styled.li`
  font-weight: 500;
  font-size: 15px;
  padding: 0 10px;
  gap: 1.5rem;
`;
const LiSmall = styled.li`
  font-size: 13px;
  font-weight: 500;
`;
const LiBar = styled.li`
  color: #eaeaea;
`;

const The8 = styled.div`
  color: #7a2bdf;
  /* font-weight: 600; */
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

const CusNavLink = styled(NavLink)`
  position: relative;
  padding: 0 0 1px 0;
  cursor: pointer;
  width: 0%;
  ::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0%;
    border-top: 2px solid #7a2bdf;
    transition: width 150ms ease-in-out;
  }
  ::after {
    position: absolute;
    content: "";
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 2px solid #7a2bdf;
    border-bottom: 2px solid #7a2bdf;
    transition: width 300ms ease-in-out;
  }
`;

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
              <CusNavLink
                to="/the8"
                style={{ textDecoration: "none", color: "black" }}
              >
                <The8>with THE 8</The8>
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
                to="/bestItem"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>BEST</strong>
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
                to="/newItem"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>New</strong>
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
                to="/shoes"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>Shoes</strong>
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
                to="/acc"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>ACC</strong>
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
                to="/outlet"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>OUTLET</strong>
              </CusNavLink>
            </Li>
            <LiBar>|</LiBar>
            <LiSmall>
              <CusNavLink
                to="/benefit"
                style={{ textDecoration: "none", color: "black" }}
              >
                BENEFIT
              </CusNavLink>
            </LiSmall>
            <LiSmall>
              <CusNavLink
                to="/lookbook"
                style={{ textDecoration: "none", color: "black" }}
              >
                LOOKBOOK
              </CusNavLink>
            </LiSmall>
            <LiSmall>
              <CusNavLink
                to="/community"
                style={{ textDecoration: "none", color: "black" }}
              >
                COMMUNITY
              </CusNavLink>
            </LiSmall>
          </Ul>
        </NavMid>
        <RUl>
          <RLi>
            <NavLink
              to="/Membership"
              style={{ textDecoration: "none", color: "grey" }}
            >
              멤버쉽가입
            </NavLink>
          </RLi>
        </RUl>
        <RightMenu>
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
    </>
  );
}
