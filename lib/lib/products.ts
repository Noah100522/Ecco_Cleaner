export type Category = {
  slug: string
  name: string
  shortName: string
  description: string
  image: string
}

export type Product = {
  slug: string
  name: string
  categorySlug: string
  tagline: string
  description: string
  features: string[]
  image: string
  highlight?: boolean
  launch?: boolean
}

export const categories: Category[] = [
  {
    slug: "lavadora-de-fachada",
    name: "Lavadora de Fachada e Vidros",
    shortName: "Lavadora de Fachada",
    description:
      "Equipamentos para limpeza de vidros e fachadas em altura com água pura, sem produtos químicos e com máxima segurança.",
    image: "/ecco/master.jpg",
  },
  {
    slug: "limpeza-em-placa-solar",
    name: "Limpeza de Placa Solar",
    shortName: "Placa Solar",
    description:
      "Sistemas de limpeza para painéis fotovoltaicos que preservam a eficiência de geração e prolongam a vida útil das placas.",
    image: "/ecco/placa-solar.jpg",
  },
  {
    slug: "lavadora-de-alta-pressao",
    name: "Lavadora de Alta Pressão",
    shortName: "Alta Pressão",
    description:
      "Lavadoras de alta pressão robustas para uso profissional e industrial, com alto desempenho e durabilidade.",
    image: "/ecco/alta-pressao.png",
  },
  {
    slug: "lavadora-de-piso",
    name: "Lavadora de Piso",
    shortName: "Lavadora de Piso",
    description:
      "Lavadoras de piso com operação a pé e a bordo para higienização rápida e eficiente de grandes áreas.",
    image: "/ecco/lavadora-piso.png",
  },
  {
    slug: "limpeza-robotizada",
    name: "Limpeza Robotizada",
    shortName: "Robôs",
    description:
      "Robôs de limpeza autônomos para painéis solares e superfícies, unindo tecnologia e produtividade.",
    image: "/ecco/robo.jpg",
  },
  {
    slug: "aspirador",
    name: "Aspiradores",
    shortName: "Aspiradores",
    description:
      "Aspiradores profissionais de pó e líquidos com alta capacidade e potência de sucção para uso contínuo.",
    image: "/ecco/aspirador.png",
  },
  {
    slug: "varredeira",
    name: "Varredeiras",
    shortName: "Varredeiras",
    description:
      "Varredeiras profissionais para recolhimento de resíduos em grandes áreas internas e externas.",
    image: "/ecco/varredeira.png",
  },
  {
    slug: "tratamento-de-piso",
    name: "Tratamento de Piso",
    shortName: "Tratamento de Piso",
    description:
      "Polidoras e removedoras de cera para tratamento, restauração e conservação de pisos.",
    image: "/ecco/cat-removedora.png",
  },
  {
    slug: "tratamento-de-agua",
    name: "Tratamento de Água",
    shortName: "Tratamento de Água",
    description:
      "Resinas, filtros e condutivímetros para produção de água pura, essencial na limpeza de vidros e placas solares.",
    image: "/ecco/tratamento-agua.png",
  },
  {
    slug: "escovas-e-hastes",
    name: "Escovas e Hastes",
    shortName: "Escovas e Hastes",
    description:
      "Escovas e hastes modulares em fibra de carbono para limpeza em altura com leveza e alcance.",
    image: "/ecco/escova-haste.png",
  },
  {
    slug: "pecas",
    name: "Peças e Componentes",
    shortName: "Peças",
    description:
      "Linha completa de peças e componentes originais Ecco Cleaner para manutenção e reposição.",
    image: "/ecco/cat-pecas.png",
  },
]

