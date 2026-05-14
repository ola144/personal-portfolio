import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Title = ({ title1, title2, description }: any) => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#title h1", {
      type: "words",
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#title",
        start: "top center",
      },
    });

    timeline.fromTo(
      titleSplit.words,
      { opacity: 0, yPercent: 50 },
      { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut" },
    );
  });

  return (
    <div className="text-center mb-10" id="title">
      {title1 && (
        <p className="mb-3 uppercase md:text-sm text-xs tracking-[0.4em] text-violet-300/75">
          {title1}
        </p>
      )}
      <h2 className="mb-5 text-2xl md:text-4xl font-bold text-white">
        {title2}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl md:text-sm text-xs leading-relaxed text-slate-300 md:w-3/4 sm:w-3/4 w-full">
          {description}
        </p>
      )}
    </div>
  );
};

export default Title;
