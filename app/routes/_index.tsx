import type { MetaFunction } from "@netlify/remix-runtime";
import {Header} from "~/components/header";
import {Slideshow} from "~/components/slideshow";


export const meta: MetaFunction = () => {
  return [
    { title: "Znojmo" },
    { name: "Znojmo", content: "" },
  ];
};

export default function Index() {


  return (
   <div className="desktop bg-white w-full h-full relative select-none overflow-x-hidden">
        <div className="logo absolute translate-x-12 translate-y-6 border-none rounded-full overflow-hidden z-10 shadow-xl">
          <img className="w-36 h-36" src="/images/logo/logo.png"/>
        </div>
        <Header />
        <Slideshow />
        <div className="About w-screen h-screen">

        </div>
    </div>
  );
}

