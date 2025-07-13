import { useSearchParams, useActionData, useNavigation, Form } from "@remix-run/react";
import { useState, useEffect } from "react"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#FFBB28', '#FF8042', '#00C49F', '#0088FE'];


export default function RForm(){

    const [searchParams] = useSearchParams();
    const formData = Object.fromEntries(searchParams.entries());
    const [loanYears, setLoanYears] = useState(30);
    const [resultUrl, setResultUrl] = useState("");
    const [rate, setRate] = useState(2.5);
 
    const parse = (val: string) => parseFloat(val) || 0;

    const currentAge = parse(formData.currentAge);
    const loanBalance = parse(formData.loanBalance);
    const loans = parse(formData.loans);
    const retirementAge = parse(formData.retirementAge);
    const pillar2Savings = parse(formData.pillar2Savings);
    const desiredPension = parse(formData.desiredPension);
    const netIncome = parse(formData.netIncome);
    const grossIncome = parse(formData.grossIncome);
    const otherIncome = parse(formData.otherIncome);
    const housing = parse(formData.housing);
    const car = parse(formData.car);
    const variable = parse(formData.variable);
    const savings = parse(formData.savings);
    const insurance = parse(formData.insurance);


    const monthlyIncome = netIncome + otherIncome;
    const consumptionExpenses = housing + car + variable;
    const financialExpenses = savings + loans + insurance;
    const totalExpenses = consumptionExpenses + financialExpenses;
    const balance = monthlyIncome - totalExpenses;

    const expectedLifespan = 80;
    const retirementYears = expectedLifespan - retirementAge;


    const firstPillar = grossIncome * 0.25;
    const secondPillarMonthly = grossIncome * 0.0371244; 

    const thirdPillar = Math.max(
        0,
        desiredPension - firstPillar - secondPillarMonthly
    );

    const yearlyGap = thirdPillar * 12;
    const totalNeeded = yearlyGap * retirementYears;
    const neededSavings = Math.max(0, totalNeeded - pillar2Savings);

    const monthlyPaymentForDisplay = balance * 0.70;

    const monthlyRate = rate / 100 / 12;
    const months = loanYears * 12;

    const possibleLoan = monthlyRate === 0 ? monthlyPaymentForDisplay * months : (monthlyPaymentForDisplay * (1 - Math.pow(1 + monthlyRate, -months))) / monthlyRate;
    const fixedPossibleLoan = possibleLoan<0 ? 0 : possibleLoan;

    const deathCoverage = netIncome * 12 * 2.5; 
    const criticalIllness = netIncome * 12 * 1.8;
    const dailyPN = (netIncome * 0.85) / 30; 
    const disability = netIncome * 12 * 6.0; 


    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('sk-SK', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };


    const PieData = [
        { name: 'Čisté príjmy', value: monthlyIncome },
        { name: 'Výdavky na spotrebu', value: consumptionExpenses },
        { name: 'Finančné výdavky', value: financialExpenses },
        { name: 'Zostatok', value: balance > 0 ? balance : 0 },
    ];

    

    return(
      <div className="w-full max-w-6xl mx-auto grid gap-6 px-12 pt-16 pb-6">
          <Form method="post" className="flex flex-col gap-8 bg-white p-6 rounded-xl shadow-md overflow-hidden">

            <h2 className="text-2xl font-bold underline decoration-yellow-400">Výsledky tvojej analýzy</h2>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 mb-6">

            {/* Income and expenses */}
            <div>
            <h3 className="text-xl font-semibold mb-2">Vaše príjmy a výdavky</h3>
                <div className="grid grid-cols-3 gap-6 text-sm">
                    <span className="font-medium">&nbsp;</span>
                    <span className="font-medium">Mesačne</span>
                    <span className="font-medium">Ročne</span>
                    <span>Čisté príjmy spolu</span><span>{formatCurrency(monthlyIncome)}</span><span>{formatCurrency(monthlyIncome*12)}</span>
                    <span>Výdavky na spotrebu</span><span>{formatCurrency(consumptionExpenses)}</span><span>{formatCurrency(consumptionExpenses*12)}</span>
                    <span>Finančné výdavky</span><span>{formatCurrency(financialExpenses)}</span><span>{formatCurrency(financialExpenses*12)}</span>
                    <span>Výdavky spolu</span><span>{formatCurrency(totalExpenses)}</span><span>{formatCurrency(totalExpenses*12)}</span>
                    <span className="font-bold">Zostatok</span><span className="font-bold">{formatCurrency(balance)}</span><span className="font-bold">{formatCurrency(balance*12)}</span>
                  </div>
              </div>

              {/* Pie Chart */}
              <div className="h-64 mt-6">
                      <ResponsiveContainer>
                          <PieChart>
                          <Pie data={PieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                              {PieData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                          </PieChart>
                      </ResponsiveContainer>
                  </div>
              </div>

                {/* Dôchodok */}
        
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 mb-6">
                <div>
                      <h3 className="text-xl font-semibold mb-2">Váš budúci dôchodok</h3>
                      <div className="grid grid-cols-2 gap-6 text-sm">
                        <span>Výška Vášho požadovaného dôchodku</span><span>{formatCurrency(desiredPension)}</span>
                        <span>Výška dôchodku z prvého piliera</span><span>{formatCurrency(firstPillar)}</span>
                        <span>Výška dôchodku z druhého piliera</span><span>{formatCurrency(secondPillarMonthly)}</span>
                        <span>Výška dôchodku z tretieho piliera</span><span>{formatCurrency(thirdPillar)}</span>
                        <span className="font-bold">Potrebujete si ešte nasporiť</span><span className="font-bold">{formatCurrency(neededSavings)}</span>
                      </div>
                 </div>

              <div>
            {/* Úver */}
              <h3 className="text-xl font-semibold mb-2">Aký úver môžete ešte čerpať</h3>
                      <div className="grid grid-cols-2 gap-6 text-sm">
                        <span>Možná splátka</span><span>{formatCurrency(monthlyPaymentForDisplay)}</span>
                        <span>Doba splácania úveru</span>
                        <div className="flex items-center gap-2">
                            <input
                                type="range"
                                min="10"
                                max="30"
                                value={loanYears}
                                onChange={(e) => setLoanYears(Number(e.target.value))}
                                className="w-full"
                            />
                            <span>{loanYears} rokov</span>
                        </div>
                        <span>Úroková sadzba</span>
                        <div className="flex items-center gap-2">
                            <input
                                type="range"
                                min="2.5"
                                max="10"
                                step="0.1"
                                value={rate}
                                onChange={(e) => setRate(Number(e.target.value))}
                                className="w-full"
                            />
                            <span>{rate.toFixed(1)}%</span>
                        </div>
                        <span className="font-bold">Možný úver</span><span className="font-bold">{formatCurrency(fixedPossibleLoan)}</span>
                      </div>
                  </div>
              </div>

            {/* Poistenie */}
              <h3 className="text-xl font-semibold">Optimálne životné poistenie</h3>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <span>Úmrtie</span><span>{formatCurrency(deathCoverage)}</span>
                <span>Závažné choroby</span><span>{formatCurrency(criticalIllness)}</span>
                <span>Denné odškodnenie v prípade PN</span><span>{formatCurrency(dailyPN)}</span>
                <span>Trvalé následky</span><span>{formatCurrency(disability)}</span>
              </div>
          </Form>
        </div>
    );
}
