import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Link } from "react-scroll";

const Hero = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#hero h1", { type: "words" });
    const descSplit = SplitText.create("#hero p", { type: "lines" });

    gsap.from(titleSplit.words, {
      opacity: 0,
      yPercent: 120,
      duration: 1,
      ease: "power3.out",
      stagger: 0.06,
    });

    gsap.from(descSplit.lines, {
      opacity: 0,
      yPercent: 50,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.25,
    });

    gsap.fromTo(
      "#hero-img",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.4 },
    );
  });

  return (
    <section className="relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-[#05040b]" />
      <div className="absolute -left-36 top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="parent relative py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="space-y-8 px-4 sm:px-0">
            <span className="inline-flex rounded-full border border-violet-400/30 bg-white/5 px-4 py-2 sm:text-[10px] text-[8px] uppercase tracking-[0.35em] text-violet-300">
              Focused on performance, accessibility, and clean design
            </span>

            <h1 className="sm:text-4xl text-2xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
              I’m a Software Engineer
            </h1>

            <p className="max-w-3xl text-sm md:text-xl sm:text-lg leading-relaxed text-slate-300">
              I build elegant, high-performance web applications with React,
              Angular, Tailwind CSS, NodeJs, ExpressJS and MongoDB. My focus is
              on polished interfaces, seamless interactions, and scalable
              digital products.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="contact"
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
                className="btn-primary cursor-pointer"
              >
                Hire Me
              </Link>
              <Link
                to="projects"
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
                className="btn-secondary cursor-pointer"
              >
                View Projects
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="experience-card p-5 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Experience
                </p>
                <p className="mt-3 md:text-3xl text-xl font-semibold text-white">
                  2 yrs
                </p>
              </div>
              <div className="experience-card p-5 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Projects
                </p>
                <p className="mt-3 md:text-3xl text-xl font-semibold text-white">
                  5+
                </p>
              </div>
              <div className="experience-card p-5 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Focus
                </p>
                <p className="mt-3 md:text-3xl text-xl font-semibold text-white">
                  Full Stack
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 md:p-6 p-3 shadow-[0_35px_120px_rgba(31,41,55,0.32)] backdrop-blur-2xl">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/80 md:p-6 p-3">
              <img
                src="/images/heroImg.png"
                alt="Hero"
                id="hero-img"
                className="h-full w-full rounded-[1.4rem] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 rounded-b-[1.4rem] bg-gradient-to-t from-slate-950/90 to-transparent px-6 py-5 text-white">
                <p className="sm:text-sm text-xs text-slate-300 font-bold">
                  Software Engineer
                </p>
                <h2 className="md:text-xl sm:text-lg text-sm font-semibold">
                  Design-driven & Fullstack solutions
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
