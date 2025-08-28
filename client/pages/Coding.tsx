import { useState } from "react";

type Lang = "cpp" | "java";

type ProgQuestion = {
  id: string;
  lang: Lang;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  statement: string;
  sampleInput?: string;
  sampleOutput?: string;
  topics: string[];
};

const bank: ProgQuestion[] = [
  // C++ questions
  {
    id: "cpp-two-sum",
    lang: "cpp",
    title: "Two Sum",
    difficulty: "Easy",
    statement:
      "Given an array nums and an integer target, return indices of the two numbers such that they add up to target. Use an unordered_map for O(n).",
    sampleInput: "nums = [2,7,11,15], target = 9",
    sampleOutput: "[0,1]",
    topics: ["Array", "Hash Map"],
  },
  {
    id: "cpp-reverse-ll",
    lang: "cpp",
    title: "Reverse Linked List",
    difficulty: "Easy",
    statement:
      "Reverse a singly linked list iteratively. Return the new head pointer.",
    topics: ["Linked List"],
  },
  {
    id: "cpp-spiral-matrix",
    lang: "cpp",
    title: "Spiral Matrix",
    difficulty: "Medium",
    statement:
      "Given an m x n matrix, return all elements in spiral order. Use boundaries top, bottom, left, right.",
    sampleInput: "[[1,2,3],[4,5,6],[7,8,9]]",
    sampleOutput: "[1,2,3,6,9,8,7,4,5]",
    topics: ["Simulation"],
  },
  {
    id: "cpp-lru",
    lang: "cpp",
    title: "LRU Cache",
    difficulty: "Medium",
    statement:
      "Design a data structure that supports get and put in O(1) using list + unordered_map.",
    topics: ["Design", "Hash Map", "Linked List"],
  },
  {
    id: "cpp-count-set-bits",
    lang: "cpp",
    title: "Count Set Bits",
    difficulty: "Easy",
    statement:
      "For a given integer n, count the number of set bits in its binary representation using Brian Kernighan’s algorithm.",
    topics: ["Bit Manipulation"],
  },
  {
    id: "cpp-merge-intervals",
    lang: "cpp",
    title: "Merge Intervals",
    difficulty: "Medium",
    statement:
      "Given an array of intervals, merge all overlapping intervals after sorting by start time.",
    topics: ["Sorting", "Intervals"],
  },
  // Java questions
  {
    id: "java-valid-parentheses",
    lang: "java",
    title: "Valid Parentheses",
    difficulty: "Easy",
    statement:
      "Given a string containing (), {}, [], determine if the input is valid using a stack.",
    sampleInput: 's = "{[()]}"',
    sampleOutput: "true",
    topics: ["Stack", "String"],
  },
  {
    id: "java-longest-substring",
    lang: "java",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    statement:
      "Return the length of the longest substring without repeating characters using sliding window + HashMap.",
    sampleInput: '"abcabcbb"',
    sampleOutput: "3",
    topics: ["Sliding Window", "Hash Map"],
  },
  {
    id: "java-level-order",
    lang: "java",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    statement:
      "Given the root of a binary tree, return its level order traversal using a queue (BFS).",
    topics: ["Tree", "BFS"],
  },
  {
    id: "java-anagram",
    lang: "java",
    title: "Valid Anagram",
    difficulty: "Easy",
    statement:
      "Given two strings s and t, return true if t is an anagram of s. Use frequency array of size 26.",
    topics: ["Hashing", "String"],
  },
  {
    id: "java-kadane",
    lang: "java",
    title: "Maximum Subarray (Kadane’s Algorithm)",
    difficulty: "Medium",
    statement:
      "Find the contiguous subarray with the largest sum. Use running sum and best.",
    topics: ["DP", "Array"],
  },
  {
    id: "java-implement-stack-queue",
    lang: "java",
    title: "Implement Stack using Queues",
    difficulty: "Medium",
    statement:
      "Implement a LIFO stack using two queues. Push costly or Pop costly variants both acceptable.",
    topics: ["Queue", "Design"],
  },
];

export default function Coding() {
  const [code, setCode] = useState<string>(
    `// Reverse a string\nfunction solve(input) {\n  return input.split('').reverse().join('');\n}`,
  );
  const [input, setInput] = useState("placement");
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [langFilter, setLangFilter] = useState<Lang>("cpp");

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

  const visible = bank.filter((q) => q.lang === langFilter);

  return (
    <section className="container mx-auto py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Mock Coding Tests
          </h1>
          <p className="text-foreground/70">
            Practice DSA and coding rounds. This demo provides a lightweight
            in-browser runner for JavaScript. Full multi-language execution can
            be added later via a server sandbox.
          </p>
          <div className="rounded-lg border bg-card">
            <div className="border-b px-4 py-2 text-sm font-medium">
              Problem
            </div>
            <div className="p-4 space-y-2 text-sm">
              <p className="font-semibold">Reverse String</p>
              <p>
                Write a function solve that returns the reverse of the given
                string.
              </p>
              <div className="flex items-center gap-2 text-xs text-foreground/60">
                <span>Example:</span>
                <code className="rounded bg-muted px-2 py-1">
                  Input: "placement" → Output: "tnemealcp"
                </code>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-lg border overflow-hidden">
            <div className="border-b px-4 py-2 text-sm font-medium">
              Editor (JavaScript)
            </div>
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
            <button
              onClick={run}
              className="h-10 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow hover:opacity-90"
            >
              Run
            </button>
            <button
              onClick={() => {
                setCode(
                  `// Reverse a string\nfunction solve(input) {\n  return input.split('').reverse().join('');\n}`,
                );
                setInput("placement");
                setOutput("");
                setError("");
              }}
              className="h-10 rounded-md border px-4 text-sm font-semibold"
            >
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
            <div className="p-4 font-mono text-sm">
              {output || <span className="text-foreground/50">—</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Programming Question Bank */}
      <div className="mt-12">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold">Programming Question Bank</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLangFilter("cpp")}
              className={`rounded-md px-3 py-1.5 text-sm border ${langFilter === "cpp" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
            >
              C++
            </button>
            <button
              onClick={() => setLangFilter("java")}
              className={`rounded-md px-3 py-1.5 text-sm border ${langFilter === "java" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
            >
              Java
            </button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {visible.map((q) => (
            <details
              key={q.id}
              className="rounded-lg border bg-card open:shadow"
            >
              <summary className="cursor-pointer select-none px-4 py-3 font-medium flex items-center justify-between">
                <span>
                  {q.title}{" "}
                  <span className="ml-2 text-xs rounded bg-muted px-2 py-0.5 align-middle">
                    {q.difficulty}
                  </span>
                </span>
                <span className="text-xs text-foreground/60">
                  {q.topics.join(", ")}
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm space-y-2">
                <p>{q.statement}</p>
                {q.sampleInput && (
                  <div>
                    <div className="text-xs text-foreground/60">
                      Sample Input
                    </div>
                    <pre className="rounded-md bg-muted p-3 overflow-x-auto">
                      <code>{q.sampleInput}</code>
                    </pre>
                  </div>
                )}
                {q.sampleOutput && (
                  <div>
                    <div className="text-xs text-foreground/60">
                      Sample Output
                    </div>
                    <pre className="rounded-md bg-muted p-3 overflow-x-auto">
                      <code>{q.sampleOutput}</code>
                    </pre>
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
