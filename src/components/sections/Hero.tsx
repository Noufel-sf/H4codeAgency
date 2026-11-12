'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-white dark:bg-[#090B10] transition-colors duration-200"
    >
      {/* Visual Accent Left: Concentric Radar Waves */}
      <div className="absolute -top-12 -start-20 sm:start-2 sm:top-20 pointer-events-none select-none opacity-85 dark:opacity-60 z-0">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-blue-400/20 dark:border-blue-500/20" />
          {/* Mid ring 1 */}
          <div className="absolute inset-8 rounded-full border border-blue-500/25 dark:border-blue-400/25" />
          {/* Mid ring 2 */}
          <div className="absolute inset-16 rounded-full border border-blue-500/30 dark:border-blue-400/30" />
          {/* Inner ring */}
          <div className="absolute inset-24 rounded-full border border-blue-600/35 dark:border-blue-400/35" />
          {/* Center glowing orb */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 blur-sm opacity-60 animate-pulse" />
        </div>
      </div>

      {/* Visual Accent Right: Soft 3D Floating Spheres */}
      <div className="absolute -top-10 -end-16 sm:end-6 sm:top-12 pointer-events-none select-none z-0">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80">
          {/* Main 3D Sphere */}
          <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-indigo-100 via-blue-200 to-blue-400/80 dark:from-indigo-900/40 dark:via-blue-800/40 dark:to-blue-600/30 shadow-[0_20px_50px_rgba(49,91,219,0.25)] blur-[0.5px] relative overflow-hidden animate-pulse">
            {/* Specular highlight */}
            <div className="absolute top-6 start-8 w-24 h-24 rounded-full bg-white/60 dark:bg-white/20 blur-md pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Visual Accent Bottom-Right: Small floating sphere */}
      <div className="absolute bottom-12 end-12 sm:end-28 pointer-events-none select-none z-0 hidden sm:block">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 dark:from-slate-800 dark:to-blue-900 shadow-lg blur-[0.5px] opacity-75 animate-bounce [animation-duration:6s]" />
      </div>

      {/* Subtle floating isometric chips / cubes */}
      <div className="absolute bottom-8 start-10 sm:start-24 pointer-events-none select-none opacity-40 dark:opacity-20 hidden sm:block">
        <div className="space-y-2">
          <div className="w-5 h-5 rounded-xs border-2 border-slate-400 rotate-12" />
          <div className="w-6 h-6 rounded-xs border-2 border-blue-400 -rotate-12 ms-4" />
        </div>
      </div>

      {/* Central Content */}
      <Container className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Subtitle / Agency Location Tagline */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 tracking-wide mb-4">
            {t('tagline')}
          </div>
        </AnimatedSection>

        {/* Main Headline */}
        <AnimatedSection direction="up" delay={0.2}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.12] sm:leading-[1.15] text-slate-950 dark:text-white">
            <span className="block text-slate-950 dark:text-white">
              {t('headlinePrefix')}
            </span>
            <span className="block text-[#315BDB] dark:text-[#4776F5] mt-1 sm:mt-2">
              {t('headlineHighlight')}
            </span>
          </h1>
        </AnimatedSection>

        {/* Supporting Description */}
        <AnimatedSection direction="up" delay={0.3}>
          <p className="max-w-2xl mx-auto mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t('description')}
          </p>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8 sm:mt-10">
            {/* Primary Dark Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-bold bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>{t('ctaPrimary')}</span>
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </a>

            {/* Secondary Soft Button */}
            <a
              href="#work"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white border border-slate-200/80 dark:border-white/10 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
