// import HeroImg from "../assets/images/heroImg.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="parent">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 items-start mx-auto w-fit">
        <div className="mx-auto w-fit lg:pl-10 md:mt-10 mt-0">
          <h1 className="capitalize xl:text-6xl lg:text-4xl md:text-4xl sm:text-xl text-xl font-bold text-gray-800 mb-5 w-full text-center md:text-left">
            Welocome to my <br className="hidden lg:block" /> frontend web
            development
            <br className="hidden lg:block" /> portfolio!
          </h1>
          <p className="text-gray-400 md:text-xl sm:text-lg text-sm font-normal leading-normal text-justify">
            I'm <b>Oladimeji Agbaje</b>, a passionate frontend developer based
            in Nigeria. Here, you'll get a glimpse of my journey in the world of
            web development, where creativity meets functionality.
          </p>
          <div className="mt-8">
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-white bg-black w-fit py-2 px-3 font-bold rounded-lg hover:bg-gray-500"
            >
              <i className="fa fa-address-book"></i> Get In Touch
            </Link>
          </div>
        </div>
        {/* <div className="w-fit mx-auto"> */}
        <img
          src="/heroImg.png"
          className="w-[500px] h-[500px] mx-auto rounded-2xl"
          alt="Hero Image"
        />
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;
