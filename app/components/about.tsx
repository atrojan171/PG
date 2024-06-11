import "../styles/*.css"
import { Link } from "@remix-run/react";
import { Parallax, ParallaxLayer, IParallax} from "@react-spring/parallax";
import { useRef } from "react";


export function About(){

  const parallax = useRef<IParallax>(null!)


    return(
        <div>
            <Parallax pages={2} ref={parallax} className="no-scrollbar" style={{backgroundColor:"#FAFAFA"}}>
                <ParallaxLayer factor={1} offset={0} speed={-1}>
                    <div className="about z-0 absolute -top-52 left-24 w-5/12 h-5/6 rounded-full bg-gradient-to-b from-gray-100 via-gray-150 to-gray-200 shadow-xl"></div>
                </ParallaxLayer>
            </Parallax>
        </div>

    );

}