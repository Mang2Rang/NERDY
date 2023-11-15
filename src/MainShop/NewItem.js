import styled from "styled-components";

const Container = styled.div`
  width: calc(100vw-10px);
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
  h1 {
    font-size: 36px;
    margin-bottom: 40px;
  }
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

export function NewItem() {
  return (
    <>
      <Container>
        <BestItemBanner>
          <img
            src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/18400e1b6ea73d897fac9d9e1190b7f6.jpg"
            alt="배너"
          />
        </BestItemBanner>
        <ItemBox>
          <ItemText>
            <h1>23FW 신상품</h1>
            <p>총 12개의 상품이 있습니다</p>
          </ItemText>
          <Item>
            <Thumbnail>
              <a href="링크주소">
                <img src="이미지주소" alt="이미지" />
              </a>
              <BestNum>
                <p>NEW</p>
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
