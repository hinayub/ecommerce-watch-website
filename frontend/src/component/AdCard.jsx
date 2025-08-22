import React, { useState, useRef } from "react";
import ProductColor from "./ProductColor";

const AdCard = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const imgRef = useRef(null);

  const totalimage = product.colors.length;
  const imageIndexHandle = () => {
    setImageIndex((prev) => (prev + 1) % totalimage);
    setSelected(null);
  };
  return (
    <div class="max-w-[350px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full h-80">
        {" "}
        {/* fixed image area */}
        <img
          ref={imgRef}
          className="rounded-t-lg w-full h-full object-cover object-contain"
          src={product.colors[selected != null ? selected : imageIndex].image}
          alt=""
          onMouseEnter={imageIndexHandle}
          onMouseOut={() => {
            setImageIndex(0);
          }}
        />
      </div>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <p className=" text-black mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
        <ProductColor
          colors={product.colors}
          selected={selected}
          setSelected={setSelected}
        />
        <div className="flex justify-between">
          <span className=" font-bold text-[18px]">Rs.{product.price}</span>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
