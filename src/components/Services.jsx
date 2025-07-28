import React from "react";
import WeatherIcon from "../assets/weather.png";
import PlaneIcon from "../assets/plane.png";
import MicIcon from "../assets/mic.png";
import GearIcon from "../assets/gear.png";
import starsImage from "../assets/stars.png";
import BgImage from "../assets/bg.png";

const Services = () => {
  const services = [
    {
      icon: WeatherIcon,
      title: "Calculated Weather",
      description: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      icon: PlaneIcon,
      title: "Best Flights",
      description: "Engrossed listening. Park gate sell they west hard for the.",
      highlight: true,
    },
    {
      icon: MicIcon,
      title: "Local Events",
      description: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    },
    {
      icon: GearIcon,
      title: "Customization",
      description: "We deliver outsourced aviation services for military customers",
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden min-h-screen">
      {/* Stars background */}
      <img
        src={starsImage}
        alt="Stars"
        className="absolute right-10 top-0 z-0 opacity-40"
      />

      <div className="relative z-10 px-6 lg:px-24 py-16 text-center">
        <p className="text-sm text-indigo-500 font-semibold tracking-widest uppercase mb-2">
          Category
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
          We Offer Best Services
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl shadow hover:shadow-xl bg-white transition-all duration-300
                ${index === 1 ? "scale-105 py-10" : ""}
                ${service.highlight ? "border-b-8 border-orange-400" : ""}
              `}
            >
              {/* Background image with different styles per card */}
              <div className="mb-6 flex justify-center relative w-full h-20">
                <img
                  src={BgImage}
                  alt=""
                  className={`absolute z-0
                    ${index === 0 ? "w-12 h-12 bottom-2 right-12" : ""}
                    ${index === 1 ? "w-12 h-12 top-3 left-20 " : ""}
                    ${index === 2 ? "w-12 h-12 bottom-10 right-14" : ""}
                    ${index === 3 ? "w-12 h-12 bottom-2 right-12" : ""}
                  `}
                />
                <img
                  src={service.icon}
                  alt={service.title}
                  className={`object-contain relative z-10 ${
                    index === 1 ? "w-28 h-28" : "w-16 h-16"
                  }`}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
