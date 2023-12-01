import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getAllBestItems } from "../Api/api";
import { PriceCalc } from "../Body/PriceCalc";

const Container = styled.div`
  width: calc(100vw-10px);
  min-width: 1200px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100% - 298px);
  overflow: hidden;
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
  height: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const Li = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
  flex: 0 0 20%;
  padding: 0 0 80px 0;
`;
const ItemText = styled.div`
  color: black;
  font-size: 14px;
`;
const Thumbnail = styled.div`
  position: relative;
  width: 230px;
  margin-top: 30px;

  img {
    width: 100%;
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
  z-index: 100;
`;

const ItemIf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;
const Txt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Coast = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Sale = styled.div`
  color: red;
`;
const Price = styled.div``;
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

export function BestItem() {
  const [bestitemList, setBestItemList] = useState([]);

  useEffect(() => {
    getAllBestItems().then((bestitem) => {
      setBestItemList(bestitem);
    });
  }, []);
  return (
    <>
      <Container>
        <ItemTitle>
          <h1>23FW Best상품</h1>
          <strong>전체</strong>
        </ItemTitle>
        <BestItemBanner>
          <img
            src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/d6f312b3dac67073bda4b0018a47c320.jpg"
            alt="배너"
          />
        </BestItemBanner>
        <ItemText>
          <p>{bestitemList.length}개의 상품이 있습니다</p>
        </ItemText>
        <Ul>
          {bestitemList.map((bestitem, index) => (
            <Li key={bestitem.id}>
              <Thumbnail>
                <a href={bestitem.link}>
                  <img src={bestitem.mainimg} alt="이미지" />
                </a>
                <BestNum>
                  <p>Best</p>
                  <p>{index + 1}</p>
                </BestNum>
                <ItemIf>
                  <Txt>
                    <p>★ 평점</p>
                    <p>{bestitem.name}</p>
                  </Txt>
                  <Coast>
                    <Sale>{bestitem.sale}</Sale>
                    <Price>{PriceCalc(bestitem.price)}원</Price>
                  </Coast>
                </ItemIf>
              </Thumbnail>
            </Li>
          ))}
        </Ul>
      </Container>
    </>
  );
}
