"use client";
import { useHomeContext } from "@/contexts/HomeContext";
import { MenuCard } from ".";

export const Menu = ({ changePage }) => {
  const { data, setData, cart, setCart } = useHomeContext();

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

  return (
    <>
      {
        <div
          className={`flex  w-screen duration-700  h-screen overflow-y-scroll  ${
            changePage ? "-translate-x-full " : "-inset-0 translate-x-0"
          } `}
        >
          <div
            className={`grid grid-flow-row grid-cols-4 gap-3 items-center justify-center w-full h-fit  duration-1000  mx-36   `}
          >
            {data.map((x, index) => (
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
      }
    </>
  );
};
