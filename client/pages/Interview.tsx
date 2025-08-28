import { useMemo, useState } from "react";
import { CheckCircle2, XCircle, Sparkles } from "lucide-react";

export default function Interview() {
  const [answer, setAnswer] = useState("");

  const feedback = useMemo(() => {
    const notes: { ok: boolean; msg: string }[] = [];
    const text = answer.trim();
    if (text.length < 80)
      notes.push({
        ok: false,
        msg: "Answer is quite short. Aim for 1-2 minutes.",
      });
    if (!/situation|task|action|result/i.test(text))
      notes.push({
        ok: false,
        msg: "Consider using the STAR method (Situation, Task, Action, Result).",
      });
    if (/\b(um+|uh+|like)\b/i.test(text))
      notes.push({ ok: false, msg: "Reduce filler words for clarity." });
    if (/team|collaborat|mentor|stakeholder/i.test(text))
      notes.push({
        ok: true,
        msg: "Good mention of collaboration and teamwork.",
      });
    if (/impact|result|outcome|metric|%|improv|reduce|increase/i.test(text))
      notes.push({ ok: true, msg: "Strong focus on measurable impact." });
    if (notes.length === 0)
      notes.push({ ok: true, msg: "Great structure and clarity!" });
    return notes;
  }, [answer]);

  return (
    <section className="container mx-auto py-12 max-w-3xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            AI HR Interview Practice
          </h1>
          <p className="text-foreground/70">
            Paste or write your answer below to get instant, on-device feedback.
          </p>
        </div>
        <Sparkles className="hidden md:block h-10 w-10 text-fuchsia-500" />
      </div>

      <div className="mt-6 grid gap-6">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Tell me about yourself... or Describe a challenge you faced and how you overcame it."
          className="min-h-[180px] w-full resize-y rounded-lg border bg-background p-4 outline-none"
        />
        <div className="rounded-lg border p-4 bg-card">
          <div className="font-medium mb-3">Feedback</div>
          <ul className="space-y-2">
            {feedback.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                {f.ok ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                ) : (
                  <XCircle className="mt-0.5 h-4 w-4 text-red-500" />
                )}
                <span className={f.ok ? "text-emerald-700" : "text-red-700"}>
                  {f.msg}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
