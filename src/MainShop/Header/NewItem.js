import styled from "styled-components";

const Container = styled.div`
  width: calc(100vw-10px);
  min-width: 1200px;
  max-width: 1400px;
  margin: 0 auto;
`;

const BestItemBanner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  img {
    width: 100%;

    height: 400px;

    object-fit: cover;
  }
`;
const Ul = styled.div`
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
  position: relative;
  width: 244px;
  margin-top: 30px;
  img {
    width: 100%;
    height: 283px;
  }
`;
const BestNum = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 40px;
  height: 35px;
  background-color: black;
  color: white;
  font-size: 12px;
  font-weight: 900;

  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const Li = styled.div``;
const ItemIf = styled.div`
  p {
    display: flex;
  }
`;
const Sale = styled.div`
  color: red;
`;
const ItemTitle = styled.div`
  color: black;
  font-size: 14px;
  display: flex;

  gap: 30px;
  h1 {
    font-size: 40px;
    font-weight: 900;
    margin-top: 50px;
  }
  strong {
    margin-top: 70px;
    font-size: 14px;
  }
`;

export function NewItem() {
  const productList = [
    /* 리스트에 상품 정보를 추가하세요 */

    {
      imageUrl:
        "https://www.whoisnerdy.com/web/product/big/202307/8133f567f6daca77d0eb9e5c0ba5b1e3.png",
      name: "후리스",
      salePercentage: "20%",
      link: "",
    },
  ];
  return (
    <>
      <Container>
        <ItemTitle>
          <h1>23FW 신상품</h1>
          <strong>전체</strong>
        </ItemTitle>
        <BestItemBanner>
          <img
            src="https://www.whoisnerdy.com/web/upload/event/2023/editorial_01.png?ver=2"
            alt=""
          />
        </BestItemBanner>
        <ItemText>
          <p>{productList.length}개의 상품이 있습니다</p>
        </ItemText>
        <Ul>
          {productList.map((product, index) => (
            <Li key={index}>
              <Thumbnail>
                <a href={product.link}>
                  <img src={product.imageUrl} alt="이미지" />
                </a>
                <BestNum>
                  <p>Best</p>
                  <p>{index + 1}</p>
                </BestNum>
                <ItemIf>
                  <p>★ 평점</p>
                  <p>{product.name}</p>
                  <p>
                    <Sale>{product.salePercentage}</Sale> ~원
                  </p>
                </ItemIf>
              </Thumbnail>
            </Li>
          ))}
        </Ul>
      </Container>
    </>
  );
}
