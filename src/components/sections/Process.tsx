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
      rotation: 'md:-rotate-2 hover:md:rotate-0',
      icon: (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-44 h-44 sm:w-48 sm:h-48 stroke-border transition-colors duration-300 group-hover:stroke-primary/30"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Lightbulb outer shape */}
          <path d="M100 42 C72 42 54 62 54 88 C54 106 66 118 72 132 L128 132 C134 118 146 106 146 88 C146 62 128 42 100 42 Z" />
          {/* Screw base */}
          <path d="M78 144 L122 144" strokeWidth="9" />
          <path d="M84 156 L116 156" strokeWidth="8" />
          {/* Inner Filament Loop */}
          <path d="M86 96 C86 76 114 76 114 96" strokeWidth="8" />
          {/* Left Radiant Rays */}
          <path d="M30 68 L42 74" strokeWidth="9" />
          <path d="M26 94 L38 94" strokeWidth="9" />
          <path d="M30 120 L42 114" strokeWidth="9" />
          {/* Right Radiant Rays */}
          <path d="M170 68 L158 74" strokeWidth="9" />
          <path d="M174 94 L162 94" strokeWidth="9" />
          <path d="M170 120 L158 114" strokeWidth="9" />
        </svg>
      )
    },
    {
      key: 'step2',
      number: '02',
      rotation: 'md:rotate-0 hover:md:-rotate-1',
      icon: (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-44 h-44 sm:w-48 sm:h-48 stroke-border transition-colors duration-300 group-hover:stroke-primary/30"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Arched Bezier curve */}
          <path d="M34 135 C34 70 166 70 166 135" strokeWidth="10" />
          {/* Control handle connecting bar */}
          <path d="M32 64 L168 64" strokeWidth="7" />
          {/* Left control point circle */}
          <circle cx="32" cy="64" r="8" strokeWidth="8" />
          {/* Right control point circle */}
          <circle cx="168" cy="64" r="8" strokeWidth="8" />
          {/* Center anchor square */}
          <rect x="91" y="55" width="18" height="18" rx="3" strokeWidth="8" />
          {/* Pen nib body */}
          <path d="M100 74 L74 134 L100 160 L126 134 Z" strokeWidth="9" />
          <circle cx="100" cy="116" r="4" fill="currentColor" className="fill-[#E5E9F0] dark:fill-white/[0.08]" stroke="none" />
          <path d="M100 122 L100 160" strokeWidth="8" />
        </svg>
      )
    },
    {
      key: 'step3',
      number: '03',
      rotation: 'md:rotate-2 hover:md:rotate-0',
      icon: (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-44 h-44 sm:w-48 sm:h-48 stroke-border transition-colors duration-300 group-hover:stroke-primary/30"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Rocket fuselage */}
          <path d="M152 48 C105 46 72 82 64 114 L86 136 C118 128 154 95 152 48 Z" strokeWidth="10" />
          {/* Porthole window */}
          <circle cx="116" cy="84" r="12" strokeWidth="8" />
          {/* Upper fin */}
          <path d="M104 54 C82 50 62 60 58 72 C64 88 80 88 80 88" strokeWidth="8" />
          {/* Lower fin */}
          <path d="M146 96 C150 118 140 138 128 142 C112 136 112 120 112 120" strokeWidth="8" />
          {/* Exhaust flame */}
          <path d="M64 114 L50 128 C46 132 48 138 54 138 L60 138 L60 144 C60 150 66 152 70 148 L86 136" strokeWidth="8" />
          {/* Speed sparks and trails */}
          <path d="M36 148 L24 160" strokeWidth="7" />
          <path d="M46 164 L34 176" strokeWidth="7" />
          <path d="M60 166 L52 174" strokeWidth="7" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 bg-surface/50 border-t border-border transition-colors duration-200 overflow-hidden"
    >
      <Container>
        {/* Centered Pill Badge & Headline matching user reference */}
        <AnimatedSection direction="up">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-border bg-card text-muted-foreground shadow-sm mb-5">
              {t('badge')}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
              {t('headline')}
            </h2>
          </div>
        </AnimatedSection>

        {/* Compact Playing-Card Grid with Curved Hand-Drawn Connectors */}
        <div className="relative max-w-4xl mx-auto">
          {/* Curved Connector Arrow 1: Between Card 1 and Card 2 (Top Arch) */}
          <div className="hidden md:block absolute -top-8 left-[31%] w-20 lg:w-24 h-14 pointer-events-none z-20 rtl:left-auto rtl:right-[31%] rtl:-scale-x-100">
            <svg
              viewBox="0 0 90 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full stroke-muted-foreground/60"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Arched path */}
              <path d="M 6 40 C 14 10, 68 8, 84 28" />
              {/* Arrow tip pointing to card 2 */}
              <path d="M 72 28 L 85 29 L 83 17" />
            </svg>
          </div>

          {/* Curved Connector Arrow 2: Between Card 2 and Card 3 (Bottom Arch) */}
          <div className="hidden md:block absolute -bottom-7 left-[64%] w-20 lg:w-24 h-14 pointer-events-none z-20 rtl:left-auto rtl:right-[64%] rtl:-scale-x-100">
            <svg
              viewBox="0 0 90 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full stroke-muted-foreground/60"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Swooping under path */}
              <path d="M 6 12 C 20 40, 68 40, 84 18" />
              {/* Arrow tip pointing to card 3 */}
              <path d="M 72 17 L 85 18 L 83 30" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 items-stretch justify-center">
            {steps.map((step, index) => {
              const title = t(`steps.${step.key}.title`);
              const desc = t(`steps.${step.key}.desc`);

              return (
                <AnimatedSection
                  key={step.key}
                  direction="up"
                  delay={0.12 * index}
                  className="h-full flex justify-center"
                >
                  <div
                    className={`group relative w-full max-w-[310px] md:max-w-none h-full rounded-[1.75rem] bg-card border border-border p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-xl hover:border-primary/40 transform-gpu ${step.rotation}`}
                  >
                    {/* Top Content: Green Step Number & Step Title */}
                    <div>
                      {/* Step Number in Emerald Green */}
                      <span className="font-mono text-base sm:text-lg font-bold text-[#15803d] dark:text-[#22c55e] tracking-tight block">
                        {step.number}
                      </span>

                      {/* Step Title */}
                      <h3 className="text-xl sm:text-[22px] font-bold text-foreground mt-2 mb-3 leading-tight tracking-tight">
                        {title}
                      </h3>
                    </div>

                    {/* Centered Large Line Watermark Icon */}
                    <div className="my-2 sm:my-3 flex items-center justify-center py-2 select-none pointer-events-none">
                      {step.icon}
                    </div>

                    {/* Bottom Content: Step Description */}
                    <div>
                      <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-normal">
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
