import type { MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "TeamSkvarenina" },
        { name: "description", content: "" },
    ];
};

export async function loader() {
    return redirect("/survey");
}
