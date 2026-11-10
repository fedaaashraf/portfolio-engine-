import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components-temp/Header";
import { Check, Sparkles, ArrowRight } from "lucide-react";


const original = "i am a dev. i like coding and make apps with react and stuff";

const tones = {
  Professional: [
    "Front-end developer focused on building fast, accessible React applications. I care about clean component design and enjoy turning real problems into small, reliable tools.",
    "Front-end developer specializing in fast, accessible React applications, with a focus on clean component design and dependable, well-built tools.",
  ],
  Friendly: [
    "Hey, I'm Omar! I build fast, accessible React apps and love clean components. Give me a real problem and I'll happily turn it into a small, reliable tool.",
    "Hi there! I'm a front-end dev who loves React, tidy components and turning everyday problems into handy little tools.",
  ],
  Concise: [
    "Front-end developer building fast, accessible React apps with clean components.",
    "React developer. Fast, accessible, clean.",
  ],
};

const initialProjects = [
  { name: "taskflow-api", original: "my todo project", suggestion: "A small REST API for managing tasks, built with Node.js and PostgreSQL." },
  { name: "weather-lens", original: "weather app", suggestion: "A clean weather dashboard in TypeScript that shows the forecast for any city." },
  { name: "react-kanban", original: "kanban board practice", suggestion: "A drag-and-drop kanban board built with React Hooks." },
];

const skills = ["JavaScript", "TypeScript", "React"];

function Card({ children }) {
  return (
    <section className="rounded-3xl border border-[#e4e2ee] bg-white p-6 md:p-8">
      {children}
    </section>
  );
}

