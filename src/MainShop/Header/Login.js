import styled from "styled-components";

const Container = styled.div`
  width: auto;
  min-width: 1000px;
  min-height: 100%;
  min-height: calc(1005 -298px);
  padding: 33px 0 0 0;
  margin: 0 auto;
  position: relative;
`;
const Content = styled.div`
  margin: 0;
  padding: 0;
  display: block;
`;
const Loginbar = styled.div`
  width: 390px;
  margin: 0 auto;
  display: block;
`;
const Logintitle = styled.div`
  font-size: 25px;
  color: #000;
  padding: 23px 0 0;
  margin-bottom: 83px;
  text-align: center;
  letter-spacing: -0.5px;
  font-weight: 600;
`;
const Filedset = styled.fieldset`
  border: none;
  vertical-align: top;
`;
const FormBox = styled.div`
  position: relative;
  margin: 0px 0 0;
  font-size: 14px;
  color: #424242;
`;
const Form = styled.div`
  margin: 0 0px 0 0;
`;
const Eplaceholder = styled.label``;

const Input = styled.input`
  margin: 0 0 7px;
  color: #000;
  font-weight: 400;
  outline: none;
  font-size: 15px;
  width: 100%;
  text-indent: 5px;
  margin: 0;
  padding: 0;
  height: 58px;
  line-height: 58px;
  background: #ffffff;
  border: none;
  border-bottom: 1px solid #dedede;
  box-sizing: border-box;
`;

const Findinfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0 25px;
`;

const Security = styled.p`
  margin: 0;
  padding: 0;
  /* display: block; */
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const Check = styled.input`
  border-radius: 0;
  margin: 0 6px 0 0;
  width: 15px;
  height: 15px;
  border: 0;
  /* -webkit-appearance: none; */
  background: url(https://whoisnerdy.com/web/upload/img/join_unchecked.png)
    no-repeat;

  background-size: cover;
`;
const Membercheck = styled.label`
  margin: 0;
  cursor: pointer;
`;
const Typelogin = styled.div`
  position: relative;
  padding: 0 8px 0 0;
  display: inline-block;
  font-weight: normal;
  font-size: 14px;
  color: #424242;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  ::before {
    display: block;
    content: "";
    position: absolute;
    top: 4px;
    left: 106px;
    width: 1px;
    height: 12px;
    background: #dbdbdb;
  }
`;

const Notmember = styled.a`
  color: #424242;
  font-family: "Apple SD Gothic Neo";
  text-decoration: none;
`;

const Findidpass = styled.a`
  padding: 0 0 0 8px;
`;

const Btnbox = styled.div`
  padding: 10px 0 0 0;
`;

const Button = styled.button`
  display: block;
  background: #000;
  border: none;
  text-align: center;
  width: 100%;
  color: #fff;
  height: 60px;
  line-height: 60px;
  font-size: 15px;
  letter-spacing: -1px;
  font-weight: 500;
`;

const Joinbox = styled.div`
  margin: 0 0 100px;
  margin: 0 0 50px;
  text-align: center;
  position: relative;
`;
const Joinspace = styled.div``;

const Join = styled.a``;
export function Login() {
  return (
    <>
      <Container>
        <Content>
          <Loginbar>
            <Logintitle>로그인</Logintitle>
            <Filedset>
              <FormBox>
                <Form>
                  <Eplaceholder>
                    <Input placeholder="아이디" />
                    <Input placeholder="비밀번호" />
                  </Eplaceholder>
                </Form>
                <Findinfo>
                  <Security>
                    <Check />
                    <Membercheck>자동 로그인</Membercheck>
                  </Security>
                  <Typelogin>
                    <Notmember>비회원 주문조회</Notmember>
                    <Findidpass>ID/PW찾기</Findidpass>
                  </Typelogin>
                </Findinfo>
                <Btnbox>
                  <Button>로그인 하기</Button>
                </Btnbox>
                <Joinbox>
                  <Joinspace>
                    <Join></Join>
                  </Joinspace>
                </Joinbox>
                <Typelogin />
              </FormBox>
            </Filedset>
          </Loginbar>
        </Content>
      </Container>
    </>
  );
}
