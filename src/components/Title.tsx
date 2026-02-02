import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Title = ({ title1, title2, decscription }: any) => {
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
      { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut" }
    );
  });

  return (
    <div className="text-center mb-8" id="title">
      <h1 className="mb-5 uppercase sm:text-xl text-lg font-bold text-gray-600">
        {title1}
      </h1>
      <h1 className="mb-5 capitalize text-3xl sm:text-4xl font-bold text-gray-900">
        {title2}
      </h1>
      <p className="md:w-1/2 w-full mx-auto sm:text-lg text-sm leading-normal text-gray-400">
        {decscription}
      </p>
    </div>
  );
};

export default Title;
