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
    <section id="about" className="relative py-24 sm:py-32 bg-background border-y border-border transition-colors duration-200">
      {/* Background glow */}
      <div className="absolute top-1/3 end-0 w-80 h-80 bg-primary/10 blur-[140px] pointer-events-none" />

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
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>{t('paragraph1')}</p>
                <p className="text-foreground font-medium">{t('paragraph2')}</p>
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
                  <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors h-full">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="p-2 rounded-lg bg-surface border border-border shadow-xs">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-sm text-foreground">
                        {t(`differentiators.${item.key}.title`)}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
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
              <div className="relative rounded-2xl bg-secondary text-secondary-foreground border border-border p-6 sm:p-8 shadow-xl overflow-hidden">
                <div className="absolute top-0 end-0 w-48 h-48 bg-primary/20 blur-3xl pointer-events-none" />

                <div className="space-y-6">
                  {/* Studio Manifest Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-border/40">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest text-primary-light uppercase">
                        Our Studio Standard
                      </span>
                      <h3 className="text-base font-bold text-secondary-foreground">The Quality Baseline</h3>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">v3.2</span>
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
                        className="flex items-center justify-between p-3 rounded-lg bg-surface/50 border border-border/40 text-xs"
                      >
                        <div className="flex items-center gap-2.5 text-secondary-foreground">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{item.label}</span>
                        </div>
                        <span className="text-[11px] font-mono text-brand-300 ps-2 shrink-0">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Editorial Quote Box */}
                  <div className="pt-4 border-t border-border/40 text-xs text-muted-foreground italic">
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

