import React, { useCallback, useEffect, useMemo, useState } from "react";
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
  ModalHeader,
  CloseButton,
  ResourceLinks,
  ResourceLink,
  ResourceLinkTag,
  TechStackSection,
  TechStackList,
  TechStackChip,
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
  ImprovementSection,
  ImprovementGrid,
  ImprovementCard,
  ImprovementCardNumber,
  ImprovementCardTitle,
  ImprovementSummary,
  ImprovementOverlay,
  ImprovementModal,
  ImprovementModalClose,
  ImprovementCompareSection,
  ImprovementViewTabs,
  ImprovementViewTab,
  ImprovementCompareGrid,
  ImprovementCompareCard,
  ImprovementCompareBadge,
  ImprovementMajorSection,
  ImprovementCategoryHeader,
  ImprovementCategoryIcon,
  ImprovementCategoryTitle,
  ImprovementCategoryCount,
  ImprovementTimeline,
  ImprovementStoryCard,
  ImprovementStoryHeader,
  ImprovementStoryCheck,
  ImprovementStoryBody,
  ImprovementLead,
  ImprovementDetailTitle,
  ImprovementDetailList,
  ImprovementDetailItem,
  ImprovementVisualFrame,
  ImprovementGoalBlock,
  ImprovementGoalLabel,
  ImprovementGoalText,
  ImprovementSolutionLabel,
  ImprovementResultBox,
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
// import { project5 } from "../../data/ProjectsData/project5"; // Make sure to import project5
import { project6 } from "../../data/ProjectsData/project6";
import { project7 } from "../../data/ProjectsData/project7";
import { project8 } from "../../data/ProjectsData/project8";
import { motion } from "framer-motion";

const projects = [
  ...project8,
  ...project7,
  ...project1,
  ...project2,
  ...project3,
  ...project4,
  ...project6,
];

