export function Header(){

    return(

        <div className="header absolute right-16 translate-y-14 shadow-lg border-none rounded-3xl overflow-hidden bg-white z-10">
            <nav className="flex flex-wrap flex-row list-none text-lg">
                <li className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer transition-all">O nas</li>
                <li className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer transition-all">Zavodni plavci</li>
                <li className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer transition-all">Kurzy a primetske tabory</li>
                <li className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer transition-all">Treneri</li>
                <li className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer transition-all">Kontakt</li>
                <li className="p-4 hover:bg-blue-500 hover:text-white cursor-pointer transition-all">Facebook</li>
            </nav>
        </div>

    );

}