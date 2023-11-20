import styled from "styled-components";

const Contents = styled.div`
  width: 1200px;
  min-width: 1200px;
  min-height: 100%;
  min-height: calc(100%-298px);
  margin: 0 auto;
  padding: 33px 0 0;
  position: relative;
`;
const Joinbody = styled.div`
  margin: 0 auto;
  max-width: 580px;
`;
const Joinbodytitle = styled.b`
  font-weight: 700;
  font-size: 25px;
  letter-spacing: -0.5px;
  display: block;
  color: #000;
`;
const Joinform = styled.form`
  margin: 0;
  padding: 0;
`;
const Jointit = styled.b`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  display: block;
  padding: 60px 0 15px;
  color: #000;
`;

const MobileWrap = styled.div`
  margin: 0;
  padding: 0;
`;

export function Register() {
  return (
    <>
      <Contents>
        <Joinbody>
          <Joinbodytitle>회원가입</Joinbodytitle>
          <Joinform>
            <Jointit>본인인증하기</Jointit>
            <MobileWrap></MobileWrap>
          </Joinform>
        </Joinbody>
      </Contents>
    </>
  );
}
