import { useEffect, useState } from "react";
import Title from "./Title";
import { skillList, type ISkills } from "../model/skills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Skills = () => {
  const descprition =
    "I'm not just a developer; I'm a digital dreamweaver. Crafting immersive online experiences is not just a job but my calling. Discover below how I can help you.";

  const [skills, setSkills] = useState<ISkills[]>([]);

  useEffect(() => {
    setSkills(skillList);
  }, []);

  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#skill",
        start: "top center",
      },
    });

    scrollTimeline.to(
      ".skill-grid div",
      {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.4,
      },
      "<"
    );
  });

  return (
    <section className="parent parent2" id="skill">
      <Title title1="my skills" title2="what i do" decscription={descprition} />

      <div className="">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-16 gap-y-10 w-full skill-grid">
          {skills.map((skill, index) => (
            <div key={index} className="text-center w-full">
              <div className="w-11 h-11 mx-auto text-white bg-black rounded-full p-4 mb-5 flex items-center justify-center text-xl">
                <i className={skill.icon}></i>
              </div>

              <h1 className="capitalize text-black xl:text-2xl lg:text-xl sm:text-lg text-lg font-bold mb-5">
                {skill.title}
              </h1>
              <p className="text-gray-400 font-normal leading-normal">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
