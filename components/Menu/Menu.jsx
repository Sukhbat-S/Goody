import { useState, useEffect } from "react";
import Image from "next/image";
import cartUnselected from "../../public/cartUnselected.svg";
import menuUnselected from "../../public/menuUnselected.svg";
import menuSelected from "../../public/menuSelected.svg";
import cartSelected from "../../public/cartSelected.svg";
import { useHomeContext } from "@/contexts/HomeContext";

export const Menu = () => {
  const { menu, setMenu, cardCount } = useHomeContext();

  return (
    <div className="flex items-center w-full bg-white border-b border-[#EDEDED]">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex">
          <div
            className="flex flex-row gap-2 items-center justify-center w-[236px] h-[66px] select-none"
            onClick={() => setMenu("Menu")}
          >
            <Image
              src={menu === "Menu" ? menuSelected : menuUnselected}
              alt="menu"
              priority
            />
            <div
              className={`text-lg ${
                menu === "Menu" ? "text-[#1C4B16]" : "text-[#767676]"
              }`}
            >
              Мэню
            </div>
          </div>
          <div
            className="flex flex-row  gap-2 items-center  justify-center w-[236px] h-[66px] select-none"
            onClick={() => setMenu("Cart")}
          >
            <Image
              src={menu === "Cart" ? cartSelected : cartUnselected}
              alt="cart"
              priority
            />
            <div className=" flex  w-[22px] h-[22px] bg-[#e75470] absolute top-[100px] left-[736px] rounded-[40px] border border-white text-white items-center justify-center font-semibold text-l">
              <div className="flex ">{cardCount}</div>
            </div>

            <div
              className={`flex text-lg ${
                menu === "Cart" ? "text-[#1C4B16]" : "text-[#767676]"
              }`}
            >
              Сагс
            </div>
          </div>
        </div>
        <div
          className={`flex  w-[472px] items-start ${
            menu === "Menu" ? "translate-x-14" : "translate-x-[62%]"
          } transition-all duration-120`}
        >
          <div className=" flex w-[116px] h-[4px] border rounded-full text-[#308226] text-opacity-0 bg-[#308226]" />
        </div>
      </div>
    </div>
  );
};
export default Menu;
