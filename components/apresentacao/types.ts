export interface SlideData {
  id: number;
  block: 'INTRO' | 'BLOCO_01' | 'BLOCO_02' | 'BLOCO_03' | 'BLOCO_04' | 'CRONOGRAMA';
  blockTitle: string;
  badge: string;
  title: string;
  subtitle: string;
  objective: string;
  copy: string;
  visualType: 'HERO' | 'AUDIT' | 'NEW_SITE_PREVIEW' | 'DIAGRAM' | 'VS_WORDPRESS' | 'JOURNEY' | 'GRID' | 'CRM_INBOX' | 'CRM_RAG' | 'CRM_CAMPAIGN' | 'CALCULATOR' | 'TIMELINE' | 'TECH_GRID' | 'FUNNEL' | 'METRICS' | 'TRANSPARENCY' | 'SUMMARY' | 'CLOSING';
  icons?: string[];
  ctaText?: string;
  ctaSubtext?: string;
}

export interface InvestmentState {
  projectTotal: number;
  entryPayment: number;
  installmentsCount: number;
  installmentValue: number;

  hostingCost: number;
  whatsappApiCost: number;
  maintenanceCost: number;

  marketingActive: boolean;
  marketingCost: number;

  itSupportActive: boolean;
  itSupportCost: number;
}
