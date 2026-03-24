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
  background-color: #f7f7f7;
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
  background-color: #f7f7f7;
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
    font-size: 33px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
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

export const ResourceLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 18px;
`;

export const ResourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 999px;
  border: 1px solid #d8d8d8;
  background: #f5f5f5;
  color: #1b1c1d;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: #ededed;
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }
`;

export const ResourceLinkTag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 999px;
  background: #1b1c1d;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
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

export const JourneySection = styled.div`
  margin-top: 30px;
  padding: 1rem;
  text-align: left;
  border-top: 2px solid #ddd;
  padding-top: 30px;
`;

export const JourneyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
`;

export const JourneyCard = styled.div`
  padding: 24px 22px;
  border-radius: 22px;
  background: #f8f8f8;
  border: 1px solid #ececec;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.05);
`;

export const JourneyStep = styled.div`
  font-size: 13px;
  font-weight: 800;
  color: #7b7b7b;
  letter-spacing: 0.14em;
  margin-bottom: 12px;
`;

export const JourneyCardTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #1b1c1d;
  margin: 0 0 12px;
  line-height: 1.35;
`;

export const JourneySummary = styled.p`
  font-size: 16px;
  color: #4d4d4d;
  line-height: 1.7;
  margin: 0 0 14px;
  padding: 0;
  text-align: left;
`;

export const FeatureGroupSection = styled.div`
  margin-top: 30px;
  padding: 1rem;
  text-align: left;
  border-top: 2px solid #ddd;
  padding-top: 30px;
`;

export const FeatureGroupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
`;

export const FeatureGroupCard = styled.div`
  padding: 24px 22px;
  border-radius: 22px;
  background: #f8f8f8;
  border: 1px solid #ececec;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.05);
`;

export const FeatureGroupTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #1b1c1d;
  margin: 0 0 12px;
  line-height: 1.35;
`;

export const TroubleSection = styled.div`
  margin-top: 30px;
  padding: 1rem;
  text-align: left;
  border-top: 2px solid #ddd;
  padding-top: 30px;
`;

export const TroubleCard = styled.div`
  padding: 28px;
  border-radius: 26px;
  background: #fff;
  border: 1px solid #ececec;
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.06);
`;

export const TroubleLayout = styled.div`
  display: grid;
  grid-template-columns: ${({ $hasVisual }) =>
    $hasVisual ? "360px minmax(0, 1fr)" : "minmax(0, 1fr)"};
  gap: 28px;
  align-items: start;
`;

export const TroubleVisual = styled.div`
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #ededed;
  background: #f6f6f6;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const TroubleVisualGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const TroubleVisualItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TroubleVisualLabel = styled.div`
  font-size: 13px;
  font-weight: 800;
  color: #767676;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const TroubleBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const TroubleHeadline = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: #1b1c1d;
  margin: 0 0 18px;
  line-height: 1.35;
`;

export const TroubleMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`;

export const TroubleMetaItem = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #ececec;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const TroubleMetaLabel = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: #767676;
  letter-spacing: 0.08em;
  margin-bottom: 8px;
`;

export const TroubleText = styled.p`
  font-size: 16px;
  color: #4d4d4d;
  line-height: 1.8;
  margin: 0;
  padding: 0;
  text-align: left;
`;

// 추가적인 정보 스타일 (ex: window)
export const WindowInfo = styled.div`
  padding: 1rem;
  text-align: left;

  .image-gallery {
    display: grid;
    grid-template-columns: repeat(${({ $columns = 3 }) => $columns}, 1fr);
    grid-auto-rows: auto;
    gap: 10px;
    margin-top: 15px;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }

  .gallery-image-button {
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .gallery-image-button:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
  }

  img {
    width: 92%;
    height: auto;
    border-radius: 10px;
    margin: 0 auto;
    display: block;
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

export const ImageLightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
  padding: 40px;
`;

export const ImageLightboxContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(92vw, 1400px);
  height: min(88vh, 900px);

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 18px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  }
`;

export const LightboxNavButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ $direction }) =>
    $direction === "left" ? "left: 24px;" : "right: 24px;"}
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.14);
  color: #111;
  font-size: 40px;
  line-height: 1;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.22);
    transform: translateY(-50%) scale(1.04);
  }
`;

export const LightboxCloseButton = styled.button`
  position: absolute;
  top: -8px;
  right: 8px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  font-size: 32px;
  line-height: 1;
  cursor: pointer;
  backdrop-filter: blur(8px);
`;
