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
  background-color: #f5f2ee;
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
  font-weight: bold;
  font-size: 140px;
  color: #fff;
  margin: 0;
  line-height: 1;
  position: absolute;
  top: -30px;
  z-index: 0;
  white-space: nowrap;
  -webkit-text-stroke: 2px #fff;
  @media ${(props) => props.theme.tabletMedium} {
    font-size: 220px;
    top: -140px;
  }
`;

export const NextSection = styled.section`
  height: 100vh;
  background-color: #f5f2ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  margin: 0;
  position: relative;
`;

export const GitHubLink = styled.a`
  position: absolute;
  top: 45px;
  left: 30px;
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
  top: 45px;
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
  font-size: 10rem;
  font-weight: 900;
  color: #fff;
  position: absolute;
  top: 20px;
  transform: translateY(-50%);
  z-index: 0;
  white-space: nowrap;
  letter-spacing: -2px;
`;

export const Subtitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  color: #2f1f1b;
  margin: 30px 0;
  z-index: 1;
  position: relative;
  top: 50px;
  text-align: center;
  span {
    font-weight: bold;
    color: #2f1f1b;
  }
`;

export const DescriptionWrapper = styled.div`
  position: relative;
  top: 60px;
`;

export const DescriptionLine = styled(motion.p)`
  font-size: 20px;
  color: #5a524e;
  margin: 0;
  line-height: 1.5;
  text-align: center;
  span {
    font-weight: bold;
    color: #2f1f1b;
  }
`;

export const Photo = styled(motion.img)`
  width: auto;
  max-height: 500px;
  border-radius: 10px;
  margin-top: 70px;
  position: relative;
  top: 50px;
`;

export const ScrollDownArrow = styled.div`
  position: absolute;
  bottom: 20px;
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
