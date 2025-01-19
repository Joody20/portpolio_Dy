import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
`;
export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #2f1f1b;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 60px;
  color: #f5f5f5;
  position: absolute; /* 절대 위치 지정 */
  top: 30px; /* 상단 여백 */
  left: 30px; /* 좌측 여백 */
  margin: 0; /* 기본 여백 제거 */
`;

export const ProfileImage = styled.img`
  width: 350px; /* 이미지 크기 조정 */
  height: 350px; /* 이미지 크기 조정 */
  border-radius: 50%; /* 원형으로 만들기 */
  object-fit: cover; /* 이미지 비율 유지 */
  position: absolute; /* 독립적인 위치 지정 */
  top: 80px; /* 원하시는 위치로 설정 */
  transition: transform 0.3s ease; /* 부드러운 전환 효과 */

  &:hover {
    transform: scale(1.1);
  }
`;

export const Keywords = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  position: relative; /* 자연스러운 위치 지정 */
  top: 440px; /* 이미지를 위한 간격 설정 */
  span {
    margin-right: 8px; /* 각 키워드 사이 간격 */
  }
`;

export const InterViewWrapper = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 나열 */
  align-items: flex-start; /* 왼쪽 정렬 */
  width: 100%; /* 화면 크기에 맞게 조정 */
  max-width: 1000px; /* 최대 너비 설정 */
  margin-top: 500px;
  padding: 20px; /* 내부 여백 추가 */
  box-sizing: border-box; /* 패딩 포함 크기 계산 */
`;

export const InterViewTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px; /* 간격 조정 */
`;

export const Box = styled.div`
  width: 100%;
  background-color: #44332e;
  border-top-right-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* 세로 배치 */
  justify-content: flex-start;
  padding: 20px; /* 패딩 추가 */
  color: #2f1f1b;
  font-size: 20px;
  margin-bottom: 20px; /* 아래 요소와 간격 */
`;

export const InTitle = styled.p`
  color: #fff;
  position: relative;
  text-align: left; /* 왼쪽 정렬 */
  margin-top: 15px;
  font-size: 25px;
  font-weight: 600;
`;

export const InDescription = styled.p`
  color: #fff;
  position: relative;
  text-align: left;
  margin-top: 10px; /* Add more space from the title */
  font-size: 17px;
  font-weight: 400;
  line-height: 1.6;
  word-break: keep-all;
`;
