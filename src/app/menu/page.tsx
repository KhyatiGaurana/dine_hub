import Link from 'next/link'
import React from 'react'
import { menu } from '@/data'

const MenuPage=()=>{
    
    return(
        <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center bg-peach'>
            {menu.map((category)=>(
                <Link href={`/menu/${category.slug}`} key={category.id} className={`shadow-2xl w-full h-2/3 bg-cover p-6 xl:h-1/2  bg-rust odd:bg-burnt_orange`} style={{backgroundImage:`url(${category.img})`}}>
                    <div className={`h-full md:w-1/2 w-2/3 flex flex-col justify-between`}>
                        <h1 className={`text-${category.color} uppercase text-2xl font-bold md:text-5xl font-chicle tracking-wider`}>
                            {category.title}
                        </h1>
                        <p className={`text-${category.color} md:my-4 md:text-2xl text-lg my-2 font-yellowtail`}>
                            {category.desc}
                        </p>
                        <button className={`hidden xl:block bg-${category.color} text-${category.color === "rust" ? "ochre" : "rust"} py-2 px-4 font-yellowtail text-2xl rounded-[50%] font-semibold tracking-wider`}>
                            Explore
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MenuPage