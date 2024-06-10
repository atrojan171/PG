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
            <div className="logo absolute translate-x-12 translate-y-6 border-none rounded-full overflow-hidden z-10 shadow-xl">
              <img className="w-36 h-36" src="/images/logo/logo.png"/>
            </div>
            <div className="absolute right-12 translate-y-14 min-2xl:translate-y-16 shadow-xl border-none rounded-3xl overflow-hidden bg-white z-10">
              <nav className="flex flex-wrap flex-row list-none min-2xl:text-xl text-base">
                  <Link to={""}><li className="min-2xl:p-6 p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">O nas</li></Link>
                  <Link to={""}><li className="min-2xl:p-6 p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Zavodni plavci</li></Link>
                  <Link to={""}><li className="min-2xl:p-6 p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Kurzy a primetske tabory</li></Link>
                  <Link to={""}><li className="min-2xl:p-6 p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Treneri</li></Link>
                  <Link to={""}><li className="min-2xl:p-6 p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Kontakt</li></Link>
                  <a href="https://www.facebook.com/TJ.plavani.Znojmo/" target="_blank"><li className="min-2xl:p-6 p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Facebook</li></a>
                  <Link to={"/"}><li className="min-2xl:p-6 p-5 hover:underline cursor-pointer transition-all"><div className="w-6 h-6"></div></li></Link>
              </nav>
            </div>
          </div>
          <Slideshow />
          <About/>
        </div>
    </div>
  );
} 

