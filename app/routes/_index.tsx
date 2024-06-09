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
        <div className="logo absolute">
          <img src=""/>
        </div>
        <Header />
        <div className="slideshow w-screen h-screen">
          <h1>Ahoj</h1>
        </div>
        <div>

        </div>
    </div>
  );
}

