'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';

/* ── 1. Website Development Wireframe Mockup (Sharp / Zero Radius) ────── */
function WebDevWireframe() {
  return (
    <div className="w-full max-w-[380px] sm:max-w-[430px] bg-white shadow-2xl overflow-hidden select-none border border-white/20 transition-transform duration-500 group-hover:scale-[1.02]">
      {/* Browser Top Bar */}
      <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-neutral-100">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 bg-[#27c93f]" />
        </div>
        <div className="flex-1 max-w-[140px] h-3 bg-neutral-100 mx-auto" />
      </div>

      {/* Browser Body */}
      <div className="bg-[#8ba6ff] p-5 sm:p-7 min-h-[220px] sm:min-h-[260px] flex flex-col justify-between">
        {/* Top Navbar Skeleton */}
        <div className="flex items-center justify-between pb-3">
          <div className="w-10 h-3 bg-white/90" />
          <div className="flex gap-2">
            <div className="w-7 h-2 bg-white/60" />
            <div className="w-7 h-2 bg-white/60" />
            <div className="w-7 h-2 bg-white/60" />
          </div>
          <div className="w-8 h-3 bg-white" />
        </div>

        {/* Hero Section Layout */}
        <div className="grid grid-cols-12 gap-4 items-center my-auto">
          {/* Left Text Column */}
          <div className="col-span-7 space-y-2.5">
            <div className="w-full h-4 bg-[#3461fd]" />
            <div className="w-4/5 h-4 bg-[#3461fd]" />
            <div className="w-3/4 h-2 bg-white/70 mt-2" />
            <div className="w-1/2 h-2 bg-white/70" />
            <div className="pt-2">
              <div className="w-14 h-4 bg-white shadow-sm" />
            </div>
          </div>

          {/* Right White Card / Image Block */}
          <div className="col-span-5">
            <div className="aspect-square w-full bg-white shadow-md flex items-center justify-center p-3">
              <div className="w-full h-full bg-[#dde2ff]" />
            </div>
          </div>
        </div>

        {/* Bottom Feature Pill Row */}
        <div className="flex gap-2 pt-3">
          <div className="w-14 h-2.5 bg-white/60" />
          <div className="w-14 h-2.5 bg-white/60" />
        </div>
      </div>
    </div>
  );
}

