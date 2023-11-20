import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 3000px;
`;
const LbTitle = styled.div`
  display: flex;
  padding: 40px;
  gap: 30px;
  h1 {
    font-size: 42px;
    font-weight: 900;
  }
  strong {
    margin-top: 16px;
    font-size: 14px;
  }
  p {
    margin-top: 16px;
    font-size: 14px;
  }
`;
const LookbookBox = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }
`;
export function LookBook() {
  return (
    <>
      <Container>
        <LbTitle>
          <h1>LOOKBOOK</h1>
          <strong>전체</strong>
          <p>진행중</p>
          <p>종료</p>
        </LbTitle>
        <LookbookBox>
          {/* <img src="이미지주소" /> */}
          <h3>NERDY with THE 8 LOOKBOOK</h3>
          <p>2023.11.01~</p>
        </LookbookBox>
      </Container>
    </>
  );
}
