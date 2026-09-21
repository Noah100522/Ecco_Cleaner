'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function ProposalPromo() {
  const pathname = usePathname()
  const [active, setActive] = useState(false)

  useEffect(() => {
    const todayInBrazil = new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(new Date())

    setActive(pathname === '/proposta' && todayInBrazil === '21/09/2026')
  }, [pathname])

  if (!active) return null

  return (
    <section className="relative z-[60] border-b-2 border-black bg-[#FFDE00] px-5 py-4 text-black shadow-[0_8px_30px_rgba(255,222,0,.18)] sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[.22em]">Condição especial • somente hoje • 21/09/2026</p>
          <p className="mt-1 text-lg font-black leading-tight sm:text-2xl">Feche hoje e economize R$ 1.000,00 no desenvolvimento do site</p>
          <p className="mt-1 text-xs font-bold sm:text-sm">Depois de hoje, o valor retorna ao preço normal de R$ 5.000,00.</p>
        </div>
        <div className="shrink-0 rounded-2xl border-2 border-black bg-black px-5 py-3 text-center text-[#FFDE00]">
          <span className="block text-xs font-bold line-through opacity-70">R$ 5.000,00</span>
          <strong className="block text-3xl font-black leading-none sm:text-4xl">R$ 4.000,00</strong>
        </div>
      </div>
    </section>
  )
}
