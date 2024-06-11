import "../styles/*.css"
import { Link } from "@remix-run/react";
import { Parallax, ParallaxLayer, IParallax} from "@react-spring/parallax";
import { useRef } from "react";


export function About(){

  const parallax = useRef<IParallax>(null!)


    return(
        <div className="w-screen h-screen relative" id="about">
            <Parallax pages={4} ref={parallax} className="no-scrollbar">
                <ParallaxLayer factor={1} offset={0} sticky={{start: 0, end: 4}}>
                    <div className="about z-10 absolute 3xl:-left-14 3xl:top-36 2xl:top-20 3xl:top-0 w-5/12 h-5/6 scale-75 rounded-full"></div>
                </ParallaxLayer>
                <div className="z-10 text-blue-600 font-semibold">
                    <ParallaxLayer offset={0} factor={1} speed={-2}>
                        <div className="absolute 3xl:right-40 right-28 3xl:top-80 top-72 text-2xl text-center 3xl:top-80 shadow-2xl rounded-3xl">
                            <p className="p-8">
                                Klub byl založen v říjnu 1966 a je zaměřen na závodní plavání. 
                            </p>
                            <p className="p-5">
                                Pracuje s dětmi od úplných neplavců až po dospělé závodní plavce 
                            </p>
                            <p className="p-5">
                                s cílem vychovat reprezentanty České republiky.
                            </p>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={-2} factor={1}>
                        <div className="absolute z-10 3xl:right-40 right-28 top-72 text-center text-2xl 3xl:top-80 shadow-2xl rounded-3xl">
                            <p className="p-5">
                                Za dobu svého působení vychoval několik účastníků Olympiády 
                            </p>
                            <p className="p-3">
                                od roku 1988 do roku 2004 měl pokaždé svého zástupce, 
                            </p>
                            <p className="p-3">
                                někdy i 3 plavce na jedné olympiádě. 
                            </p>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={-2} factor={1}>
                        <div className="absolute z-10 3xl:right-32 right-8 top-72 text-center text-2xl 3xl:top-80 shadow-2xl rounded-3xl">
                            <p className="p-5">
                                Kromě olympiády startovali znojemští plavci a získávali medaile 
                            </p>
                            <p className="p-5">
                                na světových a evropských závodech jako jsou Světová univerziáda
                            </p>
                             <p className="p-5">
                                mistrovství světa juniorů i dospělých a mistrovství Evropy juniorů i dospělých.
                            </p>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer speed={-2} offset={3} factor={1}>
                        <div className="absolute z-10 3xl:right-32 right-8 shadow-2xl rounded-3xl shadow-2xl rounded-3xl  top-64 text-center text-2xl 3xl:top-80 shadow-2xl rounded-3xl p-4">
                            <p className="p-5">
                                Klub taky ve Znojmě každoročně pořádá 3 závodů, 
                            </p>
                            <p className="p-5">
                                které jsou zapsané v termínové listině Českého svazu plaveckých sportů. 
                            </p>
                            <p className="p-5">
                                v září se koná druhý nejstarší závod v ČR a to Velká cena města Znojma 
                            </p>
                                V dubnu je to Aprílová vlnka pro 10 až 12-leté žáky, určená juniorům a dospělým 
                            <p className="p-5">
                                a v říjnu pak Malá cena města Znojma pro 12 až 14-leté žáky.
                            </p>
                        </div>
                    </ParallaxLayer>
                </div>
            </Parallax>
        </div>

    );

}