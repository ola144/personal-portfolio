import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const navRef = useRef<HTMLElement>(null);
  const smallNavRef = useRef<HTMLUListElement>(null);
  const nav2Ref = useRef<HTMLDivElement>(null);
  const [hideCloseIcon, setHideCloseIcon] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (scrollY > 0) {
        navRef.current?.classList.add("scrollBg");
        nav2Ref.current?.classList.add("scrollBg");
      } else {
        navRef.current?.classList.remove("scrollBg");
        nav2Ref.current?.classList.remove("scrollBg");
      }
    });
  }, []);

  const handleToggleNav = () => {
    if (hideCloseIcon === false) {
      smallNavRef.current?.classList.toggle("toggleNav");
      setHideCloseIcon(true);
    } else {
      smallNavRef.current?.classList.toggle("toggleNav");
      setHideCloseIcon(false);
    }
  };

  return (
    <>
      <nav
        className="parent py-5 fixed top-0 left-0 z-50 hidden md:block"
        ref={navRef}
      >
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            smooth={true}
            spy={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            <h1 className="text-black font-extrabold text-2xl">OlaTech</h1>
          </Link>

          <ul className="flex gap-5 text-black font-bold text-lg menu">
            <Link
              activeClass="active"
              to="hero"
              smooth={true}
              spy={true}
              duration={500}
              offset={-100}
              className="cursor-pointer"
            >
              <i className="fa fa-home"></i> Home
            </Link>
            <Link
              activeClass="active"
              to="skills"
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
              className="cursor-pointer"
            >
              <i className="fa fa-code"></i> Skills
            </Link>
            <Link
              activeClass="active"
              to="projects"
              smooth={true}
              spy={true}
              duration={500}
              offset={-60}
              className="cursor-pointer"
            >
              <i className="fa fa-tasks"></i> Projects
            </Link>
          </ul>
          <div className="">
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-white bg-black w-fit py-2 px-3 font-bold rounded-lg hover:bg-gray-500"
            >
              <i className="fa fa-address-book"></i> Contact
            </Link>
          </div>
        </div>
      </nav>

      <nav className="w-full  fixed top-0 left-0 z-[500] md:hidden ">
        <div
          className="block justify-between items-center  sm:px-10 px-5 py-3"
          ref={nav2Ref}
        >
          <Link
            to="hero"
            smooth={true}
            spy={true}
            duration={500}
            offset={-100}
            className="cursor-pointer "
          >
            <h1 className="text-black font-extrabold text-2xl">OlaTech</h1>
          </Link>

          <ul
            className="block gap-5 text-black font-bold text-lg absolute -top-60 left-0 w-full -z-40  bg-white sm:px-10 px-5 pb-5 transition-all ease-in-out duration-700"
            ref={smallNavRef}
          >
            <div className="block relative">
              <Link
                activeClass="active"
                to="hero"
                smooth={true}
                spy={true}
                duration={500}
                offset={-100}
                className="cursor-pointer block my-4 border-t-[1px] border-gray-700 pt-2"
                onClick={() => handleToggleNav()}
              >
                <i className="fa fa-home"></i> Home
              </Link>
              <Link
                activeClass="active"
                to="skills"
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
                className="cursor-pointer block my-4"
                onClick={() => handleToggleNav()}
              >
                <i className="fa fa-code"></i> Skills
              </Link>
              <Link
                activeClass="active"
                to="projects"
                smooth={true}
                spy={true}
                duration={500}
                offset={-60}
                className="cursor-pointer block my-4"
                onClick={() => handleToggleNav()}
              >
                <i className="fa fa-tasks"></i> Projects
              </Link>
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-white bg-black w-fit py-2 px-3 font-bold rounded-lg hover:bg-gray-500 block my-4"
                onClick={() => handleToggleNav()}
              >
                <i className="fa fa-address-book"></i> Contact
              </Link>
            </div>
          </ul>

          {hideCloseIcon ? (
            <i
              className="fa fa-times navIcon"
              onClick={() => handleToggleNav()}
            ></i>
          ) : (
            <i
              className="fa fa-navicon  navIcon"
              onClick={() => handleToggleNav()}
            ></i>
          )}
        </div>
      </nav>
      {hideCloseIcon && (
        <div
          onClick={() => handleToggleNav()}
          className="fixed top-0 left-0 md:hidden block bg-black/5 w-full h-screen"
        ></div>
      )}
    </>
  );
};

export default Header;
