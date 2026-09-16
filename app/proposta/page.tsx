'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import Link from 'next/link';

const modules = [
  { n: '01', title: 'Diagnóstico e estratégia', text: 'Levantamento do negócio, público, objetivos comerciais, diferenciais, serviços e informações necessárias para estruturar o conteúdo do site.' },
  { n: '02', title: 'Arquitetura e navegação', text: 'Definição da estrutura de páginas, menus, hierarquia de informações, chamadas para ação e caminhos claros até o contato.' },
  { n: '03', title: 'Interface visual premium', text: 'Aplicação da identidade da empresa com tipografia, cores, imagens, ícones, componentes, espaçamentos e acabamento visual consistente.' },
  { n: '04', title: 'Página inicial estratégica', text: 'Construção de uma Home com proposta de valor, apresentação objetiva, diferenciais, serviços principais, provas de confiança e CTAs.' },
  { n: '05', title: 'Páginas institucionais', text: 'Criação das áreas necessárias para apresentar a empresa, sua história, atuação, serviços, soluções, setores e formas de atendimento.' },
  { n: '06', title: 'Serviços e portfólio', text: 'Organização das soluções oferecidas, projetos, cases, imagens, depoimentos e provas sociais quando os materiais estiverem disponíveis.' },
  { n: '07', title: 'Contato e conversão', text: 'Formulário de contato, botões para WhatsApp, localização, canais comerciais, validações e feedback visual para o usuário.' },
  { n: '08', title: 'Responsividade', text: 'Adaptação para celulares, tablets, notebooks e monitores, com atenção à navegação por toque, legibilidade e organização dos elementos.' },
  { n: '09', title: 'SEO inicial', text: 'Configuração de títulos, descrições, estrutura semântica, headings, textos relevantes, indexação básica e fundamentos para mecanismos de busca.' },
  { n: '10', title: 'Performance e acessibilidade', text: 'Boas práticas de carregamento, imagens, componentes, contraste, navegação, semântica e experiência para diferentes usuários.' },
  { n: '11', title: 'Publicação e configuração', text: 'Apoio na preparação da publicação, configuração de domínio quando aplicável, revisão do ambiente e orientações básicas de manutenção.' },
  { n: '12', title: 'Testes e entrega', text: 'Testes de links, formulários, navegação, responsividade e comportamento geral antes da publicação definitiva.' },
];

const included = [
  'Código-fonte do site desenvolvido e estrutura do projeto',
  'Arquivos e componentes criados especificamente para a solução',
  'Orientações para execução, publicação e manutenção',
  'Entrega do repositório ou acesso ao repositório combinado',
  'Revisão final do escopo implementado com o cliente',
  'Documentação básica das configurações necessárias',
];

const support = [
  'Inventário de computadores, notebooks, servidores e periféricos',
  'Mapeamento de usuários, setores, equipamentos críticos e prioridades',
  'Diagnóstico de rede, Wi-Fi, switches, roteadores e conectividade',
  'Análise básica de IPs, acessos, disponibilidade e organização',
  'Manutenção preventiva e corretiva dos equipamentos contemplados',
  'Instalação, configuração e atualização de softwares autorizados',
  'Orientação sobre permissões, contas e boas práticas de segurança',
  'Acompanhamento dos backups existentes e identificação de riscos',
  'Suporte a impressoras, compartilhamentos, câmeras e gravadores',
  'Atendimento remoto e presencial conforme condições contratadas',
  'Registro de chamados, recorrências, prioridades e recomendações',
];

const outOfScope = [
  'Compra de equipamentos, peças, licenças ou materiais',
  'Cabeamento, obras, novos pontos e expansão de infraestrutura',
  'Expansões de CFTV, alarmes, controle de acesso ou Wi-Fi',
  'Hospedagens, plataformas, APIs e serviços de terceiros',
  'Projetos complexos de migração, segurança avançada ou desenvolvimento sob demanda',
];

