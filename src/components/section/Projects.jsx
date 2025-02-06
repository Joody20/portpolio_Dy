import React, { useState } from "react";
import {
  GlobalStyle,
  Section,
  Title,
  ProjectContainer,
  ProjectCard,
  ProjectTitle,
  ProjectDate,
  ProjectDescription,
  ModalOverlay,
  ModalContent,
  CloseButton,
} from "../../styles/Projects/Projects.style";
import { project1 } from "../../data/ProjectsData/project1";
import { project2 } from "../../data/ProjectsData/project2";
import { project3 } from "../../data/ProjectsData/project3";
import { project4 } from "../../data/ProjectsData/project4";

const projects = [...project1, ...project2, ...project3, ...project4]; // 모든 프로젝트 데이터 합치기

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <GlobalStyle />
      <Section>
        <Title>Projects</Title>
        <ProjectContainer>
          {projects.map((project, index) => (
            <ProjectCard key={index} onClick={() => openModal(project)}>
              <div className="image-container">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="content">
                <ProjectTitle>{project.title}</ProjectTitle>
                {project.date && <ProjectDate>{project.date}</ProjectDate>}
                <ProjectDescription>{project.description}</ProjectDescription>
              </div>
            </ProjectCard>
          ))}
        </ProjectContainer>
      </Section>

      {selectedProject && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h2>{selectedProject.title}</h2>
            {selectedProject.date && <p>{selectedProject.date}</p>}
            <p>{selectedProject.description}</p>
            <p>{selectedProject.details}</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Projects;
