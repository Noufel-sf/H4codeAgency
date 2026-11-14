'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ══════════════════════════════════════════════════════════════════════════
   SLIDER 1 SLIDES (Web & E-Commerce & Systems)
   ══════════════════════════════════════════════════════════════════════════ */
const SLIDER_1_SLIDES = [
  {
    key: 'slide1',
    image: '/services/web-dev.jpg',
  },
  {
    key: 'slide2',
    image: '/services/desktop-dev.jpg',
  },
  {
    key: 'slide3',
    image: '/services/web-design.jpg',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   SLIDER 2 SLIDES (Mobile Apps, SaaS & Cloud Platforms)
   ══════════════════════════════════════════════════════════════════════════ */
const SLIDER_2_SLIDES = [
  {
    key: 'slide1',
    image: '/services/mobile-dev.jpg',
  },
  {
    key: 'slide2',
    image: '/services/desktop-dev.jpg',
  },
  {
    key: 'slide3',
    image: '/services/web-dev.jpg',
  },
];

export function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [slide1Index, setSlide1Index] = useState(0);
  const [slide2Index, setSlide2Index] = useState(0);

  const nextSlide1 = () => {
    setSlide1Index((prev) => (prev + 1) % SLIDER_1_SLIDES.length);
  };

  const nextSlide2 = () => {
    setSlide2Index((prev) => (prev + 1) % SLIDER_2_SLIDES.length);
  };

  const activeSlide1 = SLIDER_1_SLIDES[slide1Index];
  const activeSlide2 = SLIDER_2_SLIDES[slide2Index];

  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 bg-transparent text-foreground border-t border-border transition-colors duration-200 overflow-hidden"
    >
      <Container>
        {/* ── Section Header (2 Columns) ── */}
        <AnimatedSection direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-border/70">
            {/* Left Column: Badge & Big Headline */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 block font-mono">
                {t('badge')}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black tracking-tight leading-[1.18] text-foreground max-w-xl">
                <span className="relative inline-block px-2.5 sm:px-3.5 py-0.5 -rotate-1 font-black select-none mr-2 rtl:ml-2 whitespace-nowrap leading-tight overflow-hidden align-baseline border border-primary/40 text-primary-foreground">
                  {/* Background base wireframe tint */}
                  <span className="absolute inset-0 bg-primary/20 -z-20" />

                  {/* Dynamic scroll-draw solid primary badge fill */}
                  <motion.span
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ willChange: 'width' }}
                    className={cn(
                      'absolute inset-0 bg-primary -z-10',
                      isRtl ? 'right-0' : 'left-0'
                    )}
                  />

                  {/* Clean text */}
                  <span className="relative z-10 text-primary-foreground drop-shadow-xs">
                    {t('headlineHighlight')}
                  </span>
                </span>{' '}
                <span>{t('headlineRest')}</span>
              </h2>
            </div>

            {/* Right Column: Subtitle Description & Action */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-1 lg:pt-8">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                {t('description')}
              </p>
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary-hover text-secondary-foreground text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border border-border"
                >
                  <span>{t('seeAll')}</span>
                  <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── The Two Sliders Side-by-Side ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 sm:mt-16">
          
          {/* ═══════════ SLIDER 1: Web & E-Commerce ═══════════ */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="group flex flex-col justify-between bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-sm">
              {/* Visual Card Area with High-Resolution Photography */}
              <div className="relative w-full aspect-[4/3] bg-surface overflow-hidden border-b border-border">
                {/* Slide Content with AnimatePresence */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide1Index}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={activeSlide1.image}
                      alt={t(`slider1.${activeSlide1.key}.title`)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Card Footer: Title, Category & Next Slide Arrow Button */}
              <div className="p-6 sm:p-8 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {t(`slider1.${activeSlide1.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t(`slider1.${activeSlide1.key}.category`)}
                  </p>
                </div>

                {/* Arrow Action Button (Advances Slider) */}
                <button
                  type="button"
                  onClick={nextSlide1}
                  aria-label="Next solution slide"
                  className="w-11 h-11 bg-surface hover:bg-foreground hover:text-background text-foreground border border-border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs shrink-0 group/btn"
                >
                  <ArrowIcon className="w-5 h-5 transition-transform group-hover/btn:translate-x-0.5 rtl:group-hover/btn:-translate-x-0.5" />
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* ═══════════ SLIDER 2: Mobile Apps & SaaS ═════════════ */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="group flex flex-col justify-between bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-sm">
              {/* Visual Card Area with High-Resolution Photography */}
              <div className="relative w-full aspect-[4/3] bg-surface overflow-hidden border-b border-border">
                {/* Slide Content with AnimatePresence */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide2Index}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={activeSlide2.image}
                      alt={t(`slider2.${activeSlide2.key}.title`)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Card Footer: Title, Category & Next Slide Arrow Button */}
              <div className="p-6 sm:p-8 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {t(`slider2.${activeSlide2.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t(`slider2.${activeSlide2.key}.category`)}
                  </p>
                </div>

                {/* Arrow Action Button (Advances Slider) */}
                <button
                  type="button"
                  onClick={nextSlide2}
                  aria-label="Next solution slide"
                  className="w-11 h-11 bg-surface hover:bg-foreground hover:text-background text-foreground border border-border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs shrink-0 group/btn"
                >
                  <ArrowIcon className="w-5 h-5 transition-transform group-hover/btn:translate-x-0.5 rtl:group-hover/btn:-translate-x-0.5" />
                </button>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </Container>
    </section>
  );
}