const phases = [
  { id: 1, name: 'BASE', title: 'Construção da fundação', price: 'R$ 5.000,00 + R$ 1.000,00/mês', text: 'Primeiro estruturamos o site e organizamos o suporte técnico inicial. O objetivo é criar uma presença digital profissional e conhecer a realidade da infraestrutura.', items: ['Site completo conforme escopo aprovado', 'Entrega do código-fonte e documentação básica', 'Inventário inicial da TI', 'Definição dos limites do suporte mensal'] },
  { id: 2, name: 'EVOLUÇÃO', title: 'Marketing e aquisição', price: 'Contratação opcional', text: 'Depois da base pronta, poderão ser contratados serviços de conteúdo, artes, vídeos, SEO contínuo e tráfego pago com metas e orçamento próprios.', items: ['Planejamento de canais', 'Conteúdo e peças de comunicação', 'Campanhas e indicadores', 'Otimizações de conversão'] },
  { id: 3, name: 'ESCALA', title: 'CRM, automações e IA', price: 'Projeto separado · condição especial possível', text: 'Em uma etapa posterior, o atendimento e o processo comercial poderão ser conectados por CRM, automações, integrações e recursos de inteligência artificial.', items: ['Mapeamento do processo comercial', 'Escolha e configuração da solução', 'Automações e integrações', 'IA conforme viabilidade, custos e escopo'] },
];

function List({ items }: { items: string[] }) {
  return <ul className="mt-6 grid gap-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-white/65"><span className="text-[#FFDE00]">✦</span><span>{item}</span></li>)}</ul>;
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description: string }) {
  return <div className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.25em] text-[#FFDE00]">{eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-[.98] tracking-[-.06em] sm:text-6xl">{title}</h2><p className="mt-6 text-base leading-8 text-white/55">{description}</p></div>;
}

