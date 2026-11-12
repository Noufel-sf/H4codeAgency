'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { AnimatedSection } from '../ui/AnimatedSection';
import {
  Activity,
  Server,
  Sparkles,
  ShoppingBag,
  HeartPulse,
  Bot,
  Layers,
  ArrowRight
} from 'lucide-react';

export function Projects() {
  const t = useTranslations('projects');

  // Realistic UI previews for the projects
  const previews = [
    // Project 1: Cloud Telemetry Dashboard
    (
      <div className="w-full space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
            <span className="text-[10px] text-[#929BAA]">Throughput</span>
            <div className="text-sm font-bold text-emerald-400">1.42 M req/s</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
            <span className="text-[10px] text-[#929BAA]">Global Latency</span>
            <div className="text-sm font-bold text-[#4776F5]">14 ms avg</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
            <span className="text-[10px] text-[#929BAA]">Active Nodes</span>
            <div className="text-sm font-bold text-white">48 Pods</div>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-[#090B10]/80 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs text-[#929BAA]">
            <span className="flex items-center gap-1.5 text-white">
              <Activity className="w-3.5 h-3.5 text-[#315BDB]" />
              Real-time Traffic Ingress
            </span>
            <span className="text-emerald-400 font-mono text-[11px]">+18.4% vs benchmark</span>
          </div>
          <div className="h-16 flex items-end gap-1.5 pt-2">
            {[40, 55, 35, 70, 65, 80, 95, 85, 75, 90, 100, 80, 85, 95].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 bg-gradient-to-t from-[#315BDB] to-[#60A5FA] rounded-sm opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    ),

    // Project 2: Luxury Flagship Store
    (
      <div className="w-full space-y-4">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
          <span className="font-serif tracking-widest text-white uppercase text-sm">
            AURA MAISON
          </span>
          <div className="flex items-center gap-2 text-[11px] text-[#929BAA]">
            <span>COLLECTION 2026</span>
            <span className="text-white/30">/</span>
            <span className="text-[#4776F5]">EUR (€)</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="h-20 rounded-lg bg-gradient-to-tr from-stone-900 to-stone-800 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-amber-300/80" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">L&apos;Ombre Chrono</div>
              <div className="text-[11px] text-[#929BAA]">€3,450 • Limited Edition</div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="h-20 rounded-lg bg-gradient-to-tr from-stone-900 to-stone-800 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-stone-400" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Soie Noire Travel</div>
              <div className="text-[11px] text-[#929BAA]">€1,890 • In Stock</div>
            </div>
          </div>
        </div>
      </div>
    ),

    // Project 3: Synapse Telemedicine Mobile
    (
      <div className="w-full max-w-sm mx-auto space-y-3">
        <div className="p-4 rounded-2xl bg-[#090B10] border border-white/10 space-y-3 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <HeartPulse className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Dr. Sarah Al-Mansour</div>
                <div className="text-[10px] text-[#929BAA]">Cardiology Telehealth Consultation</div>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Encrypted
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-[#929BAA] space-y-1">
            <div className="flex justify-between">
              <span>Appointment:</span>
              <span className="text-white">Today, 14:30 GMT</span>
            </div>
            <div className="flex justify-between">
              <span>Status:</span>
              <span className="text-cyan-400">Ready to join session</span>
            </div>
          </div>
        </div>
      </div>
    ),

    // Project 4: Kinetix AI Workflow Studio
    (
      <div className="w-full space-y-3 font-mono">
        <div className="flex items-center justify-between text-xs text-[#929BAA] pb-2 border-b border-white/10">
          <div className="flex items-center gap-2 text-white">
            <Bot className="w-4 h-4 text-[#4776F5]" />
            <span className="font-sans font-semibold">AgentPipeline_v2</span>
          </div>
          <span className="text-[11px] text-emerald-400">99.4% precision</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-center space-y-1">
            <div className="text-[#929BAA]">Trigger</div>
            <div className="text-white font-bold">Webhook API</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#315BDB]/20 border border-[#4776F5]/40 text-center space-y-1">
            <div className="text-[#60A5FA]">LLM Reasoning</div>
            <div className="text-white font-bold">Claude 3.7 + RAG</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-center space-y-1">
            <div className="text-[#929BAA]">Action</div>
            <div className="text-emerald-400 font-bold">Postgres Sync</div>
          </div>
        </div>
      </div>
    )
  ];

  const projectKeys = ['project1', 'project2', 'project3', 'project4'] as const;

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-background border-t border-border transition-colors duration-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 start-1/2 -translate-x-1/2 w-[600px] h-96 bg-primary/10 blur-[140px] pointer-events-none" />

      <Container>
        <AnimatedSection direction="up">
          <SectionHeading
            badge={t('badge')}
            title={t('headline')}
            description={t('description')}
            align="center"
          />
        </AnimatedSection>

        <div className="space-y-10 sm:space-y-14">
          {projectKeys.map((key, index) => {
            const title = t(`items.${key}.title`);
            const category = t(`items.${key}.category`);
            const description = t(`items.${key}.description`);
            const technologies = [
              t(`items.${key}.tech.0`),
              t(`items.${key}.tech.1`),
              t(`items.${key}.tech.2`),
              t(`items.${key}.tech.3`)
            ];

            return (
              <AnimatedSection
                key={key}
                direction="up"
                delay={0.15 * index}
              >
                <ProjectCard
                  title={title}
                  category={category}
                  description={description}
                  technologies={technologies}
                  viewLabel={t('viewProject')}
                  liveLabel={t('livePreview')}
                  previewGraphic={previews[index]}
                  index={index}
                />
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

