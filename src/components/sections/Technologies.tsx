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
    <section className="relative py-24 sm:py-32 bg-[#090B10]">
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
              <div className="rounded-2xl bg-[#10141C] border border-white/[0.08] p-6 space-y-4 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#4776F5]">
                    {t(`categories.${cat.categoryKey}`)}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-[#315BDB]" />
                </div>

                <div className="space-y-2.5">
                  {cat.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] transition-colors"
                    >
                      <span className="text-sm font-semibold text-[#F5F7FC]">
                        {item.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#929BAA] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
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

