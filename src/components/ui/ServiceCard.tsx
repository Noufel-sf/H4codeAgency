import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  ctaLabel?: string;
  featured?: boolean;
}

export function ServiceCard({
  icon,
  title,
  description,
  tags,
  ctaLabel = 'Inquire for this service',
  featured = false
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between overflow-hidden',
        'bg-card text-card-foreground border border-border hover:border-primary/40',
        'shadow-sm hover:shadow-xl hover:-translate-y-1',
        featured && 'border-primary/30 bg-gradient-to-b from-primary/5 to-card'
      )}
    >
      {/* Top subtle highlight */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Icon & Index */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-primary group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
            {icon}
          </div>
          <a
            href="#contact"
            className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary-foreground group-hover:bg-primary group-hover:border-primary transition-all duration-300"
            aria-label={`Inquire about ${title}`}
          >
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
          </a>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Capability Tags */}
      <div className="pt-4 border-t border-border/60 flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface text-muted-foreground border border-border/80 group-hover:border-primary/20 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

