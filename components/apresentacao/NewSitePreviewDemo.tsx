'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Film } from 'lucide-react';

export const NewSitePreviewDemo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center select-none text-white">
      {/* Studio Display Video Frame */}
      <div className="w-full max-w-4xl rounded-3xl border-2 border-[#FFDE00]/60 bg-[#09090B] shadow-[0_0_60px_rgba(255,222,0,0.3)] overflow-hidden relative group">
        {/* Top Mac Bar */}
        <div className="bg-[#18181B] px-4 py-2.5 border-b border-[#27272A] flex items-center justify-between z-20 relative">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
            <span className="text-[11px] font-mono text-[#A1A1AA] ml-2">
              Demonstração em Vídeo • Novo Portal Ecco Cleaner
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="px-2.5 py-1 bg-[#27272A] hover:bg-[#3F3F46] rounded-md text-[10px] font-bold text-white flex items-center gap-1 transition-all"
            >
              {isMuted ? <VolumeX className="w-3 h-3 text-red-400" /> : <Volume2 className="w-3 h-3 text-green-400" />}
              <span>{isMuted ? 'Mudo' : 'Som'}</span>
            </button>
            <button
              onClick={togglePlay}
              className="px-2.5 py-1 bg-[#FFDE00] text-black hover:bg-[#ffe633] rounded-md text-[10px] font-extrabold flex items-center gap-1 transition-all"
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{isPlaying ? 'Pausar' : 'Play'}</span>
            </button>
          </div>
        </div>

        {/* MP4 VIDEO CONTAINER */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src="/img/video-site.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-b-2xl"
          />


        </div>
      </div>

      {/* Frame Caption */}
      <span className="text-xs text-[#A1A1AA] mt-3 font-mono">
        Demonstração em Vídeo Oficial do Conceito Visual &amp; Navegação
      </span>
    </div>
  );
};
