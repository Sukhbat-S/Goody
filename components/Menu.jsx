"use client";
import { useHomeContext } from "@/contexts/HomeContext";
import toast from "react-hot-toast";
import { MenuCard } from ".";

export const Menu = () => {
  const { menu, data, setData, cart, setCart } = useHomeContext();

  const handleCart = (index) => {
    const selectedItem = data[index];

    const existingCartItemIndex = cart.findIndex(
      (item) => item.title === selectedItem.title
    );
    if (
      existingCartItemIndex !== -1 &&
      cart[existingCartItemIndex].inCart > 0
    ) {
      return toast("Таны сагсанд аль хэдийн орсон байна!", { icon: "🛒" });
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
    <>
      {menu === "Menu" && (
        <div className="grid grid-flow-row grid-cols-4 gap-4 items-center justify-center sm:items-start ">
          {data.map((x, index) => {
            return (
              <div key={index}>
                <MenuCard
                  title={x.title}
                  left={x?.left}
                  price={x?.price}
                  img={x?.img}
                  id={x.id}
                  index={index}
                  addToCart={() => handleCart(index)}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
