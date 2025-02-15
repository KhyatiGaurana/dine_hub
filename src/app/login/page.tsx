import React from "react";
import Image from "next/image";
import Link from "next/link";

const LoginPage=()=>{
    return(
        <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-10rem)] flex items-center justify-center">
            <div className="h-full flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2 shadow-2xl rounded-md">
                <div className="relative flex h-1/3 w-full md:h-full md:w-1/2 rounded-md">
                    <Image src={'/loginBg.png'} fill alt="cheese" className="object-cover rounded-s-md"></Image>
                </div>
                <div className="flex flex-col gap-8 p-10 md:w-1/2">
                <h1 className="text-xl xl:text-3xl font-bold"> Welcome </h1>
                <p>
                    Log into your account or create a new one using socials
                </p>
                <button className="flex flex-row px-4 py-2 gap-4 ring-2 ring-orange-200 justify-between items-center">
                    <Image src={'/google.png'} alt="google" width={20} height={20} className="flex object-contain"></Image>
                    <span className="flex pl-2">Sign in with Google</span>
                </button>
                <button className="flex flex-row px-4 py-2 gap-4 ring-2 ring-orange-200 justify-between items-center">
                    <Image src={'/facebook.png'} alt="google" width={20} height={20} className="flex object-contain"></Image>
                    <span className="flex">Sign in with Facebook</span>
                </button>
                <p>
                    Have a problem? <Link href={'/'} className="underline">Contact us</Link> 
                </p>
                </div>
            </div>
        </div>
        
    )
}

export default LoginPage