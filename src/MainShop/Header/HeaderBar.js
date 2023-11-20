import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Container = styled.div`
<<<<<<< HEAD
  position: sticky;
=======
  position: fixed;
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
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
<<<<<<< HEAD
  text-align: center;
=======
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;
<<<<<<< HEAD
  gap: 1rem;
`;
const Li = styled.li`
  font-weight: 500;
  font-size: 15px;
  padding: 0 10px;
=======
  gap: 1.5rem;
`;
const Li = styled.li`
  font-weight: bold;
  font-size: 15px;
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
`;
const LiSmall = styled.li`
  font-size: 13px;
  font-weight: 500;
`;
const LiBar = styled.li`
  color: #eaeaea;
`;

<<<<<<< HEAD
const The8 = styled.div`
  color: #7a2bdf;
  /* font-weight: 600; */
`;
=======
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
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
<<<<<<< HEAD
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
  :hover {
  }
`;
=======
const HeaderSpacer = styled.div`
  height: 80px;
`;
// const NavLink = styled.a`
//   text-decoration: none;
//   color: black;
// `;
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084

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
<<<<<<< HEAD
              <CusNavLink
                to="/the8"
                style={{ textDecoration: "none", color: "black" }}
              >
                <The8>with THE 8</The8>
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
=======
              <NavLink
                to="/the8"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>with THE 8</strong>
              </NavLink>
            </Li>
            <Li>
              <NavLink
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
                to="/bestItem"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>BEST</strong>
<<<<<<< HEAD
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
=======
              </NavLink>
            </Li>
            <Li>
              <NavLink
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
                to="/newItem"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>New</strong>
<<<<<<< HEAD
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
=======
              </NavLink>
            </Li>
            <Li>
              <NavLink
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
                to="/shoes"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>Shoes</strong>
<<<<<<< HEAD
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
=======
              </NavLink>
            </Li>
            <Li>
              <NavLink
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
                to="/acc"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>ACC</strong>
<<<<<<< HEAD
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
=======
              </NavLink>
            </Li>
            <Li>
              <NavLink
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
                to="/outlet"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>OUTLET</strong>
<<<<<<< HEAD
              </CusNavLink>
            </Li>
            <LiBar>|</LiBar>
            <LiSmall>
              <CusNavLink
=======
              </NavLink>
            </Li>
            <LiBar>|</LiBar>
            <LiSmall>
              <NavLink
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
                to="/benefit"
                style={{ textDecoration: "none", color: "black" }}
              >
                BENEFIT
<<<<<<< HEAD
              </CusNavLink>
            </LiSmall>
            <LiSmall>
              <CusNavLink
=======
              </NavLink>
            </LiSmall>
            <LiSmall>
              <NavLink
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
                to="/lookbook"
                style={{ textDecoration: "none", color: "black" }}
              >
                LOOKBOOK
<<<<<<< HEAD
              </CusNavLink>
            </LiSmall>
            <LiSmall>
              <CusNavLink
=======
              </NavLink>
            </LiSmall>
            <LiSmall>
              <NavLink
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
                to="/community"
                style={{ textDecoration: "none", color: "black" }}
              >
                COMMUNITY
<<<<<<< HEAD
              </CusNavLink>
=======
              </NavLink>
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
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
<<<<<<< HEAD
            <RLi>
              <NavLink
                to="/Membership"
                style={{ textDecoration: "none", color: "grey" }}
              >
                멤버쉽가입
              </NavLink>
            </RLi>
=======
            <RLi>멤버쉽가입</RLi>
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
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
<<<<<<< HEAD
=======
      <HeaderSpacer />
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
    </>
  );
}
