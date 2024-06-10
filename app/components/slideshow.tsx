import { useEffect, useState} from "react";
import "../styles/slideshow.css"

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

    const [currentIndex, setCurrentIndex] = useState(0);
    const slideWidth = 100;

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 4500);

        return () => clearInterval(interval);
    }, [data.length]);
    
    return(
    
        <div className="relative z-0 w-screen h-screen grid overflow-hidden">
            <div className="slider w-screen flex flex-row flex-nowrap transition-transform " style={{ transform: `translateX(-${currentIndex * slideWidth}%)`}}>
                {data.map((d:any) => (
                    <img key={d.id} className="slide w-screen h-full" src={d.img}/> 
                ))}
            </div>
            <div className="absolute bottom-0 z-10 flex flex-row flex-nowrap justify-self-center">
                {data.map((d:any, index:any) => (
                      <div key={d.id} className={`dot w-8 h-8 m-2 border-2 rounded-full cursor-pointer hover:bg-blue-600 transition-all ${index === currentIndex ? "bg-blue-600" : "bg-gray-800"}`} onClick={() => setCurrentIndex(index)}></div>
                ))}
            </div>
        </div>

    );

}