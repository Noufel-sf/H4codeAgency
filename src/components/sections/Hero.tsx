'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

/* ── WhatsApp Icon ────────────────────────────────────────────────────── */
function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.075-1.9-.452-1.62-.674-2.656-2.316-2.736-2.424-.08-.108-.649-.864-.649-1.649 0-.785.409-1.173.554-1.332.144-.16.315-.2.42-.2.106 0 .211.002.304.006.098.005.23-.037.36.275.144.346.49 1.196.533 1.284.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.092.095-.188.199-.081.383.107.184.476.786 1.022 1.272.703.626 1.296.82 1.48.912.185.092.293.078.402-.047.11-.125.469-.546.595-.733.125-.188.251-.157.422-.094.172.063 1.091.514 1.278.608.188.093.312.14.358.219.046.078.046.452-.098.857zM12 2C6.477 2 2 6.477 2 12c0 1.811.484 3.513 1.331 4.983L2 22l5.163-1.314A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}

/* ── Inline Brand Avatar / Monogram Box ──────────────────────────────── */
function BrandBadge() {
  return (
    <span
      className="inline-flex items-center justify-center align-middle mx-1.5 sm:mx-2 md:mx-3 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-slate-900 via-zinc-900 to-black text-white border-2 border-foreground/15 shadow-md select-none group hover:scale-105 transition-transform"
      title="H4Code"
    >
      <span className="font-black tracking-tight text-xs sm:text-base md:text-lg bg-gradient-to-tr from-primary via-blue-400 to-white bg-clip-text text-transparent">
        H4
      </span>
    </span>
  );
}

/* ── Inline Creative / Tool Sticker ──────────────────────────────────── */
function ToolSticker() {
  return (
    <span
      className="inline-flex items-center justify-center align-middle mx-1 sm:mx-2 md:mx-2.5 w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 bg-surface border-2 border-border shadow-sm rotate-6 hover:rotate-0 transition-all select-none group"
      title="Craft & Code"
    >
      {/* Sleek SVG Pencil / Stylus Tool */}
      <svg
        className="w-4 h-4 sm:w-6 sm:h-6 text-foreground group-hover:scale-110 transition-transform"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    </span>
  );
}

/* ── Inline Mini Browser Wireframe Window ────────────────────────────── */
function MiniWindowMockup() {
  return (
    <span
      className="inline-flex flex-col justify-start align-middle mx-1.5 sm:mx-2.5 md:mx-3 w-14 h-9 sm:w-20 sm:h-12 md:w-24 md:h-14 bg-surface/95 border-2 border-border shadow-md p-1 select-none hover:scale-105 transition-transform overflow-hidden relative group"
      title="Digital Products Preview"
    >
      {/* Top Window Bar with 3 Dots */}
      <div className="flex items-center gap-1 mb-1 border-b border-border/70 pb-0.5">
        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-400 inline-block" />
        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-400 inline-block" />
        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 inline-block" />
      </div>
      {/* Mini layout inside */}
      <div className="flex-1 flex gap-1 items-stretch">
        <div className="w-1/4 bg-primary/20 border-r border-border/40" />
        <div className="flex-1 flex flex-col justify-center gap-0.5 sm:gap-1">
          <div className="w-full h-1 bg-foreground/30" />
          <div className="w-3/4 h-1 bg-foreground/20" />
          <div className="w-1/2 h-1 bg-primary/60" />
        </div>
      </div>
      {/* Micro Cursor Pointer */}
      <div className="absolute bottom-1 end-1 pointer-events-none opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black dark:text-white drop-shadow" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3l7 18 3-7 7-3L3 3z" />
        </svg>
      </div>
    </span>
  );
}

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-32 sm:pt-36 pb-20 sm:pb-24 overflow-hidden bg-transparent text-foreground transition-colors duration-200"
    >
      <Container className="relative z-10 max-w-5xl mx-auto text-center px-4">
        {/* Top Status & Action Pill Bar */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="inline-flex items-center gap-1.5 p-1 bg-surface/90 border border-border shadow-sm mb-8 sm:mb-10 text-xs sm:text-sm select-none">
            {/* Left: Available status with pulsating primary brand dot */}
            <div className="flex items-center gap-2 px-3 py-1 font-medium text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 bg-primary"></span>
              </span>
              <span>{t('availableBadge')}</span>
            </div>

            {/* Right: Direct chat action */}
            <a
              href="https://wa.me/213559929899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold transition-all shadow-sm cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span>{t('letsTalkBadge')}</span>
            </a>
          </div>
        </AnimatedSection>

        {/* Main Headline with Creative Inline Badges & Stickers */}
        <AnimatedSection direction="up" delay={0.2}>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.2] sm:leading-[1.25] text-foreground max-w-4xl mx-auto">
            {/* Line 1: Hi, I'm [Avatar] H4Code a */}
            <span className="inline">
              {t('greeting')} <BrandBadge /> {t('agencyName')}
            </span>{' '}
            {/* Line 2: Product Designer [Sticker] Creating */}
            <span className="inline text-primary">
              {t('role')}
            </span>{' '}
            <ToolSticker />{' '}
            <span className="inline">
              {t('crafting')}
            </span>{' '}
            {/* Line 3: Digital Products [Mini Window] */}
            <span className="inline text-foreground">
              {t('products')}
            </span>{' '}
            <MiniWindowMockup />
          </h1>
        </AnimatedSection>

        {/* Supporting Description */}
        <AnimatedSection direction="up" delay={0.3}>
          <p className="max-w-2xl mx-auto mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
            {t('description')}
          </p>
        </AnimatedSection>

        {/* Action Buttons */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8 sm:mt-10">
            {/* Primary Dark Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold bg-secondary hover:bg-secondary-hover text-secondary-foreground transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer group border border-border"
            >
              <span>{t('ctaPrimary')}</span>
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </a>

            {/* Secondary WhatsApp Button */}
            <a
              href="https://wa.me/213559929899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold bg-surface hover:bg-surface-hover text-foreground border border-border transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 text-primary fill-current" />
              <span>{t('whatsappText')}</span>
            </a>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
