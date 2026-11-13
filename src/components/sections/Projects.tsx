'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── 1. Desktop iMac / Studio Display Wireframe Mockup ────────────────── */
function DesktopDeviceWireframe({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[500px] flex flex-col items-center select-none py-4 transition-transform duration-500 group-hover:scale-[1.02]">
      {/* Display Screen */}
      <div className="w-full bg-[#111318] p-2.5 sm:p-3 shadow-2xl border border-black/40">
        {/* Screen Bezel & Browser Header */}
        <div className="w-full bg-white flex flex-col overflow-hidden">
          {/* Browser Header Bar */}
          <div className="bg-[#f5f6f8] px-3 py-1.5 flex items-center justify-between border-b border-neutral-200">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#ff5f56]" />
              <span className="w-2 h-2 bg-[#ffbd2e]" />
              <span className="w-2 h-2 bg-[#27c93f]" />
            </div>
            <div className="w-32 h-2.5 bg-neutral-200" />
            <div className="w-4 h-2 bg-neutral-300" />
          </div>
          {/* Screen Content Canvas */}
          <div className="w-full aspect-[16/10] bg-white overflow-hidden p-3 sm:p-4">
            {children}
          </div>
        </div>
        {/* Chin with subtle logo mark */}
        <div className="w-full h-4 sm:h-5 bg-[#181a20] flex items-center justify-center">
          <div className="w-2 h-2 bg-neutral-500/60" />
        </div>
      </div>
      {/* Stand Arm */}
      <div className="w-16 h-8 bg-gradient-to-b from-[#2a2d36] to-[#1e2027] border-x border-black/20" />
      {/* Stand Base */}
      <div className="w-36 h-2 bg-[#252830] shadow-md border-t border-white/10" />
    </div>
  );
}

/* ── 2. Laptop / MacBook Device Wireframe Mockup ───────────────────────── */
function LaptopDeviceWireframe({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[500px] flex flex-col items-center select-none py-4 transition-transform duration-500 group-hover:scale-[1.02]">
      {/* Laptop Screen Top */}
      <div className="w-[90%] bg-[#111318] p-2 sm:p-2.5 shadow-2xl border border-black/40">
        <div className="w-full bg-white flex flex-col overflow-hidden">
          {/* Browser Header Bar */}
          <div className="bg-[#f5f6f8] px-3 py-1.5 flex items-center justify-between border-b border-neutral-200">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#ff5f56]" />
              <span className="w-2 h-2 bg-[#ffbd2e]" />
              <span className="w-2 h-2 bg-[#27c93f]" />
            </div>
            <div className="w-32 h-2.5 bg-neutral-200" />
            <div className="w-4 h-2 bg-neutral-300" />
          </div>
          {/* Screen Content Canvas */}
          <div className="w-full aspect-[16/10] bg-white overflow-hidden p-3 sm:p-4">
            {children}
          </div>
        </div>
      </div>
      {/* Laptop Keyboard Base */}
      <div className="w-full h-3 sm:h-3.5 bg-gradient-to-b from-[#252830] to-[#181a20] border-t border-white/20 shadow-xl flex justify-center items-start">
        <div className="w-14 h-1 bg-[#111318]" />
      </div>
      {/* Rubber Feet Pad */}
      <div className="w-[96%] h-1 bg-[#0c0d10]" />
    </div>
  );
}

