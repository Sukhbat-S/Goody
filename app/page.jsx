"use client";
import { useHomeContext } from "@/contexts/HomeContext";
import MainLayout from "@/components/layout/MainLayout";
import { Menu } from "@/components";
import { Cart } from "@/components";
import { useSwipeable } from "react-swipeable";

export default function Home() {
  const { menu, cart, setMenu } = useHomeContext();

  const handleSwipe = () => {
    setMenu(menu === "Menu" ? "Cart" : "Menu");
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipe,
    onSwipedRight: handleSwipe,
    delta: 100,
  });

  return (
    <MainLayout>
      <main
        className="flex flex-row w-full justify-center items-start px-8 duration-500"
        {...swipeHandlers}
      >
        <Menu />
        <Cart menu={menu} cart={cart} />
      </main>
    </MainLayout>
  );
}
