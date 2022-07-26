import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleClick = () => {
    setToggleNav((prevState) => !prevState);
  };
  const handleClose = () => {
    setToggleNav((prevState) => !prevState);
  };
  return (
    <div className="w-screen h-[80px] drop-shadow-lg z-10 fixed bg-zinc-200 ">
      <div className="px-4 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
            <li>
              <Link
                className="hover:text-indigo-600 hover:cursor-pointer"
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-indigo-600"
                offset={0}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                activeClass="text-indigo-600"
                className="hover:text-indigo-600 hover:cursor-pointer"
                to="about"
                smooth={true}
                offset={-120}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-indigo-600 hover:cursor-pointer"
                to="support"
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass="text-indigo-600"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-indigo-600 hover:cursor-pointer"
                to="platform"
                smooth={true}
                offset={-150}
                duration={500}
                spy={true}
                activeClass="text-indigo-600"
              >
                Platform
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-indigo-600 hover:cursor-pointer"
                to="pricing"
                smooth={true}
                offset={-50}
                duration={500}
                spy={true}
                activeClass="text-indigo-600"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:space-x-4 pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-9 py-2">Sing Up</button>
        </div>
        <div className="md:hidden ">
          {!toggleNav && (
            <MenuIcon className="w-8 cursor-pointer " onClick={handleClick} />
          )}
          {toggleNav && (
            <XIcon className="w-8 cursor-pointer" onClick={handleClick} />
          )}
        </div>
      </div>
      <ul
        className={`flex flex-col absloute bg-zinc-200 w-full px-8 ${
          !toggleNav ? "hidden" : ""
        }`}
      >
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            spy={true}
            activeClass="text-indigo-600"
            to="home"
            smooth={true}
            duration={500}
            onClick={handleClose}
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            spy={true}
            activeClass="text-indigo-600"
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
            onClick={handleClose}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            spy={true}
            activeClass="text-indigo-600"
            to="support"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={handleClose}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            spy={true}
            activeClass="text-indigo-600"
            to="platform"
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleClose}
          >
            Platform
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            spy={true}
            activeClass="text-indigo-600"
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={handleClose}
          >
            Pricing
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="border-[2px] border-indigo-600 bg-transparent text-indigo-600 px-6 py-3 mb-4">
            Sign In
          </button>
          <button className="px-9 py-3 ">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};
export default Navbar;
