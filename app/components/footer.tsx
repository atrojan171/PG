import "../styles/*.css"
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';


export function Footer(){

 
    return(
        <div className="w-auto h-auto relative">
            <div className="absolute w-[240%] h-96 z-90 -ml-96 rounded-t-[100%] bg-gradient-to-b from-blue-300 via-blue-500 to-blue-600"></div>
            <div className="absolute left-20 z-100 w-auto h-auto top-28 text-white text-center">
                <h1 className="pt-3 pl-1 pb-3 text-xl font-semibold underline">Kontakt</h1>
                <p className="p-1 hover:underline">znojemskeplavani@sezam.cz</p>
                <p className="p-1">Bc. Veronika Kolníková – předsedkyně</p>
                <p className="p-1">+420 721 250 043</p>
                <p className="p-1">Mgr. Jiří Kyněra – šéftrenér</p>
                <p className="p-1">+420 602 721 168</p>
            </div>      
            <div className="absolute ml-20 left-96 z-100 w-auto h-auto top-24 text-white text-center">
                <h1 className="pt-3 pl-1 pb-3 text-xl font-semibold underline">Adresa</h1>
                <p className="p-1 hover:underline">TJ plavání Znojmo, z.s.</p>
                <p className="p-1">Holandská 2716/5</p>
                <p className="p-1">671 81 Znojmo</p>
                <p className="p-1">IČ: 08795525</p>
                <p className="p-1">Zapsán u Krajského soudu v Brně, spisová značka L26505</p>
            </div>
            <div className="absolute text-center grid justify-center 3xl:mr-60 right-96 mr-20 top-20">
                <h1 className="pt-3 pl-1 pb-3 text-xl text-white font-semibold underline">Mapa</h1>
                <img src="/images/logo/logo.png" className="rounded-full border-none w-40 h-40"/>
            </div>
        </div>
    );

}