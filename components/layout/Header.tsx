// components/layout/Header.tsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        <a href="/">StayFinder</a>
      </div>

      <nav className="space-x-4 text-sm md:text-base">
        <a href="#" className="hover:text-blue-600">Rooms</a>
        <a href="#" className="hover:text-blue-600">Mansion</a>
        <a href="#" className="hover:text-blue-600">Countryside</a>
        <a href="#" className="hover:text-blue-600">Beachfront</a>
        <a href="#" className="hover:text-blue-600">Mountain</a>
      </nav>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md px-2 py-1 text-sm"
        />
        <button className="text-blue-600 hover:underline">Sign In</button>
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
