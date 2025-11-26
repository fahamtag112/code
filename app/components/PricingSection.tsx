export default function PricingSection() {
  return (
    <section id="pricing" className="mt-16 bg-gradient-to-tl from-white/3 to-transparent rounded-3xl p-8 border border-white/6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="text-sm text-slate-300">Everything you need to launch</div>
          <h2 className="mt-2 text-2xl font-bold text-white">Simple pricing for teams of all sizes</h2>
          <p className="mt-3 text-slate-300 max-w-xl">Start with our generous free tier — upgrade only when you’re ready. No surprises, transparent limits, and predictable billing.</p>
        </div>

        <div className="rounded-2xl bg-white/5 p-6 border border-white/6 text-center">
          <div className="text-sm text-slate-300">Starter</div>
          <div className="mt-3 text-3xl font-extrabold">Free</div>
          <div className="mt-3 text-sm text-slate-300">Includes basic features for prototyping and small projects</div>
          <div className="mt-6">
            <a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] px-4 py-2 font-semibold shadow" href="#get-started">Create account</a>
          </div>
        </div>
      </div>
    </section>
  );
}
