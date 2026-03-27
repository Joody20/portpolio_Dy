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
  background-color: #f7f7f7;
  position: relative;
  overflow: hidden;
  width: 100%;
  /*#fff9f0 */
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
  color: #121212;
  margin: 0;
  @media ${(props) => props.theme.tabletMedium} {
    font-size: 64px;
  }
  z-index: 1;
`;

export const ColoredSpan = styled.span`
  .char-1 {
    color: #0487d9; /* 첫 번째 글자 (주) */
    font-weight: bold;
  }
  .char-2 {
    color: #f28705; /* 두 번째 글자 (다) */
    font-weight: bold;
  }
  .char-3 {
    color: #f21628; /* 세 번째 글자 (영) */
    font-weight: bold;
  }
`;

export const Title = styled(motion.h2)`
  font-weight: 700;
  font-size: 220px;
  color: #f7f7f7;
  margin: 0;
  line-height: 1;
  position: absolute;
  top: 10px;
  z-index: 0;
  white-space: nowrap;
  -webkit-text-stroke: 1px #121212;
  letter-spacing: -5px;

  span.o {
    /*color: #0487d9; /* O - 파랑 */
    -webkit-text-stroke: 2px #0487d9;
  }
  span.n {
    -webkit-text-stroke: 2px #f21628; /* N - 빨강 */
  }
  span.w {
    -webkit-text-stroke: 2px #f28705; /* W - 주황 */
  }

  @media ${(props) => props.theme.tabletMedium} {
    font-size: 350px;
    top: -280px;
  }
