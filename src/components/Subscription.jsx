import React from "react";
import MessageIcon from "../assets/message.png";
import starsImage from "../assets/stars.png";

const SubscribeSection = () => {
  return (

    <section className=" relative overflow-hidden flex justify-center items-center px-6 py-16">    
         <img src={starsImage}
             alt="star" 
             className="absolute right-4 top-72 z-0 my-4 opacity-70"
             />
      {/* Main Box */}
      <div
      
        className="relative w-full px-10 py-24 max-w-6xl bg-indigo-50 p-10 shadow-md overflow-visible"
        style={{
          borderTopLeftRadius: "80px",
          borderTopRightRadius: "16px",
          borderBottomRightRadius: "16px",
          borderBottomLeftRadius: "16px"
        }} 
      >
        {/* Message Icon – half out of the top-right corner */}
        <img
          src={MessageIcon}
          alt="Message Icon"
          className="absolute -top-4 -right-4 w-16 h-16"
        />

        {/* Heading */}
        <h2 className="text-center text-gray-700 text-xl sm:text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
          Subscribe to get information, latest news and other <br />
          interesting offers about Jadoo
        </h2>

        {/* Email + Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="flex items-center w-full max-w-md bg-white px-4 py-3 rounded-md shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m0 0H6m2 0l1-2m-1 2l1 2m7-2h2m-2 0l-1-2m1 2l-1 2M12 6v12"
              />
            </svg>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 text-sm text-gray-600 focus:outline-none bg-transparent"
            />
          </div>
          <button className="bg-red-400 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-red-500 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
