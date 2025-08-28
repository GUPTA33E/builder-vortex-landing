import { useMemo, useState } from "react";

type Q = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
};

const questions: Q[] = [
  {
    q: "If a train travels 120 km in 2 hours, what is its average speed?",
    options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
    answer: 2,
    explain: "Speed = Distance / Time = 120 / 2 = 60 km/h.",
  },
  {
    q: "Simplify: (3/4) of 200",
    options: ["120", "130", "150", "180"],
    answer: 2,
    explain: "(3/4) * 200 = 150.",
  },
  {
    q: "What is 25% of 360?",
    options: ["72", "80", "90", "96"],
    answer: 2,
    explain: "25% = 1/4, so 360/4 = 90.",
  },
  {
    q: "Find the simple interest on ₹1000 at 10% per annum for 2 years.",
    options: ["₹100", "₹200", "₹250", "₹300"],
    answer: 1,
    explain: "SI = PRT/100 = 1000×10×2/100 = ₹200.",
  },
  {
    q: "An item costs ₹400 and is sold for ₹460. What is the profit percentage?",
    options: ["10%", "12.5%", "15%", "20%"],
    answer: 2,
    explain: "Profit = 60. Profit% = 60/400 × 100 = 15%.",
  },
  {
    q: "Divide ₹300 in the ratio 2:3. What is the second person's share?",
    options: ["₹100", "₹120", "₹150", "₹180"],
    answer: 3,
    explain: "Total parts = 5 ⇒ each = 300/5 = 60; second = 3×60 = ₹180.",
  },
  {
    q: "A can finish a work in 12 days and B in 18 days. How many days together?",
    options: ["6", "7.2", "8", "9"],
    answer: 1,
    explain: "Rates add: 1/12 + 1/18 = 5/36 ⇒ time = 36/5 = 7.2 days.",
  },
  {
    q: "A fair die is rolled. Probability of getting an even number?",
    options: ["1/3", "1/2", "2/3", "3/4"],
    answer: 1,
    explain: "Even outcomes = {2,4,6} (3 of 6) ⇒ 3/6 = 1/2.",
  },
  {
    q: "How many permutations of the letters of the word 'CAT'?",
    options: ["3", "4", "6", "9"],
    answer: 2,
    explain: "3! = 6.",
  },
  {
    q: "What is the average of 10, 20, 30, 40, 50?",
    options: ["25", "30", "35", "40"],
    answer: 1,
    explain: "Sum = 150; count = 5 ⇒ 150/5 = 30.",
  },
  {
    q: "Find the LCM of 12 and 18.",
    options: ["6", "12", "18", "36"],
    answer: 3,
    explain: "LCM(12,18) = 36.",
  },
  {
    q: "Find the next term: 2, 6, 12, 20, ?",
    options: ["24", "28", "30", "32"],
    answer: 2,
    explain: "Differences +4, +6, +8 ⇒ next +10 ⇒ 20+10 = 30.",
  },
];


export default function Aptitude() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const q = useMemo(() => questions[idx], [idx]);
  const correct = picked !== null && picked === q.answer;

  return (
    <section className="container mx-auto py-12 max-w-3xl">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">Aptitude Practice</h1>
      <p className="text-foreground/70 mb-8">Sharpen quantitative, logical, and verbal skills with timed quizzes and explanations.</p>

      <div className="rounded-lg border bg-card">
        <div className="border-b px-4 py-2 text-sm font-medium">Question {idx + 1} / {questions.length}</div>
        <div className="p-4 space-y-4">
          <p className="font-medium">{q.q}</p>
          <div className="grid gap-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setPicked(i)}
                className={`text-left rounded-md border px-4 py-2 transition ${picked === i ? (i === q.answer ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10') : 'hover:bg-muted'}`}
              >
                {opt}
              </button>
            ))}
          </div>
          {picked !== null && (
            <div className={`text-sm rounded-md border p-3 ${correct ? 'border-green-500/30 bg-green-500/10 text-green-700' : 'border-red-500/30 bg-red-500/10 text-red-700'}`}>
              {correct ? 'Correct!' : 'Incorrect.'} {q.explain}
            </div>
          )}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => { setPicked(null); setIdx((v) => Math.max(0, v - 1)); }}
              className="rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50"
              disabled={idx === 0}
            >
              Previous
            </button>
            <button
              onClick={() => { setPicked(null); setIdx((v) => (v + 1) % questions.length); }}
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
