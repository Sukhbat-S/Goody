import Image from "next/image";
import cartUnselected from "../../public/cartUnselected.svg";
import menuUnselected from "../../public/menuUnselected.svg";
import menuSelected from "../../public/menuSelected.svg";
import cartSelected from "../../public/cartSelected.svg";
import { useHomeContext } from "@/contexts/HomeContext";

export const Menu = ({ cart }) => {
  const { menu, setMenu } = useHomeContext();
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
            className="flex flex-row  gap-2 items-center  justify-center w-[236px] h-[66px] select-none "
            onClick={() => setMenu("Cart")}
          >
            <div className="relative">
              <Image
                src={menu === "Cart" ? cartSelected : cartUnselected}
                alt="cart"
                priority
              />
              <div
                className={`flex  w-3.5 h-3.5 bg-[#e75470] absolute -top-1 -right-1 rounded-full ${
                  cart.length > 0 ? "visible" : " hidden"
                } `}
              >
                <div className="flex text-white text-[10px] px-1  ">
                  {cart.length}
                </div>
              </div>
            </div>
            <div
              className={`flex text-lg duration-500 ${
                menu === "Cart" ? "text-[#1C4B16]" : "text-[#767676]"
              } `}
            >
              Сагс
            </div>
          </div>
        </div>
        <div
          className={`flex  w-[472px] items-start duration-500 ${
            menu === "Menu" ? "translate-x-14" : "translate-x-[62%]"
          } `}
        >
          <div className=" flex w-[116px] h-[4px] border rounded-full text-[#308226] text-opacity-0 bg-[#308226] duration-500" />
        </div>
      </div>
    </div>
  );
};
export default Menu;
