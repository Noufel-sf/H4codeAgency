'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';
import {
  ArrowRight,
  ArrowLeft,
  Terminal,
  Zap,
  ShieldCheck,
  Code2,
  ChevronDown
} from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-32 pb-20 overflow-hidden bg-studio-grid"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] glow-blue blur-[140px] pointer-events-none opacity-80" />
      <div className="absolute top-1/3 end-10 w-[350px] h-[350px] bg-[#4776F5]/10 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-start">
            {/* Availability Pill */}
            <AnimatedSection direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs font-medium text-[#F5F7FC] shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="tracking-wide text-xs">{t('status')}</span>
              </div>
            </AnimatedSection>

            {/* Main Headline */}
            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight leading-[1.08] text-[#F5F7FC]">
                <span>{t('headlinePrefix')} </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4776F5] via-[#60A5FA] to-[#315BDB] drop-shadow-sm">
                  {t('headlineHighlight')}
                </span>
              </h1>
            </AnimatedSection>

            {/* Supporting Description */}
            <AnimatedSection direction="up" delay={0.3}>
              <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#929BAA] leading-relaxed mx-auto lg:mx-0">
                {t('description')}
              </p>
            </AnimatedSection>

            {/* CTAs */}
            <AnimatedSection direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<ArrowIcon className="w-4 h-4" />}
                >
                  {t('ctaPrimary')}
                </Button>

                <Button
                  href="#work"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {t('ctaSecondary')}
                </Button>
              </div>
            </AnimatedSection>

            {/* Studio Credibility Metrics */}
            <AnimatedSection direction="up" delay={0.5}>
              <div className="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-start">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC]">99.8%</div>
                  <div className="text-[11px] sm:text-xs text-[#929BAA] mt-0.5">{t('metrics.satisfaction')}</div>
                </div>
                <div className="border-s border-white/[0.08] ps-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#4776F5]">98+</div>
                  <div className="text-[11px] sm:text-xs text-[#929BAA] mt-0.5">{t('metrics.performance')}</div>
                </div>
                <div className="border-s border-white/[0.08] ps-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC]">100%</div>
                  <div className="text-[11px] sm:text-xs text-[#929BAA] mt-0.5">{t('metrics.delivery')}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Distinctive Creative Studio Console & Interface Preview */}
          <div className="lg:col-span-5 relative">
            <AnimatedSection direction="left" delay={0.3}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Layered Glass IDE Mockup */}
                <div className="relative rounded-2xl bg-[#0D111A]/90 border border-white/[0.12] shadow-2xl backdrop-blur-xl overflow-hidden">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#121824]/80 border-b border-white/[0.08]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#929BAA]">
                      <Terminal className="w-3.5 h-3.5 text-[#4776F5]" />
                      <span>H4Code_Architecture.tsx</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      LIVE
                    </span>
                  </div>

                  {/* Window Code / Content */}
                  <div className="p-5 font-mono text-xs text-[#F5F7FC]/90 space-y-3 leading-relaxed select-none">
                    <div className="text-[#5E6778] italic">// Engineered for unmatched velocity and precision</div>
                    <div className="text-[#929BAA]">
                      <span className="text-[#4776F5]">const</span> studio = <span className="text-[#60A5FA]">createDigitalExperience</span>({`{`}
                    </div>
                    <div className="ps-4 space-y-1">
                      <div><span className="text-[#929BAA]">stack:</span> [<span className="text-emerald-400">&apos;Next.js 16&apos;</span>, <span className="text-emerald-400">&apos;TypeScript&apos;</span>, <span className="text-emerald-400">&apos;Tailwind&apos;</span>],</div>
                      <div><span className="text-[#929BAA]">i18n:</span> {`{ `}<span className="text-amber-300">locales</span>: [<span className="text-emerald-400">&apos;en&apos;</span>, <span className="text-emerald-400">&apos;ar&apos;</span>, <span className="text-emerald-400">&apos;fr&apos;</span>], <span className="text-amber-300">rtl</span>: <span className="text-cyan-400">true</span>{` }`},</div>
                      <div><span className="text-[#929BAA]">performanceScore:</span> <span className="text-cyan-400">99</span>,</div>
                      <div><span className="text-[#929BAA]">designSystem:</span> <span className="text-emerald-400">&apos;Bespoke Craftsmanship&apos;</span>,</div>
                      <div><span className="text-[#929BAA]">securityAudit:</span> <span className="text-emerald-400">&apos;Enterprise Grade&apos;</span></div>
                    </div>
                    <div>{`});`}</div>
                    <div className="pt-2 text-[#4776F5] flex items-center gap-2">
                      <span className="animate-pulse">❯</span>
                      <span className="text-white">studio.deployProductionReadyProduct();</span>
                    </div>
                  </div>

                  {/* Live Status Ticker */}
                  <div className="p-4 bg-[#10141C] border-t border-white/[0.08] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Zap className="w-4 h-4" />
                      <span>Ready for production</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#929BAA]">
                      <ShieldCheck className="w-4 h-4 text-[#315BDB]" />
                      <span>TypeScript Strict</span>
                    </div>
                  </div>
                </div>

                {/* Floating Studio Accent Badge: Top-Right */}
                <div className="absolute -top-6 -end-4 sm:-end-6 p-3 rounded-xl bg-[#121824]/90 border border-[#4776F5]/40 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#315BDB]/20 flex items-center justify-center text-[#4776F5]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#929BAA]">Next-Gen Architecture</div>
                    <div className="text-xs font-bold text-white">Full RTL & LTR Ready</div>
                  </div>
                </div>

                {/* Floating Studio Accent Badge: Bottom-Left */}
                <div className="absolute -bottom-6 -start-4 sm:-start-6 p-3 rounded-xl bg-[#121824]/90 border border-white/10 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#929BAA]">Sub-second TTFB</div>
                    <div className="text-xs font-bold text-emerald-400">Optimal Lighthouse 100</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-24 text-center">
          <a
            href="#services"
            className="inline-flex flex-col items-center gap-2 text-xs text-[#5E6778] hover:text-[#F5F7FC] transition-colors group cursor-pointer"
            aria-label="Scroll to services"
          >
            <span>{t('scroll')}</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#315BDB] group-hover:text-[#4776F5]" />
          </a>
        </div>
      </Container>
    </section>
  );
}

