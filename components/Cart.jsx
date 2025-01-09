import React from "react";
import { BasketCard, Order } from ".";

export const Cart = ({ menu, cart }) => {
  return (
    <>
      {menu === "Cart" && (
        <div className=" overflow-hidden flex flex-row w-full gap-8 h-full">
          <div className="flex flex-col gap-3 w-[41%] overflow-scroll  h-[580px]">
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
          <Order cart={cart} />
        </div>
      )}
    </>
  );
};
