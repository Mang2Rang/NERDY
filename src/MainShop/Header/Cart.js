import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 600px;
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
const GoHomeBtn = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  button {
    width: 90%;
    height: 16%;
    background-color: white;
    border: 1px solid #dbdbdb;
    color: #424242;
  }
`;
const GoLoginBtn = styled.div`
  width: 78%;
  height: 100%;
  margin-top: 10px;
  button {
    width: 90%;
    height: 16%;
    background-color: black;
    border: 1px solid #dbdbdb;
    color: white;
    font-weight: 900;
    font-size: 16px;
  }
`;
const ItemBox = styled.div`
  height: 155px;
  /* 변경예정 */
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
            <Bar />
            <ItemBox>
              {/* <Item/> */}
              {itemPrices.map((price, index) => (
                <div key={index}>{/* 여기에 각 아이템의 정보 표시 */}</div>
              ))}
            </ItemBox>
            <Bar />
            <GoHomeBtn>
              <NavLink
                to="/bestitem"
                style={{ textDecoration: "none", color: "#424242" }}
              >
                <button>+ 더 담으러 가기</button>
              </NavLink>
            </GoHomeBtn>
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
            <GoLoginBtn>
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "#424242" }}
              >
                <button>결제하기</button>
              </NavLink>
            </GoLoginBtn>
          </PayBox>
        </CartBox>
      </Container>
    </>
  );
}
