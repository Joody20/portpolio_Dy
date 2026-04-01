import { useState } from "react";
import {
  GlobalStyle,
  Section,
  Title,
  AboutInner,
  ProfileColumn,
  ProfileImage,
  Keywords,
  InterViewTitle,
  InterViewWrapper,
  InterviewColumn,
  Box,
  InTitle,
  InDescription,
} from "../../styles/About/About.style";
import myIcon from "../../assets/images/icon-1.png";
import myIconHover from "../../assets/images/icon-3.png";
import { motion } from "framer-motion";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const itemVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: (index = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <>
      <GlobalStyle />
      <Section>
        <Title>About Me</Title>
        <AboutInner>
          <ProfileColumn>
            <ProfileImage
              src={isHovered ? myIconHover : myIcon}
              alt="내 임티"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <Keywords>
              <span>#성실함</span>
              <span>#꾸준함</span>
              <span>#꼼꼼함</span>
            </Keywords>
          </ProfileColumn>

          <InterviewColumn>
            <InterViewWrapper>
              <InterViewTitle>Interview.</InterViewTitle>

              <motion.div
                custom={0}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.18,
                  margin: "0px 0px -6% 0px",
                }}
              >
                <Box>
                  <InTitle>Q. 자신의 성격은 어떠하다고 생각하는지?</InTitle>
                  <InDescription>
                    저는 <span>사람을 좋아하고</span> 주변 사람들을 밝게
                    만들어주는
                    <span> 선한 영향력을 가진 사람</span>입니다. 이러한 성격
                    덕분에 협업 과정에서{" "}
                    <span>자연스럽게 소통을 이끌어내고</span>, 팀원들이{" "}
                    <span>편하게 의견을 나눌 수 있는 분위기를 만드는 역할</span>
                    을 맡아왔습니다. 실제로 프로젝트를 진행하면서 팀원들 간의
                    의견을 조율하고 문제를 함께 해결하는 과정에서 이러한 강점이
                    큰 도움이 되었습니다.
                  </InDescription>
                </Box>
              </motion.div>

              <motion.div
                custom={1}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.18,
                  margin: "0px 0px -6% 0px",
                }}
              >
                <Box>
                  <InTitle>
                    Q. 개발자가 되기 위해 어떤 노력을 하고 있는지?
                  </InTitle>
                  <InDescription>
                    저는 개발자로 성장하기 위해{" "}
                    <span>개발 역량뿐만 아니라</span>
                    <span> 문제 해결 능력과 커뮤니케이션 역량</span>을 함께
                    발전시키고 있습니다. 팀 프로젝트에서{" "}
                    <span>프론트엔드를 맡아</span> 기능 구현을 넘어 사용자
                    경험을 개선하기 위한 기술 선택과 구조 설계를 고민해왔습니다.
                    문제 상황에서는{" "}
                    <span>
                      원인을 분석하고 해결 과정을 정리하며 학습하는 습관
                    </span>
                    을 통해 지속적으로 성장하고 있습니다. 특히{" "}
                    <span>상대방의 말을 끝까지 경청하고</span>, 누구나 이해할 수
                    있도록 <span> 명확하게 전달하는 것</span>을 중요하게
                    생각합니다. 이러한 소통 방식은 협업 과정에서 오해를 줄이고,
                    팀원들과의 원활한 의견 조율로 더 나은 결과를 만드는 데 기여
                    하고 있습니다.
                  </InDescription>
                </Box>
              </motion.div>

              <motion.div
                custom={2}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.18,
                  margin: "0px 0px -6% 0px",
                }}
              >
                <Box>
                  <InTitle>Q. 앞으로 어떤 개발자로 성장하고 싶은지?</InTitle>
                  <InDescription>
                    저는 사용자와 가장 가까운 곳에서{" "}
                    <span>서비스의 가치를</span>
                    <span> 전달하는 개발자</span>로 성장하고 싶습니다. 사용자가
                    서비스에 처음 진입해 마주하는 화면부터, 작은{" "}
                    <span>인터랙션 하나까지 꼼꼼하게</span> 고민하며 사용자
                    경험을 만들어내는 것이 프론트엔드 개발자의 역할이라고
                    생각합니다. 디자이너가 설계한 경험을 단순히 구현하는 것을
                    넘어,{" "}
                    <span>
                      사용자가 자연스럽게 몰입하고 긍정적인 경험을 이어갈 수
                      있도록 만드는 엔지니어
                    </span>
                    로 성장하고 싶습니다.
                  </InDescription>
                </Box>
              </motion.div>
            </InterViewWrapper>
          </InterviewColumn>
        </AboutInner>
      </Section>
    </>
  );
};

export default About;
