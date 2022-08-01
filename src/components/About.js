import React from "react";

function About() {
  return (
    <section name="about"  className="py-20 sm:py-24 w-full">
      <div className="mx-auto max-w-[1240px] flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-4xl sm:text-5xl mb-8">
          Trusted by developers across the world
        </h1>
        <h3 className="text-slate-500 text-xl sm:text-3xl mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut id alias
          repudiandae a error qui fugiat deleniti accusamus dicta consequatur.
        </h3>
        <div className="grid grid-cols-1 gap-1 space-y-4 md:space-y-0 md:grid-cols-3 text-center px-2  justify-center items-center ">
          <div className="flex flex-col border w-sm py-8 rounded-xl shadow-xl px-32 mx-2">
            <p className="text-6xl text-indigo-600 font-bold mb-4">100%</p>
            <p className="text-slate-500">Completion</p>
          </div>
          <div className="flex flex-col border w-sm py-8 rounded-xl shadow-xl px-32 mx-2">
            <p className="text-6xl text-indigo-600 font-bold mb-4">24/7</p>
            <p className="text-slate-500">Delivery</p>
          </div>
          <div className="flex flex-col border w-sm py-8 rounded-xl shadow-xl px-32 mx-2">
            <p className="text-6xl text-indigo-600 font-bold mb-4">100K</p>
            <p className="text-slate-500">Transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
