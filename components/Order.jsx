import { useHomeContext } from "@/contexts/HomeContext";
import React from "react";

export const Order = ({ cart, setChangePage }) => {
  const { setMenu, removing } = useHomeContext();
  return (
    <div className="flex-1">
      {cart.length > 0 ? (
        <div
          className={`flex flex-col gap-6 justify-between h-[570px] bg-white border-2 border-[#ededed] p-4 rounded-xl`}
        >
          <div className="h-fit grid gap-6">
            <div className="flex text-xl font-medium">Төлбөрийн мэдээлэл</div>
            <div className="grid  max-h-[300px] overflow-scroll">
              {cart.length > 0 &&
                cart.map((data, index) => {
                  let dissertCountedPrice = data.price * data.inCart;
                  return (
                    <div
                      key={index}
                      className={`flex flex-col gap-3 h-fit  w-full `}
                    >
                      <div
                        className={`flex flex-row justify-between w-full ${
                          removing === data.id ? "duration-500 scale-0 " : ""
                        } `}
                      >
                        <div className="text-[18px] text-[#767676]   ">
                          {data.title}
                        </div>
                        <div className="flex justify-between items-end gap-6  ">
                          <p className="text-[#767676] text-[18px]">
                            {data.inCart}x
                          </p>
                          <p className="text-[18px] text-[#767676]">
                            {dissertCountedPrice}₮
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="flex flex-row justify-between ">
              <div className="text-[18px] text-[#303030] ">Нийт төлөх дүн</div>
              <div className="text-xl font-normal text-black">
                {cart.length > 0 &&
                  cart.reduce(
                    (total, item) => total + item.price * item.inCart,
                    0
                  )}
                ₮
              </div>
            </div>
          </div>
          <button className="flex w-full py-[15px]  rounded-full items-center justify-center text-lg font-medium font-['Inter'] text-white bg-[#308226] ">
            Үргэлжлүүлэх
          </button>
        </div>
      ) : (
        <div className={`py-48 h-fit grid relative -left-32 gap-4 `}>
          <div>Сагсалсан бараа байхгүй байна!</div>
          <button
            onClick={() => setChangePage(false)}
            className="bg-[#308226] text-white px-12 py-3 mx-12 rounded-md w-fit"
          >
            Буцах
          </button>
        </div>
      )}
    </div>
  );
};
