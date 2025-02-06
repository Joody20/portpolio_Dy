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
  background-color: #1b1c1d;
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
  width: 400px; /* 이미지 크기 조정 */
  height: 400px;
  border-radius: 50%; /* 원형으로 만들기 */
  object-fit: cover; /* 이미지 비율 유지 */
  position: absolute; /* 절대 위치 지정 */
  top: 280px; /* 원하는 위치 설정 */
  left: 140px; /* 왼쪽 정렬 */
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
  position: absolute; /* 절대 위치 지정 */
  top: 690px; /* 원하는 위치 설정 */
  left: 170px; /* 왼쪽 정렬 */
  span {
    margin-right: 8px; /* 각 키워드 사이 간격 */
  }
`;

export const InterViewWrapper = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 나열 */
  align-items: flex-end; /* 전체를 오른쪽 정렬 */
  width: 100%; /* 화면 크기에 맞게 조정 */
  padding: 20px; /* 내부 여백 추가 */
  box-sizing: border-box; /* 패딩 포함 크기 계산 */
`;

export const InterViewTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px; /* 간격 조정 */
  margin-right: 130px;
`;

export const Box = styled.div`
  width: 800px; /* 내용에 맞게 너비 조정 */
  max-width: 800px; /* 최대 너비 설정 */
  background-color: #2a2a2b;
  border-top-right-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* 세로 배치 */
  justify-content: flex-start;
  /* align-items: flex-end; Box 내부 요소도 오른쪽 정렬 */
  padding: 20px; /* 패딩 추가 */
  color: #2f1f1b;
  font-size: 20px;
  margin-bottom: 20px; /* 아래 요소와 간격 */
  align-self: flex-end; /* 부모 기준으로 오른쪽 정렬 */
  margin-right: 130px;
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
