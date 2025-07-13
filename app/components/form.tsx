import { useActionData, useNavigation, Form } from "@remix-run/react";
import { useState }from "react";
import type { ActionData } from "../routes/survey"; 

export default function SForm() {

    const actionData = useActionData<ActionData>();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    const [phoneValid, setPhoneValid] = useState(true);

    const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {

        const phoneRegex = /^(\+421|0)[0-9]{9}$/;
        setPhoneValid(!e.target.value || phoneRegex.test(e.target.value));

    }
    
    const onlyAllowNumbers = (e: React.KeyboardEvent<HTMLInputElement>) => {

        const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];

        if (
            !/^[0-9]$/.test(e.key) &&
            !allowedKeys.includes(e.key)
        ) {
            e.preventDefault();
        }

    };

  return (
    <div className="w-full max-w-6xl mx-auto grid gap-6 px-12 pb-6">
      <Form method="post"  className="flex flex-col gap-8 bg-white p-6 rounded-xl shadow-md">
        <div className="grid grid-cols-1 gap-6">

          {/* Dôchodok */}
          <div>
            <h2 className="text-2xl font-bold underline decoration-yellow-400 mb-4">Dôchodok</h2>
            <label className="block mb-2">
              <span className="block text-sm font-medium">Váš vek:</span>
              <input type="number" name="currentAge" onKeyDown={onlyAllowNumbers} inputMode="numeric" required className="w-full p-2 border border-gray-300 rounded" />
            </label>
            <label className="block mb-2">
              <span className="block text-sm font-medium">Vek, kedy pôjdete do dôchodku:</span>
              <input type="number" name="retirementAge" onKeyDown={onlyAllowNumbers} inputMode="numeric" required className="w-full p-2 border border-gray-300 rounded" />
            </label>
            <label className="block mb-2">
              <span className="block text-sm font-medium">Suma ušetrených peňazí v 2. pilieri:</span>
                  <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500">€</span>
              <input type="number" name="pillar2Savings" onKeyDown={onlyAllowNumbers} inputMode="numeric" required className="w-full p-2 pl-6 border border-gray-300 rounded" />
              </div>
            </label>
            <label className="block mb-2">
              <span className="block text-sm font-medium">Požadovaná výška dôchodku:</span>
                  <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500">€</span>
              <input type="number" name="desiredPension" onKeyDown={onlyAllowNumbers} inputMode="numeric" required className="w-full p-2 pl-6 border border-gray-300 rounded" />
              </div>
            </label>
          </div>

          {/* Príjem */}
          <div>
            <h2 className="text-2xl font-bold underline decoration-yellow-400 mb-4">Príjem</h2>
            <label className="block mb-2">
              <span className="block text-sm font-medium">Čistý príjem: </span>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500">€</span>
                <input type="number" name="netIncome" onKeyDown={onlyAllowNumbers} inputMode="numeric" required className="w-full pl-6  p-2 border border-gray-300 rounded" />
              </div>
            </label>
            <label className="block mb-2">
              <span className="block text-sm font-medium">Hrubý príjem:</span>
                  <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500">€</span>
              <input type="number" name="grossIncome" onKeyDown={onlyAllowNumbers} inputMode="numeric" required className="w-full pl-6 p-2 border border-gray-300 rounded" />
            </div>
            </label>
            <label className="block mb-2">
              <span className="block text-sm font-medium">Iné mesačné príjmy (odmeny, brigáda...):</span>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500">€</span>
              <input type="number" name="otherIncome" onKeyDown={onlyAllowNumbers} inputMode="numeric" required className="w-full p-2 pl-6 border border-gray-300 rounded" />
              </div>
            </label>
          </div>
        </div>

        {/* Výdavky */}
        <div>
          <h2 className="text-2xl font-bold underline decoration-yellow-400 mb-4">Výdavky</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="block text-sm font-medium">Bývanie (nájomné, energie, internet...):</span>
                  <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500">€</span>
              <input type="number" name="housing" onKeyDown={onlyAllowNumbers} inputMode="numeric"  required className="w-full p-2 pl-6 border border-gray-300 rounded" />
              </div>
            </label>
            <label className="block">
              <span className="block text-sm font-medium">Auto (pohonné hmoty, servis...):</span>
                  <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500">€</span>
              <input type="number" name="car" onKeyDown={onlyAllowNumbers} inputMode="numeric" required className="w-full p-2 pl-6 border border-gray-300 rounded" />
              </div>
            </label>
            <label className="block">
              <span className="block text-sm font-medium">Variabilné (strava, oblečenie, dovolenka...):</span>
                  <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500">€</span>
              <input type="number" name="variable" onKeyDown={onlyAllowNumbers} inputMode="numeric"  required className="w-full pl-6 p-2 border border-gray-300 rounded" />
              </div>
            </label>
            <label className="block">
              <span className="block text-sm font-medium">Sporenie (vklady, dôchodok...):</span>
                  <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500">€</span>
              <input type="number" name="savings" onKeyDown={onlyAllowNumbers} inputMode="numeric"  required className="w-full p-2 pl-6 border border-gray-300 rounded" />
              </div>
            </label>
            <label className="block">
              <span className="block text-sm font-medium">Úvery (hypotéka, kreditky...):</span>
                  <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500">€</span>
              <input type="number" name="loans" onKeyDown={onlyAllowNumbers} inputMode="numeric"  required className="w-full p-2 border pl-6 border-gray-300 rounded" />
              </div>
            </label>
            <label className="block">
              <span className="block text-sm font-medium">Suma zostatku úveru:</span>
                  <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500">€</span>
              <input type="number" name="loanBalance" onKeyDown={onlyAllowNumbers} inputMode="numeric"  required className="w-full p-2 pl-6 border border-gray-300 rounded" />
              </div>
            </label>
            <label className="block md:col-span-2">
              <span className="block text-sm font-medium">Poistenie (životné, PZP, nehnuteľnosti...):</span>
                  <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500">€</span>
              <input type="number" name="insurance" onKeyDown={onlyAllowNumbers} inputMode="numeric"  required className="w-full p-2 pl-6 border border-gray-300 rounded" />
              </div>
            </label>
          </div>
        </div>

        {/* Sender's Information */}
        <div>
          <h2 className="text-2xl font-bold underline decoration-yellow-400 mb-4">Zadaj svoje údaje pre zaslanie výsledkov</h2>
          <label className="block mb-2">
            <span className="block text-sm font-medium">Meno:</span>
            <input type="text" name="name" required className="w-full p-2 border border-gray-300 rounded" />
          </label>
            <label className="block mb-2">
                <span className="block text-sm font-medium">Telefónne číslo:</span>
                <input type="tel" name="phone"  onInput={handlePhoneInput}
                className={`w-full p-2 border rounded ${
                    phoneValid ? 'border-gray-300' : 'is-invalid'
                }`} />
            </label>
        </div>

        {/* GDPR Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="gdpr"
                required
                className="mr-2 h-4 w-4 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-sm text-gray-700">
                Súhlasím so spracovaním osobných údajov podľa <a href="/privacy-policy" className="text-yellow-600 hover:underline">Zásad ochrany osobných údajov</a>.
              </label>
            </div>

        <button 
              type="submit" 
              disabled={isSubmitting}
              className={`self-start px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Odosielam...' : 'Odoslať výsledky'}
            </button>

            {/* Action Message */}
            {actionData?.status === 'success' && (
              <div className="p-4 bg-green-100 text-green-700 rounded">
                {actionData.message}
              </div>
            )}
            {actionData?.status === 'error' && (
              <div className="p-4 bg-red-100 text-red-700 rounded">
                {actionData.message}
              </div>
            )}

            {/* GDPR Info */}
            <p className="text-xs text-gray-500">
            🛡️ Ochrana tvojich údajov je pre nás prioritou.
                Tvoje príjmy, výdavky a ostatné dáta budú spracované výhradne na účely tejto analýzy a nikdy nebudú zdieľané s treťou stranou ani s finančnými inštitúciami. Všetko v súlade s GDPR.
            </p>

      </Form>
    </div>
  );
}

