"use client";
import Link from "next/link";
import React from "react";
import Menu from "./menu";
import CartIcon from "./cartIcon";
import Image from "next/image";

const Navbar=()=>{
    const user=false
    return(
        <>
        <div className="h-15 text-burnt_orange text-lg p-4 flex items-center justify-between bg-peach lg:px-10 xl:px-20">
            <div className="hidden md:flex gap-6 flex-1 font-chicle text-2xl">
                <Link href="/">Homepage</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/">Contact</Link>
            </div>
            <div className="flex-1 text-center">
                <Link href="/" className="text-3xl font-monoton font-semibold">DineHub</Link>
            </div>
            <div className="md:hidden">
                <Menu />
            </div>
            <div className="hidden md:flex gap-4 flex-1 justify-end font-chicle text-2xl">
                {!user ? (
                    <Link href="/login">
                    Login
                    </Link>
                ) : (
                    <Link href="/orders">
                    Orders
                    </Link>
                )}
                <Link href="/cart">
                    Cart
                </Link>
            </div>
        </div>
        <div className="w-screen h-8 border-y-burnt_orange border-2" style={{ backgroundImage: "url('/tile.png')", backgroundRepeat: "repeat-x" }} >
        </div>
        </>
        
        
    )
}

export default Navbar