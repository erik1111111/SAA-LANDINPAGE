import { Hero } from "../components/Hero";
import { Muestra } from "../components/Muestra";
import { Features } from "../components/Features";
import { Testimonials } from "../components/Testimonials";
import { CTASection } from "../components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Muestra />
      <Features />
      <Testimonials />
      <CTASection />
    </main>
  );
}
