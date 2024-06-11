import type { MetaFunction } from "@netlify/remix-runtime";
import {Header} from "~/components/header";
import { Link } from "@remix-run/react";
import {Slideshow} from "~/components/slideshow";
import { About } from "~/components/about";
import { useRef, useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Znojmo" },
    { name: "Znojmo", content: "" },
  ];
};

export default function Index() {

  const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
    const header = document.querySelector(".logo") as HTMLElement;
    const hide = document.querySelector(".hide") as HTMLElement;
    if (header) {
      const headerHeight = header.clientHeight;

      const handleScroll = () => {
        if (window.scrollY >= headerHeight) {
          setShowHeader(true);
          hide.style.display = "none";
        } else {
          setShowHeader(false);
            
          setTimeout(() => {
            hide.style.display = "block";
          }, 100);
          

        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <div>
      <Header isVisible={showHeader}/>
      <div className="desktop bg-white w-full h-full relative select-none ">       
          <div className="hide">
            <div className="logo absolute translate-x-12 translate-y-6 border-none rounded-full overflow-hidden shadow-xl z-40">
              <img className="w-36 h-36" src="/images/logo/logo.png"/>
            </div>
            <div className="absolute right-12 translate-y-14 min-2xl:translate-y-16 shadow-xl border-none rounded-3xl overflow-hidden bg-white z-40">
              <nav className="flex flex-wrap flex-row list-none min-2xl:text-xl text-base">
                  <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">O nas</li></Link>
                  <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Zavodni plavci</li></Link>
                  <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Kurzy a primetske tabory</li></Link>
                  <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Treneri</li></Link>
                  <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Kontakt</li></Link>
                  <a href="https://www.facebook.com/TJ.plavani.Znojmo/" target="_blank"><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Facebook</li></a>
                  <Link to={"/"}><li className="p-5 hover:underline cursor-pointer transition-all"><div className="w-6 h-6"></div></li></Link>
              </nav>
            </div>
          </div>
          <Slideshow />
          <svg className="z-20 top-4/4 3xl:-mt-12 -mt-11 absolute w-screen shadow-xl" style={{transform: "rotate(-183deg)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
            <defs>
              <linearGradient id="gradient" x1="100%" y1="0%" x2="100%" y2="160%">
                <stop offset="0%" style={{stopColor: "#93c5fd", stopOpacity: "1"}}/>
                <stop offset="50%" style={{stopColor: "#2563eb", stopOpacity: "1"}}/>
                <stop offset="100%" style={{stopColor: "#1d4ed8", stopOpacity: "1"}}/>
              </linearGradient>
            </defs>
            <path fill="url(#gradient)" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" ></path>
          </svg>
          <About/>
      </div>
    </div>
  );
} 

