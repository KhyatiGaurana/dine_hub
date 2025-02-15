import { pizzas } from "@/data";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const CategoryPage=()=>{
    return(
        <div className=" text-burnt_orange bg-peach">
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-8 mx-8">
            {pizzas.map(item=>(
                <Link className="w-full p-4 hover:bg-peach hover:scale-105 hover:shadow-md ease-in-out" href={`/product/${item.id}`} key={item.id}>
                    {item.img &&
                    <div className="flex flex-col items-center">
                        <Image src={`${item.img}`} width={500} height={600} alt={`${item.title}`} style={{width:"70%"}} className="[aspect-ratio:1]"/>
                        <div className="flex flex-wrap w-full justify-between group pt-5 ">
                            <div className="text-2xl font-bold">
                                {item.title}
                            </div>
                            <div className="flex items-center font-bold text-2xl group-hover:hidden">
                                ${item.price}
                            </div>
                            <button className="hidden group-hover:block bg-burnt_orange text-lg text-white px-4 py-2 transition ease-in-out ">
                                Add to Cart
                            </button>
                        </div>
                        

                    </div>
                    }
                
                </Link>
                
            ))}
            </div>
        </div>
    )
}

export default CategoryPage