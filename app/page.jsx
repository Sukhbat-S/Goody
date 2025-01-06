"use client";
import { useEffect, useState } from "react";
import { useHomeContext } from "@/contexts/HomeContext";
import { MainLayout } from "../components/layout/index";
import Menu from "@/components/Menu/Menu";
import { BasketCard, DessertMenuCard } from "@/components";
import { toast } from "react-toastify";
export default function Home() {
  const { menu, setMenu, data, setData, cart, setCart } = useHomeContext();

  useEffect(() => {}, [data, cart]);
  const handleCart = (index) => {
    const selectedItem = data[index];

    const existingCartItemIndex = cart.findIndex(
      (item) => item.title === selectedItem.title
    );
    if (
      existingCartItemIndex !== -1 &&
      cart[existingCartItemIndex].inCart > 0
    ) {
      return toast.warn("Item is already in your cart");
    }

    if (existingCartItemIndex !== -1) {
      setCart((prevCart) => {
        const newCart = [...prevCart];
        newCart[existingCartItemIndex] = {
          ...newCart[existingCartItemIndex],
          left: newCart[existingCartItemIndex].left - 1,
          inCart: newCart[existingCartItemIndex].inCart + 1,
        };
        return newCart;
      });
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          ...selectedItem,
          left: selectedItem.left - 1,
          inCart: 1,
        },
      ]);
    }

    setData((prevData) => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        left: newData[index].left - 1,
      };
      return newData;
    });
  };

  return (
    <MainLayout>
      <Menu cart={cart} />
      <button onClick={() => setMenu(() => "Cart")}></button>
      <main className=" flex flex-row w-full justify-center  items-start py-6 p-8">
        {menu === "Menu" && (
          <div className="grid grid-flow-row grid-cols-4 gap-6 items-center justify-center sm:items-start">
            {data.map((x, index) => {
              return (
                <div key={index}>
                  <DessertMenuCard
                    title={x.title}
                    left={x?.left}
                    price={x?.price}
                    img={x?.img}
                    addToCart={() => handleCart(index)}
                  />
                </div>
              );
            })}
          </div>
        )}
        {menu === "Cart" && (
          <div className=" overflow-hidden flex flex-row w-full gap-8 h-[80vh]  ">
            <div className="flex flex-col gap-3 overflow-auto  ">
              {cart.length > 0 &&
                cart.map((x, index) => {
                  return (
                    <div key={index}>
                      <BasketCard
                        index={index}
                        info={x?.info}
                        inCart={x?.inCart}
                        title={x?.title}
                        count={x?.count}
                        itemCount={x?.itemCount}
                        price={x?.price}
                        img={x?.img}
                        id={x.id}
                      />
                    </div>
                  );
                })}
            </div>
            {cart.length > 0 ? (
              <div
                className={`flex flex-col w-[432px] h-[564px] justify-between  bg-white border-2 border-[#ededed] p-4 rounded-xl`}
              >
                <div className="grid gap-4 h-fit ">
                  <div className="flex text-xl font-medium">
                    Төлбөрийн мэдээлэл
                  </div>
                  {cart.map((data, index) => {
                    let dissertCountedPrice = data.price * data.inCart;
                    return (
                      <div
                        key={index}
                        className="flex flex-col gap-6 h-fit overflow-scroll "
                      >
                        <div className="flex flex-row justify-between w-full ">
                          <div className="text-lg text-[#767676]   ">
                            {data.title}
                          </div>
                          <div className="flex  gap-4  items-end justify-items-center w-[30%]  ">
                            <p className="text-[#767676]">{data.inCart}x</p>
                            <p className="text-lg">{dissertCountedPrice}₮</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex flex-row justify-between">
                    <div className="text-xl text-[#303030]">Нийт төлөх дүн</div>
                    <div className="text-xl font-normal text-black">
                      {cart.reduce(
                        (total, item) => total + item.price * item.inCart,
                        0
                      )}
                      ₮
                    </div>
                  </div>
                </div>
                <div className="flex w-full h-[56px] rounded-full items-center justify-center text-lg font-600 font-['Inter'] text-white bg-[#308226] ">
                  Үргэлжлүүлэх
                </div>
              </div>
            ) : (
              <div className={`w-full flex justify-center items-center`}>
                Empty Cart!
              </div>
            )}
          </div>
        )}
      </main>
    </MainLayout>
  );
}
