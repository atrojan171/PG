import "../styles/results.css";
import RForm from "../components/result-form";
import type {MetaFunction} from "@remix-run/node";



export const meta: MetaFunction = () => {
  return [
    { title: "TeamSkvarenina" },
    { name: "description", content: "" },
  ];
};


export default function Results() {
    
    return(

        <div className="window w-screen">
            <header className="relative">
                <img src="/icon.jpg" className="absolute top-3 left-3 w-10 h-10" alt="Logo" />
            </header>
            <RForm />
        </div>

    );

}

