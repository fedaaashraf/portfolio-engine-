import { useState } from "react";
import { Link } from "react-router-dom";

const container = "mx-auto w-full max-w-[1080px] px-6";
const btn =
  "inline-flex items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-transparent px-[22px] py-[13px] text-sm font-semibold transition hover:-translate-y-0.5";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Sample portfolio", href: "#sample" },
];

const Sparkle = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2zm7 12l.9 2.6 2.6.9-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9L19 14z" />
  </svg>
);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md">
      <div className={`${container} flex h-[72px] items-center justify-between`}>
        <a href="#top" className="inline-flex items-center gap-2.5 font-display text-[17px] font-extrabold tracking-[-0.02em]">
          <span className="grid size-9 place-items-center rounded-[10px] bg-ink text-lime">
            <Sparkle size={14} />
          </span>
          PortfolioGenie
        </a>

        <nav
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-[72px] flex-col items-start gap-4 border-b border-line bg-bg px-6 pb-6 pt-5 text-[13px] font-medium md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
        >
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={close} className="transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
          <Link to="/login" onClick={close} className="transition-colors hover:text-primary">
  Log in
</Link>
          <a
            href="#start"
            onClick={close}
            className={`${btn} rounded-[9px] bg-primary px-[18px] py-[9px] text-[13px] text-white shadow-[0_6px_16px_rgba(91,61,240,0.28)]`}
          >
            Get started
          </a>
        </nav>

        <button
          className="flex flex-col gap-[5px] p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="h-0.5 w-[22px] rounded bg-ink" />
          <span className="h-0.5 w-[22px] rounded bg-ink" />
          <span className="h-0.5 w-[22px] rounded bg-ink" />
        </button>
      </div>
    </header>
  );
}
