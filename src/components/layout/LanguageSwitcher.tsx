'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', label: 'English', short: 'EN', dir: 'ltr' },
  { code: 'ar', label: 'العربية', short: 'AR', dir: 'rtl' },
  { code: 'fr', label: 'Français', short: 'FR', dir: 'ltr' }
] as const;

export function LanguageSwitcher({ className }: { className?: string }) {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLang = languages.find((l) => l.code === currentLocale) || languages[0];

  const handleSelect = (code: 'en' | 'ar' | 'fr') => {
    if (code !== currentLocale) {
      router.replace(pathname, { locale: code });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={cn('relative inline-block text-left', className)} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select Language"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-800 dark:text-[#F5F7FC] bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/10 transition-all duration-200 cursor-pointer"
      >
        <Globe className="w-3.5 h-3.5 text-[#315BDB] dark:text-[#4776F5]" />
        <span>{activeLang.short}</span>
        <ChevronDown
          className={cn(
            'w-3 h-3 text-slate-500 dark:text-[#929BAA] transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {isOpen && (
        <div
          className="absolute end-0 mt-2 w-36 bg-white dark:bg-[#10141C] border border-slate-200 dark:border-white/10 shadow-2xl p-1 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl"
          role="menu"
        >
          {languages.map((lang) => {
            const isActive = lang.code === currentLocale;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                role="menuitem"
                className={cn(
                  'w-full flex items-center justify-between px-3 py-2 text-xs  font-medium transition-colors cursor-pointer',
                  isActive
                    ? 'bg-blue-50 text-blue-600 dark:bg-[#315BDB]/20 dark:text-[#4776F5]'
                    : 'text-slate-600 dark:text-[#929BAA] hover:text-slate-900 dark:hover:text-[#F5F7FC] hover:bg-slate-100 dark:hover:bg-white/[0.05]'
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[11px] text-slate-400 dark:text-white/50">{lang.short}</span>
                  <span>{lang.label}</span>
                </div>
                {isActive && <Check className="w-3.5 h-3.5 text-blue-600 dark:text-[#4776F5]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

