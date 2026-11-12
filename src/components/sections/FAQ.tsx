'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'] as const;

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#090B10]">
      <Container size="narrow">
        <AnimatedSection direction="up">
          <SectionHeading
            badge={t('badge')}
            title={t('headline')}
            description={t('description')}
            align="center"
          />
        </AnimatedSection>

        <div className="mt-12 space-y-3.5">
          {questions.map((key, index) => {
            const isOpen = openIndex === index;
            const question = t(`items.${key}.question`);
            const answer = t(`items.${key}.answer`);

            return (
              <AnimatedSection
                key={key}
                direction="up"
                delay={0.06 * index}
              >
                <div
                  className={cn(
                    'rounded-2xl transition-all duration-300 overflow-hidden border',
                    isOpen
                      ? 'bg-[#121824] border-[#4776F5]/40 shadow-lg shadow-black/20'
                      : 'bg-[#10141C]/80 border-white/[0.08] hover:border-white/15'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#F5F7FC]">
                      {question}
                    </span>
                    <div
                      className={cn(
                        'w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300',
                        isOpen
                          ? 'bg-[#315BDB] text-white rotate-180'
                          : 'bg-white/[0.05] text-[#929BAA]'
                      )}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#929BAA] leading-relaxed border-t border-white/[0.04] animate-in fade-in duration-200">
                      {answer}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

