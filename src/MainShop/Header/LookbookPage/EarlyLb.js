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

export function EarlyLb() {
  return (
    <>
      <Container>
        <Ul></Ul>
      </Container>
    </>
  );
}
