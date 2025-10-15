import { Element } from "react-scroll";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import { useEffect, useRef } from "react";

const PortfolioPage = () => {
  const arrowUp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        arrowUp.current?.classList.add("showArrowUp");
      } else {
        arrowUp.current?.classList.remove("showArrowUp");
      }
    });
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-[15vh]">
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="skills">
        <Skills />
        <Resume />
      </Element>
      <Element name="projects">
        <Project />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>

      <div
        className="fixed top-[100%] right-2 bg-black hover:bg-gray-600 text-white w-12 h-12 rounded-full p-2 justify-center items-center text-xl z-[500] cursor-pointer transition-all ease-in duration-200"
        onClick={() => handleScrollUp()}
        ref={arrowUp}
      >
        <i className="fa fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default PortfolioPage;
