import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/outline";
import heroImage from "../assets/cyber-bg.png";
const Hero = () => {
  return (
    <section
      id="hero"
      name="home"
    >
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between py-16">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="items-center flex flex-col justify-center md:items-start w-full px-2 py-8">
            <p className="text-2xl">Unique Sequencing & Production</p>
            <h1 className="py-3 text-4xl md:text-7xl font-bold">
              Cloud Management
            </h1>
            <p className="text-2xl">This is our Tech brand.</p>
            <button className="w-full py-3 px-6 sm:w-[60%] my-4">Get Started</button>
          </div>
          <div>
            <img className="w-full" src={heroImage} alt="/" />
          </div>
        </div>
        <div className=" w-full md:w-[20%] self-center flex flex-col py-8 md:min-w-[760px] mx-1 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap items-start px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <CloudUploadIcon className="h-6 text-indigo-600" /> App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <DatabaseIcon className="h-6 text-indigo-600" /> Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ServerIcon className="h-6 text-indigo-600" /> Cloud Data
            </p>
            <p className="mr-[6.6rem] flex px-4 py-2 text-slate-500 md:mr-0">
              <PaperAirplaneIcon className="h-6 text-indigo-600" /> API
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
