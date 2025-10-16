import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="parent parent2 border-t-2 border-gray-400 py-8">
      <div className="flex items-center flex-wrap lg:flex-nowrap lg:justify-between justify-center gap-y-5">
        <p className="text-gray-400 font-normal sm:text-sm text-xs sm:text-left text-center">
          © {new Date().getFullYear()} Developed with ReactJS and TailwindCSS by
          Creative OlaTech.
        </p>
        <div className="flex items-center gap-3 text-gray-400 font-bold sm:text-sm text-xs">
          <Link
            activeClass="active"
            to="hero"
            smooth={true}
            spy={true}
            duration={500}
            offset={-100}
            className="hover:text-gray-500 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            smooth={true}
            spy={true}
            duration={500}
            offset={-70}
            className="hover:text-gray-500 transition-all duration-300 ease-in-out cursor-pointer "
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="projects"
            smooth={true}
            spy={true}
            duration={500}
            offset={-60}
            className="hover:text-gray-500 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            smooth={true}
            spy={true}
            duration={500}
            offset={-70}
            className="hover:text-gray-500 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Contact
          </Link>
          <a
            href="https://github.com/ola144/personal-portfolio"
            target="_blank"
            className="cursor-pointer text-white bg-black w-fit py-2 px-3 font-bold rounded-lg hover:bg-gray-500 block text-xs"
          >
            <i className="fa fa-github"></i> View On Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
