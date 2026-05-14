import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const navRef = useRef<HTMLElement>(null);
  const smallNavRef = useRef<HTMLUListElement>(null);
  const nav2Ref = useRef<HTMLDivElement>(null);
  const shadow = useRef<HTMLDivElement>(null);
  const [hideCloseIcon, setHideCloseIcon] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        navRef.current?.classList.add("backdrop-blur-xl", "bg-slate-950/80");
        nav2Ref.current?.classList.add("backdrop-blur-xl", "bg-slate-950/90");
      } else {
        navRef.current?.classList.remove("backdrop-blur-xl", "bg-slate-950/80");
        nav2Ref.current?.classList.remove(
          "backdrop-blur-xl",
          "bg-slate-950/90",
        );
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggleNav = () => {
    if (
      smallNavRef.current?.classList.contains("translate-y-[-150%]") &&
      shadow.current?.classList.contains("hidden")
    ) {
      smallNavRef.current?.classList.add("-translate-y-5");
      smallNavRef.current?.classList.remove("translate-y-[-150%]");
      shadow.current?.classList.add("block");
      shadow.current?.classList.remove("hidden");
    } else {
      smallNavRef.current?.classList.remove("-translate-y-5");
      smallNavRef.current?.classList.add("translate-y-[-150%]");
      shadow.current?.classList.add("hidden");
      shadow.current?.classList.remove("block");
    }

    setHideCloseIcon((prev) => !prev);
  };

  return (
    <>
      <nav
        className="parent fixed top-0 left-0 z-50 hidden w-full md:block py-3"
        ref={navRef}
      >
        <div className="flex items-center justify-between">
          <Link
            activeClass="border-0"
            to="hero"
            smooth={true}
            spy={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            <img
              src="public/images/logo2.png"
              alt="logo"
              className="w-14 rounded-full"
            />
          </Link>

          <div className="flex items-center gap-10 text-sm font-semibold text-slate-200">
            <Link
              activeClass="active"
              to="hero"
              smooth={true}
              spy={true}
              duration={500}
              offset={-100}
              className="cursor-pointer transition hover:text-white"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="projects"
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
              className="cursor-pointer transition hover:text-white"
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="skills"
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
              className="cursor-pointer transition hover:text-white"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
              className="cursor-pointer transition hover:text-white"
            >
              Contact
            </Link>
          </div>

          <Link
            to="contact"
            smooth={true}
            spy={true}
            duration={500}
            offset={-70}
            className="inline-flex items-center rounded-full bg-violet-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-400 cursor-pointer"
          >
            Let’s Talk
          </Link>
        </div>
      </nav>

      <nav className="w-full fixed top-0 left-0 z-[600] md:hidden">
        <div
          className="flex items-center justify-between sm:px-10 px-5  text-white"
          ref={nav2Ref}
        >
          <Link
          activeClass="border-0"
            to="hero"
            smooth={true}
            spy={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            <img
              src="public/images/logo2.png"
              alt="logo"
              className="w-14 rounded-full"
            />
          </Link>

          <button
            className="text-white text-2xl"
            onClick={() => handleToggleNav()}
            aria-label="Toggle navigation"
          >
            {hideCloseIcon ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </div>

        <ul
          className="absolute left-0 right-0 top-20 translate-y-[-150%] bg-slate-950/95 px-5 py-6 text-slate-200 transition-transform duration-500 h-fit z-[-500]"
          ref={smallNavRef}
        >
          {/* absolute left-0 right-0 top-20 translate-y-[-100%]*/}
          <li className="border-b border-white/10 pb-4 mb-4">
            <Link
              activeClass="text-white"
              to="hero"
              smooth={true}
              spy={true}
              duration={500}
              offset={-100}
              className="block text-lg font-semibold transition hover:text-white cursor-pointer"
              onClick={handleToggleNav}
            >
              Home
            </Link>
          </li>
          <li className="border-b border-white/10 pb-4 mb-4">
            <Link
              activeClass="text-white"
              to="projects"
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
              className="block text-lg font-semibold transition hover:text-white cursor-pointer"
              onClick={handleToggleNav}
            >
              Projects
            </Link>
          </li>
          <li className="border-b border-white/10 pb-4 mb-4">
            <Link
              activeClass="text-white"
              to="skills"
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
              className="block text-lg font-semibold transition hover:text-white cursor-pointer"
              onClick={handleToggleNav}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="text-white"
              to="contact"
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
              className="block rounded-full bg-violet-500 px-4 py-3 text-center font-semibold text-white transition hover:bg-violet-400 cursor-pointer"
              onClick={handleToggleNav}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div
          ref={shadow}
          className="fixed inset-0 bg-black/50 z-[-600] hidden transition-colors duration-500"
          onClick={handleToggleNav}
        ></div>
      </nav>
    </>
  );
};

export default Header;
