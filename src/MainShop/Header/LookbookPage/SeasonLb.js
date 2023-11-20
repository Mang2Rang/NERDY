import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  height: 1000px;
  margin: 0 auto;
  max-width: 1400px;
  min-width: 1200px;
`;
const Ul = styled.div`
  height: 700px;
`;
const GoNewItem = styled.div`
  button {
    width: 200px;
    height: 50px;
    border: 1px solid black;
    font-size: 16px;
    margin-left: 600px;
    background-color: white;
  }
`;

export function SeasonLb() {
  return (
    <>
      <Container>
        <Ul></Ul>
        <GoNewItem>
          <NavLink
            to="/NewItem"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button>23FW 상품 보러가기</button>
          </NavLink>
        </GoNewItem>
      </Container>
    </>
  );
}