/* ── 2. Web App Development Wireframe Mockup (Sharp / Zero Radius) ────── */
function WebAppWireframe() {
  return (
    <div className="w-full max-w-[380px] sm:max-w-[430px] bg-white shadow-2xl overflow-hidden select-none border border-white/20 transition-transform duration-500 group-hover:scale-[1.02]">
      {/* Browser Top Bar */}
      <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-neutral-100">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 bg-[#27c93f]" />
        </div>
        <div className="flex-1 max-w-[140px] h-3 bg-neutral-100 mx-auto" />
      </div>

      {/* Browser Body with Sidebar and Grid */}
      <div className="bg-[#8ba6ff] p-4 sm:p-5 min-h-[220px] sm:min-h-[260px] flex gap-3">
        {/* Left Sidebar */}
        <div className="w-12 sm:w-14 flex flex-col gap-2 pt-1 border-r border-white/20 pr-2">
          <div className="w-full h-3 bg-white mb-2" />
          <div className="w-3/4 h-2 bg-white/70" />
          <div className="w-full h-2 bg-white/70" />
          <div className="w-4/5 h-2 bg-white/70" />
          <div className="w-3/4 h-2 bg-white/70" />
          <div className="mt-auto w-full h-3 bg-white/90" />
        </div>

        {/* Right Dashboard Grid (2 rows x 3 cols) */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
            <div className="aspect-[4/3] bg-white shadow-sm p-1.5 flex flex-col justify-end">
              <div className="w-3/4 h-1.5 bg-[#8ba6ff]" />
            </div>
            <div className="aspect-[4/3] bg-[#3461fd] shadow-sm p-1.5 flex flex-col justify-end">
              <div className="w-3/4 h-1.5 bg-white/80" />
            </div>
            <div className="aspect-[4/3] bg-white shadow-sm p-1.5 flex flex-col justify-end">
              <div className="w-3/4 h-1.5 bg-[#8ba6ff]" />
            </div>
            <div className="aspect-[4/3] bg-[#3461fd] shadow-sm p-1.5 flex flex-col justify-end">
              <div className="w-3/4 h-1.5 bg-white/80" />
            </div>
            <div className="aspect-[4/3] bg-white shadow-sm p-1.5 flex flex-col justify-end">
              <div className="w-3/4 h-1.5 bg-[#8ba6ff]" />
            </div>
            <div className="aspect-[4/3] bg-white shadow-sm p-1.5 flex flex-col justify-end">
              <div className="w-3/4 h-1.5 bg-[#8ba6ff]" />
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <div className="w-16 h-2 bg-white/60" />
            <div className="w-10 h-2 bg-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 3. Mobile App Development Wireframe Mockup (Sharp / Zero Radius) ─── */
function MobileDevWireframe() {
  return (
    <div className="w-full max-w-[380px] sm:max-w-[430px] flex items-end justify-center gap-3 sm:gap-4 py-2 select-none transition-transform duration-500 group-hover:scale-[1.02]">
      {/* Left Phone */}
      <div className="w-24 sm:w-28 border-[2.5px] border-white/90 bg-[#8ba6ff] p-2 shadow-xl flex flex-col gap-2 h-44 sm:h-48 opacity-90">
        <div className="w-7 h-1.5 bg-white/80 mx-auto" />
        <div className="w-full h-12 bg-white shadow-sm p-1.5">
          <div className="w-1/2 h-1.5 bg-[#8ba6ff] mb-1" />
          <div className="w-3/4 h-1 bg-neutral-200" />
        </div>
        <div className="space-y-1.5 pt-1">
          <div className="w-full h-2.5 bg-white/70" />
          <div className="w-full h-2.5 bg-white/70" />
          <div className="w-4/5 h-2.5 bg-white/70" />
        </div>
      </div>

      {/* Center Phone (Hero / Main) */}
      <div className="w-28 sm:w-32 border-[3px] border-white bg-[#8ba6ff] p-2.5 shadow-2xl flex flex-col gap-2.5 h-52 sm:h-56 z-10 -translate-y-2">
        {/* Notch Header */}
        <div className="w-9 h-2 bg-white mx-auto shadow-sm" />
        {/* Hero Card */}
        <div className="w-full h-16 bg-white shadow-md p-2 flex flex-col justify-between">
          <div className="w-3/4 h-2 bg-[#3461fd]" />
          <div className="w-1/2 h-1.5 bg-neutral-200" />
          <div className="w-8 h-2 bg-[#8ba6ff]" />
        </div>
        {/* App Icons Grid 2x3 */}
        <div className="grid grid-cols-3 gap-1.5 pt-1">
          <div className="aspect-square bg-white shadow-sm" />
          <div className="aspect-square bg-[#3461fd] shadow-sm" />
          <div className="aspect-square bg-white shadow-sm" />
          <div className="aspect-square bg-white shadow-sm" />
          <div className="aspect-square bg-[#3461fd] shadow-sm" />
          <div className="aspect-square bg-white shadow-sm" />
        </div>
      </div>

      {/* Right Phone */}
      <div className="w-24 sm:w-28 border-[2.5px] border-white/90 bg-[#8ba6ff] p-2 shadow-xl flex flex-col gap-2 h-44 sm:h-48 opacity-90">
        <div className="w-7 h-1.5 bg-white/80 mx-auto" />
        <div className="grid grid-cols-2 gap-1.5">
          <div className="aspect-[4/3] bg-white shadow-sm" />
          <div className="aspect-[4/3] bg-white shadow-sm" />
          <div className="aspect-[4/3] bg-white shadow-sm" />
          <div className="aspect-[4/3] bg-white shadow-sm" />
        </div>
        <div className="w-full h-4 bg-white/80 mt-auto" />
      </div>
    </div>
  );
}

/* ── 4. Web Design & UI/UX Wireframe Mockup (Sharp / Zero Radius) ─────── */
function WebDesignWireframe() {
  return (
    <div className="w-full max-w-[380px] sm:max-w-[430px] bg-white shadow-2xl overflow-hidden select-none border border-white/20 transition-transform duration-500 group-hover:scale-[1.02]">
      {/* Design App Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-neutral-100">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 bg-[#27c93f]" />
        </div>
        {/* Design Tools Pills */}
        <div className="flex gap-1.5">
          <span className="w-4 h-4 bg-[#3461fd]/20" />
          <span className="w-4 h-4 bg-neutral-100" />
          <span className="w-4 h-4 bg-neutral-100" />
        </div>
      </div>

      {/* Design Canvas */}
      <div className="bg-[#8ba6ff] p-5 sm:p-7 min-h-[220px] sm:min-h-[260px] flex flex-col justify-between relative overflow-hidden">
        {/* Floating Figma-like Artboard */}
        <div className="relative z-10 w-full bg-white p-4 shadow-lg border border-neutral-100">
          {/* Color Tokens Bar */}
          <div className="flex items-center justify-between mb-3 border-b border-neutral-100 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 bg-[#3461fd]" />
              <span className="w-3.5 h-3.5 bg-[#8ba6ff]" />
              <span className="w-3.5 h-3.5 bg-[#f8d018]" />
              <span className="w-3.5 h-3.5 bg-[#061436]" />
            </div>
            <div className="w-12 h-2 bg-neutral-200" />
          </div>

          {/* Wireframe Layout Cards */}
          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-5 aspect-[4/3] bg-[#dde2ff]" />
            <div className="col-span-7 space-y-1.5">
              <div className="w-3/4 h-3 bg-[#3461fd]" />
              <div className="w-full h-2 bg-neutral-200" />
              <div className="w-2/3 h-2 bg-neutral-200" />
              <div className="w-10 h-3 bg-[#f8d018] mt-1" />
            </div>
          </div>
        </div>

        {/* Vector Pen Tool Bezier Curve with Anchor Points */}
        <div className="relative w-full h-10 mt-3">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 320 40" fill="none">
            <path
              d="M10 30 C 90 0, 160 40, 240 10 S 310 30, 310 30"
              stroke="white"
              strokeWidth="2.5"
              strokeDasharray="4 4"
            />
            {/* Anchor Points */}
            <rect x="6" y="26" width="8" height="8" fill="white" stroke="#3461fd" strokeWidth="1.5" />
            <rect x="156" y="16" width="8" height="8" fill="#f8d018" stroke="white" strokeWidth="1.5" />
            <rect x="306" y="26" width="8" height="8" fill="white" stroke="#3461fd" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── Section Data ─────────────────────────────────────────────────────── */
interface ServiceItem {
  key: string;
  wireframe: React.ReactNode;
}

export function Services() {
  const t = useTranslations('services');

  const services: ServiceItem[] = [
    {
      key: 'webDev',
      wireframe: <WebDevWireframe />,
    },
    {
      key: 'webApps',
      wireframe: <WebAppWireframe />,
    },
    {
      key: 'mobileDev',
      wireframe: <MobileDevWireframe />,
    },
    {
      key: 'webDesign',
      wireframe: <WebDesignWireframe />,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 bg-[#000000] text-white selection:bg-[#3461fd] selection:text-white overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3461fd]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#3461fd]/10 blur-[150px] pointer-events-none" />

      <Container>
        {/* Section Header (Centered) */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-4 block font-mono">
              {t('badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.12] text-white">
              {t('headline')}
            </h2>
          </div>
        </AnimatedSection>

        {/* Alternating Services Rows Stack (Zero Radius / Sharp) */}
        <div className="space-y-20 sm:space-y-32">
          {services.map((service, index) => {
            const title = t(`items.${service.key}.title`);
            const description = t(`items.${service.key}.description`);

            // Even index (0, 2): Visual on Left, Text on Right
            // Odd index (1, 3): Text on Left, Visual on Right (reversed on lg screens)
            const isReversed = index % 2 === 1;

            return (
              <AnimatedSection
                key={service.key}
                direction="up"
                delay={0.15 * index}
              >
                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20 items-center">
                  
                  {/* Visual Wireframe Card Container (Sharp Rectilinear Box) */}
                  <div
                    className={`lg:col-span-6 w-full ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-[#3461fd] p-6 sm:p-10 flex items-center justify-center shadow-2xl overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(52,97,253,0.35)] group-hover:scale-[1.01] border border-[#3461fd]/40">
                      {/* Ambient light reflections inside the blue box */}
                      <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/20 blur-3xl pointer-events-none" />
                      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-black/20 blur-3xl pointer-events-none" />

                      {/* Wireframe Mockup */}
                      {service.wireframe}
                    </div>
                  </div>

                  {/* Text Content & Learn More Action */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center max-w-xl ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4 sm:mb-5">
                      {title}
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
                      {description}
                    </p>
                    <div>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1c1c1e] text-white hover:bg-neutral-800 border border-white/15 font-semibold text-sm transition-all duration-200 shadow-md hover:border-white/30"
                      >
                        {t('learnMore')}
                      </a>
                    </div>
                  </div>

                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
