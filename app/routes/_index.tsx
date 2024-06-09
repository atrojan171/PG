import type { MetaFunction } from "@netlify/remix-runtime";
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

        </div>
        <div>

        </div>
    </div>
  );
}
