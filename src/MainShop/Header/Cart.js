import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 1000px;
`;
const CartBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const CartTextBox = styled.div`
  padding-top: 80px;
  padding-left: 200px;
`;
const Bar = styled.div`
  border-bottom: 1px solid black;
  width: 90%;
  margin-top: 40px;
`;
const Bar2 = styled.div`
  border-bottom: 1px solid black;
  width: 70%;
  margin-top: 40px;
  margin-bottom: 20px;
`;
const PayBox = styled.div`
  margin-top: 112px;
`;
const Pay = styled.div`
  display: flex;
  gap: 43%;
  margin-top: 10px;
`;
const PayName = styled.div`
  align-items: flex-start;
  P {
    margin-bottom: 10px;
  }
`;
const Money = styled.div`
  align-items: flex-end;
  h4 {
    margin-bottom: 10px;
  }
`;

export function Cart() {
  const [itemPrices, setItemPrices] = useState([10000, 20000, 30000]); // 예시 데이터

  const totalItemPrice = itemPrices.reduce((acc, price) => acc + price, 0);

  const delivery = 3000;

  const totalPayment = totalItemPrice + delivery;

  return (
    <>
      <Container>
        <CartBox>
          <CartTextBox>
            <h2>장바구니</h2>
            {/* <Item/> */}
            {itemPrices.map((price, index) => (
              <div key={index}>{/* 여기에 각 아이템의 정보 표시 */}</div>
            ))}
            <Bar />
          </CartTextBox>
          <PayBox>
            <Bar2 />
            <h2>결제 내역</h2>
            <Pay>
              <PayName>
                <p>총 상품금액</p>
                <p>총 할인금액</p>
                <p>배송비</p>
              </PayName>
              <Money>
                <h4>{totalItemPrice}원</h4>
                <h4>원</h4>
                <h4>{delivery}원</h4>
              </Money>
            </Pay>
            <Bar2 />
            <Pay>
              <PayName>
                <p>총 결제금액</p>
              </PayName>
              <Money>
                <h4>{totalPayment}원</h4>
              </Money>
            </Pay>
          </PayBox>
        </CartBox>
      </Container>
    </>
  );
}
