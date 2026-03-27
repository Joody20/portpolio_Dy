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
              <span>#T인척 하는 F</span>
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
              viewport={{ once: false, amount: 0.18, margin: "0px 0px -6% 0px" }}
            >
              <Box>
                <InTitle>Q. 자신의 성격은 어떠하다고 생각하는지?</InTitle>
                <InDescription>
                  저는 <span>계획적이며 효율성을 중요시 하는 사람</span>입니다.
                  매사에 체계적으로 계획을 세우고, 그 계획을 적극적으로 실행해
                  나갑니다. 저는 효율성에 중점을 두기에{" "}
                  <span>고객의 기대를 충족</span>하며
                  <span> 안정적인 솔루션을 제공</span>하는 동시에 급변하는
                  요구사항과 기술에 대응하는 능력을 지속적으로 향상시킬 수
                  있습니다.
                </InDescription>
              </Box>
            </motion.div>

            <motion.div
              custom={1}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.18, margin: "0px 0px -6% 0px" }}
            >
              <Box>
                <InTitle>Q. 개발자가 되고자 하는 이유는?</InTitle>
                <InDescription>
                  웹 서비스 개발 팀 프로젝트를 진행하며,{" "}
                  <span>
                    사용자를 위한 서비스를 직접 설계하고 구현하는 과정
                  </span>
                  에서 깊은 흥미를 느꼈습니다. 단순한 기능 구현을 넘어, 사용자가{" "}
                  <span>
                    직관적으로 사용할 수 있는 UI/UX를 고민하고 개발하는
                    과정{" "}
                  </span>
                  자체가 큰 즐거움이었습니다. 이러한 경험을 계기로 프론트엔드
                  기술에 대한 관심이 더욱 깊어졌으며,{" "}
                  <span>
                    더 나은 사용자 경험을 제공하기 위해 지속적으로 학습하고 성장
                  </span>
                  하고 있습니다.
                </InDescription>
              </Box>
            </motion.div>

            <motion.div
              custom={2}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.18, margin: "0px 0px -6% 0px" }}
            >
              <Box>
                <InTitle>Q. 어떤 개발자가 되고자 노력할 것 인지?</InTitle>
                <InDescription>
                  저는
                  <span> 사용자의 입장에서 생각하며 최상의 경험을 제공</span>
                  하는 개발자가 되고 싶습니다. 직관적이고 편리한 인터페이스를
                  구현하는 것은 물론, <span>새로운 기술과 아이디어</span>를
                  접목하여 <span>창의적인 솔루션을 개발</span>하는 것에 가치를
                  두고 있습니다. 또한, 끊임없이 변화하는 IT 환경 속에서 다양한
                  도전을 기회로 삼아,{" "}
                  <span>
                    유연한 사고와 도전 정신으로 지속적으로 성장하는 개발자
                  </span>
                  로 나아가고 싶습니다.
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
