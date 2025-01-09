import React, { useEffect, useRef, useState } from "react";
import addCart from "../public/addCart.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export const MenuCard = ({
  title,
  left,
  img,
  price,
  addToCart,
  index,
  id,
  currentPage,
}) => {
  const [flyCart, setFlyCart] = useState(null);
  const fly = useRef(0);

  useEffect(() => {
    setFlyCart(null);
  }, [currentPage]);
  const handleChange = () => {
    fly.current = index;
    setFlyCart(index);
    addToCart();
  };

  return (
    <Swiper>
      <SwiperSlide className="grid gap-2 justify-between w-full h-full bg-white border-2 border-[#EDEDED] rounded-xl p-4 min-h-full">
        <div className="flex justify-between text-[20px]">
          <div className="text-[#5A5A5A] max-w-[160px] truncate">{title}</div>
          <div className="text-[#B3B3B3] flex gap-[2px] ">
            <p>{left}</p>
            <p>x</p>
          </div>
        </div>
        <div>
          <Image priority src={img} alt="image1" key={id} />
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
                  <div className="relative w-full h-full">
                    <Image priority src={img} alt="image1" fill />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MenuCard;