export default function ProposalPage() {
  const [phase, setPhase] = useState(1);
  const selected = phases[phase - 1];

  return <main className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-[#FFDE00] selection:text-black">
    <div className="pointer-events-none fixed inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:64px_64px]" />
    <div className="pointer-events-none fixed -left-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-[#FFDE00]/[.07] blur-[140px]" />

    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/85 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"><div className="flex items-center gap-3"><img src="/img/4.png" alt="Rooted" className="h-10 w-10 object-contain" /><div><p className="text-xs font-black tracking-[.28em] text-[#FFDE00]">ROOTED</p><p className="text-[9px] uppercase tracking-[.2em] text-white/35">Tecnologia & estratégia</p></div></div><nav className="hidden gap-6 text-[10px] font-black uppercase tracking-[.16em] text-white/45 md:flex"><a href="#site" className="hover:text-[#FFDE00]">Site</a><a href="#entrega" className="hover:text-[#FFDE00]">Entrega</a><a href="#ti" className="hover:text-[#FFDE00]">TI</a><a href="#jornada" className="hover:text-[#FFDE00]">Jornada</a></nav><Link href="/apresentacao" className="rounded-full border border-white/15 px-4 py-2 text-[10px] font-black uppercase tracking-wider hover:border-[#FFDE00] hover:text-[#FFDE00]">Apresentação ↗</Link></div></header>

    <section className="relative z-10 mx-auto grid min-h-[700px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_.85fr] lg:px-10 lg:py-24"><div><div className="mb-7 inline-flex rounded-full border border-[#FFDE00]/30 bg-[#FFDE00]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[.2em] text-[#FFDE00]">Proposta técnica e comercial · Ecco Cleaner</div><h1 className="text-5xl font-black leading-[.9] tracking-[-.07em] sm:text-7xl lg:text-[5.3rem]">Mais do que um site.<br /><span className="text-[#FFDE00]">Uma estrutura.</span></h1><p className="mt-8 max-w-xl text-lg leading-8 text-white/55">Uma apresentação completa do que será desenvolvido, do que será entregue e de como o projeto poderá evoluir com marketing, tecnologia e automação.</p><div className="mt-10 flex flex-wrap gap-3"><a href="#site" className="rounded-full bg-[#FFDE00] px-6 py-3 text-sm font-black text-black shadow-[0_0_40px_rgba(255,222,0,.18)]">Conhecer o escopo ↓</a><a href="#investimento" className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold">Investimento</a></div><div className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6"><div><b className="block text-2xl font-black sm:text-3xl">R$ 5 mil</b><span className="text-[10px] uppercase tracking-wider text-white/35">Desenvolvimento</span></div><div><b className="block text-2xl font-black sm:text-3xl">R$ 1 mil</b><span className="text-[10px] uppercase tracking-wider text-white/35">TI / mês</span></div><div><b className="block text-2xl font-black text-[#FFDE00] sm:text-3xl">03</b><span className="text-[10px] uppercase tracking-wider text-white/35">Fases</span></div></div></div><div className="relative flex min-h-[420px] items-end justify-center lg:min-h-[590px]"><div className="absolute bottom-12 h-80 w-80 rounded-full bg-[#FFDE00]/15 blur-[110px]" /><div className="absolute bottom-8 h-[27rem] w-[27rem] rounded-full border border-[#FFDE00]/20 shadow-[0_0_120px_rgba(255,222,0,.12)]" /><div className="absolute left-0 top-10 z-20 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl"><p className="text-[9px] font-black uppercase tracking-[.2em] text-white/35">Projeto em camadas</p><p className="mt-2 text-sm font-black text-[#FFDE00]">Estrutura → Evolução</p></div><img src="/img/slide-1.png" alt="Mascote Rooted" className="relative z-10 max-h-[580px] w-full object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,.85)] [mask-image:linear-gradient(to_bottom,black_86%,transparent)]" /></div></section>

    <section id="site" className="relative z-10 border-y border-white/10 bg-white/[.025]"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><SectionTitle eyebrow="01 / Desenvolvimento" title={<>O site será desenvolvido<br /><span className="text-white/30">por inteiro, não apenas uma Home.</span></>} description="A entrega considera uma experiência digital planejada para apresentar a empresa, organizar suas informações, facilitar o contato e funcionar com qualidade em diferentes dispositivos. Cada módulo abaixo representa uma parte do trabalho de desenvolvimento." /><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{modules.map((item) => <article key={item.n} className="group rounded-3xl border border-white/10 bg-black/25 p-6 transition hover:-translate-y-1 hover:border-[#FFDE00]/40"><span className="text-xs font-black tracking-[.2em] text-[#FFDE00]">{item.n}</span><h3 className="mt-8 text-xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-white/50">{item.text}</p></article>)}</div></div></section>

    <section id="entrega" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="grid gap-8 lg:grid-cols-[1fr_.9fr]"><div><SectionTitle eyebrow="02 / Entrega ao cliente" title={<>O código-fonte<br /><span className="text-[#FFDE00]">também será entregue.</span></>} description="A entrega não fica limitada à visualização do site publicado. O cliente receberá o código e os arquivos do projeto desenvolvido, respeitando os recursos de terceiros, licenças e serviços externos eventualmente utilizados." /><div className="mt-8 rounded-3xl border border-[#FFDE00]/25 bg-[#FFDE00]/[.05] p-7"><h3 className="text-2xl font-black">O que será disponibilizado</h3><List items={included} /></div></div><div className="rounded-[2rem] border border-white/10 bg-white/[.035] p-8 lg:p-10"><p className="text-[10px] font-black uppercase tracking-[.2em] text-white/35">Handover técnico</p><h3 className="mt-5 text-3xl font-black">Transparência na entrega</h3><p className="mt-5 leading-8 text-white/55">A forma de transferência do repositório, acessos, domínio, hospedagem e serviços externos será definida na etapa de fechamento. Senhas e credenciais devem ser compartilhadas por meio seguro, nunca expostas na página.</p><div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm leading-7 text-white/65"><p>✓ Projeto organizado</p><p>✓ Código desenvolvido para a solução</p><p>✓ Orientações de manutenção</p><p>✓ Revisão e validação da entrega</p></div></div></div></section>

    <section id="ti" className="relative z-10 border-y border-white/10 bg-white/[.025]"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><SectionTitle eyebrow="03 / Suporte recorrente" title={<>Uma base de TI para<br /><span className="text-white/30">a operação funcionar melhor.</span></>} description="O suporte mensal começa com um levantamento técnico. Como a quantidade de computadores, usuários e equipamentos ainda precisa ser confirmada, os limites finais, prioridades, horários e condições serão definidos antes da contratação definitiva." /><div className="mt-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><aside className="rounded-[2rem] border border-[#FFDE00]/30 bg-[#FFDE00]/[.06] p-8 lg:p-10"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#FFDE00]">Mensalidade-base</p><p className="mt-5 text-5xl font-black text-[#FFDE00]">R$ 1.000<span className="text-base text-white/45"> / mês</span></p><p className="mt-6 text-sm leading-7 text-white/60">Valor inicial sujeito à validação do inventário e do escopo de atendimento.</p><h3 className="mt-8 text-2xl font-black">Primeiro levantamento</h3><List items={['Quantidade de equipamentos e usuários', 'Servidores, rede, Wi-Fi e câmeras', 'Prioridades e equipamentos críticos', 'Backup, acessos e riscos existentes']} /></aside><article className="rounded-[2rem] border border-white/10 bg-black/30 p-8 lg:p-10"><h3 className="text-3xl font-black">Atividades previstas</h3><List items={support} /></article></div><div className="mt-8 rounded-3xl border border-amber-300/20 bg-amber-300/[.05] p-6 text-sm leading-7 text-white/65"><strong className="text-amber-300">Fora da mensalidade-base:</strong> demandas de compra, peças, licenças, obras, cabeamento, expansões e serviços de terceiros serão avaliadas separadamente.</div></div></section>

    <section id="jornada" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10"><SectionTitle eyebrow="04 / Jornada de evolução" title={<>Um caminho claro para<br /><span className="text-white/30">crescer por etapas.</span></>} description="A proposta começa com as necessidades atuais e deixa as próximas frentes organizadas. As fases futuras dependem de planejamento, aprovação e orçamento próprios." /><div className="mt-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div className="grid gap-3">{phases.map((item) => <button key={item.id} type="button" onClick={() => setPhase(item.id)} className={`rounded-2xl border p-5 text-left transition ${phase === item.id ? 'border-[#FFDE00] bg-[#FFDE00]/10' : 'border-white/10 bg-white/[.025] hover:border-white/30'}`}><span className="text-[10px] font-black tracking-[.2em] text-[#FFDE00]">FASE 0{item.id}</span><p className="mt-2 text-xl font-black">{item.title}</p><p className="mt-2 text-sm text-white/45">{item.price}</p></button>)}</div><article className="rounded-[2rem] border border-[#FFDE00]/25 bg-[#FFDE00]/[.055] p-8 lg:p-10"><span className="text-xs font-black tracking-[.25em] text-[#FFDE00]">{selected.name}</span><h3 className="mt-5 text-4xl font-black">{selected.title}</h3><p className="mt-5 text-lg leading-8 text-white/60">{selected.text}</p><p className="mt-8 text-sm font-black uppercase tracking-wider text-[#FFDE00]">Entregas previstas</p><List items={selected.items} /></article></div></section>

    <section id="investimento" className="relative z-10 border-y border-white/10 bg-white/[.025]"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><SectionTitle eyebrow="05 / Investimento e condições" title={<>Clareza sobre o que está<br /><span className="text-white/30">incluído e o que vem depois.</span></>} description="Os valores abaixo representam a estrutura comercial inicial. O escopo final, prazos, forma de pagamento, limites do suporte e responsabilidades serão formalizados na aprovação da proposta." /><div className="mt-12 grid gap-6 md:grid-cols-2"><article className="rounded-[2rem] border border-[#FFDE00]/35 bg-[#FFDE00]/[.07] p-8 lg:p-10"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#FFDE00]">Desenvolvimento</p><p className="mt-5 text-5xl font-black">R$ 5.000<span className="text-base text-white/40">,00</span></p><p className="mt-5 leading-7 text-white/60">Valor único para o desenvolvimento e implementação do site dentro do escopo aprovado.</p></article><article className="rounded-[2rem] border border-white/10 bg-black/30 p-8 lg:p-10"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#FFDE00]">Suporte de TI</p><p className="mt-5 text-5xl font-black">R$ 1.000<span className="text-base text-white/40"> / mês</span></p><p className="mt-5 leading-7 text-white/60">Base mensal sujeita ao inventário, quantidade de equipamentos, prioridades e condições do contrato.</p></article></div><div className="mt-8 rounded-3xl border border-white/10 p-7"><h3 className="text-2xl font-black">Itens contratados separadamente</h3><List items={outOfScope} /><p className="mt-6 text-sm leading-7 text-white/45">Marketing, tráfego pago, produção de conteúdo, CRM, automações e inteligência artificial são etapas futuras. Uma condição comercial especial poderá ser analisada posteriormente, mediante escopo e investimento próprios.</p></div></div></section>

    <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-5 px-6 py-12 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>ROOTED · Proposta estratégica para Ecco Cleaner</p><Link href="/apresentacao" className="text-[#FFDE00] hover:underline">Voltar para apresentação ↗</Link></footer>
  </main>;
}
