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
  margin: 0;
  white-space: nowrap;
  position: absolute;
  top: 40px;
  left: 30px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px;
  width: 90%;
  overflow-x: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ProjectCard = styled.div`
  background-color: #3e2e2a;
  border-radius: 16px;
  width: 600px;
  height: 600px;
  padding: 0; /* Remove padding to allow image to fill */
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  text-align: center;

  .image-container {
    width: 100%; /* Full width of the card */
    height: 50%; /* Adjust height to fill the top portion */
    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;

    img {
      width: 100%; /* Fill width */
      height: 100%; /* Fill height */
      object-fit: cover; /* Ensures the image covers the container */
    }
  }

  .content {
    padding: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 23px;
  margin: 15px 0;
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  color: #cfcfcf;
  margin-top: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%; /* Ensures it takes up the full width of the parent */
  margin-top: 60px;

  a {
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    background-color: #2f1f1b;
    padding: 15px 30px;
    border-radius: 8px;
    transition: all 0.3s;
    border: solid 1px #f5f5f5;

    &:hover {
      background-color: #7b5b4f;
    }
  }
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;

  &:hover {
    color: #cfcfcf;
  }
`;

export const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;

export const RightArrow = styled(ArrowButton)`
  right: 10px;
`;
