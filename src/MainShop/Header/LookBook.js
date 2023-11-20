import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 1200px;
  height: 2000px;
  margin: 0 auto;
`;
const Content = styled.div`
  display: flex;
  margin-bottom: 70px;
  gap: 30px;
  justify-content: center;
`;
const Content2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 70px;
  gap: 30px;
  justify-content: center;
`;
const LbTitle = styled.div`
  display: flex;
  padding: 40px;
  gap: 30px;
  h1 {
    font-size: 42px;
    font-weight: 900;
  }
  strong {
    margin-top: 16px;
    font-size: 14px;
  }
  p {
    margin-top: 16px;
    font-size: 14px;
    color: gray;
  }
`;
const LookbookBox = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  p {
    font-size: 16px;
    font-weight: 600;
  }
  img {
    width: 380px;
    height: 288px;
    border-radius: 5px;
    margin-bottom: 14px;
  }
`;
const Fbox = styled.div`
  margin-bottom: 18px;
  height: 288px;
  width: 380px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  img {
    position: absolute;
    height: 288px;
    width: 380px;
    top: 0;
    left: 0;
    border-radius: 5px;
  }
`;
const Fog = styled.div`
  transition: 0.5s;
  cursor: pointer;
  position: absolute;
  z-index: 100;
  height: 380px;
  width: 500px;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const Ftext = styled.div`
  position: absolute;
  z-index: 1000;
  right: 0;
  top: 0;
  width: 95px;
  height: 56px;
  box-sizing: border-box;
  font-size: 19.4px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 56px;
  letter-spacing: -1px;
  text-align: center;
  background: rgba(0, 0, 0, 1);
  color: #ffffff;
`;
const LookbookBox2 = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  p {
    font-size: 16px;
    font-weight: 600;
  }
  position: relative;
  width: 380px;
`;
export function LookBook() {
  return (
    <>
      <Container>
        <LbTitle>
          <h1>LOOKBOOK</h1>
          <strong>전체</strong>
          <p>진행중</p>
          <p>종료</p>
        </LbTitle>
        <Content>
          <LookbookBox>
            <NavLink
              to="/the8lb"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src="https://whoisnerdy.com/file_data/multinex//2023/11/08/cd13caff572da93318bf9fd7cb844f99.jpg" />
            </NavLink>
            <h3>NERDY with THE 8 LOOKBOOK</h3>
            <p>2023.11.01~</p>
          </LookbookBox>
          <LookbookBox>
            <NavLink
              to="/seasonlb"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src="https://whoisnerdy.com/file_data/multinex//2023/09/25/e3abb77fa6f0bdd0269e043cd1d90ff9.jpg" />
            </NavLink>
            <h3>23FW SEASON LOOKBOOK</h3>
            <p>2023.09.01~</p>
          </LookbookBox>
          <LookbookBox>
            <NavLink
              to="/earlylb"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src="https://whoisnerdy.com/file_data/multinex//2023/09/12/3db4ecf25869c34233f368085cfe2250.jpg" />
            </NavLink>
            <h3>23FW EARLY BIRD</h3>
            <p>2023.08.29~</p>
          </LookbookBox>
        </Content>
        <Content>
          <LookbookBox>
            <NavLink
              to="/blenklb"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src="https://whoisnerdy.com/file_data/multinex//2023/04/28/7984939c370cc326fff0adc7bcb2dc5b.jpg" />
            </NavLink>
            <h3>BL'E'NK COLLECTION Vol.02</h3>
            <p>2023.04.27~</p>
          </LookbookBox>
          <LookbookBox>
            <NavLink
              to="/tennislb"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src="https://whoisnerdy.com/file_data/multinex//2023/03/30/4bf951ddeb61a1c1075be31cc8c2f066.jpg" />
            </NavLink>
            <h3>NERDY TENNIS LOOK</h3>
            <p>2023.03.30~</p>
          </LookbookBox>
          <LookbookBox>
            <NavLink
              to="/disneylb"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src="https://whoisnerdy.com/file_data/multinex//2023/03/27/a4861a9c8031617022b2471c7c49f399.jpg" />
            </NavLink>
            <h3>DISNEY 2ND COLLECTION</h3>
            <p>2023.11.01~</p>
          </LookbookBox>
        </Content>
        <Content2>
          <LookbookBox2>
            <Ftext>종료</Ftext>
            <Fbox>
              <Fog />
              <img src="https://whoisnerdy.com/file_data/multinex//2022/11/29/9de960b12471f2c9f27a91cd6145ae95.jpg" />
            </Fbox>
            <h3>CAMPING IN THE WINTER</h3>
            <p>2022.11.28~2022.12.31</p>
          </LookbookBox2>
          <LookbookBox2>
            <Ftext>종료</Ftext>
            <Fbox>
              <Fog />
              <img src="https://whoisnerdy.com/file_data/multinex//2022/10/06/9540f0d073ca1e23f958cc2c2fcd6728.jpg" />
            </Fbox>
            <h3>22FW TAEYEON 2ND COLLECTION</h3>
            <p>2022.10.06~2022.12.31</p>
          </LookbookBox2>
          <LookbookBox2>
            <Ftext>종료</Ftext>
            <Fbox>
              <Fog />
              <img src="https://whoisnerdy.com/file_data/multinex//2022/10/06/2be073b16fa2a3f4549993b8d7269f03.jpg" />
            </Fbox>
            <h3>NERDY x YONSEI UNIVERSITY</h3>
            <p>2022.09.23~2022.12.31</p>
          </LookbookBox2>
        </Content2>
        <Content2>
          <LookbookBox2>
            <Ftext>종료</Ftext>
            <Fbox>
              <Fog />
              <img src="https://whoisnerdy.com/file_data/multinex//2022/08/31/e106a3fb33e0f30d72ce5e699ed8a6b1.jpg" />
            </Fbox>
            <h3>CHYNDAI DEPARTMENT STORE DUTY FREE...</h3>
            <p>2022.08.31~2022.12.31</p>
          </LookbookBox2>
          <LookbookBox2>
            <Ftext>종료</Ftext>
            <Fbox>
              <Fog />
              <img src="https://whoisnerdy.com/file_data/multinex//2022/08/16/b2afd74acf2d9752818bb166bc789c2c.jpg" />
            </Fbox>
            <h3>22FW TAEYEON 1ST COLLECTION</h3>
            <p>2022.08.16~2022.12.31</p>
          </LookbookBox2>
          <LookbookBox2>
            <Ftext>종료</Ftext>
            <Fbox>
              <Fog />
              <img src="https://whoisnerdy.com/file_data/multinex//2022/06/02/6bb8d93c826c0339fcbfb24e6cf69be3.jpg" />
            </Fbox>
            <h3>DERDIST ADORA</h3>
            <p>2022.06.02~2022.12.31</p>
          </LookbookBox2>
        </Content2>
      </Container>
    </>
  );
}
