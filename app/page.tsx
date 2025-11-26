import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import PricingSection from './components/PricingSection';
import DocsCTA from './components/DocsCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#071025] to-[#071026] text-slate-100 antialiased">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Hero />

        <FeaturesGrid />

        <PricingSection />

        <DocsCTA />

        <Footer />
      </main>
    </div>
  );
}
