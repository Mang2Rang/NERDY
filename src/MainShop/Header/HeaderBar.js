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
  gap: 1rem;
`;

const Li = styled.li`
  font-weight: 600;
  font-size: 15px;
  padding: 0 10px;
  color: black;
  //Li의 요소 중 첫번째 자식만 속성을 다르게 주고 싶어서 작성문 부분.
  :nth-child(1) {
    color: #7a2bdf;
    &::before {
      content: "";
      position: absolute;
      width: 0%;
      height: 100%;
      top: 0;
      left: 0;
      border-top: 2px solid #7a2bdf;
      transition: width 300ms ease-in-out;
    }
    &:hover::before {
      width: 100%;
    }

    &::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 100%;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid #7a2bdf;
      transition: width 300ms ease-in-out;
      transition-delay: 0.2s;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;
//Li 의 nth 차일드 요소가 적용이 안되는 의심되는 부분
// 이유 : <Ul>
//          <Li>
//            <CusNavLink>
//            여기에 코멘트가 작성되어있음.
//            </CusNavLink>
//          </Li>
//        </Ul>

const CusNavLink = styled(NavLink)`
  position: relative;
  padding: 2px 0 2px 0;
  cursor: pointer;
  width: 0%;
  &::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    border-top: 2px solid black;
    transition: width 300ms ease-in-out;
  }
  &:hover::before {
    width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    bottom: 0;
    left: 0;
    border-bottom: 2px solid black;
    transition: width 300ms ease-in-out;
    transition-delay: 0.2s;
  }
  &:hover::after {
    width: 100%;
  }
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
                with THE 8
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
                to="/bestItem"
                style={{ textDecoration: "none", color: "black" }}
              >
                BEST
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
                to="/newItem"
                style={{ textDecoration: "none", color: "black" }}
              >
                New
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
                to="/shoes"
                style={{ textDecoration: "none", color: "black" }}
              >
                Shoes
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
                to="/acc"
                style={{ textDecoration: "none", color: "black" }}
              >
                ACC
              </CusNavLink>
            </Li>
            <Li>
              <CusNavLink
                to="/outlet"
                style={{ textDecoration: "none", color: "black" }}
              >
                OUTLET
              </CusNavLink>
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
            <RLi>
              <NavLink
                to="/Membership"
                style={{ textDecoration: "none", color: "grey" }}
              >
                멤버쉽가입
              </NavLink>
            </RLi>
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
    </>
  );
}
