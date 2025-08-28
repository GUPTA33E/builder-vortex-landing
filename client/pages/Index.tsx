import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Brain, Code2, ClipboardCheck, Bot, Sparkles, Rocket } from "lucide-react";

export default function Index() {
  // Quick Practice: Aptitude
  const [aptPicked, setAptPicked] = useState<number | null>(null);
  const apt = {
    q: "If the ratio of boys to girls is 3:2 in a class of 25, how many girls are there?",
    options: ["10", "12", "15", "18"],
    answer: 0,
    explain: "Total parts = 3 + 2 = 5. Each part = 25/5 = 5. Girls = 2 * 5 = 10.",
  };

  // Quick Practice: Interview
  const [hrInput, setHrInput] = useState("");
  const hrFeedback = useMemo(() => {
    const notes: { ok: boolean; msg: string }[] = [];
    const t = hrInput.trim();
    if (!t) return notes;
    if (t.length < 60) notes.push({ ok: false, msg: "Try elaborating more (aim for 1-2 minutes)." });
    if (!/situation|task|action|result/i.test(t)) notes.push({ ok: false, msg: "Use STAR: Situation, Task, Action, Result." });
    if (/team|collaborat|mentor|stakeholder/i.test(t)) notes.push({ ok: true, msg: "Nice teamwork emphasis." });
    return notes;
  }, [hrInput]);

  // Quick Practice: Coding (very small demo)
  const [codeInput, setCodeInput] = useState("hello");
  const reversed = useMemo(() => codeInput.split("").reverse().join(""), [codeInput]);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-fuchsia-500/10 to-blue-500/10" />
        <div className="container mx-auto py-20 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-fuchsia-500" />
                Virtual Placement Preparation Portal
              </div>
              <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight">
                Mock Coding Tests, Aptitude Exams, and AI HR Interview Feedback
              </h1>
              <p className="mt-4 text-foreground/70">
                Ek hi jagah par end‑to‑end placement prep. Code karo, aptitude solve karo, aur HR answers par instant AI‑style feedback pao.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link to="/coding" className="inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow hover:opacity-90">
                  Start Coding Test
                </Link>
                <Link to="/aptitude" className="inline-flex h-11 items-center rounded-md border px-5 text-sm font-semibold hover:bg-muted">
                  Take Aptitude Quiz
                </Link>
                <Link to="/interview" className="inline-flex h-11 items-center rounded-md border px-5 text-sm font-semibold hover:bg-muted">
                  Practice HR Interview
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                <div className="rounded-lg border bg-card p-4">
                  <div className="text-2xl font-extrabold">5k+</div>
                  <div className="text-xs text-foreground/60">Practice Runs</div>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="text-2xl font-extrabold">200+</div>
                  <div className="text-xs text-foreground/60">Aptitude Qs</div>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="text-2xl font-extrabold">AI Tips</div>
                  <div className="text-xs text-foreground/60">Instant feedback</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-tr from-primary/30 via-fuchsia-500/30 to-blue-500/30 blur-2xl" />
              <div className="rounded-2xl border bg-card p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">Quick Practice</div>
                  <Rocket className="h-5 w-5 text-blue-500" />
                </div>
                <div className="mt-4 grid gap-4">
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium"><Code2 className="h-4 w-4" /> Coding: Reverse</div>
                    <div className="flex items-center gap-2">
                      <input value={codeInput} onChange={(e) => setCodeInput(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="Type text" />
                      <span className="rounded-md bg-muted px-3 py-2 text-sm font-mono">{reversed}</span>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium"><ClipboardCheck className="h-4 w-4" /> Aptitude</div>
                    <p className="text-sm">{apt.q}</p>
                    <div className="mt-2 grid gap-2">
                      {apt.options.map((o, i) => (
                        <button key={i} onClick={() => setAptPicked(i)} className={`text-left rounded-md border px-3 py-2 text-sm transition ${aptPicked === i ? (i === apt.answer ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10') : 'hover:bg-muted'}`}>{o}</button>
                      ))}
                    </div>
                    {aptPicked !== null && (
                      <div className={`mt-2 text-xs rounded-md border p-2 ${aptPicked === apt.answer ? 'border-green-500/30 bg-green-500/10 text-green-700' : 'border-red-500/30 bg-red-500/10 text-red-700'}`}>{apt.explain}</div>
                    )}
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium"><Bot className="h-4 w-4" /> HR Feedback</div>
                    <textarea value={hrInput} onChange={(e) => setHrInput(e.target.value)} className="min-h-[80px] w-full resize-y rounded-md border bg-background p-2 text-sm" placeholder="Type a short HR answer..." />
                    <ul className="mt-2 space-y-1 text-xs">
                      {hrFeedback.map((f, i) => (
                        <li key={i} className={f.ok ? 'text-emerald-700' : 'text-red-700'}>• {f.msg}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Everything you need to ace placements</h2>
          <p className="mt-2 text-foreground/70">Practice across coding, aptitude, and interviews — all in one place with a clean, distraction‑free experience.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Feature icon={<Code2 className="h-5 w-5" />} title="Mock Coding Tests" desc="Timed challenges, sample test cases, and lightweight in‑browser runner for JavaScript." />
          <Feature icon={<ClipboardCheck className="h-5 w-5" />} title="Aptitude Exams" desc="Quantitative, logical reasoning, and verbal questions with step‑by‑step explanations." />
          <Feature icon={<Brain className="h-5 w-5" />} title="AI HR Interview" desc="Get instant, on‑device feedback on your answers using proven frameworks like STAR." />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/coding" className="inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow hover:opacity-90">Start Now</Link>
          <Link to="/aptitude" className="inline-flex h-11 items-center rounded-md border px-5 text-sm font-semibold hover:bg-muted">Explore Aptitude</Link>
          <Link to="/interview" className="inline-flex h-11 items-center rounded-md border px-5 text-sm font-semibold hover:bg-muted">Practice Interview</Link>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 via-fuchsia-500/20 to-blue-500/20">
        {icon}
      </div>
      <div className="font-semibold">{title}</div>
      <p className="mt-1 text-sm text-foreground/70">{desc}</p>
    </div>
  );
}
