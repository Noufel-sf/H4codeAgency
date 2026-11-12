'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';
import { AnimatedSection } from '../ui/AnimatedSection';
import {
  Globe,
  ShoppingBag,
  Layers,
  Palette,
  Smartphone,
  Cpu
} from 'lucide-react';

export function Services() {
  const t = useTranslations('services');

  const services = [
    {
      key: 'webDev',
      icon: <Globe className="w-6 h-6" />,
      featured: false
    },
    {
      key: 'ecommerce',
      icon: <ShoppingBag className="w-6 h-6" />,
      featured: false
    },
    {
      key: 'webApps',
      icon: <Layers className="w-6 h-6" />,
      featured: true
    },
    {
      key: 'uiux',
      icon: <Palette className="w-6 h-6" />,
      featured: false
    },
    {
      key: 'mobile',
      icon: <Smartphone className="w-6 h-6" />,
      featured: false
    },
    {
      key: 'aiAutomation',
      icon: <Cpu className="w-6 h-6" />,
      featured: true
    }
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-background border-t border-border transition-colors duration-200">
      {/* Subtle ambient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none" />

      <Container>
        <AnimatedSection direction="up">
          <SectionHeading
            badge={t('badge')}
            title={t('headline')}
            description={t('description')}
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const title = t(`items.${service.key}.title`);
            const description = t(`items.${service.key}.description`);
            const tags = [
              t(`items.${service.key}.tags.0`),
              t(`items.${service.key}.tags.1`),
              t(`items.${service.key}.tags.2`),
              t(`items.${service.key}.tags.3`)
            ];

            return (
              <AnimatedSection
                key={service.key}
                direction="up"
                delay={0.1 * index}
              >
                <ServiceCard
                  icon={service.icon}
                  title={title}
                  description={description}
                  tags={tags}
                  featured={service.featured}
                />
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

