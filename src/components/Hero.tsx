import { useState, useEffect } from "react";
import videoHero from "../assets/videos/video_hero.mp4";

// Robust typewriter sub-component using slice
function Typewriter({ text, speed = 50, onComplete }: { text: string; speed?: number; onComplete?: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < text.length) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  useEffect(() => {
    if (currentIndex >= text.length && text.length > 0) {
      const timeout = setTimeout(() => {
        onComplete?.();
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text.length, onComplete]);

  return <span>{text.slice(0, currentIndex)}</span>;
}

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isLine1Complete, setIsLine1Complete] = useState(false);

  const heroTexts = [
    { line1: "Celebrá tus momentos más especiales", line2: "con nosotros en Domínica." },
    { line1: "El espacio ideal en Brandsen", line2: "para tus festejos y momentos felices." },
    { line1: "Comodidad, calidez y alegría", line2: "en cada rincón de nuestro salón." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
      setIsLine1Complete(false);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroTexts.length]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen h-screen flex items-center justify-center pt-20 pb-20 text-white overflow-hidden"
    >
      {/* Background Full Video - Much more visible, clear and bright */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          src={videoHero}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        />
        {/* Soft, balanced vignette */}
        <div className="absolute inset-0 bg-stone-950/50" />
      </div>

      {/* Floating Small Rectangular Confetti & Botanical Ramitas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
        <div className="absolute top-24 left-10 w-2.5 h-1 bg-amber-400 rounded-none rotate-45 animate-confetti-1 opacity-90 shadow-xs" />
        <div className="absolute top-36 left-1/4 w-3 h-1.5 bg-rose-400 rounded-none animate-confetti-2 opacity-90" />
        <div className="absolute top-20 right-20 w-2.5 h-1 bg-emerald-400 rounded-none rotate-12 animate-confetti-3 opacity-90" />
        <div className="absolute top-48 right-1/3 w-2 h-1 bg-sky-400 rounded-none animate-confetti-1 opacity-80" />
        <div className="absolute bottom-28 left-20 w-3 h-1.5 bg-sky-300 rounded-none rotate-45 animate-confetti-2 opacity-85" />
        <div className="absolute bottom-36 right-16 w-2.5 h-1 bg-yellow-300 rounded-none rotate-12 animate-confetti-3 opacity-90" />
        <div className="absolute top-1/2 left-8 w-2 h-1 bg-teal-300 rounded-none animate-confetti-1 opacity-80" />
        <div className="absolute top-1/3 right-10 w-2.5 h-1 bg-rose-300 rounded-none rotate-45 animate-confetti-2 opacity-85" />

        {/* Floating Botanical Ramitas */}
        <svg className="absolute top-16 left-1/3 w-8 h-8 text-amber-200/70 animate-confetti-2 rotate-12" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M30 55 C30 40 30 25 30 5" />
          <path d="M30 40 C20 35 12 25 8 18 C15 22 24 30 30 40 Z" fill="currentColor" fillOpacity="0.25" />
          <path d="M30 30 C40 25 48 15 52 8 C45 12 36 20 30 30 Z" fill="currentColor" fillOpacity="0.25" />
          <path d="M30 18 C22 12 16 5 12 2 C18 6 24 12 30 18 Z" fill="currentColor" fillOpacity="0.25" />
        </svg>

        <svg className="absolute bottom-20 right-1/4 w-9 h-9 text-amber-300/60 animate-confetti-3 -rotate-45" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M30 55 C30 40 30 25 30 5" />
          <path d="M30 40 C20 35 12 25 8 18 C15 22 24 30 30 40 Z" fill="currentColor" fillOpacity="0.25" />
          <path d="M30 30 C40 25 48 15 52 8 C45 12 36 20 30 30 Z" fill="currentColor" fillOpacity="0.25" />
          <path d="M30 18 C22 12 16 5 12 2 C18 6 24 12 30 18 Z" fill="currentColor" fillOpacity="0.25" />
        </svg>
      </div>

      {/* Centered Main Content */}
      <div className="relative z-25 max-w-4xl w-full px-4 sm:px-6 lg:px-8 mx-auto text-center">
        {/* Rotating script title in exactly two lines with smaller typography */}
        <h1
          id="hero-title"
          className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-normal tracking-wide drop-shadow-2xl leading-snug transition-opacity duration-500"
        >
          <span className="block">
            <Typewriter 
              key={`line1-${currentTextIndex}`} 
              text={heroTexts[currentTextIndex].line1} 
              onComplete={() => setIsLine1Complete(true)} 
            />
          </span>
          <span className="block">
            {isLine1Complete && (
              <Typewriter 
                key={`line2-${currentTextIndex}`} 
                text={heroTexts[currentTextIndex].line2} 
              />
            )}
          </span>
        </h1>
      </div>

      {/* Disruptive festive wave transition at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 130"
          preserveAspectRatio="none"
          className="relative block w-full h-14 sm:h-20"
        >
          <path
            d="M0,20 C180,80 320,-10 520,50 C720,110 930,10 1200,60 L1200,130 L0,130 Z"
            fill="#BEE3F8"
            fillOpacity="0.85"
          />
          <path
            d="M0,45 C220,-10 400,90 640,30 C860,-15 1020,80 1200,45 L1200,130 L0,130 Z"
            fill="#FEF08A"
            fillOpacity="0.75"
          />
          <path
            d="M0,65 C150,110 350,15 500,85 C660,140 920,40 1200,80 L1200,130 L0,130 Z"
            fill="#E0F2FE"
          />
        </svg>
      </div>
    </section>
  );
}
