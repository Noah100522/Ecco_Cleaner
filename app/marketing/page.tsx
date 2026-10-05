'use client';

const services = [
  {
    title: 'Marketing e conteúdo', price: 'R$ 1.200', subtitle: 'Presença consistente e comunicação dos produtos.',
    items: ['Planejamento mensal para Instagram e Facebook.', '8 peças por mês: artes estáticas ou carrosséis de até 5 páginas.', '4 adaptações dessas peças para stories.', '2 vídeos curtos de até 30 segundos, editados com material enviado pela Ecco Cleaner.', 'Legendas, chamadas comerciais e agendamento das publicações aprovadas.', 'Até 2 rodadas de ajustes por peça, 1 reunião mensal de até 45 minutos e resumo dos resultados.'],
  },
  {
    title: 'Gestão do Google Ads', price: 'R$ 800', subtitle: 'Anúncios para alcançar quem procura equipamentos de limpeza.',
    items: ['Gestão de 1 conta e até 2 campanhas na Rede de Pesquisa.', 'Pesquisa de palavras-chave, regiões e produtos prioritários.', 'Criação dos textos dos anúncios e revisão das páginas de destino.', 'Configuração inicial de GA4, Google Tag Manager e eventos de contato no site, mediante acesso e viabilidade técnica.', 'Revisão semanal de termos de pesquisa, palavras negativas, orçamento e desempenho.', 'Relatório mensal de gastos, cliques, contatos medidos e custo por contato. Gestão válida para verba de até R$ 3.000/mês.'],
  },
];

const conditions = [
  ['Conteúdo e aprovação', 'A Ecco Cleaner fornece fotos, vídeos, informações técnicas, preços e ofertas, além de indicar um responsável pelas aprovações. O calendário é enviado para aprovação antes das publicações. Atrasos no envio ou na aprovação podem alterar o cronograma.'],
  ['Pagamento e início', 'Proposta de cobrança mensal antecipada de R$ 2.000 pelos serviços. O início depende da aprovação comercial, do primeiro pagamento e dos acessos necessários. Configuração inicial incluída; sem taxa de implantação adicional.'],
  ['Período de avaliação', 'Sugestão de avaliação após 90 dias, com revisão mensal das campanhas. Contratação mensal, com aviso de cancelamento de 30 dias e sem multa de fidelidade proposta. Condições sujeitas ao aceite das partes.'],
  ['O que é contratado à parte', 'Filmagem e fotografia presencial, atendimento de mensagens e comentários, influenciadores, Meta Ads, novas páginas, manutenção do site, SEO contínuo, suporte de TI, ferramentas pagas e peças além da quantidade prevista.'],
  ['Contas e resultados', 'As contas de anúncios e medição ficam em nome da Ecco Cleaner, com acesso concedido ao gestor. Não há garantia de vendas ou quantidade de contatos: resultados dependem da concorrência, oferta, site, orçamento e atendimento comercial. Clique no WhatsApp é um sinal de interesse, não uma venda confirmada.'],
];

