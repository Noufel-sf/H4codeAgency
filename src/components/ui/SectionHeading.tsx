import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  highlightWords?: string[];
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className,
  highlightWords = []
}: SectionHeadingProps) {
  // Render highlighted words in blue if specified
  const renderTitle = () => {
    if (!highlightWords || highlightWords.length === 0) {
      return title;
    }
    const parts = title.split(new RegExp(`(${highlightWords.join('|')})`, 'gi'));
    return parts.map((part, i) => {
      const isHighlight = highlightWords.some(
        (hw) => hw.toLowerCase() === part.toLowerCase()
      );
      if (isHighlight) {
        return (
          <span key={i} className="text-[#4776F5] font-semibold">
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
            'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.03] text-slate-700 dark:text-[#929BAA]',
            align === 'center' ? 'mx-auto' : ''
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#315BDB] animate-pulse" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-[#F5F7FC] leading-[1.15]">
        {renderTitle()}
      </h2>
      {description && (
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 dark:text-[#929BAA] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

