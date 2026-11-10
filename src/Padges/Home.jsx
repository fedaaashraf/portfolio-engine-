import { useState } from "react";
import Nav from "../components-temp/Nav"


/* ---------- Shared class strings ---------- */
const container = "mx-auto w-full max-w-[1080px] px-6";
const eyebrow =
  "mb-3.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-primary";
const sectionTitle =
  "max-w-[440px] font-display text-[clamp(1.625rem,3.4vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.03em]";
const monoLabel =
  "block font-mono text-[9px] font-medium uppercase tracking-[0.08em]";
const btn =
  "inline-flex items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-transparent px-[22px] py-[13px] text-sm font-semibold transition hover:-translate-y-0.5";

/* ---------- Data ---------- */
const STEPS = [
  {
    id: "01",
    title: "Connect GitHub",
    text: "Sign in with GitHub or type a username. We only read public data.",
  },
  {
    id: "02",
    title: "Review your activity",
    text: "See your top languages, commit rhythm and best repositories at a glance.",
  },
  {
    id: "03",
    title: "Polish with AI",
    text: "The genie rewrites your About Me and repo descriptions. You approve every line.",
    highlight: true,
  },
  {
    id: "04",
    title: "Publish",
    text: "Share one clean link with recruiters, clients and teammates.",
    wide: true,
  },
];

const FEATURES = [
  {
    title: "Built from real activity",
    text: "Languages, stars and recent work come straight from GitHub, so the page reflects what you actually build.",
  },
  {
    title: "AI that edits, not invents",
    text: "It improves what you wrote and what your repos say. Nothing is published until you accept it.",
  },
  {
    title: "Choose what to feature",
    text: "Hide experiments and pin the projects you are proud of.",
  },
  {
    title: "A tone that fits you",
    text: "Professional, friendly or concise. Switch with one click.",
  },
];

const SKILLS = ["JavaScript", "TypeScript", "CSS"];

/* ---------- Icons ---------- */
const Sparkle = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2zm7 12l.9 2.6 2.6.9-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9L19 14z" />
  </svg>
);

const BranchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="6" cy="5" r="2" />
    <circle cx="6" cy="19" r="2" />
    <circle cx="18" cy="9" r="2" />
    <path d="M6 7v10M18 11c0 4-6 3-12 6" />
  </svg>
);

const LockIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 018 0v4" />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12l5 5 9-10" />
  </svg>
);

