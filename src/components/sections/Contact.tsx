'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedSection } from '../ui/AnimatedSection';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { Mail, MessageCircle, Clock, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Contact() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        throw new Error('Submission failed');
      }

      setIsSubmitted(true);
      reset();
      toast.success(t('form.successTitle'), {
        description: t('form.successDesc')
      });
    } catch {
      toast.error(t('form.errorTitle'), {
        description: t('form.errorDesc')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: 'web', label: t('form.servicesOptions.web') },
    { value: 'ecommerce', label: t('form.servicesOptions.ecommerce') },
    { value: 'webapp', label: t('form.servicesOptions.webapp') },
    { value: 'uiux', label: t('form.servicesOptions.uiux') },
    { value: 'mobile', label: t('form.servicesOptions.mobile') },
    { value: 'ai', label: t('form.servicesOptions.ai') }
  ];

  const budgets = [
    { value: 'tier1', label: t('form.budgetOptions.tier1') },
    { value: 'tier2', label: t('form.budgetOptions.tier2') },
    { value: 'tier3', label: t('form.budgetOptions.tier3') },
    { value: 'tier4', label: t('form.budgetOptions.tier4') }
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-background border-t border-border transition-colors duration-200 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 end-10 w-96 h-96 bg-primary/10 blur-[150px] pointer-events-none" />

      <Container>
        <AnimatedSection direction="up">
          <SectionHeading
            badge={t('badge')}
            title={t('headline')}
            description={t('description')}
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 mt-12 items-start">
          {/* Direct channels / Studio advisory */}
          <div className="lg:col-span-5 space-y-8">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {t('directContact.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('directContact.responseGuarantee')}
                </p>
              </div>
            </AnimatedSection>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <AnimatedSection direction="up" delay={0.2}>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all shadow-xs group"
                >
                  <div className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{t('directContact.emailTitle')}</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.25}>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-emerald-500/40 transition-all shadow-xs group"
                >
                  <div className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{t('directContact.whatsappTitle')}</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {t('directContact.whatsappValue')}
                    </div>
                  </div>
                </a>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.3}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{t('directContact.availabilityTitle')}</div>
                    <div className="text-sm font-medium text-foreground">
                      {t('directContact.availabilityValue')}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="rounded-3xl bg-card border border-border p-6 sm:p-10 shadow-xl relative">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {t('form.successTitle')}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      {t('form.successDesc')}
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-surface hover:bg-surface-hover border border-border text-foreground transition-all cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-foreground">
                          {t('form.nameLabel')} <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={t('form.namePlaceholder')}
                          {...register('name')}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-500 dark:text-rose-400">
                            {t(`form.errors.${errors.name.message}`)}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-foreground">
                          {t('form.emailLabel')} <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder={t('form.emailPlaceholder')}
                          {...register('email')}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-500 dark:text-rose-400">
                            {t(`form.errors.${errors.email.message}`)}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company & Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-foreground">
                          {t('form.companyLabel')}
                        </label>
                        <input
                          type="text"
                          placeholder={t('form.companyPlaceholder')}
                          {...register('company')}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-foreground">
                          {t('form.serviceLabel')} <span className="text-primary">*</span>
                        </label>
                        <select
                          {...register('service')}
                          defaultValue=""
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer"
                        >
                          <option value="" disabled className="bg-card text-muted-foreground">
                            {t('form.servicePlaceholder')}
                          </option>
                          {services.map((s) => (
                            <option key={s.value} value={s.value} className="bg-card text-foreground">
                              {s.label}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="text-xs text-rose-500 dark:text-rose-400">
                            {t(`form.errors.${errors.service.message}`)}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-foreground">
                        {t('form.budgetLabel')}
                      </label>
                      <select
                        {...register('budget')}
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer"
                      >
                        <option value="" disabled className="bg-card text-muted-foreground">
                          {t('form.budgetPlaceholder')}
                        </option>
                        {budgets.map((b) => (
                          <option key={b.value} value={b.value} className="bg-card text-foreground">
                            {b.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Details */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-foreground">
                        {t('form.messageLabel')} <span className="text-primary">*</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder={t('form.messagePlaceholder')}
                        {...register('message')}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                      />
                      {errors.message && (
                        <p className="text-xs text-rose-500 dark:text-rose-400">
                          {t(`form.errors.${errors.message.message}`)}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>{t('form.submitting')}</span>
                      ) : (
                        <>
                          <span>{t('form.submit')}</span>
                          <Send className="w-4 h-4 rtl:rotate-180" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}

