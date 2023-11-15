import { Menu } from "./Menu";
import { Footer } from "./Footer";
// import { Left } from "./Left";
// import { Right } from "./Right";
import styled from "styled-components";
import { HeaderBar } from "./HeaderBar";
import { Search } from "./Search";
import { Login } from "./Login";
import { Mypage } from "./Mypage";
import { Poket } from "./Poket";
import { NewItem } from "./NewItem";

const Container = styled.div`
  width: calc(100vw-10px);
`;

const StyledFooter = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px;
`;
const BestItemBanner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ItemBox = styled.div`
  width: 100%;
  height: 500px;
`;
const ItemText = styled.div`
  color: black;
  font-size: 14px;
`;
const Thumbnail = styled.div`
  margin-top: 30px;
  img {
    width: 100%;
    height: 400px;
  }
`;
const BestNum = styled.div`
  width: 40px;
  height: 35px;
  background-color: black;
  color: white;
  font-size: 12px;
  font-weight: 900;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Item = styled.div``;
const ItemIf = styled.div`
  p {
    display: flex;
  }
`;
const Sale = styled.div`
  color: red;
`;

export function BestItem() {
  return (
    <>
      <Container>
        <BestItemBanner>
          <img
            src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/d6f312b3dac67073bda4b0018a47c320.jpg"
            alt="배너"
          />
        </BestItemBanner>
        <ItemBox>
          <ItemText>
            <p>총 12개의 상품이 있습니다</p>
          </ItemText>
          <Item>
            <Thumbnail>
              <a href="링크주소">
                <img src="이미지주소" alt="이미지" />
              </a>
              <BestNum>
                <p>Best</p>
                <p>1</p>
              </BestNum>
              <ItemIf>
                <p>★ 평점</p>
                <p>품명</p>
                <p>
                  <Sale>세일%</Sale> ~원
                </p>
              </ItemIf>
            </Thumbnail>
          </Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </ItemBox>
        <ItemBox>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </ItemBox>
        <ItemBox>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </ItemBox>
      </Container>
    </>
  );
}
