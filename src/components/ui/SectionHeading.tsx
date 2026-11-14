'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  highlightBadge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  highlightWords?: string[];
  darkTheme?: boolean;
}

export function SectionHeading({
  badge,
  highlightBadge,
  title,
  description,
  align = 'center',
  className,
  highlightWords = [],
  darkTheme = false,
}: SectionHeadingProps) {
  const locale = useLocale();
  const isRtl = locale === 'ar';

  // Check if title has [Bracketed Highlight] syntax, e.g. "[Supercharge] Your Workflow"
  let parsedHighlight = highlightBadge;
  let parsedTitle = title;

  const bracketMatch = title.match(/^\[(.*?)\]\s*(.*)$/);
  if (bracketMatch) {
    parsedHighlight = bracketMatch[1];
    parsedTitle = bracketMatch[2];
  }

  const renderRestOfTitle = () => {
    if (!highlightWords || highlightWords.length === 0) {
      return parsedTitle;
    }
    const parts = parsedTitle.split(new RegExp(`(${highlightWords.join('|')})`, 'gi'));
    return parts.map((part, i) => {
      const isHighlight = highlightWords.some(
        (hw) => hw.toLowerCase() === part.toLowerCase()
      );
      if (isHighlight) {
        return (
          <span key={i} className="text-[#3461fd] font-semibold">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div
      className={cn(
        'max-w-3xl mb-12 lg:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-start',
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            'inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase mb-5 border font-mono select-none',
            darkTheme
              ? 'border-white/20 bg-white/5 text-neutral-300'
              : 'border-border bg-surface text-muted-foreground',
            align === 'center' ? 'mx-auto' : ''
          )}
        >
          <span className="w-1.5 h-1.5 bg-[#3461fd] animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.18]',
          darkTheme ? 'text-white' : 'text-foreground'
        )}
      >
        {parsedHighlight && (
          <span
            className={cn(
              'relative inline-block px-3 sm:px-4 py-0.5 sm:py-1 -rotate-1 font-black select-none mr-2 rtl:ml-2 border',
              darkTheme
                ? 'border-white/20 bg-white/5 text-white'
                : 'border-[#3461fd]/30 bg-[#3461fd]/10 text-[#3461fd]'
            )}
          >
            {/* Base text: guarantees the word is always fully rendered */}
            <span>{parsedHighlight}</span>

            {/* Dynamic scroll-draw solid blue badge overlay */}
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
                'absolute inset-0 overflow-hidden whitespace-nowrap pointer-events-none bg-[#3461fd] text-white',
                isRtl ? 'right-0' : 'left-0'
              )}
            >
              <span className="inline-block px-3 sm:px-4 py-0.5 sm:py-1">
                {parsedHighlight}
              </span>
            </motion.span>
          </span>
        )}{' '}
        <span>{renderRestOfTitle()}</span>
      </h2>

      {description && (
        <p
          className={cn(
            'mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed max-w-2xl',
            darkTheme ? 'text-neutral-400' : 'text-muted-foreground',
            align === 'center' ? 'mx-auto' : ''
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
