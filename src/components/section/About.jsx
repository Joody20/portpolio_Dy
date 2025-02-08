import { useState, useEffect, useRef } from "react";
import {
  GlobalStyle,
  Section,
  Title,
  ProfileImage,
  Keywords,
  InterViewTitle,
  InterViewWrapper,
  Box,
  InTitle,
  InDescription,
} from "../../styles/About/About.style";
import myIcon from "../../assets/images/icon-1.png";
import myIconHover from "../../assets/images/icon-3.png";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
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
      threshold: 0, // 50% 이상 보이면 트리거
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
        delay: 0.2,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
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
        <Title>About Me</Title>
        <ProfileImage
          src={isHovered ? myIconHover : myIcon} // 상태에 따라 이미지 변경
          alt="내 임티"
          onMouseEnter={() => setIsHovered(true)} // 마우스가 이미지 위로 올 때 상태 변경
          onMouseLeave={() => setIsHovered(false)} // 마우스가 이미지 밖으로 나갈 때 상태 변경
        />
        <Keywords>
          <span>#2001/10/19</span>
          <span>#loved123@naver.com</span>
          <span>#010-8337-2207</span>
        </Keywords>

        <motion.div
          variants={sectionVariants}
          initial="visible" // 바로 나타나게끔 설정
          animate={controls}
          className="flex flex-col gap-6"
          style={{ marginLeft: "630px" }}
        >
          <InterViewWrapper>
            <InterViewTitle>Interview.</InterViewTitle>

            <motion.div ref={addToRefs} variants={itemVariants}>
              <Box>
                <InTitle>Q. 자신의 성격은 어떠하다고 생각하는지?</InTitle>
                <InDescription>
                  일단 저의 성격은 매우 밝고 쾌활한 성격을 가지고 있으며 매사에
                  긍정적으로 생각하는 편입니다. 반면, 걱정이 많고 처음 시도하는
                  것에 두려워하는 단점을 가지고 있습니다. 그치만, 처음은 누구나
                  어렵고 어색하기에 저의 긍정적이고 밝은 성격을 통해 빠르게
                  적응하는 성격을 가지고 있습니다.
                </InDescription>
              </Box>
            </motion.div>

            <motion.div ref={addToRefs} variants={itemVariants}>
              <Box>
                <InTitle>Q. 프론트엔드 개발자가 되고자 하는 이유는?</InTitle>
                <InDescription>
                  저는 학부에서 배웠던 강의 중 웹 개발을 하는 프로젝트를 하면서
                  새로운 호기심과 이 분야에 대해 더 열심히 공부를 해보고 싶다는
                  생각이 들었습니다. 그 후에 계속 해서 스터디 및 여러 프로젝트를
                  해보면서 저에게 맞는 진로라고 생각이 들었습니다.
                </InDescription>
              </Box>
            </motion.div>

            <motion.div ref={addToRefs} variants={itemVariants}>
              <Box>
                <InTitle>Q. 어떤 프론트엔드가 되고자 노력할 것 인지?</InTitle>
                <InDescription>
                  여러 사용자들이 보는 화면들을 개발하고 구상하는 일을 한다면
                  자부심을 갖고 많은 사람들에게 이로운 웹,앱 화면들을 개발하고
                  싶습니다.
                </InDescription>
              </Box>
            </motion.div>
          </InterViewWrapper>
        </motion.div>
      </Section>
    </>
  );
};

export default About;
