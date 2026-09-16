'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Layers, Maximize, Minimize, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { SLIDES_DATA } from './slidesData';

interface PresentationHeaderProps {
  currentSlideIndex: number;
  totalSlides: number;
  onSelectSlide: (index: number) => void;
}

export const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  currentSlideIndex,
  totalSlides,
  onSelectSlide
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const currentSlide = SLIDES_DATA[currentSlideIndex];
  const progressPercent = Math.round(((currentSlideIndex + 1) / totalSlides) * 100);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/90 backdrop-blur-md border-b border-[#18181B] px-4 py-3 flex items-center justify-between text-white transition-all">
        {/* Brand / Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8">
            <Image src="/img/4.png" alt="Rooted" width={32} height={32} className="object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest text-[#FFDE00] uppercase">ROOTED</span>
              <span className="text-[10px] text-[#A1A1AA]">× ECCO CLEANER</span>
            </div>
            <p className="text-xs font-semibold text-white hidden sm:block truncate max-w-[300px]">
              {currentSlide ? currentSlide.title : 'Apresentação Comercial Premium'}
            </p>
          </div>
        </div>

        {/* Progress & Slide Counter */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-[#18181B] border border-[#27272A] px-3 py-1 rounded-full">
            <span className="text-xs text-[#A1A1AA]">Progresso</span>
            <div className="w-24 h-1.5 bg-[#09090B] rounded-full overflow-hidden border border-[#27272A]">
              <div
                className="h-full bg-[#FFDE00] transition-all duration-300 shadow-[0_0_8px_#FFDE00]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-mono text-[#FFDE00] font-bold">{progressPercent}%</span>
          </div>

          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center gap-1.5 bg-[#18181B] border border-[#27272A] px-3 py-1.5 rounded-lg text-xs font-semibold hover:border-[#FFDE00]/50 transition-all text-white"
          >
            <Menu className="w-3.5 h-3.5 text-[#FFDE00]" />
            <span className="hidden sm:inline">Tela {currentSlideIndex + 1} de {totalSlides}</span>
            <span className="sm:hidden">{currentSlideIndex + 1}/{totalSlides}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 bg-[#18181B] border border-[#27272A] rounded-lg text-[#A1A1AA] hover:text-white hover:border-[#FFDE00]/50 transition-all"
            title="Modo Tela Cheia"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Slide Drawer Selector */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-[#09090B] border-l border-[#27272A] h-full flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#18181B] mb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#FFDE00]" />
                  <h3 className="text-base font-bold text-white">Navegação pelas {totalSlides} Telas</h3>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1 text-[#A1A1AA] hover:text-white rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1.5">
                {SLIDES_DATA.map((slide, idx) => (
                  <div
                    key={slide.id}
                    onClick={() => {
                      onSelectSlide(idx);
                      setDrawerOpen(false);
                    }}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      currentSlideIndex === idx
                        ? 'bg-[#18181B] border-[#FFDE00] text-white shadow-[0_0_10px_rgba(255,222,0,0.15)]'
                        : 'bg-[#000000] border-[#18181B] text-[#A1A1AA] hover:border-[#27272A] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                        currentSlideIndex === idx ? 'bg-[#FFDE00] text-black' : 'bg-[#18181B] text-[#A1A1AA]'
                      }`}>
                        {slide.id}
                      </span>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#FFDE00]">
                          {slide.blockTitle}
                        </span>
                        <h4 className="text-xs font-semibold text-white line-clamp-1">{slide.title}</h4>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#A1A1AA]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#18181B] text-center text-xs text-[#A1A1AA]">
              Rooted • Solução Corporativa Ecco Cleaner
            </div>
          </div>
        </div>
      )}
    </>
  );
};
