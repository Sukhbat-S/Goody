import React from "react";
import Plus from "@/public/Plus.svg";
import minus from "@/public/Minus.svg";
import Image from "next/image";
import Bin from "@/public/Bin.svg";
import Info from "@/public/Info.svg";

export const CartB = ({ title, itemCount, count, img, price }) => {
  return (
    <div className="flex flex-row justify-between w-[498px] h-[132px] px-3 py-3 gap-2 bg-white border-2 border-[#EDEDED] rounded-xl ">
      <div>
        <Image priority src={img} alt={`${img}-${title}`} />
      </div>
      <div className="flex flex-col w-full justify-between">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row gap-2 ">
            <div className="flex text-xl text-[#b3b3b3]">{count}x</div>
            <div className="flex text-xl text-[#5a5a5a]">{title}</div>
          </div>
          <div className="flex text-xl">{price}₮</div>
        </div>
        <div className="flex flex-row  w-full justify-between">
          <div className="flex flex-row gap-2.5">
            <Image priority src={Bin} alt="icon" width={40} height={40} />
            <Image priority src={Info} alt="icon" width={40} height={40} />
          </div>
          <div className="flex flex-row items-center gap-2.5">
            <Image priority src={minus} alt="icon" width={40} height={40} />
            <div className="text-[#303030] text-xl font-normal font-['Roboto']">
              {itemCount}
            </div>
            <Image priority src={Plus} alt="icon" width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartB;
