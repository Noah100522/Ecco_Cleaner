'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, Keyboard, Printer, Sparkles } from 'lucide-react';

interface SlideNavigationProps {
  currentSlideIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

export const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlideIndex,
  totalSlides,
  onPrev,
  onNext
}) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#000000]/90 backdrop-blur-md border-t border-[#18181B] px-4 py-3 flex items-center justify-between text-white">
      {/* Keyboard Hint */}
      <div className="hidden md:flex items-center gap-2 text-xs text-[#A1A1AA]">
        <Keyboard className="w-4 h-4 text-[#FFDE00]" />
        <span>Use as setas <kbd className="px-1.5 py-0.5 bg-[#18181B] border border-[#27272A] rounded text-[10px] text-white">←</kbd> <kbd className="px-1.5 py-0.5 bg-[#18181B] border border-[#27272A] rounded text-[10px] text-white">→</kbd> ou <kbd className="px-1.5 py-0.5 bg-[#18181B] border border-[#27272A] rounded text-[10px] text-white">Espaço</kbd></span>
      </div>

      {/* Slide Navigation Buttons */}
      <div className="flex items-center gap-3 mx-auto md:mx-0">
        <button
          onClick={onPrev}
          disabled={currentSlideIndex === 0}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
            currentSlideIndex === 0
              ? 'opacity-40 cursor-not-allowed bg-[#18181B] text-[#A1A1AA]'
              : 'bg-[#18181B] border border-[#27272A] text-white hover:border-[#FFDE00] hover:text-[#FFDE00]'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          Anterior
        </button>

        <span className="text-xs font-bold text-[#A1A1AA] px-2">
          {currentSlideIndex + 1} de {totalSlides}
        </span>

        <button
          onClick={onNext}
          disabled={currentSlideIndex === totalSlides - 1}
          className={`px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
            currentSlideIndex === totalSlides - 1
              ? 'opacity-40 cursor-not-allowed bg-[#18181B] text-[#A1A1AA]'
              : 'bg-[#FFDE00] text-black font-extrabold shadow-[0_0_20px_rgba(255,222,0,0.4)] hover:bg-[#ffe633]'
          }`}
        >
          Próximo
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Rooted Partner Badge */}
      <div className="hidden lg:flex items-center gap-2 text-xs text-[#A1A1AA]">
        <Sparkles className="w-3.5 h-3.5 text-[#FFDE00]" />
        <span>Rooted • Solução Corporativa</span>
      </div>
    </footer>
  );
};
