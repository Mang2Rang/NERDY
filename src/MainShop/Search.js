import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 1000px;
`;
const SearchBox = styled.div`
  display: flex;
  border-bottom: solid 2px black;
  align-items: center;
  justify-content: space-between;
  width: 432px;
  margin: 0 auto;
  padding: 14px 0;
  margin-bottom: 68px;
  input {
    font-size: 24px;
    font-weight: 500;
    border: none;
    outline: none;
    height: auto;
    padding: 0;
  }
  p {
    font-size: 14px;
    color: #000;
    font-weight: 500;
    margin-left: auto;
    margin-right: 22px;
  }
  a {
    /* position: absolute; */
    top: -3px;
    margin-left: 6px;
  }
`;
const TopSearch = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  margin: 0;
  padding: 0;
`;
const TopSearchText = styled.div`
  margin-bottom: 16px;
  position: absolute;
  top: 35%;
  left: 20%;
`;
const TopBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 20px;
  width: 100%;
  height: 36px;
  margin-right: 10px;
  gap: 6px;
`;
const TopNum = styled.a`
  display: flex;
  align-items: center;
  height: 34px;
  border-radius: 17px;
  border: solid 1px #0b0b0b;
  box-sizing: border-box;
  padding: 0 15px 0 14px;
  line-height: 1;
  font-size: 13px;
  a::before {
    counter-increment: section_sub;
    content: counter(section_sub);
    color: #792adf;
    margin-right: 6px;
    display: inline-block;
  }
`;
const TopText = styled.div`
  /* font-size: 14px; */
`;

export function Search() {
  // 검색창의 useState
  const [searchKeyword, setSearchKeyword] = useState("");
  // 버튼 클릭으로 버튼안에 있는 텍스트를 검색창으로 이동
  const handleLinkClick = (text) => {
    setSearchKeyword(text);
  };
  // 클릭했을때 이벤트를 발생해서 값을 전달
  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };
  // 검색창에 입력된 값 검색
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("검색어:", searchKeyword);
  };
  return (
    <>
      <Container>
        <SearchBox onSubmit={handleSearchSubmit}>
          <input
            id="keyword"
            name="keyword"
            value={searchKeyword}
            onChange={handleSearchInputChange}
            placeholder="검색어를 입력해주세요"
          />
          {/* <label htmlFor="keyword">검색어를 입력해주세요</label> */}
          <a>
            <img src="https://whoisnerdy.com/web/upload/images/icotb_zoom.png" />
          </a>
        </SearchBox>
        <TopSearch>
          <TopSearchText>
            <p>인기 검색어</p>
          </TopSearchText>
          <TopNum>
            <a
              href="#"
              onClick={() => handleLinkClick("the 8")}
              style={{ textDecoration: "none", color: "black" }}
            >
              {/* 버튼 클릭시 검색창에 검색어 이동 및 검색완료 */}
              THE 8
              {/* <button onClick={() => handleButtonClick("1")}>THE8</button> */}
            </a>
          </TopNum>
          <TopBox>
            <TopNum>
              <p>2</p>
            </TopNum>
            <TopText>
              <p>신상품</p>
            </TopText>
          </TopBox>
          <TopBox>
            <TopNum>
              <p>3</p>
            </TopNum>
            <TopText>
              <p>후드티</p>
            </TopText>
          </TopBox>
          <TopBox>
            <TopNum>
              <p>4</p>
            </TopNum>
            <TopText>
              <p>트랙</p>
            </TopText>
          </TopBox>
          <TopBox>
            <TopNum>
              <p>5</p>
            </TopNum>
            <TopText>
              <p>패딩</p>
            </TopText>
          </TopBox>
          <TopBox>
            <TopNum>
              <p>6</p>
            </TopNum>
            <TopText>
              <p>후리스</p>
            </TopText>
          </TopBox>
          <TopBox>
            <TopNum>
              <p>7</p>
            </TopNum>
            <TopText>
              <p>신발</p>
            </TopText>
          </TopBox>
          <TopBox>
            <TopNum>
              <p>8</p>
            </TopNum>
            <TopText>
              <p>바람막이</p>
            </TopText>
          </TopBox>
        </TopSearch>
      </Container>

      {/* <ul>
        <li th:each="product : ${searchResults}">
            <span th:text="${product.name}"></span> - <span th:text="${product.description}"></span>
        </li>
    </ul> */}
    </>
  );
}
