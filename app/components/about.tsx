import "../styles/header.css"
import { Link } from "@remix-run/react";
import { Parallax, ParallaxLayer, IParallax} from "@react-spring/parallax";
import { useRef } from "react";


export function About(){

  const parallax = useRef<IParallax>(null!)


    return(

        <div>
            <Parallax pages={2} ref={parallax} className=".no-scrollbar">          
                <div className="grid relative">
                    <ParallaxLayer offset={0} speed={-2} factor={2} className="z-0">
                        <div className="bg-green-200 w-scren h-screen" style={{marginTop: "-50%"}}></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.9} factor={2} className="z-40">
                        <div className="h-96 w-96 bg-blue-600 border-none rounded-full -right-40 -top-40 absolute"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-20">
                        <div className="h-96 w-96 bg-blue-800 border-none rounded-full -right-40 -top-0 absolute"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-30">
                        <div className="h-96 w-96 bg-blue-400 border-none rounded-full right-32 -top-40 absolute"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-10">
                        <div className="h-96 w-96 bg-green-800 border-none rounded-full right-10 -top-16 absolute"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-0">    
                        <div className="h-96 w-96 bg-green-400 border-none rounded-full right-60 -top-32 absolute"></div>
                    </ParallaxLayer>
                    
                    <ParallaxLayer offset={0} speed={-2.22} factor={0} className="z-20">
                        <div className="h-96 w-96 bg-green-800 border-none rounded-full left-96 -top-64 absolute"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-2.3} factor={0} className="z-30">
                        <div className="h-96 w-96 bg-blue-300 border-none rounded-full" style={{marginLeft: "37.5%", marginTop: "-17.5%"}}></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-2.22} factor={0} className="z-20">
                        <div className="h-96 w-96 bg-green-800 border-none rounded-full right-96 -top-64 absolute"></div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={0} speed={-1.9} factor={2} className="z-40">
                        <div className="h-96 w-96 bg-blue-600 border-none rounded-full -left-40 -top-40 absolute"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-20">
                        <div className="h-96 w-96 bg-blue-800 border-none rounded-full -left-40 -top-0 absolute"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-30">
                        <div className="h-96 w-96 bg-blue-400 border-none rounded-full left-32 -top-40 absolute"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-10">
                        <div className="h-96 w-96 bg-green-800 border-none rounded-full left-10 -top-16 absolute"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-0">
                        <div className="h-96 w-96 bg-green-400 border-none rounded-full left-60 -top-32 absolute"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-2.15} factor={2} className="z-40 ">
                        <h1 className="justify-self-center text-9xl text-blue-600" style={{marginLeft: "39.5%", marginTop: "12.5%"}}>O nas</h1>
                    </ParallaxLayer>

                </div>
            </Parallax>
        </div>

    );

}