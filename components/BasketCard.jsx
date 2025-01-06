import React, { useState } from "react";
import Plus from "@/public/Plus.svg";
import minus from "@/public/Minus.svg";
import Image from "next/image";
import Bin from "@/public/Bin.svg";
import Info from "@/public/Info.svg";
import { useHomeContext } from "@/contexts/HomeContext";
import { toast } from "react-toastify";

export const BasketCard = ({ title, inCart, img, price, info, id }) => {
  const [infoShow, setInfoShow] = useState(false);
  const [removing, setRemoving] = useState(false);
  const { data, cart, setData, setCart } = useHomeContext();
  const handleDecrease = (id) => {
    const updateCart = cart
      .map((item) => {
        if (item.id === id) {
          const newInCart = item.inCart - 1;
          if (newInCart <= 0) {
            setRemoving(true);
            return { ...item, inCart: 0 };
          }
          return { ...item, inCart: newInCart };
        }
        return item;
      })
      .filter((item) => item.inCart > 0);

    const updateData = data.map((item) => {
      if (item.id === id) {
        return { ...item, left: item.left + 1 };
      }
      return item;
    });
    setTimeout(() => {
      setCart(updateCart);
      setData(updateData);
      setRemoving(false);
    }, 300);
  };
  const handleIncrease = (id) => {
    const filteredData = data.find((item) => item.id === id);
    if (filteredData.left === 0) {
      toast.warn("You have reached its maximum limit BRO!");
      return;
    }
    const updateCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, inCart: item.inCart + 1 };
      }
      return item;
    });
    const updateData = data.map((item) => {
      if (item.id === id) {
        return { ...item, left: item.left - 1 };
      }
      return item;
    });
    setCart(updateCart);
    setData(updateData);
  };
  const handleRemove = (id) => {
    const myCart = cart.find((item) => {
      if (item.id === id) return item;
    });
    const removeCart = cart.filter(
      (item) => item.id !== id || setRemoving(true)
    );

    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, left: item.left + myCart.inCart };
      }
      return item;
    });

    setTimeout(() => {
      setCart(removeCart);
      setData(updatedData);
      setRemoving(false);
    }, 300);
  };

  return (
    <div
      className={`flex flex-row justify-between w-[498px] h-[132px] px-3 py-3 gap-2 bg-white border-2 border-[#EDEDED] rounded-xl ${
        removing ? "duration-1000 scale-90  " : ""
      }`}
    >
      <div>
        <Image priority src={img} alt={`${img}-${title}`} />
      </div>
      <div className="flex flex-col w-full justify-between">
        <div className="flex flex-row w-full justify-between items-center h-fit">
          <div className="flex flex-row gap-2 ">
            <div className="flex text-xl text-[#5a5a5a]">{title}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-2 items-end ">
              <p className="text-[#767676]">{inCart}x</p>
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
            <div className=" ">
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
            <Image
              priority
              src={minus}
              alt="icon"
              width={40}
              height={40}
              onClick={() => {
                handleDecrease(id);
              }}
            />
            <div className="text-[#303030] text-xl font-normal font-['Roboto']">
              {inCart}
            </div>
            <Image
              priority
              src={Plus}
              alt="icon"
              width={40}
              height={40}
              onClick={() => {
                handleIncrease(id);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BasketCard;
