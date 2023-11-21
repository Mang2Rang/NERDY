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
const Gothe8 = styled.div`
  button {
    width: 200px;
    height: 50px;
    border: 1px solid black;
    font-size: 16px;
    margin-left: 600px;
    background-color: white;
  }
`;

export function The8LB() {
  return (
    <>
      <Container>
        <Ul></Ul>
        <Gothe8>
          <NavLink
            to="/the8"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button>상품보러가기</button>
          </NavLink>
        </Gothe8>
      </Container>
    </>
  );
}
