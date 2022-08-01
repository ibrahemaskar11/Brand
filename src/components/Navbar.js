import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const toggleNavHandler = () => {
    setShowNav((prevState) => !prevState);
  };
  const handleClose = () => {
    setShowNav(false)
  }
  return (
    <nav
      name="nav"
      className="w-full h-[80px]  fixed z-10 drop-shadow-lg bg-zinc-200"
    >
      <div className="flex flex-row my-4 md:my-3 mx-4 items-center justify-between">
        <div className="flex items-center md:space-x-4">
          <h1 className="text-3xl md:text-4xl font-bold uppercase cursor-default">
            Brand.
          </h1>
          <ul className="hidden lg:flex">
            <li>
              <Link
                className="hover:text-indigo-600 hover:cursor-pointer"
                to="hero"
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
                offset={-50}
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
                offset={-50}
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
                offset={-30}
                duration={500}
                spy={true}
                activeClass="text-indigo-600"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex space-x-8 items-center">
          <button className="bg-transparent border-none text-black">
            Sign In
          </button>
          <button className="px-9 py-2">Sign Up</button>
        </div>
        <div className="lg:hidden">
          {!showNav && (
            <MenuIcon
              onClick={toggleNavHandler}
              className="w-8 mt-2 cursor-pointer"
            />
          )}
          {showNav && (
            <XIcon
              onClick={toggleNavHandler}
              className="w-8 mt-2 cursor-pointer"
            />
          )}
        </div>
      </div>
      {showNav && (
        <div className="lg:hidden flex flex-col bg-zinc-200 absolute w-full px-8">
          <ul className="">
            <li className="border-b-2 border-zinc-300 w-full">
              <Link
                spy={true}
                activeClass="text-indigo-600"
                to="hero"
                smooth={true}
                duration={500}
                onClick={handleClose}
                offset={0}
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
                offset={-60}
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
                offset={-50}
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
                offset={0}
                duration={500}
                onClick={handleClose}
              >
                Pricing
              </Link>
            </li>
          </ul>
          <div className="flex flex-col md:hidden my-4 space-y-4 ">
            <button className="bg-transparent text-indigo-600 py-3">
              Sign In
            </button>
            <button className="py-3">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
