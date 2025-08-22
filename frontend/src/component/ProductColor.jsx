import React, { useEffect, useState } from "react";
import { useRef } from "react";

const ProductColor = ({ colors, selected, setSelected }) => {
  return (
    <div className="flex gap-3">
      {colors.map((item, index) => (
        <div
          key={index}
          className={` flex items-center justify-center h-[25px] w-[25px] rounded-full ${
            selected == index ? " border-2 border-blck " : ""
          }`}
          onClick={() => setSelected(index)}
        >
          <div
            style={{ background: item.hex_code }}
            className="h-[17px] w-[17px] rounded-full "
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ProductColor;
