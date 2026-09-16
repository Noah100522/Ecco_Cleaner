'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, Bot, Send, Mic, FileText, Users, PauseCircle, PlayCircle, Tag, CheckCheck, Sparkles, Database, BarChart3, CheckCircle2 } from 'lucide-react';

interface CRMInteractiveDemoProps {
  initialTab?: 'inbox' | 'rag' | 'campaigns' | 'metrics';
}

export const CRMInteractiveDemo: React.FC<CRMInteractiveDemoProps> = ({ initialTab = 'inbox' }) => {
  const [activeTab, setActiveTab] = useState<'inbox' | 'rag' | 'campaigns' | 'metrics'>(initialTab);
  const [aiActive, setAiActive] = useState<boolean>(true);
  const [selectedContact, setSelectedContact] = useState<number>(1);
  const [notes, setNotes] = useState<string>('Cliente interessado na Lavadora de Placa Solar Modelo X-3000. Requer orçamento B2B.');

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const contacts = [
    { id: 1, name: 'Eng. Carlos Eduardo (Usina Sol)', phone: '+55 11 98765-4321', tag: 'VIP - Solar', lastMsg: 'Gostaria de saber o rendimento diário da máquina de limpeza solar.', status: 'IA Atendendo', time: '14:22' },
    { id: 2, name: 'Mariana Silva (Manutenção Fachadas)', phone: '+55 19 99876-1234', tag: 'Lead Quente', lastMsg: 'Qual o valor do aluguel mensal da lavadora de fachada?', status: 'Aguardando Operador', time: '13:45' },
    { id: 3, name: 'Roberto Mendes (Indústria Química)', phone: '+55 41 97654-3210', tag: 'Em Cotação', lastMsg: 'Áudio enviado (0:45) - Transcrito via Whisper', status: 'IA Atendendo', time: '11:10' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto bg-gradient-to-b from-[#18181B] via-[#09090B] to-[#000000] border border-[#FFDE00]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,222,0,0.15)] text-white select-none">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-[#27272A] mb-4">
        <div className="text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 text-[10px] font-black bg-[#FFDE00] text-black rounded-full uppercase tracking-wider">
              CRM AMIGO • WHATSAPP HUB
            </span>
            <span className="text-[11px] font-mono text-[#A1A1AA]">Plataforma Self-Hosted Exclusiva</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white">Central de Atendimento Inteligente</h3>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-[#09090B] p-1.5 rounded-2xl border border-[#27272A]">
          <button
            onClick={() => setActiveTab('inbox')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all ${
              activeTab === 'inbox' ? 'bg-[#FFDE00] text-black shadow-[0_0_15px_rgba(255,222,0,0.3)]' : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Inbox 3 Painéis
          </button>
          <button
            onClick={() => setActiveTab('rag')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all ${
              activeTab === 'rag' ? 'bg-[#FFDE00] text-black shadow-[0_0_15px_rgba(255,222,0,0.3)]' : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            IA &amp; RAG (Base)
          </button>
          <button
            onClick={() => setActiveTab('campaigns')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all ${
              activeTab === 'campaigns' ? 'bg-[#FFDE00] text-black shadow-[0_0_15px_rgba(255,222,0,0.3)]' : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            Disparos em Massa
          </button>
        </div>
      </div>

      {/* TAB 1: INBOX 3 PAINÉIS */}
      {activeTab === 'inbox' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-left">
          {/* Panel 1: Contact List */}
          <div className="lg:col-span-4 bg-[#09090B] border border-[#27272A] rounded-2xl p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#18181B]">
              <span className="text-[10px] font-black text-[#A1A1AA] uppercase tracking-wider">Conversas (3)</span>
              <span className="text-[9px] font-extrabold bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/30">
                Meta API Online
              </span>
            </div>
            <div className="space-y-2">
              {contacts.map((c) => (
                <div
                  key={c.id}
                  onClick={() => setSelectedContact(c.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedContact === c.id
                      ? 'bg-[#18181B] border-[#FFDE00] shadow-[0_0_10px_rgba(255,222,0,0.15)]'
                      : 'bg-[#09090B] border-[#18181B] hover:border-[#27272A]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white truncate max-w-[170px]">{c.name}</span>
                    <span className="text-[10px] text-[#A1A1AA] font-mono">{c.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[9px] font-extrabold bg-[#FFDE00]/10 text-[#FFDE00] px-1.5 py-0.5 rounded border border-[#FFDE00]/20">
                      {c.tag}
                    </span>
                    <span className="text-[9px] text-green-400 flex items-center gap-1">
                      <Bot className="w-2.5 h-2.5" />
                      {c.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A1A1AA] line-clamp-1">{c.lastMsg}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 2: Chat Thread */}
          <div className="lg:col-span-5 bg-[#09090B] border border-[#27272A] rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#18181B]">
              <div>
                <h4 className="text-xs font-bold text-white">Eng. Carlos Eduardo</h4>
                <p className="text-[10px] text-[#A1A1AA] font-mono">+55 11 98765-4321</p>
              </div>
              <button
                onClick={() => setAiActive(!aiActive)}
                className={`px-2.5 py-1 text-[10px] font-black rounded-lg flex items-center gap-1 transition-all ${
                  aiActive
                    ? 'bg-green-500/20 text-green-400 border border-green-500/40 hover:bg-green-500/30'
                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/40 hover:bg-amber-500/30'
                }`}
              >
                {aiActive ? <PauseCircle className="w-3 h-3" /> : <PlayCircle className="w-3 h-3" />}
                {aiActive ? 'Pausar IA' : 'Retomar IA'}
              </button>
            </div>

            <div className="my-3 space-y-2 text-xs">
              <div className="bg-[#18181B] border border-[#27272A] rounded-xl p-2.5 text-white max-w-[90%]">
                Gostaria de saber o rendimento diário da máquina de limpeza solar Ecco Clear X-3000?
              </div>

              <div className="bg-[#FFDE00]/10 border border-[#FFDE00]/30 rounded-xl p-2.5 text-xs text-white">
                <div className="flex items-center gap-1.5 text-[#FFDE00] font-bold mb-1">
                  <Mic className="w-3.5 h-3.5" />
                  <span>Áudio Transcrito via OpenAI Whisper</span>
                </div>
                <p className="italic text-[#D4D4D8]">
                  "Oi pessoal, a gente precisa limpar um parque solar de 50 mil painéis no interior de SP. Vocês entregam em 15 dias?"
                </p>
              </div>

              {aiActive && (
                <div className="bg-[#FFDE00]/20 border border-[#FFDE00]/40 rounded-xl p-2.5 text-white ml-auto max-w-[90%]">
                  Olá Engenheiro Carlos! A <strong>Ecco Clear X-3000</strong> limpa até <strong>8.000 painéis por dia</strong> com consumo reduzido de água. Nosso prazo de entrega atual é de 7 dias úteis. Posso gerar uma cotação oficial?
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-[#18181B] flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={aiActive ? 'IA atendendo em tempo real...' : 'Digite a mensagem...'}
                className="flex-1 bg-[#18181B] border border-[#27272A] rounded-lg px-3 py-1.5 text-xs text-[#A1A1AA]"
              />
              <button className="bg-[#FFDE00] text-black font-bold p-1.5 rounded-lg">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Panel 3: Contact Details & Notes */}
          <div className="lg:col-span-3 bg-[#09090B] border border-[#27272A] rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black text-[#A1A1AA] uppercase tracking-wider block mb-2">Perfil do Contato</span>
              <div className="space-y-1.5 text-xs mb-3">
                <div className="flex justify-between py-1 border-b border-[#18181B]">
                  <span className="text-[#A1A1AA]">Empresa:</span>
                  <span className="font-bold text-white">Usina Sol Brasil</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#18181B]">
                  <span className="text-[#A1A1AA]">Atribuição:</span>
                  <span className="font-bold text-[#FFDE00]">Round-Robin #3</span>
                </div>
              </div>

              <span className="text-[10px] font-black text-[#FFDE00] uppercase block mb-1 flex items-center gap-1">
                <FileText className="w-3 h-3" /> Nota Privada (Interna)
              </span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full h-20 bg-[#18181B] border border-[#27272A] rounded-xl p-2 text-[11px] text-[#D4D4D8] focus:outline-none focus:border-[#FFDE00]"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: RAG & BASE DE CONHECIMENTO */}
      {activeTab === 'rag' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="bg-[#09090B] border border-[#27272A] rounded-2xl p-5">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Database className="w-4 h-4 text-[#FFDE00]" />
              Base de Conhecimento RAG (PDFs &amp; URLs)
            </h4>
            <p className="text-xs text-[#A1A1AA] mb-4">
              A IA estuda os manuais da Ecco Cleaner para responder dúvidas técnicas sem erros.
            </p>

            <div className="space-y-2 mb-4">
              <div className="bg-[#18181B] border border-[#27272A] p-2.5 rounded-xl flex items-center justify-between text-xs">
                <span className="text-white font-medium">Ficha_Tecnica_EccoCleaner_X3000.pdf</span>
                <span className="text-[10px] bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded">Indexado</span>
              </div>
              <div className="bg-[#18181B] border border-[#27272A] p-2.5 rounded-xl flex items-center justify-between text-xs">
                <span className="text-white font-medium">Tabela_Precos_Aluguel_2026.xlsx</span>
                <span className="text-[10px] bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded">Indexado</span>
              </div>
              <div className="bg-[#18181B] border border-[#27272A] p-2.5 rounded-xl flex items-center justify-between text-xs">
                <span className="text-white font-medium">Manual_Lavadora_Fachada_V2.pdf</span>
                <span className="text-[10px] bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded">Indexado</span>
              </div>
            </div>

            <button className="w-full py-2 bg-[#18181B] border border-dashed border-[#FFDE00]/50 text-[#FFDE00] rounded-xl text-xs font-bold hover:bg-[#FFDE00]/10 transition-all">
              + Upload de Manuais Técnicos em PDF
            </button>
          </div>

          <div className="bg-[#09090B] border border-[#27272A] rounded-2xl p-5">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Bot className="w-4 h-4 text-[#FFDE00]" />
              System Prompt &amp; Comportamento da IA
            </h4>
            <p className="text-xs text-[#A1A1AA] mb-3">
              Regras de negócio e tom de voz da inteligência artificial.
            </p>
            <div className="bg-[#18181B] border border-[#27272A] rounded-xl p-3 text-xs text-[#D4D4D8] font-mono space-y-1">
              <p className="text-[#FFDE00]"># SYSTEM PROMPT ECCO CLEANER</p>
              <p>Você é o Consultor Técnico Virtual da Ecco Cleaner.</p>
              <p>Tom de voz: Profissional, altamente técnico e seguro.</p>
              <p>Regra 1: Sempre ofereça agendar uma cotação no WhatsApp.</p>
              <p>Regra 2: Responda baseado apenas nos manuais indexados.</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DISPAROS EM MASSA */}
      {activeTab === 'campaigns' && (
        <div className="bg-[#09090B] border border-[#27272A] rounded-2xl p-5 text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Send className="w-4 h-4 text-[#FFDE00]" />
                Campanha de Relançamento B2B
              </h4>
              <p className="text-xs text-[#A1A1AA]">Disparos ativos via API Meta com controle de retargeting</p>
            </div>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/40 rounded-full text-xs font-bold">
              Meta Backoff Protegido
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[#18181B] p-3 rounded-xl border border-[#27272A] text-center">
              <span className="text-[10px] text-[#A1A1AA] uppercase">Contatos Selecionados</span>
              <p className="text-lg font-black text-white">1.250 Leads</p>
            </div>
            <div className="bg-[#18181B] p-3 rounded-xl border border-[#27272A] text-center">
              <span className="text-[10px] text-[#A1A1AA] uppercase">Entregues</span>
              <p className="text-lg font-black text-green-400">100%</p>
            </div>
            <div className="bg-[#18181B] p-3 rounded-xl border border-[#27272A] text-center">
              <span className="text-[10px] text-[#A1A1AA] uppercase">Taxa de Leitura</span>
              <p className="text-lg font-black text-[#FFDE00]">84.2%</p>
            </div>
            <div className="bg-[#18181B] p-3 rounded-xl border border-[#27272A] text-center">
              <span className="text-[10px] text-[#A1A1AA] uppercase">Cotações Geradas</span>
              <p className="text-lg font-black text-white">312 Leads</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
