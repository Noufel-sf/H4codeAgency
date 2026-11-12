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
        'bg-white dark:bg-[#10141C] border border-slate-200 dark:border-white/[0.08] hover:border-blue-400 dark:hover:border-[#4776F5]/40',
        'shadow-sm hover:shadow-xl dark:hover:shadow-[0_10px_35px_-10px_rgba(49,91,219,0.22)] hover:-translate-y-1',
        featured && 'border-blue-200 dark:border-[#315BDB]/30 bg-gradient-to-b from-blue-50/40 to-white dark:from-[#121824] dark:to-[#10141C]'
      )}
    >
      {/* Top subtle highlight */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 dark:via-[#4776F5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Icon & Index */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-white/[0.04] border border-blue-100 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-[#4776F5] group-hover:bg-blue-100 dark:group-hover:bg-[#315BDB]/20 group-hover:border-blue-300 dark:group-hover:border-[#4776F5]/50 transition-all duration-300">
            {icon}
          </div>
          <a
            href="#contact"
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-[#929BAA] group-hover:text-white group-hover:bg-[#315BDB] group-hover:border-[#315BDB] transition-all duration-300"
            aria-label={`Inquire about ${title}`}
          >
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
          </a>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-[#F5F7FC] mb-3 group-hover:text-blue-600 dark:group-hover:text-[#60A5FA] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-[#929BAA] leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Capability Tags */}
      <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-white/[0.03] text-slate-600 dark:text-[#929BAA] border border-slate-200/80 dark:border-white/[0.06] group-hover:border-slate-300 dark:group-hover:border-white/10 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

