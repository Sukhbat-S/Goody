import React from "react";
import addCart from "../public/addCart.svg";
import Image from "next/image";

export const CardComponent = ({ title, left, img, price, addToCart }) => {
  return (
    <div className="flex flex-col  justify-between w-[236px] h-[290px] bg-white border-2 border-[#EDEDED] rounded-xl py-2 px-4">
      <div className="flex justify-between text-xl">
        <div className="text-[#5A5A5A]">{title}</div>
        <div className="text-[#B3B3B3]">{left}x</div>
      </div>
      <div>
        <Image priority src={img} alt="image1" />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-[#212121] text-xl semi-bold">₮ {price}</div>
        <Image
          priority
          src={addCart}
          alt="icon"
          width={40}
          height={40}
          onClick={() => addToCart()}
        />
      </div>
    </div>
  );
};

export default CardComponent;
