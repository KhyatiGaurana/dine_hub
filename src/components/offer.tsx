import Image from "next/image";
import React from "react";
import CountDown from "./countdown";

const Offers = () => {
  return (
    <div className="bg-neutral-900 h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* text container */}
      <div className="flex-1 flex flex-col gap-8 items-center justify-center text-center p-6">
        <h1 className="text-5xl font-bold text-white xl:text-7xl">
          Delicious Burger and French Fries
        </h1>
        <p className="text-white xl:text-xl">
          DineHub's best-selling combo at 10% off. Grab your offer now!!
        </p>
        <CountDown/>
        <button className="bg-burnt_orange rounded-sm px-2 py-2 text-white">
          Order Now
        </button>
      </div>
      {/* image container */}
      <div className="flex-1 relative w-full md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offers;
