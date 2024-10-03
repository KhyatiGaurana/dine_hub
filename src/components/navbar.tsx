"use client";
import Link from "next/link";
import React from "react";
import Menu from "./menu";
import CartIcon from "./cartIcon";

const Navbar=()=>{
    const user=false
    return(
        <div className="h-15 text-orange-600 text-lg p-4 flex items-center justify-between bg-white border-b-2 border-b-orange-600 lg:px-20 xl:px-40">
            <div className="hidden md:flex gap-4 flex-1">
                <Link href="/">Homepage</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/">Contact</Link>
            </div>
            <div className="flex-1 text-center">
                <Link href="/" className="text-2xl font-bold">DineHub</Link>
            </div>
            <div className="md:hidden">
                <Menu />
            </div>
            <div className="hidden md:flex gap-4 flex-1 justify-end">
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
    )
}

export default Navbar