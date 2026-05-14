import { useEffect, useState } from "react";
import Title from "./Title";
import { skillList, type ISkills } from "../model/skills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Skills = () => {
  const description =
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

      "<",
    );

    scrollTimeline.to(
      ".skill-grid div",
      {
        opacity: 1,
        duration: 5,
        ease: "power1.inOut",
        stagger: 0.2,
      },

      "<",
    );
  });

  return (
    <section className="parent parent2" id="skill">
      <Title title1="my skills" title2="What I Do" description={description} />

      <div className="skill-grid">
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
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="text-center w-full">
                <div className="w-11 h-11 mx-auto text-white bg-black rounded-full p-4 mb-5 flex items-center justify-center text-xl">
                  <i className={skill.icon}></i>
                </div>

                <h1 className="capitalize text-white xl:text-2xl lg:text-xl sm:text-lg text-sm font-bold mb-5">
                  {skill.title}
                </h1>
                <p className="text-gray-400 font-normal leading-normal text-sm">
                  {skill.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center lg:w-1/2 md:w-3/4 mx-auto my-12 skill-card rounded-xl pt-5 relative">
        {/* <div className="absolute w-1/2 bottom-10 translate-x-1/2 -translate-y-[30px] right-[53%] z-[500] ">
          <img src="public/images/logo2.png" alt="logo" className="w-14  mx-auto rounded-full" />
        </div> */}
        <div className="relative">
          <img
            src="public/images/portfolio-skill.png"
            alt="skills"
            className="w-full  mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
