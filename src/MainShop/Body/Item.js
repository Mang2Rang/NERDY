import React from "react";
import styled from "styled-components";
import products from "../DB/Product";

const Ibox = styled.div`
  display: flex;
`;

const Iimg = styled.img`
  width: 568px;
  height: 718px;
`;

const IIf = styled.div``;

const Ul = styled.div``;

const Li = styled.div`
  margin-top: 50px;
`;

const GoBox = styled.div`
  display: flex;
  margin-top: 50px;
`;

const InBox = styled.div`
  button {
    width: 200px;
    height: 50px;
    background-color: white;
  }
`;

const CartBox = styled.div`
  button {
    width: 200px;
    height: 50px;
    background-color: black;
    color: white;
    border: black;
  }
`;

const Delivery = styled.div`
  margin-top: 30px;
`;

const DeliveryIf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
  font-size: 14px;
  width: 70%;
  p {
    margin-bottom: 10px;
  }
`;

const DeliveryText = styled.div`
  color: #343a40;
  font-size: 12px;
`;
const SelectBox = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 300px;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  &:focus {
    border-color: red;
  }
`;

const OPTIONS = [
  { value: "", name: "-[필수] 옵션을 선택해주세요-", disabled: true },
  { value: "black", name: "Black" },
  { value: "white", name: "White" },
  { value: "purple", name: "Purple" },
  { value: "L", name: "L" },
  { value: "M", name: "M" },
  { value: "S", name: "S" },
];

const SelectBoxWrapper = styled.div`
  margin-top: 10px;
`;

export function Item() {
  const product = products[0]; // 여기에서 원하는 상품을 선택하거나 매핑하는 로직을 추가하세요.

  return (
    <Ibox>
      <Iimg src={product.imageUrl} alt="image" />
      <IIf>
        <Ul>
          <Li>★ 평점</Li>
          <Li>{product.name}</Li>
          <Li>{product.price}</Li>
        </Ul>
        <Ul>
          <Li>
            컬러
            <SelectBoxWrapper>
              <SelectBox options={OPTIONS} defaultValue="" />
            </SelectBoxWrapper>
          </Li>
          <Li>
            사이즈
            <SelectBoxWrapper>
              <SelectBox options={OPTIONS} defaultValue="" />
            </SelectBoxWrapper>
          </Li>
        </Ul>
        <GoBox>
          <InBox>
            <button>장바구니</button>
          </InBox>
          <CartBox>
            <button>바로구매</button>
          </CartBox>
        </GoBox>
        <Delivery>
          <DeliveryIf>
            <p>배송비 / 배송안내</p>
          </DeliveryIf>
          <DeliveryText>
            <p>3,000원 (10만원 이상 구매 시 무료배송)</p>
            <p>15시 이전 결제완료 시 당일 출고</p>
            <p>(예약상품과 일반상품 함께 구매 시 일반상품은 선출고 됩니다.)</p>
          </DeliveryText>
        </Delivery>
      </IIf>
    </Ibox>
  );
}
