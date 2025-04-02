import React, { useEffect, useState, useCallback } from "react";
import { useAnimation } from "framer-motion";
import {
  GlobalStyle,
  Section,
  TitleWrapper,
  TitleName,
  Title,
  NextSection,
  GitHubLink as StyledGitHubLink,
  SectionTitle,
  Subtitle,
  DescriptionWrapper,
  DescriptionLine,
  Photo,
  ScrollToTopButton,
  ScrollDownArrow,
  CircleButton,
  MailLink,
} from "../../styles/Home/Home.style";
import { motion } from "framer-motion";
// import photo from "../../assets/images/dayeong_img.webp";
import photo1 from "../../assets/images/my.PNG";
import DownArrowImage from "../../assets/images/down-arrow.png";
import UpArrowImage from "../../assets/images/arrow.png";
import feedback from "../../assets/images/feedback.png";

const Home = () => {
  const titleControls = useAnimation();
  const titleNameControls = useAnimation();
  const descriptionLine1Controls = useAnimation();
  const descriptionLine2Controls = useAnimation();
  const photoControls = useAnimation();
  const githubLinkControls = useAnimation();
  const mailLinkControls = useAnimation();

  const [isAnimating, setIsAnimating] = useState(true);

  // 스크롤 비활성화 핸들러
  const handleWheel = useCallback(
    (event) => {
      if (isAnimating) {
        event.preventDefault();
      }
    },
    [isAnimating]
  );

  useEffect(() => {
    if (isAnimating) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    } else {
      window.removeEventListener("wheel", handleWheel);
    }

    // 클린업
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isAnimating, handleWheel]);

  useEffect(() => {
    Promise.all([
      titleNameControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      }),
      titleControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, delay: 0.6 },
      }),
    ])
      .then(() => {
        setTimeout(() => {
          const nextSection = document.querySelector("#next-section");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
          setTimeout(() => {
            descriptionLine1Controls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            });
            descriptionLine2Controls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.5 },
            });
            githubLinkControls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 1 },
            });
            mailLinkControls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 1 },
            });
          }, 500);
        }, 500);
      })
      .then(() => {
        photoControls.start({
          scale: 1.2,
          transition: { duration: 0.8, delay: 1.1 },
        });
        setIsAnimating(false); // 애니메이션 완료 후 스크롤 활성화
      });
  }, [
    titleControls,
    titleNameControls,
    descriptionLine1Controls,
    descriptionLine2Controls,
    photoControls,
    githubLinkControls,
    mailLinkControls,
  ]);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Section id="home">
        <TitleWrapper>
          <TitleName
            animate={titleNameControls}
            initial={{ opacity: 0, y: 50 }}
          >
            프론트엔드 개발자 <span>주다영</span> 입니다.
          </TitleName>
          <Title animate={titleControls} initial={{ opacity: 0, scale: 0.8 }}>
            Front-End
            <br />
            Developer
          </Title>
        </TitleWrapper>
      </Section>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 5, ease: "easeInOut" }}
        style={{ width: "100%", height: "100%" }}
      >
        <NextSection id="next-section">
          <motion.div animate={githubLinkControls} initial={{ opacity: 0 }}>
            <StyledGitHubLink
              href="https://github.com/Joody20"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </StyledGitHubLink>
          </motion.div>
          <motion.div animate={mailLinkControls} initial={{ opacity: 0 }}>
            <MailLink
              href="mailto:judayeong10@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              G-mail
            </MailLink>
          </motion.div>
          <SectionTitle>Front-End</SectionTitle>
          <Subtitle>
            프론트엔드 개발자 <span>주다영</span>입니다.
          </Subtitle>
          <DescriptionWrapper>
            <DescriptionLine
              animate={descriptionLine1Controls}
              initial={{ opacity: 0, y: 50 }}
            >
              클라이언트를 <span>최우선</span>으로 생각하는 마인드,
            </DescriptionLine>
            <DescriptionLine
              animate={descriptionLine2Controls}
              initial={{ opacity: 0, y: 50 }}
            >
              많은 사람들에게 감동을 주는 <span>성실한</span> 개발자입니다.
            </DescriptionLine>
          </DescriptionWrapper>
          <Photo
            src={photo1}
            alt="Profile"
            animate={photoControls}
            initial={{ scale: 1 }}
          />
          <ScrollDownArrow onClick={scrollToNextSection}>
            <img src={DownArrowImage} alt="Scroll Down" />
          </ScrollDownArrow>
        </NextSection>
      </motion.div>
      <ScrollToTopButton onClick={scrollToNextSection}>
        <img src={UpArrowImage} alt="Scroll Up" />
      </ScrollToTopButton>
      <CircleButton
        as="a"
        href="https://forms.gle/7ULp66h1fhoASRdq6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={feedback} alt="Icon" />
      </CircleButton>
    </>
  );
};

export default Home;
