'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '../ui/Container';
import { ArrowUp, MessageCircle, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tServices = useTranslations('services.items');
  const locale = useLocale();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: tNav('home') },
    { href: '#services', label: tNav('services') },
    { href: '#about', label: tNav('about') },
    { href: '#work', label: tNav('work') },
    { href: '#process', label: tNav('process') },
    { href: '#faq', label: tNav('faq') },
    { href: '#contact', label: tNav('contact') }
  ];

  const serviceLinks = [
    { label: tServices('webDev.title'), href: '#services' },
    { label: tServices('ecommerce.title'), href: '#services' },
    { label: tServices('webApps.title'), href: '#services' },
    { label: tServices('uiux.title'), href: '#services' },
    { label: tServices('mobile.title'), href: '#services' },
    { label: tServices('aiAutomation.title'), href: '#services' }
  ];

  return (
    <footer className="relative bg-transparent border-t border-border pt-16 pb-12 overflow-hidden transition-colors duration-200">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-24 bg-primary/10 blur-[90px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-14">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-flex items-center hover:opacity-85 transition-opacity">
              {/* White mode (light theme) logo */}
              <Image
                src="/logowhitemode.png"
                alt="H4Code"
                width={150}
                height={42}
                className="h-8 sm:h-9 w-auto object-contain dark:hidden"
              />
              {/* Dark mode logo */}
              <Image
                src="/logodarkmode.png"
                alt="H4Code"
                width={150}
                height={42}
                className="h-8 sm:h-9 w-auto object-contain hidden dark:block"
              />
            </a>

            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              {t('tagline')}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 bg-card hover:bg-surface border border-border hover:border-primary/40 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-card hover:bg-surface border border-border hover:border-primary/40 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-card hover:bg-surface border border-border hover:border-emerald-500/40 flex items-center justify-center text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Email"
                className="w-9 h-9 bg-card hover:bg-surface border border-border hover:border-primary/40 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all shadow-xs"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              {t('linksTitle')}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              {t('servicesTitle')}
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Office & Back to Top */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              {t('connectTitle')}
            </h4>
            <div className="space-y-3 text-xs text-muted-foreground">
              <p>contact@h4code.agency</p>
              <p>Mon - Fri, 9AM - 6PM GMT+1</p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-card hover:bg-surface border border-border text-xs font-medium text-foreground transition-all cursor-pointer group shadow-xs"
                >
                  <span>{t('backToTop')}</span>
                  <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © 2026 {siteConfig.legalName}. {t('rights')}
          </p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-foreground transition-colors">
              {t('privacy')}
            </a>
            <a href="#home" className="hover:text-foreground transition-colors">
              {t('terms')}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
