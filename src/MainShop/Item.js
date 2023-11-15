import styled from "styled-components";

// const togglePopup = () => {
//   if (showPopup === false) {
//     setShowPopup(true);
//   } else {
//     setShowPopup(false);
//   }
// };

const Ibox = styled.div`
  display: flex;
`;
const Iimg = styled.img`
  width: 50%;
  height: 100%;
`;
const IIf = styled.div``;
const Ul = styled.div``;
const Li = styled.div`
  margin-top: 50px;
`;
const Select = styled.select`
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

const OPTIONS = [
  { value: "", name: "-[필수] 옵션을 선택해주세요-", disabled: true },
  { value: "black", name: "Black" },
  { value: "white", name: "White" },
  { value: "purple", name: "Purple" },
  { value: "L", name: "L" },
  { value: "M", name: "M" },
  { value: "S", name: "S" },
];
const SelectBox = (props) => {
  const handleChange = (e) => {
    // event handler
    console.log(e.target.value);
  };

  return (
    <Select onChange={handleChange} value={props.defaultValue}>
      <option key="" value="" disabled>
        -[필수] 옵션을 선택해주세요-
      </option>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
};

function App() {
  return (
    <SelectBox options={OPTIONS} defaultValue=" -[필수] 옵션을 선택해주세요-" />
  );
}

export default App;
export function Item() {
  return (
    <Ibox>
      <Iimg src="이미지주소" alt="image" />
      <IIf>
        <Ul>
          <Li>★ 평점</Li>
          <Li>품명</Li>
          <Li>가격</Li>
        </Ul>
        <Ul>
          <Li>
            컬러
            <Select>
              <option key="basic" value="basic">
                -[필수] 옵션을 선택해주세요-
              </option>
              <option key="black" value="black">
                Black
              </option>
              <option key="white" value="white">
                White
              </option>
              <option key="purple" value="purple">
                Purple
              </option>
            </Select>
          </Li>
          <Li>
            사이즈
            <Select>
              <option key="basic" value="basic">
                -[필수] 옵션을 선택해주세요-
              </option>
              <option key="L" value="L">
                L
              </option>
              <option key="M" value="M">
                M
              </option>
              <option key="S" value="S">
                S
              </option>
            </Select>
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
