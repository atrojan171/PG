import "../styles/header.css"
import { Link } from "@remix-run/react";
import React, { useEffect, useState } from "react";

interface HeaderProps {
  isVisible: boolean;
}

export function Header({ isVisible }: HeaderProps){

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    return(
        <div className={`header fixed w-full h-32 overflow-hidden bg-white z-10 grid items-center ${visible ? "visible" : ""}`}>
            <div className="fixed">
                <img className="ml-2 h-28 w-28" src="/images/logo/logo.png"/>
            </div>
            <nav className="flex flex-wrap flex-row list-none fixed right-0 text-lg">
                <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">O nas</li></Link>
                <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Zavodni plavci</li></Link>
                <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Kurzy a primetske tabory</li></Link>
                <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Treneri</li></Link>
                <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Kontakt</li></Link>
                <a href="https://www.facebook.com/TJ.plavani.Znojmo/" target="_blank"><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Facebook</li></a>
                <Link to={"/"}><li className="p-5 hover:underline cursor-pointer transition-all"><div className="w-7 h-7"></div></li></Link>
            </nav>
        </div>

    );

}