import type { MetaFunction } from "@netlify/remix-runtime";
import {Header} from "~/components/header";
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
      <Parallax pages={3} ref={parallax}>
        <div className="desktop bg-white w-full h-full relative select-none overflow-hidden">
          <ParallaxLayer offset={0} factor={1} speed={0}>
            <div className="logo absolute translate-x-12 translate-y-6 border-none rounded-full overflow-hidden z-10 shadow-xl">
              <img className="w-36 h-36" src="/images/logo/logo.png"/>
            </div>
            <Header />
            <Slideshow />
          </ParallaxLayer>
            <ParallaxLayer offset={1} speed={-2} factor={2} className="z-0">
                <div className="bg-blue-200 w-scren h-screen relative -top-2/4"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={-1.9} factor={2} className="z-40">
                <div className="h-96 w-96 bg-blue-600 border-none rounded-full -right-40 -top-40 absolute"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={-1.95} factor={2} className="z-20">
                <div className="h-96 w-96 bg-blue-800 border-none rounded-full -right-40 -top-0 absolute"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={-1.95} factor={2} className="z-30">
                <div className="h-96 w-96 bg-blue-400 border-none rounded-full right-32 -top-40 absolute"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={-1.95} factor={2} className="z-10">
                <div className="h-96 w-96 bg-green-800 border-none rounded-full right-10 -top-16 absolute"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={-1.95} factor={2} className="z-0">    
                <div className="h-96 w-96 bg-green-400 border-none rounded-full right-60 -top-32 absolute"></div>
            </ParallaxLayer>
            
            <ParallaxLayer offset={1} speed={-2.2} factor={2} className="z-20">
                <div className="h-96 w-96 bg-green-800 border-none rounded-full left-96 -top-64 absolute"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={-2.3} factor={2} className="z-30">
                <div className="h-96 w-96 bg-blue-300 border-none rounded-full absolute m-auto left-0 right-0 -top-72"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={-2.225} factor={2} className="z-20">
                <div className="h-96 w-96 bg-green-800 border-none rounded-full right-96 -top-64 absolute"></div>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={-1.9} factor={2} className="z-40">
                <div className="h-96 w-96 bg-blue-600 border-none rounded-full -left-40 -top-40 absolute"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={-1.95} factor={2} className="z-20">
                <div className="h-96 w-96 bg-blue-800 border-none rounded-full -left-40 -top-0 absolute"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={-1.95} factor={2} className="z-30">
                <div className="h-96 w-96 bg-blue-400 border-none rounded-full left-32 -top-40 absolute"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={-1.95} factor={2} className="z-10">
                <div className="h-96 w-96 bg-green-800 border-none rounded-full left-10 -top-16 absolute"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={-1.95} factor={2} className="z-0">
                <div className="h-96 w-96 bg-green-400 border-none rounded-full left-60 -top-32 absolute"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={-2.15} factor={2} className="z-40 ">
                <h1 className="justify-self-center text-9xl text-blue-600 absolute m-auto -translate-x-1/2 left-1/2 top-40">O nas</h1>
            </ParallaxLayer>
        </div>
      </Parallax>
    </div>
  );
}

