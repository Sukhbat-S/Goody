"use client";
import { useHomeContext } from "@/contexts/HomeContext";
import MainLayout from "@/components/layout/MainLayout";
import { Menu } from "@/components";
import { Cart } from "@/components";
import { useSwipeable } from "react-swipeable";

export default function Home() {
  const { menu, cart, changePage, setChangePage } = useHomeContext();

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => {
      setChangePage(false);
    },
    onSwipedLeft: () => {
      setChangePage(true);
    },
  });

  return (
    <MainLayout>
      <div className="flex w-fit " {...swipeHandlers}>
        <Menu changePage={changePage} />
        <Cart
          menu={menu}
          cart={cart}
          changePage={changePage}
          setChangePage={setChangePage}
        />
      </div>
    </MainLayout>
  );
}
