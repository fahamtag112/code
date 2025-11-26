import Image from 'next/image';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
      <div className="md:col-span-7 lg:col-span-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">Build delightful web experiences — faster.</h1>
        <p className="mt-6 text-slate-300 max-w-xl text-lg leading-relaxed">
          Aurora is a modern, accessible React starter that helps teams ship landing pages and apps with confidence. Fast performance, beautiful components, and developer-first DX out of the box.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <a href="#get-started" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] px-6 py-3 font-semibold shadow-lg hover:opacity-95 transition">
            Get started — it&apos;s free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a href="#docs" className="inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 hover:bg-white/5 transition">
            Explore docs
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
          <div className="hidden sm:flex items-center gap-3">
            <Image src="/vercel.svg" alt="Vercel" width={40} height={16} className="dark:invert" />
            <span>Trusted by teams at Vercel, Scale and more</span>
          </div>
        </div>
      </div>

      <div className="md:col-span-5 lg:col-span-6 flex justify-center md:justify-end">
        <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-6 shadow-2xl backdrop-blur-lg">
          <div className="absolute -top-6 -right-10 transform rotate-6 opacity-30 blur-lg">
            <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#7c3aed]" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] flex items-center justify-center text-sm font-bold">A</div>
              <div>
                <div className="text-sm font-semibold text-white">Aurora Dashboard</div>
                <div className="text-xs text-slate-400">Real-time metrics, A/B tests, and fast previews.</div>
              </div>
            </div>

            <div className="text-xs text-slate-300 font-semibold">Live • 1.2k views</div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-white/5 p-3">
              <div className="text-xs text-slate-300">Pages</div>
              <div className="text-sm font-semibold text-white">54</div>
            </div>
            <div className="rounded-lg bg-white/5 p-3">
              <div className="text-xs text-slate-300">Active users</div>
              <div className="text-sm font-semibold text-white">12,403</div>
            </div>
          </div>

          <div className="mt-4 border-t border-white/5 pt-3 text-xs text-slate-400">Preview of a lightweight landing built with Aurora — fully responsive and beautifully simple.</div>
        </div>
      </div>
    </section>
  );
}
