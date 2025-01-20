// import React, { useState } from "react";
// import { useMediaQuery } from "react-responsive";
// import Header from "./Header";
// import Footer from "./Footer";
// import Home from "./section/Home";
// import DeskNavMenu from "./DeskNavMenu";
// import About from "./section/About";
// import Projects from "./section/Projects";
// import Contact from "./section/Contact";
// import AutoScrollUp from "./AutoScrollUp";

// function Layout() {
//   const [isVisible, setVisible] = useState(true); // 다른 섹션의 가시성 관리
//   const [isScrollUp, setIsScrollUp] = useState(false);
//   const [showSections, setShowSections] = useState(false); // 다른 섹션의 표시 여부 관리
//   const isTabletUp = useMediaQuery({
//     query: "(min-width:1024px)",
//   });

//   const handleScroll = (e) => {
//     const scrollMode = e.deltaY;
//     if (scrollMode > 0) {
//       setVisible(false);
//       setIsScrollUp(false);
//       setShowSections(true); // 스크롤 내려갈 때 다른 섹션들 보이기
//     } else {
//       setVisible(true);
//       setIsScrollUp(true);
//       setShowSections(false); // 스크롤 올릴 때 다른 섹션들 숨기기
//     }
//   };

//   return (
//     <>
//       {/* <Header /> */}
//       {/* {isTabletUp && <DeskNavMenu isVisible={isVisible} />} */}
//       {/* {showSections && <AutoScrollUp isScrollUp={isScrollUp} />} */}

//       <main onWheel={handleScroll}>
//         <Home />
//         {showSections && (
//           <>
//             <About />
//             <Projects />
//             <Contact />
//           </>
//         )}
//       </main>
//       {/* <Footer /> */}
//     </>
//   );
// }

// export default Layout;

import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Home from "./section/Home";
import About from "./section/About";
import Info from "./section/Info";
import Projects from "./section/Projects";

function Layout() {
  const isTabletUp = useMediaQuery({
    query: "(min-width:1024px)", // 화면 크기에 따라 표시 여부를 제어할 수 있습니다
  });

  const aboutRef = useRef(null); // About 섹션을 참조하기 위한 useRef

  const infoRef = useRef(null);

  const ProjectsRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop, // About 섹션의 위치로 스크롤
        behavior: "smooth", // 부드럽게 스크롤
      });
    }
  };

  return (
    <>
      <main>
        <Home />
        {/* About 섹션을 참조하는 요소 */}
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={infoRef}>
          <Info />
        </section>
        <section ref={ProjectsRef}>
          <Projects />
        </section>
      </main>
    </>
  );
}

export default Layout;
