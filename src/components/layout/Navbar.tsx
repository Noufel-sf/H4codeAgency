'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from '../theme/ThemeToggle';
import { cn } from '@/lib/utils';

export function Navbar() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const router = useRouter();
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'work', 'about', 'contact'];
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
    { id: 'work', label: t('work') },
    { id: 'about', label: t('about') },
    { id: 'contact', label: t('contact') }
  ];

  const languages = [
    { code: 'ar', label: 'ع' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' }
  ] as const;

  const handleLanguageSwitch = (code: 'ar' | 'en' | 'fr') => {
    if (code !== locale) {
      router.replace(pathname, { locale: code });
    }
  };

  return (
    <>
      <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between sm:justify-center gap-2 sm:gap-6 px-4 sm:px-6 py-2 sm:py-2.5 glass-panel transition-all duration-300">
          
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 font-bold text-sm sm:text-base tracking-tight text-foreground hover:opacity-85 transition-opacity"
            aria-label="H4Code"
          >
            <span className="font-extrabold text-base sm:text-lg">H4Code</span>
          </a>

          {/* Desktop Links Divider */}
          <div className="hidden lg:block w-[1px] h-4 bg-border" />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    'transition-colors duration-200',
                    isActive
                      ? 'text-primary font-bold'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Inline Language Switcher */}
          <div className="flex items-center gap-1.5 text-xs font-semibold ps-2 border-s border-border">
            {languages.map((lang, idx) => {
              const isSelected = lang.code === locale;
              return (
                <React.Fragment key={lang.code}>
                  <button
                    type="button"
                    onClick={() => handleLanguageSwitch(lang.code)}
                    className={cn(
                      'transition-colors cursor-pointer px-1 py-0.5  text-xs',
                      isSelected
                        ? 'text-primary font-bold'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {lang.label}
                  </button>
                  {idx < languages.length - 1 && (
                    <span className="text-border text-[10px]">/</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Theme Toggle (Sun / Moon) */}
          <div className="ps-1 sm:ps-2 border-s border-border flex items-center">
            <ThemeToggle className="w-8 h-8" />
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-1.5 text-foreground hover:bg-surface transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
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
