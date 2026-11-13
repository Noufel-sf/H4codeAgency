'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Technologies() {
  const t = useTranslations('technologies');

  const techCategories = [
    {
      categoryKey: 'frontend',
      items: [
        { name: 'React 19', tag: 'UI Library' },
        { name: 'Next.js 16', tag: 'App Router / SSR' },
        { name: 'TypeScript', tag: 'Strict Typing' },
        { name: 'Tailwind CSS', tag: 'Design Tokens' },
        { name: 'Framer Motion', tag: 'Choreography' }
      ]
    },
    {
      categoryKey: 'backend',
      items: [
        { name: 'Node.js', tag: 'Runtime' },
        { name: 'Express / Nest', tag: 'APIs' },
        { name: 'PostgreSQL', tag: 'Relational DB' },
        { name: 'MongoDB', tag: 'Document DB' },
        { name: 'Redis', tag: 'Caching & Queues' }
      ]
    },
    {
      categoryKey: 'mobileAi',
      items: [
        { name: 'React Native', tag: 'iOS & Android' },
        { name: 'Python', tag: 'Data & FastApi' },
        { name: 'LLM Agents', tag: 'Claude / OpenAI' },
        { name: 'Docker', tag: 'Containerization' },
        { name: 'Cloudflare / AWS', tag: 'Edge Infrastructure' }
      ]
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-surface/50 border-t border-border transition-colors duration-200">
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
          {techCategories.map((cat, cIdx) => (
            <AnimatedSection
              key={cat.categoryKey}
              direction="up"
              delay={0.15 * cIdx}
            >
              <div className="bg-card border border-border p-6 space-y-4 hover:border-primary/40 transition-all shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-border/60">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t(`categories.${cat.categoryKey}`)}
                  </h3>
                  <span className="w-2 h-2 bg-primary" />
                </div>

                <div className="space-y-2.5">
                  {cat.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="flex items-center justify-between p-3 bg-surface border border-border/80 hover:bg-surface-hover transition-colors shadow-xs"
                    >
                      <span className="text-sm font-semibold text-foreground">
                        {item.name}
                      </span>
                      <span className="text-[11px] font-mono text-muted-foreground px-2 py-0.5 bg-background border border-border">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

