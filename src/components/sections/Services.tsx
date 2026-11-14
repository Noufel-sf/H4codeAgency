'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';

/* ── 1. Website Development Wireframe (Live Screen Recording / Motion Loop) ── */
function WebDevWireframe() {
  return (
    <div className="w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] bg-white shadow-2xl overflow-hidden select-none border border-white/20 transition-transform duration-500 group-hover:scale-[1.02] relative">
      {/* Browser Top Bar with Live Video/FPS Indicator */}
      <div className="bg-white px-4 py-2.5 sm:py-3 flex items-center justify-between border-b border-neutral-100 z-20 relative">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 bg-[#27c93f]" />
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-neutral-100 text-[9px] font-mono text-neutral-600">
          <span className="w-1.5 h-1.5 bg-[#27c93f] animate-pulse" />
          <span>h4code.agency/live</span>
        </div>
        <div className="text-[8px] font-mono font-bold text-neutral-400">
          60 FPS
        </div>
      </div>

      {/* Browser Viewport with Auto-Scroll Motion Loop */}
      <div className="h-[230px] sm:h-[260px] overflow-hidden relative bg-[#8ba6ff]">
        {/* Shimmer Light Reflection Sweep (Video Gloss Effect) */}
        <motion.div
          animate={{ x: ['-100%', '250%'] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none z-20"
        />

        {/* Simulated Moving Mouse Cursor with Click Interaction */}
        <motion.div
          animate={{
            x: [240, 75, 75, 210, 240],
            y: [160, 100, 100, 50, 160],
            scale: [1, 1, 0.88, 1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.35, 0.45, 0.8, 1],
          }}
          className="absolute pointer-events-none z-30"
        >
          <svg className="w-4 h-4 text-white drop-shadow-md fill-[#061436]" viewBox="0 0 24 24">
            <path d="M3 3l7 18 3-7 7-3L3 3z" />
          </svg>
          <span className="text-[7.5px] font-mono bg-[#3461fd] text-white px-1.5 py-0.5 shadow-sm ml-2.5 inline-block">
            User Click
          </span>
        </motion.div>

        {/* Continuous Page Scroll Motion Container */}
        <motion.div
          animate={{ y: [0, -75, -75, 0, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.42, 0.58, 0.92, 1],
          }}
          className="p-5 sm:p-6 flex flex-col gap-6"
        >
          {/* ── Section 1: Hero Section ── */}
          <div className="flex flex-col gap-4">
            {/* Top Navbar Skeleton */}
            <div className="flex items-center justify-between pb-1">
              <div className="w-10 h-3 bg-white/90" />
              <div className="flex gap-2">
                <div className="w-7 h-2 bg-white/60" />
                <div className="w-7 h-2 bg-white/60" />
                <div className="w-7 h-2 bg-white/60" />
              </div>
              <div className="w-8 h-3 bg-white" />
            </div>

            {/* Hero Section Layout */}
            <div className="grid grid-cols-12 gap-4 items-center pt-2">
              {/* Left Text Column */}
              <div className="col-span-7 space-y-2.5">
                <div className="w-full h-4 bg-[#3461fd]" />
                <div className="w-4/5 h-4 bg-[#3461fd]" />
                <div className="w-3/4 h-2 bg-white/70 mt-2" />
                <div className="w-1/2 h-2 bg-white/70" />
                
                {/* Interactive Action Button with Click Reaction */}
                <div className="pt-2">
                  <motion.div
                    animate={{
                      scale: [1, 1, 0.92, 1.06, 1],
                      backgroundColor: ['#ffffff', '#ffffff', '#3461fd', '#ffffff', '#ffffff'],
                      color: ['#061436', '#061436', '#ffffff', '#061436', '#061436'],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      times: [0, 0.35, 0.45, 0.55, 1],
                    }}
                    className="w-16 h-4 bg-white shadow-sm flex items-center justify-center text-[7.5px] font-mono font-bold"
                  >
                    <span>EXPLORE</span>
                  </motion.div>
                </div>
              </div>

              {/* Right White Card / Image Block with Subtle Floating Effect */}
              <div className="col-span-5">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="aspect-square w-full bg-white shadow-md flex items-center justify-center p-3 relative overflow-hidden"
                >
                  <div className="w-full h-full bg-[#dde2ff] relative">
                    {/* Crossed diagonals to give architectural wireframe feel */}
                    <svg className="w-full h-full stroke-[#8ba6ff] stroke-[1]" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <line x1="0" y1="0" x2="100" y2="100" />
                      <line x1="100" y1="0" x2="0" y2="100" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Feature Pill Row */}
            <div className="flex gap-2 pt-2">
              <div className="w-14 h-2.5 bg-white/60" />
              <div className="w-14 h-2.5 bg-white/60" />
            </div>
          </div>

          {/* ── Section 2: Features & Metrics Grid (Revealed during scroll) ── */}
          <div className="pt-3 border-t border-white/20 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="w-24 h-3 bg-white/90" />
              <div className="w-12 h-2.5 bg-[#3461fd]" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white p-2 flex flex-col justify-between shadow-xs h-16">
                <div className="w-5 h-5 bg-[#3461fd]" />
                <div className="w-full h-1.5 bg-[#8ba6ff]" />
              </div>
              <div className="bg-white p-2 flex flex-col justify-between shadow-xs h-16">
                <div className="w-5 h-5 bg-[#8ba6ff]" />
                <div className="w-full h-1.5 bg-[#3461fd]" />
              </div>
              <div className="bg-white p-2 flex flex-col justify-between shadow-xs h-16">
                <div className="w-5 h-5 bg-[#061436]" />
                <div className="w-full h-1.5 bg-[#8ba6ff]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── 2. Web App Development Wireframe (Live Real-Time Dashboard Simulation) ── */
function WebAppWireframe() {
  return (
    <div className="w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] bg-white shadow-2xl overflow-hidden select-none border border-white/20 transition-transform duration-500 group-hover:scale-[1.02] relative">
      {/* Browser Top Bar with Live Streaming Tag */}
      <div className="bg-white px-4 py-2.5 sm:py-3 flex items-center justify-between border-b border-neutral-100 z-20 relative">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 bg-[#27c93f]" />
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-neutral-100 text-[9px] font-mono text-neutral-600">
          <span className="w-1.5 h-1.5 bg-[#3461fd] animate-pulse" />
          <span>cloud.h4code.agency/dash</span>
        </div>
        <div className="text-[8px] font-mono font-bold text-neutral-400">
          METRICS ON
        </div>
      </div>

      {/* Browser Body with Live Animated Dashboard Metrics */}
      <div className="bg-[#8ba6ff] p-4 sm:p-5 h-[230px] sm:h-[260px] flex gap-3 relative overflow-hidden">
        {/* Shimmer Light Reflection Sweep */}
        <motion.div
          animate={{ x: ['-100%', '250%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none z-20"
        />

        {/* Left Sidebar with Active Navigation Indicator Motion */}
        <div className="w-12 sm:w-14 flex flex-col gap-2 pt-1 border-r border-white/20 pr-2 relative">
          <div className="w-full h-3 bg-white mb-2" />
          
          {/* Animated Active Nav Tab */}
          <div className="relative flex flex-col gap-2">
            <motion.div
              animate={{ y: [0, 16, 32, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 0.7, 1] }}
              className="absolute left-0 w-full h-2.5 bg-white shadow-xs"
            />
            <div className="w-3/4 h-2 bg-white/70 relative z-10" />
            <div className="w-full h-2 bg-white/70 relative z-10" />
            <div className="w-4/5 h-2 bg-white/70 relative z-10" />
            <div className="w-3/4 h-2 bg-white/70 relative z-10" />
          </div>

          <div className="mt-auto w-full h-3 bg-white/90" />
        </div>

        {/* Right Dashboard Area with Live Dancing Bar Charts */}
        <div className="flex-1 flex flex-col justify-between relative">
          {/* Top Real-Time KPI Banner */}
          <div className="bg-white p-2.5 shadow-sm flex items-center justify-between">
            <div>
              <div className="text-[7px] font-mono text-neutral-400 uppercase tracking-wider">Active Workflows</div>
              <div className="text-xs font-black font-mono text-[#061436]">$84,290</div>
            </div>
            {/* Live Ticker Pill */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="px-1.5 py-0.5 bg-emerald-100 border border-emerald-300 text-emerald-700 text-[8px] font-mono font-bold flex items-center gap-1"
            >
              <span>▲</span>
              <span>+28.4%</span>
            </motion.div>
          </div>

          {/* Center Live Animated Metrics Grid (6 Visual Cards) */}
          <div className="grid grid-cols-3 gap-2">
            {/* Card 1: Dynamic Animated Bar Chart */}
            <div className="aspect-[4/3] bg-white shadow-sm p-1.5 flex flex-col justify-between">
              <div className="text-[6.5px] font-mono text-neutral-400">SPEED</div>
              <div className="flex items-end justify-between h-8 gap-1 pt-1">
                <motion.div
                  animate={{ height: ['40%', '85%', '50%', '95%', '40%'] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1.5 bg-[#3461fd]"
                />
                <motion.div
                  animate={{ height: ['70%', '40%', '90%', '60%', '70%'] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                  className="w-1.5 bg-[#8ba6ff]"
                />
                <motion.div
                  animate={{ height: ['50%', '90%', '40%', '80%', '50%'] }}
                  transition={{ duration: 4.1, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                  className="w-1.5 bg-[#3461fd]"
                />
                <motion.div
                  animate={{ height: ['90%', '60%', '80%', '40%', '90%'] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                  className="w-1.5 bg-[#8ba6ff]"
                />
              </div>
            </div>

            {/* Card 2: Interactive Highlight Card */}
            <motion.div
              animate={{
                backgroundColor: ['#3461fd', '#254edb', '#3461fd'],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="aspect-[4/3] shadow-sm p-1.5 flex flex-col justify-between"
            >
              <div className="text-[6.5px] font-mono text-white/70">DATABASE</div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-white" />
                <div className="w-3/4 h-1.5 bg-white/80" />
              </div>
            </motion.div>

            {/* Card 3: Dynamic Progress Wave */}
            <div className="aspect-[4/3] bg-white shadow-sm p-1.5 flex flex-col justify-between">
              <div className="text-[6.5px] font-mono text-neutral-400">CACHE</div>
              <div className="w-full bg-neutral-100 h-2 overflow-hidden my-auto">
                <motion.div
                  animate={{ width: ['20%', '90%', '65%', '95%', '20%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-full bg-[#3461fd]"
                />
              </div>
            </div>

            {/* Card 4: Status Indicator */}
            <div className="aspect-[4/3] bg-white shadow-sm p-1.5 flex flex-col justify-between">
              <div className="text-[6.5px] font-mono text-neutral-400">APIs</div>
              <div className="flex items-center gap-1.5 my-auto">
                <span className="w-2 h-2 bg-emerald-500 animate-ping" />
                <span className="text-[8px] font-mono font-bold text-neutral-700">99.9%</span>
              </div>
            </div>

            {/* Card 5: Accent Blue Card */}
            <div className="aspect-[4/3] bg-[#3461fd] shadow-sm p-1.5 flex flex-col justify-end">
              <div className="w-3/4 h-1.5 bg-white/80" />
            </div>

            {/* Card 6: Clean White Card */}
            <div className="aspect-[4/3] bg-white shadow-sm p-1.5 flex flex-col justify-end">
              <div className="w-3/4 h-1.5 bg-[#8ba6ff]" />
            </div>
          </div>

          {/* Bottom Live System Activity Bar */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse" />
              <div className="w-16 h-2 bg-white/70" />
            </div>
            <div className="w-10 h-2 bg-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 3. Mobile App Development Wireframe (3D Parallax & Live App Swiper) ───── */
function MobileDevWireframe() {
  return (
    <div className="w-full flex items-end justify-center gap-2 sm:gap-4 py-2 sm:py-3 select-none transition-transform duration-500 group-hover:scale-[1.02] relative scale-[0.85] xs:scale-[0.92] sm:scale-100 origin-bottom">
      {/* Left Phone: Floating Parallax Ambient Screen */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [-2, -0.5, -2],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="shrink-0 w-20 sm:w-28 border-[2px] sm:border-[2.5px] border-white/90 bg-[#8ba6ff] p-1.5 sm:p-2 shadow-xl flex flex-col gap-1.5 sm:gap-2 h-40 sm:h-48 opacity-90 relative overflow-hidden"
      >
        <div className="w-7 h-1.5 bg-white/80 mx-auto" />
        <div className="w-full h-10 sm:h-12 bg-white shadow-sm p-1 sm:p-1.5 flex flex-col justify-between">
          <div className="w-1/2 h-1.5 bg-[#8ba6ff]" />
          <div className="w-3/4 h-1 bg-neutral-200" />
          <div className="w-1/3 h-1 bg-[#3461fd]" />
        </div>
        <div className="space-y-1.5 pt-1">
          <div className="w-full h-2 sm:h-2.5 bg-white/70" />
          <div className="w-full h-2 sm:h-2.5 bg-white/70" />
          <div className="w-4/5 h-2 sm:h-2.5 bg-white/70" />
        </div>
      </motion.div>

      {/* Center Phone (Hero Phone with Live Story/Screen Swiper Motion) */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3,
        }}
        className="shrink-0 w-24 sm:w-32 border-[2.5px] sm:border-[3px] border-white bg-[#8ba6ff] p-2 sm:p-2.5 shadow-2xl flex flex-col gap-2 sm:gap-2.5 h-48 sm:h-56 z-10 -translate-y-2 relative overflow-hidden"
      >
        {/* Floating Touch Tap Ripple Effect */}
        <motion.div
          animate={{
            scale: [0, 1.8],
            opacity: [0.9, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeOut',
            repeatDelay: 2,
          }}
          className="absolute top-18 sm:top-20 left-10 sm:left-12 w-6 h-6 border-2 border-white bg-white/30 rounded-full pointer-events-none z-30"
        />

        {/* Dynamic Notch Header with Clock */}
        <div className="flex items-center justify-between text-[7px] font-mono text-white font-bold px-1">
          <span>09:41</span>
          <div className="w-7 h-1.5 bg-white shadow-xs" />
          <span>5G</span>
        </div>

        {/* Live Swiping Content Carousel Screen */}
        <div className="relative h-16 sm:h-18 overflow-hidden bg-white shadow-md">
          {/* Slide 1: Welcome Banner (Swipes out to left) */}
          <motion.div
            animate={{
              x: ['0%', '0%', '-110%', '-110%', '0%'],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.42, 0.52, 0.92, 1],
            }}
            className="absolute inset-0 p-2 flex flex-col justify-between"
          >
            <div className="w-3/4 h-2 bg-[#3461fd]" />
            <div className="w-1/2 h-1.5 bg-neutral-200" />
            <div className="w-10 h-2.5 bg-[#3461fd] text-[6px] font-mono text-white flex items-center justify-center font-bold">
              SWIPE
            </div>
          </motion.div>

          {/* Slide 2: Analytics Card (Swipes in from right) */}
          <motion.div
            animate={{
              x: ['110%', '110%', '0%', '0%', '110%'],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.42, 0.52, 0.92, 1],
            }}
            className="absolute inset-0 p-2 bg-[#3461fd] text-white flex flex-col justify-between"
          >
            <div className="text-[7px] font-mono font-bold">ACTIVE ORDER</div>
            <div className="w-2/3 h-1.5 bg-white/80" />
            <div className="text-[7.5px] font-mono font-bold text-emerald-300">✓ DELIVERED</div>
          </motion.div>
        </div>

        {/* App Icons Grid 2x3 with Interactive Breathing Scale */}
        <div className="grid grid-cols-3 gap-1.5 pt-1">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
            className="aspect-square bg-white shadow-sm"
          />
          <div className="aspect-square bg-[#3461fd] shadow-sm" />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            className="aspect-square bg-white shadow-sm"
          />
          <div className="aspect-square bg-white shadow-sm" />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            className="aspect-square bg-[#3461fd] shadow-sm"
          />
          <div className="aspect-square bg-white shadow-sm" />
        </div>
      </motion.div>

      {/* Right Phone: Floating Parallax Ambient Screen */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [2, 0.5, 2],
        }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.6,
        }}
        className="shrink-0 w-20 sm:w-28 border-[2px] sm:border-[2.5px] border-white/90 bg-[#8ba6ff] p-1.5 sm:p-2 shadow-xl flex flex-col gap-1.5 sm:gap-2 h-40 sm:h-48 opacity-90 relative overflow-hidden"
      >
        <div className="w-7 h-1.5 bg-white/80 mx-auto" />
        <div className="grid grid-cols-2 gap-1.5">
          <div className="aspect-[4/3] bg-white shadow-sm" />
          <div className="aspect-[4/3] bg-white shadow-sm" />
          <div className="aspect-[4/3] bg-white shadow-sm" />
          <div className="aspect-[4/3] bg-white shadow-sm" />
        </div>
        <div className="w-full h-4 bg-white/80 mt-auto" />
      </motion.div>
    </div>
  );
}

/* ── 4. Web Design & UI/UX Wireframe (Live Figma Collaborative Motion Canvas) ── */
function WebDesignWireframe() {
  return (
    <div className="w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] bg-white shadow-2xl overflow-hidden select-none border border-white/20 transition-transform duration-500 group-hover:scale-[1.02] relative">
      {/* Design App Header Bar with Tools & Live Collab Tag */}
      <div className="bg-white px-4 py-2.5 sm:py-3 flex items-center justify-between border-b border-neutral-100 z-20 relative">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 bg-[#27c93f]" />
        </div>
        
        {/* Collaborative Design Active Tool Indicators */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="w-4 h-4 bg-[#3461fd] flex items-center justify-center text-white text-[8px] font-mono font-bold">V</span>
            <span className="w-4 h-4 bg-neutral-100 flex items-center justify-center text-neutral-600 text-[8px] font-mono">P</span>
            <span className="w-4 h-4 bg-neutral-100 flex items-center justify-center text-neutral-600 text-[8px] font-mono">T</span>
          </div>
          <span className="text-[8px] font-mono font-bold text-[#3461fd] bg-[#3461fd]/10 px-1.5 py-0.5">FIGMA LIVE</span>
        </div>
      </div>

      {/* Design Canvas with Collaborative Cursors & Vector Pen Drawing */}
      <div className="bg-[#8ba6ff] p-5 sm:p-7 h-[230px] sm:h-[260px] flex flex-col justify-between relative overflow-hidden">
        {/* Shimmer Light Reflection */}
        <motion.div
          animate={{ x: ['-100%', '250%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none z-20"
        />

        {/* Multiplayer Designer Cursor 1: Moving & Resizing Component */}
        <motion.div
          animate={{
            x: [240, 80, 80, 180, 240],
            y: [160, 45, 45, 120, 160],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.35, 0.55, 0.85, 1],
          }}
          className="absolute pointer-events-none z-30 flex items-start gap-1"
        >
          <svg className="w-4 h-4 text-[#8a3ffc] drop-shadow-md fill-[#8a3ffc]" viewBox="0 0 24 24">
            <path d="M3 3l7 18 3-7 7-3L3 3z" />
          </svg>
          <span className="text-[7.5px] font-mono bg-[#8a3ffc] text-white px-1.5 py-0.5 shadow-sm font-bold">
            Noufel [UI]
          </span>
        </motion.div>

        {/* Multiplayer Designer Cursor 2: Adding Comment */}
        <motion.div
          animate={{
            x: [40, 200, 200, 120, 40],
            y: [140, 70, 70, 130, 140],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.38, 0.58, 0.88, 1],
          }}
          className="absolute pointer-events-none z-30 flex items-start gap-1"
        >
          <svg className="w-4 h-4 text-[#ff5f56] drop-shadow-md fill-[#ff5f56]" viewBox="0 0 24 24">
            <path d="M3 3l7 18 3-7 7-3L3 3z" />
          </svg>
          <span className="text-[7.5px] font-mono bg-[#ff5f56] text-white px-1.5 py-0.5 shadow-sm font-bold">
            Sara [Review]
          </span>
        </motion.div>

        {/* Floating Figma-like Artboard with Transform Handles */}
        <motion.div
          animate={{
            scale: [1, 1, 1.02, 1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.35, 0.55, 0.85, 1],
          }}
          className="relative z-10 w-full bg-white p-3.5 shadow-xl border border-neutral-100"
        >
          {/* Figma Selection Bounding Box Handles (4 corners) */}
          <span className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#3461fd]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#3461fd]" />
          <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#3461fd]" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#3461fd]" />

          {/* Color Tokens Bar with Active Hopping Selector Ring */}
          <div className="flex items-center justify-between mb-2.5 border-b border-neutral-100 pb-2">
            <div className="flex items-center gap-1.5 relative">
              <span className="w-3.5 h-3.5 bg-[#3461fd] shadow-xs" />
              <span className="w-3.5 h-3.5 bg-[#8ba6ff] shadow-xs" />
              <span className="w-3.5 h-3.5 bg-[#f8d018] shadow-xs" />
              <span className="w-3.5 h-3.5 bg-[#061436] shadow-xs" />

              {/* Active Color Selector Ring that hops across */}
              <motion.div
                animate={{
                  x: [0, 20, 40, 60, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  times: [0, 0.25, 0.5, 0.75, 1],
                }}
                className="absolute -top-0.5 -left-0.5 w-4.5 h-4.5 border-2 border-[#061436] pointer-events-none"
              />
            </div>
            <div className="text-[7.5px] font-mono text-neutral-400 font-bold">1440 × 900</div>
          </div>

          {/* Wireframe Layout Cards */}
          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-5 aspect-[4/3] bg-[#dde2ff] relative overflow-hidden">
              <svg className="w-full h-full stroke-[#8ba6ff] stroke-[1]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="100" />
                <line x1="100" y1="0" x2="0" y2="100" />
              </svg>
            </div>
            <div className="col-span-7 space-y-1.5">
              <div className="w-3/4 h-3 bg-[#3461fd]" />
              <div className="w-full h-2 bg-neutral-200" />
              <div className="w-2/3 h-2 bg-neutral-200" />
              <div className="w-10 h-3 bg-[#f8d018] mt-1" />
            </div>
          </div>
        </motion.div>

        {/* Vector Pen Tool Bezier Curve with Animated Drawing Path */}
        <div className="relative w-full h-10 mt-2">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 320 40" fill="none">
            {/* Animated Pen Path */}
            <motion.path
              d="M10 30 C 90 0, 160 40, 240 10 S 310 30, 310 30"
              stroke="white"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              animate={{
                strokeDashoffset: [0, -40],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            {/* Pulsing Anchor Control Points */}
            <motion.rect
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
              x="6"
              y="26"
              width="8"
              height="8"
              fill="white"
              stroke="#3461fd"
              strokeWidth="1.5"
            />
            <motion.rect
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              x="156"
              y="16"
              width="8"
              height="8"
              fill="#f8d018"
              stroke="white"
              strokeWidth="1.5"
            />
            <motion.rect
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              x="306"
              y="26"
              width="8"
              height="8"
              fill="white"
              stroke="#3461fd"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── Section Data ─────────────────────────────────────────────────────── */
interface ServiceItem {
  key: string;
  wireframe: React.ReactNode;
}

export function Services() {
  const t = useTranslations('services');

  const services: ServiceItem[] = [
    {
      key: 'webDev',
      wireframe: <WebDevWireframe />,
    },
    {
      key: 'webApps',
      wireframe: <WebAppWireframe />,
    },
    {
      key: 'mobileDev',
      wireframe: <MobileDevWireframe />,
    },
    {
      key: 'webDesign',
      wireframe: <WebDesignWireframe />,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 bg-[#000000] text-white selection:bg-[#3461fd] selection:text-white overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3461fd]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#3461fd]/10 blur-[150px] pointer-events-none" />

      <Container>
        {/* Section Header (Centered) */}
        <AnimatedSection direction="up">
          <SectionHeading
            badge={t('badge')}
            title={t('headline')}
            description={t('description')}
            align="center"
            darkTheme={true}
          />
        </AnimatedSection>

        {/* Alternating Services Rows Stack (Zero Radius / Sharp) */}
        <div className="space-y-20 sm:space-y-32">
          {services.map((service, index) => {
            const title = t(`items.${service.key}.title`);
            const description = t(`items.${service.key}.description`);

            // Even index (0, 2): Visual on Left, Text on Right
            // Odd index (1, 3): Text on Left, Visual on Right (reversed on lg screens)
            const isReversed = index % 2 === 1;

            return (
              <AnimatedSection
                key={service.key}
                direction="up"
                delay={0.15 * index}
              >
                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20 items-center">
                  
                  {/* Visual Wireframe Card Container (Sharp Rectilinear Box) */}
                  <div
                    className={`lg:col-span-6 w-full ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative w-full min-h-[300px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[430px] bg-[#3461fd] p-3 sm:p-6 md:p-8 lg:p-10 flex items-center justify-center shadow-2xl overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(52,97,253,0.35)] group-hover:scale-[1.01] border border-[#3461fd]/40">
                      {/* Ambient light reflections inside the blue box */}
                      <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/20 blur-3xl pointer-events-none" />
                      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-black/20 blur-3xl pointer-events-none" />

                      {/* Wireframe Mockup */}
                      {service.wireframe}
                    </div>
                  </div>

                  {/* Text Content & Learn More Action */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center max-w-xl ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4 sm:mb-5">
                      {title}
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
                      {description}
                    </p>
                    <div>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1c1c1e] text-white hover:bg-neutral-800 border border-white/15 font-semibold text-sm transition-all duration-200 shadow-md hover:border-white/30"
                      >
                        {t('learnMore')}
                      </a>
                    </div>
                  </div>

                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
