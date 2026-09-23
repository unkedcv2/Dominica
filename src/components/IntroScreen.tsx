import { useState, useMemo } from "react";
import dominicaLogo from "../assets/logos/dominica_logo.png";
import { ChevronDown } from "lucide-react";

// Delicate botanical branch matching Domínica's logo
function DominicaBranch({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Central stem */}
      <path
        d="M32 76 C35 55 37 40 40 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Right curved branch */}
      <path
        d="M37 50 C48 42 60 32 70 16"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Leaves on left main stem */}
      <path
        d="M40 14 C36 24 33 32 38 40 C43 32 44 22 40 14 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.0"
      />
      <path
        d="M26 18 C25 28 28 35 37 38 C35 30 33 22 26 18 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.0"
      />
      <path
        d="M16 32 C18 40 22 46 34 47 C31 40 26 34 16 32 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.0"
      />
      <path
        d="M37 28 C34 36 33 42 36 47 C39 42 40 34 37 28 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.0"
      />
      <path
        d="M14 44 C20 50 25 54 36 53 C31 48 24 44 14 44 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.0"
      />

      {/* Leaves on right branch */}
      <path
        d="M70 16 C63 24 58 30 52 35 C60 30 67 24 70 16 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.0"
      />
      <path
        d="M72 26 C62 34 56 38 48 43 C58 39 67 33 72 26 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.0"
      />
      <path
        d="M65 42 C56 46 50 48 42 50 C51 48 60 45 65 42 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.0"
      />
      <path
        d="M58 56 C50 56 45 54 38 52 C46 54 53 55 58 56 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.0"
      />
    </svg>
  );
}

export default function IntroScreen({ onEnter }: { onEnter: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(onEnter, 700);
  };

  // Generate small leaves falling across the screen with slower, graceful motion and lighter tone
  const leaves = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const duration = Math.random() * 12 + 16; // 16s to 28s for a slower, serene drift
      const delay = -(Math.random() * duration); // Negative delay so they start already spread across the screen
      const size = Math.floor(Math.random() * 10 + 14); // 14px to 24px (small & delicate)
      const left = `${(i * 3.3 + Math.random() * 3) % 96}%`;
      const opacity = Number((Math.random() * 0.2 + 0.32).toFixed(2)); // 0.32 to 0.52 (lighter and subtle)
      return {
        id: i,
        left,
        size,
        duration,
        delay,
        opacity,
      };
    });
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between py-10 px-6 sm:py-12 text-center overflow-hidden transition-all duration-700 select-none ${
        isExiting ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
      }`}
      style={{ backgroundColor: "#F4F3EE" }}
      onClick={handleEnter}
      onTouchStart={handleEnter}
    >
      {/* Delicate falling & rotating botanical ramitas (softer and lighter) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute top-0 animate-leaf-fall"
            style={{
              left: leaf.left,
              width: leaf.size,
              height: leaf.size,
              animationDuration: `${leaf.duration}s`,
              animationDelay: `${leaf.delay}s`,
              opacity: leaf.opacity,
              color: "#9E866F", // Lighter, subtle botanical beige/brown
            }}
          >
            <DominicaBranch className="w-full h-full" />
          </div>
        ))}
      </div>

      {/* Top spacer for balanced vertical distribution */}
      <div className="hidden sm:block h-2" />

      {/* Main Content Modal Card */}
      <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto my-auto">
        {/* Logo without any box, frame, or border, enlarged */}
        <div className="relative mb-5 flex items-center justify-center">
          <img
            src={dominicaLogo}
            alt="Domínica Logo"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Smaller refined typography */}
        <h1 className="font-script text-2xl sm:text-3xl md:text-4xl text-amber-950 mb-2 px-4 leading-snug">
          Bienvenido a Domínica Eventos
        </h1>

        <p className="text-stone-600 font-medium text-xs sm:text-sm max-w-xs px-4">
          Entrá y descubrí todo lo que tenemos para ofrecerte.
        </p>
      </div>

      {/* Entry Action - separated and placed lower down */}
      <div className="relative z-10 pt-6 pb-2 sm:pb-4">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleEnter();
          }}
          className="group flex flex-col items-center text-amber-950 animate-bounce cursor-pointer transition-transform active:scale-95"
        >
          <span className="font-bold uppercase tracking-wider text-[10px] sm:text-xs mb-2 text-stone-600 group-hover:text-amber-950 transition-colors">
            Deslizá o tocá para entrar
          </span>
          <div className="w-9 h-9 rounded-full border border-amber-900/40 flex items-center justify-center group-hover:bg-amber-900 group-hover:text-white transition-all shadow-xs">
            <ChevronDown className="w-4 h-4 text-amber-900 group-hover:text-white" />
          </div>
        </button>
      </div>
    </div>
  );
}