`;
export const NextSection = styled.section`
  background-color: #f7f7f7;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 0 20px 34px;

  .next-nav {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    padding-top: 20px;
  }

  .next-nav button {
    min-width: 140px;
    padding: 14px 24px;
    border-radius: 999px;
    border: 1.5px solid #1b1c1d;
    background: #fff;
    color: #1b1c1d;
    font-size: clamp(16px, 1.4vw, 20px);
    font-weight: 500;
    letter-spacing: -0.03em;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      background 0.2s ease,
      color 0.2s ease;
  }

  .next-nav button:hover {
    transform: translateY(-2px);
    background: #1b1c1d;
    color: #fff;
  }

  @media (max-width: 1440px) {
    padding: 0 18px 30px;

    .next-nav {
      gap: 14px;
      margin-bottom: 14px;
    }
  }

  @media (max-width: 1100px) {
    padding: 0 14px 26px;

    .next-nav {
      gap: 12px;
      margin-bottom: 12px;
      padding-top: 14px;
    }

    .next-nav button {
      min-width: 126px;
      padding: 12px 18px;
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    padding: 18px 16px 84px;

    .next-nav {
      gap: 10px;
      margin-bottom: 12px;
      padding-top: 10px;
    }

    .next-nav button {
      min-width: 108px;
      padding: 10px 14px;
      font-size: 14px;
    }
  }

  @media (max-width: 900px) {
    padding: 24px 24px 88px;

    .next-nav {
      justify-content: center;
      margin-bottom: 8px;
    }

    .next-nav button {
      min-width: 120px;
      padding: 12px 18px;
    }
  }
`;

export const NextSectionInner = styled.div`
  width: 100%;
  max-width: 1420px;
  margin: 0 auto;
  min-height: calc(100vh - 126px);
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(340px, 410px);
  align-items: end;
  column-gap: clamp(24px, 4vw, 56px);
  padding-left: 0;
  padding-right: 0;

  @media (max-width: 1440px) {
    max-width: 1280px;
    grid-template-columns: minmax(0, 1.05fr) minmax(320px, 370px);
    column-gap: 34px;
    min-height: calc(100vh - 118px);
  }

  @media (max-width: 1200px) {
    max-width: 1100px;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 330px);
    column-gap: 24px;
    padding-left: 0;
    min-height: calc(100vh - 108px);
  }

  @media (max-width: 1024px) {
    max-width: 980px;
    grid-template-columns: minmax(0, 1fr) minmax(260px, 300px);
    column-gap: 18px;
  }

  @media (max-width: 900px) {
    min-height: auto;
    grid-template-columns: 1fr;
    row-gap: 28px;
    justify-items: center;
    padding-top: 12px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (max-width: 640px) {
    row-gap: 22px;
    padding-top: 18px;
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export const SideLinks = styled.div`
  position: absolute;
  left: clamp(20px, 2.6vw, 36px);
  top: 43%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 42px;
  z-index: 10;

  @media (max-width: 900px) {
    left: 14px;
    top: 39%;
    gap: 28px;
  }

  @media (max-width: 768px) {
    position: relative;
    left: 0;
    top: 0;
    transform: none;
    flex-direction: row;
    justify-content: center;
    gap: 14px;
    width: 100%;
    margin: 0 0 6px;
  }

  @media (max-width: 640px) {
    justify-content: flex-start;
    padding-left: 4px;
  }
`;

export const HeroLeft = styled.div`
  min-width: 0;
  align-self: end;
  justify-self: start;
  position: relative;
  top: -54px;
  left: -18px;

  @media (max-width: 1440px) {
    top: -40px;
    left: -10px;
  }

  @media (max-width: 1200px) {
    top: -22px;
    left: -2px;
  }

  @media (max-width: 1024px) {
    top: -10px;
    left: 0;
  }

  @media (max-width: 900px) {
    top: 0;
    left: 0;
    width: 100%;
  }
`;

export const HeroRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: start;
  gap: 28px;
  width: 100%;
  max-width: 430px;

  @media (max-width: 1440px) {
    max-width: 370px;
    gap: 22px;
  }

  @media (max-width: 1200px) {
    max-width: 330px;
    gap: 18px;
  }

  @media (max-width: 900px) {
    align-items: center;
    justify-self: center;
    max-width: min(100%, 420px);
    order: 1;
  }

  @media (max-width: 768px) {
    max-width: min(100%, 360px);
    gap: 14px;
  }
`;

export const IntroText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-align: center;

  @media (max-width: 1200px) {
    gap: 14px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
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
  position: relative;
  font-size: 22px;
  font-weight: 700;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  display: inline-flex;
  align-items: center;
  color: #121212;
  text-decoration: none;
  letter-spacing: -0.06em;
  transition: opacity 0.2s ease;
  padding-left: 3px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 52px;
    background: #121212;
  }

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 900px) {
    font-size: 16px;

    &::after {
      width: 3px;
      height: 36px;
    }
  }

  @media (max-width: 768px) {
    writing-mode: initial;
    transform: none;
    font-size: 14px;
    font-weight: 600;
    padding-left: 0;
    padding-bottom: 6px;

    &::after {
      top: auto;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
    }
  }
`;

export const MailLink = styled.a`
  position: relative;
  font-size: 22px;
  font-weight: 700;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  display: inline-flex;
  align-items: center;
  color: #121212;
  text-decoration: none;
  letter-spacing: -0.06em;
  transition: opacity 0.2s ease;
  padding-left: 3px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 52px;
    background: #121212;
  }

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 900px) {
    font-size: 16px;

    &::after {
      width: 3px;
      height: 36px;
    }
  }

  @media (max-width: 768px) {
    writing-mode: initial;
    transform: none;
    font-size: 14px;
    font-weight: 600;
    padding-left: 0;
    padding-bottom: 6px;

    &::after {
      top: auto;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
    }
  }
`;

export const SectionTitle = styled.h1`
  font-size: clamp(5.8rem, 13.8vw, 12.8rem);
  font-weight: 400;
  color: #121212;
  margin: 0;
  line-height: 0.84;
  letter-spacing: -0.08em;
  white-space: pre-line;

  @media (max-width: 1440px) {
    font-size: clamp(5rem, 12vw, 10.2rem);
  }

  @media (max-width: 1200px) {
    font-size: clamp(4.1rem, 10vw, 8.2rem);
    line-height: 0.88;
  }

  @media (max-width: 1024px) {
    font-size: clamp(3.8rem, 9.2vw, 7rem);
  }

  @media (max-width: 900px) {
    font-size: clamp(4.2rem, 17vw, 7rem);
    line-height: 0.92;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: clamp(3.2rem, 16vw, 5.4rem);
    line-height: 0.94;
    letter-spacing: -0.07em;
  }

  @media (max-width: 480px) {
    font-size: clamp(2.8rem, 15vw, 4.6rem);
  }
`;

export const Subtitle = styled.h1`
  font-size: clamp(22px, 1.9vw, 28px);
  font-weight: 600;
  color: #121212;
  margin: 0;
  line-height: 1.55;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    display: block;
    width: 100%;
  }

  span:nth-child(odd) {
    text-align: left;
  }

  span:nth-child(even) {
    text-align: right;
  }

  @media (max-width: 1440px) {
    font-size: clamp(20px, 1.8vw, 24px);
  }

  @media (max-width: 1200px) {
    font-size: 19px;
    line-height: 1.45;
  }

  @media (max-width: 900px) {
    font-size: 24px;

    span {
      text-align: left !important;
    }
  }

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 1.45;
    gap: 2px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: stretch;
  width: min(100%, 320px);
  margin: 0 auto;

  @media (max-width: 1440px) {
    width: min(100%, 290px);
  }

  @media (max-width: 1200px) {
    width: min(100%, 260px);
    gap: 4px;
  }

  @media (max-width: 900px) {
    width: min(100%, 320px);
  }

  @media (max-width: 768px) {
    width: min(100%, 280px);
  }

  @media (max-width: 480px) {
    width: min(100%, 240px);
  }
`;

export const DescriptionLine = styled(motion.p)`
  font-size: 19px;
  font-weight: ${(props) => (props.$strong ? 700 : 400)};
  color: #121212;
  margin: 0;
  line-height: 1.45;
  text-align: ${(props) => props.$align || "left"};
  padding: 0;
  width: fit-content;
  max-width: 100%;
  align-self: ${(props) =>
    props.$align === "right" ? "flex-end" : "flex-start"};

  @media (max-width: 1440px) {
    font-size: 17px;
  }

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 900px) {
    text-align: left;
    align-self: flex-start;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Photo = styled(motion.img)`
  width: min(100%, 410px);
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 0;
  display: block;
  margin-left: 0;
  position: relative;
  top: -72px;

  @media (max-width: 1440px) {
    width: min(100%, 340px);
    top: -48px;
  }

  @media (max-width: 1200px) {
    width: min(100%, 300px);
    top: -18px;
  }

  @media (max-width: 1024px) {
    width: min(100%, 260px);
    top: 0;
  }

  @media (max-width: 900px) {
    width: min(72vw, 280px);
    align-self: center;
    top: 0;
  }

  @media (max-width: 768px) {
    width: min(68vw, 240px);
    top: 0;
    margin-top: 6px;
  }

  @media (max-width: 480px) {
    width: min(72vw, 210px);
    margin-top: 10px;
  }
`;

export const ScrollDownArrow = styled.div`
  position: absolute;
  bottom: 42px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  cursor: pointer;
  animation: bounce 2s infinite;
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 30px;
    height: auto;
  }

  &::after {
    content: "scroll down";
    font-size: 18px;
    color: #121212;
    letter-spacing: -0.04em;
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

  @media (max-width: 1200px) {
    bottom: 30px;

    &::after {
      font-size: 16px;
    }

    img {
      width: 24px;
    }
  }

  @media (max-width: 900px) {
    bottom: 32px;

    &::after {
      font-size: 14px;
    }

    img {
      width: 22px;
    }
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
  transition:
    transform 0.3s ease-in-out,
    background-color 0.3s ease-in-out;

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
    transition:
      opacity 0.3s ease-in-out,
      visibility 0.3s ease-in-out;
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
    transition:
      opacity 0.3s ease-in-out,
      visibility 0.3s ease-in-out;
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
    transition:
      opacity 0.3s ease-in-out,
      visibility 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
    visibility: visible; // Tooltip 표시
  }
`;
