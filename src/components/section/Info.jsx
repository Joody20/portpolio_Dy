import { useState, useEffect, useRef } from "react";
import {
  GlobalStyle,
  Section,
  Title,
  EduWrapper,
  Rectangle,
  StyledImage,
  SkillWrapper,
  Title2,
  Rectangle2,
  Medium,
  SkillIconsContainer,
  Skillicon,
} from "../../styles/Info/Info.style";
import Kwlogo from "../../assets/images/KWLOGO.jpg";
import codeit from "../../assets/images/codeit.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import react from "../../assets/images/react.png";
import typescript from "../../assets/images/typescript.png";
import mysql from "../../assets/images/mySQL copy.png";
import mongodb from "../../assets/images/mongodb.png";
import nodejs from "../../assets/images/nodejs.png";
import aws from "../../assets/images/aws.jpeg";
import notion from "../../assets/images/notion.jpeg";
import ga from "../../assets/images/GA.png";
import docker from "../../assets/images/docker2.png";
import github from "../../assets/images/github.png";
import figma from "../../assets/images/figma.png";
import { motion, useAnimation } from "framer-motion";

const Info = () => {
  const controls = useAnimation(); // animation control
  const boxRefs = useRef([]);

  // Intersection Observer 설정
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.isIntersecting) {
        target.classList.add("visible");
        controls.start("visible");
      } else {
        target.classList.remove("visible");
        controls.start("hidden");
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // 뷰포트 기준
      rootMargin: "0px",
      threshold: 0, // 0%라도 보이면 트리거
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    boxRefs.current.forEach((box) => observer.observe(box));

    return () => {
      observer.disconnect();
    };
  }, []);

  // refs 배열에 Box 요소 추가
  const addToRefs = (el) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
    }
  };

  // Variants 정의
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <GlobalStyle />
      <Section>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col"
          style={{ marginRight: "20px" }}
        >
          <EduWrapper>
            <Title>Education</Title>
            <motion.div ref={addToRefs} variants={itemVariants}>
              <Rectangle>
                <StyledImage src={Kwlogo} alt="Kwangwoon University Logo" />
                <p>2020.02 ~ 2025.02</p>
                <h3>광운대학교(본교) - 서울특별시 노원구</h3>
                <p>@정보융합학부 데이터사이언스전공 학사 졸업</p>
                <ul>
                  <li>
                    ▶︎ 데이터 이해에 기반을 둔, 인공지능 기술과 인간 중심의
                    컴퓨팅 인터페이스의 융합 능력 배양
                  </li>
                  <li>
                    ▶︎ 어플리케이션 설계/개발 능력을 바탕으로, 인공지능 서비스의
                    가치를 창출할 수 있는 능력 배양
                  </li>
                  <li>
                    ▶︎ 체계적인 데이터 분석 및 창의적인 정보 활용 능력 배양
                  </li>
                </ul>
                {/* <p>
                  #오픈소스소프트웨어 #웹서비스설계및실습 #기계학습
                  #IoT프로그래밍 #자료구조 #컴퓨터비전 #데이터베이스
                </p> */}
              </Rectangle>
            </motion.div>
            <motion.div ref={addToRefs} variants={itemVariants}>
              <Rectangle>
                <StyledImage src={codeit} alt="코드잇" />
                <p>2024.03 ~ 2024.08</p>
                <h3>코드잇 파워부스트 1기</h3>
                <p>@프론트엔드 개발자 과정</p>
                <ul>
                  <li>▶︎ JavaScript, React, Next.js, TypeScript 등 학습</li>
                  <li>
                    ▶︎ 20주 동안 매일 강도 높은 과제 수행 및 페어 프로그래밍과
                    코드 리뷰 경험
                  </li>
                  <li>▶︎ 개인 프로젝트 3회</li>
                  <li>
                    ▶︎ 스터디에 참여하여 개발 공부를 진행하고 동료들과 원활한
                    소통과 커뮤니케이션을 촉진
                  </li>
                </ul>
              </Rectangle>
            </motion.div>
          </EduWrapper>

          <SkillWrapper>
            <Title2>Skills</Title2>
            <motion.div ref={addToRefs} variants={itemVariants}>
              <Rectangle2>
                <Medium>Front-End</Medium>
                <SkillIconsContainer>
                  <Skillicon src={html} alt="html 이모티콘" />
                  <Skillicon src={css} alt="css 이모티콘" />
                  <Skillicon src={js} alt="js 이모티콘" />
                  <Skillicon src={react} alt="react 이모티콘" />
                  <Skillicon src={typescript} alt="typescript 이모티콘" />
                </SkillIconsContainer>
              </Rectangle2>
            </motion.div>

            <motion.div ref={addToRefs} variants={itemVariants}>
              <Rectangle2>
                <Medium>Back-End</Medium>
                <SkillIconsContainer>
                  <Skillicon src={mysql} alt="mysql 이모티콘" />
                  <Skillicon src={mongodb} alt="mongodb 이모티콘" />
                  <Skillicon src={nodejs} alt="nodejs 이모티콘" />
                  <Skillicon src={docker} alt="docker 이모티콘" />
                  <Skillicon src={aws} alt="aws 이모티콘" />
                </SkillIconsContainer>
              </Rectangle2>
            </motion.div>

            <motion.div ref={addToRefs} variants={itemVariants}>
              <Rectangle2>
                <Medium>Etc.</Medium>
                <SkillIconsContainer>
                  <Skillicon src={ga} alt="ga 이모티콘" />
                  <Skillicon src={notion} alt="notion 이모티콘" />
                  <Skillicon src={github} alt="github 이모티콘" />
                  <Skillicon src={figma} alt="figma 이모티콘" />
                </SkillIconsContainer>
              </Rectangle2>
            </motion.div>
          </SkillWrapper>
        </motion.div>
      </Section>
    </>
  );
};

export default Info;
