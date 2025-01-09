"use client";
import { useHomeContext } from "@/contexts/HomeContext";
import { MenuCard } from ".";
import { useSwipeable } from "react-swipeable";
import { useState } from "react";

export const Menu = () => {
  const { menu, data, setData, cart, setCart } = useHomeContext();
  const itemsPerPage = 8;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handleCart = (id) => {
    const selectedItem = data.find((item) => item.id === id);
    if (selectedItem.left === 0) {
      return;
    }

    const updatedCart = [...cart];
    const existingCartItemIndex = updatedCart.findIndex(
      (item) => item.id === id
    );

    if (existingCartItemIndex !== -1) {
      updatedCart[existingCartItemIndex] = {
        ...updatedCart[existingCartItemIndex],
        left: updatedCart[existingCartItemIndex].left - 1,
        inCart: updatedCart[existingCartItemIndex].inCart + 1,
      };
    } else {
      updatedCart.push({
        ...selectedItem,
        left: selectedItem.left - 1,
        inCart: 1,
      });
    }

    setCart(updatedCart);

    const updatedData = data.map((item) =>
      item.id === selectedItem.id ? { ...item, left: item.left - 1 } : item
    );
    setData(updatedData);
  };

  const handleSwipeMenuUp = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    } else if (currentPage === totalPages - 1) {
      setCurrentPage(0);
    }
  };

  const handleSwipeMenuDown = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    } else if (currentPage === 0) {
      setCurrentPage(totalPages - 1);
    }
  };

  const swipeMenu = useSwipeable({
    onSwipedUp: handleSwipeMenuUp,
    onSwipedDown: handleSwipeMenuDown,
    delta: 100,
  });

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = data.slice(startIndex, endIndex);

  return (
    <>
      {menu === "Menu" && (
        <div className="flex gap-1">
          <div
            {...swipeMenu}
            className={`grid grid-flow-row grid-cols-4 gap-3 items-center justify-center w-full h-full scroll-smooth`}
          >
            {currentPageItems.map((x, index) => (
              <div key={x.id}>
                <MenuCard
                  title={x.title}
                  left={x.left}
                  price={x.price}
                  img={x.img}
                  id={x.id}
                  index={index}
                  addToCart={() => handleCart(x.id)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
