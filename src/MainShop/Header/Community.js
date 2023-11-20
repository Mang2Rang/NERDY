import styled from "styled-components";

const Container = styled.div`
  width: 1000px;
  min-width: 1000px;
  margin: 0 auto;
  height: 1000px;
`;
const CommunityBoard = styled.div`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  line-height: 1.5;
`;
const PageController = styled.div``;
const BoardSearchForm = styled.div``;
const BoardHeader = styled.div`
  display: flex;
`;
const Num = styled.div``;
const Product = styled.div``;
const Subject = styled.div``;
const Name = styled.div``;
const Date = styled.div``;
const Notice = styled.div``;

export function Community() {
  return (
    <>
      <Container>
        <CommunityBoard>
          <BoardHeader>
            <Num>No</Num>
            <Product>Product</Product>
            <Subject>Subject</Subject>
            <Name>Name</Name>
            <Date>Date</Date>
          </BoardHeader>
          <Notice></Notice>
        </CommunityBoard>
        <PageController></PageController>
        <BoardSearchForm></BoardSearchForm>
      </Container>
    </>
  );
}
