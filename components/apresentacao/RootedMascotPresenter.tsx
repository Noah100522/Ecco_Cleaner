'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface RootedMascotPresenterProps {
  slideId: number;
}

/**
 * RootedMascotPresenter — Interactive Stage Mascot.
 * Positioned higher up and significantly larger so the mascot directly interacts with presentation cards and headlines.
 */
export const RootedMascotPresenter: React.FC<RootedMascotPresenterProps> = ({ slideId }) => {
  const [imgError, setImgError] = useState<boolean>(false);

  React.useEffect(() => {
    setImgError(false);
  }, [slideId]);

  let mappedId = slideId;
  if (slideId === 6) mappedId = 7;
  else if (slideId === 7) mappedId = 6;

  // Fallback to slide 1 for slides beyond 19 since we don't have images for them yet
  if (mappedId > 19) {
    mappedId = 1;
  }

  // Dynamic path for slide mascot pose
  const mascotPath = imgError ? '/img/slide-1.png' : `/img/slide-${mappedId}.png`;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slideId}
        initial={{ opacity: 0, scale: 0.88, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 40 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-12 sm:bottom-16 md:bottom-20 right-2 sm:right-6 md:right-10 z-30 pointer-events-none select-none"
      >
        {/* Significantly Larger Mascot Frame on Desktop, smaller on Mobile */}
        <div className="relative w-40 h-40 sm:w-[24rem] sm:h-[24rem] md:w-[38rem] md:h-[38rem] flex items-center justify-center translate-y-6 md:translate-y-0 opacity-80 md:opacity-100">
          {/* Volumetric Stage Glow behind character */}
          <div className="absolute inset-0 bg-[#FFDE00]/20 rounded-full blur-[40px] md:blur-[120px] pointer-events-none" />

          {/* Seamless Mascot Image Layer with Zero Background Box */}
          <div 
            className="w-full h-full relative z-10 drop-shadow-[0_25px_60px_rgba(0,0,0,1)]"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)' 
            }}
          >
            <img
              key={mascotPath}
              src={mascotPath}
              alt={`Mascote Rooted - Slide ${slideId}`}
              onError={() => setImgError(true)}
              className="w-full h-full object-contain object-bottom mix-blend-screen contrast-110 brightness-105 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
