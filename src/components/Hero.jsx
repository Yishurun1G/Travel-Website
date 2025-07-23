import React from "react";
import Traveller from "../assets/Traveller 1.png";
import Plane1 from "../assets/Plane1.jpg";

const Hero = () => {
  return (
    <div className="px-6 lg:px-24 py-16 bg-white flex flex-col lg:flex-row items-center justify-between">
      {/* Text Section */}
      <div className="max-w-xl text-center lg:text-left">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest">
          Best destinations around the world
        </p>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mt-4">
          Travel,<p className="underline decoration-red-600 decoration-4">enjoy</p>
          and live a new <br />
          <span className="text-indigo-900">and full life</span>
        </h1>
        <p className="mt-6 text-gray-500 leading-relaxed">
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
            Find out more
          </button>
          <button className="flex items-center gap-3 text-gray-700 font-medium">
            <div className="w-10 h-10 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
            Play Demo
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-10 lg:mt-0 relative">
      <img
          src={Traveller}
          alt="Traveller"
          className="w-[420px] object-contain z-10 relative"
        />
        <img
          src={Plane1}
          alt="Plane"
          className="absolute top-4 left-[-40px] w-24 animate-bounce"
        />
        <img
          src={Plane1}
          alt="Plane"
          className="absolute bottom-4 right-[-30px] w-24 animate-bounce"
        />
      </div>
    </div>
  );
};

export default Hero;
