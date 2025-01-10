"use client";
import { staticDatas } from "@/static";
import { createContext, useContext, useState } from "react";
const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
  const [menu, setMenu] = useState("Menu");
  const [data, setData] = useState(staticDatas);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState([]);
  const [removing, setRemoving] = useState(false);
  const [changePage, setChangePage] = useState(false);

  return (
    <HomeContext.Provider
      value={{
        menu,
        setMenu,
        removing,
        setRemoving,
        data,
        setData,
        cart,
        setCart,
        cartCount,
        setCartCount,
        changePage,
        setChangePage,
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
