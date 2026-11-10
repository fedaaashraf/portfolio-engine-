import { Check, Sparkles } from "lucide-react";

const steps = ["Connect", "Review", "Polish", "Publish"];

export default function Header({ current = 0 }) {
  return (
    <header className="flex items-center justify-between border-b border-[#e4e2ee] bg-white px-5 py-4 md:px-[88px]">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#15122b]">
          <Sparkles size={20} className="text-[#d4f55a]" />
        </div>
        <span className="text-xl font-bold tracking-tight md:text-2xl">PortfolioGenie</span>
      </div>

      <nav className="hidden items-center gap-6 lg:flex">
        {steps.map((s, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <div key={s} className="flex items-center gap-2.5">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                  done
                    ? "bg-[#5b3df5] text-white"
                    : active
                    ? "bg-[#15122b] text-white"
                    : "border-[1.5px] border-[#cfcce0] text-[#6b6882]"
                }`}
              >
                {done ? <Check size={16} strokeWidth={3} /> : i + 1}
              </span>
              <span className={active ? "font-semibold" : "text-[#6b6882]"}>{s}</span>
            </div>
          );
        })}
      </nav>

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5b3df5] text-sm font-bold text-white">
        OH
      </div>
    </header>
  );
}