export default function FeaturesGrid() {
  const features = [
    { title: 'Blazing fast', desc: 'Optimized for performance and low TTFB with best-in-class defaults.', icon: '⚡' },
    { title: 'Accessible', desc: 'Built with accessibility in mind — semantic markup, keyboard-first components.', icon: '♿' },
    { title: 'Developer first', desc: 'Opinionated DX, great docs, and predictable patterns for teams.', icon: '🛠️' },
  ];

  return (
    <section id="features" className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((f) => (
        <div key={f.title} className="rounded-2xl bg-white/3 p-6 backdrop-blur border border-white/6">
          <div className="text-3xl">{f.icon}</div>
          <div className="mt-4 font-semibold text-white">{f.title}</div>
          <div className="mt-2 text-sm text-slate-300">{f.desc}</div>
        </div>
      ))}
    </section>
  );
}
