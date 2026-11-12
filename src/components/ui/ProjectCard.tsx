import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  viewLabel: string;
  liveLabel: string;
  previewGraphic: React.ReactNode;
  index: number;
}

export function ProjectCard({
  title,
  category,
  description,
  technologies,
  viewLabel,
  liveLabel,
  previewGraphic,
  index
}: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="group rounded-3xl bg-[#10141C] border border-white/[0.08] hover:border-[#4776F5]/40 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-[0_20px_50px_-15px_rgba(49,91,219,0.2)]">
      <div className={cn(
        'grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10',
        isEven ? '' : 'lg:[&>*:first-child]:order-2'
      )}>
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-5">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#4776F5]">
              {category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC] group-hover:text-white transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-[#929BAA] leading-relaxed">
            {description}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-[#F5F7FC]/80 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#4776F5] hover:text-[#60A5FA] transition-colors group/link cursor-pointer"
            >
              <span>{viewLabel}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 rtl:group-hover/link:-translate-x-0.5" />
            </a>
            <span className="text-white/20">•</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#929BAA] hover:text-[#F5F7FC] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{liveLabel}</span>
            </a>
          </div>
        </div>

        {/* Visual Preview Graphic */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl bg-[#090B10] border border-white/10 overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
            {/* Browser chrome header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#121824] border-b border-white/[0.08] text-xs text-[#929BAA]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <div className="px-3 py-0.5 rounded-md bg-[#090B10] text-[11px] font-mono text-[#5E6778] max-w-[200px] truncate border border-white/[0.04]">
                https://demo.{title.toLowerCase().replace(/\s+/g, '')}.io
              </div>
              <div className="w-10" />
            </div>

            {/* Simulated UI Content */}
            <div className="p-6 min-h-[260px] sm:min-h-[300px] flex items-center justify-center bg-gradient-to-br from-[#0C1018] to-[#121824]">
              {previewGraphic}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

