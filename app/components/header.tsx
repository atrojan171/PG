import "../styles/header.css"

export function Header(){

    return(

        <div className="header absolute right-12 translate-y-14 min-2xl:translate-y-16 shadow-xl border-none rounded-3xl overflow-hidden bg-white z-10">
            <nav className="flex flex-wrap flex-row list-none min-2xl:text-xl text-base">
                <li className="min-2xl:p-6 p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">O nas</li>
                <li className="min-2xl:p-6 p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Zavodni plavci</li>
                <li className="min-2xl:p-6 p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Kurzy a primetske tabory</li>
                <li className="min-2xl:p-6 p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Treneri</li>
                <li className="min-2xl:p-6 p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Kontakt</li>
                <li className="min-2xl:p-6 p-5 hover:bg-blue-500 hover:text-white hover:underline cursor-pointer transition-all">Facebook</li>
                <li className="min-2xl:p-6 p-5 hover:underline cursor-pointer transition-all"><div className="w-6 h-6"></div></li>
            </nav>
        </div>

    );

}