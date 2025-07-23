import React from "react";
import GreeceImg from "../assets/greece.jpg";
import TripIcon1 from "../assets/icon1.png"; // yellow icon
import TripIcon2 from "../assets/icon2.png"; // orange icon
import TripIcon3 from "../assets/icon3.png"; // teal icon
import Greece from "../assets/greece.jpg";

const steps = [
  {
    icon: TripIcon1,
    title: "Choose Destination",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: TripIcon2,
    title: "Make Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: TripIcon3,
    title: "Reach Airport on Selected Date",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

const EasySteps = () => {
  return (
    <div className="px-6 lg:px-24 py-20 grid lg:grid-cols-2 gap-16 items-center bg-white">
      {/* Left Side */}
      <div>
        <p className="text-sm text-gray-500 font-semibold mb-2">Easy and Fast</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Book Your Next Trip<br />In 3 Easy Steps
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <img src={step.icon} alt="" className="w-12 h-12" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="relative w-fit mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden drop-shadow-[4px_-12px_8px_rgba(59,130,246,0.5)] w-80 hover:shadow-2xl">
          <img src={GreeceImg} alt="Greece" className="h-48 w-full object-cover shadow-x drop-shadow-[4px_-4px_6px_rgba(59,130,246,0.5)]" />
          <div className="p-4">
            <h3 className="text-gray-900 font-semibold text-lg">Trip To Greece</h3>
            <p className="text-sm text-gray-500 mt-1">14-29 June | by Robbin Jr</p>
            <div className="mt-4 flex justify-between text-gray-400 text-sm">
              <span>🗺️💼✈️</span>
            </div>
            <p className="mt-4 text-gray-500 text-sm">24 people going</p>
          </div>
        </div>

        {/* Floating Trip to Rome Card */}
        <div className="absolute bottom-[30px] right-[-80px] bg-white p-4 rounded-xl shadow-xl hover:shadow-2xl w-64">
          <div className="flex items-center gap-3">
            <img src={GreeceImg} alt="Rome" className="w-10 h-10 rounded-full object-cover shadow-lg drop-shadow-[4px_-4px_6px_rgba(59,130,246,0.5)]" />
            <div>
              <p className="text-sm text-gray-500">Ongoing</p>
              <p className="text-sm font-semibold text-gray-800">Trip to Rome</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-indigo-600 font-medium">40% completed</p>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
