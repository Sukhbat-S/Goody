import React, { useState } from "react";
import addCart from "../public/addCart.svg";
import Image from "next/image";

export const MenuCard = ({ title, left, img, price, addToCart, index }) => {
  const [flyCart, setFlyCart] = useState(false);

  const handleChange = () => {
    addToCart();
    setFlyCart(index);
  };
  return (
    <>
      <div className="grid gap-2 justify-between w-full h-full bg-white border-2 border-[#EDEDED] rounded-xl p-4 min-h-full">
        <div className="flex justify-between text-[20px]">
          <div className="text-[#5A5A5A] max-w-[160px] truncate ">{title}</div>
          <div className="text-[#B3B3B3] flex gap-[2px] ">
            <p>{left}</p>
            <p>x</p>
          </div>
        </div>
        <div>
          <Image priority src={img} alt="image1" />
        </div>
        <div className="flex justify-between items-center ">
          <div className="text-[#212121] text-xl semi-bold py-[6px]   ">
            {price}₮
          </div>
          {left === 0 ? (
            <div></div>
          ) : (
            <div className="relative w-10 h-10">
              <Image
                priority
                src={addCart}
                alt="icon"
                fill
                onClick={handleChange}
              />
              {flyCart === index && (
                <div
                  className={`h-10 w-16 flex items-center rounded-lg bg-white border absolute top-0 -left-4 transition-all duration-700`}
                  style={{
                    animation: `mymove-${index} 1.3s ease-in-out forwards`,
                  }}
                >
                  <div className="relative w-10 h-10">
                    <Image priority src={img} alt="image1" fill />
                  </div>
                  <div>
                    <p className="text-[10px]  max-w-[24px] truncate">
                      {title}
                    </p>
                    <p className="text-[8px] max-w-[24px] truncate">{price}₮</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuCard;
