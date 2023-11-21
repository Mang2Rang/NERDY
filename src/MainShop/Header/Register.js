import styled from "styled-components";
import React, { useState } from "react";
// 모든 컨텐츠의 부모
const Contents = styled.div`
  width: 1200px;
  min-width: 1200px;
  min-height: 100%;
  min-height: calc(100%-298px);
  margin: 0 auto;
  padding: 33px 0 0;
  position: relative;
`;
// 가입하는 곳 크기
const Joinbody = styled.div`
  margin: 0 auto;
  max-width: 580px;
`;
// 회원가입 타이틀
const Joinbodytitle = styled.b`
  font-weight: 700;
  font-size: 25px;
  letter-spacing: -0.5px;
  display: block;
  color: #000;
`;
// 가입창 기본 속성
const Joinform = styled.form`
  margin: 0;
  padding: 0;
`;
// 각 문단의 제목 ex)본인인증,필수정보 등
const Jointit = styled.b`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  display: block;
  padding: 60px 0 15px;
  color: #000;
`;
// 본인인증 기본 속성
const MobileWrap = styled.div`
  margin: 0;
  padding: 0;
`;
// 모바일 팝업
const MobilePopup = styled.a`
  text-decoration: none;
  color: #000;
`;
// 휴대폰 인증하기 속성
const Phone = styled.span`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #000;
  color: #000;
  font-weight: 600;
  font-size: 15px;
`;
// 입력구간 기본 속성
const Inputwrap = styled.div`
  margin: 0;
  padding: 0;
`;
// 각 문단의 위 아래 선 및 크기 정렬
const Joininfo = styled.div`
  border-top: 1px solid #000000;
  padding: 20px 0;
  border-bottom: 1px solid #dedede;
`;
// 각 문단 기본 속성
const Jointr = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin: 10px 0;
`;
// 각 문단의 입력해야되는 구간 옆 제목
const Jointh = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  width: 130px;
`;
// 입력 구간 서로 띄워놓기
const Jointd = styled.div`
  width: calc(100%-130px);
`;
// 라벨
const Labelpl = styled.div``;
// 입력창 기본속성
const Input = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid #dedede;
  border-radius: 0;
  font-size: 15px;
  letter-spacing: -0.5px;
  color: #000;
  padding: 0 14px;
  line-height: 45px;
  box-sizing: border-box;
`;
// 이메일쪽 에러 속성
const Moderror = styled.div`
  color: #c8002f;
  font-size: 13px;
  margin: 10px 0;
  padding: 0 0 0 0;
  letter-spacing: -0.5px;
`;
// 개인정보 속성
const Personal = styled.div`
  padding-bottom: 10px;
`;

export function Register() {
  // 아이디에 useState를 사용해서 오류를 표시해줌
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    const { value } = event.target;
    setUsername(value);

    if (!isValidUsername(value)) {
      setError("아이디는 영문 소문자 또는 숫자 4~16자로 입력해 주세요.");
    } else {
      setError("");
    }
  };

  const isValidUsername = (value) => {
    const regex = /^[a-z0-9]{4,16}$/;
    return regex.test(value);
  };
  // 비밀번호도 똑같이 오류 표시
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmpassword(event.target.value);
  };

  const passwordsMatch = password === confirmPassword;
  const passwordErrorText = passwordsMatch
    ? ""
    : "비밀번호가 일치하지 않습니다";

  // 이메일쪽 오류 표시
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(value)) {
      setEmailError("유효한 이메일을 입력해 주세요.");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    validateEmail(value);
  };
  return (
    <>
      <Contents>
        <Joinbody>
          <Joinbodytitle>회원가입</Joinbodytitle>
          <Joinform>
            <Jointit>본인인증하기</Jointit>
            <MobileWrap>
              <MobilePopup>
                <Phone>휴대폰 인증하기</Phone>
              </MobilePopup>
            </MobileWrap>
            <Inputwrap>
              <Jointit>필수정보입력</Jointit>
              <Joininfo>
                <Jointr>
                  <Jointh style={{ padding: "0 0 10px" }}>아이디</Jointh>
                  <Jointd>
                    <Labelpl>
                      <Input
                        style={{ width: "200px", marginTop: "-4px" }}
                        placeholder="아이디"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                      {error && (
                        <div style={{ color: "red", fontSize: "13px" }}>
                          {error}
                        </div>
                      )}
                    </Labelpl>
                  </Jointd>
                </Jointr>
                <Jointr>
                  <Jointh>비밀번호</Jointh>
                  <Jointd>
                    <Labelpl>
                      <Input
                        style={{ marginBottom: "10px" }}
                        placeholder="비밀번호"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </Labelpl>
                    <Labelpl>
                      <Input
                        placeholder="비밀번호 확인"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      {!passwordsMatch && (
                        <span style={{ color: "red" }}>
                          {passwordErrorText}
                        </span>
                      )}
                    </Labelpl>
                  </Jointd>
                </Jointr>
                <Jointr>
                  <Jointh>이메일</Jointh>
                  <Jointd>
                    <Labelpl>
                      <Input
                        placeholder="이메일"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      {emailError && <Moderror>{emailError}</Moderror>}
                    </Labelpl>
                  </Jointd>
                </Jointr>
              </Joininfo>
            </Inputwrap>
            <Personal>
              <Jointit>개인정보확인</Jointit>
              <Joininfo
                style={{
                  borderTop: "1px solid #000000",
                  padding: "20px 0",
                  borderBottom: "1px solid #DEDEDE",
                }}
              >
                <Jointr>
                  <Jointh>이름</Jointh>
                  <Jointd></Jointd>
                </Jointr>
              </Joininfo>
            </Personal>
          </Joinform>
        </Joinbody>
      </Contents>
    </>
  );
}
