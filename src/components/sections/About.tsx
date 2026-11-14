'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Target, Sparkles, Gauge, MessageSquare } from 'lucide-react';

export function About() {
  const t = useTranslations('about');

  const differentiators = [
    {
      key: 'item1',
      number: '01',
      icon: <Target className="w-5 h-5 text-primary" />
    },
    {
      key: 'item2',
      number: '02',
      icon: <Sparkles className="w-5 h-5 text-primary" />
    },
    {
      key: 'item3',
      number: '03',
      icon: <Gauge className="w-5 h-5 text-primary" />
    },
    {
      key: 'item4',
      number: '04',
      icon: <MessageSquare className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-transparent text-foreground border-t border-border transition-colors duration-200 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[140px] pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <AnimatedSection direction="up">
          <SectionHeading
            badge={t('badge')}
            title={t('headline')}
            description={t('paragraph1')}
            align="center"
          />
        </AnimatedSection>

        {/* Feature Image Banner (aboutus.png) */}
        <AnimatedSection direction="up" delay={0.15}>
          <div className="relative w-full max-w-5xl mx-auto mt-12 sm:mt-16 overflow-hidden border border-border bg-card shadow-xl group">
            <Image
              src="/aboutus.png"
              alt="H4Code Digital Agency"
              width={1750}
              height={899}
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
              priority={false}
            />
          </div>
        </AnimatedSection>

        {/* 4 Differentiator Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12 max-w-5xl mx-auto">
          {differentiators.map((item, index) => (
            <AnimatedSection
              key={item.key}
              direction="up"
              delay={0.1 * index + 0.2}
            >
              <div className="p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-xs hover:shadow-md h-full flex flex-col justify-between group">
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/60">
                    <span className="font-mono text-xs font-bold text-primary tracking-wider">
                      {item.number}
                    </span>
                    <div className="p-2 bg-surface border border-border group-hover:border-primary/40 transition-colors">
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t(`differentiators.${item.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {t(`differentiators.${item.key}.desc`)}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Narrative Conclusion */}
        <AnimatedSection direction="up" delay={0.4}>
          <p className="mt-12 sm:mt-14 text-center text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            {t('paragraph2')}
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
