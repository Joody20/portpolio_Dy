import {
  GlobalStyle,
  Section,
  Title,
  EduWrapper,
  Rectangle,
  StyledImage,
  SkillWrapper,
  Title2,
  SkillMarquee,
  SkillTrack,
  SkillChip,
  SkillIcon,
  SkillName,
} from "../../styles/Info/Info.style";
import Kwlogo from "../../assets/images/KWLOGO.jpg";
import kakaoboot from "../../assets/images/kakaoboot.svg";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import react from "../../assets/images/react.png";
import typescript from "../../assets/images/typescript.png";
import nextJs from "../../assets/images/nextJS.png";
import mysql from "../../assets/images/mysql.svg";
import nodejs from "../../assets/images/nodejs.png";
import notion from "../../assets/images/notion.png";
import ga from "../../assets/images/googleAnalytics.png";
import github from "../../assets/images/github.png";
import figma from "../../assets/images/figma.png";
import { motion } from "framer-motion";

const Info = () => {
  const blockVariants = {
    hidden: { y: 36, opacity: 0 },
    visible: (index = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const skillItems = [
    { icon: html, name: "HTML" },
    { icon: css, name: "CSS" },
    { icon: js, name: "JavaScript" },
    { icon: react, name: "React" },
    { icon: nextJs, name: "Next.js" },
    { icon: typescript, name: "TypeScript" },
    { icon: mysql, name: "MySQL" },
    { icon: nodejs, name: "Node.js" },
    { icon: ga, name: "GA" },
    { icon: notion, name: "Notion" },
    { icon: github, name: "GitHub" },
    { icon: figma, name: "Figma" },
  ];

  const firstRowSkills = skillItems.slice(0, Math.ceil(skillItems.length / 2));
  const secondRowSkills = skillItems.slice(Math.ceil(skillItems.length / 2));

  return (
    <>
      <GlobalStyle />
      <Section>
        <div className="flex flex-col" style={{ marginRight: "20px" }}>
          <EduWrapper>
            <Title>Education</Title>
            <motion.div
              custom={0}
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.22, margin: "0px 0px -10% 0px" }}
            >
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
            <motion.div
              custom={1}
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.22, margin: "0px 0px -10% 0px" }}
            >
              <Rectangle>
                <StyledImage src={kakaoboot} alt="카카오테크 부트캠프" />
                <p>2025.09 ~ 2026.03</p>
                <h3>카카오테크 부트캠프</h3>
                <p>@풀스택 과정 3기</p>
                <ul>
                  <li>▶︎ JavaScript, React, Next.js, TypeScript 등 학습</li>
                  <li>
                    ▶︎ 6개월간의 교육과정 동안 팀 프로젝트 진행 및 개인 프로젝트
                    진행
                  </li>
                  <li>▶︎ AI해커톤 및 부하테스트 진행</li>
                  <li>
                    ▶︎ 서비스 전 과정을 직접 설계·구현하며, 풀스택 역량과 AI 활용
                    능력을 함께 강화하는 부트캠프
                  </li>
                </ul>
              </Rectangle>
            </motion.div>
          </EduWrapper>

          <SkillWrapper>
            <Title2>Skills</Title2>
            <motion.div
              custom={2}
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.18, margin: "0px 0px -8% 0px" }}
            >
              <SkillMarquee>
                <SkillTrack>
                  {[...firstRowSkills, ...firstRowSkills].map(
                    (skill, index) => (
                      <SkillChip key={`${skill.name}-${index}`}>
                        <SkillIcon
                          src={skill.icon}
                          alt={`${skill.name} 아이콘`}
                        />
                        <SkillName>{skill.name}</SkillName>
                      </SkillChip>
                    ),
                  )}
                </SkillTrack>
              </SkillMarquee>
              <SkillMarquee>
                <SkillTrack $reverse>
                  {[...secondRowSkills, ...secondRowSkills].map(
                    (skill, index) => (
                      <SkillChip key={`${skill.name}-reverse-${index}`}>
                        <SkillIcon
                          src={skill.icon}
                          alt={`${skill.name} 아이콘`}
                        />
                        <SkillName>{skill.name}</SkillName>
                      </SkillChip>
                    ),
                  )}
                </SkillTrack>
              </SkillMarquee>
            </motion.div>
          </SkillWrapper>
        </div>
      </Section>
    </>
  );
};

export default Info;
