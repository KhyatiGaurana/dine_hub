"use client";
import Link from "next/link";
import React from "react";

const Footer=()=>{
    return(
        <div className="h-10 border-t-2 border-t-burnt_orange bg-peach text-rust ">
            <div className="flex flex-wrap justify-center gap-10 px-10 bg-peach border-t-gray-500 py-4">
                <Link href="/">Contact</Link>
                <Link href="/">Terms</Link>
                
            </div>
            <div className="text-base leading-6 text-center bg-peach text-burnt_orange pb-4">
                © 2021 DineHub, Inc. All rights reserved.
                </div>
        </div>
    )
}

export default Footer