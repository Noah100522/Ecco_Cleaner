'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, AlertTriangle, Zap, CheckCircle2, Lock, ArrowRight, Eye, Smartphone, AlertOctagon, Terminal } from 'lucide-react';

export const WebsiteAuditDemo: React.FC = () => {
  const [selectedErrorId, setSelectedErrorId] = useState<number>(1);

  const errorsList = [
    {
      id: 1,
      title: 'Desajuste Mobile & Quebra Visual',
      badge: 'FALHA DE UX / RESPONSIVIDADE',
      severity: 'ALTO IMPACTO',
      image: '/img/ERRO_01 .png',
      description: 'Layout quebrado em dispositivos móveis. Elementos fora do esquadro e botões ilegíveis para 68% dos compradores B2B.',
      vulnerabilityDetail: 'Desalinhamento de CSS no WordPress. Textos cortados e falha de viewport em iPhones e Androids.',
      solution: 'Layout 100% fluido em Next.js e Tailwind CSS sob medida com adaptação perfeita para telas corporativas.'
    },
    {
      id: 2,
      title: 'Vulnerabilidade de Segurança & Botões',
      badge: 'FALHA DE SEGURANÇA CRÍTICA',
      severity: 'RISCO EXPOSIÇÃO',
      image: '/img/ERRO_02.png',
      description: 'Botões e formulários sem validação sanitizada. Brechas de segurança que expõem credenciais e dados do site.',
      vulnerabilityDetail: 'Scripts de terceiros desatualizados permitindo injeção de código e vazamento de dados de formulário.',
      solution: 'Sanitização nativa em TypeScript, formulários blindados e imunidade total contra invasões comuns.'
    },
    {
      id: 3,
      title: 'Sobrecarga de Plugins & Lentidão',
      badge: 'FALHA DE PERFORMANCE SEO',
      severity: 'PENALIZADO NO GOOGLE',
      image: '/img/ERRO_03.png',
      description: 'Conflito de dezenas de plugins genéricos pesados, arrastando o tempo de carregamento e afundando o ranking.',
      vulnerabilityDetail: 'WordPress Frankenstein com plugins desatualizados consumindo recursos excessivos de CPU no servidor.',
      solution: 'Engenharia sob medida sem plugins. Carregamento instantâneo em sub-segundo e Nota 100 no Google.'
    },
    {
      id: 4,
      title: 'Ausência de Funil B2B & WhatsApp',
      badge: 'PERDA DIRETA DE LEADS',
      severity: 'QUEDA DE CONVERSÃO',
      image: '/img/ERRO_04.png',
      description: 'Falta de automação de vendas. O cliente entra no site, não encontra botão direto e abandona sem fazer cotação.',
      vulnerabilityDetail: 'Formulários obsoletos sem integração direta ao WhatsApp da equipe comercial.',
      solution: 'Botões Direct-to-WhatsApp integrados ao CRM AMIGO com captura automática e resposta 24/7 via IA.'
    }
  ];

  const currentError = errorsList.find((e) => e.id === selectedErrorId) || errorsList[0];

  return (
    <div className="w-full max-w-6xl mx-auto py-4 px-2 text-white flex flex-col items-center">
      {/* Top Selector Bar (Apple Keynote Pills) */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-[#09090B] p-2 rounded-2xl border border-[#27272A] shadow-2xl">
        {errorsList.map((err) => (
          <button
            key={err.id}
            onClick={() => setSelectedErrorId(err.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${
              selectedErrorId === err.id
                ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] scale-105'
                : 'bg-[#18181B] text-[#A1A1AA] hover:text-white hover:bg-[#27272A]'
            }`}
          >
            <AlertOctagon className="w-3.5 h-3.5 text-red-400" />
            <span>Erro Prova #{err.id}</span>
          </button>
        ))}
      </div>

      {/* Main Cinema Audit Stage */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-b from-[#18181B] via-[#09090B] to-[#000000] border border-red-900/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(239,68,68,0.15)] relative overflow-hidden">
        {/* Background Laser Beam Effect */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-500/10 blur-[140px] rounded-full pointer-events-none" />

        {/* LEFT COLUMN: REAL SCREENSHOT PROOF WITH RADAR SCANNER */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          <div className="relative group w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden border-2 border-red-500/60 shadow-[0_0_40px_rgba(239,68,68,0.3)] bg-black">
            {/* Live Scan Radar Line Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 via-transparent to-transparent pointer-events-none z-20 animate-pulse" />

            {/* Glowing Red Vulnerability Hotspot Badge */}
            <div className="absolute top-3 left-3 z-30 flex items-center gap-2 bg-red-600/90 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              PROVA REAL • VULNERABILIDADE
            </div>

            {/* Screenshot Image Frame */}
            <div className="relative max-h-[380px] overflow-y-auto custom-scrollbar">
              <img
                src={currentError.image}
                alt={currentError.title}
                className="w-full object-cover object-top filter contrast-105"
              />
            </div>
          </div>
          <span className="text-[10px] text-red-400 font-mono mt-3 flex items-center gap-1">
            <Eye className="w-3 h-3" /> Captura Real do Site WordPress da Ecco Cleaner
          </span>
        </div>

        {/* RIGHT COLUMN: TECHNICAL DIAGNOSIS & ROOTED SOLUTION */}
        <div className="lg:col-span-6 text-left space-y-5">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/40 rounded-full text-xs font-black uppercase tracking-widest">
              {currentError.badge}
            </span>
            <span className="text-xs font-bold text-red-300 font-mono">
              {currentError.severity}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            {currentError.title}
          </h3>

          <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
            {currentError.description}
          </p>

          <div className="p-4 bg-red-950/30 border border-red-900/60 rounded-2xl text-xs text-red-200 font-mono space-y-1">
            <span className="text-red-400 font-bold uppercase block mb-1 flex items-center gap-1.5">
              <Terminal className="w-4 h-4" /> Detalhe da Vulnerabilidade Detectada
            </span>
            <p className="italic">{currentError.vulnerabilityDetail}</p>
          </div>

          <div className="p-5 bg-gradient-to-r from-[#18181B] to-[#09090B] border border-[#FFDE00]/60 rounded-2xl space-y-2 shadow-[0_0_20px_rgba(255,222,0,0.15)]">
            <span className="text-xs font-extrabold text-[#FFDE00] uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FFDE00]" /> Solução Definitiva Rooted Tech
            </span>
            <p className="text-xs sm:text-sm text-white font-medium">
              {currentError.solution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
