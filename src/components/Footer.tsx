import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="parent parent2 border-t border-white/10 py-10 text-slate-400">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-center text-sm lg:text-left">
          © {new Date().getFullYear()} Developed with ReactJS and TailwindCSS by
          Creative OlaTech.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
          <Link
            activeClass="border-0"
            to="hero"
            smooth={true}
            spy={true}
            duration={500}
            offset={-100}
            className="transition hover:text-white cursor-pointer"
          >
            Home
          </Link>
          <Link
           activeClass="border-0"
            to="projects"
            smooth={true}
            spy={true}
            duration={500}
            offset={-70}
            className="transition hover:text-white cursor-pointer"
          >
            Projects
          </Link>
          <Link
           activeClass="border-0"
            to="skills"
            smooth={true}
            spy={true}
            duration={500}
            offset={-70}
            className="transition hover:text-white cursor-pointer"
          >
            Skills
          </Link>
          <Link
           activeClass="border-0"
            to="contact"
            smooth={true}
            spy={true}
            duration={500}
            offset={-70}
            className="transition hover:text-white cursor-pointer"
          >
            Contact
          </Link>
          <a
            href="https://github.com/ola144/personal-portfolio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-violet-400 hover:bg-violet-500/15"
          >
            <i className="fa fa-github" /> View on Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
