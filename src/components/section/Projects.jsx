import React, { useEffect, useMemo, useState } from "react";
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
  ResourceLinks,
  ResourceLink,
  ResourceLinkTag,
  FeaturesSection,
  FeaturesTitle,
  FeaturessubTitle,
  FeaturesList,
  FeatureItem,
  WindowInfo,
  WindowTitle,
  ImageContainer,
  JourneySection,
  JourneyGrid,
  JourneyCard,
  JourneyStep,
  JourneyCardTitle,
  JourneySummary,
  FeatureGroupSection,
  FeatureGroupGrid,
  FeatureGroupCard,
  FeatureGroupTitle,
  TroubleSection,
  TroubleCard,
  TroubleLayout,
  TroubleVisual,
  TroubleVisualGrid,
  TroubleVisualItem,
  TroubleVisualLabel,
  TroubleBody,
  TroubleHeadline,
  TroubleMeta,
  TroubleMetaItem,
  TroubleMetaLabel,
  TroubleText,
  ImageLightboxOverlay,
  ImageLightboxContent,
  LightboxNavButton,
  LightboxCloseButton,
} from "../../styles/Projects/Projects.style";
import { project1 } from "../../data/ProjectsData/project1";
import { project2 } from "../../data/ProjectsData/project2";
import { project3 } from "../../data/ProjectsData/project3";
import { project4 } from "../../data/ProjectsData/project4";
import { project5 } from "../../data/ProjectsData/project5"; // Make sure to import project5
import { project6 } from "../../data/ProjectsData/project6";
import { project7 } from "../../data/ProjectsData/project7";
import { project8 } from "../../data/ProjectsData/project8";

