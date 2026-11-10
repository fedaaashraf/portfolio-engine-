import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components-temp/Header";
import { Check, Sparkles, CircleAlert } from "lucide-react";


const visibilityOptions = [
  { id: "public", title: "Public", desc: "Anyone with the link, and search engines." },
  { id: "unlisted", title: "Unlisted", desc: "Only people you send the link to." },
  { id: "private", title: "Private", desc: "Only you, while you keep working." },
];

const checklist = [
  { text: "About Me accepted", done: true },
  { text: "4 projects described", done: true },
  { text: "Theme: Midnight", done: true },
  { text: "Add a contact email ", link: "in Settings", done: false },
];

function Card({ children }) {
  return (
    <section className="rounded-3xl border border-[#e4e2ee] bg-white p-8">
      {children}
    </section>
  );
}

function Field({ label, badge, hint, children }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="mb-2 flex items-center justify-between">
        <label className="text-sm font-semibold text-[#15122b]">{label}</label>
        {badge}
      </div>
      {children}
      {hint && <p className="mt-2 text-sm text-[#6b6882]">{hint}</p>}
    </div>
  );
}

export default function PublishPage() {
  const navigate = useNavigate();
  const [slug, setSlug] = useState("omar-dev");
  const [title, setTitle] = useState("Omar Hassan, Front-end Developer");
  const [desc, setDesc] = useState(
    "Front-end developer building fast, accessible React apps. See my projects and get in touch."
  );
  const [visibility, setVisibility] = useState("public");

  const input =
    "w-full rounded-xl border border-[#e4e2ee] bg-white px-5 py-4 text-[#15122b] outline-none focus:ring-2 focus:ring-[#5b3df5]";

  return (
    <div className="flex min-h-screen flex-col bg-[#f6f5fa] font-sans text-[#15122b]">
      <Header current={3} />

      {/* Main */}
      <main className="mx-auto w-full max-w-[1400px] flex-1 px-6 py-12 md:px-[88px]">
        <h1 className="text-5xl font-extrabold tracking-tight">Ready to go live</h1>
        <p className="mt-3 text-lg text-[#6b6882]">
          Set your link and visibility, then publish. You can unpublish whenever you want.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.38fr_1fr] lg:items-start">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <Card>
              <h2 className="mb-6 text-2xl font-bold">Your link</h2>

              <Field label="Portfolio address">
                <div className="flex items-center rounded-xl border border-[#e4e2ee] bg-white px-5 py-4 focus-within:ring-2 focus-within:ring-[#5b3df5]">
                  <span className="font-mono text-[15px] text-[#6b6882]">your-site.app/</span>
                  <input
                    value={slug}
                    onChange={(e) =>
                      setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))
                    }
                    aria-label="Portfolio address"
                    className="ml-1 min-w-0 flex-1 bg-transparent font-mono text-[15px] outline-none"
                  />
                  {slug && (
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-[#17624a]">
                      <Check size={15} strokeWidth={3} /> Available
                    </span>
                  )}
                </div>
              </Field>

              <Field label="Page title">
                <input value={title} onChange={(e) => setTitle(e.target.value)} className={input} />
              </Field>

              <Field
                label="Short description"
                hint="Shown in search results and when your link is shared."
                badge={
                  <span className="flex items-center gap-1.5 rounded-full bg-[#d4f55a] px-3 py-1 text-sm font-semibold text-[#15122b]">
                    <Sparkles size={13} /> Written by AI
                  </span>
                }
              >
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  rows={3}
                  className={`${input} resize-y text-[17px] leading-relaxed`}
                />
              </Field>
            </Card>

            <Card>
              <h2 className="mb-6 text-2xl font-bold">Who can see it</h2>
              <div role="radiogroup" className="flex flex-col gap-3">
                {visibilityOptions.map((o) => {
                  const active = visibility === o.id;
                  return (
                    <button
                      key={o.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setVisibility(o.id)}
                      className={`flex items-start gap-4 rounded-2xl border-2 px-5 py-4 text-left transition-colors ${
                        active
                          ? "border-[#5b3df5] bg-[#ebe7ff]"
                          : "border-[#e4e2ee] bg-white hover:border-[#cfcce0]"
                      }`}
                    >
                      <span
                        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                          active ? "border-[#5b3df5]" : "border-[#b9b6cc]"
                        }`}
                      >
                        {active && <span className="h-2.5 w-2.5 rounded-full bg-[#5b3df5]" />}
                      </span>
                      <span>
                        <span className="block text-lg font-semibold">{o.title}</span>
                        <span className="block text-[#6b6882]">{o.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            <Card>
              <h2 className="mb-5 text-2xl font-bold">Checklist</h2>
              <ul className="flex flex-col gap-4">
                {checklist.map((item) => (
                  <li key={item.text} className="flex items-center gap-4 text-lg">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        item.done ? "bg-[#5b3df5] text-white" : "bg-[#fdebc8] text-[#b7791f]"
                      }`}
                    >
                      {item.done ? (
                        <Check size={16} strokeWidth={3} />
                      ) : (
                        <CircleAlert size={16} strokeWidth={2.5} />
                      )}
                    </span>
                    <span>
                      {item.text}
                      {item.link && (
                        <Link to="/settings" className="font-semibold text-[#5b3df5] hover:underline">
                          {item.link}
                        </Link>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="mb-5 text-2xl font-bold">Share preview</h2>
              <div className="overflow-hidden rounded-2xl border border-[#e4e2ee]">
                <div className="flex h-44 items-center justify-center bg-[#15122b]">
                  <span className="text-5xl font-extrabold tracking-tight text-[#d4f55a]">
                    {slug ? `${slug.split("-")[0]}.dev` : "your-name.dev"}
                  </span>
                </div>
                <div className="px-5 py-4">
                  <p className="font-mono text-xs text-[#6b6882]">your-site.app</p>
                  <p className="mt-1 text-lg font-bold">{title}</p>
                  <p className="mt-1 text-[#6b6882]">{desc}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between gap-4 border-t border-[#e4e2ee] bg-white px-6 py-5 md:px-[88px]">
        <p className="hidden text-[#6b6882] sm:block">Nothing is public until you publish.</p>
        <div className="ml-auto flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate("/polish")}
            className="rounded-xl border-[1.5px] border-[#15122b] bg-white px-8 py-3.5 font-semibold hover:bg-[#f6f5fa]"
          >
            Back
          </button>
          <button
            type="button"
            className="flex items-center gap-2.5 rounded-xl bg-[#15122b] px-6 py-3.5 font-semibold text-white hover:bg-[#241f4a]"
          >
            <Sparkles size={16} className="text-[#d4f55a]" /> Publish portfolio
          </button>
        </div>
      </footer>
    </div>
  );
}