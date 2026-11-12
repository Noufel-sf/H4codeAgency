'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonialKeys = ['item1', 'item2', 'item3'] as const;

  return (
    <section className="relative py-24 sm:py-32 bg-background border-y border-border transition-colors duration-200 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-72 bg-primary/5 blur-[120px] pointer-events-none" />

      <Container>
        <AnimatedSection direction="up">
          <SectionHeading
            badge={t('badge')}
            title={t('headline')}
            description={t('description')}
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {testimonialKeys.map((key, index) => {
            const quote = t(`items.${key}.quote`);
            const author = t(`items.${key}.author`);
            const role = t(`items.${key}.role`);
            const company = t(`items.${key}.company`);

            return (
              <AnimatedSection
                key={key}
                direction="up"
                delay={0.15 * index}
              >
                <div className="relative rounded-2xl bg-card border border-border p-7 flex flex-col justify-between h-full hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                  <div>
                    <Quote className="w-8 h-8 text-primary/40 mb-4" />
                    <p className="text-sm sm:text-base text-foreground/90 leading-relaxed italic mb-6">
                      &ldquo;{quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-5 border-t border-border/60 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs shadow-xs">
                      {author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">{author}</div>
                      <div className="text-xs text-muted-foreground">
                        {role}, <span className="text-primary font-medium">{company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

