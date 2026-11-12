'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Menu } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from '../theme/ThemeToggle';
import { cn } from '@/lib/utils';

export function Navbar() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'services', 'about', 'work', 'process', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'services', label: t('services') },
    { id: 'about', label: t('about') },
    { id: 'work', label: t('work') },
    { id: 'process', label: t('process') },
    { id: 'faq', label: t('faq') },
    { id: 'contact', label: t('contact') }
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-40 transition-all duration-300',
          isScrolled
            ? 'py-3.5 bg-white/85 dark:bg-[#090B10]/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-lg dark:shadow-black/30'
            : 'py-6 bg-transparent'
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-2.5 focus:outline-none"
              aria-label="H4Code Agency"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#315BDB] to-[#121824] border border-white/15 shadow-[0_0_15px_rgba(49,91,219,0.3)] transition-transform duration-300 group-hover:scale-105">
                <span className="font-black text-xs text-white tracking-tighter">H4</span>
              </div>
              <span className="font-extrabold text-lg tracking-wider text-slate-900 dark:text-[#F5F7FC] transition-colors group-hover:text-blue-600 dark:group-hover:text-white">
                H4<span className="text-[#315BDB] dark:text-[#4776F5]">CODE</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-[#121824]/60 border border-slate-200 dark:border-white/10 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={cn(
                      'relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 select-none',
                      isActive
                        ? 'text-blue-600 dark:text-white bg-white dark:bg-white/10 font-semibold shadow-sm dark:shadow-inner'
                        : 'text-slate-600 dark:text-[#929BAA] hover:text-slate-900 dark:hover:text-[#F5F7FC] hover:bg-slate-200/50 dark:hover:bg-white/[0.04]'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 inset-x-3 h-[2px] bg-[#315BDB] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right CTAs, Theme Toggle & Language Switcher */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <ThemeToggle />
              <LanguageSwitcher className="hidden sm:inline-block" />

              <Button
                href="#contact"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
              >
                {t('letsTalk')}
              </Button>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-[#929BAA] hover:text-slate-900 dark:hover:text-[#F5F7FC] hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
                aria-label="Open mobile navigation"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isRtl={isRtl}
      />
    </>
  );
}

