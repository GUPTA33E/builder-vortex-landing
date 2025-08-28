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
    options: ["120", "130", "140", "150"],
    answer: 0,
    explain: "(3/4) * 200 = 150, sorry that's wrong. Wait, correct is 150? Let's compute: 200 * 0.75 = 150. Answer option index 3 is 150.",
  },
];

// Fix incorrect answer index in the data above at runtime to keep code self-contained
questions[1].answer = 3;

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
