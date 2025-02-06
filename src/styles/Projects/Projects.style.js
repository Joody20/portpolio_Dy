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
  background-color: #fff9f0;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 60px;
  color: #121212;
  margin: 0;
  white-space: nowrap;
  position: absolute;
  top: 60px;
  left: 30px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px;
  width: 100%;
  max-width: 1300px;
  justify-content: center;
  margin-left: 170px;
  margin-top: 90px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ProjectCard = styled.div`
  background-color: #fff9f0;
  width: calc(25% - 20px);
  height: 400px;
  padding: 0;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  text-align: left;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
  }
  .image-container {
    width: 100%;
    height: 70%;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    padding: 15px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 18px;
  margin: 15px 0;
  color: #121212;
  text-align: left;
`;

export const ProjectDate = styled.p`
  font-size: 14px;
  color: #121212;
  margin-top: 15px;
  text-align: left;
`;

export const ProjectDescription = styled.p`
  font-size: 15px;
  color: #121212;
  margin-top: 10px;
  text-align: left;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 1000px;
  height: 800px;
  width: 90%;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
