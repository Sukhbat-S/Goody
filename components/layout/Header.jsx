import Image from "next/image";
import React from "react";

export const Header = ({}) => {
  return (
    <header className=" flex  w-full h-fit bg-[#ffffff] items-center border border-[#EDEDED] ">
      <div className=" py-[14.5px] px-8 w-[20%]  border-r-[1.4px]  border-[#EDEDED] grid h-fit ">
        <div className="text-[22px]  text-[#308226] font-medium w-fit leading-normal h-fit">
          Goody
        </div>
        <div className=" text-[18px] text-[#8B8E95] w-fit leading-normal font-normal">
          Бүтээмжийн бүүстэр
        </div>
      </div>
      <div className=" flex w-[80%] h-full justify-center items-center">
        <div className="relative w-full h-[48px]">
          <Image src={"/MainHero.png"} alt="icon" priority fill />
        </div>
      </div>
    </header>
  );
};

export default Header;
