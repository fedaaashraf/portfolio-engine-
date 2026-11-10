import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  const input =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-[#141230] outline-none transition placeholder:text-slate-400 focus:border-[#5b3df5] focus:ring-4 focus:ring-[#5b3df5]/10";

  return (
    <div className="flex min-h-screen bg-[#f6f5fb]">
      {/* ===== Dark side===== */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-[#141230] p-14 text-white lg:flex xl:p-16">
  
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#5b3df5]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#d4f55a]/10 blur-3xl" />

        {/* logo */}
        <Link to="/" className="relative flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d4f55a] text-xl text-[#141230]">
            ✦
          </span>
          <span className="text-2xl font-extrabold tracking-tight">
            PortfolioGenie
          </span>
        </Link>

        {/* tital + cards */}
        <div className="relative">
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight xl:text-6xl">
            Your next portfolio is already on{" "}
            <span className="text-[#d4f55a]">GitHub.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-400">
            Pick up where you left off. Your drafts, themes and published page
            are waiting.
          </p>

          <div className="mt-10 max-w-lg rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5b3df5] text-xs font-bold">
                  OH
                </span>
                <span className="font-mono text-[#d4f55a]">omar-dev</span>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                Last edited today
              </span>
            </div>

            <div className="mt-5 space-y-2.5">
              <div className="h-2.5 w-full rounded-full bg-white/10" />
              <div className="h-2.5 w-4/5 rounded-full bg-white/10" />
              <div className="h-2.5 w-1/2 rounded-full bg-white/10" />
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-white/20 px-3 py-1.5">
                4 projects
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1.5">
                Midnight theme
              </span>
              <span className="rounded-full bg-[#d4f55a] px-3 py-1.5 font-bold text-[#141230]">
                ✦ AI polished
              </span>
            </div>
          </div>
        </div>

        <p className="relative text-sm text-slate-500">
          Built with React Hooks, React Router and Design Thinking
        </p>
      </div>

      {/* =====   (right side form) ===== */}
      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2">
        <div className="w-full max-w-md">
    
          <Link to="/" className="mb-10 flex items-center gap-2.5 lg:hidden">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#141230] text-[#d4f55a]">
              ✦
            </span>
            <span className="text-xl font-extrabold text-[#141230]">
              PortfolioGenie
            </span>
          </Link>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#141230] sm:text-5xl">
            Log in
          </h2>
          <p className="mt-2 text-slate-500">
            Welcome back. Choose how you want to sign in.
          </p>

          <button
            type="button"
            className="mt-8 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#141230] py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#141230]/20 transition hover:-translate-y-0.5 hover:bg-[#241f4a]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            Continue with GitHub
          </button>

          <div className="my-7 flex items-center gap-4 text-sm text-slate-500">
            <div className="h-px flex-1 bg-slate-300" />
            or with email
            <div className="h-px flex-1 bg-slate-300" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#141230]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={input}
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-[#141230]"
                >
                  Password
                </label>
                <Link
                  to="/forgot"
                  className="text-sm font-semibold text-[#4a2fd6] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                className={input}
              />
            </div>

            <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-5 w-5 rounded accent-[#5b3df5]"
              />
              Keep me logged in
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#5b3df5] py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#5b3df5]/30 transition hover:-translate-y-0.5 hover:bg-[#4a2fd6]"
            >
              Log in
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-slate-500">
            New to PortfolioGenie?{" "}
            <Link
              to="/signup"
              className="font-semibold text-[#4a2fd6] hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
