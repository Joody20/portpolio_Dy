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
  transition: box-shadow 0.12s ease-out;
  cursor: pointer;
  &:hover {
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
  padding: 0 20px 20px;
  border-radius: 10px;
  width: 80%;
  max-height: 90vh; /* 최대 높이 설정 */
  overflow-y: auto; /* 스크롤 가능하도록 설정 */
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  position: relative; /* 닫기 버튼 위치 조정 */

  h2 {
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

export const ModalHeader = styled.div`
  margin: 0 -20px 18px;
  padding: 28px 80px 24px 28px;
  background: ${(props) => props.$color || "#f1f3f5"};
  border-radius: 10px 10px 24px 24px;
  text-align: left;

  h2 {
    margin: 0;
    color: ${(props) => (props.$lightText ? "#ffffff" : "#121212")};
  }

  p {
    margin: 10px 0 0;
    padding: 0;
    color: ${(props) =>
      props.$lightText ? "rgba(255, 255, 255, 0.86)" : "rgba(18, 18, 18, 0.8)"};
    line-height: 1.65;
  }
`;

// 기능 섹션 스타일
export const FeaturesSection = styled.div`
  padding: ${(props) => (props.$unstyled ? "0" : "1rem")};
  text-align: left;
  padding-top: ${(props) => (props.$unstyled ? "0" : "30px")};
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

export const TechStackSection = styled.div`
  margin-top: 14px;
  text-align: left;
`;

export const TechStackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TechStackChip = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: ${({ $lightText }) =>
    $lightText ? "rgba(255, 255, 255, 0.18)" : "rgba(18, 18, 18, 0.08)"};
  border: 1px solid
    ${({ $lightText }) =>
      $lightText ? "rgba(255, 255, 255, 0.26)" : "rgba(18, 18, 18, 0.14)"};
  color: ${({ $lightText }) => ($lightText ? "#ffffff" : "#121212")};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
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
  margin-top: 24px;
  padding: 0.5rem 0.75rem;
  text-align: left;
  border-top: 2px solid #ddd;
  padding-top: 24px;
`;

export const FeatureGroupGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 14px;
  margin-top: 14px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
  scroll-snap-type: x proximity;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(27, 28, 29, 0.25);
    border-radius: 999px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 999px;
  }
`;

export const FeatureGroupCard = styled.div`
  flex: 0 0 280px;
  padding: 18px 16px;
  border-radius: 18px;
  background: #f8f8f8;
  border: 1px solid #ececec;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  scroll-snap-align: start;
`;

export const FeatureGroupTitle = styled.h3`
  font-size: 23px;
  font-weight: 700;
  color: #1b1c1d;
  margin: 0 0 8px;
  line-height: 1.35;
`;

export const ImprovementSection = styled.div`
  margin-top: 30px;
  padding: 32px 28px;
  text-align: left;
  border-top: 2px solid #ddd;
`;

export const ImprovementGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  margin-top: 22px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(27, 28, 29, 0.25);
    border-radius: 999px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 999px;
  }
`;

export const ImprovementCard = styled.button`
  flex: 0 0 280px;
  aspect-ratio: 1 / 1;
  text-align: left;
  padding: 22px;
  border-radius: 26px;
  background: #2b2b2e;
  border: 1px solid #2b2b2e;
  box-shadow: 0 18px 30px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 24px 34px rgba(0, 0, 0, 0.18);
    background: #232326;
  }
`;

export const ImprovementCardNumber = styled.div`
  font-size: 64px;
  font-weight: 800;
  line-height: 1;
  color: #fff;
`;

export const ImprovementCardTitle = styled.h3`
  margin: 84px 0 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.22;
  color: #fff;
  letter-spacing: -0.03em;
`;

export const ImprovementSummary = styled.p`
  font-size: 14px;
  color: inherit;
  line-height: 1.75;
  margin: 0;
  padding: 0;
  text-align: left;
  opacity: 0.88;
`;

export const ImprovementLead = styled.div`
  padding: 20px 22px;
  border-radius: 22px;
  background: linear-gradient(180deg, #f8f8f8 0%, #f1f1f1 100%);
  border: 1px solid #e9e9e9;
  color: #2f2f2f;
  font-size: 17px;
  line-height: 1.9;
  text-align: left;
`;

export const ImprovementKeywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

export const ImprovementKeyword = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
`;

export const ImprovementAction = styled.div`
  margin-top: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  padding: 12px 14px;
  border-radius: 18px;
  background: #1b1c1d;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.01em;
  box-shadow: 0 16px 28px rgba(27, 28, 29, 0.22);
`;

export const ImprovementVisualFrame = styled.div`
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background: #f7f7f7;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const ImprovementOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.42);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 1150;
`;

export const ImprovementModal = styled.div`
  position: relative;
  width: min(1160px, 96vw);
  max-height: 88vh;
  overflow-y: auto;
  padding-bottom: 32px;
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18);
`;

export const ImprovementModalClose = styled.button`
  position: absolute;
  top: 26px;
  right: 26px;
  border: none;
  background: transparent;
  color: #1b1c1d;
  font-size: 32px;
  line-height: 1;
  cursor: pointer;
