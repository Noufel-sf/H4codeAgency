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
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-background text-foreground transition-colors duration-200"
    >
      {/* Visual Accent Left: Concentric Radar Waves */}
      <div className="absolute -top-12 -start-20 sm:start-2 sm:top-20 pointer-events-none select-none opacity-85 dark:opacity-60 z-0">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
          {/* Outer ring */}
          <div className="absolute inset-0 border border-primary/20" />
          {/* Mid ring 1 */}
          <div className="absolute inset-8 border border-primary/25" />
          {/* Mid ring 2 */}
          <div className="absolute inset-16 border border-primary/30" />
          {/* Inner ring */}
          <div className="absolute inset-24 border border-primary/35" />
          {/* Center glowing orb */}
          <div className="w-16 h-16 bg-gradient-to-tr from-primary to-accent blur-sm opacity-60 animate-pulse" />
        </div>
      </div>

      {/* Visual Accent Right: Soft 3D Floating Spheres */}
      <div className="absolute -top-10 -end-16 sm:end-6 sm:top-12 pointer-events-none select-none z-0">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80">
          {/* Main 3D Sphere */}
          <div className="w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-brand-100 via-brand-300 to-primary/80 dark:from-navy-900/60 dark:via-blue-600/40 dark:to-primary/30 shadow-[0_20px_50px_rgba(64,88,168,0.25)] blur-[0.5px] relative overflow-hidden animate-pulse">
            {/* Specular highlight */}
            <div className="absolute top-6 start-8 w-24 h-24 bg-white/60 dark:bg-white/20 blur-md pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Visual Accent Bottom-Right: Small floating sphere */}
      <div className="absolute bottom-12 end-12 sm:end-28 pointer-events-none select-none z-0 hidden sm:block">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-100 to-brand-400 dark:from-surface dark:to-primary/50 shadow-lg blur-[0.5px] opacity-75 animate-bounce [animation-duration:6s]" />
      </div>

      {/* Subtle floating isometric chips / cubes */}
      <div className="absolute bottom-8 start-10 sm:start-24 pointer-events-none select-none opacity-40 dark:opacity-20 hidden sm:block">
        <div className="space-y-2">
          <div className="w-5 h-5 -xs border-2 border-border rotate-12" />
          <div className="w-6 h-6 -xs border-2 border-primary -rotate-12 ms-4" />
        </div>
      </div>

      {/* Central Content */}
      <Container className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Subtitle / Agency Location Tagline */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="text-xs sm:text-sm font-medium text-muted-foreground tracking-wide mb-4">
            {t('tagline')}
          </div>
        </AnimatedSection>

        {/* Main Headline */}
        <AnimatedSection direction="up" delay={0.2}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.12] sm:leading-[1.15] text-foreground">
            <span className="block text-foreground">
              {t('headlinePrefix')}
            </span>
            <span className="block text-primary mt-1 sm:mt-2">
              {t('headlineHighlight')}
            </span>
          </h1>
        </AnimatedSection>

        {/* Supporting Description */}
        <AnimatedSection direction="up" delay={0.3}>
          <p className="max-w-2xl mx-auto mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
            {t('description')}
          </p>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8 sm:mt-10">
            {/* Primary Dark Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-bold bg-secondary hover:bg-secondary-hover text-secondary-foreground transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>{t('ctaPrimary')}</span>
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </a>

            {/* Secondary Soft Button */}
            <a
              href="#work"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold bg-surface hover:bg-surface-hover text-foreground border border-border transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
