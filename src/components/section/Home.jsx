/*CJ올리브네트웍스 포트폴리오 */
import React, { useEffect, useState, useCallback } from "react";
import { useAnimation } from "framer-motion";
import {
  GlobalStyle,
  Section,
  TitleWrapper,
  TitleName,
  Title,
  ColoredSpan,
  NextSection,
  NextSectionContent,
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
            안녕하세요, 미래의 올네인{" "}
            <ColoredSpan>
              <span className="char-1">주</span>
              <span className="char-2">다</span>
              <span className="char-3">영</span>
            </ColoredSpan>{" "}
            입니다:)
          </TitleName>
          <Title animate={titleControls} initial={{ opacity: 0, scale: 0.8 }}>
            <span className="cj">CJ</span> <span className="o">O</span>LIVE
            <br />
            <span className="n">N</span>ET<span className="w">W</span>ORKS
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
              Mail
            </MailLink>
          </motion.div>
          <SectionTitle>
            <span className="b">B</span>usiness <span className="s">S</span>
            ystem <span className="e">E</span>ngineer
          </SectionTitle>
          <Subtitle>
            미래의 올네인{" "}
            <ColoredSpan>
              <span className="char-1">주</span>
              <span className="char-2">다</span>
              <span className="char-3">영</span>
            </ColoredSpan>{" "}
            입니다.
          </Subtitle>
          <DescriptionWrapper>
            <DescriptionLine
              animate={descriptionLine1Controls}
              initial={{ opacity: 0, y: 50 }}
            >
              <span>끊임없는 도전</span>과 <span>자기 혁신</span>으로,
              <span> IT 기술</span>과 <span>비즈니스</span>를 연결하여
            </DescriptionLine>
            <DescriptionLine
              animate={descriptionLine2Controls}
              initial={{ opacity: 0, y: 50 }}
            >
              고객에게 <span>최상의 경험</span>을 제공하는 개발자입니다.
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
