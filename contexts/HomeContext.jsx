"use client";
import { staticDatas } from "@/static";
import { createContext, useContext, useState } from "react";
const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
  const [menu, setMenu] = useState("Menu");
  const [data, setData] = useState(staticDatas);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState([]);
  return (
    <HomeContext.Provider
      value={{
        menu,
        setMenu,
        data,
        setData,
        cart,
        setCart,
        cartCount,
        setCartCount,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  return useContext(HomeContext);
};

export default HomeContextProvider;
