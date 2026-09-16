'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, CheckCircle2, DollarSign, Calculator, ChevronRight, Sparkles, Layers, Server, Code, Bot, Send, TrendingUp, Lock } from 'lucide-react';
import { InvestmentState } from './types';

export const InvestmentCalculator: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  // Infra structure custom state
  const [investment, setInvestment] = useState<InvestmentState>({
    infraDevOpsTotal: 0, // R$ 0,00 por padrão
    devWebsiteCRM: 15000, // R$ 15.000,00 fixo
    mktMensal: 2500, // R$ 2.500,00/mês
    suporteTiMensal: 1000 // R$ 1.000,00/mês
  });

  const [infraItems, setInfraItems] = useState([
    { id: 'cloud', label: 'Hospedagem Cloud Vercel/AWS', price: 350, selected: false },
    { id: 'ssl', label: 'Certificado SSL Wildcard & CDN', price: 150, selected: false },
    { id: 'database', label: 'Banco PostgreSQL Neon Serverless', price: 250, selected: false },
    { id: 'backup', label: 'Backup Diário Automatizado', price: 200, selected: false }
  ]);

  // We removed the setTimeout sequence

  const toggleInfra = (id: string) => {
    const updated = infraItems.map(item => 
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setInfraItems(updated);
    const newTotal = updated.filter(i => i.selected).reduce((acc, curr) => acc + curr.price, 0);
    setInvestment(prev => ({ ...prev, infraDevOpsTotal: newTotal }));
  };

  const investmentModules = [
    { icon: Code, title: 'Portal Web Next.js 16', desc: 'Engenharia de Alta Conversão' },
    { icon: Bot, title: 'CRM AMIGO (WhatsApp Hub)', desc: 'Central de Atendimento 3 Painéis' },
    { icon: Sparkles, title: 'IA & OpenAI Whisper', desc: 'Transcrição e RAG nos Manuais' },
    { icon: Send, title: 'Disparos via Meta API', desc: 'Prospecção Ativa Segura' },
    { icon: TrendingUp, title: 'Marketing B2B', desc: 'Google Ads & SEO Absoluto' },
    { icon: Server, title: 'Infra TI & Cloud', desc: 'Suporte Físico e Remoto' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center select-none py-4">
      {/* STEP-BY-STEP APPLE REVEAL OF THE R$ 15.000 VALUE */}
      <div className="flex flex-col items-center justify-center min-h-[180px] mb-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FFDE00]/15 blur-[160px] rounded-full pointer-events-none" />

        <span className="px-4 py-1 text-xs font-black bg-[#FFDE00] text-black rounded-full uppercase tracking-widest mb-3 shadow-[0_0_20px_rgba(255,222,0,0.4)]">
          {isRevealed ? 'INVESTIMENTO EM DESENVOLVIMENTO' : 'ESCOPO DO PROJETO'}
        </span>

        {isRevealed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFDE00] via-white to-[#FFDE00] tracking-tighter drop-shadow-[0_0_50px_rgba(255,222,0,0.6)]"
          >
            R$ 15.000<span className="text-4xl sm:text-6xl text-[#FFDE00]">,00</span>
          </motion.div>
        ) : (
          <button 
            onClick={() => setIsRevealed(true)}
            className="mt-6 px-8 py-4 bg-[#FFDE00] hover:bg-[#ffe633] text-black font-black rounded-full text-lg shadow-[0_0_30px_rgba(255,222,0,0.3)] transition-all transform hover:scale-105"
          >
            Apresentar Proposta Comercial
          </button>
        )}
      </div>

      {/* REVEAL STEP 4: ORBITING INVESTMENT MODULES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {investmentModules.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="p-3 bg-[#09090B] border border-[#27272A] hover:border-[#FFDE00]/60 rounded-2xl text-left transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col justify-between"
                >
                  <Icon className="w-5 h-5 text-[#FFDE00] mb-2" />
                  <div>
                    <h5 className="text-xs font-bold text-white leading-tight">{m.title}</h5>
                    <p className="text-[10px] text-[#A1A1AA] mt-0.5">{m.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4 FINANCIAL PEDESTALS (CUSTOMIZABLE INFRASTRUCTURE) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
            {/* Pedestal 1: Desenvolvimento */}
            <div className="p-5 bg-gradient-to-b from-[#18181B] to-[#09090B] border border-[#FFDE00]/50 rounded-2xl shadow-[0_0_30px_rgba(255,222,0,0.15)] flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-0.5 text-[9px] font-black bg-[#FFDE00] text-black rounded-full uppercase tracking-wider block w-fit mb-2">
                  PEDESTAL 01 • ÚNICO
                </span>
                <h4 className="text-sm font-bold text-white">Desenvolvimento Portal &amp; CRM</h4>
                <p className="text-[11px] text-[#A1A1AA] mt-1">Portal Web Next.js + CRM AMIGO com IA RAG &amp; Whisper</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#27272A]">
                {isRevealed ? (
                  <>
                    <span className="text-xl font-black text-[#FFDE00]">R$ 15.000,00</span>
                    <span className="text-[10px] text-[#A1A1AA] block">Parcelamento em até 3x</span>
                  </>
                ) : (
                  <>
                    <span className="text-xl font-black text-[#A1A1AA]">Incluso no Projeto</span>
                    <span className="text-[10px] text-[#71717A] block">Escopo Principal</span>
                  </>
                )}
              </div>
            </div>

            {/* Pedestal 2: Cotação de Infraestrutura */}
            <div className="p-5 bg-[#09090B] border border-[#27272A] rounded-2xl flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-0.5 text-[9px] font-black bg-[#18181B] text-[#FFDE00] border border-[#FFDE00]/30 rounded-full uppercase tracking-wider block w-fit mb-2">
                  PEDESTAL 02 • COTAÇÃO
                </span>
                <h4 className="text-sm font-bold text-white mb-2">Infraestrutura &amp; DevOps</h4>
                
                <div className="space-y-1.5 text-[11px]">
                  {infraItems.map(item => (
                    <label key={item.id} className="flex items-center gap-2 cursor-pointer text-[#D4D4D8]">
                      <input
                        type="checkbox"
                        checked={item.selected}
                        onChange={() => toggleInfra(item.id)}
                        className="rounded border-[#27272A] bg-[#18181B] text-[#FFDE00] focus:ring-0"
                      />
                      <span className="flex-1 truncate">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#27272A]">
                {isRevealed ? (
                  <>
                    <span className="text-xl font-black text-white">R$ {investment.infraDevOpsTotal.toLocaleString('pt-BR')},00</span>
                    <span className="text-[10px] text-[#A1A1AA] block">Itemizável conforme demanda</span>
                  </>
                ) : (
                  <>
                    <span className="text-xl font-black text-[#A1A1AA]">Sob Demanda</span>
                    <span className="text-[10px] text-[#71717A] block">Itens selecionáveis</span>
                  </>
                )}
              </div>
            </div>

            {/* Pedestal 3: Marketing Digital */}
            <div className="p-5 bg-[#09090B] border border-[#27272A] rounded-2xl flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-0.5 text-[9px] font-black bg-[#18181B] text-white border border-[#27272A] rounded-full uppercase tracking-wider block w-fit mb-2">
                  PEDESTAL 03 • MENSAL
                </span>
                <h4 className="text-sm font-bold text-white">Marketing B2B &amp; Tráfego</h4>
                <p className="text-[11px] text-[#A1A1AA] mt-1">Gestão de Google Ads + Otimização SEO + Dashboards</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#27272A]">
                {isRevealed ? (
                  <>
                    <span className="text-xl font-black text-white">R$ 2.500,00<span className="text-xs text-[#A1A1AA]">/mês</span></span>
                    <span className="text-[10px] text-[#A1A1AA] block">Verba de anúncios à parte</span>
                  </>
                ) : (
                  <>
                    <span className="text-xl font-black text-[#A1A1AA]">Mensal</span>
                    <span className="text-[10px] text-[#71717A] block">Opcional</span>
                  </>
                )}
              </div>
            </div>

            {/* Pedestal 4: Suporte TI & Cloud */}
            <div className="p-5 bg-[#09090B] border border-[#27272A] rounded-2xl flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-0.5 text-[9px] font-black bg-[#18181B] text-white border border-[#27272A] rounded-full uppercase tracking-wider block w-fit mb-2">
                  PEDESTAL 04 • MENSAL
                </span>
                <h4 className="text-sm font-bold text-white">Suporte TI &amp; Manutenção</h4>
                <p className="text-[11px] text-[#A1A1AA] mt-1">Manutenção remota + Suporte físico a Redes/CFTV</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#27272A]">
                {isRevealed ? (
                  <>
                    <span className="text-xl font-black text-white">R$ 1.000,00<span className="text-xs text-[#A1A1AA]">/mês</span></span>
                    <span className="text-[10px] text-[#A1A1AA] block">Atendimento prioritário 24/7</span>
                  </>
                ) : (
                  <>
                    <span className="text-xl font-black text-[#A1A1AA]">Mensal</span>
                    <span className="text-[10px] text-[#71717A] block">Opcional</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
    </div>
  );
};