`;

export const ImprovementCompareSection = styled.div`
  padding: 28px 40px 12px;
`;

export const ImprovementViewTabs = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  padding: 8px;
  border-radius: 999px;
  background: #efeff3;
`;

export const ImprovementViewTab = styled.button`
  border: none;
  background: ${({ $active }) => ($active ? "#fff" : "transparent")};
  color: #111;
  padding: 12px 20px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: ${({ $active }) =>
    $active ? "0 6px 16px rgba(0, 0, 0, 0.08)" : "none"};
`;

export const ImprovementCompareGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ $single }) =>
    $single ? "minmax(0, 520px)" : "repeat(auto-fit, minmax(320px, 320px))"};
  gap: 18px;
  margin-top: 18px;
  justify-content: center;
  width: fit-content;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const ImprovementCompareCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImprovementCompareBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  padding: 8px 14px;
  border-radius: 999px;
  background: #f3f4f6;
  color: #111;
  font-size: 13px;
  font-weight: 700;
`;

export const ImprovementMajorSection = styled.div`
  padding: ${({ $variant }) =>
    $variant === "project8" ? "44px 40px 40px" : "20px 40px 40px"};
  background: transparent;
`;

export const ImprovementCategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 18px;
  margin-bottom: 18px;
`;

export const ImprovementCategoryIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: #eaf0ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
  font-size: 28px;
  flex-shrink: 0;
`;

export const ImprovementCategoryTitle = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: #111;
`;

export const ImprovementCategoryCount = styled.div`
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid #d8dce4;
  background: #fff;
  color: #222;
  font-size: 14px;
  font-weight: 700;
`;

export const ImprovementTimeline = styled.div`
  position: relative;
  margin-top: 22px;
  padding-left: ${({ $variant }) => ($variant === "project8" ? "0" : "26px")};
  display: ${({ $variant }) => ($variant === "project8" ? "grid" : "block")};
  grid-template-columns: ${({ $variant, $columns = 0 }) =>
    $variant === "project8"
      ? $columns >= 5
        ? "repeat(3, minmax(0, 1fr))"
        : "repeat(auto-fit, minmax(240px, 1fr))"
      : "none"};
  gap: ${({ $variant }) => ($variant === "project8" ? "18px" : "0")};

  &::before {
    content: ${({ $variant }) => ($variant === "project8" ? "none" : '""')};
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    border-radius: 999px;
    background: #e5e7ee;
  }

  @media (max-width: 768px) {
    grid-template-columns: ${({ $variant }) =>
      $variant === "project8" ? "1fr" : "none"};
  }
`;

