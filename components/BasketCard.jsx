"use client";
import { useHomeContext } from "@/contexts/HomeContext";
import { useState } from "react";
import Plus from "@/public/Plus.svg";
import minus from "@/public/Minus.svg";
import minusLimit from "@/public/MinusLimit.svg";
import plusLimit from "@/public/plusLimit.svg";
import Image from "next/image";
import Bin from "@/public/Bin.svg";
import Info from "@/public/Info.svg";

export const BasketCard = ({ title, inCart, img, price, info, id }) => {
  const [infoShow, setInfoShow] = useState(false);
  const { data, cart, setData, setCart, removing, setRemoving } =
    useHomeContext();
  //Great one, But almost amazing, Rethink again tmw
  const handleQuantityChange = (id, itemType) => {
    const updateCart = cart
      .map((item) => {
        if (item.id === id) {
          const newInCart =
            itemType === "increase" ? item.inCart + 1 : item.inCart - 1;

          return { ...item, inCart: newInCart };
        }
        return item;
      })
      .filter((item) => item.inCart > 0);
    const updateData = data.map((item) => {
      if (item.id === id) {
        const newLeft =
          itemType === "increase" ? Math.max(item.left - 1, 0) : item.left + 1;
        return { ...item, left: newLeft };
      }
      return item;
    });
    setCart(updateCart);
    setData(updateData);
  };

  const handleRemove = (id) => {
    const myCart = cart.find((item) => item.id === id);
    if (!myCart) return;

    const removeCart = cart.filter((item) => item.id !== id);
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, left: item.left + myCart.inCart };
      }
      return item;
    });

    setRemoving(id);

    setTimeout(() => {
      setCart(removeCart);
      setData(updatedData);
      setRemoving(null);
    }, 600);
  };
  const maxLimit = data.find((item) => item.id === id);

  return (
    <div
      className={`flex flex-row justify-between  px-3 py-3 gap-2  bg-white border-2 border-[#EDEDED] rounded-xl   ${
        removing === id ? "duration-1000 -translate-x-[800px]" : "translate-x-0"
      } `}
    >
      <div>
        <Image priority src={img} alt={`${img}-${title}`} key={id} />
      </div>
      <div className="flex flex-col w-full justify-between ">
        <div className="flex flex-row w-full justify-between items-center h-fit">
          <div className="flex flex-row gap-2 ">
            <p className="text-[#B3B3B3] text-xl">{maxLimit.left}x</p>
            <div className="flex text-xl text-[#5a5a5a]">{title}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex  ">
              <p className="text-xl ">{price}₮</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row  w-full justify-between">
          <div className="flex flex-row gap-2.5">
            <Image
              priority
              src={Bin}
              alt="icon"
              width={40}
              height={40}
              onClick={() => {
                handleRemove(id);
              }}
            />
            <div>
              <Image
                priority
                src={Info}
                alt="icon"
                width={40}
                height={40}
                onClick={() => setInfoShow(!infoShow)}
              />
              <div
                className={`w-fit h-fit p-4  rounded-lg absolute bg-gray-300   ${
                  infoShow === true
                    ? "scale-105 transition-transform duration-500"
                    : " scale-0 transition-transform duration-300"
                } `}
              >
                {info}
                <div className="bg-gray-300 w-2.5 h-2.5 absolute -top-1 left-3.5 rotate-45"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2.5">
            {inCart === 1 ? (
              <Image
                priority
                src={minusLimit}
                alt="icon"
                width={40}
                height={40}
              />
            ) : (
              <Image
                priority
                src={minus}
                alt="icon"
                width={40}
                height={40}
                onClick={() => {
                  handleQuantityChange(id, "decrease");
                }}
              />
            )}
            <div className="text-[#303030] text-xl font-normal font-['Roboto']">
              {inCart}
            </div>
            {maxLimit.left === 0 ? (
              <Image
                priority
                src={plusLimit}
                alt="icon"
                width={40}
                height={40}
              />
            ) : (
              <Image
                priority
                src={Plus}
                alt="icon"
                width={40}
                height={40}
                onClick={() => {
                  handleQuantityChange(id, "increase");
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BasketCard;
