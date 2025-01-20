import React from "react";
import {
  GlobalStyle,
  Section,
  Title,
  ProjectContainer,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  ButtonContainer,
  LeftArrow,
  RightArrow,
} from "../../styles/Projects/Projects.style";
import council from "../../assets/images/council.png";
import myintro from "../../assets/images/myintro.png";
import alba from "../../assets/images/alba.png";

const Projects = () => {
  const scrollContainer = React.useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Section>
        <Title>Projects</Title>
        <LeftArrow onClick={scrollLeft}>{"<"}</LeftArrow>
        <ProjectContainer ref={scrollContainer}>
          <ProjectCard>
            <div className="image-container">
              <img src={council} alt="Project 1" />
            </div>
            <div className="content">
              <ProjectTitle>학생회 및 학부생 웹 서비스</ProjectTitle>
              <ProjectDescription>
                이 프로젝트는 학생회 / 학부생들이 이용할 수 있는 웹서비스 2개를
                구현하여 관리자 모드 및 사용자 모드를 구분하여 저희 학부생들과
                학생회의 원활한 소통을 위해 개발하였습니다.
              </ProjectDescription>
              <ButtonContainer>
                <a href="#">사이트 바로가기</a>
                <a href="#">자세히 보기</a>
              </ButtonContainer>
            </div>
          </ProjectCard>
          <ProjectCard>
            <div className="image-container">
              <img src={alba} alt="Project 1" />
            </div>
            <div className="content">
              <ProjectTitle>아르바이트생들을 위한 웹서비스</ProjectTitle>
              <ProjectDescription>
                아르바이트생들의 후기들을 작성하여 서로 소통하며 아르바이트를
                지원하게 될 때 정보를 가지고 지원을 할 수 있게 하기 위해
                개발하였습니다.
              </ProjectDescription>
              <ButtonContainer>
                <a href="#">사이트 바로가기</a>
                <a href="#">자세히 보기</a>
              </ButtonContainer>
            </div>
          </ProjectCard>
          <ProjectCard>
            <div className="image-container">
              <img src={myintro} alt="Project 1" />
            </div>
            <div className="content">
              <ProjectTitle>자기소개 및 방명록 작성 개인프로젝트</ProjectTitle>
              <ProjectDescription>
                저에 대한 여러 정보들을 본 후 방명록을 작성하여 많은 새로운
                사람들과 소통할 수 있는 웹을
                개발하였습니다.하하하하하하하하하하ㅏ하하하하ㅏ
              </ProjectDescription>
              <ButtonContainer>
                <a href="#">사이트 바로가기</a>
                <a href="#">자세히 보기</a>
              </ButtonContainer>
            </div>
          </ProjectCard>
        </ProjectContainer>
        <RightArrow onClick={scrollRight}>{">"}</RightArrow>
      </Section>
    </>
  );
};

export default Projects;
