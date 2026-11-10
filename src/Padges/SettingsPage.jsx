import { useState } from "react";
import { Check, GitBranch, Sparkles } from "lucide-react";
import AppHeader from "../components-temp/AppHeader";

const sections = [
  { id: "profile", label: "Profile" },
  { id: "github", label: "GitHub connection" },
  { id: "ai", label: "AI preferences" },
  { id: "account", label: "Account" },
];

const inputClass =
  "w-full rounded-xl border border-[#e4e2ee] bg-white px-4 py-3.5 text-[15px] text-[#15122b] outline-none placeholder:text-[#8a87a0] focus:ring-2 focus:ring-[#5b3df5]";

function Card({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-6 rounded-3xl border border-[#e4e2ee] bg-white p-6 md:p-7">
      <h2 className="mb-5 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

function Radio({ checked, onChange, children }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      onClick={onChange}
      className="flex items-center gap-3 py-2 text-left"
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
          checked ? "border-[#5b3df5]" : "border-[#b9b6cc]"
        }`}
      >
        {checked && <span className="h-2.5 w-2.5 rounded-full bg-[#5b3df5]" />}
      </span>
      <span>{children}</span>
    </button>
  );
}

export default function SettingsPage() {
  const [active, setActive] = useState("profile");
  const [name, setName] = useState("Omar Hassan");
  const [headline, setHeadline] = useState("Front-end Developer");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);
  const [connected, setConnected] = useState(true);
  const [sync, setSync] = useState(true);
  const [tone, setTone] = useState("Professional");
  const [lang, setLang] = useState("English");

  const goTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f5fa] font-sans text-[#15122b]">
      <AppHeader />

      <main className="mx-auto w-full max-w-[1400px] px-5 py-10 md:px-[58px]">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Settings</h1>

        <div className="mt-8 grid gap-6 lg:grid-cols-[250px_1fr] lg:items-start">
          {/* Sidebar */}
          <nav className="flex gap-2 overflow-x-auto lg:sticky lg:top-6 lg:flex-col">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goTo(s.id)}
                className={`whitespace-nowrap rounded-xl px-4 py-3 text-left text-[15px] ${
                  active === s.id
                    ? "bg-[#ebe7ff] font-semibold"
                    : "text-[#3b3856] hover:bg-[#ece9f7]"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          {/* Content */}
          <div className="flex flex-col gap-5">
            {/* Profile */}
            <Card id="profile" title="Profile">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#5b3df5] text-xl font-bold text-white">
                  OH
                </div>
                <p className="text-sm text-[#6b6882]">Your photo is taken from GitHub.</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">Full name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold">Headline</label>
                  <input value={headline} onChange={(e) => setHeadline(e.target.value)} className={inputClass} />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-semibold">Contact email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                />
                <p className="mt-2 text-xs text-[#6b6882]">Shown on your portfolio&rsquo;s contact button.</p>
              </div>

              <button
                type="button"
                onClick={save}
                className="mt-5 flex items-center gap-2 rounded-xl bg-[#5b3df5] px-6 py-3 text-sm font-semibold text-white hover:bg-[#4a2fe0]"
              >
                {saved && <Check size={16} strokeWidth={3} />}
                {saved ? "Saved" : "Save changes"}
              </button>
            </Card>

            {/* GitHub */}
            <Card id="github" title="GitHub connection">
              <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-[#f6f5fa] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#15122b] text-white">
                  <GitBranch size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">
                    {connected ? "Connected as @omar-dev" : "Not connected"}
                  </p>
                  <p className="text-sm text-[#6b6882]">
                    {connected ? "Last synced today" : "Connect GitHub to import your projects"}
                  </p>
                </div>
                {connected ? (
                  <div className="flex gap-3">
                    <button
                      type="button"
                      className="rounded-xl border-2 border-[#15122b] bg-white px-4 py-2.5 text-sm font-semibold hover:bg-[#f6f5fa]"
                    >
                      Re-sync now
                    </button>
                    <button
                      type="button"
                      onClick={() => setConnected(false)}
                      className="rounded-xl border-2 border-[#e4e2ee] bg-[#f3f1fb] px-4 py-2.5 text-sm font-semibold hover:border-[#cfcce0]"
                    >
                      Disconnect
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setConnected(true)}
                    className="rounded-xl bg-[#15122b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#241f4a]"
                  >
                    Connect
                  </button>
                )}
              </div>

              <button
                type="button"
                role="checkbox"
                aria-checked={sync}
                onClick={() => setSync(!sync)}
                className="mt-4 flex items-start gap-3 text-left"
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 ${
                    sync ? "border-[#5b3df5] bg-[#5b3df5] text-white" : "border-[#b9b6cc] bg-white"
                  }`}
                >
                  {sync && <Check size={13} strokeWidth={3.5} />}
                </span>
                <span>
                  <span className="block font-semibold">Keep my portfolio in sync</span>
                  <span className="block text-sm text-[#6b6882]">
                    New stars and repos appear as drafts. Nothing goes live until you accept it.
                  </span>
                </span>
              </button>
            </Card>

            {/* AI preferences */}
            <Card id="ai" title="AI preferences">
              <p className="mb-1 text-sm font-semibold">Default tone</p>
              <div role="radiogroup" className="mb-4">
                {["Professional", "Friendly", "Concise"].map((t) => (
                  <Radio key={t} checked={tone === t} onChange={() => setTone(t)}>
                    {t}
                  </Radio>
                ))}
              </div>

              <p className="mb-1 text-sm font-semibold">Portfolio language</p>
              <div role="radiogroup" className="mb-5">
                <Radio checked={lang === "English"} onChange={() => setLang("English")}>
                  English
                </Radio>
                <Radio checked={lang === "العربية"} onChange={() => setLang("العربية")}>
                  العربية
                </Radio>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-[#ebe7ff] px-5 py-4 text-sm">
                <Sparkles size={15} className="mt-0.5 shrink-0 text-[#5b3df5]" />
                <p className="text-[#3b3856]">
                  The AI only rewrites what is already in your GitHub profile and READMEs. It does not add
                  experience or skills you have not shown.
                </p>
              </div>
            </Card>

            {/* Account */}
            <Card id="account" title="Account">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e4e2ee] pb-5">
                <div>
                  <p className="font-semibold">Log out</p>
                  <p className="text-sm text-[#6b6882]">End your session on this device.</p>
                </div>
                <button
                  type="button"
                  className="rounded-xl border-2 border-[#15122b] bg-white px-6 py-2.5 text-sm font-semibold hover:bg-[#f6f5fa]"
                >
                  Log out
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-5">
                <div>
                  <p className="font-semibold text-[#b42318]">Delete account</p>
                  <p className="text-sm text-[#6b6882]">
                    Removes your portfolio and all drafts. This cannot be undone.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => window.confirm("Delete your account? This cannot be undone.")}
                  className="rounded-xl border-2 border-[#b42318] bg-white px-6 py-2.5 text-sm font-semibold text-[#b42318] hover:bg-[#fef3f2]"
                >
                  Delete account
                </button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}