import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import { useRef, useEffect } from "react";
=======
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084

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
<<<<<<< HEAD
  display: none;
=======
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
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
<<<<<<< HEAD

const topElement = document.querySelector(Top); // Top 요소를 JavaScript에서 사용할 수 있도록 선택

export function Kakao() {
  const topRef = useRef(null);

  useEffect(() => {
    const topElement = topRef.current;

    window.addEventListener("scroll", function () {
      var scrollPosition =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;

      console.log("현재 스크롤 위치: " + scrollPosition + " 픽셀");

      if (scrollPosition >= 380) {
        // 스크롤 위치가 380 이상이면 Top 요소를 보이게 함
        topElement.style.display = "block";
      } else {
        // 그 외의 경우에는 숨김
        topElement.style.display = "none";
      }
    });
    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리 (cleanup)
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

=======
export function Kakao() {
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
<<<<<<< HEAD
      <Top onClick={handleTopClick} id="Top_Icon" ref={topRef}>
        <a id="goto_top">
          <img
            src="https://whoisnerdy.com/web/upload/images/ico_go_top.png"
            alt="Top"
          />
=======
      <Top onClick={handleTopClick}>
        <a id="goto_top">
          <img src="https://whoisnerdy.com/web/upload/images/ico_go_top.png" />
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
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
