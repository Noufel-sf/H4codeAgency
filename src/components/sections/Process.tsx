'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedSection } from '../ui/AnimatedSection';
import {
  Compass,
  GitBranch,
  PenTool,
  Code2,
  Rocket
} from 'lucide-react';

export function Process() {
  const t = useTranslations('process');

  const steps = [
    {
      key: 'step1',
      icon: <Compass className="w-5 h-5 text-[#4776F5]" />
    },
    {
      key: 'step2',
      icon: <GitBranch className="w-5 h-5 text-cyan-400" />
    },
    {
      key: 'step3',
      icon: <PenTool className="w-5 h-5 text-amber-400" />
    },
    {
      key: 'step4',
      icon: <Code2 className="w-5 h-5 text-emerald-400" />
    },
    {
      key: 'step5',
      icon: <Rocket className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-slate-50/70 dark:bg-[#0C0F17] border-t border-slate-200 dark:border-white/[0.06] transition-colors duration-200">
      <Container>
        <AnimatedSection direction="up">
          <SectionHeading
            badge={t('badge')}
            title={t('headline')}
            description={t('description')}
            align="center"
          />
        </AnimatedSection>

        {/* 5-Step Process Timeline Grid */}
        <div className="relative mt-16">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent -translate-y-8 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const number = t(`steps.${step.key}.number`);
              const title = t(`steps.${step.key}.title`);
              const desc = t(`steps.${step.key}.desc`);

              return (
                <AnimatedSection
                  key={step.key}
                  direction="up"
                  delay={0.1 * index}
                  className="h-full"
                >
                  <div className="group relative h-full rounded-2xl bg-white dark:bg-[#10141C] border border-slate-200 dark:border-white/[0.08] hover:border-blue-400 dark:hover:border-[#4776F5]/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                    <div>
                      {/* Top Bar with Number & Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-mono text-2xl font-black text-slate-300 dark:text-white/20 group-hover:text-blue-600 dark:group-hover:text-[#4776F5] transition-colors">
                          {number}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-[#315BDB]/20 group-hover:border-blue-300 dark:group-hover:border-[#4776F5]/40 transition-all">
                          {step.icon}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FC] mb-2.5 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                        {title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-[#929BAA] leading-relaxed">
                        {desc}
                      </p>
                    </div>

                    {/* Step indicator dot */}
                    <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/[0.04] flex items-center justify-between text-[11px] text-slate-500 dark:text-[#5E6778] font-mono">
                      <span>Phase {number}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/20 group-hover:bg-blue-600 dark:group-hover:bg-[#4776F5] transition-colors" />
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

