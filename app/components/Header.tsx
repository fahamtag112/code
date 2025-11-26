export default function Header() {
  return (
    <header className="mx-auto max-w-7xl px-6 py-6 md:py-8">
      <nav className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-[#06b6d4] to-[#7c3aed] flex items-center justify-center shadow-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" fillOpacity="0.95" />
              <path d="M2 17l10 5 10-5" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-semibold tracking-tight text-xl md:text-2xl">Aurora</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a className="hover:text-white transition" href="#features">Features</a>
          <a className="hover:text-white transition" href="#pricing">Pricing</a>
          <a className="hover:text-white transition" href="#docs">Docs</a>
          <a className="bg-white/6 px-3 py-2 rounded-full text-sm hover:bg-white/12 transition" href="#">Sign in</a>
        </div>

        <div className="md:hidden">
          <button aria-label="Open menu" className="rounded-lg bg-white/5 p-2 hover:bg-white/10 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
