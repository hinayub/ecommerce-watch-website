import React, { useState, useEffect } from "react";
import w1 from "../assets/w1.webp";
import w2 from "../assets/w2.jpg";
import w4 from "../assets/w4.webp";
import { CiSearch } from "react-icons/ci";

const slides = [w1, w2, w4];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] overflow-hidden rounded-lg">
      {/* Slides */}
      {slides.map((src, index) => (
        <img
          key={index}
          src={src}
          className={`absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>

      {/* Search bar */}
      <div className="absolute z-20 bottom-10 left-1/2 -translate-x-1/2 flex items-center bg-white w-[90%] sm:w-[70%] md:w-[400px] h-[45px] sm:h-[50px] rounded-xl shadow-lg shadow-blue-400 px-2">
        <CiSearch className="w-[30px] sm:w-[40px] h-[25px] sm:h-[30px] text-gray-600" />
        <input
          type="text"
          placeholder="What are you looking for"
          className="w-full pl-2 sm:pl-4 outline-none text-sm sm:text-base"
        />
      </div>
    </div>
  );
};

export default Slider;
