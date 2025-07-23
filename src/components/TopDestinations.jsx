import React from "react";
import Rome from "../assets/rome.jpg";
import London from "../assets/london.jpg";
import Europe from "../assets/europe.jpg";
import { FaLocationArrow } from "react-icons/fa"; // or any icon library you like

const destinations = [
  {
    image: Rome,
    title: "Rome, Italy",
    price: "$5.42k",
    duration: "10 Days Trip",
  },
  {
    image: London,
    title: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
  },
  {
    image: Europe,
    title: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
  },
];

const TopDestinations = () => {
  return (
    <div className="px-6 lg:px-32 py-16 text-center bg-white">
      <p className="text-sm text-indigo-500 font-semibold tracking-widest uppercase mb-2">
        Top Selling
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
        Top Destinations
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-2xl"
          >
            <img src={dest.image} alt={dest.title} className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col gap-2 text-left">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-900">{dest.title}</h3>
                <span className="text-indigo-600 font-medium">{dest.price}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <FaLocationArrow className="text-orange-500" />
                {dest.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDestinations;
