import { useEffect, useState } from "react";
import Title from "./Title";
import { projectList, type IProject } from "../model/projects";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper/types";

const Project = () => {
  const description =
    "Whether you have a design idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality.";

  const [projects, setProjects] = useState<IProject[]>([]);
  // const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setProjects(projectList);
  }, []);

  return (
    <section className="parent parent2 py-20">
      <div className="max-w-7xl mx-auto">
        <Title
          title1="Example Projects"
          title2="Projects I’ve built"
          description={description}
        />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          // onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card overflow-hidden rounded-[2rem]">
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 flex items-center justify-center opacity-80 ">
                    <img
                      src={project.image}
                      alt="project image"
                      className="w-full object-cover"
                    />

                    {/* <span className="text-xs uppercase tracking-[0.35em] bg-violet-500 text-white px-2 rounded-b-xl pb-1 font-bold absolute right-0 pr-3 top-0">
                      Featured
                    </span> */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="md:text-lg text-sm font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-slate-300 leading-relaxed h-40 md:text-sm text-xs text-justify">
                    {project.description}
                  </p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-400 hover:bg-violet-500/15"
                  >
                    View live
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
