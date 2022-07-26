const About = () => {
  return (
    <section id="about" name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col text-center">
          <h2 className="text-4xl md:text-5xl font-bold ">
            Trusted by developers across the world
          </h2>
          <p className="text-xl md:text-3xl py-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            natus distinctio ea dolores sed blanditiis et ipsam incidunt earum
            molestias!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-1 px-2">
          <div className="border py-10 md:py-8 rounded-xl shadow-xl max-w-sm">
            <p className="font-bold text-5xl md:text-6xl text-indigo-600">
              100%
            </p>
            <p className="text-gray-400 mt-2 ">Completion</p>
          </div>
          <div className="border py-10 md:py-8 rounded-xl shadow-xl max-w-sm">
            <p className="font-bold text-5xl md:text-6xl text-indigo-600">
              24/7
            </p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="border py-10 md:py-8 rounded-xl shadow-xl max-w-sm">
            <p className="font-bold text-5xl md:text-6xl text-indigo-600">
              100K
            </p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
