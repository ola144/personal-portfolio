import { useEffect, useState, useRef } from "react";
import Title from "./Title";
import { projectList, type IProject } from "../model/projects";
import { tns, type TinySliderInstance } from "tiny-slider";

const Project = () => {
  const descprition =
    "Whether you have a design idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality.";

  const [projects, setProjects] = useState<IProject[]>([]);
  const sliderRef = useRef(null);
  const sliderInstance = useRef<TinySliderInstance | null>(null);

  useEffect(() => {
    setProjects(projectList);

    if (!sliderRef.current) return;

    sliderInstance.current = tns({
      container: sliderRef.current,
      items: 3,
      gutter: 10,
      slideBy: 1,
      autoplay: false,
      autoplayTimeout: 3000,
      autoplayButtonOutput: false,

      controls: true, // arrows
      controlsText: ["←", "→"],

      nav: true, // 👈 pagination dots
      navPosition: "bottom",

      mouseDrag: true,
      touch: true,

      loop: true,

      responsive: {
        0: { items: 1 },
        640: { items: 2 },
        1024: { items: 3 },
      },
    });

    return () => {
      if (sliderInstance.current) {
        sliderInstance.current.destroy();
      }
    };
  }, []);

  // const initializeSlider = () => {
  //   if (!sliderRef.current) return;

  // };

  //  pauseSlider() {
  //   this.slideInstance?.pause();
  // }

  // playSlider() {
  //   this.slideInstance?.play();
  // }

  return (
    <section className="parent parent2">
      <Title title1="" title2="my projects" decscription={descprition} />

      <div className="flex gap-1 relative w-full" ref={sliderRef}>
        {/* <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-x-8 gap-y-10 w-full"> */}
        {projects.map((project, index) => (
          <div key={index} className="w-full h-fit">
            {project.type === "shop" && (
              <img
                src="/images/online-shop.JPG"
                alt={project.title}
                className="w-full lg:h-[40%] md:h-[200px] rounded-xl mb-5"
              />
            )}
            {project.type === "exlusive" && (
              <img
                src="/images/exclusive-landing.JPG"
                alt={project.title}
                className="w-full lg:h-[40%] md:h-[200px] rounded-xl mb-5"
              />
            )}
            {project.type === "task" && (
              <img
                src="/images/task-app.JPG"
                alt={project.title}
                className="w-full h-[40%] md:h-[200px] rounded-xl mb-5"
              />
            )}
            {project.type === "mirror" && (
              <img
                src="/images/mirror-project.JPG"
                alt={project.title}
                className="w-full h-[40%] md:h-[200px] rounded-xl mb-5"
              />
            )}

            <h1 className="text-gray-800 font-bold md:text-lg text-sm mb-5 capitalize">
              {project.title}
            </h1>
            <p className="md:text-sm text-xs leading-normal text-gray-400 font-normal text-justify mb-5">
              {project.description}
            </p>
            <a
              href={project.liveUrl}
              target="_blank"
              className="bg-black w-fit py-2 px-3 text-white uppercase text-sm rounded-lg"
            >
              take a look at live demo
            </a>
          </div>
        ))}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Project;
