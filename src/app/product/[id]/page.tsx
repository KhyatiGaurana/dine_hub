"use client"
import React from "react";
import Image from "next/image";
import { singleProduct } from "@/data";
import Price from "@/components/price";

const SingleProductPage=()=>{
    return(
        <div className="py-16 w-4/5 h-full flex flex-col md:flex-row md:justify-between place-items-center justify-self-center text-burnt_orange flex-wrap">
            {singleProduct.img && (
                    <div className="relative w-3/5 md:w-2/6 lg:w-2/5 [aspect-ratio:1]">
                    <Image src={singleProduct.img} alt="pizza" fill className="object-contain hover:rotate-90 duration-150 delay-75"/>
                    </div>
                )
            }
                    <div className="grid grid-flow-row auto-rows-max w-4/5 md:w-1/2 lg:w-2/5 justify-around">
                        <h1 className="flex text-2xl lg:text-3xl font-bold uppercase">
                            {singleProduct.title}
                        </h1>
                        <p className="flex text-wrap text-sm lg:text-lg">
                            {singleProduct.desc}
                        </p>
                        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
                        
                    </div>
        </div>
    )
}

export default SingleProductPage