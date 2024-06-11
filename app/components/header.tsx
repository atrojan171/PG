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
        <div className={`header fixed w-screen h-24 overflow-hidden bg-white z-30 grid items-center ${visible ? "visible" : ""}`}>
            <div className="fixed">
                <img className="ml-4 h-20 w-20" src="/images/logo/logo.png"/>
            </div>
            <nav className="flex flex-wrap flex-row list-none fixed right-0 text-base">
                <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">O nas</li></Link>
                <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Zavodni plavci</li></Link>
                <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Kurzy a primetske tabory</li></Link>
                <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Treneri</li></Link>
                <Link to={""}><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Kontakt</li></Link>
                <a href="https://www.facebook.com/TJ.plavani.Znojmo/" target="_blank"><li className="p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Facebook</li></a>
                <Link to={"/"}><li className="p-5 hover:underline cursor-pointer transition-all"><div className="w-6 h-6"></div></li></Link>
            </nav>
        </div>

    );

}