import { setRequestLocale } from 'next-intl/server';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { Services } from '@/components/sections/Services';
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
    <div className="relative min-h-screen bg-background text-foreground flex flex-col transition-colors duration-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Services />
        <FAQ />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

