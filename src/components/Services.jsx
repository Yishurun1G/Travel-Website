import React from "react";
import WeatherIcon from "../assets/weather.png";
import PlaneIcon from "../assets/plane.png";
import MicIcon from "../assets/mic.png";
import GearIcon from "../assets/gear.png";

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
    <div className="px-6 lg:px-24 py-16 bg-white text-center">
      <p className="text-sm text-indigo-500 font-semibold tracking-widest uppercase mb-2">
        Category
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
        We Offer Best Services
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4  ">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow hover:shadow-xl  ${
              service.highlight ? "bg-white shadow-lg border-b-8 border-orange-400" : "bg-gray-50"
            }`}
          >
            <div className="mb-6 flex justify-center ">
              <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain " />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-500 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