export const ImprovementStoryCard = styled.div`
  margin-bottom: ${({ $variant }) => ($variant === "project8" ? "0" : "18px")};
  padding: ${({ $variant }) =>
    $variant === "project8" ? "34px 34px 30px" : "24px 24px 22px"};
  border-radius: ${({ $variant }) => ($variant === "project8" ? "28px" : "24px")};
  background: ${({ $variant }) => ($variant === "project8" ? "#2f3130" : "#fff")};
  border: ${({ $variant }) =>
    $variant === "project8" ? "none" : "1px solid #dfe3eb"};
  box-shadow: ${({ $variant }) =>
    $variant === "project8"
      ? "0 16px 34px rgba(0, 0, 0, 0.14)"
      : "0 10px 22px rgba(0, 0, 0, 0.04)"};
`;

export const ImprovementStoryHeader = styled.div`
  display: flex;
  align-items: ${({ $variant }) => ($variant === "project8" ? "flex-start" : "center")};
  gap: 14px;
  margin-bottom: 14px;
  flex-direction: ${({ $variant }) => ($variant === "project8" ? "column" : "row")};
`;

export const ImprovementStoryCheck = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 3px solid
    ${({ $variant }) => ($variant === "result" ? "#3b82f6" : "#10c45a")};
  color: ${({ $variant }) => ($variant === "result" ? "#3b82f6" : "#10c45a")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 800;
  flex-shrink: 0;
  display: ${({ $variant }) => ($variant === "project8" ? "none" : "flex")};
`;

export const ImprovementStoryBody = styled.div`
  padding-left: ${({ $variant }) => ($variant === "project8" ? "0" : "50px")};
`;

export const ImprovementDetailCard = styled.div`
  padding: 22px 20px;
  border-radius: 22px;
  background: #fafafa;
  border: 1px solid #ececec;
  text-align: left;
`;

export const ImprovementDetailTitle = styled.h4`
  margin: 0 0 12px;
  color: ${({ $variant }) => ($variant === "project8" ? "#ffffff" : "#1b1c1d")};
  font-size: ${({ $variant }) => ($variant === "project8" ? "18px" : "19px")};
  font-weight: 700;
  line-height: 1.45;
`;

export const ImprovementDetailList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ImprovementDetailItem = styled.li`
  position: relative;
  padding-left: ${({ $variant }) => ($variant === "project8" ? "0" : "16px")};
  margin-bottom: 10px;
  color: ${({ $variant }) => ($variant === "project8" ? "#f1f3f2" : "#4d4d4d")};
  line-height: 1.75;

  &::before {
    content: ${({ $variant }) => ($variant === "project8" ? "none" : '""')};
    position: absolute;
    top: 11px;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ $variant }) =>
      $variant === "project8" ? "#2ccfc0" : "#1b1c1d"};
  }
`;

export const ImprovementGoalBlock = styled.div`
  max-width: 780px;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const ImprovementGoalLabel = styled.div`
  margin-bottom: 18px;
  color: #2ccfc0;
  font-size: 18px;
  font-weight: 800;
  line-height: 1;
`;

export const ImprovementGoalText = styled.p`
  margin: 0;
  color: #1c1f1e;
  font-size: 31px;
  font-weight: 700;
  line-height: 1.7;
  letter-spacing: -0.03em;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 1.6;
  }
`;

export const ImprovementSolutionLabel = styled.div`
  color: #2ccfc0;
  font-size: 14px;
  font-weight: 800;
  line-height: 1;
`;

export const ImprovementResultBox = styled.div`
  position: relative;
  margin: 56px auto 0;
  width: min(100%, 980px);
  padding: 0 92px;
  background: transparent;
  color: #1c1f1e;
  font-size: 28px;
  line-height: 1.65;
  font-weight: 500;
  text-align: center;
  letter-spacing: -0.03em;

  &::before,
  &::after {
    position: absolute;
    top: -8px;
    color: #111;
    font-size: 108px;
    font-weight: 800;
    line-height: 1;
  }

  &::before {
    content: "“";
    left: 0;
  }

  &::after {
    content: "”";
    right: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 42px;
    font-size: 20px;

    &::before,
    &::after {
      top: -2px;
      font-size: 64px;
    }
  }
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
    width: ${({ $imageWidth = "92%" }) => $imageWidth};
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
