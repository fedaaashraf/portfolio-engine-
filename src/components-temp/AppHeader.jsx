import { Link, NavLink } from "react-router-dom";
import { Sparkles } from "lucide-react";

const links = [
  { label: "Dashboard" },
  { label: "Editor", to: "/polish" },
  { label: "Themes" },
  { label: "Settings", to: "/settings" },
];

export default function AppHeader() {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-[#e4e2ee] bg-white px-5 py-4 md:px-[58px]">
      <Link to="/polish" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#15122b]">
          <Sparkles size={18} className="text-[#d4f55a]" />
        </div>
        <span className="text-xl font-bold tracking-tight">PortfolioGenie</span>
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {links.map((l) =>
          l.to ? (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `border-b-2 py-1.5 text-[15px] ${
                  isActive
                    ? "border-[#5b3df5] font-semibold text-[#15122b]"
                    : "border-transparent text-[#6b6882] hover:text-[#15122b]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ) : (
            <span key={l.label} className="border-b-2 border-transparent py-1.5 text-[15px] text-[#6b6882]">
              {l.label}
            </span>
          )
        )}
      </nav>

      <div className="flex h-10 w-10 items-center justify-center justify-self-end rounded-full bg-[#5b3df5] text-sm font-bold text-white">
        OH
      </div>
    </header>
  );
}