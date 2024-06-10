import "../styles/header.css"
import { Link } from "@remix-run/react";

export function Header(){

    return(

        <div className="header absolute right-12 translate-y-14 min-2xl:translate-y-16 shadow-xl border-none rounded-3xl overflow-hidden bg-white z-10">
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

    );

}