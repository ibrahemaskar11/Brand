import React from 'react'
import supportImg from '../assets/support.jpg'
import {
  PhoneIcon,
  ArrowSmRightIcon,
  ChipIcon,
  SupportIcon,
} from "@heroicons/react/outline";
function Support() {
  return (
    <section name="support" className="w-full  relative">
      <div className="absolute h-[700px] w-full bg-gray-900/90 ">
        <img
          src={supportImg}
          alt=""
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center relative z-1 text-white py-20 px-4">
        <div className="text-center text-white">
          <h3 className="text-3xl text-slate-300">Support</h3>
          <h1 className="text-4xl md:text-5xl font-bold text-center py-8">
            Finding the right team
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 text-center py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            aspernatur facilis tempora, illum voluptate nam quibusdam fugit
            molestiae ducimus deleniti.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 relative gap-y-16 px-0 md:px-4 pt-12 sm:pt-20 text-black mt-12">
          <div className=" flex flex-col items-start justify-start bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 bg-indigo-600 rounded-xl text-white p-4 mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-4">Sales</h3>
              <p className="text-gray-600 text-xl my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo sunt temporibus tempore molestias ab illum quod amet
                voluptatibus omnis nobis?
              </p>
            </div>
            <div className="bg-slate-100 py-4 w-full px-8 text-indigo-600">
              <p className="flex">
                Contact us {<ArrowSmRightIcon className="w-5 ml-2" />}
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-start justify-start bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="w-16 bg-indigo-600 rounded-xl text-white p-4 mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-4">Technical Support</h3>
              <p className="text-gray-600 text-xl my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo sunt temporibus tempore molestias ab illum quod amet
                voluptatibus omnis nobis?
              </p>
            </div>
            <div className="bg-slate-100 py-4 w-full px-8 text-indigo-600">
              <p className="flex">
                Contact us {<ArrowSmRightIcon className="w-5 ml-2" />}
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-start justify-start bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ChipIcon className="w-16 bg-indigo-600 rounded-xl text-white p-4 mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-4">Media Inquiries</h3>
              <p className="text-gray-600 text-xl my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo sunt temporibus tempore molestias ab illum quod amet
                voluptatibus omnis nobis?
              </p>
            </div>
            <div className="bg-slate-100 py-4 w-full px-8 text-indigo-600">
              <p className="flex">
                Contact us {<ArrowSmRightIcon className="w-5 ml-2" />}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support