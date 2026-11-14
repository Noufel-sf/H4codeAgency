'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ── 1. Reusable Multiplayer Cursor ───────────────────────────────────── */
function MultiplayerCursor({
  name,
  color = 'bg-primary',
  textColor = 'text-primary-foreground',
  className = '',
}: {
  name: string;
  color?: string;
  textColor?: string;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none z-30 flex items-start gap-1 select-none ${className}`}>
      {/* Precision Arrow */}
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground drop-shadow-sm shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3l7 18 3-7 7-3L3 3z" />
      </svg>
      {/* Name Badge */}
      <span className={`px-1.5 py-0.5 text-[7px] sm:text-[8px] font-mono font-bold shadow-sm whitespace-nowrap ${color} ${textColor}`}>
        {name}
      </span>
    </div>
  );
}

/* ── 2. Reusable Bounding Box Transform Handles (Figma Style) ────────── */
function TransformBoundingBox({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative border border-primary ${className}`}>
      {children}
      {/* 4 Square Corner Handles */}
      <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-background border border-primary" />
      <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-background border border-primary" />
      <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-background border border-primary" />
      <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-background border border-primary" />
      {/* 4 Midpoint Handles */}
      <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-background border border-primary" />
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-background border border-primary" />
      <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-background border border-primary" />
      <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-background border border-primary" />
    </div>
  );
}

