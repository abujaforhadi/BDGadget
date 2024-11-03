import HeaderImage from "./HeaderImage";

function Hero() {
  return (
    <div className="relative">
      <div className="hero bg-customPurple text-white rounded-b-3xl pb-36">
        <div className="hero-content text-center">
          <div className="w-2/3 mx-auto">
            <h1 className="text-5xl font-bold py-8">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-7 font-normal text-xs">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories,
              we have it all!
            </p>
            <button className="btn bg-white text-customPurple border border-sky-100 px-8 py-3 rounded-xl shadow-lg hover:bg-gray-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="absolute  -mt-36">
          <HeaderImage />
        </div>
      </div>
    </div>
  );
}

export default Hero;
