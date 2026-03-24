import styled, { createGlobalStyle, keyframes } from "styled-components";

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
  flex-direction: column; /* 세로 정렬을 위해 column으로 변경 */
  align-items: center;
  justify-content: flex-start; /* 상단 정렬 */
  background-color: #1b1c1d;
  position: relative;
  width: 100%;
  padding-top: 40px; /* 상단 여백 추가 */
`;

export const EduWrapper = styled.div`
  display: flex;
  flex-direction: row; /* 가로 정렬 */
  align-items: center; /* 세로 가운데 정렬 */
  gap: 40px; /* Title과 Rectangle 사이 간격 */
  width: 80%;
  margin-top: 100px; /* 추가 여백 */
  margin-left: 400px;
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 60px;
  color: #f5f5f5;
  margin: 0;
  white-space: nowrap; /* 제목이 여러 줄로 넘어가지 않도록 설정 */

  position: absolute; /* ContentWrapper를 기준으로 위치 */
  top: 80px; /* 위로 50px 이동 */
  left: 30px; /* ContentWrapper 왼쪽으로 정렬 */
`;

export const Rectangle = styled.div`
  background-color: #2a2a2b;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 550px; /* 최대 너비 제한 */
  width: 100%; /* 부모 요소에 맞게 확장 */
  height: 360px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    margin: 10px 0 10px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 2px;
    margin-top: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 25px;

    li {
      font-size: 16px;
      margin-bottom: 13px;
      color: #c2c2c2;
    }
    span {
      font-size: 12px;
    }
  }
`;

export const ImageTextContainer = styled.div`
  display: flex;
  align-items: center; /* Align image and text vertically */
  gap: 10px; /* Space between image and text */
`;

export const StyledImage = styled.img`
  width: 70px; /* Adjust the size of the image */
  height: auto; /* Maintain aspect ratio */
  border-radius: 50%; /* Optional: Add rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: Add shadow for styling */
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 120px;
  padding: 0 40px 40px;
`;

export const Title2 = styled.h2`
  font-weight: 900;
  font-size: 60px;
  color: #f5f5f5;
  margin: 0 0 36px 30px;
  white-space: nowrap; /* 제목이 여러 줄로 넘어가지 않도록 설정 */
`;

const marqueeScroll = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
`;

const marqueeScrollReverse = keyframes`
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
`;

export const SkillMarquee = styled.div`
  width: 100vw;
  overflow: hidden;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 18px 0;
  margin-bottom: 18px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    z-index: 2;
    width: 120px;
    height: 100%;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(90deg, #1b1c1d 0%, rgba(27, 28, 29, 0) 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, #1b1c1d 0%, rgba(27, 28, 29, 0) 100%);
  }
`;

export const SkillTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: max-content;
  animation: ${({ $reverse }) =>
      $reverse ? marqueeScrollReverse : marqueeScroll}
    28s linear infinite;
`;

export const SkillChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 18px;
  min-width: 220px;
  padding: 24px 34px;
  border-radius: 30px;
  background: linear-gradient(135deg, #2e3033 0%, #232527 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
`;

export const SkillIcon = styled.img`
  width: 62px;
  height: 62px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const SkillName = styled.span`
  color: #f5f5f5;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.02em;
  white-space: nowrap;
`;

export const Rectangle2 = styled.div`
  background-color: #2a2a2b;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  min-width: 350px; /* Increase this value */
  width: 100%; /* Maintains responsive behavior */
  height: 120px;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

export const Medium = styled.p`
  font-size: 27px;
  font-weight: bold;
  margin: 0;
`;

export const SkillIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* 여러 줄로 감싸기 */
  gap: 20px; /* 아이콘 간 간격 */
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  margin-top: 20px; /* 상단 여백 */
`;

export const Skillicon = styled.img`
  width: 50px;
  height: auto; /* 비율 유지 */
`;