export default function MarketingProposalPage() {
  return (
    <main className="marketing-proposal min-h-screen bg-[#050505] text-white selection:bg-[#dbe51c] selection:text-black">
      <nav aria-label="Ações da proposta" className="print:hidden sticky top-0 z-50 border-b border-white/15 bg-[#050505]/95 px-5 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div><p className="text-xs font-black tracking-[.3em] text-[#dbe51c]">ROOTED</p><p className="mt-1 text-xs text-white/70">Proposta para Ecco Cleaner</p></div>
          <div className="flex flex-wrap gap-3"><a href="#investimento" className="rounded-full border border-white/30 px-5 py-3 text-sm focus-visible:outline-2 focus-visible:outline-[#dbe51c]">Ver valores</a><button type="button" onClick={() => window.print()} className="rounded-full bg-[#dbe51c] px-5 py-3 text-sm font-bold text-black focus-visible:outline-2 focus-visible:outline-white">Imprimir / Salvar PDF</button></div>
        </div>
      </nav>
      <div className="mx-auto max-w-6xl px-5 py-10 sm:py-16">
        <header className="rounded-3xl border border-white/15 bg-white/[.035] p-7 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#dbe51c]">Proposta comercial • 05 de outubro de 2026</p>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">Marketing mensal.<br /><span className="text-[#dbe51c]">Google Ads com direção.</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">Uma comunicação contínua para os equipamentos da Ecco Cleaner, combinada com anúncios voltados a pessoas e empresas que buscam soluções de limpeza profissional.</p>
          <div className="mt-8 grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-3">
            <div><strong className="text-3xl">R$ 2.000</strong><p className="mt-2 text-sm text-white/70">Serviços por mês</p></div>
            <div><strong className="text-3xl">R$ 1.000</strong><p className="mt-2 text-sm text-white/70">Verba inicial sugerida para anúncios</p></div>
            <div><strong className="text-3xl text-[#dbe51c]">R$ 3.000</strong><p className="mt-2 text-sm text-white/70">Investimento mensal de referência</p></div>
          </div>
        </header>

        <section aria-labelledby="escopo" className="mt-10">
          <h2 id="escopo" className="text-3xl font-bold">O que será entregue</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">{services.map(service => <article key={service.title} className="rounded-3xl border border-white/15 bg-white/[.025] p-7"><h3 className="text-2xl font-bold">{service.title}</h3><p className="mt-4 text-4xl font-black text-[#dbe51c]">{service.price}<span className="text-sm font-normal text-white/70"> / mês</span></p><p className="mt-4 leading-7 text-white/75">{service.subtitle}</p><ul className="mt-6 space-y-4">{service.items.map(item => <li key={item} className="flex gap-3 text-sm leading-7 text-white/80"><span aria-hidden="true" className="font-bold text-[#dbe51c]">✓</span><span>{item}</span></li>)}</ul></article>)}</div>
        </section>

        <section className="mt-8 rounded-3xl border border-white/15 p-7 sm:p-10">
          <h2 className="text-2xl font-bold">Como o trabalho começa</h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-3">{[
            ['01 • Alinhamento', 'Definir produtos prioritários, regiões atendidas, diferenciais e destino dos contatos: formulário, telefone ou WhatsApp.'],
            ['02 • Preparação', 'Organizar acessos, receber os materiais, preparar o calendário e configurar a medição. Publicar após aprovação e com o site pronto.'],
            ['03 • Acompanhamento', 'Revisar campanhas semanalmente e apresentar um relatório mensal. Usar o retorno do comercial para avaliar a qualidade dos contatos.'],
          ].map(([title, description]) => <li key={title}><h3 className="font-bold text-[#dbe51c]">{title}</h3><p className="mt-3 text-sm leading-7 text-white/75">{description}</p></li>)}</ol>
        </section>

        <section id="investimento" className="mt-8 scroll-mt-28 rounded-3xl bg-[#dbe51c] p-7 text-black sm:p-10">
          <h2 className="text-3xl font-black">Investimento mensal</h2>
          <div className="mt-6 overflow-x-auto"><table className="w-full min-w-[280px] text-left text-sm"><caption className="sr-only">Distribuição do investimento mensal sugerido</caption><thead><tr className="border-b border-black/30"><th scope="col" className="py-3">Item</th><th scope="col" className="py-3 text-right">Valor</th></tr></thead><tbody>{[['Marketing e conteúdo', 'R$ 1.200'], ['Gestão do Google Ads', 'R$ 800'], ['Subtotal dos serviços — pago à Rooted', 'R$ 2.000'], ['Anúncios — pago diretamente ao Google', 'R$ 1.000']].map(([label, value]) => <tr key={label} className="border-b border-black/20"><th scope="row" className="py-4 pr-4 font-medium">{label}</th><td className="whitespace-nowrap py-4 text-right font-bold">{value}</td></tr>)}</tbody><tfoot><tr><th scope="row" className="py-5 text-lg">Total mensal de referência</th><td className="whitespace-nowrap py-5 text-right text-xl font-black">R$ 3.000</td></tr></tfoot></table></div>
          <p className="mt-4 text-sm leading-7">A verba de anúncios é separada dos honorários e depende da aprovação do cliente. R$ 1.000 é uma sugestão inicial de teste, a validar conforme regiões, produtos e pesquisa de palavras-chave; não representa previsão de resultados.</p>
          <p className="mt-3 text-sm leading-7">No Google Ads, R$ 1.000/mês corresponde a aproximadamente R$ 32,89 de orçamento diário médio total. Para a maioria das campanhas, os gastos variam por dia e o limite mensal considera 30,4 vezes o orçamento diário médio, quando mantido durante o mês. <a className="underline underline-offset-4" href="https://support.google.com/google-ads/answer/6385083?hl=pt-BR" target="_blank" rel="noopener noreferrer">Entenda o orçamento do Google Ads</a>.</p>
        </section>

        <section className="mt-8 rounded-3xl border border-white/15 p-7 sm:p-10">
          <h2 className="text-2xl font-bold">O site já contratado</h2><p className="mt-4 text-sm leading-7 text-white/80">O desenvolvimento do site permanece no valor de R$ 4.000: R$ 2.000 de entrada já recebidos e R$ 2.000 na finalização. Esse saldo é pontual e não faz parte da mensalidade de marketing ou da verba de anúncios.</p>
          <p className="mt-3 text-sm leading-7 text-white/80">Se a finalização do site coincidir com o primeiro mês do plano completo, o desembolso de referência será R$ 5.000: R$ 2.000 de saldo do site + R$ 2.000 de serviços mensais + R$ 1.000 de anúncios. Suporte de TI, se contratado, permanece separado.</p>
        </section>

        <section className="mt-8 rounded-3xl border border-white/15 p-7 sm:p-10"><h2 className="text-2xl font-bold">Condições da proposta</h2><div className="mt-6 space-y-6">{conditions.map(([title, description]) => <div key={title} className="border-b border-white/15 pb-6 last:border-0 last:pb-0"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-7 text-white/75">{description}</p></div>)}</div></section>
        <footer className="mt-8 rounded-3xl border border-white/15 p-7 text-sm leading-7 text-white/75"><p className="font-bold text-white">ROOTED INFORMÁTICA • Proposta para Ecco Cleaner</p><p>Valores propostos para aprovação, sem contratação automática. Validade comercial até 20/10/2026.</p><p className="mt-4">Responsável pela aprovação: ______________________________</p><p>Data: ____ / ____ / ______</p></footer>
      </div>
      <style jsx global>{`
        @media print {
          @page { size: A4; margin: 14mm; }
          .marketing-proposal, .marketing-proposal header, .marketing-proposal section, .marketing-proposal article, .marketing-proposal footer { background: white !important; color: #111 !important; box-shadow: none !important; }
          .marketing-proposal * { color: #111 !important; border-color: #ccc !important; }
          .marketing-proposal > div { max-width: none; padding: 0; }
          .marketing-proposal h1 { font-size: 32px; }
          .marketing-proposal h2 { font-size: 23px; }
          .marketing-proposal section, .marketing-proposal footer { margin-top: 20px; padding: 16px; }
          .marketing-proposal article, .marketing-proposal header, .marketing-proposal tr, .marketing-proposal footer { break-inside: avoid; }
          .marketing-proposal h2, .marketing-proposal h3 { break-after: avoid; }
        }
      `}</style>
    </main>
  );
}