/* ── 3. Wireframe Image Box with Crossed Diagonals [X] ────────────────── */
function WireframeImageBox({
  className = '',
  selected = false,
  label,
}: {
  className?: string;
  selected?: boolean;
  label?: string;
}) {
  const content = (
    <div className={`relative aspect-square border border-foreground/30 bg-background/80 overflow-hidden flex items-center justify-center ${className}`}>
      {/* Diagonal Crossed Lines [X] */}
      <svg className="absolute inset-0 w-full h-full stroke-foreground/25 stroke-[1]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100" y2="100" />
        <line x1="100" y1="0" x2="0" y2="100" />
      </svg>
      {label && (
        <span className="relative z-10 px-1 py-0.5 text-[6.5px] sm:text-[7px] font-mono bg-background/90 border border-border text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );

  if (selected) {
    return <TransformBoundingBox>{content}</TransformBoundingBox>;
  }
  return content;
}

/* ── 4. Desktop iMac / Studio Display Wireframe Mockup ────────────────── */
function DesktopDeviceWireframe({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[520px] flex flex-col items-center select-none py-2 sm:py-3 transition-transform duration-500 group-hover:scale-[1.015]">
      {/* Display Screen Frame */}
      <div className="w-full bg-[#111318] p-2 sm:p-2.5 shadow-2xl border border-black/50">
        {/* Screen Window Canvas */}
        <div className="w-full bg-card flex flex-col overflow-hidden border border-border/80">
          {/* macOS Window Header Bar */}
          <div className="bg-surface/90 px-3 py-1.5 flex items-center justify-between border-b border-border/80 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#ff5f56]" />
              <span className="w-2 h-2 bg-[#ffbd2e]" />
              <span className="w-2 h-2 bg-[#27c93f]" />
            </div>
            <div className="px-3 py-0.5 bg-background border border-border text-[8px] sm:text-[9px] text-muted-foreground truncate max-w-[220px]">
              figma.com/@h4code/wireframes/canvas
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-[8px]">
              <span>100%</span>
            </div>
          </div>
          {/* Screen Content Canvas */}
          <div className="w-full aspect-[16/10] bg-background/95 overflow-hidden p-2.5 sm:p-3.5 relative">
            {children}
          </div>
        </div>
        {/* Display Chin */}
        <div className="w-full h-3.5 sm:h-4 bg-[#181a20] flex items-center justify-center">
          <div className="w-2.5 h-2 bg-neutral-600/50" />
        </div>
      </div>
      {/* Stand Arm */}
      <div className="w-16 h-7 bg-gradient-to-b from-[#2a2d36] to-[#1e2027] border-x border-black/30" />
      {/* Stand Base */}
      <div className="w-36 h-2 bg-[#252830] shadow-md border-t border-white/10" />
    </div>
  );
}

/* ── 5. Laptop / MacBook Device Wireframe Mockup ───────────────────────── */
function LaptopDeviceWireframe({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[520px] flex flex-col items-center select-none py-2 sm:py-3 transition-transform duration-500 group-hover:scale-[1.015]">
      {/* Laptop Screen Top */}
      <div className="w-[92%] bg-[#111318] p-2 sm:p-2.5 shadow-2xl border border-black/50">
        <div className="w-full bg-card flex flex-col overflow-hidden border border-border/80">
          {/* Browser Header Bar */}
          <div className="bg-surface/90 px-3 py-1.5 flex items-center justify-between border-b border-border/80 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#ff5f56]" />
              <span className="w-2 h-2 bg-[#ffbd2e]" />
              <span className="w-2 h-2 bg-[#27c93f]" />
            </div>
            <div className="px-3 py-0.5 bg-background border border-border text-[8px] sm:text-[9px] text-muted-foreground truncate max-w-[220px]">
              figjam.h4code.design/mobile-ux-flows
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-[8px]">
              <span>LIVE • 3 USERS</span>
            </div>
          </div>
          {/* Screen Content Canvas */}
          <div className="w-full aspect-[16/10] bg-background/95 overflow-hidden p-2.5 sm:p-3.5 relative">
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

/* ══════════════════════════════════════════════════════════════════════════
   SLIDER 1 SLIDES (Web & E-Commerce Wireframes)
   ══════════════════════════════════════════════════════════════════════════ */
const SLIDER_1_SLIDES = [
  {
    key: 'slide1',
    title: 'E-Commerce & Digital Storefronts',
    category: 'High-Conversion Architecture • Next.js & Stripe',
    mockup: (
      <div className="h-full flex flex-col justify-between font-sans text-foreground relative">
        {/* Collaborative Figma Canvas Header */}
        <div className="flex justify-between items-center text-[9px] pb-1 border-b border-border font-mono">
          <div className="flex items-center gap-1.5">
            <span className="text-primary font-bold">#FRAME:</span>
            <span>STOREFRONT_HOMEPAGE_1440</span>
          </div>
          <span className="text-[8px] text-muted-foreground bg-surface px-1.5 py-0.5 border border-border">
            AUTO-LAYOUT [12-COL]
          </span>
        </div>

        {/* Wireframe Body (Directly matching Image 1!) */}
        <div className="grid grid-cols-12 gap-2 sm:gap-3 items-stretch my-auto h-[calc(100%-24px)] pt-1">
          {/* Left Column: Thick Skeleton Bars & Button */}
          <div className="col-span-6 flex flex-col justify-between py-1">
            <div className="space-y-1.5 sm:space-y-2">
              {/* Three Yellow / Primary Tone Skeleton Headline Bars (Image 1 style) */}
              <div className="w-4/5 h-2.5 sm:h-3 bg-amber-400 dark:bg-amber-500" />
              <div className="w-full h-2.5 sm:h-3 bg-amber-400 dark:bg-amber-500" />
              <div className="w-3/4 h-2.5 sm:h-3 bg-amber-400 dark:bg-amber-500" />
              <div className="w-1/2 h-2.5 sm:h-3 bg-amber-400 dark:bg-amber-500" />
            </div>

            {/* Action Button (Image 1 style) */}
            <div className="pt-2">
              <span className="inline-block bg-amber-400 dark:bg-amber-500 text-black font-bold text-[8px] sm:text-[9px] px-3 py-1 border border-black shadow-xs">
                Explore Storefront →
              </span>
            </div>

            {/* Spec footer */}
            <div className="text-[7px] font-mono text-muted-foreground pt-1 border-t border-border flex justify-between">
              <span>W: 680px</span>
              <span>GAP: 16px</span>
            </div>
          </div>

          {/* Right Column: Grid of [X] Crossed Image Wireframe Boxes */}
          <div className="col-span-6 grid grid-cols-2 gap-1.5 sm:gap-2 items-start relative">
            {/* Box 1 */}
            <WireframeImageBox label="HERO_BANNER" />

            {/* Box 2 */}
            <WireframeImageBox label="PRODUCT_01" />

            {/* Box 3 */}
            <WireframeImageBox label="PRODUCT_02" />

            {/* Box 4: ACTIVELY SELECTED with Bounding Handles (Image 1 style!) */}
            <div className="relative">
              <WireframeImageBox selected={true} label="FEATURED" />
              {/* Multiplayer Cursor Selecting Corner Handle */}
              <MultiplayerCursor
                name="Lead Arch"
                color="bg-blue-600 text-white"
                className="absolute -bottom-3 -right-2"
              />
            </div>
          </div>
        </div>

        {/* Second Multiplayer Cursor (Top Left, Image 1 style!) */}
        <MultiplayerCursor
          name="UI Designer"
          color="bg-amber-600 text-white"
          className="absolute -top-1 left-2"
        />
      </div>
    ),
  },
  {
    key: 'slide2',
    title: 'Enterprise Web Applications',
    category: 'Scalable Full-Stack Web Architecture • React 19',
    mockup: (
      <div className="h-full flex flex-col justify-between font-mono text-foreground relative">
        {/* Dashboard Canvas Header */}
        <div className="flex justify-between items-center text-[9px] pb-1 border-b border-border font-bold">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-primary inline-block" />
            <span>ENTERPRISE_ANALYTICS_DASHBOARD</span>
          </div>
          <span className="text-[8px] bg-primary/10 text-primary px-1.5 py-0.5 border border-primary/20">
            METRICS_GRID
          </span>
        </div>

        {/* Dashboard Multi-Column Layout */}
        <div className="grid grid-cols-12 gap-2 items-stretch my-auto h-[calc(100%-24px)] pt-1">
          {/* Left Mini Sidebar Wireframe */}
          <div className="col-span-3 bg-surface border border-border p-1 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="w-full h-2 bg-foreground/20" />
              <div className="w-3/4 h-1.5 bg-foreground/10" />
              <div className="w-4/5 h-1.5 bg-foreground/10" />
              <div className="w-2/3 h-1.5 bg-primary/40" />
            </div>
            <div className="text-[6.5px] text-muted-foreground border-t border-border pt-0.5">
              NAV_TREE
            </div>
          </div>

          {/* Center/Right Analytics Matrix */}
          <div className="col-span-9 flex flex-col justify-between gap-1.5">
            {/* 3 Metric Cards */}
            <div className="grid grid-cols-3 gap-1">
              <div className="bg-surface p-1 border border-border">
                <div className="text-[6.5px] text-muted-foreground">LATENCY</div>
                <div className="text-[9px] font-bold text-primary">12.4ms</div>
              </div>
              <div className="bg-surface p-1 border border-border">
                <div className="text-[6.5px] text-muted-foreground">THROUGHPUT</div>
                <div className="text-[9px] font-bold text-emerald-500">1.8M req/s</div>
              </div>
              {/* Selected Metric Card with Handles */}
              <TransformBoundingBox className="bg-surface p-1">
                <div className="text-[6.5px] text-muted-foreground">NODES</div>
                <div className="text-[9px] font-bold">64 ACTIVE</div>
              </TransformBoundingBox>
            </div>

            {/* Sparkline & Table Wireframe */}
            <div className="h-12 bg-surface border border-border p-1 flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between text-[6.5px] text-muted-foreground">
                <span>TELEMETRY_STREAM</span>
                <span className="text-emerald-500">HEALTHY ✓</span>
              </div>
              <svg className="w-full h-6 stroke-primary stroke-[1.2] fill-none" viewBox="0 0 120 24">
                <path d="M0,20 Q20,4 40,16 T80,8 T120,4" />
                <line x1="0" y1="22" x2="120" y2="22" className="stroke-border stroke-1" strokeDasharray="2 2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Multiplayer Cursor */}
        <MultiplayerCursor
          name="Full-Stack Dev"
          color="bg-emerald-600 text-white"
          className="absolute bottom-1 right-4"
        />
      </div>
    ),
  },
  {
    key: 'slide3',
    title: 'Design Systems & Component Kits',
    category: 'Modular UI Architecture & Interactive Prototypes',
    mockup: (
      <div className="h-full flex flex-col justify-between font-mono text-foreground relative">
        {/* UI Kit Header */}
        <div className="flex justify-between items-center text-[9px] pb-1 border-b border-border">
          <div className="flex items-center gap-1.5">
            <span className="text-primary">❖</span>
            <span className="font-bold">DESIGN_SYSTEM_TOKENS_V2</span>
          </div>
          <span className="text-[8px] bg-surface px-1.5 py-0.5 border border-border text-muted-foreground">
            ZERO-RADIUS • SHARP
          </span>
        </div>

        {/* Component Showcase Matrix */}
        <div className="grid grid-cols-12 gap-2 items-stretch my-auto h-[calc(100%-24px)] pt-1">
          {/* Button Components Section */}
          <div className="col-span-6 bg-surface border border-border p-1.5 flex flex-col justify-between">
            <div className="text-[7px] text-muted-foreground">COMPONENT: BUTTON_PRIMARY</div>
            <div className="space-y-1 my-auto">
              <div className="w-full bg-primary text-primary-foreground text-center py-1 text-[8px] font-bold">
                Default Action
              </div>
              <div className="w-full bg-surface-hover text-foreground border border-border text-center py-1 text-[8px] font-medium">
                Secondary Outline
              </div>
            </div>
            <div className="text-[6.5px] text-muted-foreground">STATE: HOVER / FOCUS</div>
          </div>

          {/* Form & Modal Components with Handles */}
          <div className="col-span-6 flex flex-col justify-between gap-1">
            <TransformBoundingBox className="bg-surface p-1 space-y-1">
              <div className="text-[6.5px] text-muted-foreground">FORM_INPUT [SEARCH]</div>
              <div className="w-full bg-background border border-primary px-1.5 py-0.5 text-[7px] text-primary">
                Search query... |
              </div>
            </TransformBoundingBox>

            <div className="bg-surface border border-border p-1 flex items-center justify-between text-[7px]">
              <span>TOGGLE_STATE</span>
              <div className="w-6 h-3 bg-primary border border-primary flex items-center justify-end px-0.5">
                <div className="w-2 h-2 bg-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Multiplayer Cursor */}
        <MultiplayerCursor
          name="Design Lead"
          color="bg-purple-600 text-white"
          className="absolute top-2 right-6"
        />
      </div>
    ),
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   SLIDER 2 SLIDES (Mobile Apps, AI & Product Flows - Image 2 Style!)
   ══════════════════════════════════════════════════════════════════════════ */
const SLIDER_2_SLIDES = [
  {
    key: 'slide1',
    title: 'Cross-Platform Mobile Applications',
    category: 'iOS & Android • Fluid Native UX',
    mockup: (
      <div className="h-full flex flex-col justify-between font-sans text-foreground relative">
        {/* FigJam Canvas Header */}
        <div className="flex justify-between items-center text-[9px] pb-1 border-b border-border font-mono">
          <div className="flex items-center gap-1.5">
            <span className="text-primary font-bold">FLOW:</span>
            <span>MOBILE_ONBOARDING_TO_FEED</span>
          </div>
          <span className="text-[8px] bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 border border-emerald-500/20">
            3 SCREENS
          </span>
        </div>

        {/* Mobile Screens Flow (Directly matching Image 2!) */}
        <div className="grid grid-cols-12 gap-1.5 sm:gap-2 items-center my-auto h-[calc(100%-24px)] pt-1">
          {/* Mobile Screen 1: Login / Welcome */}
          <div className="col-span-4 h-full bg-surface border border-foreground/40 p-1 flex flex-col justify-between shadow-xs">
            {/* Screen Top Header */}
            <div className="text-[6.5px] font-mono text-center border-b border-border pb-0.5 text-muted-foreground">
              LOGIN_SCREEN
            </div>
            {/* Crossed Image Placeholder [X] */}
            <div className="w-full aspect-[4/3] border border-border relative my-auto bg-background/50">
              <svg className="absolute inset-0 w-full h-full stroke-foreground/20 stroke-[1]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="100" />
                <line x1="100" y1="0" x2="0" y2="100" />
              </svg>
            </div>
            {/* Input & Button Skeleton */}
            <div className="space-y-0.5">
              <div className="w-full h-2 bg-background border border-border" />
              <div className="w-full bg-primary text-primary-foreground text-center py-0.5 text-[6.5px] font-bold">
                Continue →
              </div>
            </div>
          </div>

          {/* Flow Connector Arrow with Sticky Note (Image 2 style!) */}
          <div className="col-span-1 flex flex-col items-center justify-center text-primary font-bold text-[9px]">
            <span>→</span>
          </div>

          {/* Mobile Screen 2: Feed with Grid [X] */}
          <div className="col-span-4 h-full bg-surface border-2 border-primary p-1 flex flex-col justify-between shadow-sm relative">
            <div className="text-[6.5px] font-mono text-center border-b border-border pb-0.5 font-bold text-primary">
              HOME_FEED
            </div>
            {/* 4-Card Grid with [X] */}
            <div className="grid grid-cols-2 gap-1 my-auto">
              <div className="aspect-square border border-foreground/30 relative bg-background/50">
                <svg className="absolute inset-0 w-full h-full stroke-foreground/20 stroke-[1]" viewBox="0 0 50 50">
                  <line x1="0" y1="0" x2="50" y2="50" />
                  <line x1="50" y1="0" x2="0" y2="50" />
                </svg>
              </div>
              <div className="aspect-square border border-foreground/30 relative bg-background/50">
                <svg className="absolute inset-0 w-full h-full stroke-foreground/20 stroke-[1]" viewBox="0 0 50 50">
                  <line x1="0" y1="0" x2="50" y2="50" />
                  <line x1="50" y1="0" x2="0" y2="50" />
                </svg>
              </div>
            </div>
            {/* Bottom Nav Bar Wireframe */}
            <div className="flex justify-between border-t border-border pt-0.5 text-[6px] font-mono text-muted-foreground">
              <span className="text-primary font-bold">● FEED</span>
              <span>SEARCH</span>
              <span>USER</span>
            </div>
          </div>

          {/* Sticky Note Annotation (Image 2 style!) */}
          <div className="col-span-3 flex flex-col justify-center gap-1">
            <div className="bg-emerald-400 text-black p-1 text-[7px] font-mono font-bold shadow-xs border border-emerald-600">
              LOVE THIS! ✓
              <div className="text-[6px] font-normal mt-0.5">Fluid 120Hz gesture navigation.</div>
            </div>
            <div className="bg-amber-300 text-black p-1 text-[6.5px] font-mono shadow-xs border border-amber-500">
              HIPAA &amp; GDPR encrypted storage.
            </div>
          </div>
        </div>

        {/* Multiplayer Cursor */}
        <MultiplayerCursor
          name="Mobile Lead"
          color="bg-primary text-primary-foreground"
          className="absolute -top-1 right-2"
        />
      </div>
    ),
  },
  {
    key: 'slide2',
    title: 'AI & Automated Workflow Engines',
    category: 'Intelligent Agent Pipelines & Custom APIs',
    mockup: (
      <div className="h-full flex flex-col justify-between font-mono text-foreground relative">
        {/* Node Pipeline Header */}
        <div className="flex justify-between items-center text-[9px] pb-1 border-b border-border">
          <div className="flex items-center gap-1.5">
            <span className="text-primary">✦</span>
            <span className="font-bold">AGENTIC_WORKFLOW_PIPELINE</span>
          </div>
          <span className="text-[8px] bg-primary/10 text-primary px-1.5 py-0.5 border border-primary/20">
            AUTO-ACTIVE (18ms)
          </span>
        </div>

        {/* Node Flow Diagram Canvas */}
        <div className="grid grid-cols-12 gap-1 items-center my-auto h-[calc(100%-24px)] p-1 bg-surface/40 border border-border relative">
          {/* Node 1: Ingest */}
          <div className="col-span-3 bg-background border border-border p-1 space-y-0.5">
            <div className="text-[6.5px] text-muted-foreground">INGEST</div>
            <div className="text-[7.5px] font-bold">API Webhook</div>
            <div className="w-full h-1 bg-primary/30" />
            <div className="text-[6px] text-emerald-500">Payload Valid</div>
          </div>

          {/* Connector Arrow */}
          <div className="col-span-1 text-center text-primary text-[8px] font-bold">
            →
          </div>

          {/* Node 2: LLM Agent with Handles */}
          <div className="col-span-4">
            <TransformBoundingBox className="bg-background p-1 space-y-0.5 shadow-xs">
              <div className="text-[6.5px] text-primary font-bold">LLM_ROUTER</div>
              <div className="text-[7.5px] font-bold">Claude 3.7 Sonnet</div>
              <div className="w-full h-1 bg-primary" />
              <div className="text-[6px] text-muted-foreground">Confidence: 99.4%</div>
            </TransformBoundingBox>
          </div>

          {/* Connector Arrow */}
          <div className="col-span-1 text-center text-primary text-[8px] font-bold">
            →
          </div>

          {/* Node 3: Database & Actions */}
          <div className="col-span-3 space-y-1">
            <div className="bg-background border border-border p-0.5 text-[6.5px]">
              <span className="text-emerald-500 font-bold">DB Sync ✓</span>
            </div>
            <div className="bg-background border border-border p-0.5 text-[6.5px]">
              <span className="text-primary font-bold">Notify API</span>
            </div>
          </div>
        </div>

        {/* Multiplayer Cursor */}
        <MultiplayerCursor
          name="AI Engineer"
          color="bg-purple-600 text-white"
          className="absolute bottom-1 left-4"
        />
      </div>
    ),
  },
  {
    key: 'slide3',
    title: 'Bespoke SaaS & Management Portals',
    category: 'Tailored Systems & Cloud Architecture',
    mockup: (
      <div className="h-full flex flex-col justify-between font-mono text-foreground relative">
        {/* Sprint Board Header */}
        <div className="flex justify-between items-center text-[9px] pb-1 border-b border-border">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500">■</span>
            <span className="font-bold">PORTAL_ARCHITECTURE_SPRINT</span>
          </div>
          <span className="text-[8px] bg-surface px-1.5 py-0.5 border border-border text-muted-foreground">
            SPRINT 01 • READY
          </span>
        </div>

        {/* Board Columns */}
        <div className="grid grid-cols-3 gap-1.5 my-auto h-[calc(100%-24px)] pt-1">
          {/* Column 1 */}
          <div className="bg-surface border border-border p-1 flex flex-col justify-between">
            <div className="text-[6.5px] text-muted-foreground font-bold border-b border-border pb-0.5">
              BACKLOG [04]
            </div>
            <div className="space-y-1 my-auto">
              <div className="bg-background p-1 border border-border text-[6.5px]">
                Auth &amp; RBAC Roles
              </div>
              <div className="bg-background p-1 border border-border text-[6.5px]">
                PostgreSQL Schema
              </div>
            </div>
          </div>

          {/* Column 2: Selected */}
          <TransformBoundingBox className="bg-surface p-1 flex flex-col justify-between">
            <div className="text-[6.5px] text-primary font-bold border-b border-primary/40 pb-0.5">
              IN PROGRESS
            </div>
            <div className="space-y-1 my-auto">
              <div className="bg-background p-1 border border-primary text-[7px] font-bold text-primary">
                Multi-Tenant Portal
              </div>
            </div>
          </TransformBoundingBox>

          {/* Column 3 */}
          <div className="bg-surface border border-border p-1 flex flex-col justify-between">
            <div className="text-[6.5px] text-emerald-500 font-bold border-b border-border pb-0.5">
              DEPLOYED ✓
            </div>
            <div className="space-y-1 my-auto">
              <div className="bg-background p-1 border border-emerald-500/40 text-[6.5px]">
                API Gateway v1
              </div>
            </div>
          </div>
        </div>

        {/* Multiplayer Cursor */}
        <MultiplayerCursor
          name="Tech Lead"
          color="bg-blue-600 text-white"
          className="absolute top-3 right-8"
        />
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
        {/* ── Section Header (2 Columns) ── */}
        <AnimatedSection direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-border/70">
            {/* Left Column: Badge & Big Headline */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-4 block font-mono">
                {t('badge')}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black tracking-tight leading-[1.18] text-foreground max-w-xl">
                <span className="relative inline-block px-2.5 sm:px-3.5 py-0.5 -rotate-1 font-black select-none mr-2 rtl:ml-2 whitespace-nowrap leading-tight overflow-hidden align-baseline border border-primary/40 text-primary-foreground">
                  {/* Background base wireframe tint */}
                  <span className="absolute inset-0 bg-primary/20 -z-20" />

                  {/* Dynamic scroll-draw solid primary badge fill */}
                  <motion.span
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ willChange: 'width' }}
                    className={cn(
                      'absolute inset-0 bg-primary -z-10',
                      isRtl ? 'right-0' : 'left-0'
                    )}
                  />

                  {/* Clean text */}
                  <span className="relative z-10 text-primary-foreground drop-shadow-xs">
                    {t('headlineHighlight')}
                  </span>
                </span>{' '}
                <span>{t('headlineRest')}</span>
              </h2>
            </div>

            {/* Right Column: Subtitle Description & Action */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-1 lg:pt-8">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                {t('description')}
              </p>
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary-hover text-secondary-foreground text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border border-border"
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
          
          {/* ═══════════ SLIDER 1: Web & E-Commerce Wireframes ═══════════ */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="group flex flex-col justify-between bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-sm">
              {/* Visual Card Area with Soft Pastel Canvas */}
              <div className="relative w-full aspect-[4/3] bg-[#dce3f1] dark:bg-[#141b2b] p-4 sm:p-7 flex items-center justify-center overflow-hidden border-b border-border">
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
                    {t(`slider1.${activeSlide1.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t(`slider1.${activeSlide1.key}.category`)}
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

          {/* ═══════════ SLIDER 2: Mobile Apps & AI Pipelines ═════════════ */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="group flex flex-col justify-between bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-sm">
              {/* Visual Card Area with Soft Warm Gray Canvas */}
              <div className="relative w-full aspect-[4/3] bg-[#eaebee] dark:bg-[#181a20] p-4 sm:p-7 flex items-center justify-center overflow-hidden border-b border-border">
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
                    {t(`slider2.${activeSlide2.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t(`slider2.${activeSlide2.key}.category`)}
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
