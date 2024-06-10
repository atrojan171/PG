import "../styles/header.css"
import { Link } from "@remix-run/react";
import { Parallax, ParallaxLayer, IParallax} from "@react-spring/parallax";
import { useRef } from "react";


export function About(){

  const parallax = useRef<IParallax>(null!)


    return(

        <div>
            <Parallax pages={2} ref={parallax} style={{scrollbarWidth: "none"}}>          
                <div className="grid relative">

                    <ParallaxLayer offset={0} speed={-2} factor={2} className="z-0">
                        <div className="bg-green-200 w-scren h-screen" style={{marginTop: "-50%"}}></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.9} factor={2} className="z-40">
                        <div className="h-96 w-96 bg-blue-600 border-none rounded-full" style={{marginLeft: "85%", marginTop: "-10%"}}></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-20">
                        <div className="h-96 w-96 bg-blue-800 border-none rounded-full" style={{marginLeft: "85%", marginTop: "0%"}}></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-30">
                        <div className="h-96 w-96 bg-blue-400 border-none rounded-full" style={{marginLeft: "70%", marginTop: "-10%"}}></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-10">
                        <div className="h-96 w-96 bg-green-800 border-none rounded-full " style={{marginLeft: "75%", marginTop: "-2.5%"}}></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-0">    
                        <div className="h-96 w-96 bg-green-400 border-none rounded-full" style={{marginLeft: "60%", marginTop: "-7.5%"}}></div>
                    </ParallaxLayer>
                    
                    <ParallaxLayer offset={0} speed={-2.22} factor={0} className="z-20">
                        <div className="h-96 w-96 bg-green-800 border-none rounded-full" style={{marginLeft: "22%", marginTop: "-15.5%"}}></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-2.3} factor={0} className="z-10">
                        <div className="h-96 w-96 bg-blue-300 border-none rounded-full" style={{marginLeft: "37.5%", marginTop: "-17.5%"}}></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-2.22} factor={0} className="z-20">
                        <div className="h-96 w-96 bg-green-800 border-none rounded-full" style={{marginLeft: "53.75%", marginTop: "-15.5%"}}></div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={0} speed={-1.9} factor={2} className="z-40">
                        <div className="h-96 w-96 bg-blue-600 border-none rounded-full" style={{marginLeft: "-10%", marginTop: "-10%"}}></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-20">
                        <div className="h-96 w-96 bg-blue-800 border-none rounded-full" style={{marginLeft: "-10%", marginTop: "0%"}}></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-30">
                        <div className="h-96 w-96 bg-blue-400 border-none rounded-full" style={{marginLeft: "7.5%", marginTop: "-10%"}}></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-10">
                        <div className="h-96 w-96 bg-green-800 border-none rounded-full" style={{marginLeft: "0%", marginTop: "-2.5%"}}></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-1.95} factor={2} className="z-0">
                        <div className="h-96 w-96 bg-green-400 border-none rounded-full" style={{marginLeft: "15%", marginTop: "-7.5%"}}></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-2.15} factor={2} className="z-40">
                        <h1 className="justify-self-center text-9xl text-blue-600 z-50" style={{marginLeft: "40%", marginTop: "10%"}}>O nas</h1>
                    </ParallaxLayer>

                </div>
            </Parallax>
        </div>

    );

}