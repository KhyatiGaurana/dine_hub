"use client"
import React, { useEffect, useState } from "react";
import next from "next";

type Props={
    price: number;
    id: number;
    options?:{additionalPrice:number, title:string}[];
};

const Price=({price, id, options}:Props)=>{
    const [total, setTotal]=useState(price);
    const [selected, setSelected]=useState(0);
    const [quantity, setQuantity]=useState(1);
    
    useEffect(()=>{
        setTotal(quantity*((options?options[selected].additionalPrice:price)+price));
    }, [quantity, selected, price, options]);

    function increaseQuantity(){
        setQuantity((prevQuantity)=>(prevQuantity<10?prevQuantity+1:prevQuantity));
    }
    function decreaseQuantity(){
        setQuantity((prevQuantity)=>(prevQuantity>1?prevQuantity-1:prevQuantity));
    }
    
    return(
        <div className="grid grid-rows-3 gap-3">
            <div className="flex lg:text-3xl text-2xl font-bold uppercase ">
                ${total.toFixed(2)}
            </div>
            <div className="w-full flex flex-row justify-between text-burnt_orange">
            {options && (
                options.map((items, index)=>(
                    <button onClick={()=>setSelected(index)} className={`flex ring-1 ring-burnt_orange hover:bg-burnt_orange hover:text-white px-2 md:px-6 lg:px-8 py-2 rounded-sm  text-sm lg:text-lg place-items-center ${selected===index?'bg-burnt_orange':'bg-white'} ${selected===index?'text-white':'text-burnt_orange'}`}>{items.title}</button>
                ))
            )}
            </div>
            <div className="flex h-full w-full flex-nowrap items-stretch justify-center border-[1px] border-burnt_orange">
                <div className="flex flex-row justify-between lg:w-8/12 w-7/12 border-burnt_orange p-2 placeholder-burnt_orange items-center">
                    Quantity
                    <button onClick={decreaseQuantity}>{`<`}</button>
                    <span>
                        {quantity}
                    </span>
                    <button onClick={increaseQuantity}>{`>`}</button>
                </div>
                <button className="uppercase lg:w-4/12 w-5/12  bg-burnt_orange text-white px-4 py-2 lg:px-6 text-xs lg:text-[16px] ">Add to Cart</button>
            </div>
        </div>
    )
}
export default Price