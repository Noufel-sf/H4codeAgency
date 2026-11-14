'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { motion } from 'framer-motion';

/* ── Digital Matrix Pixel Wave Graphic (matching reference image) ───── */
function PixelMatrixWave() {
  // Generate structured clusters of square pixels that mimic the digital terrain in the screenshot
  const columns = 54;
  const rows = 12;

  // Height profile function that creates wave peaks and valleys
  const getOpacity = (col: number, row: number) => {
    const wave = Math.sin((col / columns) * Math.PI * 3.5) * 0.4 + 0.5;
    const verticalDist = (rows - row) / rows;
    const noise = ((col * 17 + row * 29) % 11) / 10;
    const threshold = wave * 0.7 + noise * 0.3;

    if (verticalDist < threshold) {
      if (noise > 0.6) return 0.75;
      if (noise > 0.3) return 0.45;
      return 0.2;
    }
    if (verticalDist < threshold + 0.18 && noise > 0.7) {
      return 0.3;
    }
    return 0;
  };

  const dots: { x: number; y: number; opacity: number }[] = [];
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const op = getOpacity(c, r);
      if (op > 0) {
        dots.push({
          x: c * 24 + 12,
          y: r * 14 + 10,
          opacity: op,
        });
      }
    }
  }

  return (
    <div className="relative w-full h-36 sm:h-44 md:h-52 overflow-hidden select-none pointer-events-none mt-12 sm:mt-16">
      <svg
        viewBox="0 0 1300 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMax slice"
      >
        {dots.map((dot, idx) => (
          <rect
            key={idx}
            x={dot.x}
            y={dot.y}
            width="6"
            height="6"
            className="fill-primary transition-opacity"
            style={{ opacity: dot.opacity }}
          />
        ))}
      </svg>
      {/* Soft gradient fade into background at the very bottom */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

/* ── Social Icons Data ────────────────────────────────────────────────── */
const SOCIALS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/h4codeagency?xtok=MXE0aTFrdXFwcW5vMQ==',
    hoverColor: 'hover:text-[#E4405F] hover:border-[#E4405F]/50',
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/h4code',
    hoverColor: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/50',
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/h4code',
    hoverColor: 'hover:text-[#1877F2] hover:border-[#1877F2]/50',
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/213555000000',
    hoverColor: 'hover:text-[#25D366] hover:border-[#25D366]/50',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
];

export function CTA() {
  const t = useTranslations('cta');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <section className="relative pt-24 sm:pt-32 pb-0 bg-transparent transition-colors duration-200 overflow-hidden">
      <Container size="narrow">
        <AnimatedSection direction="up">
          <div className="text-center flex flex-col items-center justify-center max-w-3xl mx-auto">
            
            {/* ── Headline with Signature Cyan/Brand Marker Highlight ── */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-foreground tracking-tight leading-[1.2] sm:leading-[1.18] max-w-3xl">
              <span>{t('headlinePrefix')} </span>
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">{t('headlineHighlight')}</span>
                {/* Marker stroke that dynamically draws from start to end when reached */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: isRtl ? 1 : 0, willChange: 'transform' }}
                  className="absolute left-0 bottom-1.5 sm:bottom-2 w-full h-3.5 sm:h-5 bg-blue-500 -z-0 pointer-events-none"
                  aria-hidden="true"
                />
              </span>
            </h2>

            {/* ── Two Action Buttons ── */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {/* Button 1: Primary Dark Start Action */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary-hover text-secondary-foreground text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer min-w-[200px]"
              >
                {t('primaryBtn')}
              </a>

              {/* Button 2: WhatsApp Action (matching reference) */}
              <a
                href="https://wa.me/213555000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-card text-foreground hover:bg-surface border border-border/80 hover:border-primary/40 text-base font-semibold shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer min-w-[200px]"
              >
                <span>{t('whatsappBtn')}</span>
                <span className="text-primary inline-flex items-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </span>
              </a>
            </div>

            {/* ── Subtitle / Guarantee bullet points (matching reference) ── */}
            <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-muted-foreground font-medium tracking-wide">
              {t('guarantee')}
            </p>

            {/* ── Socials: Insta, LinkedIn, Facebook, WhatsApp ── */}
            <div className="mt-8 flex items-center justify-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-11 h-11 bg-card border border-border text-muted-foreground hover:bg-surface flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs ${social.hoverColor}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>
        </AnimatedSection>
      </Container>

      {/* ── Futuristic Digital Pixel Wave Bottom Motif (matching reference image) ── */}
      <PixelMatrixWave />
    </section>
  );
}
