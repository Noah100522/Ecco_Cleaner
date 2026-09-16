'use client';

import React from 'react';

interface Keynote3DCanvasProps {
  activeSlideId: number;
}

/**
 * Keynote3DCanvas — Pure Architectural Stage Lighting Layer.
 * Strictly free of generic floating spheres, random cubes, or cliché space particles.
 * Every visual element strictly serves product narrative.
 */
export const Keynote3DCanvas: React.FC<Keynote3DCanvasProps> = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {/* Pure Spotlights & Cinematic Gradient Stage Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FFDE00]/10 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-sky-500/5 blur-[180px] rounded-full pointer-events-none" />
    </div>
  );
};
