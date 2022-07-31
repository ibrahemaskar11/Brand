import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const toggleNavHandler = () => {
    setShowNav((prevState) => !prevState);
  };
  return (
    <nav name="nav" className="w-full h-[80px]  fixed z-10 drop-shadow-lg bg-zinc-200">
      <div className="flex flex-row my-4 md:my-3 mx-4 items-center justify-between">
        <div className="flex items-center md:space-x-4">
          <h1 className="text-3xl md:text-4xl font-bold uppercase cursor-default">Brand.</h1>
          <ul className="hidden lg:flex">
            <li className="hover:text-indigo-600 hover:cursor-pointer">Home</li>
            <li className="hover:text-indigo-600 hover:cursor-pointer">
              About
            </li>
            <li className="hover:text-indigo-600 hover:cursor-pointer">
              Support
            </li>
            <li className="hover:text-indigo-600 hover:cursor-pointer">
              Platform
            </li>
            <li className="hover:text-indigo-600 hover:cursor-pointer">
              Pricing
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
      {showNav && <div className="lg:hidden flex flex-col bg-zinc-200 absolute w-full px-8">
        <ul className="">
          <li className=" border-b-2 border-salate-600 w-full">Home</li>
          <li className=" border-b-2 border-salate-600 w-full">About</li>
          <li className=" border-b-2 border-salate-600 w-full">Support</li>
          <li className=" border-b-2 border-salate-600 w-full">Platform</li>
          <li className=" border-b-2 border-salate-600 w-full">Pricing</li>
        </ul>
        <div className="flex flex-col md:hidden my-4 space-y-4 ">
          <button className="bg-transparent text-indigo-600 py-3">Sign In</button>
          <button className="py-3">Sign Up</button>
        </div>
      </div>}
    </nav>
  );
}

export default Navbar;
