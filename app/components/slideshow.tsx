import { useEffect, useState} from "react";


export function Slideshow(){

    const data:any = [
        {
            id: 1,
            img: "/images/slideshow/1.jpg",
        },
        {
            id: 2,
            img: "/images/slideshow/2.jpg",
        },
        {
            id: 3,
            img: "/images/slideshow/3.jpg",
        },
        {
            id: 4,
            img: "/images/slideshow/4.jpg",
        },
        {
            id: 5,
            img: "/images/slideshow/5.jpg",
        },
    ]

    

    
    return(
    
        <div className="relative z-0 w-screen h-screen grid overflow-y-hidden">
            <div className="w-screen flex flex-row flex-nowrap">
                {data.map((d:any) => (
                    <img className="slide w-screen h-full" src={d.img}/> 
                ))}
            </div>
            <div className="absolute bottom-0 z-10 flex flex-row flex-nowrap justify-self-center">
                {data.map((d:any) => (
                    <div className="dot w-8 h-8 m-2 bg-gray-800 border-2 rounded-3xl cursor-pointer hover:bg-blue-600 transition-all shadow-xl">
                    </div>
                ))}
            </div>
        </div>

    );

}