import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fff9f0;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TitleName = styled(motion.h2)`
  font-weight: 400;
  font-size: 22px;
  color: #2f1f1b;
  margin: 0;
  span {
    font-weight: bold;
    color: #2f1f1b;
  }
  @media ${(props) => props.theme.tabletMedium} {
    font-size: 64px;
  }
  z-index: 1;
`;

export const Title = styled(motion.h2)`
  font-weight: 700;
  font-size: 220px;
  color: #fff9f0;
  margin: 0;
  line-height: 1;
  position: absolute;
  top: 10px;
  z-index: 0;
  white-space: nowrap;
  -webkit-text-stroke: 1px #121212;
  letter-spacing: -5px;
  @media ${(props) => props.theme.tabletMedium} {
    font-size: 350px;
    top: -280px;
  }
`;

export const NextSection = styled.section`
  background-image: url("https://i.pinimg.com/474x/85/11/48/851148a276ede2ab8927dab128d6e5e7.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const NextSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 8vh 2rem;
  gap: 2rem; // 요소 간 간격 (반응형 가능)

  @media (max-width: 768px) {
    padding: 5vh 1rem;
    gap: 1.5rem;
  }
`;

export const GitHubLink = styled.a`
  position: absolute;
  top: 70px;
  left: 100px;
  gap: 0.25rem;
  flex-direction: column;
  z-index: 20;
  font-size: 10px;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  color: #2f1f1b;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  letter-spacing: -1.5px;
  &:hover {
    color: #fff;
  }
  &::before {
    content: "GitHub 가기";
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background-color: #44332e;
    color: #fff;
    font-size: 0.7rem;
    font-weight: 400;
    padding: 0.5rem;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    letter-spacing: -0.5px;
  }
  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 4px;
    background-color: #2f1f1b;
    transition: all 0.3s ease-in-out;
  }
  &:hover::after {
    height: 100%;
  }
  @media ${(props) => props.theme.tabletMedium} {
    font-size: 1rem;
  }
`;

export const MailLink = styled.a`
  position: absolute;
  top: 70px;
  left: 180px;
  gap: 0.25rem;
  flex-direction: column;
  z-index: 20;
  font-size: 10px;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  color: #2f1f1b;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  letter-spacing: -1.5px;
  &:hover {
    color: #fff;
  }
  &::before {
    content: "메일 보내기";
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background-color: #44332e;
    color: #fff;
    font-size: 0.7rem;
    font-weight: 400;
    padding: 0.5rem;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    letter-spacing: -0.5px;
  }
  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 4px;
    background-color: #2f1f1b;
    transition: all 0.3s ease-in-out;
  }
  &:hover::after {
    height: 100%;
  }
  @media ${(props) => props.theme.tabletMedium} {
    font-size: 1rem;
  }
`;

export const SectionTitle = styled.h1`
  font-size: clamp(5rem, 12vw, 10rem); /* 화면 크기에 따라 자동 조절 */
  font-weight: 900;
  color: #fff9f0;
  position: absolute;
  margin: 0;
  top: 10%;
  left: 50%;
  transform: translateX(-50%); /* X축 기준으로만 중앙 정렬 */
  z-index: 0;
  white-space: nowrap;
  letter-spacing: -2px;
  -webkit-text-stroke: 1px #121212;
`;

export const Subtitle = styled.h1`
  font-size: clamp(2rem, 4vw, 48px); /* 반응형 크기 조절 */
  font-weight: 400;
  color: #2f1f1b;
  position: absolute;
  top: 19%; /* 겹치는 정도 조정 */
  left: 50%;
  transform: translateX(-50%); /* X축 기준으로만 중앙 정렬 */
  z-index: 1;

  span {
    font-weight: bold;
    color: #2f1f1b;
  }
`;

export const DescriptionWrapper = styled.div`
  margin-top: 300px; // 위에서 적당히 공간 확보
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;

export const DescriptionLine = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 20px); // 반응형 크기
  color: #5a524e;
  margin: 0.25rem 0;
  line-height: 1.3;
  text-align: center;
  padding: 0 1rem; // 좁은 화면에서 텍스트가 너무 붙지 않게

  span {
    font-weight: bold;
    color: #2f1f1b;
  }
`;

export const Photo = styled(motion.img)`
  width: auto;
  max-height: 500px;
  border-radius: 10px;
  position: relative;
  top: 50px;
`;

export const ScrollDownArrow = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  cursor: pointer;
  animation: bounce 2s infinite;

  img {
    width: 30px; /* Adjust the size as needed */
    height: auto;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }

  &:hover img {
    filter: brightness(1.2); /* Add a hover effect for the image */
  }
`;

// ScrollToTopButton 스타일 수정
export const ScrollToTopButton = styled.button`
  display: block;
  position: fixed;
  bottom: 30px; // ScrollToTopButton 위치
  right: 45px; // 두 버튼을 같은 열에 배치하려면 right 값 동일
  cursor: pointer;
  z-index: 10; // ScrollToTopButton의 z-index는 1로 설정
  width: 50px; // 원형 크기 설정
  height: 50px;
  background-color: #f0f0f0; // 배경색 설정
  border: none; // 명시적으로 border를 없앰
  border-radius: 50%; // 원형으로 만들기
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); // 그림자 효과 추가
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;

  img {
    width: 25px; // 이미지 크기 설정
    height: 25px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    filter: grayscale(50%) brightness(0.6); // 호버 시 이미지 효과
  }

  &:hover {
    background-color: #dedfe3; // 호버 시 배경 색상 변경
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }

  &::before {
    content: "맨 위로 가기";
    position: absolute;
    top: 50%;
    right: 60px;
    transform: translateY(-50%);
    background-color: #2f1f1b;
    color: #fff;
    font-size: 12px;
    padding: 6px 10px;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
`;

// CircleButton 스타일 수정
export const CircleButton = styled.div`
  display: block;
  position: fixed;
  bottom: 95px; // ScrollToTopButton 바로 위에 배치
  right: 20px; // 두 버튼을 같은 열에 배치하려면 right 값 동일
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background-color: #f0f0f0;
  border-radius: 50%; // 원형으로 만들기
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); // 그림자 효과 추가
  cursor: pointer;
  z-index: 10; // CircleButton이 ScrollToTopButton 위에 위치하도록 z-index 높임
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dedfe3; // 호버 시 배경 색상 변경
  }

  img {
    width: 25px;
    height: 25px;
  }

  /* Tooltip 스타일 */
  &::before {
    content: "피드백 주기"; // Tooltip text
    position: absolute;
    top: 50%;
    left: -85px; // 왼쪽으로 60px 위치
    transform: translateY(-50%);
    background-color: #2f1f1b; // Tooltip 배경 색상
    color: #fff; // Tooltip 텍스트 색상
    font-size: 12px;
    padding: 6px 10px;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
    visibility: visible; // Tooltip 표시
  }
`;
