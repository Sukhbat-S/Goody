"use client";
import { useHomeContext } from "@/contexts/HomeContext";
import toast from "react-hot-toast";
import { MenuCard } from ".";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Menu = () => {
  const { menu, data, setData, cart, setCart } = useHomeContext();

  const handleCart = (id) => {
    const selectedItem = data.find((item) => item.id === id);

    const existingCartItemIndex = cart.findIndex(
      (item) => item.id === selectedItem.id
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
      const itemIndex = newData.findIndex(
        (item) => item.id === selectedItem.id
      );
      if (itemIndex !== -1) {
        newData[itemIndex] = {
          ...newData[itemIndex],
          left: newData[itemIndex].left - 1,
        };
      }
      return newData;
    });
  };

  const itemsPerPage = 8;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`?page=${page}`, undefined, { shallow: true });
  };
  const paginationData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
      {menu === "Menu" && (
        <div className="grid gap-4">
          <div
            className={`grid grid-flow-row grid-cols-4 gap-4 items-center justify-center w-full`}
          >
            {paginationData.map((x, index) => {
              return (
                <div key={index} className="flex">
                  <MenuCard
                    title={x.title}
                    left={x?.left}
                    price={x?.price}
                    img={x?.img}
                    id={x.id}
                    index={index}
                    addToCart={() => handleCart(x.id)}
                    currentPage={currentPage}
                    cart={cart}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex w-full  justify-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-[100px]  rounded-md ${
                  page === currentPage
                    ? "bg-[#1C4B16] text-white duration-700"
                    : ""
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
