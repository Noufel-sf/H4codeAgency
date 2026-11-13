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
          <span key={i} className="text-primary font-semibold">
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
            'inline-flex items-center gap-2 px-3 py-1  text-xs font-semibold tracking-wider uppercase mb-4 border border-border bg-surface text-muted-foreground',
            align === 'center' ? 'mx-auto' : ''
          )}
        >
          <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
        {renderTitle()}
      </h2>
      {description && (
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

