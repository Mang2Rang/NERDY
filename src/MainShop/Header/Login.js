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
  display: block;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
  border-width: 2px;
  /* border-style: groove; */
  border-color: rgb(192, 192, 192);
  border-image: initial;
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
const Joinspace = styled.div`
  margin: 20px 0;
`;

const Join = styled.a`
  display: block;
  background: #fff;
  color: #000;
  border: 1px solid #d4d4d4;
  font-size: 15px;
  line-height: 50px;
  border-radius: 25px;
  letter-spacing: -1px;
  color: #787878;
  line-height: 21px;
  border: none;
  position: relative;
  display: inline-block;
  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #787878;
  }
`;

const Orwrap = styled.div`
  position: relative;
  margin: 48px 0;
  border-bottom: 1px solid #eaeaea;
`;

const Or = styled.div`
  display: block;
  height: 20px;
  line-height: 20px;
  background: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -9px;
  font-size: 12px;
  font-weight: 300;
  color: #000;
  padding: 0 10px;
`;

const SnsSync = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 12px;
  max-width: 250px;
  margin: auto;
  margin-bottom: 100px;
`;

const KaKaologin = styled.a`
  width: 33.3%;
  position: relative;
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  color: #000;
  img {
    width: 48px;
    margin: auto;
    display: block;
  }
  span {
    font-size: 14px;
    display: block;
    color: #424242;
  }
`;
const Naverlogin = styled.a`
  width: 33.3%;
  position: relative;
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  color: #000;
  img {
    width: 48px;
    margin: auto;
    display: block;
  }
  span {
    font-size: 14px;
    display: block;
    color: #424242;
  }
`;
const Applelogin = styled.a`
  width: 33.3%;
  position: relative;
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  color: #000;
  img {
    width: 48px;
    margin: auto;
    display: block;
  }
  span {
    font-size: 14px;
    display: block;
    color: #424242;
  }
`;
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
                    <Join>
                      <text>일반 회원가입</text>
                    </Join>
                  </Joinspace>
                </Joinbox>
                <Typelogin />
              </FormBox>
            </Filedset>
            <Orwrap>
              <Or>또는</Or>
            </Orwrap>
            <SnsSync>
              <KaKaologin href="#none">
                <img src="https://whoisnerdy.com/web/upload/icon/ico_kakao.png" />
                &nbsp;
                <span>카카오</span>
              </KaKaologin>
              <Naverlogin href="#none">
                <img src="https://whoisnerdy.com/web/upload/icon/ico_naver.png" />
                &nbsp;
                <span>네이버</span>
              </Naverlogin>
              <Applelogin href="#none">
                <img src="https://whoisnerdy.com/web/upload/icon/ico_apple.png" />
                &nbsp;
                <span>애플</span>
              </Applelogin>
            </SnsSync>
          </Loginbar>
        </Content>
      </Container>
    </>
  );
}