/* ---------- Sections (components) ---------- */
function PreviewCard() {
  return (
    <div className="rounded-[18px] bg-white p-[18px] shadow-[0_20px_50px_rgba(52,36,140,0.12)]">
      <div className="mb-3.5 flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-full bg-primary text-xs font-bold text-white">
          OH
        </div>
        <div className="flex flex-1 flex-col leading-tight">
          <strong className="text-[13px]">Omar Hassan</strong>
          <span className="font-mono text-[10px] text-muted">@omar-dev</span>
        </div>
        <span className="rounded-full bg-[#eeedf6] px-2.5 py-[3px] text-[10px] font-semibold text-soft">
          Draft
        </span>
      </div>

      <div className="rounded-[10px] bg-[#f4f3fa] px-3.5 py-3">
        <span className={`${monoLabel} text-muted`}>Before · your GitHub bio</span>
        <p className="mt-1.5 text-xs leading-relaxed text-soft">
          i am a dev. i like coding and make apps with react and stuff
        </p>
      </div>

      <div className="relative my-2.5 flex justify-center before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-line">
        <span className="relative inline-flex items-center gap-[5px] rounded-full bg-lime px-[11px] py-[5px] text-[10px] font-bold">
          <Sparkle size={9} /> AI polish
        </span>
      </div>

      <div className="rounded-[10px] bg-primary-soft px-3.5 py-3">
        <span className={`${monoLabel} text-primary`}>After · About me</span>
        <p className="mt-1.5 text-[12.5px] leading-relaxed">
          Front-end developer who turns ideas into fast, accessible React apps. I like
          clean component design and shipping small, useful tools.
        </p>
      </div>

      <ul className="mt-3.5 flex flex-wrap gap-2">
        {SKILLS.map((s) => (
          <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[10px]">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="pb-[88px] pt-10">
      <div className={`${container} grid items-center gap-10 md:grid-cols-[1.05fr_1fr] md:gap-14`}>
        <div>
          <span className="inline-flex items-center gap-[5px] rounded-full bg-primary-soft px-[11px] py-[5px] text-[10px] font-bold text-primary">
            <Sparkle size={9} /> For developers
          </span>

          <h1 className="mb-[22px] mt-[22px] font-display text-[clamp(2.25rem,5vw,3rem)] font-extrabold leading-[1.04] tracking-[-0.035em]">
            Your GitHub, turned into a portfolio that{" "}
            <span className="inline-block rounded-lg bg-lime px-2">sounds like you</span>.
          </h1>

          <p className="max-w-[420px] text-sm leading-[1.7] text-soft">
            PortfolioGenie reads your repositories and activity, then uses AI to sharpen
            your About Me and project descriptions. You review every line before it goes
            live.
          </p>

          <div className="mb-[22px] mt-7 flex flex-wrap gap-3">
            <a href="#start" className={`${btn} w-full bg-ink text-white sm:w-auto`}>
              <BranchIcon /> Connect GitHub
            </a>
            <a href="#sample" className={`${btn} w-full border-ink bg-white text-ink sm:w-auto`}>
              See a sample portfolio
            </a>
          </div>

          <p className="flex items-center gap-1.5 text-[11px] text-muted">
            <LockIcon /> Public data only. No password needed.
          </p>
        </div>

        <PreviewCard />
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-[88px]">
      <div className={container}>
        <span className={eyebrow}>How it works</span>
        <h2 className={sectionTitle}>From repositories to a shareable link in four steps.</h2>

        <div className="mt-11 grid gap-3 md:grid-cols-3">
          {STEPS.map((s) => (
            <article
              key={s.id}
              className={`rounded-[14px] border p-5 transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(52,36,140,0.08)] ${
                s.highlight ? "border-[#d9d3fb] bg-primary-soft" : "border-line bg-[#f8f7fc]"
              } ${s.wide ? "md:col-span-3" : ""}`}
            >
              <span
                className={`inline-block rounded-[5px] px-2 py-0.5 font-mono text-[9px] font-semibold ${
                  s.highlight ? "bg-lime text-ink" : "bg-ink text-white"
                }`}
              >
                {s.id}
              </span>
              <h3 className="mb-1.5 mt-3.5 font-display text-base tracking-[-0.02em]">{s.title}</h3>
              <p className="text-[11.5px] leading-[1.6] text-soft">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuggestionCard() {
  const [status, setStatus] = useState("pending"); // pending | accepted | editing
  const [text, setText] = useState(
    "A small REST API for managing tasks, built with Node.js and PostgreSQL."
  );

  const miniBtn =
    "rounded-[7px] border border-transparent px-3.5 py-1.5 text-[11px] font-bold transition hover:-translate-y-px";

  return (
    <div id="sample" className="rounded-2xl bg-ink p-[18px] text-white shadow-[0_20px_44px_rgba(23,19,46,0.25)]">
      <div className="mb-3.5 flex items-center justify-between">
        <span className="font-mono text-xs font-semibold text-lime">taskflow-api</span>
        <span className="text-[10px] text-[#a7a3c0]">Project description</span>
      </div>

      <div className="rounded-[10px] bg-[#241f42] px-3.5 py-3">
        <span className={`${monoLabel} text-muted`}>README says</span>
        <p className="mt-1.5 text-xs text-[#cfcce6]">my todo project</p>
      </div>

      <div className="mt-3 rounded-[10px] border border-[#4a3fa0] bg-[#2d2658] px-3.5 py-3">
        <span className={`${monoLabel} text-lime`}>AI suggests</span>

        {status === "editing" ? (
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            className="mt-1.5 w-full resize-y rounded-lg border border-[#5c50c0] bg-[#1c1740] px-2.5 py-2 text-xs leading-normal text-white outline-none focus:border-lime"
          />
        ) : (
          <p className="mt-1.5 text-xs leading-[1.55]">{text}</p>
        )}

        <div className="mt-3 flex items-center gap-2">
          {status === "accepted" ? (
            <>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-lime">
                <CheckIcon /> Accepted
              </span>
              <button
                className={`${miniBtn} border-[#4a4570] bg-transparent`}
                onClick={() => setStatus("pending")}
              >
                Undo
              </button>
            </>
          ) : (
            <>
              <button className={`${miniBtn} bg-lime text-ink`} onClick={() => setStatus("accepted")}>
                Accept
              </button>
              <button
                className={`${miniBtn} border-[#4a4570] bg-transparent`}
                onClick={() => setStatus(status === "editing" ? "pending" : "editing")}
              >
                {status === "editing" ? "Done" : "Edit"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="py-16 sm:py-[88px]">
      <div className={`${container} grid items-center gap-10 md:grid-cols-2 md:gap-14`}>
        <div>
          <span className={eyebrow}>Features</span>
          <h2 className={sectionTitle}>Less writing. More showing.</h2>

          <ul className="mt-7 flex flex-col gap-[18px]">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex gap-3">
                <span className="mt-px grid size-5 shrink-0 place-items-center rounded-full bg-primary text-white">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="text-[13px] font-bold">{f.title}</h3>
                  <p className="mt-0.5 text-[11.5px] leading-[1.55] text-soft">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <SuggestionCard />
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="start" className={`${container} pb-[72px]`}>
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink px-7 py-11 text-white md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-[clamp(1.5rem,3.5vw,1.875rem)] font-extrabold tracking-[-0.03em]">
            Meet your portfolio genie.
          </h2>
          <p className="mt-2.5 text-[13px] text-[#b4b0cc]">
            Connect GitHub and review a first draft of your portfolio.
          </p>
        </div>
        <a href="#start" className={`${btn} bg-lime px-[26px] py-[15px] text-ink`}>
          Connect GitHub
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className={`${container} flex flex-col justify-between gap-3 py-[22px] text-[10px] text-soft sm:flex-row`}>
        <span>PortfolioGenie</span>
        <span>Built with React Hooks, React Router and Design Thinking</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
