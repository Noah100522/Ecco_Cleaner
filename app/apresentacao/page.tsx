'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';

import { PresentationHeader } from '@/components/apresentacao/PresentationHeader';
import { SlideNavigation } from '@/components/apresentacao/SlideNavigation';
import { SlideViewer } from '@/components/apresentacao/SlideViewer';
import { RootedMascotPresenter } from '@/components/apresentacao/RootedMascotPresenter';
import { SLIDES_DATA } from '@/components/apresentacao/slidesData';

// Dynamically import 3D Canvas to optimize SSR
const Keynote3DCanvas = dynamic(
  () => import('@/components/apresentacao/Keynote3DCanvas').then((mod) => mod.Keynote3DCanvas),
  { ssr: false }
);

export default function DigitalKeynotePage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const totalSlides = SLIDES_DATA.length;

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleSelectSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
    }
  }, [totalSlides]);

  // Keynote Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const currentSlide = SLIDES_DATA[currentSlideIndex];

  return (
    <div className="h-screen w-screen bg-[#000000] text-white selection:bg-[#FFDE00] selection:text-[#000000] flex flex-col justify-between pt-16 pb-16 relative overflow-hidden font-sans select-none">
      {/* React Three Fiber 3D Background Canvas */}
      <Keynote3DCanvas activeSlideId={currentSlide.id} />

      {/* Top Header */}
      <PresentationHeader
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        onSelectSlide={handleSelectSlide}
      />

      {/* Fullscreen Keynote Stage (Scrollable on small screens) */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-start md:justify-center overflow-y-auto overflow-x-hidden w-full px-4 md:px-0 pt-4 pb-20 md:py-0">
        <SlideViewer
          slide={currentSlide}
          onNextSlide={handleNext}
        />
      </main>

      {/* Rooted Virtual Mascot Presenter (Per Slide) */}
      <RootedMascotPresenter slideId={currentSlide.id} />

      {/* Floating Bottom Controls */}
      <SlideNavigation
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
