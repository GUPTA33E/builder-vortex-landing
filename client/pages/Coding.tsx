import { useState } from "react";

export default function Coding() {
  const [code, setCode] = useState<string>(`// Reverse a string\nfunction solve(input) {\n  return input.split('').reverse().join('');\n}`);
  const [input, setInput] = useState("placement");
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");

  const run = () => {
    setError("");
    try {
      // Simple JS-only runner for demo purposes
      // eslint-disable-next-line no-new-func
      const fn = new Function(code + "\nreturn solve;")();
      const result = fn(String(input));
      setOutput(String(result));
    } catch (e: any) {
      setError(e?.message ?? String(e));
    }
  };

  return (
    <section className="container mx-auto py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight">Mock Coding Tests</h1>
          <p className="text-foreground/70">
            Practice DSA and coding rounds. This demo provides a lightweight in-browser runner for JavaScript. Full multi-language execution can be added later via a server sandbox.
          </p>
          <div className="rounded-lg border bg-card">
            <div className="border-b px-4 py-2 text-sm font-medium">Problem</div>
            <div className="p-4 space-y-2 text-sm">
              <p className="font-semibold">Reverse String</p>
              <p>Write a function solve that returns the reverse of the given string.</p>
              <div className="flex items-center gap-2 text-xs text-foreground/60">
                <span>Example:</span>
                <code className="rounded bg-muted px-2 py-1">Input: "placement" → Output: "tnemealcp"</code>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-lg border overflow-hidden">
            <div className="border-b px-4 py-2 text-sm font-medium">Editor (JavaScript)</div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="min-h-[260px] w-full resize-y bg-zinc-950 text-zinc-100 font-mono text-sm p-4 outline-none"
              spellCheck={false}
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto_auto] items-end">
            <label className="text-sm">
              <div className="mb-1 text-foreground/70">Custom Input</div>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full rounded-md border bg-background px-3 py-2"
                placeholder="Enter input"
              />
            </label>
            <button onClick={run} className="h-10 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow hover:opacity-90">
              Run
            </button>
            <button onClick={() => { setCode(`// Reverse a string\nfunction solve(input) {\n  return input.split('').reverse().join('');\n}`); setInput('placement'); setOutput(''); setError(''); }} className="h-10 rounded-md border px-4 text-sm font-semibold">
              Reset
            </button>
          </div>
          {error && (
            <div className="rounded-md border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-600">
              {error}
            </div>
          )}
          <div className="rounded-lg border">
            <div className="border-b px-4 py-2 text-sm font-medium">Output</div>
            <div className="p-4 font-mono text-sm">{output || <span className="text-foreground/50">—</span>}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
