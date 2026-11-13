'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale } from 'next-intl';

export function CTA() {
  const t = useTranslations('cta');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'Google',
      href: 'mailto:contact@h4code.agency',
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-2.64-6.36L16.2 7.8A6 6 0 1 0 18 12h-6v-3h9" />
        </svg>
      )
    },
    {
      name: 'Behance',
      href: 'https://behance.net',
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 7h4.5a2.5 2.5 0 0 1 0 5H3V7zm0 5h5a2.5 2.5 0 0 1 0 5H3v-5z" />
          <path d="M14 13.5a3.5 3.5 0 1 0 3.5-3.5 3.5 3.5 0 0 0-3.5 3.5zm0 0h7" />
          <path d="M15 7h5" />
        </svg>
      )
    },
    {
      name: 'Dribbble',
      href: 'https://dribbble.com',
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
          <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
          <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
        </svg>
      )
    },
    {
      name: 'Figma',
      href: 'https://figma.com',
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-background transition-colors duration-200 overflow-hidden">
      <Container size="narrow">
        <AnimatedSection direction="up">
          <div className="relative -[2.5rem] bg-card border border-border p-8 sm:p-14 md:p-16 text-center flex flex-col items-center justify-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight max-w-2xl leading-tight">
              {t('headline')}
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 font-normal max-w-md">
              {t('subtitle')}
            </p>

            {/* Action Button */}
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 px-6 py-3.5 bg-secondary hover:bg-secondary-hover text-secondary-foreground text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>{t('button')}</span>
              <span className="w-6 h-6 bg-white/15 dark:bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                <ArrowIcon className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Social Icons Row */}
            <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-surface border border-border/80 hover:border-primary/50 text-muted-foreground hover:text-foreground hover:bg-surface-hover flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Email link at the bottom */}
            <a
              href={`mailto:${t('email')}`}
              className="mt-8 text-xs sm:text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer tracking-wide"
            >
              {t('email')}
            </a>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

