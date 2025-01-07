"use client";
import { useHomeContext } from "@/contexts/HomeContext";
import MainLayout from "@/components/layout/MainLayout";
import { Menu } from "@/components/Menu";
import { Cart } from "@/components/Cart";
export default function Home() {
  const { menu, cart } = useHomeContext();
  return (
    <MainLayout>
      <main className=" flex flex-row w-full justify-center  items-start py-6 px-8  ">
        <Menu />
        <Cart menu={menu} cart={cart} />
      </main>
    </MainLayout>
  );
}
