import { Element } from "react-scroll";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import { useEffect, useRef } from "react";
import Skills from "../components/Skills";

const PortfolioPage = () => {
  const arrowUp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        arrowUp.current?.classList.add("showArrowUp");
      } else {
        arrowUp.current?.classList.remove("showArrowUp");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-[12vh]">
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="experience">
        <Resume />
      </Element>
      <Element name="projects">
        <Project />
      </Element>
      <Element name="skills">
        <Skills/>
      </Element>
      <Element name="contact">
        <Contact />
      </Element>

      <div
        className="fixed bottom-5 right-5 z-[500] hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-violet-500 text-white shadow-[0_20px_60px_rgba(124,58,237,0.25)] transition hover:bg-violet-400 "
        onClick={handleScrollUp}
        ref={arrowUp}
      >
        <i className="fa fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default PortfolioPage;
