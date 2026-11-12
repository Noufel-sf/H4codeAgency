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
    <section id="contact" className="relative py-24 sm:py-32 bg-slate-50/70 dark:bg-[#080B11] border-t border-slate-200 dark:border-white/[0.08] transition-colors duration-200 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 end-10 w-96 h-96 bg-[#315BDB]/10 blur-[150px] pointer-events-none" />

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
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {t('directContact.title')}
                </h3>
                <p className="text-sm text-slate-600 dark:text-[#929BAA] leading-relaxed">
                  {t('directContact.responseGuarantee')}
                </p>
              </div>
            </AnimatedSection>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <AnimatedSection direction="up" delay={0.2}>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#10141C] border border-slate-200 dark:border-white/[0.08] hover:border-blue-400 dark:hover:border-[#4776F5]/40 transition-all shadow-xs group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-white/[0.04] border border-blue-100 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-[#4776F5] group-hover:bg-blue-100 dark:group-hover:bg-[#315BDB]/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-[#929BAA]">{t('directContact.emailTitle')}</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#4776F5] transition-colors">
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
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#10141C] border border-slate-200 dark:border-white/[0.08] hover:border-emerald-400 dark:hover:border-[#4776F5]/40 transition-all shadow-xs group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-white/[0.04] border border-emerald-100 dark:border-white/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-[#929BAA]">{t('directContact.whatsappTitle')}</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {t('directContact.whatsappValue')}
                    </div>
                  </div>
                </a>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.3}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#10141C] border border-slate-200 dark:border-white/[0.08] shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-white/[0.04] border border-amber-100 dark:border-white/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-[#929BAA]">{t('directContact.availabilityTitle')}</div>
                    <div className="text-sm font-medium text-slate-900 dark:text-white">
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
              <div className="rounded-3xl bg-white dark:bg-[#10141C] border border-slate-200 dark:border-white/[0.1] p-6 sm:p-10 shadow-xl dark:shadow-2xl relative">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {t('form.successTitle')}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-[#929BAA] max-w-md mx-auto leading-relaxed">
                      {t('form.successDesc')}
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white transition-all cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-800 dark:text-[#F5F7FC]">
                          {t('form.nameLabel')} <span className="text-blue-600 dark:text-[#4776F5]">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={t('form.namePlaceholder')}
                          {...register('name')}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#090B10] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#5E6778] focus:outline-none focus:border-[#315BDB] focus:ring-1 focus:ring-[#315BDB] transition-all"
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-500 dark:text-rose-400">
                            {t(`form.errors.${errors.name.message}`)}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-800 dark:text-[#F5F7FC]">
                          {t('form.emailLabel')} <span className="text-blue-600 dark:text-[#4776F5]">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder={t('form.emailPlaceholder')}
                          {...register('email')}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#090B10] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#5E6778] focus:outline-none focus:border-[#315BDB] focus:ring-1 focus:ring-[#315BDB] transition-all"
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
                        <label className="block text-xs font-semibold text-slate-800 dark:text-[#F5F7FC]">
                          {t('form.companyLabel')}
                        </label>
                        <input
                          type="text"
                          placeholder={t('form.companyPlaceholder')}
                          {...register('company')}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#090B10] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#5E6778] focus:outline-none focus:border-[#315BDB] focus:ring-1 focus:ring-[#315BDB] transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-800 dark:text-[#F5F7FC]">
                          {t('form.serviceLabel')} <span className="text-blue-600 dark:text-[#4776F5]">*</span>
                        </label>
                        <select
                          {...register('service')}
                          defaultValue=""
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#090B10] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#315BDB] focus:ring-1 focus:ring-[#315BDB] transition-all cursor-pointer"
                        >
                          <option value="" disabled className="bg-white dark:bg-[#10141C] text-slate-400 dark:text-[#5E6778]">
                            {t('form.servicePlaceholder')}
                          </option>
                          {services.map((s) => (
                            <option key={s.value} value={s.value} className="bg-white dark:bg-[#10141C] text-slate-900 dark:text-white">
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
                      <label className="block text-xs font-semibold text-slate-800 dark:text-[#F5F7FC]">
                        {t('form.budgetLabel')}
                      </label>
                      <select
                        {...register('budget')}
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#090B10] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#315BDB] focus:ring-1 focus:ring-[#315BDB] transition-all cursor-pointer"
                      >
                        <option value="" disabled className="bg-white dark:bg-[#10141C] text-slate-400 dark:text-[#5E6778]">
                          {t('form.budgetPlaceholder')}
                        </option>
                        {budgets.map((b) => (
                          <option key={b.value} value={b.value} className="bg-white dark:bg-[#10141C] text-slate-900 dark:text-white">
                            {b.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Details */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-slate-800 dark:text-[#F5F7FC]">
                        {t('form.messageLabel')} <span className="text-blue-600 dark:text-[#4776F5]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder={t('form.messagePlaceholder')}
                        {...register('message')}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#090B10] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#5E6778] focus:outline-none focus:border-[#315BDB] focus:ring-1 focus:ring-[#315BDB] transition-all resize-none"
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
                      className="w-full py-4 px-6 rounded-full bg-[#315BDB] hover:bg-[#4776F5] text-white font-bold text-sm shadow-[0_0_24px_rgba(49,91,219,0.3)] hover:shadow-[0_0_36px_rgba(71,118,245,0.5)] border border-[#4776F5]/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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

