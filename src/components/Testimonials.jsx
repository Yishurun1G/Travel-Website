import React from "react";
import MikeImg from "../assets/mike.jpg"; // user's image
import ChrisImg from "../assets/chris.jpg"; // for the behind card

const Testimonials = () => {
  return (
    <div className="px-6 lg:px-24 py-20 bg-white grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Side */}
      <div>
        <p className="text-sm text-gray-500 font-semibold uppercase tracking-widest mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          What People Say About Us.
        </h2>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative w-fit">
        {/* Active Testimonial Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md relative z-10 hover:shadow-2xl">
          <div className="absolute -top-6 left-6">
            <img
              src={MikeImg}
              alt="Mike Taylor"
              className="w-12 h-12 rounded-full ring-4 ring-white "
            />
          </div>
          <p className="text-gray-600 mt-6 mb-4">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <p className="text-gray-900 font-semibold">Mike Taylor</p>
          <p className="text-sm text-gray-500">Lahore, Pakistan</p>
        </div>

        {/* Background Card */}
        <div className=" a top-12 left-6 bg-white border rounded-xl shadow-sm p-6 w-[90%] opacity-70 z-0 
         bottom-[-100px] right-[-10px hover:shadow-2xl left-10 ">
          <p className="text-gray-900 font-semibold">Chris Thomas</p>
          <p className="text-sm text-gray-500">CEO of Red Button</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
