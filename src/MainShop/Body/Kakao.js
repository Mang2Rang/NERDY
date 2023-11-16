import React from "react";
import styled from "styled-components";

const Chat = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  overflow: hidden;
  z-index: 999;
  img {
    width: 64px;
    height: 64px;
    border: none;
  }
`;
const Top = styled.div`
  position: fixed;
  width: 64px;
  height: 64px;
  right: 40px;
  bottom: 120px;
  background: #fff;
  border-radius: 32px;
  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 999;
  cursor: pointer;
  img {
    width: 64px;
    height: 64px;
    border: none;
  }
`;
export function Kakao() {
  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Top onClick={handleTopClick}>
        <a id="goto_top">
          <img src="https://whoisnerdy.com/web/upload/images/ico_go_top.png" />
        </a>
      </Top>
      <Chat>
        <a
          id="kakaoChatUrl"
          target="_blank"
          href="https://open.kakao.com/o/g6h1ioSf"
        >
          <img
            src="https://whoisnerdy.com/web/upload/images/ico_gokakao.png"
            alt="kakao Chat"
          />
        </a>
      </Chat>
    </>
  );
}
