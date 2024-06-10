import type { MetaFunction } from "@netlify/remix-runtime";
import {Header} from "~/components/header";
import { Link } from "@remix-run/react";
import {Slideshow} from "~/components/slideshow";
import { About } from "~/components/about";
import { Parallax, ParallaxLayer, IParallax} from "@react-spring/parallax";
import { useRef } from "react";


export const meta: MetaFunction = () => {
  return [
    { title: "Znojmo" },
    { name: "Znojmo", content: "" },
  ];
};

export default function Index() {

  const parallax = useRef<IParallax>(null!);

  return (
    <div>
      <Header/>
      <Parallax pages={4} ref={parallax}>
        <div className="desktop bg-white w-full h-full relative select-none overflow-hidden">
          <ParallaxLayer offset={0} factor={1} speed={0}>
            <div className="logo absolute translate-x-12 translate-y-6 border-none rounded-full overflow-hidden z-10 shadow-xl" style={{display:"none"}}>
              <img className="w-36 h-36" src="/images/logo/logo.png"/>
            </div>
            
              <div className="absolute right-12 translate-y-14 min-2xl:translate-y-16 shadow-xl border-none rounded-3xl overflow-hidden bg-white z-10" style={{display:"none"}}>
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
              
            <Slideshow />
          </ParallaxLayer>

        </div>
      </Parallax>
    </div>
  );
}

