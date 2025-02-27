import React, { useState } from "react";
import {
  GlobalStyle,
  Section,
  Title,
  ProjectContainer,
  ProjectCard,
  ProjectTitle,
  ProjectDate,
  ModalOverlay,
  ModalContent,
  CloseButton,
  FeaturesSection,
  FeaturesTitle,
  FeaturessubTitle,
  FeaturesList,
  FeatureItem,
  WindowInfo,
  WindowTitle,
  ImageContainer,
} from "../../styles/Projects/Projects.style";
import { project1 } from "../../data/ProjectsData/project1";
import { project2 } from "../../data/ProjectsData/project2";
import { project3 } from "../../data/ProjectsData/project3";
import { project4 } from "../../data/ProjectsData/project4";
import { project5 } from "../../data/ProjectsData/project5"; // Make sure to import project5
import { project6 } from "../../data/ProjectsData/project6";

const projects = [
  ...project1,
  ...project2,
  ...project3,
  ...project4,
  ...project5, // Add project5 here
  ...project6,
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showUserFeatures, setShowUserFeatures] = useState(true);
  const [showAdminFeatures, setShowAdminFeatures] = useState(true);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowUserFeatures(true); // Default to showing user features
    setShowAdminFeatures(true); // Default to showing admin features
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowUserFeatures(true);
    setShowAdminFeatures(true);
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
              </div>
            </ProjectCard>
          ))}
        </ProjectContainer>
      </Section>

      {selectedProject && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>
              <img
                src={selectedProject.close}
                alt="Close"
                className="close-icon"
              />
            </CloseButton>
            <h2>{selectedProject.title}</h2>
            {selectedProject.date && <p>{selectedProject.date}</p>}
            <p>{selectedProject.description}</p>

            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none", // Remove underline
                  color: "inherit", // Keep the default color
                }}
              >
                <img
                  src={selectedProject.git}
                  alt="GitHub"
                  style={{ width: "20px", marginRight: "8px" }}
                />
                Github 바로가기
              </a>
            )}

            {/* Features Section */}
            <FeaturesSection>
              <FeaturesTitle>{selectedProject.features}</FeaturesTitle>

              <FeaturesList>
                {selectedProject.feat1 && (
                  <FeatureItem>{selectedProject.feat1}</FeatureItem>
                )}
                {selectedProject.feat2 && (
                  <FeatureItem>{selectedProject.feat2}</FeatureItem>
                )}
                {selectedProject.feat3 && (
                  <FeatureItem>{selectedProject.feat3}</FeatureItem>
                )}
                {selectedProject.feat4 && (
                  <FeatureItem>{selectedProject.feat4}</FeatureItem>
                )}
              </FeaturesList>

              {/* User Features */}
              {selectedProject.user_feat && (
                <>
                  <FeaturessubTitle
                    onClick={() => setShowUserFeatures((prev) => !prev)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "20px",
                    }}
                  >
                    {showUserFeatures ? "▼" : "▶︎"} {selectedProject.user_feat}
                  </FeaturessubTitle>

                  {showUserFeatures && (
                    <FeaturesList>
                      {selectedProject.user_feat1 && (
                        <FeatureItem>{selectedProject.user_feat1}</FeatureItem>
                      )}
                      {selectedProject.user_feat2 && (
                        <FeatureItem>{selectedProject.user_feat2}</FeatureItem>
                      )}
                      {selectedProject.user_feat3 && (
                        <FeatureItem>{selectedProject.user_feat3}</FeatureItem>
                      )}
                      {selectedProject.user_feat4 && (
                        <FeatureItem>{selectedProject.user_feat4}</FeatureItem>
                      )}
                      {selectedProject.user_feat5 && (
                        <FeatureItem>{selectedProject.user_feat5}</FeatureItem>
                      )}
                      {selectedProject.user_feat6 && (
                        <FeatureItem>{selectedProject.user_feat6}</FeatureItem>
                      )}
                      {selectedProject.user_feat7 && (
                        <FeatureItem>{selectedProject.user_feat7}</FeatureItem>
                      )}
                      {selectedProject.user && (
                        <div style={{ margin: "10px 0", textAlign: "center" }}>
                          <img
                            src={selectedProject.user}
                            alt="User Mode"
                            style={{ width: "570px", height: "400px" }}
                          />
                        </div>
                      )}
                    </FeaturesList>
                  )}
                </>
              )}

              {/* Admin Features */}
              {selectedProject.admin_feat && (
                <>
                  <FeaturessubTitle
                    onClick={() => setShowAdminFeatures((prev) => !prev)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "20px",
                    }}
                  >
                    {showAdminFeatures ? "▼" : "▶︎"}{" "}
                    {selectedProject.admin_feat}
                  </FeaturessubTitle>

                  {showAdminFeatures && (
                    <FeaturesList>
                      {selectedProject.admin_feat1 && (
                        <FeatureItem>{selectedProject.admin_feat1}</FeatureItem>
                      )}
                      {selectedProject.admin_feat2 && (
                        <FeatureItem>{selectedProject.admin_feat2}</FeatureItem>
                      )}
                      {selectedProject.admin_feat3 && (
                        <FeatureItem>{selectedProject.admin_feat3}</FeatureItem>
                      )}
                      {selectedProject.admin_feat4 && (
                        <FeatureItem>{selectedProject.admin_feat4}</FeatureItem>
                      )}
                      {selectedProject.admin_feat5 && (
                        <FeatureItem>{selectedProject.admin_feat5}</FeatureItem>
                      )}
                      {selectedProject.admin && (
                        <div style={{ margin: "10px 0", textAlign: "center" }}>
                          <img
                            src={selectedProject.admin}
                            alt="Admin Mode"
                            style={{ width: "570px", height: "400px" }}
                          />
                        </div>
                      )}
                    </FeaturesList>
                  )}
                </>
              )}
            </FeaturesSection>

            {/* Additional Sections for Step Images, Model Descriptions, etc. */}
            {selectedProject.subTitle && (
              <FeaturesSection>
                <FeaturesTitle>{selectedProject.subTitle}</FeaturesTitle>
                <FeaturesList>
                  {selectedProject.step1 && (
                    <FeatureItem>
                      <strong>{selectedProject.step1}</strong>
                      <p>{selectedProject.step1_des}</p>
                      <ImageContainer>
                        <img src={selectedProject.step1_img} alt="Step 1" />
                      </ImageContainer>
                    </FeatureItem>
                  )}
                  {selectedProject.step2 && (
                    <FeatureItem>
                      <strong>{selectedProject.step2}</strong>
                      <p>{selectedProject.step2_des}</p>
                      <ImageContainer>
                        <img src={selectedProject.step2_img} alt="Step 2" />
                      </ImageContainer>
                    </FeatureItem>
                  )}
                  {selectedProject.step3 && (
                    <FeatureItem>
                      <strong>{selectedProject.step3}</strong>
                      <p>{selectedProject.step3_des}</p>
                      <ImageContainer>
                        <img src={selectedProject.step3_img} alt="Step 3" />
                      </ImageContainer>
                    </FeatureItem>
                  )}
                </FeaturesList>
              </FeaturesSection>
            )}

            {/* Model Description */}
            {selectedProject.model_des && (
              <FeaturesSection>
                <FeaturesTitle>모델 설명</FeaturesTitle>
                <p>{selectedProject.model_des}</p>
              </FeaturesSection>
            )}

            {/* Additional Screenshots */}
            <WindowInfo>
              <WindowTitle>{selectedProject.window}</WindowTitle>
              <div className="image-gallery">
                {selectedProject.photo1 && (
                  <img src={selectedProject.photo1} alt="Screenshot 1" />
                )}
                {selectedProject.photo2 && (
                  <img src={selectedProject.photo2} alt="Screenshot 2" />
                )}
                {selectedProject.photo3 && (
                  <img src={selectedProject.photo3} alt="Screenshot 3" />
                )}
                {selectedProject.photo4 && (
                  <img src={selectedProject.photo4} alt="Screenshot 4" />
                )}
                {selectedProject.photo5 && (
                  <img src={selectedProject.photo5} alt="Screenshot 5" />
                )}
                {selectedProject.photo6 && (
                  <img src={selectedProject.photo6} alt="Screenshot 6" />
                )}
                {selectedProject.photo7 && (
                  <img src={selectedProject.photo7} alt="Screenshot 7" />
                )}
              </div>
            </WindowInfo>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Projects;
