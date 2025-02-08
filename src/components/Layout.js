import React, { useEffect, useRef } from "react";
// import { useMediaQuery } from "react-responsive";
import Home from "./section/Home";
import About from "./section/About";
import Info from "./section/Info";
import Projects from "./section/Projects";
import Footer from "./section/Footer";

function Layout() {
  // const isTabletUp = useMediaQuery({
  //   query: "(min-width:1024px)",
  // });

  const aboutRef = useRef(null);
  const infoRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutOffset = aboutRef.current.offsetTop - window.innerHeight / 2;
      const projectsOffset =
        projectsRef.current.offsetTop - window.innerHeight / 2;

      // About 섹션에 도달했을 때
      if (scrollPosition >= aboutOffset && scrollPosition < projectsOffset) {
        console.log("About 섹션에 도달!");
      }

      // Projects 섹션에 도달했을 때
      if (scrollPosition >= projectsOffset) {
        console.log("Projects 섹션에 도달!");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const scrollToAbout = () => {
  //   if (aboutRef.current) {
  //     window.scrollTo({
  //       top: aboutRef.current.offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <>
      <main>
        <section>
          <Home />
        </section>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={infoRef}>
          <Info />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={footerRef}>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default Layout;
