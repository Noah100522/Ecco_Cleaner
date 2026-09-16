import { SlideData } from './types';

export const SLIDES_DATA: SlideData[] = [
  // 1. ABERTURA & PARCERIA ESTRATÉGICA
  {
    id: 1,
    block: 'INTRO',
    blockTitle: 'Transformação Digital B2B',
    badge: 'Rooted x Ecco Cleaner',
    title: 'A Nova Era Digital da Ecco Cleaner',
    subtitle: 'Uma Parceria Tecnológica Completa para Acelerar a Inovação, Atendimento e Escala Comercial',
    objective: 'Causar um impacto de alto valor imediato, posicionando a proposta como uma visão de futuro e crescimento para a Ecco Cleaner.',
    copy: 'Apresentamos uma proposta de evolução tecnológica integral sob medida para a Ecco Cleaner. Não se trata apenas de criar um site, mas de estruturar um ecossistema de alta performance com CRM Inteligente, Inteligência Artificial e Infraestrutura de TI.',
    visualType: 'HERO',
    ctaText: 'Iniciar Apresentação Interativa',
    ctaSubtext: 'Navegue usando o scroll do mouse, botões na tela ou setas do teclado'
  },

  // 2. AUTORIDADE ROOTED TECH
  {
    id: 2,
    block: 'INTRO',
    blockTitle: 'Quem É a Rooted',
    badge: 'Autoridade & Engenharia',
    title: 'Engenharia de Software, Infraestrutura & Inteligência Artificial',
    subtitle: 'Mais de 5 Anos Construindo Soluções de Alta Complexidade Tecnológica',
    objective: 'Construir autoridade e confiança antes de apresentar diagnósticos ou valores.',
    copy: 'A Rooted é uma empresa especializada em transformar operações empresariais por meio da tecnologia. Atuamos com ecossistemas completos: Desenvolvimento sob medida, Cloud Computing, CRM de Atendimento com IA, Infraestrutura de Redes, CFTV Corporativo e Automação Comercial.',
    visualType: 'TECH_GRID'
  },

  // 3. ECOSSISTEMA COMPLETO DE PARCERIA
  {
    id: 3,
    block: 'INTRO',
    blockTitle: 'Modelo de Parceria Tecnológica',
    badge: 'Visão 360° de Atuação',
    title: 'Um Ecossistema Único Alimentando a Ecco Cleaner',
    subtitle: 'Desenvolvimento, Marketing Digital e Infraestrutura de TI Unificados sob uma Única Gestão',
    objective: 'Mostrar visualmente como a Rooted integra todas as pontas de tecnologia para a Ecco Cleaner focar no core business.',
    copy: 'Em vez de contratar múltiplos fornecedores desconectados (uma agência de site, outra de tráfego, outro técnico de TI), a Rooted assume o papel de departamento de tecnologia estratégico para a Ecco Cleaner.',
    visualType: 'DIAGRAM'
  },

  // 4. O DESAFIO ATUAL (AUDITORIA DO SITE ATUAL)
  {
    id: 4,
    block: 'INTRO',
    blockTitle: 'Diagnóstico Operacional & Técnico',
    badge: 'Análise de Gargalos do Site Atual',
    title: 'O Desafio Atual: Limitações do Modelo Legado',
    subtitle: 'Provas Reais de Vulnerabilidades de Segurança, Quebra Mobile e Perda de Leads',
    objective: 'Evidenciar empiricamente as falhas técnicas do site atual que freiam o crescimento comercial.',
    copy: 'Analisamos o portal atual da Ecco Cleaner e identificamos pontos críticos: erros de layout no celular, nota baixa de velocidade no Google, dependência de plugins inseguros e falta de captação automatizada de leads.',
    visualType: 'AUDIT',
    ctaText: 'Ver Auditoria Técnica Detalhada'
  },

  // 5. DEGRAU TECNOLÓGICO • SNEAK PEEK DO NOVO PORTAL
  {
    id: 5,
    block: 'INTRO',
    blockTitle: 'Degustação & Protótipo do Novo Portal',
    badge: 'Prévia Exclusiva do Novo Portal',
    title: 'Como Ficará a Nova Plataforma Digital da Ecco Cleaner',
    subtitle: 'Design Moderno, Responsividade Absoluta e Foco Total em Conversão de Contratos B2B',
    objective: 'Dar um gostinho / preview ao vivo do novo portal já construído e funcional.',
    copy: 'Veja a prévia em tempo real da nova plataforma desenvolvida sob medida em Next.js e Tailwind CSS. Uma experiência visual de altíssimo padrão alinhada à autoridade industrial da empresa.',
    visualType: 'NEW_SITE_PREVIEW',
    ctaText: 'Continuar para a Performance'
  },

  // 6. SILÊNCIO & CONTADOR (PERFORMANCE NEXT.JS 100)
  {
    id: 6,
    block: 'INTRO',
    blockTitle: 'Performance Extrema Next.js',
    badge: 'Nota 100 no Google',
    title: 'Velocidade Sub-Segundo & Otimização Absoluta',
    subtitle: 'Do Carregamento Lento para a Resposta Instantânea em 0.2s',
    objective: 'Mostrar a contagem regressiva e o valor 100 do Google Lighthouse.',
    copy: 'Velocidade sub-segundo com pré-renderização serverless Next.js, eliminando o tempo de espera e garantindo o topo do SEO no Google.',
    visualType: 'VS_WORDPRESS'
  },

  // 7. JORNADA DE COMPRA DO CLIENTE B2B
  {
    id: 7,
    block: 'INTRO',
    blockTitle: 'Jornada do Cliente Corporativo',
    badge: 'Foco na Conversão',
    title: 'Da Pesquisa Orgânica ao Atendimento Comercial em 2 Clicks',
    subtitle: 'Catálogo Inteligente com Fichas Técnicas e Encaminhamento Direct-to-WhatsApp',
    objective: 'Detalhar a experiência simples e altamente conversiva do comprador corporativo.',
    copy: 'O cliente pesquisa equipamentos industriais no Google, entra no portal ultra-rápido da Ecco Cleaner, acessa as especificações técnicas da máquina e inicia conversa com o consultor comercial via WhatsApp já com os dados pré-preenchidos.',
    visualType: 'JOURNEY'
  },

  // 8. DEMONSTRAÇÃO DO CRM AMIGO (INBOX OMNICANAL)
  {
    id: 8,
    block: 'BLOCO_01',
    blockTitle: 'Demonstração Tecnológica',
    badge: 'CRM AMIGO • WhatsApp Hub',
    title: 'Central de Atendimento Omnicanal com Handoff IA ↔ Humano',
    subtitle: 'Inbox Unificada em 3 Painéis com Atribuição Automática Round-Robin e Notas Privadas',
    objective: 'Apresentar a interface interativa do CRM AMIGO e a coexistência entre Inteligência Artificial e atendentes.',
    copy: 'Sua equipe comercial trabalha em um painel profissional: lista de conversas com etiquetas (VIP, Cotação, Lead Frio), histórico completo e perfil do cliente com anotações internas sigilosas.',
    visualType: 'CRM_INBOX'
  },

  // 9. DEMONSTRAÇÃO DO CRM AMIGO (IA, RAG & WHISPER)
  {
    id: 9,
    block: 'BLOCO_01',
    blockTitle: 'Demonstração de Inteligência Artificial',
    badge: 'IA & Base de Conhecimento',
    title: 'Atendimento Virtual 24/7 Treinado nos Manuais da Ecco Cleaner',
    subtitle: 'RAG com Leitura de PDFs/URLs + Transcrição Instantânea de Áudios via OpenAI Whisper',
    objective: 'Demonstrar o poder da IA treinada nos documentos técnicos da empresa.',
    copy: 'A IA lê manuais e tabelas de preços da Ecco Cleaner para tirar dúvidas dos clientes de madrugada. Se o cliente enviar um áudio de 1 minuto, o Whisper transcreve instantaneamente no painel.',
    visualType: 'CRM_RAG'
  },

  // 10. DEMONSTRAÇÃO DO CRM AMIGO (DISPAROS EM MASSA)
  {
    id: 10,
    block: 'BLOCO_01',
    blockTitle: 'Prospecção & Re-engajamento',
    badge: 'Automação Comercial',
    title: 'Campanhas de Disparo em Massa & Cadência de Follow-up',
    subtitle: 'Disparos Segmentados via API Oficial Meta com Proteção Anti-Bloqueio e Variáveis Dinâmicas',
    objective: 'Mostrar o motor de marketing ativo e retargeting automático de clientes inativos.',
    copy: 'Crie campanhas segmentadas por tags com personalização (ex: {{Nome}}, {{Empresa}}). Se o cliente não responder em 24h, o sistema dispara mensagens automáticas de acompanhamento.',
    visualType: 'CRM_CAMPAIGN'
  },

  // 11. BENEFÍCIOS & POR QUE INVESTIR?
  {
    id: 11,
    block: 'INTRO',
    blockTitle: 'Retorno Sobre o Investimento',
    badge: 'Percepção de Valor Estratégico',
    title: 'Por Que Investir Nesta Transformação Tecnológica?',
    subtitle: 'Este Projeto Representa o Próximo Nível de Escala Comercial da Ecco Cleaner',
    objective: 'Consolidar os ganhos estratégicos (Organização, Automação, Vendas, Redução de Trabalho Manual).',
    copy: 'O investimento não é apenas em um site. Ele representa: Organização Operacional, Atendimento 24/7 com IA, Automação de Tarefas Repetitivas, Crescimento em Vendas B2B, Autoridade de Marca e Redução de Trabalho Manual.',
    visualType: 'GRID'
  },

  // 12. DETALHAMENTO DO BLOCO 01 — DESENVOLVIMENTO
  {
    id: 12,
    block: 'BLOCO_01',
    blockTitle: 'Bloco 01 — Desenvolvimento do Projeto',
    badge: 'Escopo do Projeto',
    title: 'Desenvolvimento Completo da Plataforma Digital',
    subtitle: '14 Itens Inclusos na Construção da Solução Tecnológica Sob Medida',
    objective: 'Listar detalhadamente o escopo do Bloco 01.',
    copy: 'Site Institucional Premium, Desenvolvimento sob medida em Next.js, CRM Exclusivo, Dashboard Administrativo, Integração WhatsApp & Instagram, Atendimento com IA, Gestão de Clientes, Automação Comercial, SEO Técnico, Área Administrativa, Painéis Gerenciais, Treinamento e Implantação.',
    visualType: 'TECH_GRID'
  },

  // 13. DETALHAMENTO DO BLOCO 02 — HOSPEDAGEM E LICENÇAS
  {
    id: 13,
    block: 'BLOCO_02',
    blockTitle: 'Bloco 02 — Infraestrutura da Plataforma',
    badge: 'Manutenção Operacional Mensal',
    title: 'Infraestrutura Cloud & Licenças WhatsApp',
    subtitle: 'Hospedagem de Alta Performance, API Oficial Meta e Manutenção do Site',
    objective: 'Apresentar os custos recorrentes essenciais de infraestrutura.',
    copy: 'Serviços mensais necessários para manter a plataforma rodando 24/7 com Uptime de 99.9%, firewall ativo e canal oficial do WhatsApp conectado.',
    visualType: 'CALCULATOR'
  },

  // 14. DETALHAMENTO DO BLOCO 03 — MARKETING DIGITAL
  {
    id: 14,
    block: 'BLOCO_03',
    blockTitle: 'Bloco 03 — Gestão de Marketing Digital',
    badge: 'Aceleração de Resultados (Opcional)',
    title: 'Gestão de Tráfego Pago, SEO & Conteúdo',
    subtitle: 'Mensalidade: R$ 2.500,00 | Serviço Opcional Altamente Recomendado para Maximizar ROI',
    objective: 'Apresentar os 12 serviços inclusos na gestão continuada de marketing.',
    copy: 'Administração do Site, Atualizações, SEO Contínuo, Campanhas no Google Ads, Facebook, Instagram e LinkedIn, Planejamento Editorial, Gestão de Conteúdo, Relatórios Mensais e Otimização Contínua.',
    visualType: 'FUNNEL'
  },

  // 15. DETALHAMENTO DO BLOCO 04 — SUPORTE DE TI
  {
    id: 15,
    block: 'BLOCO_04',
    blockTitle: 'Bloco 04 — Suporte Tecnológico Completo',
    badge: 'Tranquilidade Operacional (Opcional)',
    title: 'Suporte de TI Físico, Remoto & Câmeras',
    subtitle: 'Mensalidade: R$ 1.000,00 | Suporte Presencial, Rede, Wi-Fi, Servidores e CFTV',
    objective: 'Apresentar o plano de infraestrutura de TI para a sede da Ecco Cleaner.',
    copy: 'Suporte Remoto, Suporte Presencial, Manutenção de Computadores, Redes, Wi-Fi Corporativo, Servidores, Backup, Segurança, Câmeras (DVR/NVR), Alarmes e Controle de Acesso.',
    visualType: 'TRANSPARENCY'
  },

  // 16. POLÍTICA COMERCIAL DE TRANSITION & RESSALVAS
  {
    id: 16,
    block: 'BLOCO_04',
    blockTitle: 'Transparência Comercial',
    badge: 'Termos de Aquisição de Hardwares',
    title: 'Transparência em Equipamentos & Licenças Adicionais',
    subtitle: 'Mão de Obra e Atendimento Inclusos | Peças e Softwares Orçados Separadamente',
    objective: 'Esclarecer que novos equipamentos e peças não estão inclusos na mensalidade de suporte.',
    copy: 'Observação: Aquisição de equipamentos, peças, licenças, softwares ou novas implementações não estão inclusas na mensalidade e serão orçadas separadamente com aprovação prévia.',
    visualType: 'SUMMARY'
  },

  // 17. ROADMAP E CRONOGRAMA DE EXECUÇÃO
  {
    id: 17,
    block: 'CRONOGRAMA',
    blockTitle: 'Planejamento Operacional',
    badge: 'Roadmap de Implementação em 8 Passos',
    title: 'Passo a Passo da Assinatura ao Suporte Contínuo',
    subtitle: 'Processo Organizado e Previsível para Reduzir a Ansiedade da Equipe',
    objective: 'Apresentar o Roadmap claro: Assinatura → Planejamento → Design → Desenvolvimento → Testes → Treinamento → Go Live → Suporte.',
    copy: 'Cada etapa possui marcos de validação definidos para garantir transparência total e cumprimento de prazos durante o projeto.',
    visualType: 'TIMELINE'
  },

  // 18. INVESTIMENTO 01 - DESENVOLVIMENTO
  {
    id: 18,
    block: 'CRONOGRAMA',
    blockTitle: 'Proposta Comercial',
    badge: 'Investimento 01',
    title: 'Desenvolvimento do Portal & CRM',
    subtitle: 'Projeto desenvolvido sob medida para a sua empresa',
    objective: 'Apresentar apenas o projeto principal e o valor do desenvolvimento.',
    copy: 'Portal Web, CRM, IA integrada, WhatsApp, OpenAI / Whisper, Painéis administrativos, Banco de dados e Infraestrutura inicial.',
    visualType: 'INVESTMENT_DEV'
  },

  // 19. INVESTIMENTO 02 - RECORRENTES
  {
    id: 19,
    block: 'CRONOGRAMA',
    blockTitle: 'Proposta Comercial',
    badge: 'Investimento 02',
    title: 'Infraestrutura, Marketing e Suporte',
    subtitle: 'Serviços recorrentes essenciais para a operação contínua e escalabilidade',
    objective: 'Apresentar de forma separada a infraestrutura, marketing e suporte de TI.',
    copy: 'Visão clara dos serviços mensais que mantêm o projeto rodando com alta performance e gerando resultados.',
    visualType: 'INVESTMENT_RECURRING'
  },

  // 20. RESUMO EXECUTIVO
  {
    id: 20,
    block: 'CRONOGRAMA',
    blockTitle: 'Proposta Comercial Consolidada',
    badge: 'Resumo Executivo',
    title: 'Visão Consolidada dos Investimentos',
    subtitle: 'Transparência total nos custos e maximização dos benefícios gerados',
    objective: 'Apresentar a visão completa dos 4 blocos e destacar a economia gerada pela centralização.',
    copy: 'Mais do que desenvolver um portal, a Rooted entrega uma plataforma completa para acelerar o crescimento da empresa com tecnologia, automação e suporte especializado.',
    visualType: 'INVESTMENT_SUMMARY'
  },

  // 21. SELO DE PARCERIA & CLOSING
  {
    id: 21,
    block: 'CRONOGRAMA',
    blockTitle: 'Compromisso Rooted',
    badge: 'Selo de Compromisso Estratégico',
    title: 'Mais que um Fornecedor. Um Parceiro de Tecnologia para o Crescimento da Ecco Cleaner.',
    subtitle: 'Estamos Prontos para Iniciar a Construção do Futuro Digital da Sua Empresa',
    objective: 'Finalizar com autoridade, exibir o selo oficial de parceria e disponibilizar o CTA de assinatura do contrato.',
    copy: 'Conte com a equipe técnica da Rooted para acompanhar a evolução da Ecco Cleaner em todas as frentes tecnológicas.',
    visualType: 'CLOSING',
    ctaText: 'Aprovar Proposta e Iniciar Projeto',
    ctaSubtext: 'Fale diretamente com nossa diretoria comercial via WhatsApp'
  }
];
