'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  children,
  className,
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#315BDB]/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none group select-none cursor-pointer';

  const variants = {
    primary:
      'bg-[#315BDB] hover:bg-[#4776F5] text-white shadow-[0_0_24px_rgba(49,91,219,0.35)] hover:shadow-[0_0_32px_rgba(71,118,245,0.55)] border border-[#4776F5]/40',
    secondary:
      'bg-[#121824] hover:bg-[#161F2E] text-[#F5F7FC] border border-white/10 hover:border-white/20 shadow-sm',
    outline:
      'bg-transparent hover:bg-white/[0.05] text-[#F5F7FC] border border-white/15 hover:border-white/30',
    ghost:
      'bg-transparent hover:bg-white/[0.06] text-[#929BAA] hover:text-[#F5F7FC]'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5 font-semibold'
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5 inline-flex items-center">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 inline-flex items-center">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}

