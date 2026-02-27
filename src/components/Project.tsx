import { useEffect, useRef, useState } from "react";
import Title from "./Title";
import { projectList, type IProject } from "../model/projects";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";

const Project = () => {
  const descprition =
    "Whether you have a design idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality.";

  const [projects, setProjects] = useState<IProject[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setProjects(projectList);
  }, []);

  return (
    <section className="parent parent2">
      <Title title1="" title2="my projects" decscription={descprition} />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay.start()}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-fit flex flex-col gap-1">
              {project.type === "shop" && (
                <img
                  src="/images/online-shop.JPG"
                  alt={project.title}
                  className="w-full lg:h-[40%] md:h-[200px] rounded-xl"
                />
              )}
              {project.type === "exlusive" && (
                <img
                  src="/images/exclusive-landing.JPG"
                  alt={project.title}
                  className="w-full lg:h-[40%] md:h-[200px] rounded-xl"
                />
              )}
              {project.type === "task" && (
                <img
                  src="/images/task-app.JPG"
                  alt={project.title}
                  className="w-full h-[40%] md:h-[200px] rounded-xl"
                />
              )}
              {project.type === "mirror" && (
                <img
                  src="/images/mirror-project.JPG"
                  alt={project.title}
                  className="w-full h-[40%] md:h-[200px] rounded-xl"
                />
              )}

              <h1 className="text-gray-800 font-bold md:text-lg text-sm capitalize">
                {project.title}
              </h1>
              <p className="md:text-sm text-xs leading-normal text-gray-400 font-normal text-justify">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Project;
