import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const FeaturedItems = () => {
  return (
    <div className="w-screen overflow-x-scroll text-orange-600">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* single item */}
        {featuredProducts.map((item) => (
          <div className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-orange-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
            {/* image container */}
            {item.img && (
              <div key={item.id} className="relative flex-1 w-full hover:rotate-45 transition-all duration-300">
                <Image src={item.img} alt="" fill className="object-contain " />
              </div>
            )}
            {/* text container */}
            <div className="flex flex-col gap-4 text-center pt-4">
              <h1 className="text-xl font-bold upeprcase xl:text-3xl 2xl:text-4xl">{item.title}</h1>
              <p className="p-2">{item.desc}</p>
              <span className="text-lg font-semibold">${item.price}</span>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-sm">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
