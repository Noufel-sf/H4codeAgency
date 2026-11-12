'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Process() {
  const t = useTranslations('process');

  const steps = [
    {
      key: 'step1',
      number: '01',
      rotation: 'lg:-rotate-2 hover:lg:rotate-0',
      icon: (
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-36 h-36 stroke-slate-200 dark:stroke-white/[0.07] transition-all duration-300 group-hover:stroke-emerald-400/30 dark:group-hover:stroke-emerald-400/20"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Lightbulb bulb */}
          <path d="M80 30 C55 30 44 48 44 70 C44 85 55 96 59 108 L101 108 C105 96 116 85 116 70 C116 48 105 30 80 30 Z" />
          {/* Base coils */}
          <line x1="62" y1="118" x2="98" y2="118" />
          <line x1="68" y1="128" x2="92" y2="128" />
          {/* Filament */}
          <path d="M68 76 L74 60 L86 60 L92 76" strokeWidth="3" />
          {/* Rays */}
          <line x1="22" y1="56" x2="34" y2="62" />
          <line x1="18" y1="78" x2="30" y2="78" />
          <line x1="24" y1="100" x2="36" y2="94" />
          <line x1="138" y1="56" x2="126" y2="62" />
          <line x1="142" y1="78" x2="130" y2="78" />
          <line x1="136" y1="100" x2="124" y2="94" />
        </svg>
      )
    },
    {
      key: 'step2',
      number: '02',
      rotation: 'lg:rotate-0 hover:lg:-rotate-1',
      icon: (
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-36 h-36 stroke-slate-200 dark:stroke-white/[0.07] transition-all duration-300 group-hover:stroke-emerald-400/30 dark:group-hover:stroke-emerald-400/20"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Bezier curve path */}
          <path d="M28 112 C 28 60, 132 60, 132 112" />
          {/* Handle line connecting control points */}
          <line x1="24" y1="56" x2="136" y2="56" strokeDasharray="3 3" strokeWidth="2.5" />
          {/* Control point 1 circle */}
          <circle cx="24" cy="56" r="6.5" />
          {/* Center anchor square */}
          <rect x="73" y="49" width="14" height="14" rx="2" />
          {/* Control point 2 circle */}
          <circle cx="136" cy="56" r="6.5" />
          {/* Pen nib */}
          <path d="M80 63 L60 114 L80 136 L100 114 Z" />
          <circle cx="80" cy="98" r="4" className="fill-slate-200 dark:fill-white/[0.07]" />
          <line x1="80" y1="102" x2="80" y2="136" />
        </svg>
      )
    },
    {
      key: 'step3',
      number: '03',
      rotation: 'lg:rotate-2 hover:lg:rotate-0',
      icon: (
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-36 h-36 stroke-slate-200 dark:stroke-white/[0.07] transition-all duration-300 group-hover:stroke-emerald-400/30 dark:group-hover:stroke-emerald-400/20"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Rocket body */}
          <path d="M125 35 C85 35 60 70 52 95 L65 108 C90 100 125 75 125 35 Z" />
          {/* Window */}
          <circle cx="95" cy="65" r="9" />
          {/* Top fin */}
          <path d="M86 42 C68 38 52 46 48 56 C52 70 65 72 65 72" />
          {/* Bottom fin */}
          <path d="M118 74 C122 92 114 108 104 112 C90 108 88 95 88 95" />
          {/* Exhaust flame */}
          <path d="M52 95 L40 107 C36 111 38 116 44 116 L49 116 L49 121 C49 127 54 129 58 125 L70 113" />
          {/* Speed & particle lines */}
          <line x1="28" y1="124" x2="18" y2="134" />
          <line x1="36" y1="138" x2="26" y2="148" />
          <line x1="48" y1="140" x2="42" y2="146" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 bg-slate-50/60 dark:bg-[#090D14] border-t border-slate-200/80 dark:border-white/[0.06] transition-colors duration-200 overflow-hidden"
    >
      <Container>
        {/* Centered Pill Badge & Headline matching user reference */}
        <AnimatedSection direction="up">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 shadow-sm backdrop-blur-sm mb-5">
              {t('badge')}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {t('headline')}
            </h2>
          </div>
        </AnimatedSection>

        {/* 3 Playing-Card Grid with Curved Hand-Drawn Connectors */}
        <div className="relative max-w-6xl mx-auto">
          {/* Curved Connector Arrow 1: Between Card 1 and Card 2 (Top Arch) */}
          <div className="hidden lg:block absolute -top-8 left-[30%] w-24 h-16 pointer-events-none z-20 rtl:left-auto rtl:right-[30%] rtl:-scale-x-100">
            <svg
              viewBox="0 0 100 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full stroke-slate-400 dark:stroke-slate-500"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Arched path */}
              <path d="M 5 45 C 15 10, 70 8, 92 32" />
              {/* Arrow tip pointing to card 2 */}
              <path d="M 80 32 L 93 33 L 90 20" />
            </svg>
          </div>

          {/* Curved Connector Arrow 2: Between Card 2 and Card 3 (Bottom Arch) */}
          <div className="hidden lg:block absolute -bottom-8 left-[63%] w-24 h-16 pointer-events-none z-20 rtl:left-auto rtl:right-[63%] rtl:-scale-x-100">
            <svg
              viewBox="0 0 100 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full stroke-slate-400 dark:stroke-slate-500"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Swooping under path */}
              <path d="M 5 10 C 20 44, 72 44, 92 20" />
              {/* Arrow tip pointing to card 3 */}
              <path d="M 79 19 L 93 19 L 90 32" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 items-stretch">
            {steps.map((step, index) => {
              const title = t(`steps.${step.key}.title`);
              const desc = t(`steps.${step.key}.desc`);

              return (
                <AnimatedSection
                  key={step.key}
                  direction="up"
                  delay={0.12 * index}
                  className="h-full"
                >
                  <div
                    className={`group relative h-full rounded-[2rem] bg-white dark:bg-[#111622] border border-slate-200/90 dark:border-white/10 p-7 sm:p-9 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300 hover:shadow-xl hover:border-slate-300 dark:hover:border-white/20 transform-gpu ${step.rotation}`}
                  >
                    {/* Top Content: Green Step Number & Step Title */}
                    <div>
                      {/* Step Number in Emerald Green */}
                      <span className="font-mono text-2xl font-bold text-emerald-600 dark:text-emerald-400 tracking-tight block">
                        {step.number}
                      </span>

                      {/* Step Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-3 mb-6 leading-snug">
                        {title}
                      </h3>
                    </div>

                    {/* Centered Large Faint Line Watermark Icon */}
                    <div className="my-6 flex items-center justify-center py-4 select-none pointer-events-none">
                      {step.icon}
                    </div>

                    {/* Bottom Content: Step Description */}
                    <div>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {desc}
                      </p>
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