export const products: Product[] = [
  // Lavadora de fachada e vidros
  {
    slug: "lavadora-ecco-cleaner-master",
    name: "Lavadora Ecco Cleaner Master",
    categorySlug: "lavadora-de-fachada",
    tagline: "Topo de linha para limpeza de vidros e fachadas com água pura",
    description:
      "A Lavadora Ecco Cleaner Master é o equipamento mais completo da linha de limpeza em altura. Produz água pura desmineralizada para limpeza de vidros e fachadas sem uso de produtos químicos, garantindo acabamento impecável e sem manchas.",
    features: [
      "Sistema de água pura desmineralizada",
      "Controle digital de condutividade",
      "Alta autonomia de operação",
      "Ideal para grandes fachadas e edifícios",
    ],
    image: "/ecco/master.jpg",
    highlight: true,
  },
  {
    slug: "lavadora-ecco-cleaner-direct",
    name: "Lavadora Ecco Cleaner Direct",
    categorySlug: "lavadora-de-fachada",
    tagline: "Limpeza direta da rede de água com praticidade",
    description:
      "A Lavadora Ecco Cleaner Direct conecta-se diretamente à rede de água, oferecendo uma solução prática e econômica para limpeza de vidros e fachadas em altura.",
    features: [
      "Conexão direta à rede de água",
      "Operação simples e rápida",
      "Compacta e portátil",
      "Baixo custo de manutenção",
    ],
    image: "/ecco/direct.jpg",
    highlight: true,
  },
  {
    slug: "lavadora-ecco-cleaner-plus",
    name: "Lavadora Ecco Cleaner Plus",
    categorySlug: "lavadora-de-fachada",
    tagline: "Equilíbrio entre desempenho e portabilidade",
    description:
      "A Lavadora Ecco Cleaner Plus entrega alto desempenho na produção de água pura com um formato prático para o dia a dia do profissional de limpeza em altura.",
    features: [
      "Sistema de purificação eficiente",
      "Estrutura reforçada",
      "Fácil transporte",
      "Indicada para uso profissional contínuo",
    ],
    image: "/ecco/master.jpg",
  },
  {
    slug: "lavadora-ecco-cleaner-pro",
    name: "Lavadora Ecco Cleaner Pro",
    categorySlug: "lavadora-de-fachada",
    tagline: "Performance profissional para grandes demandas",
    description:
      "A Lavadora Ecco Cleaner Pro foi desenvolvida para empresas que precisam de alta produtividade na limpeza de vidros e fachadas, com sistema robusto de tratamento de água.",
    features: [
      "Alta capacidade de produção de água pura",
      "Construção robusta e durável",
      "Monitoramento de condutividade",
      "Excelente custo-benefício",
    ],
    image: "/ecco/direct.jpg",
  },

  // Placa solar
  {
    slug: "sistema-limpeza-placa-solar",
    name: "Sistema de Limpeza de Placa Solar",
    categorySlug: "limpeza-em-placa-solar",
    tagline: "Máxima eficiência para usinas fotovoltaicas",
    description:
      "Solução completa para limpeza de painéis solares que remove sujeira, poeira e resíduos sem riscar as placas, mantendo a eficiência de geração de energia.",
    features: [
      "Escovas macias que não riscam as placas",
      "Uso de água pura sem químicos",
      "Aumenta a geração de energia",
      "Ideal para usinas e telhados",
    ],
    image: "/ecco/placa-solar.jpg",
    highlight: true,
  },

  // Alta pressão
  {
    slug: "lavadora-de-alta-pressao-ecco-cleaner",
    name: "Lavadora de Alta Pressão Ecco Cleaner",
    categorySlug: "lavadora-de-alta-pressao",
    tagline: "Força e durabilidade para uso profissional",
    description:
      "Lavadora de alta pressão desenvolvida para trabalho pesado, com motor robusto e alto desempenho para as mais diversas aplicações industriais e comerciais.",
    features: [
      "Alta pressão de trabalho",
      "Motor robusto para uso contínuo",
      "Estrutura móvel com rodas",
      "Compatível com diversos acessórios",
    ],
    image: "/ecco/alta-pressao.png",
    highlight: true,
  },

  // Lavadora de piso
  {
    slug: "lavadora-de-piso-ecco-cleaner",
    name: "Lavadora de Piso Ecco Cleaner",
    categorySlug: "lavadora-de-piso",
    tagline: "Higienização rápida de grandes áreas",
    description:
      "Lavadora de piso que lava e seca em uma única passada, disponível nas versões de operação a pé e a bordo, ideal para indústrias, supermercados e centros logísticos.",
    features: [
      "Lava e seca em uma passada",
      "Versões a pé e a bordo",
      "Alta autonomia de bateria",
      "Grande rendimento por hora",
    ],
    image: "/ecco/lavadora-piso.png",
    highlight: true,
  },

  // Robôs
  {
    slug: "robo-linear",
    name: "Robô Linear",
    categorySlug: "limpeza-robotizada",
    tagline: "Limpeza autônoma e inteligente",
    description:
      "O Robô Linear automatiza a limpeza de painéis solares e superfícies planas, elevando a produtividade e reduzindo o esforço manual.",
    features: [
      "Operação autônoma",
      "Escovas de alta eficiência",
      "Controle remoto",
      "Ideal para painéis solares",
    ],
    image: "/ecco/robo.jpg",
    launch: true,
    highlight: true,
  },
  {
    slug: "robo-1100",
    name: "Robô 1100",
    categorySlug: "limpeza-robotizada",
    tagline: "Alta produtividade para grandes superfícies",
    description:
      "O Robô 1100 é indicado para limpeza de grandes áreas de painéis solares, combinando alcance, velocidade e segurança na operação.",
    features: [
      "Alcance ampliado",
      "Alta velocidade de limpeza",
      "Sistema de segurança integrado",
      "Baixo consumo de água",
    ],
    image: "/ecco/robo-1100.jpg",
    launch: true,
  },

  // Aspiradores
  {
    slug: "aspirador-ecco-vacuum-cleaner",
    name: "Aspirador Ecco Vacuum Cleaner",
    categorySlug: "aspirador",
    tagline: "Potência de sucção para pó e líquidos",
    description:
      "Aspirador profissional de pó e líquidos com alta potência de sucção e grande capacidade, desenvolvido para uso intenso e contínuo.",
    features: [
      "Aspira pó e líquidos",
      "Alta potência de sucção",
      "Grande capacidade do reservatório",
      "Construção resistente",
    ],
    image: "/ecco/aspirador.png",
    highlight: true,
  },

  // Varredeira
  {
    slug: "varredeira-robust-1020-t",
    name: "Varredeira Robust 1020 T",
    categorySlug: "varredeira",
    tagline: "Recolhimento eficiente em grandes áreas",
    description:
      "A Varredeira Robust 1020 T recolhe resíduos de forma rápida e eficiente em áreas internas e externas, com ótima autonomia e facilidade de operação.",
    features: [
      "Alta capacidade de recolhimento",
      "Operação simples",
      "Ideal para áreas amplas",
      "Baixa emissão de poeira",
    ],
    image: "/ecco/varredeira.png",
  },

  // Tratamento de piso
  {
    slug: "polidora-de-pisos-g685",
    name: "Polidora de Pisos Ecco Cleaner G685",
    categorySlug: "tratamento-de-piso",
    tagline: "Brilho e conservação para todos os pisos",
    description:
      "A Polidora G685 proporciona acabamento profissional no polimento e conservação de pisos, com potência e estabilidade para uso comercial.",
    features: [
      "Alto torque de polimento",
      "Acabamento profissional",
      "Ergonômica e estável",
      "Compatível com discos diversos",
    ],
    image: "/ecco/cat-removedora.png",
  },
  {
    slug: "removedora-de-cera-g700",
    name: "Removedora de Cera Ecco Cleaner G700",
    categorySlug: "tratamento-de-piso",
    tagline: "Remoção profunda de cera e sujeira",
    description:
      "A Removedora G700 remove camadas de cera e sujeira impregnada, preparando o piso para novos tratamentos com máxima eficiência.",
    features: [
      "Remoção profunda de cera",
      "Alta rotação",
      "Robusta e durável",
      "Ideal para restauração de pisos",
    ],
    image: "/ecco/cat-removedora.png",
  },

  // Tratamento de água
  {
    slug: "resina-desmineralizadora",
    name: "Resina Desmineralizadora Ecco Cleaner",
    categorySlug: "tratamento-de-agua",
    tagline: "Água 100% pura para limpeza sem manchas",
    description:
      "Resina desmineralizadora que remove os minerais da água, produzindo água pura essencial para limpeza de vidros e placas solares sem deixar marcas.",
    features: [
      "Produz água pura desmineralizada",
      "Elimina manchas nos vidros",
      "Alto rendimento",
      "Compatível com as lavadoras Ecco",
    ],
    image: "/ecco/tratamento-agua.png",
  },
  {
    slug: "condutivimetro-digital-portatil",
    name: "Condutivímetro Digital Portátil",
    categorySlug: "tratamento-de-agua",
    tagline: "Controle preciso da qualidade da água",
    description:
      "Instrumento digital portátil para medição da condutividade da água, garantindo a pureza ideal no processo de limpeza.",
    features: [
      "Leitura digital precisa",
      "Compacto e portátil",
      "Fácil calibração",
      "Essencial para água pura",
    ],
    image: "/ecco/tratamento-agua.png",
  },

  // Escovas e hastes
  {
    slug: "haste-modular-fibra-de-carbono",
    name: "Haste Modular de Fibra de Carbono",
    categorySlug: "escovas-e-hastes",
    tagline: "Leveza e alcance para limpeza em altura",
    description:
      "Haste modular em fibra de carbono que combina leveza e resistência, permitindo alcançar grandes alturas com segurança e conforto.",
    features: [
      "Fibra de carbono ultraleve",
      "Sistema modular ajustável",
      "Alcance de até 12 metros",
      "Alta resistência",
    ],
    image: "/ecco/escova-haste.png",
    highlight: true,
  },
  {
    slug: "escova-ecco-cleaner-nylon",
    name: "Escova Ecco Cleaner Nylon Natural",
    categorySlug: "escovas-e-hastes",
    tagline: "Cerdas que limpam sem riscar",
    description:
      "Escova com cerdas de nylon natural desenvolvida para limpeza eficiente de vidros e placas solares sem causar riscos nas superfícies.",
    features: [
      "Cerdas de nylon natural",
      "Não risca superfícies",
      "Encaixe rápido nas hastes",
      "Durável e leve",
    ],
    image: "/ecco/escova-haste.png",
  },

  // Peças
  {
    slug: "valvula-controle-de-fluxo-ecco-pro-master",
    name: "Válvula de Controle de Fluxo Ecco Pro Master",
    categorySlug: "pecas",
    tagline: "Peça original para as lavadoras Ecco",
    description:
      "Válvula de controle de fluxo original Ecco Cleaner, garantindo o funcionamento preciso e seguro dos equipamentos.",
    features: [
      "Peça original Ecco Cleaner",
      "Controle preciso de fluxo",
      "Alta durabilidade",
      "Fácil instalação",
    ],
    image: "/ecco/cat-pecas.png",
  },
  {
    slug: "mangueira-pu-8mm-azul",
    name: "Mangueira de PU 8mm Azul (25m)",
    categorySlug: "pecas",
    tagline: "Resistência e flexibilidade",
    description:
      "Mangueira de poliuretano de 8mm com 25 metros, resistente à pressão e ideal para os sistemas de limpeza Ecco Cleaner.",
    features: [
      "Poliuretano de alta resistência",
      "25 metros de comprimento",
      "Flexível e leve",
      "Compatível com a linha Ecco",
    ],
    image: "/ecco/cat-pecas.png",
  },
]

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.categorySlug === slug)
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getHighlightProducts() {
  return products.filter((p) => p.highlight)
}

export function getLaunchProducts() {
  return products.filter((p) => p.launch)
}

export const companyInfo = {
  name: "Ecco Cleaner",
  phoneDisplay: "(41) 3663-5059",
  whatsapp: "554136635059",
  email: "contato@eccocleaner.com.br",
  address: "Rua Santa Alves Petra, 88 – Emiliano Perneta, Pinhais – PR, 83325-170",
  hours: "Segunda à Sexta das 8:00 às 17:45",
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${companyInfo.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
