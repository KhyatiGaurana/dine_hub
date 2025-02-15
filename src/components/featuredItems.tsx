import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const FeaturedItems = () => {
  return (
    <div className="w-screen overflow-x-scroll font-semibold text-rust  bg-burnt_orange">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* single item */}
        {featuredProducts.map((item) => (
          <div key={item.id} className="w-screen h-[70vh] flex flex-col items-center justify-around p-6 hover:bg-peach group transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[95vh] border-rust border-double border-8 border-spacing-5">
            {/* image container */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-45 transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain brightness-90" />
              </div>
            )}
            {/* text container */}
            <div className="p-4 flex-1 flex flex-col items-center justify-center text-center gap-4 ">
              <h1 className="text-2xl uppercase xl:text-3xl 2xl:text-4xl hover:scale-110 transition-all duration-300 text-ochre group-hover:text-burnt_orange font-chicle font-light">{item.title}</h1>
              <p className="p-4 2xl:p-8 2xl:text-3xl text-xl group-hover:text-rust text-peach font-yellowtail font-light">{item.desc}</p>
              <div className="flex flex-row gap-6">
                <div className="relative max-w-sm">
                <Image src={'/bubble2.png'} width={100} height={50} alt="bubble" className="object-cover"></Image>
                <Image src={'/bubble3.png'} width={100} height={50} alt="bubble" className="inset-0 absolute group-hover:hidden object-cover"></Image>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-light font-chicle group-hover:text-rust text-peach">${item.price}</span>
                </div>
                
              </div>
                <button className="bg-ochre group-hover:bg-burnt_orange group-hover:text-peach font-yellowtail text-3xl px-4 py-3 rounded-[50%] rotate-12 w-48 h-20">
                  Add to cart
                </button>
              </div>
              
            </div>
          </div>
        ))}
      </div>
      <div className="w-screen h-8 border-y-burnt_orange border-2" style={{ backgroundImage: "url('/tile.png')", backgroundRepeat: "repeat-x" }} ></div>
    </div>
  );
};

export default FeaturedItems;
