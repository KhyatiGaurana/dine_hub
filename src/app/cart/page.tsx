import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Notifications from "../../components/notifications";
import Image from "next/image";
import { singleProduct } from "@/data";

const CartPage=()=>{
    return(
        <>
            <div className="grid grid-flow-row auto-rows-max md:grid-cols-3 my-8 mx-10">
                <div className="grid md:col-span-2 grid-flow-row gap-4 md:mr-10">
                    <div className="w-full flex flex-row justify-around place-items-center hover:bg-peach hover:scale-105 delay-75">
                        {singleProduct.img && (
                        <div className="relative w-2/12 aspect-square">
                            <Image src={singleProduct.img} fill alt={`${singleProduct.title}`}></Image>
                        </div>
                        )}
                        <div className="w-1/3 text-burnt_orange flex flex-col">
                        <span className="uppercase md:text-xl text-lg font-bold">{singleProduct.title}</span>
                        <span className="text-xs md:text-sm">subtext</span>
                        </div>
                        <div className="text-burnt_orange md:text-lg font-bold">
                            ${singleProduct.price}
                        </div>
                        <button className="text-burnt_orange font-bold">
                            X
                        </button>
                    </div>



                    <div className="w-full flex flex-row justify-around place-items-center hover:bg-peach hover:scale-105 delay-75">
                        {singleProduct.img && (
                        <div className="relative w-2/12 aspect-square">
                            <Image src={singleProduct.img} fill alt={`${singleProduct.title}`}></Image>
                        </div>
                        )}
                        <div className="w-1/3 text-burnt_orange flex flex-col">
                        <span className="uppercase md:text-xl text-lg font-bold">{singleProduct.title}</span>
                        <span className="text-xs md:text-sm">subtext</span>
                        </div>
                        <div className="text-burnt_orange md:text-lg font-bold">
                            ${singleProduct.price}
                        </div>
                        <button className="text-burnt_orange font-bold">
                            X
                        </button>
                    </div>

                </div>

                

                <div className="bg-peach md:-my-8 md:-mr-10 -mx-10 mt-8 -mb-8">
                    <div className="grid grid-flow-row gap-8 w-4/5 justify-self-center my-8">
                        <div className="w-full flex flex-row items-center justify-between text-burnt_orange ">
                            <span>Subtotal</span>
                            <span>${singleProduct.price}</span>
                        </div>
                        <div className="flex flex-row items-center justify-between text-burnt_orange">
                            <span>Service Cost</span>
                            <span>${singleProduct.price}</span>
                        </div>
                        <div className="flex flex-row items-center justify-between text-burnt_orange">
                            <span>Delivery Cost</span>
                            <span>${singleProduct.price}</span>
                        </div>

                        <hr className="w-11/12 flex justify-self-center border-orange-400"/>
                        <div className="flex flex-row items-center  justify-between text-burnt_orange">
                            <span>Total</span>
                            <span className="font-bold">${singleProduct.price}</span>
                        </div>
                        <button className="bg-burnt_orange text-white rounded-sm py-2 px-5 uppercase">Checkout</button>
                    </div>
                    

                </div>
            </div>

        </>
        
    )
}
export default CartPage