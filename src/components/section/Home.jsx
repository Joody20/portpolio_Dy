/*CJ올리브네트웍스 포트폴리오 */
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useAnimation } from "framer-motion";
import {
  GlobalStyle,
  Section,
  TitleWrapper,
  TitleName,
  Title,
  ColoredSpan,
  NextSection,
  NextSectionInner,
  SideLinks,
  HeroLeft,
  HeroRight,
  IntroText,
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
import photo from "../../assets/images/my_photo.JPG";
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
  const nextSectionRef = useRef(null);

  const [isAnimating, setIsAnimating] = useState(true);

  // 스크롤 비활성화 핸들러
  const handleWheel = useCallback(
    (event) => {
      if (isAnimating) {
        event.preventDefault();
      }
    },
    [isAnimating],
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
    let scrollTimeoutId;
    let contentTimeoutId;

    const runIntro = async () => {
      await Promise.all([
        titleNameControls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.45 },
        }),
        titleControls.start({
          opacity: 1,
          scale: 1,
          transition: { duration: 0.7, delay: 0.4 },
        }),
      ]);

      const nextSection = nextSectionRef.current;
      if (nextSection) {
        await new Promise((resolve) => {
          scrollTimeoutId = window.setTimeout(() => {
            nextSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            resolve();
          }, 500);
        });
      }

      contentTimeoutId = window.setTimeout(async () => {
        await Promise.all([
          descriptionLine1Controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.35 },
          }),
          descriptionLine2Controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.35, delay: 0.12 },
          }),
          githubLinkControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.18 },
          }),
          mailLinkControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.18 },
          }),
          photoControls.start({
            scale: 1.06,
            transition: { duration: 0.45, delay: 0.1 },
          }),
        ]);

        setIsAnimating(false);
      }, 800);
    };

    runIntro();

    return () => {
      if (scrollTimeoutId) {
        window.clearTimeout(scrollTimeoutId);
      }
      if (contentTimeoutId) {
        window.clearTimeout(contentTimeoutId);
      }
    };
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

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll("main > section");
    const target = sections[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
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
            안녕하세요, 준비된 프론트엔드 개발자{" "}
            <ColoredSpan>
              <span className="char-1">주</span>
              <span className="char-2">다</span>
              <span className="char-3">영</span>
            </ColoredSpan>{" "}
            입니다:)
          </TitleName>
          <Title animate={titleControls} initial={{ opacity: 0, scale: 0.8 }}>
            <span className="cj">CJ</span> <span className="o">C</span>HEIL
            <br />
            <span className="n">J</span>E<span className="w">D</span>ANG
          </Title>
        </TitleWrapper>
      </Section>
      <div style={{ width: "100%", height: "100%" }}>
        <NextSection id="next-section" ref={nextSectionRef}>
          <div className="next-nav">
            <button type="button" onClick={() => scrollToSection(1)}>
              about me
            </button>
            <button type="button" onClick={() => scrollToSection(2)}>
              skills
            </button>
            <button type="button" onClick={() => scrollToSection(3)}>
              projects
            </button>
            <button type="button" onClick={() => scrollToSection(4)}>
              contacts
            </button>
          </div>
          <NextSectionInner>
            <SideLinks>
              <motion.div animate={githubLinkControls} initial={{ opacity: 0 }}>
                <StyledGitHubLink
                  href="https://github.com/Joody20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </StyledGitHubLink>
              </motion.div>
              <motion.div animate={mailLinkControls} initial={{ opacity: 0 }}>
                <MailLink
                  href="mailto:judayeong10@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  g-mail
                </MailLink>
              </motion.div>
            </SideLinks>

            <HeroLeft>
              <SectionTitle>
                Frontend
                <br />
                Engineer
              </SectionTitle>
            </HeroLeft>

            <HeroRight>
              <Photo
                src={photo}
                alt="Profile"
                animate={photoControls}
                initial={{ scale: 1 }}
              />
              <IntroText>
                <Subtitle>
                  <span>사용자와 가장 가까운 곳에서,</span>
                  <span>서비스의 가치를 전달하는</span>
                  <span>프론트엔드 개발자입니다.</span>
                </Subtitle>
                <DescriptionWrapper>
                  <DescriptionLine
                    animate={descriptionLine2Controls}
                    initial={{ opacity: 0, y: 50 }}
                    $align="left"
                  >
                    I&apos;m a frontend developer
                  </DescriptionLine>
                  <DescriptionLine
                    animate={descriptionLine2Controls}
                    initial={{ opacity: 0, y: 50 }}
                    $align="right"
                  >
                    who connects users
                  </DescriptionLine>
                  <DescriptionLine
                    animate={descriptionLine2Controls}
                    initial={{ opacity: 0, y: 50 }}
                    $align="left"
                  >
                    with the true value of a service.
                  </DescriptionLine>
                </DescriptionWrapper>
              </IntroText>
            </HeroRight>
          </NextSectionInner>
          <ScrollDownArrow onClick={scrollToNextSection}>
            <img src={DownArrowImage} alt="Scroll Down" />
          </ScrollDownArrow>
        </NextSection>
      </div>
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
