'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from '../theme/ThemeToggle';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isRtl: boolean;
}

export function MobileMenu({ isOpen, onClose, isRtl }: MobileMenuProps) {
  const t = useTranslations('navigation');

  if (!isOpen) return null;

  const navLinks = [
    { href: '#home', label: t('home') },
    { href: '#services', label: t('services') },
    { href: '#about', label: t('about') },
    { href: '#work', label: t('work') },
    { href: '#process', label: t('process') },
    { href: '#faq', label: t('faq') },
    { href: '#contact', label: t('contact') }
  ];

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 end-0 w-full max-w-xs bg-card border-s border-border shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right duration-300">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-primary" />
              <span className="font-bold text-lg tracking-wider text-foreground">
                H4<span className="text-primary">CODE</span>
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
              >
                <span>{link.label}</span>
                <ArrowIcon className="w-4 h-4 text-muted-foreground/40" />
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-border space-y-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs text-muted-foreground">Appearance & Lang</span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="w-full justify-center"
            onClick={onClose}
          >
            {t('letsTalk')}
          </Button>
        </div>
      </div>
    </div>
  );
}