export default function PolishPage() {
  const navigate = useNavigate();
  const [tone, setTone] = useState("Professional");
  const [variant, setVariant] = useState(0);
  const [custom, setCustom] = useState(null);
  const [editing, setEditing] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState({});

  const suggestion = custom ?? tones[tone][variant];
  const wordCount = suggestion.trim().split(/\s+/).filter(Boolean).length;

  const resetSuggestion = () => {
    setCustom(null);
    setEditing(false);
    setAccepted(false);
  };

  const changeTone = (t) => {
    setTone(t);
    setVariant(0);
    resetSuggestion();
  };

  const regenerate = () => {
    setVariant((v) => (v + 1) % tones[tone].length);
    resetSuggestion();
  };

  const toggleEdit = () => {
    if (!editing) setCustom(suggestion);
    setEditing(!editing);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f6f5fa] font-sans text-[#15122b]">
      <Header current={2} />

      {/* Main */}
      <main className="mx-auto w-full max-w-[1400px] flex-1 px-5 py-10 md:px-[88px] md:py-12">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Polish your words with AI</h1>
        <p className="mt-3 text-lg text-[#6b6882]">
          Pick a tone, compare it with your original and accept what you like. Nothing goes live until you say so.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.38fr_1fr] lg:items-start">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <Card>
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold">About me</h2>
                <span className="font-mono text-sm text-[#6b6882]">{wordCount} words</span>
              </div>

              <p className="mb-2 text-sm font-semibold">Tone</p>
              <div className="mb-5 flex flex-wrap gap-3">
                {Object.keys(tones).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => changeTone(t)}
                    className={`rounded-full border-2 px-6 py-2.5 font-semibold transition-colors ${
                      tone === t
                        ? "border-[#15122b] bg-[#15122b] text-white"
                        : "border-[#e4e2ee] bg-white hover:border-[#cfcce0]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mb-5 rounded-2xl bg-[#f6f5fa] px-5 py-4">
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[#6b6882]">Your original</p>
                <p className="text-[#3b3856]">{original}</p>
              </div>

              <div className="rounded-2xl border-2 border-[#5b3df5] bg-[#ebe7ff] p-5">
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#d4f55a] px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  <Sparkles size={12} /> AI suggestion
                </span>

                {editing ? (
                  <textarea
                    value={custom ?? ""}
                    onChange={(e) => setCustom(e.target.value)}
                    rows={4}
                    className="mb-4 w-full resize-y rounded-xl border border-[#cfcce0] bg-white px-4 py-3 text-[17px] leading-relaxed outline-none focus:ring-2 focus:ring-[#5b3df5]"
                  />
                ) : (
                  <p className="mb-4 text-[17px] leading-relaxed">{suggestion}</p>
                )}

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setAccepted(true);
                      setEditing(false);
                    }}
                    className="flex items-center gap-2 rounded-xl bg-[#5b3df5] px-5 py-2.5 font-semibold text-white hover:bg-[#4a2fe0]"
                  >
                    {accepted && <Check size={16} strokeWidth={3} />}
                    {accepted ? "Used" : "Use this"}
                  </button>
                  <button
                    type="button"
                    onClick={regenerate}
                    className="rounded-xl border-2 border-[#15122b] bg-white px-5 py-2.5 font-semibold hover:bg-[#f6f5fa]"
                  >
                    Regenerate
                  </button>
                  <button
                    type="button"
                    onClick={toggleEdit}
                    className="rounded-xl border-2 border-[#e4e2ee] bg-[#f3f1fb] px-5 py-2.5 font-semibold hover:border-[#cfcce0]"
                  >
                    {editing ? "Done" : "Edit by hand"}
                  </button>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="mb-5 text-2xl font-bold">Project descriptions</h2>
              <div className="flex flex-col gap-5">
                {initialProjects.map((p) => {
                  const s = status[p.name];
                  return (
                    <div key={p.name} className="rounded-2xl border border-[#e4e2ee] p-5">
                      <p className="font-mono text-[15px] font-medium">{p.name}</p>
                      <p className="mt-1 text-sm text-[#6b6882] line-through">{p.original}</p>
                      <p className="mt-2 rounded-lg bg-[#ebe7ff] px-4 py-3">{p.suggestion}</p>
                      <div className="mt-3 flex gap-3">
                        <button
                          type="button"
                          onClick={() => setStatus({ ...status, [p.name]: "accepted" })}
                          className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-white ${
                            s === "accepted" ? "bg-[#5b3df5]" : "bg-[#15122b] hover:bg-[#241f4a]"
                          }`}
                        >
                          {s === "accepted" && <Check size={14} strokeWidth={3} />}
                          {s === "accepted" ? "Accepted" : "Accept"}
                        </button>
                        <button
                          type="button"
                          onClick={() => setStatus({ ...status, [p.name]: "skipped" })}
                          className={`rounded-lg border-2 px-4 py-2 text-sm font-semibold ${
                            s === "skipped"
                              ? "border-[#cfcce0] bg-[#f3f1fb] text-[#6b6882]"
                              : "border-[#e4e2ee] bg-white hover:border-[#cfcce0]"
                          }`}
                        >
                          {s === "skipped" ? "Skipped" : "Skip"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Right column */}
          <div className="lg:sticky lg:top-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#6b6882]">Live preview</p>
            <div className="rounded-3xl bg-[#15122b] p-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#d4f55a]">About</p>
              <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-white">Hi, I&rsquo;m Omar.</h3>
              <p className="mt-5 text-[17px] leading-relaxed text-[#e4e2f5]">{suggestion}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="rounded-full border border-[#4a4670] px-3.5 py-1 text-sm text-white">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-[#6b6882]">
              The preview updates as you change the tone, so you can see exactly what visitors will read.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between gap-4 border-t border-[#e4e2ee] bg-white px-5 py-5 md:px-[88px]">
        <p className="hidden text-[#6b6882] sm:block">Changes are saved as drafts.</p>
        <div className="ml-auto flex items-center gap-4">
          <button
            type="button"
            className="rounded-xl border-[1.5px] border-[#15122b] bg-white px-8 py-3.5 font-semibold hover:bg-[#f6f5fa]"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => navigate("/publish")}
            className="flex items-center gap-2.5 rounded-xl bg-[#5b3df5] px-6 py-3.5 font-semibold text-white hover:bg-[#4a2fe0]"
          >
            Choose a theme <ArrowRight size={18} />
          </button>
        </div>
      </footer>
    </div>
  );
}