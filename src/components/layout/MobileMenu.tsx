'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from '../theme/ThemeToggle';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isRtl: boolean;
  activeSection?: string;
}

export function MobileMenu({ isOpen, onClose, isRtl, activeSection = 'home' }: MobileMenuProps) {
  const t = useTranslations('navigation');

  const navLinks = [
    { href: '#home', label: t('home') },
    { href: '#services', label: t('services') },
    { href: '#work', label: t('work') },
    { href: '#about', label: t('about') },
    { href: '#process', label: t('process') },
    { href: '#faq', label: t('faq') },
    { href: '#contact', label: t('contact') }
  ];

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop with Smooth Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Right Sidebar Drawer with Spring Slide-In */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 w-[85%] max-w-xs bg-card border-l border-border shadow-2xl p-6 flex flex-col justify-between z-10 overflow-y-auto"
            style={{ willChange: 'transform' }}
          >
            <div>
              {/* Header with Brand Logo & Close Button */}
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <div className="flex items-center">
                  {/* White mode (light theme) logo */}
                  <Image
                    src="/logowhitemode.png"
                    alt="H4Code"
                    width={120}
                    height={34}
                    className="h-7 w-auto object-contain dark:hidden"
                    priority
                  />
                  {/* Dark mode logo */}
                  <Image
                    src="/logodarkmode.png"
                    alt="H4Code"
                    width={120}
                    height={34}
                    className="h-7 w-auto object-contain hidden dark:block"
                    priority
                  />
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-surface transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with Active Primary Highlight */}
              <nav className="mt-8 flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-4 py-3 text-base font-semibold transition-colors ${
                        isActive
                          ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                          : 'text-muted-foreground hover:text-foreground hover:bg-surface'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowIcon className={`w-4 h-4 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground/40'}`} />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Footer with Controls & Primary Contact CTA */}
            <div className="pt-6 border-t border-border space-y-4">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-mono uppercase text-muted-foreground">Theme & Lang</span>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <LanguageSwitcher />
                </div>
              </div>
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center shadow-md font-bold"
                onClick={onClose}
              >
                {t('letsTalk')}
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

