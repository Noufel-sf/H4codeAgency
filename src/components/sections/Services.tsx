'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Globe, Smartphone, Monitor, Palette, ArrowUpRight } from 'lucide-react';

interface BentoItem {
  id: string;
  icon: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  badgeText: string;
  isWide: boolean;
}

export function Services() {
  const t = useTranslations('services');

  const bentoItems: BentoItem[] = [
    {
      id: 'webDev',
      icon: <Globe className="w-5 h-5 text-primary" />,
      imageSrc: '/services/web-dev.jpg',
      imageAlt: 'Web Development visual mockup',
      badgeText: 'Next.js 16 & React 19',
      isWide: true,
    },
    {
      id: 'mobileDev',
      icon: <Smartphone className="w-5 h-5 text-primary" />,
      imageSrc: '/services/mobile-dev.jpg',
      imageAlt: 'Mobile Development visual mockup',
      badgeText: 'iOS & Android Native',
      isWide: false,
    },
    {
      id: 'desktopDev',
      icon: <Monitor className="w-5 h-5 text-primary" />,
      imageSrc: '/services/desktop-dev.jpg',
      imageAlt: 'Desktop Development visual mockup',
      badgeText: 'macOS & Windows',
      isWide: false,
    },
    {
      id: 'webDesign',
      icon: <Palette className="w-5 h-5 text-primary" />,
      imageSrc: '/services/web-design.jpg',
      imageAlt: 'Web & UI/UX Design visual mockup',
      badgeText: 'Figma & Design Systems',
      isWide: true,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-background border-t border-border transition-colors duration-200 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 blur-[120px] pointer-events-none rounded-full" />

      <Container>
        {/* Section Heading */}
        <AnimatedSection direction="up">
          <SectionHeading
            badge={t('badge')}
            title={t('headline')}
            description={t('description')}
            align="center"
          />
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {bentoItems.map((item, index) => {
            const title = t(`items.${item.id}.title`);
            const description = t(`items.${item.id}.description`);
            const tags = [
              t(`items.${item.id}.tags.0`),
              t(`items.${item.id}.tags.1`),
              t(`items.${item.id}.tags.2`),
              t(`items.${item.id}.tags.3`),
            ];

            return (
              <AnimatedSection
                key={item.id}
                direction="up"
                delay={0.1 * index}
                className={
                  item.isWide
                    ? 'col-span-12 lg:col-span-7'
                    : 'col-span-12 lg:col-span-5'
                }
              >
                <div className="group relative h-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-card text-card-foreground border border-border hover:border-primary/50 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  {/* Subtle top hover rim light */}
                  <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header: Icon, Badge & Action Arrow */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-surface border border-border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300 shadow-sm">
                        {item.icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-surface border border-border/70 text-muted-foreground group-hover:border-primary/20 transition-colors">
                        {item.badgeText}
                      </span>
                    </div>

                    <a
                      href="#contact"
                      className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary-foreground group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-sm"
                      aria-label={`Inquire about ${title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
                    </a>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                      {description}
                    </p>
                  </div>

                  {/* Visual Image Showcase (Compressed & Optimized) */}
                  <div className="relative w-full h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden border border-border/80 bg-surface/50 mb-6 shadow-inner">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes={
                        item.isWide
                          ? '(max-width: 1024px) 100vw, 60vw'
                          : '(max-width: 1024px) 100vw, 40vw'
                      }
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    {/* Subtle inner glass overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Capability Tags */}
                  <div className="pt-4 border-t border-border/60 flex flex-wrap gap-2">
                    {tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-surface text-muted-foreground border border-border/70 group-hover:border-primary/30 group-hover:text-foreground transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
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
