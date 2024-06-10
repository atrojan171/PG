import "../styles/*.css"
import { Link } from "@remix-run/react";
import { Parallax, ParallaxLayer, IParallax} from "@react-spring/parallax";
import { useRef } from "react";


export function About(){

  const parallax = useRef<IParallax>(null!)


    return(

        <div>
            <Parallax pages={1.25} ref={parallax} className="no-scrollbar">
                <ParallaxLayer speed={-1} factor={1} offset={0}>
                    <div className="w-4/12 h-4/6 rounded-full border-none bg-blue-600 absolute -left-40 -top-40"></div>
                </ParallaxLayer>
            </Parallax>
        </div>

    );

}