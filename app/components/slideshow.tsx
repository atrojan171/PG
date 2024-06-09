export function Slideshow(){

    const data:any = [
        {
            id: 1,
            img: "/images/slideshow/1.jpg",
        },
        {
            id: 2,
            img: "",
        },
        {
            id: 3,
            img: "",
        }
    ]
        return(

        <div className="slideshow w-screen h-screen overflow-hidden flex flex-row">
            {data.map((d:any) => (
                <div className="">
                    <img className="w-full h-full object-cover" src={d.img} />
                </div>
            ))}
        </div>

    );

}