const projects = [
  ...project8,
  ...project7,
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
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const galleryImages = useMemo(() => {
    if (!selectedProject) {
      return [];
    }

    return [
      selectedProject.photo1,
      selectedProject.photo2,
      selectedProject.photo3,
      selectedProject.photo4,
      selectedProject.photo5,
      selectedProject.photo6,
      selectedProject.photo7,
    ].filter(Boolean);
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowUserFeatures(true); // Default to showing user features
    setShowAdminFeatures(true); // Default to showing admin features
    setActiveImageIndex(null);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowUserFeatures(true);
    setShowAdminFeatures(true);
    setActiveImageIndex(null);
  };

  const openImageLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeImageLightbox = () => {
    setActiveImageIndex(null);
  };

  const showPrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length,
    );
  };

  useEffect(() => {
    if (activeImageIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeImageLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex, galleryImages.length]);

  const renderJourneySection = () => {
    if (
      !selectedProject?.journey_title ||
      !selectedProject?.journey_sections?.length
    ) {
      return null;
    }

    return (
      <JourneySection>
        <FeaturesTitle>{selectedProject.journey_title}</FeaturesTitle>
        <JourneyGrid>
          {selectedProject.journey_sections.map((section) => (
            <JourneyCard key={`${selectedProject.title}-${section.step}`}>
              <JourneyStep>{section.step}</JourneyStep>
              <JourneyCardTitle>{section.title}</JourneyCardTitle>
              <JourneySummary>{section.summary}</JourneySummary>
              <FeaturesList>
                {section.points.map((point, index) => (
                  <FeatureItem key={`${section.step}-point-${index}`}>
                    {point}
                  </FeatureItem>
                ))}
              </FeaturesList>
            </JourneyCard>
          ))}
        </JourneyGrid>
      </JourneySection>
    );
  };

  const renderTroubleshootingSection = () => {
    if (
      !selectedProject?.troubleshooting_title ||
      !selectedProject?.troubleshooting_items?.length
    ) {
      return null;
    }

    return (
      <TroubleSection>
        <FeaturesTitle>{selectedProject.troubleshooting_title}</FeaturesTitle>
        {selectedProject.troubleshooting_items.map((item, index) => (
          <TroubleCard key={`${selectedProject.title}-trouble-${index}`}>
            <TroubleLayout
              $hasVisual={Boolean(item.image || item.images?.length)}
            >
              {item.image && (
                <TroubleVisual>
                  <img src={item.image} alt={`${item.title} 관련 화면`} />
                </TroubleVisual>
              )}
              {!item.image && item.images?.length > 0 && (
                <TroubleVisualGrid>
                  {item.images.map((image, imageIndex) => (
                    <TroubleVisualItem
                      key={`${item.title}-image-${imageIndex}`}
                    >
                      <TroubleVisualLabel>{image.label}</TroubleVisualLabel>
                      <TroubleVisual>
                        <img
                          src={image.src}
                          alt={`${item.title} ${image.label}`}
                        />
                      </TroubleVisual>
                    </TroubleVisualItem>
                  ))}
                </TroubleVisualGrid>
              )}
              <TroubleBody>
                <TroubleHeadline>{item.title}</TroubleHeadline>
                <TroubleMeta>
                  <TroubleMetaItem>
                    <TroubleMetaLabel>문제 상황</TroubleMetaLabel>
                    <TroubleText>{item.problem}</TroubleText>
                  </TroubleMetaItem>
                  {item.cause && (
                    <TroubleMetaItem>
                      <TroubleMetaLabel>원인 분석</TroubleMetaLabel>
                      <TroubleText>{item.cause}</TroubleText>
                    </TroubleMetaItem>
                  )}
                  <TroubleMetaItem>
                    <TroubleMetaLabel>해결 방법</TroubleMetaLabel>
                    <TroubleText>{item.solution}</TroubleText>
                  </TroubleMetaItem>
                  {item.result && (
                    <TroubleMetaItem>
                      <TroubleMetaLabel>개선 결과</TroubleMetaLabel>
                      <TroubleText>{item.result}</TroubleText>
                    </TroubleMetaItem>
                  )}
                </TroubleMeta>
              </TroubleBody>
            </TroubleLayout>
          </TroubleCard>
        ))}
      </TroubleSection>
    );
  };

  const renderFeatureGroups = () => {
    if (
      !selectedProject?.feature_groups_title ||
      !selectedProject?.feature_groups?.length
    ) {
      return null;
    }

    return (
      <FeatureGroupSection>
        <FeaturesTitle>{selectedProject.feature_groups_title}</FeaturesTitle>
        <FeatureGroupGrid>
          {selectedProject.feature_groups.map((group, index) => (
            <FeatureGroupCard
              key={`${selectedProject.title}-feature-group-${index}`}
            >
              <FeatureGroupTitle>{group.title}</FeatureGroupTitle>
              <FeaturesList>
                {group.items.map((item, itemIndex) => (
                  <FeatureItem key={`${group.title}-item-${itemIndex}`}>
                    {item}
                  </FeatureItem>
                ))}
              </FeaturesList>
            </FeatureGroupCard>
          ))}
        </FeatureGroupGrid>
      </FeatureGroupSection>
    );
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

            {(selectedProject.github ||
              selectedProject.wiki ||
              selectedProject.designDoc) && (
              <ResourceLinks>
                {selectedProject.github && (
                  <ResourceLink
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ResourceLinkTag>Code</ResourceLinkTag>
                    <img
                      src={selectedProject.git}
                      alt="GitHub"
                      style={{ width: "18px", height: "18px" }}
                    />
                    Github
                  </ResourceLink>
                )}

                {selectedProject.wiki && (
                  <ResourceLink
                    href={selectedProject.wiki}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ResourceLinkTag>Wiki</ResourceLinkTag>
                    FrontEnd 위키
                  </ResourceLink>
                )}

                {selectedProject.designDoc && (
                  <ResourceLink
                    href={selectedProject.designDoc}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ResourceLinkTag>Docs</ResourceLinkTag>
                    FrontEnd 설계 문서
                  </ResourceLink>
                )}
              </ResourceLinks>
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
                    {showAdminFeatures ? "▼" : "▶︎"} {selectedProject.admin_feat}
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

            {renderFeatureGroups()}

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

            {renderJourneySection()}
            {renderTroubleshootingSection()}

            {/* Additional Screenshots */}
            <WindowInfo $columns={selectedProject.galleryColumns}>
              <WindowTitle>{selectedProject.window}</WindowTitle>
              <div className="image-gallery">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${selectedProject.title}-gallery-${index}`}
                    type="button"
                    className="gallery-image-button"
                    onClick={() => openImageLightbox(index)}
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.title} Screenshot ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </WindowInfo>
          </ModalContent>
        </ModalOverlay>
      )}

      {selectedProject &&
        activeImageIndex !== null &&
        galleryImages.length > 0 && (
          <ImageLightboxOverlay onClick={closeImageLightbox}>
            <ImageLightboxContent onClick={(e) => e.stopPropagation()}>
              <LightboxCloseButton type="button" onClick={closeImageLightbox}>
                ×
              </LightboxCloseButton>
              {galleryImages.length > 1 && (
                <LightboxNavButton
                  type="button"
                  $direction="left"
                  onClick={showPrevImage}
                >
                  ‹
                </LightboxNavButton>
              )}
              <img
                src={galleryImages[activeImageIndex]}
                alt={`${selectedProject.title} enlarged ${activeImageIndex + 1}`}
              />
              {galleryImages.length > 1 && (
                <LightboxNavButton
                  type="button"
                  $direction="right"
                  onClick={showNextImage}
                >
                  ›
                </LightboxNavButton>
              )}
            </ImageLightboxContent>
          </ImageLightboxOverlay>
        )}
    </>
  );
};

export default Projects;
