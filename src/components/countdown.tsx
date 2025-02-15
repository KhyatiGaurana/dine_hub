"use client"
import React from "react";
import Countdown from 'react-countdown'

const endingDate= new Date("2024-10-05")
const CountDown=()=>{
    return (
        <Countdown className="font-bold text-5xl text-ochre" date={endingDate}/>

    )
}
export default CountDown