const ProjectMotionCard = ({ project, index, onOpen }) => {
  return (
    <ProjectCard
      as={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.16, ease: "easeOut" },
      }}
      viewport={{ once: false, amount: 0.22, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: 0.55,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onOpen(project)}
    >
      <div className="image-container">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="content">
        <ProjectTitle>{project.title}</ProjectTitle>
        {project.date && <ProjectDate>{project.date}</ProjectDate>}
      </div>
    </ProjectCard>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showUserFeatures, setShowUserFeatures] = useState(true);
  const [showAdminFeatures, setShowAdminFeatures] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [selectedImprovement, setSelectedImprovement] = useState(null);
  const [selectedImprovementView, setSelectedImprovementView] =
    useState("compare");
  const improvementModalVariant = selectedProject?.improvementModalVariant;

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
      selectedProject.photo8,
      selectedProject.photo9,
    ].filter(Boolean);
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowUserFeatures(true); // Default to showing user features
    setShowAdminFeatures(true); // Default to showing admin features
    setActiveImageIndex(null);
    setSelectedImprovement(null);
    setSelectedImprovementView("compare");
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowUserFeatures(true);
    setShowAdminFeatures(true);
    setActiveImageIndex(null);
    setSelectedImprovement(null);
    setSelectedImprovementView("compare");
  };

  const openImageLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeImageLightbox = () => {
    setActiveImageIndex(null);
  };

  const showPrevImage = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  }, [galleryImages.length]);

  const showNextImage = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length,
    );
  }, [galleryImages.length]);

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
  }, [activeImageIndex, showNextImage, showPrevImage]);

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

  const renderImprovements = () => {
    if (
      !selectedProject?.improvements_title ||
      !selectedProject?.improvements?.length
    ) {
      return null;
    }

    return (
      <ImprovementSection>
        <FeaturesTitle>{selectedProject.improvements_title}</FeaturesTitle>
        <ImprovementGrid>
          {selectedProject.improvements.map((item, index) => (
            <ImprovementCard
              key={`${selectedProject.title}-improvement-${index}`}
              onClick={() => {
                setSelectedImprovement(item);
                setSelectedImprovementView("compare");
              }}
            >
              <ImprovementCardNumber>
                {String(index + 1).padStart(2, "0")}
              </ImprovementCardNumber>
              <ImprovementCardTitle>{item.title}</ImprovementCardTitle>
            </ImprovementCard>
          ))}
        </ImprovementGrid>
      </ImprovementSection>
    );
  };

  return (
    <>
      <GlobalStyle />
      <Section>
        <Title>Projects</Title>
        <ProjectContainer>
          {projects.map((project, index) => (
            <ProjectMotionCard
              key={index}
              index={index}
              project={project}
              onOpen={openModal}
            />
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
            <ModalHeader
              $color={selectedProject.themeColor}
              $lightText={selectedProject.headerLightText}
            >
              <h2>{selectedProject.title}</h2>
              {selectedProject.date && <p>{selectedProject.date}</p>}
              {selectedProject.techStack?.length > 0 && (
                <TechStackSection>
                  <TechStackList>
                    {selectedProject.techStack.map((stack) => (
                      <TechStackChip
                        key={`${selectedProject.title}-tech-${stack}`}
                        $lightText={selectedProject.headerLightText}
                      >
                        {stack}
                      </TechStackChip>
                    ))}
                  </TechStackList>
                </TechStackSection>
              )}
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
            </ModalHeader>

            {/* Features Section */}
            <FeaturesSection $unstyled={selectedProject.noFeatureSectionStyle}>
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
                {selectedProject.feat5 && (
                  <FeatureItem>{selectedProject.feat5}</FeatureItem>
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
            {renderImprovements()}

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
            <WindowInfo
              $columns={selectedProject.galleryColumns}
              $imageWidth={selectedProject.galleryImageWidth}
            >
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

      {selectedProject && selectedImprovement && (
        <ImprovementOverlay onClick={() => setSelectedImprovement(null)}>
          <ImprovementModal onClick={(e) => e.stopPropagation()}>
            <ImprovementModalClose
              type="button"
              onClick={() => setSelectedImprovement(null)}
            >
              ×
            </ImprovementModalClose>

            <ImprovementMajorSection $variant={improvementModalVariant}>
              {improvementModalVariant === "project8" ? (
                <>
                  <ImprovementGoalBlock>
                    <ImprovementGoalLabel>
                      {selectedImprovement.detailCategory || "Project Goal"}
                    </ImprovementGoalLabel>
                    <ImprovementGoalText>
                      {selectedImprovement.detailLead ||
                        selectedImprovement.detailBody ||
                        selectedImprovement.summary}
                    </ImprovementGoalText>
                  </ImprovementGoalBlock>

                  <ImprovementTimeline
                    $variant={improvementModalVariant}
                    $columns={selectedImprovement.detailSections?.length || 0}
                  >
                    {selectedImprovement.detailSections?.map((section, index) => (
                      <ImprovementStoryCard
                        key={`${selectedImprovement.title}-section-${index}`}
                        $variant={improvementModalVariant}
                      >
                        <ImprovementStoryHeader $variant={improvementModalVariant}>
                          <ImprovementSolutionLabel>
                            {`Solution ${index + 1}`}
                          </ImprovementSolutionLabel>
                          <ImprovementDetailTitle
                            $variant={improvementModalVariant}
                          >
                            {section.title}
                          </ImprovementDetailTitle>
                        </ImprovementStoryHeader>
                        <ImprovementStoryBody $variant={improvementModalVariant}>
                          <ImprovementDetailList>
                            {section.items.map((item, itemIndex) => (
                              <ImprovementDetailItem
                                key={`${section.title}-item-${itemIndex}`}
                                $variant={improvementModalVariant}
                              >
                                {item}
                              </ImprovementDetailItem>
                            ))}
                          </ImprovementDetailList>
                        </ImprovementStoryBody>
                      </ImprovementStoryCard>
                    ))}
                  </ImprovementTimeline>

                  {selectedImprovement.result && (
                    <ImprovementResultBox>
                      {selectedImprovement.result}
                    </ImprovementResultBox>
                  )}
                </>
              ) : (
                <>
                  <ImprovementDetailTitle>주요 개선사항</ImprovementDetailTitle>
                  <ImprovementCategoryHeader>
                    <ImprovementCategoryIcon>◔</ImprovementCategoryIcon>
                    <ImprovementCategoryTitle>
                      {selectedImprovement.detailCategory || "개선 사항"}
                    </ImprovementCategoryTitle>
                    <ImprovementCategoryCount>
                      {selectedImprovement.detailSections?.length || 0}개 항목
                    </ImprovementCategoryCount>
                  </ImprovementCategoryHeader>
                  <ImprovementLead>
                    {selectedImprovement.detailLead ||
                      selectedImprovement.detailBody ||
                      selectedImprovement.summary}
                  </ImprovementLead>
                  <ImprovementTimeline>
                    {selectedImprovement.detailSections?.map((section, index) => (
                      <ImprovementStoryCard
                        key={`${selectedImprovement.title}-section-${index}`}
                      >
                        <ImprovementStoryHeader>
                          <ImprovementStoryCheck>✓</ImprovementStoryCheck>
                          <ImprovementDetailTitle>
                            {section.title}
                          </ImprovementDetailTitle>
                        </ImprovementStoryHeader>
                        <ImprovementStoryBody>
                          <ImprovementDetailList>
                            {section.items.map((item, itemIndex) => (
                              <ImprovementDetailItem
                                key={`${section.title}-item-${itemIndex}`}
                              >
                                {item}
                              </ImprovementDetailItem>
                            ))}
                          </ImprovementDetailList>
                        </ImprovementStoryBody>
                      </ImprovementStoryCard>
                    ))}
                    {selectedImprovement.result && (
                      <ImprovementStoryCard>
                        <ImprovementStoryHeader>
                          <ImprovementStoryCheck $variant="result">
                            ↗
                          </ImprovementStoryCheck>
                          <ImprovementDetailTitle>결과</ImprovementDetailTitle>
                        </ImprovementStoryHeader>
                        <ImprovementStoryBody>
                          <ImprovementSummary
                            style={{ fontSize: "18px", lineHeight: "1.9" }}
                          >
                            {selectedImprovement.result}
                          </ImprovementSummary>
                        </ImprovementStoryBody>
                      </ImprovementStoryCard>
                    )}
                  </ImprovementTimeline>
                </>
              )}
            </ImprovementMajorSection>

            {selectedImprovement.images?.length > 0 && (
              <ImprovementCompareSection>
                <ImprovementDetailTitle>Before & After</ImprovementDetailTitle>
                {selectedImprovement.imageViewMode !== "compare-only" && (
                  <ImprovementViewTabs>
                    {(
                      selectedImprovement.imageTabs || [
                        "compare",
                        "before",
                        "after1",
                        "after2",
                      ]
                    ).map((tab) => (
                      <ImprovementViewTab
                        key={`${selectedImprovement.title}-${tab}`}
                        type="button"
                        $active={selectedImprovementView === tab}
                        onClick={() => setSelectedImprovementView(tab)}
                      >
                        {tab === "compare" && "비교"}
                        {tab === "before" && "개선 전"}
                        {tab === "after1" && "개선 후"}
                        {tab === "after2" && "최종 개선"}
                      </ImprovementViewTab>
                    ))}
                  </ImprovementViewTabs>
                )}

                {selectedImprovement.imageViewMode === "compare-only" ||
                selectedImprovementView === "compare" ? (
                  <ImprovementCompareGrid>
                    {selectedImprovement.images.map((image, index) => (
                      <ImprovementCompareCard
                        key={`${selectedImprovement.title}-visual-${index}`}
                      >
                        <ImprovementCompareBadge>
                          {image.label}
                        </ImprovementCompareBadge>
                        <ImprovementVisualFrame>
                          <img
                            src={image.src}
                            alt={`${selectedImprovement.title} ${image.label}`}
                          />
                        </ImprovementVisualFrame>
                      </ImprovementCompareCard>
                    ))}
                  </ImprovementCompareGrid>
                ) : (
                  <ImprovementCompareGrid $single>
                    {selectedImprovement.images
                      .filter((image) => {
                        if (selectedImprovementView === "before") {
                          return image.label === "Before";
                        }

                        if (selectedImprovementView === "after1") {
                          return image.label === "After 1";
                        }

                        return image.label === "After 2";
                      })
                      .map((image, index) => (
                        <ImprovementCompareCard
                          key={`${selectedImprovement.title}-single-${index}`}
                        >
                          <ImprovementCompareBadge>
                            {image.label}
                          </ImprovementCompareBadge>
                          <ImprovementVisualFrame>
                            <img
                              src={image.src}
                              alt={`${selectedImprovement.title} ${image.label}`}
                            />
                          </ImprovementVisualFrame>
                        </ImprovementCompareCard>
                      ))}
                  </ImprovementCompareGrid>
                )}
              </ImprovementCompareSection>
            )}
          </ImprovementModal>
        </ImprovementOverlay>
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
