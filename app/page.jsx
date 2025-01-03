"use client";
import { useEffect } from "react";
import { useHomeContext } from "@/contexts/HomeContext";
import { CartB } from "@/components/CartB";
import { MainLayout } from "../components/layout/index";
import Menu from "@/components/Menu/Menu";
import CardComponent from "@/components/Card";
import { staticDatas } from "@/static";
export default function Home() {
  const { menu, setMenu, data, setData, cart, setCart } = useHomeContext();

  useEffect(() => {
    console.log("In Data: ", data);
    console.log("In Cart: ", cart);
  }, [data, cart]);

  const handleCart = (index) => {
    const selectedItem = data[index];

    if (selectedItem.left <= 0) {
      alert("Out of stock!");
      return;
    }

    const existingCartItemIndex = cart.findIndex(
      (item) => item.title === selectedItem.title
    );

    if (existingCartItemIndex !== -1) {
      if (cart[existingCartItemIndex].inCart >= 3) {
        alert("You have reached its maximum limit BRO!");
        return;
      }

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
      <Menu />
      <button onClick={() => setMenu(() => "Cart")}></button>
      <main className=" flex flex-row w-full justify-center  items-start py-6 p-8">
        {menu === "Menu" && (
          <div className="grid grid-flow-row grid-cols-4 gap-6 items-center justify-center sm:items-start">
            {data.map((x, i) => {
              return (
                <CardComponent
                  title={x.title}
                  left={x?.left}
                  price={x?.price}
                  img={x?.img}
                  addToCart={() => handleCart(i)}
                  key={i}
                />
              );
            })}
          </div>
        )}
        {menu === "Cart" && (
          <div className=" overflow-hidden flex flex-row w-full gap-8 h-[80vh]">
            <div className="flex flex-col gap-3 overflow-auto">
              {cart.length > 0 &&
                cart.map((x, i) => {
                  return (
                    <CartB
                      title={x.title}
                      count={x?.count}
                      itemCount={x?.itemCount}
                      price={x?.price}
                      img={x?.img}
                      key={i}
                    />
                  );
                })}
            </div>
            <div className="flex flex-col w-[432px] h-[564px] justify-between bg-white border-2  border-[#ededed] p-4 rounded-xl">
              <div className="flex flex-col gap-6">
                <div className="flex text-xl font-medium">
                  Төлбөрийн мэдээлэл
                </div>
                <div className=" flex flex-row justify-between">
                  <div className="text-lg text-[#767676]">Bon Aqua</div>
                  <div className="flex flex-row gap-4">
                    <div className="text-lg text-[#767676]">1x</div>
                    <div className="text-lg text-[#767676]">2500₮</div>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className=" text-lg text-[#303030]">Нийт төлөх дүн</div>
                  <div className="text-lg font-normal text-black">7500₮</div>
                </div>
              </div>
              <div className="flex w-full h-[56px] rounded-full  items-center justify-center text-lg  font-600 font-['Inter'] text-white bg-[#308226] ">
                Үргэлжлүүлэх
              </div>
            </div>
          </div>
        )}
      </main>
    </MainLayout>
  );
}
