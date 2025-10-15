import { useEffect, useState } from "react";
import Title from "./Title";
import { projectList, type IProject } from "../model/projects";

import busBooking from "../assets/images/busBooking-app.jpg";
import taskApp from "../assets/images/task-app.jpg";
import onlineShop from "../assets/images/online-shop.jpg";

const Project = () => {
  const descprition =
    "Whether you have a design idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality.";

  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    setProjects(projectList);
  }, []);

  return (
    <section className="parent parent2">
      <Title title1="" title2="my projects" decscription={descprition} />
      <div className="">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-x-8 gap-y-10 w-full">
          {projects.map((project, index) => (
            <div key={index} className="w-full h-fit">
              {project.type === "shop" && (
                <img
                  src={onlineShop}
                  alt={project.title}
                  className="w-full lg:h-[40%] md:h-[200px] rounded-xl mb-5"
                />
              )}
              {project.type === "task" && (
                <img
                  src={taskApp}
                  alt={project.title}
                  className="w-full h-[40%] md:h-[200px] rounded-xl mb-5"
                />
              )}
              {project.type === "bus" && (
                <img
                  src={busBooking}
                  alt={project.title}
                  className="w-full h-[40%] md:h-[200px] rounded-xl mb-5"
                />
              )}

              <h1 className="text-gray-800 font-bold text-xl mb-5 capitalize">
                {project.title}
              </h1>
              <p className="text-sm leading-normal text-gray-400 font-normal text-justify mb-5">
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
        </div>
      </div>
    </section>
  );
};

export default Project;
