'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, CheckCircle2, Shield, ArrowRight, Zap, Code, Server, 
  Bot, Video, TrendingUp, Award, Activity, Lock, Layers, LineChart, PieChart,
  Headset, Camera, ShieldAlert, MonitorSmartphone, ArrowLeft, ChevronRight, Play, Pause, RefreshCcw, X, Menu, Search, MessageSquare, Briefcase, Users, LayoutDashboard, Settings, FileText, DollarSign, AlertTriangle
} from 'lucide-react';

import { SlideData } from './types';
import { WebsiteAuditDemo } from './WebsiteAuditDemo';
import { NewSitePreviewDemo } from './NewSitePreviewDemo';
import { CRMInteractiveDemo } from './CRMInteractiveDemo';
import { InvestmentCalculator } from './InvestmentCalculator';

interface SlideViewerProps {
  slide: SlideData;
  onNextSlide?: () => void;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({ slide, onNextSlide }) => {
  // State for Momento 06 Counter Animation (0.8s -> 0.6s -> 0.4s -> 0.2s -> 100)
  const [counterStep, setCounterStep] = useState<number>(0);
  const counterValues = ['0.8s', '0.6s', '0.4s', '0.2s', '100'];

  useEffect(() => {
    if (slide.id === 6 || (slide.visualType === 'VS_WORDPRESS' && slide.id !== 4)) {
      setCounterStep(0);
      const timer1 = setTimeout(() => setCounterStep(1), 600);
      const timer2 = setTimeout(() => setCounterStep(2), 1200);
      const timer3 = setTimeout(() => setCounterStep(3), 1800);
      const timer4 = setTimeout(() => setCounterStep(4), 2500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [slide.id, slide.visualType]);

  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center px-4 md:px-6 max-w-6xl mx-auto overflow-y-visible overflow-x-hidden relative select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(20px)' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center text-center my-auto"
        >
          {/* MOMENTO 06: THE COUNTER & THE 100 */}
          {(slide.id === 6) ? (
            <div className="flex flex-col items-center justify-center min-h-[500px] w-full relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 relative z-10"
              >
                <span className="px-4 py-1.5 text-xs font-black bg-green-500/20 text-green-400 border border-green-500/30 rounded-full uppercase tracking-widest mb-6 inline-block shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  PERFORMANCE GOOGLE LIGHTHOUSE
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mt-4">
                  Otimização Extrema em Next.js
                </h2>
                <p className="text-[#A1A1AA] mt-3 text-lg">Pontuação máxima em todos os pilares de auditoria do Google</p>
              </motion.div>

              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 relative z-10">
                {[
                  { label: 'Performance', color: '#22C55E' },
                  { label: 'Acessibilidade', color: '#22C55E' },
                  { label: 'Melhores Práticas', color: '#22C55E' },
                  { label: 'SEO', color: '#22C55E' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#18181B" strokeWidth="8" />
                        <motion.circle 
                          cx="50" cy="50" r="45" fill="none" stroke={item.color} strokeWidth="8"
                          strokeDasharray="283"
                          initial={{ strokeDashoffset: 283 }}
                          animate={{ strokeDashoffset: 0 }}
                          transition={{ duration: 1.5, delay: 0.5 + (idx * 0.2), ease: "easeOut" }}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 + (idx * 0.2) }}
                          className="text-3xl sm:text-4xl md:text-5xl font-black text-green-500"
                        >
                          100
                        </motion.span>
                      </div>
                    </div>
                    <span className="mt-6 text-sm font-bold text-white uppercase tracking-wider">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* TOP KEYNOTE BADGE */}
              <motion.div 
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="px-4 py-1 text-xs font-black bg-[#FFDE00] text-black rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(255,222,0,0.4)]">
                  {slide.badge}
                </span>
                <span className="text-xs font-bold text-[#A1A1AA] uppercase tracking-widest font-mono">
                  {slide.blockTitle}
                </span>
              </motion.div>

              {/* MASSIVE APPLE KEYNOTE HEADLINE */}
              <motion.h1 
                initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E4E4E7] to-[#71717A] tracking-tighter leading-[1.05] max-w-5xl mb-3"
              >
                {slide.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-base sm:text-xl text-[#D4D4D8] font-medium max-w-3xl leading-relaxed mb-6"
              >
                {slide.subtitle}
              </motion.p>

              {/* MOMENTO 01: THE REVEAL */}
              {slide.visualType === 'HERO' && (
                <motion.div 
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.35, duration: 0.8 }}
                  className="relative w-full max-w-3xl mx-auto py-6 px-4 md:py-10 md:px-8 rounded-3xl bg-gradient-to-b from-[#18181B]/80 to-[#000000] border border-[#27272A] shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col items-center"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#FFDE00]/15 blur-[160px] rounded-full pointer-events-none" />

                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    className="w-24 h-24 mb-8 rounded-3xl bg-gradient-to-br from-[#FFDE00] to-[#EAB308] p-[2px] shadow-[0_0_60px_rgba(255,222,0,0.6)] transform rotate-3 transition-all duration-500 relative group"
                  >
                    <div className="w-full h-full bg-[#09090B] rounded-[22px] flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#FFDE00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img src="/img/4.png" alt="Rooted Logo" className="w-14 h-14 object-contain drop-shadow-[0_0_15px_rgba(255,222,0,0.3)] relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </motion.div>

                  <p className="text-base sm:text-lg text-[#D4D4D8] max-w-xl mx-auto font-light leading-relaxed mb-6">
                    {slide.copy}
                  </p>

                  {slide.ctaText && (
                    <button
                      onClick={onNextSlide}
                      className="px-10 py-5 bg-[#FFDE00] text-black font-black text-lg rounded-2xl shadow-[0_0_40px_rgba(255,222,0,0.5)] hover:bg-[#ffe633] hover:scale-105 transition-all duration-300 flex items-center gap-3"
                    >
                      {slide.ctaText}
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  )}
                </motion.div>
              )}

              {/* MOMENTO 02: THE AUTHORITY */}
              {slide.visualType === 'TECH_GRID' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 }}
                  className="w-full max-w-4xl mx-auto py-6"
                >
                  <div className="p-5 md:p-8 rounded-3xl bg-gradient-to-b from-[#18181B] to-[#000000] border border-[#FFDE00]/40 shadow-[0_0_50px_rgba(255,222,0,0.15)]">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6">5 Anos de Engenharia. 1 Missão: Liderança Absoluta.</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
                      <div className="p-4 bg-[#09090B] border border-[#27272A] rounded-2xl">
                        <Code className="w-6 h-6 text-[#FFDE00] mb-2" />
                        <h4 className="text-sm font-bold text-white">Software Sob Medida</h4>
                        <p className="text-[11px] text-[#A1A1AA] mt-1">Next.js &amp; TypeScript</p>
                      </div>
                      <div className="p-4 bg-[#09090B] border border-[#27272A] rounded-2xl">
                        <Bot className="w-6 h-6 text-[#FFDE00] mb-2" />
                        <h4 className="text-sm font-bold text-white">Inteligência Artificial</h4>
                        <p className="text-[11px] text-[#A1A1AA] mt-1">RAG &amp; Whisper Audio</p>
                      </div>
                      <div className="p-4 bg-[#09090B] border border-[#27272A] rounded-2xl">
                        <Server className="w-6 h-6 text-[#FFDE00] mb-2" />
                        <h4 className="text-sm font-bold text-white">Cloud Computing</h4>
                        <p className="text-[11px] text-[#A1A1AA] mt-1">Uptime 99.9% Cloud</p>
                      </div>
                      <div className="p-4 bg-[#09090B] border border-[#27272A] rounded-2xl">
                        <Video className="w-6 h-6 text-[#FFDE00] mb-2" />
                        <h4 className="text-sm font-bold text-white">Redes &amp; CFTV</h4>
                        <p className="text-[11px] text-[#A1A1AA] mt-1">Suporte Físico e Remoto</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* MOMENTO 03: THE ECOSYSTEM */}
              {slide.visualType === 'DIAGRAM' && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="max-w-4xl mx-auto p-5 md:p-8 rounded-3xl bg-[#09090B] border border-[#27272A] shadow-2xl relative overflow-hidden"
                >
                  <div className="inline-block px-5 py-2 bg-[#FFDE00] text-black font-black text-xs rounded-xl mb-6 shadow-[0_0_20px_rgba(255,222,0,0.4)] tracking-widest uppercase">
                    ROOTED TECH • NÚCLEO ESTRATÉGICO DE TECNOLOGIA
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-[#18181B] border border-[#27272A]">
                      <Code className="w-8 h-8 text-[#FFDE00] mx-auto mb-2" />
                      <h4 className="text-base font-bold text-white">Desenvolvimento</h4>
                      <p className="text-xs text-[#A1A1AA] mt-1">Portal Web + CRM AMIGO + IA</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#18181B] border border-[#27272A]">
                      <TrendingUp className="w-8 h-8 text-[#FFDE00] mx-auto mb-2" />
                      <h4 className="text-base font-bold text-white">Marketing Digital</h4>
                      <p className="text-xs text-[#A1A1AA] mt-1">Google Ads + SEO + Relatórios</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#18181B] border border-[#27272A]">
                      <Server className="w-8 h-8 text-[#FFDE00] mx-auto mb-2" />
                      <h4 className="text-base font-bold text-white">Infraestrutura TI</h4>
                      <p className="text-xs text-[#A1A1AA] mt-1">Suporte + Redes + CFTV + Cloud</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-[#18181B] via-[#09090B] to-[#18181B] border border-[#FFDE00]/60 rounded-2xl text-white font-black text-lg md:text-xl tracking-wider shadow-[0_0_25px_rgba(255,222,0,0.2)]">
                    ECCO CLEANER • LIDERANÇA NACIONAL B2B
                  </div>
                </motion.div>
              )}

              {/* MOMENTO 04: THE AUDIT */}
              {slide.visualType === 'AUDIT' && (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <WebsiteAuditDemo />
                </motion.div>
              )}

              {/* MOMENTO MARKETING: THE FUNNEL */}
              {slide.visualType === 'FUNNEL' && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="max-w-5xl mx-auto mt-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Google Ads */}
                    <div className="p-4 md:p-6 bg-gradient-to-b from-[#18181B] to-[#09090B] border border-[#27272A] rounded-2xl hover:border-[#FFDE00]/50 transition-colors text-left group">
                      <div className="w-12 h-12 bg-[#FFDE00]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FFDE00] transition-colors">
                        <TrendingUp className="w-6 h-6 text-[#FFDE00] group-hover:text-black transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Google Ads B2B</h4>
                      <p className="text-[13px] text-[#A1A1AA] leading-relaxed mb-6 h-auto md:h-16">
                        Captação ativa de empresas buscando por "terceirização de limpeza" e "limpeza de condomínios".
                      </p>
                      <ul className="text-xs text-[#71717A] space-y-3 font-mono">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Configuração de Campanhas</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Otimização de Palavras-chave</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Acompanhamento de Conversões</li>
                      </ul>
                    </div>

                    {/* SEO & Conteúdo */}
                    <div className="p-4 md:p-6 bg-gradient-to-b from-[#18181B] to-[#09090B] border border-[#27272A] rounded-2xl hover:border-[#FFDE00]/50 transition-colors text-left group">
                      <div className="w-12 h-12 bg-[#FFDE00]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FFDE00] transition-colors">
                        <LineChart className="w-6 h-6 text-[#FFDE00] group-hover:text-black transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">SEO Técnico &amp; Orgânico</h4>
                      <p className="text-[13px] text-[#A1A1AA] leading-relaxed mb-6 h-auto md:h-16">
                        Otimização contínua para o Google orgânico e posicionamento estratégico do site.
                      </p>
                      <ul className="text-xs text-[#71717A] space-y-3 font-mono">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Auditoria Técnica Contínua</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Textos Focados em Conversão</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Otimização de Velocidade (LCP)</li>
                      </ul>
                    </div>

                    {/* Analytics & Relatórios */}
                    <div className="p-4 md:p-6 bg-gradient-to-b from-[#18181B] to-[#09090B] border border-[#27272A] rounded-2xl hover:border-[#FFDE00]/50 transition-colors text-left group">
                      <div className="w-12 h-12 bg-[#FFDE00]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FFDE00] transition-colors">
                        <PieChart className="w-6 h-6 text-[#FFDE00] group-hover:text-black transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Analytics &amp; Dashboards</h4>
                      <p className="text-[13px] text-[#A1A1AA] leading-relaxed mb-6 h-auto md:h-16">
                        Transparência total dos resultados. Você sabe exatamente o custo de cada lead gerado e o Retorno.
                      </p>
                      <ul className="text-xs text-[#71717A] space-y-3 font-mono">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Relatórios Mensais</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Custo por Aquisição (CPA)</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Monitoramento de Metas de Lead</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* MOMENTO TI SUPORTE: TRANSPARENCY */}
              {slide.visualType === 'TRANSPARENCY' && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="max-w-5xl mx-auto mt-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Suporte Remoto e Físico */}
                    <div className="p-4 md:p-6 bg-gradient-to-b from-[#18181B] to-[#09090B] border border-[#27272A] rounded-2xl hover:border-[#FFDE00]/50 transition-colors text-left group">
                      <div className="w-12 h-12 bg-[#FFDE00]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FFDE00] transition-colors">
                        <Headset className="w-6 h-6 text-[#FFDE00] group-hover:text-black transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Suporte &amp; SLA 24h</h4>
                      <p className="text-[13px] text-[#A1A1AA] leading-relaxed mb-6 h-auto md:h-16">
                        Manutenção contínua para evitar paradas. Atendimento remoto e físico sempre que você precisar.
                      </p>
                      <ul className="text-xs text-[#71717A] space-y-3 font-mono">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Suporte em até 24 Horas</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Acesso Remoto Imediato</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Visitas Presenciais Inclusas</li>
                      </ul>
                    </div>

                    {/* Câmeras, CFTV, Rede */}
                    <div className="p-4 md:p-6 bg-gradient-to-b from-[#18181B] to-[#09090B] border border-[#27272A] rounded-2xl hover:border-[#FFDE00]/50 transition-colors text-left group">
                      <div className="w-12 h-12 bg-[#FFDE00]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FFDE00] transition-colors">
                        <Camera className="w-6 h-6 text-[#FFDE00] group-hover:text-black transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">CFTV, Câmeras &amp; Wi-Fi</h4>
                      <p className="text-[13px] text-[#A1A1AA] leading-relaxed mb-6 h-auto md:h-16">
                        Se a câmera parar ou o alarme disparar, a manutenção e mão de obra de troca está garantida.
                      </p>
                      <ul className="text-xs text-[#71717A] space-y-3 font-mono">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Manutenção de Câmeras/DVR</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Verificação de Alarmes</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Configuração de Redes/Wi-Fi</li>
                      </ul>
                    </div>

                    {/* Tudo em 1 só Lugar */}
                    <div className="p-4 md:p-6 bg-gradient-to-b from-[#18181B] to-[#09090B] border border-[#27272A] rounded-2xl hover:border-[#FFDE00]/50 transition-colors text-left group">
                      <div className="w-12 h-12 bg-[#FFDE00]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FFDE00] transition-colors">
                        <MonitorSmartphone className="w-6 h-6 text-[#FFDE00] group-hover:text-black transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Centralização de TI</h4>
                      <p className="text-[13px] text-[#A1A1AA] leading-relaxed mb-6 h-auto md:h-16">
                        Você para de pagar prestadores de serviço por fora. A mão de obra é nossa (hardware à parte).
                      </p>
                      <ul className="text-xs text-[#71717A] space-y-3 font-mono">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Fim dos Custos Surpresas de M.O.</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Peças/Equipamentos orçados à parte</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" /> Tudo em um único Contrato Mensal</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
              {/* MOMENTO RESUMO REGRAS: SUMMARY */}
              {slide.visualType === 'SUMMARY' && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="max-w-5xl mx-auto mt-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Incluso na Mensalidade */}
                    <div className="p-4 md:p-6 bg-[#09090B] border border-[#27272A] rounded-2xl hover:border-[#FFDE00]/50 transition-colors text-left flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#27272A]">
                        <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </div>
                        <h4 className="text-lg font-bold text-white">Incluso na Mensalidade</h4>
                      </div>
                      <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4 flex-grow">
                        Toda a inteligência técnica, monitoramento e atendimento contínuo.
                      </p>
                      <ul className="text-[13px] text-[#71717A] space-y-3 font-medium">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Mão de Obra de TI</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Acesso e Suporte Remoto</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Visitas Técnicas Preventivas</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Consultoria em Compras</li>
                      </ul>
                    </div>

                    {/* Faturado à Parte */}
                    <div className="p-4 md:p-6 bg-[#09090B] border border-[#27272A] rounded-2xl hover:border-[#FFDE00]/50 transition-colors text-left flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#27272A]">
                        <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-orange-500" />
                        </div>
                        <h4 className="text-lg font-bold text-white">Faturado Separadamente</h4>
                      </div>
                      <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4 flex-grow">
                        Ativos físicos, licenças externas e ampliações de infraestrutura.
                      </p>
                      <ul className="text-[13px] text-[#71717A] space-y-3 font-medium">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Aquisição de Computadores</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Novas Câmeras e DVRs</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Softwares de Terceiros</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Peças de Reposição (HD, Fonte)</li>
                      </ul>
                    </div>

                    {/* Processo de Aprovação */}
                    <div className="p-4 md:p-6 bg-gradient-to-br from-[#18181B] to-[#09090B] border border-[#FFDE00]/40 rounded-2xl hover:border-[#FFDE00] transition-colors text-left flex flex-col h-full relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFDE00]/5 rounded-bl-full pointer-events-none group-hover:bg-[#FFDE00]/10 transition-colors" />
                      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#27272A]/60 relative z-10">
                        <div className="w-10 h-10 bg-[#FFDE00]/20 rounded-full flex items-center justify-center">
                          <FileText className="w-5 h-5 text-[#FFDE00]" />
                        </div>
                        <h4 className="text-lg font-bold text-[#FFDE00]">Regra de Transparência</h4>
                      </div>
                      <p className="text-sm text-[#D4D4D8] leading-relaxed mb-4 relative z-10 font-light">
                        "Nenhuma peça ou equipamento é comprado sem a aprovação formal da diretoria."
                      </p>
                      <div className="mt-auto bg-[#FFDE00]/10 border border-[#FFDE00]/20 p-3 rounded-xl flex gap-3 relative z-10">
                        <AlertTriangle className="w-5 h-5 text-[#FFDE00] shrink-0" />
                        <p className="text-[11px] text-[#D4D4D8] leading-snug">
                          A Rooted faz os orçamentos (mínimo 3 cotações) e apresenta para validação. A decisão final é 100% da Ecco Cleaner.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* MOMENTO TIMELINE: ROADMAP 8 PASSOS */}
              {slide.visualType === 'TIMELINE' && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="max-w-5xl mx-auto mt-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: FileText, title: '1. Assinatura', desc: 'Contrato e Setup Inicial' },
                      { icon: Search, title: '2. Planejamento', desc: 'Definição de Escopo e Prazos' },
                      { icon: Sparkles, title: '3. Design', desc: 'Aprovação de Layouts (Figma)' },
                      { icon: Code, title: '4. Desenvolvimento', desc: 'Codificação do Novo Site' },
                      { icon: CheckCircle2, title: '5. Testes', desc: 'Auditoria e QA Completo' },
                      { icon: Users, title: '6. Treinamento', desc: 'Capacitação da Equipe' },
                      { icon: Zap, title: '7. Go Live', desc: 'Lançamento Oficial' },
                      { icon: Headset, title: '8. Suporte Contínuo', desc: 'Início da Gestão Mensal' },
                    ].map((step, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + (idx * 0.1) }}
                        className="p-5 bg-[#09090B] border border-[#27272A] rounded-2xl hover:border-[#FFDE00]/50 transition-all flex flex-col items-center text-center group relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFDE00]/5 rounded-bl-full pointer-events-none group-hover:bg-[#FFDE00]/10 transition-colors" />
                        <div className="w-12 h-12 rounded-full bg-[#18181B] border border-[#27272A] group-hover:border-[#FFDE00] flex items-center justify-center mb-3 transition-colors">
                          <step.icon className="w-5 h-5 text-[#A1A1AA] group-hover:text-[#FFDE00] transition-colors" />
                        </div>
                        <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                        <p className="text-[11px] text-[#71717A] group-hover:text-[#D4D4D8] transition-colors leading-snug">
                          {step.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-gradient-to-r from-[#FFDE00]/10 via-[#FFDE00]/5 to-transparent border-l-4 border-[#FFDE00] rounded-r-xl flex items-center gap-4">
                    <Shield className="w-6 h-6 text-[#FFDE00]" />
                    <p className="text-sm text-[#D4D4D8] font-light">
                      Cada etapa possui <strong className="text-white font-medium">marcos de validação definidos</strong> para garantir alinhamento total, cumprimento rigoroso de prazos e eliminar a ansiedade da equipe.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* MOMENTO 05: NEW SITE PREVIEW (MP4 VIDEO) */}
              {slide.visualType === 'NEW_SITE_PREVIEW' && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
                  <NewSitePreviewDemo />
                </motion.div>
              )}

              {/* MOMENTO 08: CRM INBOX */}
              {slide.visualType === 'CRM_INBOX' && (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <CRMInteractiveDemo initialTab="inbox" />
                </motion.div>
              )}

              {/* MOMENTO 09: CRM RAG */}
              {slide.visualType === 'CRM_RAG' && (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <CRMInteractiveDemo initialTab="rag" />
                </motion.div>
              )}

              {/* MOMENTO 10: CRM CAMPAIGN */}
              {slide.visualType === 'CRM_CAMPAIGN' && (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <CRMInteractiveDemo initialTab="campaigns" />
                </motion.div>
              )}

              {/* MOMENTO 11: WHY INVEST? */}
              {slide.visualType === 'GRID' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
                >
                  {[
                    { label: 'Organização', text: 'Centralização de atendimento e dados no CRM.' },
                    { label: 'Automação IA', text: 'Respostas 24/7 sem atendentes de madrugada.' },
                    { label: 'Vendas B2B', text: 'Captação ativa de contratos no Google Ads.' },
                    { label: 'Redução Manual', text: 'Transcrição de áudios via Whisper e disparos.' }
                  ].map((p, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-gradient-to-b from-[#18181B] to-[#09090B] border border-[#27272A] text-left hover:border-[#FFDE00] transition-all">
                      <CheckCircle2 className="w-7 h-7 text-[#FFDE00] mb-3" />
                      <h4 className="text-lg font-bold text-white mb-1">{p.label}</h4>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">{p.text}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* MOMENTO 18: INVESTMENT 01 - DEV */}
              {slide.visualType === 'INVESTMENT_DEV' && (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-4xl mx-auto mt-4">
                  <div className="bg-[#09090B] border border-[#27272A] rounded-3xl p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFDE00]/5 rounded-bl-full pointer-events-none group-hover:bg-[#FFDE00]/10 transition-colors" />
                    
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-8 border-b border-[#27272A] relative z-10">
                      <div className="max-w-md">
                        <h3 className="text-3xl font-black text-white mb-2">Desenvolvimento Completo</h3>
                        <p className="text-[#A1A1AA] text-lg">Portal Web + CRM Amigo + Integrações IA</p>
                      </div>
                      <div className="mt-6 md:mt-0 p-6 rounded-2xl bg-gradient-to-br from-[#18181B] to-[#09090B] border border-[#FFDE00]/20 shadow-[0_0_30px_rgba(255,222,0,0.05)] w-full md:w-auto">
                        <div className="flex justify-between items-center mb-2 gap-8">
                          <p className="text-xs text-[#FFDE00] font-black uppercase tracking-widest">Pagamento Único</p>
                          <p className="text-[10px] text-[#71717A] uppercase tracking-wider bg-[#27272A]/50 px-2 py-0.5 rounded">Via Boleto</p>
                        </div>
                        <h2 className="text-5xl font-black text-white tracking-tighter mb-4">
                          R$ 15<span className="text-3xl text-[#71717A]">.000</span>
                        </h2>
                        
                        <div className="flex items-center justify-end gap-2 text-sm text-[#A1A1AA]">
                          <span className="bg-[#27272A] px-2.5 py-1 rounded text-white font-medium">Entrada de 5k</span>
                          <span className="text-[#71717A]">+</span>
                          <span className="bg-[#FFDE00]/10 border border-[#FFDE00]/20 px-2.5 py-1 rounded text-[#FFDE00] font-bold">5x de R$ 2.000</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 relative z-10 mb-8">
                      {[
                        { icon: Code, label: 'Portal Web' },
                        { icon: Bot, label: 'CRM IA' },
                        { icon: MessageSquare, label: 'WhatsApp Integrado' },
                        { icon: Sparkles, label: 'OpenAI / Whisper' },
                        { icon: LayoutDashboard, label: 'Painéis Admin' },
                        { icon: Server, label: 'Banco de Dados' },
                        { icon: Layers, label: 'Infra Inicial' },
                        { icon: Shield, label: 'Segurança' }
                      ].map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + (i * 0.1) }}
                          className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#FFDE00]/50 transition-colors"
                        >
                          <item.icon className="w-6 h-6 text-[#FFDE00]" />
                          <span className="text-xs font-medium text-[#D4D4D8]">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-[#FFDE00]/10 via-[#FFDE00]/5 to-transparent border-l-4 border-[#FFDE00] p-4 rounded-r-xl relative z-10 flex items-start gap-4">
                      <Sparkles className="w-6 h-6 text-[#FFDE00] shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-bold mb-1">Investimento único. Projeto 100% seu.</h4>
                        <p className="text-sm text-[#D4D4D8]">Desenvolvido sob medida para a Ecco Cleaner. O código-fonte, os dados e a plataforma são propriedade definitiva da sua empresa.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* MOMENTO 19: INVESTMENT 02 - RECURRING */}
              {slide.visualType === 'INVESTMENT_RECURRING' && (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-6xl mx-auto mt-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Infra */}
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="bg-[#09090B] border border-[#27272A] rounded-3xl p-6 flex flex-col hover:border-[#FFDE00]/30 transition-colors">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                          <Server className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">Infraestrutura</h3>
                          <p className="text-xs text-[#A1A1AA]">Sustentação do Portal e CRM</p>
                        </div>
                      </div>
                      <div className="mb-6 pb-6 border-b border-[#27272A] relative">
                        <div className="absolute -top-3 right-0 bg-blue-500/20 text-blue-400 text-[9px] font-bold px-2 py-0.5 rounded border border-blue-500/30 uppercase tracking-wider">
                          100% Isento com TI
                        </div>
                        <h2 className="text-3xl font-black text-white">
                          R$ 500<span className="text-sm text-[#71717A] font-normal">/mês</span>
                        </h2>
                        <p className="text-[11px] text-[#A1A1AA] mt-1 font-medium">Avulso sem contrato de TI</p>
                      </div>
                      <ul className="space-y-3 mb-6 flex-grow">
                        {['Hospedagem Cloud', 'Backup Diário', 'SSL & CDN', 'Monitoramento 24/7', 'Banco de Dados', 'Blindagem de Segurança'].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-[#D4D4D8]">
                            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Marketing */}
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="bg-[#09090B] border border-[#27272A] rounded-3xl p-6 flex flex-col hover:border-[#FFDE00]/30 transition-colors">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#FFDE00]/10 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-[#FFDE00]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">Marketing Digital</h3>
                          <p className="text-xs text-[#A1A1AA]">Gestão de Tráfego e Captação</p>
                        </div>
                      </div>
                      <div className="mb-6 pb-6 border-b border-[#27272A]">
                        <h2 className="text-3xl font-black text-white">
                          R$ 2.500<span className="text-sm text-[#71717A] font-normal">/mês</span>
                        </h2>
                      </div>
                      <ul className="space-y-3 mb-6 flex-grow">
                        {['Google Ads B2B', 'Otimização SEO', 'Landing Pages', 'Gestão de Campanhas', 'Relatórios Mensais', 'Criação de Criativos'].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-[#D4D4D8]">
                            <CheckCircle2 className="w-4 h-4 text-[#FFDE00] shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Suporte TI */}
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="bg-[#09090B] border border-[#27272A] rounded-3xl p-6 flex flex-col hover:border-[#FFDE00]/30 transition-colors">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                          <Headset className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">Suporte TI & Redes</h3>
                          <p className="text-xs text-[#A1A1AA]">Sustentação Operacional</p>
                        </div>
                      </div>
                      <div className="mb-6 pb-6 border-b border-[#27272A] relative">
                        <div className="absolute -top-3 right-0 bg-green-500/20 text-green-400 text-[9px] font-bold px-2 py-0.5 rounded border border-green-500/30 uppercase tracking-wider">
                          Combo Vantagem
                        </div>
                        <h2 className="text-3xl font-black text-white">
                          R$ 1.000<span className="text-sm text-[#71717A] font-normal">/mês</span>
                        </h2>
                        <p className="text-[11px] text-green-400 mt-1 font-medium">Inclui a Infraestrutura de R$ 500 (Grátis)</p>
                      </div>
                      <ul className="space-y-3 mb-6 flex-grow">
                        {['Atendimento Remoto/Local', 'Redes & Wi-Fi', 'Servidores e PCs', 'Manutenção CFTV/Câmeras', 'Manutenção Preventiva', 'Monitoramento Ativo'].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-[#D4D4D8]">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Cálculo de Economia */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-8 bg-gradient-to-r from-[#FFDE00]/10 via-[#09090B] to-transparent border border-[#FFDE00]/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#FFDE00]" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-5 h-5 text-[#FFDE00]" />
                        <h3 className="text-lg font-bold text-white">Comparativo: Mercado vs Centralização Rooted</h3>
                      </div>
                      <p className="text-sm text-[#D4D4D8] leading-relaxed">
                        Se contratados separadamente, marketing e suporte de TI teriam um custo médio de <strong className="text-red-400 line-through">R$ 7.500/mês</strong>. 
                        <br/><br/>
                        <strong className="text-white">O Grande Diferencial:</strong> Ao fechar o contrato de Suporte de TI, você ganha <strong>100% de isenção na Infraestrutura (R$ 500/mês)</strong>. Isso significa que hospedagem, backup diário, monitoramento e <strong className="text-[#FFDE00]">blindagem anti-hacker</strong> entram como <strong>cortesia exclusiva</strong>!
                      </p>
                    </div>
                    <div className="flex flex-col items-center md:items-end shrink-0 bg-[#09090B] p-4 rounded-xl border border-[#27272A] shadow-[0_0_15px_rgba(34,197,94,0.05)]">
                      <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] mb-1">Economia Direta</span>
                      <div className="text-3xl font-black text-green-400">R$ 4.000<span className="text-sm font-normal text-green-500/70">/mês</span></div>
                      <span className="text-[11px] text-green-500 font-bold mt-2 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20">Economia de R$ 48.000 ao ano!</span>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* MOMENTO 20: INVESTMENT SUMMARY */}
              {slide.visualType === 'INVESTMENT_SUMMARY' && (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-6xl mx-auto mt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { title: 'Desenvolvimento', value: 'R$ 15K', subtitle: 'Entrada 5k + 5x de 2k', icon: Code, color: 'text-white' },
                      { title: 'Infraestrutura', value: 'R$ 500', subtitle: 'Isento com TI', icon: Server, color: 'text-blue-500' },
                      { title: 'Marketing Digital', value: 'R$ 2.500', subtitle: 'Recorrente', icon: TrendingUp, color: 'text-[#FFDE00]' },
                      { title: 'Suporte TI', value: 'R$ 1.000', subtitle: 'Inclui Infraestrutura', icon: Headset, color: 'text-green-500' }
                    ].map((block, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + (i * 0.1) }} className="bg-[#09090B] border border-[#27272A] p-5 rounded-2xl flex flex-col items-center text-center">
                        <block.icon className={`w-8 h-8 mb-3 ${block.color}`} />
                        <h4 className="text-sm text-[#A1A1AA] font-medium mb-1">{block.title}</h4>
                        <h2 className={`text-2xl font-black ${block.color}`}>{block.value}</h2>
                        <span className="text-[10px] uppercase tracking-wider text-[#71717A] mt-1">{block.subtitle}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Economia e Benefícios */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-gradient-to-br from-[#18181B] to-[#09090B] border border-[#FFDE00]/30 rounded-3xl p-8 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#FFDE00]/5 blur-[120px] rounded-full pointer-events-none" />
                    
                    <div className="flex items-center justify-center gap-3 mb-8 relative z-10">
                      <Zap className="w-6 h-6 text-[#FFDE00]" />
                      <h3 className="text-xl font-bold text-white">Economia e Benefícios Reais</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative z-10 mb-8">
                      {[
                        'Fim de Múltiplos Fornecedores',
                        'Centralização Total de Serviços',
                        'Automação de Processos e Vendas',
                        'Atendimento Unificado e Ágil',
                        'Economia de R$ 500/mês em Infra com TI',
                        'Plataforma Preparada para Escalar'
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#FFDE00]/10 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE00]" />
                          </div>
                          <span className="text-sm text-[#D4D4D8] font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center border-t border-[#27272A] pt-6 relative z-10">
                      <p className="text-lg md:text-xl text-[#FFDE00] font-light leading-relaxed max-w-4xl mx-auto">
                        "Mais do que desenvolver um portal, a Rooted entrega uma plataforma completa para acelerar o crescimento da empresa com tecnologia, automação e suporte especializado."
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* MOMENTO 19: THE PARTNERSHIP SEAL & FINALE */}
              {slide.visualType === 'CLOSING' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 }}
                  className="p-6 md:p-10 rounded-3xl bg-gradient-to-b from-[#18181B] via-[#09090B] to-[#000000] border border-[#FFDE00]/50 max-w-4xl mx-auto shadow-[0_0_50px_rgba(255,222,0,0.25)] text-center relative overflow-hidden"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#FFDE00] to-[#EAB308] p-[2px] shadow-[0_0_60px_rgba(255,222,0,0.5)] transform transition-all duration-500 relative group"
                  >
                    <div className="w-full h-full bg-[#000000] rounded-full flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#FFDE00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img src="/img/4.png" alt="Rooted Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(255,222,0,0.4)] relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </motion.div>

                  <span className="px-4 py-1.5 bg-[#FFDE00]/10 text-[#FFDE00] border border-[#FFDE00]/30 rounded-full text-xs font-black uppercase tracking-widest inline-block mb-4">
                    COMPROMISSO DE PARCERIA ESTRATÉGICA
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight max-w-2xl mx-auto mb-4">
                    Pronto para acelerar os resultados da Ecco Cleaner?
                  </h2>

                  <p className="text-sm text-[#A1A1AA] mb-8 max-w-xl mx-auto leading-relaxed">
                    Clique no botão abaixo para falar diretamente com nosso time, tirar suas últimas dúvidas e aprovar o cronograma oficial de implementação.
                  </p>

                  <a
                    href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20aprovar%20a%20proposta%20comercial%20da%20Ecco%20Cleaner."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFDE00] text-black font-black text-lg rounded-2xl shadow-[0_0_40px_rgba(255,222,0,0.5)] hover:bg-[#ffe633] hover:scale-105 transition-all duration-300"
                  >
                    {slide.ctaText || 'Aprovar Proposta e Iniciar Projeto'}
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
