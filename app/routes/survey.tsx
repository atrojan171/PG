import SForm from "../components/form";
import "../styles/survey.css";
import { json, ActionFunctionArgs} from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "TeamSkvarenina" },
    { name: "description", content: "" },
  ];
};

export default function Survey() {

    return (
        <div className="window w-screen">
             <header className="relative pt-32">
                <img src="/icon.jpg" className="absolute top-3 left-3 w-10 h-10" alt="Logo" />
                <div className="max-w-6xl mx-auto px-12 pb-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        Vieš, kde ti miznú <span className="underline decoration-yellow-400 mr-1">peniaze</span>?<span className="text-2xl ml-2">Zisti to za 3 minúty.</span>
                    </h1>
                    <h2 className="text-sm sm:text-lg text-gray-700 font-semibold leading-relaxed">
                        <span className="block">Sprav si bezplatnú online analýzu svojich financií a zisti, ako si na tom.</span>
                        <span className="block">Odhalíš slabé miesta, úniky peňazí a dostaneš tipy, ako si zlepšiť</span>
                        <span className="block">finančnú pohodu — bez toho, aby si niečo kupoval.</span>
                    </h2>
                </div>
            </header>
            <SForm />
            <div className="relative max-w-6xl mx-auto px-12 pb-6">
                <p className="text-gray-700 text-sm sm:text-lg font-semibold leading-relaxed">
                   <span className="block"> ✅ Zabere ti to menej než 3 minúty</span>
                   <span className="block"> ✅ Výsledky ihneď na obrazovke</span>
                   <span className="block"> ✅ Žiadne záväzky, len tvoja jasná finančná fotografia</span>           
                </p>
            </div>
        </div>
    );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const full_Name = formData.get("name") as string;
  const phone_number = formData.get("phone") as string;
  
  const excludeKeys = ["name", "phone", "gdpr"];
  const analysisEntries: string[] = [];

  for (const [key, value] of formData.entries()) {

      if (!excludeKeys.includes(key)) {
          analysisEntries.push(`${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`);
  }};

  const url = new URL(request.url);
  const baseUrl = `${url.protocol}//${url.host}`;
  const results_url = `${baseUrl}/results?${analysisEntries.join('&')}`;

  const payload = {
      full_Name,
      phone_number,
      analysis_data: analysisEntries.join('&'),
      results_url,
  };

    console.log(payload);
    console.log(process.env.API_URL);
    console.log(process.env.SECRET_KEY!);
    
    try {

    const response = await fetch(process.env.API_URL || '/api/submit', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-make-apikey": process.env.SECRET_KEY!,
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
      return json({ 
        status: 'error',
        message: response.status,
      });
    }

    return json({ 
      status: 'success',
      message: "Dakujeme za odoslanie výsledkov!", 
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    return json({ 
      status: 'error',
      message: "Chyba pri odosielaní dát, prosim skuste to neskôr.",
    });
  }
};

export type ActionData = {
  status: 'success' | 'error';
  message: string;
};

