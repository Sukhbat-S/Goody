import React from "react";
import Header from "./Header.jsx";
import MenuCarousel from "../Menu/MenuCarousel.jsx";
import { useHomeContext } from "@/contexts/HomeContext.jsx";
import Image from "next/image.js";
// import Foot from "./foot.jsx";
import ScreenCup from "../../public/ScreenCup.svg";
export const MainLayout = ({ children }) => {
  const { setMenu, cart } = useHomeContext();
  return (
    <>
      <div className="flex flex-col w-full h-screen items-center bg-[#FAFAFB] font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
        <Header />
        <MenuCarousel cart={cart} />
        <button onClick={() => setMenu(() => "Cart")}></button>
        {children}
        {/* <Foot /> */}
        <div className="absolute -bottom-24 -left-24 ">
          <Image src={ScreenCup} alt="icon" priority />
        </div>
        <div className="absolute -bottom-24 -right-24 ">
          <Image src={ScreenCup} alt="icon" priority />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
