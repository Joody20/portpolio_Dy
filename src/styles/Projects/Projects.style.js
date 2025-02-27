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
  width: 80%;
  max-height: 90vh; /* 최대 높이 설정 */
  overflow-y: auto; /* 스크롤 가능하도록 설정 */
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  position: relative; /* 닫기 버튼 위치 조정 */

  h2 {
    margin-top: 10px;
  }

  p {
    font-size: 16px;
    padding-left: 100px;
    padding-right: 100px;
    line-height: 25px;
  }
`;

// 기능 섹션 스타일
export const FeaturesSection = styled.div`
  margin-top: 30px;
  padding: 1rem;
  /* background: #f8f9fa; */
  /* border-radius: 10px; */
  text-align: left;
  border-top: 2px solid #ddd; // ✅ 위쪽에 선 추가
  padding-top: 30px; // ✅ 선과 내용 사이 간격 추가
`;

export const FeaturesTitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
  color: #222;
  margin-bottom: 1rem;
`;
export const FeaturessubTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #222;
  margin-bottom: 1rem;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 10px;
`;

export const FeatureItem = styled.li`
  font-size: 17px;
  color: #555;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
  padding-top: 10px;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #1b1c1d;
    font-weight: bold;
  }
`;

// 추가적인 정보 스타일 (ex: window)
export const WindowInfo = styled.div`
  padding: 1rem;
  text-align: left;

  .image-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3개의 동일한 열 */
    grid-auto-rows: auto;
    gap: 10px;
    margin-top: 15px;
  }

  img {
    width: 100%; /* 셀의 너비에 맞추기 */
    height: auto;
    border-radius: 10px;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); */
  }
`;
export const WindowTitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
  color: #222;
  margin-bottom: 1rem;
`;

export const WindowText = styled.p`
  font-size: 1rem;
  color: #444;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: transparent; /* 배경을 투명하게 */
  padding: 0; /* 기본 padding 없애기 */
  cursor: pointer;
  z-index: 1100; /* 모달 위에 위치하도록 z-index 지정 */

  img {
    width: 30px; /* 이미지 크기 조정 */
    height: 30px;
    transition: transform 0.3s ease-in-out; /* 애니메이션 효과 */

    &:hover {
      transform: rotate(90deg); /* hover 시 90도 회전 */
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;
  position: relative;
  margin-bottom: 10px; /* Spacing between image and content */
  display: flex; /* Enable Flexbox */
  justify-content: center; /* Center image horizontally */
  align-items: center; /* Center image vertically */

  img {
    width: auto; /* Maintain aspect ratio */
    height: 100%; /* Make the height fit the container */
    object-fit: contain; /* Ensures the image maintains its aspect ratio */
  }
`;
