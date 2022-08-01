import React from "react";
import heroImg from "../assets/cyber-bg.png";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/outline";
const Hero = () => {
  return (
    <section
      name="hero"
      className="w-full h-screen flex flex-col bg-zinc-200 items-center justify-between mb-16 pt-16"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center items-center md:items-start w-full py-8 px-2">
          <h3 className="text-2xl">Unique Sequencing & Production</h3>
          <h1 className="font-bold text-4xl lg:text-7xl py-3 ">Cloud Management</h1>
          <h3 className="text-2xl">This is our Tech brand.</h3>
          <button className="my-4 py-3 px-6 w-full sm:w-[60%]">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={heroImg} alt="" />
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-[45%] text-center border-2 bg-zinc-200 border-slate-300 self-center shadow-xl rounded-xl bg-salate-200 py-4 mx-1 px-2 mb-32">
        <h3>Data Services</h3>
        <ul className="flex justify-between px-4 py-2 flex-wrap items-start">
          <li className="flex text-slate-500 "><CloudUploadIcon className="w-6 text-indigo-600" />App Security</li>
          <li className="flex text-slate-500 "><DatabaseIcon className="w-6 text-indigo-600" />Dashboard Design</li>
          <li className="flex text-slate-500 "><ServerIcon className="w-6 text-indigo-600" />Cloud Data</li>
          <li className="mr-[6.6rem] flex  text-slate-500 md:mr-0 "><PaperAirplaneIcon className="w-6 text-indigo-600" />API</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
