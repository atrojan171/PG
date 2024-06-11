import "../styles/*.css"
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';


export function Footer(){

 
    return(
        <div className="w-[240%] h-96 z-90 -ml-96 rounded-t-[100%] bg-gradient-to-b from-blue-300 via-blue-500 to-blue-600 relative">
            <div className="absolute left-0 z-10 w-auto h-auto">
                <h1 className="">Kontakt</h1>
                <p>znojemskeplavani@sezam.cz</p>
                <p>Bc. Veronika Kolníková – předsedkyně</p>
                <p>+420 721 250 043</p>
                <p>Mgr. Jiří Kyněra – šéftrenér</p>
                <p>+420 602 721 168</p>
            </div>
        </div>
    );

}