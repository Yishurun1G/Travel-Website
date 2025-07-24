import React from "react";
import logo from "../assets/logo.png";
import heroImage from "../assets/Decore.png";
import playIcon from "../assets/play-icon.png";
import underline from "../assets/Decore3.png";
import traveller from "../assets/traveller 1.png";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden h-screen">
      {/* Absolute Background Top-Right Decoration */}
      <img
        src={heroImage}
        alt="Background Decoration"
        className="absolute top-0 right-0 w-[600px] z-0 pointer-events-none"
      />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 lg:px-24 py-6 z-10 relative">
        <img src={logo} alt="Jadoo Logo" className="h-10" />
        <ul className="flex gap-6 text-gray-700 font-medium items-center">
          <li>Destinations</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Bookings</li>
          <div className="flex items-center gap-4">
            <button className="text-gray-700">Login</button>
            <button className="border px-4 py-1 rounded-xl">Sign up</button>
          </div>
          <select className="bg-transparent font-medium text-gray-600 hover:text-gray-900">
            <option value="EN">EN</option>
            <option value="AM">AM</option>
          </select>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="grid lg:grid-cols-2 items-center px-6 lg:px-24 py-10 h-[calc(100vh-100px)] relative z-10">
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          <p className="text-sm font-bold  text-red-400">BEST DESTINATIONS AROUND THE WORLD</p>
          <h1 className="text-5xl font-bold text-indigo-900 leading-tight relative font-serif">
            Travel,{""}
            <span className="relative inline-block">
              enjoy
              <img
                src={underline}
                alt="Underline"
                className="absolute bottom-1 left-0 right-20  w-72 h-auto -mb-1"
              />
            </span>
            <br />and live a new <br /> and full life
          </h1>
          <p className="text-gray-500 text-sm">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
          <div className="flex gap-6 items-center">
            <button className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-md shadow-md">
              Find out more
            </button>
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={playIcon} alt="Play" className="h-16 w-16" />
              <span className="text-gray-700 font-semibold">Play Demo</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:block">
          <img
            src={traveller}
            alt="Traveler"
            className="relative z-10 w-[500px] object-contain ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
