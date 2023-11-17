import styled from "styled-components";

const Container = styled.div`
  width: calc(100vw-10px);
`;

export function Ooutlet() {
  return (
    <>
      <Container>
        <p>OUTLET</p>
      </Container>
    </>
  );
}
