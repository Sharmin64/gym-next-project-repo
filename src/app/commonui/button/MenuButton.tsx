"use client";
import React, { useState } from "react";

const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-48 h-24">
        {/* Invisible input toggle */}
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />

        {/* Menu layers */}
        <div className="relative w-full h-full">
          {/* Top bun */}
          <div
            className={`absolute w-full h-4 bg-yellow-500 rounded-full transition-transform ${
              isOpen ? "translate-y-12" : ""
            }`}
          ></div>

          {/* Tomato */}
          <div
            className={`absolute w-full h-4 bg-red-500 rounded-full transition-transform ${
              isOpen ? "translate-y-24" : "translate-y-10"
            }`}
          ></div>

          {/* Lettuce */}
          <div
            className={`absolute w-full h-4 bg-green-500 rounded-full transition-transform ${
              isOpen ? "translate-y-36" : "translate-y-20"
            }`}
          ></div>

          {/* Cheese */}
          <div
            className={`absolute w-full h-4 bg-yellow-400 rounded-full transition-transform ${
              isOpen ? "translate-y-48" : "translate-y-30"
            }`}
          ></div>

          {/* Meat */}
          <div
            className={`absolute w-full h-4 bg-red-700 rounded-full transition-transform ${
              isOpen ? "translate-y-60" : "translate-y-40"
            }`}
          ></div>

          {/* Bottom bun */}
          <div
            className={`absolute w-full h-4 bg-yellow-700 rounded-full transition-transform ${
              isOpen ? "translate-y-72" : "translate-y-50"
            }`}
          ></div>
        </div>

        {/* Links */}
        {isOpen && (
          <div className="absolute flex flex-col items-center justify-center w-full h-full space-y-4">
            <a
              href="#"
              className="text-white text-xl font-bold hover:text-yellow-400"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white text-xl font-bold hover:text-yellow-400"
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-xl font-bold hover:text-yellow-400"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MenuButton;
