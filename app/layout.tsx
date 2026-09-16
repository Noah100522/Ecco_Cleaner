import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ecco Cleaner | Fabricante de Equipamentos para Limpeza Profissional',
  description:
    'Fabricante brasileiro de equipamentos e peças para limpeza profissional: lavadoras de alta pressão, lavadoras de fachada e vidros, limpeza de placas solares, robôs, aspiradores e varredeiras.',
  generator: 'v0.app',
  keywords: [
    'Ecco Cleaner',
    'lavadora de alta pressão',
    'lavadora de fachada',
    'limpeza de placa solar',
    'robô de limpeza',
    'aspirador industrial',
    'varredeira',
    'limpeza profissional',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#009d56',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`light bg-background ${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
