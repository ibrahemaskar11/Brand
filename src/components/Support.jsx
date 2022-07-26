import { ShipIcon, SupportIcon } from "@heroicons/react/solid";
import {
  PhoneIcon,
  ArrowSmRightIcon,
  MenuIcon,
  ChipIcon,
} from "@heroicons/react/outline";
import supportImg from "../assets/support.jpg";
const Support = () => {
  return (
    <section id="support" name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          src={supportImg}
          alt=""
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="max-w-[1240px] text-white mx-auto relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 upperCase text-center">
            Support
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="text-center py-4 text-2xl md:text-3xl text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            molestias ducimus rerum debitis. Voluptate voluptatibus asperiores
            aliquid alias amet. Natus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab et
                necessitatibus aliquam aut modi ipsa veniam velit mollitia vero
                quasi.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact us {<ArrowSmRightIcon className="w-5 ml-2" />}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab et
                necessitatibus aliquam aut modi ipsa veniam velit mollitia vero
                quasi.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact us {<ArrowSmRightIcon className="w-5 ml-2" />}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab et
                necessitatibus aliquam aut modi ipsa veniam velit mollitia vero
                quasi.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact us {<ArrowSmRightIcon className="w-5 ml-2" />}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Support;
