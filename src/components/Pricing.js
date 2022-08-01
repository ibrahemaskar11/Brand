import React from 'react'
import { CheckIcon } from '@heroicons/react/outline';
const Pricing = () => {
  return (
    <section name="pricing" className="w-full py-12">
      <div className="w-full h-[800px] bg-slate-900 mix-blend-overlay absolute"></div>
      <div className="max-w-[1240px] mx-auto flex flex-col py-12 px-4 relative">
        <div className="text-slate-300 text-center py-8">
          <h3 className="uppercase text-3xl">Pricing</h3>
          <h1 className="text-white font-bold text-4xl sm:text-5xl py-8">
            The right price for your research.
          </h1>
          <p className="text-2xl md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            laudantium accusantium iusto quas tempora numquam.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-4 gap-x-8 gap-y-8">
          <div className="bg-white px-8 py-8 rounded-xl border shadow-2xl">
            <span className="uppercase bg-indigo-200 text-indigo-900 rounded-2xl text-sm px-3 py-1">
              Standard
            </span>
            <div>
              <p className="text-5xl md:text-6xl font-bold text-black py-4 flex">
                49$<span className="text-xl self-end text-slate-500">/mo</span>
              </p>
              <h3 className="text-slate-500 text-2xl py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h3>
              <ul className="text-2xl">
                <li className="flex px-0">
                  {<CheckIcon className="w-8 text-green-600 mr-4" />}Lorem,
                  ipsum dolor.
                </li>
                <li className="flex px-0">
                  {<CheckIcon className="w-8 text-green-600 mr-4" />}Lorem ipsum
                  dolor sit amet.
                </li>
                <li className="flex px-0">
                  {<CheckIcon className="w-8 text-green-600 mr-4" />}Lorem,
                  ipsum dolor.
                </li>
                <li className="flex px-0">
                  {<CheckIcon className="w-8 text-green-600 mr-4" />}Lorem,
                  ipsum dolor.
                </li>
                <li className="flex px-0">
                  {<CheckIcon className="w-8 text-green-600 mr-4" />}Lorem,
                  ipsum dolor.
                </li>
              </ul>
              <button className="text-center w-full py-4 text-2xl my-4">
                Get Started
              </button>
            </div>
          </div>
          <div className="bg-white px-8 py-8 rounded-xl border shadow-2xl">
            <span className="uppercase bg-indigo-200 text-indigo-900 rounded-2xl text-sm px-3 py-1">
              Premium
            </span>
            <div>
              <p className="text-6xl font-bold text-black py-4 flex">
                99$<span className="text-xl self-end text-slate-500">/mo</span>
              </p>
              <h3 className="text-slate-500 text-2xl py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h3>
              <ul className="text-2xl">
                <li className="flex px-0">
                  {<CheckIcon className="w-8 text-green-600 mr-4" />}Lorem,
                  ipsum dolor.
                </li>
                <li className="flex px-0">
                  {<CheckIcon className="w-8 text-green-600 mr-4" />}Lorem ipsum
                  dolor sit amet.
                </li>
                <li className="flex px-0">
                  {<CheckIcon className="w-8 text-green-600 mr-4" />}Lorem,
                  ipsum dolor.
                </li>
                <li className="flex px-0">
                  {<CheckIcon className="w-8 text-green-600 mr-4" />}Lorem,
                  ipsum dolor.
                </li>
                <li className="flex px-0">
                  {<CheckIcon className="w-8 text-green-600 mr-4" />}Lorem,
                  ipsum dolor.
                </li>
              </ul>
              <button className="text-center w-full py-4 text-2xl my-4">
                Get Started
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Pricing