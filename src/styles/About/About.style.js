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
  justify-content: flex-start;
  text-align: center;
  background-color: #1b1c1d;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 120px 24px 56px;
`;

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  z-index: 1000;
`;
export const Title = styled.h2`
  font-weight: 900;
  font-size: 60px;
  color: #f5f5f5;
  position: absolute;
  top: 30px;
  left: 30px;
  margin: 0;
`;

export const AboutInner = styled.div`
  width: 100%;
  max-width: 1380px;
  display: grid;
  grid-template-columns: minmax(260px, 420px) minmax(0, 1fr);
  gap: clamp(40px, 5vw, 92px);
  align-items: start;

  @media (max-width: 1180px) {
    grid-template-columns: minmax(220px, 340px) minmax(0, 1fr);
    gap: 36px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  position: sticky;
  top: 120px;

  @media (max-width: 900px) {
    position: static;
  }
`;

export const InterviewColumn = styled.div`
  min-width: 0;
`;

export const ProfileImage = styled.img`
  width: min(100%, 360px);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1180px) {
    width: min(100%, 300px);
  }

  @media (max-width: 900px) {
    width: min(100%, 260px);
  }
`;

export const Keywords = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  width: min(100%, 360px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px 14px;
  text-align: center;

  span {
    display: inline-flex;
    justify-content: center;
  }
`;

export const InterViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
`;

export const InterViewTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  margin: 0 0 20px;
  text-align: left;
`;

export const Box = styled.div`
  width: min(100%, 840px);
  background-color: #2a2a2b;
  border-top-right-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  color: #2f1f1b;
  font-size: 20px;
  margin-bottom: 20px;
  align-self: stretch;

  @media (max-width: 900px) {
    width: 100%;
    padding: 18px;
  }
`;

export const InTitle = styled.p`
  color: #fff;
  position: relative;
  text-align: left;
  margin-top: 15px;
  font-size: 25px;
  font-weight: 600;

  @media (max-width: 900px) {
    font-size: 22px;
  }
`;

export const InDescription = styled.p`
  color: #fff;
  position: relative;
  text-align: left;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.6;
  word-break: keep-all;

  span {
    font-weight: bold;
  }

  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 1.7;
  }
`;
