"use client";
import BasketCard from "./BasketCard";
import { Order } from "./Order";

export const Cart = ({ cart, changePage, setChangePage }) => {
  return (
    <>
      {
        <div
          className={`flex w-screen gap-8  duration-700 px-36 items-start ${
            changePage ? "-translate-x-full -inset-0" : " translate-x-full"
          }  `}
        >
          <div className="flex flex-col gap-3 flex-1 overflow-scroll  h-[580px]">
            {cart.length > 0 &&
              cart.map((x, index) => {
                return (
                  <div key={index}>
                    <BasketCard
                      index={index}
                      info={x?.info}
                      inCart={x?.inCart}
                      title={x?.title}
                      count={x?.count}
                      itemCount={x?.itemCount}
                      price={x?.price}
                      img={x?.img}
                      id={x.id}
                    />
                  </div>
                );
              })}
          </div>
          <Order cart={cart} setChangePage={setChangePage} />
        </div>
      }
    </>
  );
};
