import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 lg:px-24 py-6 shadow-sm bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900">
        Jad<span className="text-orange-500">oo</span>
      </div>

      {/* Links */}
      <div className="hidden lg:flex items-center gap-10 text-gray-600 font-medium">
        <a href="#" className="hover:text-gray-900">Destinations</a>
        <a href="#" className="hover:text-gray-900">Hotels</a>
        <a href="#" className="hover:text-gray-900">Flights</a>
        <a href="#" className="hover:text-gray-900">Bookings</a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <a href="#" className="text-gray-600 font-medium hover:text-gray-900">Login</a>
        <button className="border:2 border-black bg-orange-200 hover:bg-orange-300 text-white py-2 px-5 rounded-lg font-semibold transition">
          Sign up
        </button>
        <select className="bg-transparent font-medium text-gray-600 hover:text-gray-900">
          <option value="EN">EN</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
