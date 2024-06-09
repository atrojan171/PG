import type { MetaFunction } from "@netlify/remix-runtime";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css"
import Header from "~/components/header";

export const meta: MetaFunction = () => {
  return [
    { title: "Znojmo" },
    { name: "Znojmo", content: "" },
  ];
};

export default function Index() {

  return (
   <div className="desktop bg-white w-full h-full relative">
        <div className="logo absolute translate-x-10 translate-y-7">
          <img className="w-28 h-28" src="/images/logo/logo.png"/>
        </div>
        <Header />
        <div className="slideshow w-screen h-screen">
          
        </div>
        <div>

        </div>
    </div>
  );
}

