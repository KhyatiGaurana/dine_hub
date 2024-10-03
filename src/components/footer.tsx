"use client";
import Link from "next/link";
import React from "react";

const Footer=()=>{
    return(
        <div className="h-10 border-t-2 border-t-orange-600 text-gray-500">
            <div className="flex flex-wrap justify-center gap-10 px-10 border-t-gray-500 py-4">
                <Link href="/">Contact</Link>
                <Link href="/">Terms</Link>
                
            </div>
            <div className="text-base leading-6 text-center text-gray-400 pb-4">
                © 2021 DineHub, Inc. All rights reserved.
                </div>
        </div>
    )
}

export default Footer