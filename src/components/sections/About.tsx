'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Target, Sparkles, Gauge, MessageSquare, CheckCircle2 } from 'lucide-react';

export function About() {
  const t = useTranslations('about');

  const differentiators = [
    {
      key: 'item1',
      icon: <Target className="w-5 h-5 text-[#4776F5]" />
    },
    {
      key: 'item2',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />
    },
    {
      key: 'item3',
      icon: <Gauge className="w-5 h-5 text-emerald-400" />
    },
    {
      key: 'item4',
      icon: <MessageSquare className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0B0E15] border-y border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/3 end-0 w-80 h-80 bg-[#4776F5]/10 blur-[140px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Philosophy & Differentiators */}
          <div className="lg:col-span-7 space-y-8">
            <AnimatedSection direction="up">
              <SectionHeading
                badge={t('badge')}
                title={t('headline')}
                align="left"
                className="mb-6"
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <div className="space-y-4 text-base sm:text-lg text-[#929BAA] leading-relaxed">
                <p>{t('paragraph1')}</p>
                <p className="text-[#F5F7FC]/80">{t('paragraph2')}</p>
              </div>
            </AnimatedSection>

            {/* Differentiators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {differentiators.map((item, index) => (
                <AnimatedSection
                  key={item.key}
                  direction="up"
                  delay={0.1 * index + 0.2}
                >
                  <div className="p-5 rounded-xl bg-[#121824]/60 border border-white/[0.08] hover:border-white/20 transition-colors h-full">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-sm text-[#F5F7FC]">
                        {t(`differentiators.${item.key}.title`)}
                      </h4>
                    </div>
                    <p className="text-xs text-[#929BAA] leading-relaxed">
                      {t(`differentiators.${item.key}.desc`)}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right Column: Creative Visual Editorial Showcase */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="left" delay={0.3}>
              <div className="relative rounded-2xl bg-gradient-to-b from-[#121824] to-[#0A0D14] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden">
                <div className="absolute top-0 end-0 w-48 h-48 bg-[#315BDB]/20 blur-3xl pointer-events-none" />

                <div className="space-y-6">
                  {/* Studio Manifest Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest text-[#4776F5] uppercase">
                        Our Studio Standard
                      </span>
                      <h3 className="text-base font-bold text-white">The Quality Baseline</h3>
                    </div>
                    <span className="text-xs font-mono text-[#929BAA]">v3.2</span>
                  </div>

                  {/* Checklist Elements */}
                  <div className="space-y-4">
                    {[
                      {
                        label: 'No generic templates or bloated page-builders',
                        status: '100% Handcrafted'
                      },
                      {
                        label: 'Strict TypeScript typing across every module',
                        status: 'Zero `any`'
                      },
                      {
                        label: 'Full LTR and RTL bi-directional typography',
                        status: 'Native Arabic'
                      },
                      {
                        label: 'Lighthouse audit target above 95 across all metrics',
                        status: 'Guaranteed'
                      },
                      {
                        label: 'Direct access to senior engineers without account managers',
                        status: 'Unfiltered'
                      }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs"
                      >
                        <div className="flex items-center gap-2.5 text-[#F5F7FC]">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{item.label}</span>
                        </div>
                        <span className="text-[11px] font-mono text-[#4776F5] ps-2 shrink-0">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Editorial Quote Box */}
                  <div className="pt-4 border-t border-white/[0.08] text-xs text-[#929BAA] italic">
                    &ldquo;Code is our medium, but business transformation is our deliverable.&rdquo;
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}

