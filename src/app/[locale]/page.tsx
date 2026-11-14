import { setRequestLocale } from 'next-intl/server';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Process } from '@/components/sections/Process';
import { CTA } from '@/components/sections/CTA';
import { Contact } from '@/components/sections/Contact';
import { FAQ } from '@/components/sections/FAQ';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-background text-foreground transition-colors duration-200">
      {/* PatternCraft Radial Gradient Background from Bottom (Light Mode) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)',
        }}
        aria-hidden="true"
      />

      {/* Radial Gradient Background (Dark Mode: Clean Deep Dark, Zero Blue Tint) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(125% 125% at 50% 90%, #0c0c0e 40%, #000000 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content & Components */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Marquee />
          <Services />
          <Projects />
          <Process />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
