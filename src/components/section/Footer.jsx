import React, { useEffect, useRef } from "react";
import {
  GlobalStyle,
  Section,
  TitleWrapper,
  TitleName,
  Title,
  GitHubLink as StyledGitHubLink,
  MailLink,
} from "../../styles/Footer/Footer.style";
import { motion, useAnimation } from "framer-motion";

const Footer = () => {
  const footerRef = useRef(null);
  const githubLinkControls = useAnimation();
  const mailLinkControls = useAnimation();
  const titleControls = useAnimation();
  const titleNameControls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animateElements = async () => {
            await titleNameControls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            });
            await titleControls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
            });
          };

          // Set initial values for animation
          titleNameControls.set({ opacity: 0, y: -50 });
          titleControls.set({ opacity: 0, y: -100 });
          // githubLinkControls.set({ opacity: 0, y: 20 });
          // mailLinkControls.set({ opacity: 0, y: 20 });
          animateElements();
        }
      },
      {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.3,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [titleNameControls, titleControls, githubLinkControls, mailLinkControls]);

  return (
    <>
      <GlobalStyle />
      <Section ref={footerRef}>
        <TitleWrapper>
          {/* TitleName Animation */}
          <motion.h2
            animate={titleNameControls}
            initial={{ opacity: 0, y: -50 }}
          >
            <TitleName>봐주셔서 감사합니다!</TitleName>
          </motion.h2>
          {/* Title Animation */}
          <motion.h2 animate={titleControls} initial={{ opacity: 0, y: -100 }}>
            <Title>Thank U :)</Title>
          </motion.h2>
        </TitleWrapper>
        {/* GitHub Link Animation */}

        <StyledGitHubLink
          href="https://github.com/Joody20"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </StyledGitHubLink>

        {/* Mail Link Animation */}

        <MailLink
          href="mailto:judayeong10@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          G-mail
        </MailLink>
      </Section>
    </>
  );
};

export default Footer;
