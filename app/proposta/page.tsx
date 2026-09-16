'use client';

import { useState } from 'react';
import Link from 'next/link';

const includedItems = [
  'Atendimento remoto e presencial conforme o plano contratado',
  'Manutenção preventiva e corretiva dos computadores existentes',
  'Verificação de rede, Wi-Fi e conectividade',
  'Acompanhamento dos servidores já existentes',
  'Verificação e suporte do sistema de câmeras instalado',
  'Orientações de segurança, backup e organização tecnológica',
];

const separateQuoteItems = [
  'Compra ou substituição de computadores, servidores e câmeras',
  'Instalação de novos pontos de rede ou passagem de cabos',
  'Expansão de CFTV, alarmes, controle de acesso ou Wi-Fi',
  'Mudanças estruturais, obras, infraestrutura elétrica ou lógica',
  'Licenças, softwares, serviços de terceiros e equipamentos',
  'Projetos novos, ampliações e implementações não previstas no escopo',
];

export default function ProposalPage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main className="min-h-screen bg-[#07090d] text-white selection:bg-lime-300 selection:text-black">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-8 lg:px-10 lg:py-12">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-semibold tracking-[0.25em] text-lime-300">ROOTED × ECCO CLEANER</span>
            <Link href="/apresentacao" className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold transition hover:border-lime-300 hover:text-lime-300">
              Ver apresentação completa
            </Link>
          </div>

          <div className="max-w-4xl pb-16 pt-24 lg:pb-24 lg:pt-32">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-white/50">Proposta de parceria tecnológica</p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Tecnologia organizada para a operação da <span className="text-lime-300">Ecco Cleaner.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Uma proposta objetiva, concentrada no desenvolvimento do novo site e no suporte dos recursos de TI que a empresa já possui.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 text-sm">
              <a href="#escopo" className="rounded-full bg-lime-300 px-6 py-3 font-bold text-black transition hover:bg-lime-200">Conhecer o escopo</a>
              <a href="#transparencia" className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-white/50">Ver regras de atendimento</a>
            </div>
          </div>
        </div>
      </section>

      <section id="escopo" className="mx-auto grid max-w-6xl gap-5 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 lg:p-9">
          <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/15 text-xl text-blue-300">01</div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">Projeto inicial</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Desenvolvimento do site</h2>
          <p className="mt-4 leading-7 text-white/65">Criação do portal digital da Ecco Cleaner, com uma experiência moderna, responsiva e alinhada à apresentação demonstrada.</p>
          <ul className="mt-7 space-y-3 text-sm leading-6 text-white/80">
            <li>✓ Estrutura e layout profissional</li>
            <li>✓ Adaptação para celular, tablet e computador</li>
            <li>✓ Organização das páginas e informações comerciais</li>
            <li>✓ Implementação das funcionalidades definidas no escopo</li>
            <li>✓ Publicação e validação da versão entregue</li>
          </ul>
        </article>

        <article className="rounded-3xl border border-lime-300/25 bg-lime-300/[0.06] p-7 lg:p-9">
          <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-300/15 text-xl text-lime-300">02</div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">Serviço recorrente</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Suporte de TI</h2>
          <p className="mt-4 leading-7 text-white/65">Acompanhamento técnico dos equipamentos e da infraestrutura que já estão instalados e em uso na empresa.</p>
          <ul className="mt-7 space-y-3 text-sm leading-6 text-white/80">
            {includedItems.map((item) => <li key={item}>✓ {item}</li>)}
          </ul>
        </article>
      </section>

      <section id="transparencia" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">Transparência comercial</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">O plano acompanha o que existe hoje. Expansões são orçadas à parte.</h2>
            <p className="mt-6 leading-7 text-white/65">O suporte considera o inventário e o escopo acordados na contratação. Quando houver necessidade de ampliar, instalar ou adquirir novos recursos, será elaborado um orçamento separado para aprovação.</p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.06] p-7">
              <h3 className="text-xl font-semibold text-emerald-300">Incluído no plano</h3>
              <p className="mt-2 text-sm text-white/55">Equipamentos e atividades previamente definidos.</p>
              <p className="mt-5 text-sm leading-7 text-white/75">Computadores, câmeras, servidores, rede e demais recursos existentes, respeitando as quantidades e condições registradas no inventário inicial.</p>
            </div>
            <div className="rounded-3xl border border-amber-300/20 bg-amber-300/[0.05] p-7">
              <h3 className="text-xl font-semibold text-amber-300">Orçamento separado</h3>
              <p className="mt-2 text-sm text-white/55">Novas aquisições, ampliações e implementações.</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/75">
                {separateQuoteItems.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>

          <button type="button" onClick={() => setShowDetails((current) => !current)} className="mt-8 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-lime-300 hover:text-lime-300">
            {showDetails ? 'Ocultar exemplo de regra' : 'Ver exemplo de regra contratual'}
          </button>
          {showDetails && (
            <div className="mt-4 max-w-3xl rounded-2xl border border-white/10 bg-black/20 p-6 text-sm leading-7 text-white/70">
              Exemplo: se a empresa possuir 10 computadores, 12 câmeras e 1 servidor no inventário aprovado, o plano contempla o suporte desses recursos dentro das condições contratadas. A instalação de um novo computador, câmera, servidor ou cabo será avaliada e apresentada em orçamento separado, antes da execução.
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 lg:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">Próxima etapa</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Definir o inventário, o escopo e os valores finais.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-white/60">Antes da aprovação, as quantidades de equipamentos, os horários de atendimento, os limites do suporte e os serviços cobrados separadamente devem ser registrados na proposta comercial.</p>
          <Link href="/apresentacao" className="mt-8 inline-flex rounded-full bg-lime-300 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-200">Voltar para a apresentação</Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/35">Rooted Tecnologia • Proposta de parceria com a Ecco Cleaner</footer>
    </main>
  );
}
