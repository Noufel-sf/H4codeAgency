'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

/* ── 4-point Sparkle Star (matches reference image) ───────────────────── */
function SparkleStar() {
  return (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mx-8 sm:mx-12 md:mx-14 inline-block shrink-0 select-none opacity-90 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

/* ── Fallback content by locale ───────────────────────────────────────── */
const CONTENT: Record<string, { ribbonBlue: string[]; ribbonNavy: string[] }> = {
  ar: {
    ribbonBlue: [
      'تصميم واجهات وتجربة المستخدم',
      'تطوير برمجي شامل ومتكامل',
      'هندسة Next.js 16 متطورة',
      'أتمتة الذكاء الاصطناعي',
      'متاجر إلكترونية عالية التحويل',
      'منصات رقمية متخصصة ومبتكرة',
    ],
    ribbonNavy: [
      'نسبة رضا العملاء 99.8%',
      'سرعة فائقة دون أي تأخير',
      'كود برمجي نقي وخالٍ من التعقيد',
      'أكثر من 40 مشروعاً ناجحاً',
      'بنية سحابية قابلة للتوسع المؤسسي',
      'مهندسون خبراء ومتابعة مستمرة',
    ],
  },
  fr: {
    ribbonBlue: [
      'Architecture UI & UX',
      'Développement Full-Stack',
      'Next.js 16 & React 19',
      'Automatisation & Workflows IA',
      'E-Commerce Haute Conversion',
      'Produits Digitaux Sur Mesure',
    ],
    ribbonNavy: [
      '99.8% Satisfaction Client',
      'Vélocité Inférieure à la Seconde',
      'Zéro Dette Technique',
      'Plus de 40 Projets en Production',
      'Évolutivité Haute Performance',
      'Ingénieurs Seniors Dédiés',
    ],
  },
  en: {
    ribbonBlue: [
      'UX & UI Architecture',
      'Full-Stack Development',
      'Next.js 16 & React 19',
      'AI & Workflow Automation',
      'High-Converting Platforms',
      'Bespoke Digital Products',
    ],
    ribbonNavy: [
      '99.8% Client Satisfaction',
      'Sub-Second Velocity',
      'Zero Legacy Debt',
      'Over 40 Production Launches',
      'Enterprise Grade Scalability',
      'Dedicated Senior Engineering',
    ],
  },
};

export function Marquee() {
  const t = useTranslations('marquee');
  const locale = useLocale();

  const fallback = CONTENT[locale] || CONTENT.en;

  let blueItems: string[] = [];
  let navyItems: string[] = [];

  try {
    const rawBlue = t.raw('tapeGreen');
    if (Array.isArray(rawBlue) && rawBlue.length > 0) {
      blueItems = rawBlue;
    }
  } catch {
    // Fallback
  }

  try {
    const rawNavy = t.raw('tapeBlack');
    if (Array.isArray(rawNavy) && rawNavy.length > 0) {
      navyItems = rawNavy;
    }
  } catch {
    // Fallback
  }

  if (blueItems.length === 0) {
    blueItems = fallback.ribbonBlue;
  }
  if (navyItems.length === 0) {
    navyItems = fallback.ribbonNavy;
  }

  // Duplicate items in each track so track width W is ~4,000px+
  const trackBlueItems = [...blueItems, ...blueItems];
  const trackNavyItems = [...navyItems, ...navyItems];

  const renderTrackItems = (items: string[], trackId: string) => (
    items.map((item, index) => (
      <span key={`${trackId}-${index}`} className="inline-flex items-center">
        <span className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-tight whitespace-nowrap">
          {item}
        </span>
        <SparkleStar />
      </span>
    ))
  );

  return (
    <section className="relative py-16  md:py-5 mb-12 overflow-hidden bg-transparent select-none pointer-events-none transition-colors duration-200">
      {/* Inline styles ensure zero dependency on PostCSS cache or compile lag */}
      <style>{`
        @keyframes marquee-track-scroll-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
        @keyframes marquee-track-scroll-right {
          0% {
            transform: translate3d(-100%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-marquee-left {
          display: flex;
          flex-shrink: 0;
          width: max-content;
          align-items: center;
          white-space: nowrap;
          animation: marquee-track-scroll-left 50s linear infinite;
          will-change: transform;
        }
        .animate-marquee-right {
          display: flex;
          flex-shrink: 0;
          width: max-content;
          align-items: center;
          white-space: nowrap;
          animation: marquee-track-scroll-right 50s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="relative w-full flex items-center justify-center min-h-[220px] sm:min-h-[280px] md:min-h-[320px]">
        
        {/* ── Ribbon 1: Deep Navy (Underneath, Tilted Upwards, scrolls right slowly & infinitely) ── */}
        <div className="absolute w-[160vw] -left-[30vw] rotate-[3.5deg] sm:rotate-[4deg] z-0 shadow-xl pointer-events-auto">
          <div className="bg-secondary text-secondary-foreground border-y border-white/10 py-5 sm:py-6 md:py-7 overflow-hidden flex w-full" dir="ltr">
            {/* 4 identical tracks side-by-side ensure the screen is 100% covered at every millisecond */}
            <div className="animate-marquee-right">
              {renderTrackItems(trackNavyItems, 'navy-t1')}
            </div>
            <div className="animate-marquee-right" aria-hidden="true">
              {renderTrackItems(trackNavyItems, 'navy-t2')}
            </div>
            <div className="animate-marquee-right" aria-hidden="true">
              {renderTrackItems(trackNavyItems, 'navy-t3')}
            </div>
            <div className="animate-marquee-right" aria-hidden="true">
              {renderTrackItems(trackNavyItems, 'navy-t4')}
            </div>
          </div>
        </div>

        {/* ── Ribbon 2: Brand Blue (Crossing on Top, Tilted Downwards, scrolls left slowly & infinitely) ── */}
        <div className="absolute w-[160vw] -left-[30vw] -rotate-[3.5deg] sm:-rotate-[4deg] z-10 shadow-2xl shadow-black/50 pointer-events-auto">
          <div className="bg-primary text-primary-foreground py-5 sm:py-6 md:py-7 overflow-hidden flex w-full" dir="ltr">
            {/* 4 identical tracks side-by-side ensure the screen is 100% covered at every millisecond */}
            <div className="animate-marquee-left">
              {renderTrackItems(trackBlueItems, 'blue-t1')}
            </div>
            <div className="animate-marquee-left" aria-hidden="true">
              {renderTrackItems(trackBlueItems, 'blue-t2')}
            </div>
            <div className="animate-marquee-left" aria-hidden="true">
              {renderTrackItems(trackBlueItems, 'blue-t3')}
            </div>
            <div className="animate-marquee-left" aria-hidden="true">
              {renderTrackItems(trackBlueItems, 'blue-t4')}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
