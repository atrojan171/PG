import "../styles/*.css"
import { Link } from "@remix-run/react";
import { Parallax, ParallaxLayer, IParallax} from "@react-spring/parallax";
import { useRef } from "react";


export function About(){

  const parallax = useRef<IParallax>(null!)


    return(
        <div>
            <Parallax pages={2} ref={parallax} className="no-scrollbar" style={{backgroundColor:"#FAFAFA"}}>
                <ParallaxLayer factor={1.5} offset={0} speed={-2}>
                    <div className="about z-0 absolute -top-52 left-24 w-2/6 h-2/6 rounded-fullshadow-xl"></div>
                </ParallaxLayer>
            </Parallax>
        </div>

    );

}