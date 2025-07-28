import React from "react";
import Axon from "../assets/axon.png";
import Jetstar from "../assets/jetstar.png";
import Expedia from "../assets/expedia.png";
import Qantas from "../assets/qantas.png";
import Alitalia from "../assets/alitalia.png";

const BrandSection = () => {
  const brands = [Axon, Jetstar, Expedia, Qantas, Alitalia];

  return (
    <div className="w-full bg-white py-12 px-6 lg:px-32">
      <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`flex justify-center items-center bg-white rounded-xl py-6 px-4 hover:shadow-md transition 
            ${index < 3 ? " bg-white  scale-150" : ""}
             ${index === 2 ? "shadow-lg" : ""}
            `}
             
          >
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              className={`h-10 object-contain ${index < 3 ? " opacity-90 grayscale-0" : "opacity-80"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