/* ── Slide Contents for Slider 1 (Web & E-Commerce Solutions) ─────────── */
const SLIDER_1_SLIDES = [
  {
    title: 'Bloomey, houseplants store',
    category: 'Website & E-Commerce development',
    mockup: (
      <div className="h-full flex flex-col justify-between font-sans text-neutral-900">
        <div className="flex justify-between items-center text-[10px] pb-2 border-b border-neutral-100 font-semibold text-neutral-700">
          <span className="font-bold tracking-tight text-neutral-900">🌿 Bloomey</span>
          <div className="flex gap-3 text-[9px] text-neutral-500">
            <span>Shop</span>
            <span>Plant Care</span>
            <span>About</span>
          </div>
          <span className="text-[9px] bg-neutral-100 px-1.5 py-0.5">Cart (2)</span>
        </div>
        <div className="grid grid-cols-12 gap-3 items-center my-auto">
          <div className="col-span-7 space-y-1.5">
            <h4 className="text-sm sm:text-base md:text-lg font-black leading-tight tracking-tight text-neutral-900">
              Best house plants varieties.
            </h4>
            <p className="text-[9px] sm:text-[10px] text-neutral-500 leading-tight">
              Curated rare indoor greens engineered to thrive in modern spaces.
            </p>
            <div className="pt-1">
              <span className="inline-block bg-[#0b0b0d] text-white text-[9px] font-bold px-2.5 py-1">
                Shop now
              </span>
            </div>
          </div>
          <div className="col-span-5 aspect-square bg-[#f0f4ee] border border-[#d6e4d2] p-2 flex flex-col justify-between">
            <div className="w-4 h-4 bg-[#3461fd]/15 text-[8px] flex items-center justify-center font-bold text-[#3461fd]">
              ★
            </div>
            <div className="space-y-1">
              <div className="w-full h-1.5 bg-[#4058a8] font-bold" />
              <div className="w-2/3 h-1 bg-neutral-300" />
            </div>
            <span className="text-[10px] font-bold text-neutral-800">$48.00</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Aura Maison, Luxury Flagship',
    category: 'Headless Next.js 16 Storefront',
    mockup: (
      <div className="h-full flex flex-col justify-between font-sans text-neutral-900">
        <div className="flex justify-between items-center text-[10px] pb-2 border-b border-neutral-100 font-semibold">
          <span className="font-serif tracking-widest text-xs uppercase">AURA MAISON</span>
          <div className="flex gap-3 text-[9px] text-neutral-500">
            <span>COLLECTION 2026</span>
            <span>EUR (€)</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 my-auto">
          <div className="bg-neutral-50 border border-neutral-200 p-2 space-y-2">
            <div className="aspect-[4/3] bg-neutral-200 flex items-center justify-center text-[10px] text-neutral-400">
              [Watch Preview]
            </div>
            <div className="text-[10px] font-bold">L&apos;Ombre Chrono</div>
            <div className="text-[9px] text-neutral-500">€3,450 • In Stock</div>
          </div>
          <div className="bg-neutral-50 border border-neutral-200 p-2 space-y-2">
            <div className="aspect-[4/3] bg-neutral-200 flex items-center justify-center text-[10px] text-neutral-400">
              [Leather Bag]
            </div>
            <div className="text-[10px] font-bold">Soie Noire Travel</div>
            <div className="text-[9px] text-neutral-500">€1,890 • Limited</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Nexus Enterprise, Cloud Platform',
    category: 'Full-Stack Web Architecture',
    mockup: (
      <div className="h-full flex flex-col justify-between font-mono text-neutral-900">
        <div className="flex justify-between items-center text-[10px] pb-1.5 border-b border-neutral-200 font-sans font-bold">
          <span className="text-[#3461fd]">NEXUS CLOUD</span>
          <span className="text-emerald-600 text-[9px]">99.99% Uptime</span>
        </div>
        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="bg-neutral-100 border border-neutral-200 p-1.5 text-center">
            <div className="text-[8px] text-neutral-500">Throughput</div>
            <div className="text-[11px] font-bold text-emerald-600">1.4M req/s</div>
          </div>
          <div className="bg-neutral-100 border border-neutral-200 p-1.5 text-center">
            <div className="text-[8px] text-neutral-500">Latency</div>
            <div className="text-[11px] font-bold text-[#3461fd]">14ms avg</div>
          </div>
          <div className="bg-neutral-100 border border-neutral-200 p-1.5 text-center">
            <div className="text-[8px] text-neutral-500">Active Pods</div>
            <div className="text-[11px] font-bold">48 Nodes</div>
          </div>
        </div>
        <div className="h-10 bg-neutral-100 border border-neutral-200 flex items-end gap-1 p-1">
          {[40, 65, 30, 80, 55, 90, 70, 95, 85, 100, 75, 90].map((h, i) => (
            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#3461fd]" />
          ))}
        </div>
      </div>
    ),
  },
];

/* ── Slide Contents for Slider 2 (SaaS & Mobile Applications) ─────────── */
const SLIDER_2_SLIDES = [
  {
    title: 'We-famous, Influencers website',
    category: 'Website & SaaS app development',
    mockup: (
      <div className="h-full flex flex-col justify-between font-sans text-neutral-900">
        <div className="flex justify-between items-center text-[10px] pb-2 border-b border-neutral-100">
          <span className="font-extrabold text-neutral-900 tracking-tight">✦ We-famous</span>
          <div className="flex gap-2 text-[9px] text-neutral-500">
            <span>Explore</span>
            <span>Campaigns</span>
            <span>Join us</span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3 items-center my-auto">
          <div className="col-span-7 space-y-1.5">
            <h4 className="text-xs sm:text-sm font-black leading-tight tracking-tight uppercase">
              Discover and work with influencers in seconds
            </h4>
            <div className="p-1.5 bg-neutral-100 border border-neutral-200 flex items-center justify-between text-[9px] text-neutral-600">
              <span>Fashion • Instagram</span>
              <span className="bg-black text-white px-1.5 py-0.5 text-[8px] font-bold">Search</span>
            </div>
          </div>
          <div className="col-span-5 bg-neutral-100 border border-neutral-200 p-2 flex flex-col justify-between">
            <div className="w-5 h-5 bg-amber-400/20 text-amber-700 text-[9px] font-bold flex items-center justify-center">
              ★
            </div>
            <div className="space-y-0.5 pt-2">
              <div className="text-[9px] font-bold">James C., Model</div>
              <div className="text-[8px] text-neutral-500">Fashion & Streetwear</div>
            </div>
            <div className="w-full bg-black text-white text-center py-0.5 text-[8px] font-bold mt-1">
              View Profile
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Kinetix, AI Workflow Studio',
    category: 'Enterprise Automation Engine',
    mockup: (
      <div className="h-full flex flex-col justify-between font-mono text-neutral-900">
        <div className="flex justify-between items-center text-[10px] pb-1.5 border-b border-neutral-200 font-sans font-bold">
          <span className="text-[#3461fd]">KINETIX AGENT_v2</span>
          <span className="text-emerald-600 text-[9px]">Pipeline Active</span>
        </div>
        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="bg-neutral-100 border border-neutral-200 p-2 text-center space-y-1">
            <div className="text-[8px] text-neutral-500">Input</div>
            <div className="text-[10px] font-bold">Webhook API</div>
          </div>
          <div className="bg-[#3461fd]/15 border border-[#3461fd]/40 p-2 text-center space-y-1">
            <div className="text-[8px] text-[#3461fd]">LLM Router</div>
            <div className="text-[10px] font-bold text-[#3461fd]">Claude 3.7</div>
          </div>
          <div className="bg-neutral-100 border border-neutral-200 p-2 text-center space-y-1">
            <div className="text-[8px] text-neutral-500">Action</div>
            <div className="text-[10px] font-bold text-emerald-600">DB Sync</div>
          </div>
        </div>
        <div className="text-[9px] bg-neutral-100 p-1 text-neutral-600 border border-neutral-200">
          Status: 200 OK • 1,420 events dispatched in 18ms
        </div>
      </div>
    ),
  },
  {
    title: 'Synapse, HealthTech Ecosystem',
    category: 'Cross-Platform iOS & Android App',
    mockup: (
      <div className="h-full flex flex-col justify-between font-sans text-neutral-900">
        <div className="flex justify-between items-center text-[10px] pb-1.5 border-b border-neutral-200">
          <span className="font-bold text-[#3461fd]">SYNAPSE HEALTH</span>
          <span className="text-emerald-600 text-[9px] bg-emerald-100 px-1.5 py-0.5">Encrypted</span>
        </div>
        <div className="bg-neutral-50 border border-neutral-200 p-2 space-y-1.5 my-auto">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold">Dr. Sarah Al-Mansour</div>
            <span className="text-[9px] text-[#3461fd]">Cardiology</span>
          </div>
          <div className="text-[9px] text-neutral-500">Next Consultation: Today at 14:30 GMT</div>
          <div className="w-full bg-emerald-600 text-white text-center py-1 text-[9px] font-bold">
            Join Secure Video Room
          </div>
        </div>
      </div>
    ),
  },
];

export function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [slide1Index, setSlide1Index] = useState(0);
  const [slide2Index, setSlide2Index] = useState(0);

  const nextSlide1 = () => {
    setSlide1Index((prev) => (prev + 1) % SLIDER_1_SLIDES.length);
  };

  const nextSlide2 = () => {
    setSlide2Index((prev) => (prev + 1) % SLIDER_2_SLIDES.length);
  };

  const activeSlide1 = SLIDER_1_SLIDES[slide1Index];
  const activeSlide2 = SLIDER_2_SLIDES[slide2Index];

  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 bg-transparent text-foreground border-t border-border transition-colors duration-200 overflow-hidden"
    >
      <Container>
        {/* ── Section Header (2 Columns matching reference image) ── */}
        <AnimatedSection direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-border/70">
            {/* Left Column: Badge & Big Headline */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4 block font-mono">
                {t('badge')}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.14] text-foreground max-w-xl">
                {t('headline')}
              </h2>
            </div>

            {/* Right Column: Subtitle Description & "See all works" Action */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-1 lg:pt-8">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                {t('description')}
              </p>
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface-hover text-foreground border border-border hover:border-primary/50 text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
                >
                  <span>{t('seeAll')}</span>
                  <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── The Two Sliders Side-by-Side ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 sm:mt-16">
          
          {/* ═══════════ SLIDER 1: Web & E-Commerce Solutions ═══════════ */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="group flex flex-col justify-between bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-sm">
              {/* Visual Card Area with Soft Pastel/Periwinkle Canvas */}
              <div className="relative w-full aspect-[4/3] bg-[#dce3f1] dark:bg-[#141b2b] p-6 sm:p-10 flex items-center justify-center overflow-hidden border-b border-border">
                {/* Slide Content with AnimatePresence */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide1Index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex items-center justify-center"
                  >
                    <DesktopDeviceWireframe>
                      {activeSlide1.mockup}
                    </DesktopDeviceWireframe>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Card Footer: Title, Category & Next Slide Arrow Button */}
              <div className="p-6 sm:p-8 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {activeSlide1.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {activeSlide1.category}
                  </p>
                </div>

                {/* Arrow Action Button (Advances Slider) */}
                <button
                  type="button"
                  onClick={nextSlide1}
                  aria-label="Next solution slide"
                  className="w-11 h-11 bg-surface hover:bg-foreground hover:text-background text-foreground border border-border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs shrink-0 group/btn"
                >
                  <ArrowIcon className="w-5 h-5 transition-transform group-hover/btn:translate-x-0.5 rtl:group-hover/btn:-translate-x-0.5" />
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* ═══════════ SLIDER 2: SaaS & Mobile Applications ═══════════ */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="group flex flex-col justify-between bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-sm">
              {/* Visual Card Area with Soft Warm Gray Canvas */}
              <div className="relative w-full aspect-[4/3] bg-[#eaebee] dark:bg-[#181a20] p-6 sm:p-10 flex items-center justify-center overflow-hidden border-b border-border">
                {/* Slide Content with AnimatePresence */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide2Index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex items-center justify-center"
                  >
                    <LaptopDeviceWireframe>
                      {activeSlide2.mockup}
                    </LaptopDeviceWireframe>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Card Footer: Title, Category & Next Slide Arrow Button */}
              <div className="p-6 sm:p-8 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {activeSlide2.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {activeSlide2.category}
                  </p>
                </div>

                {/* Arrow Action Button (Advances Slider) */}
                <button
                  type="button"
                  onClick={nextSlide2}
                  aria-label="Next solution slide"
                  className="w-11 h-11 bg-surface hover:bg-foreground hover:text-background text-foreground border border-border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs shrink-0 group/btn"
                >
                  <ArrowIcon className="w-5 h-5 transition-transform group-hover/btn:translate-x-0.5 rtl:group-hover/btn:-translate-x-0.5" />
                </button>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </Container>
    </section>
  );
}
