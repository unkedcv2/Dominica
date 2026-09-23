import { Gift, HeartHandshake, Users, Sparkles, ChevronRight, MessageSquare } from "lucide-react";
import { salonData } from "../data/salonData";
import festejo1 from "../assets/images/ellugar_festejo_01.jpg";
import festejo3 from "../assets/images/ellugar_festejo_03.jpg";
import adentro1 from "../assets/images/ellugar_adentro (1).webp";
import adentroJpg1 from "../assets/images/ellugar_adentro_01.jpg";

export default function EventsTypes() {
  const eventsList = [
    {
      title: "Cumples Infantiles",
      tag: "Infantiles",
      tagline: "Juegos, pelotero y risas",
      revealedText: "Espacio climatizado, metegol, pelotero y coordinación para que los chicos jueguen sin parar.",
      image: festejo1,
      badgeColor: "bg-sky-100 text-sky-900 border-sky-300 group-hover:bg-sky-200 group-hover:border-sky-400",
      accentBorder: "group-hover:border-sky-400 group-hover:ring-2 group-hover:ring-sky-300/60",
      tintWash: "bg-sky-400/40",
      tintBlend: "bg-sky-300/60 mix-blend-color",
      iconColor: "text-sky-700",
      icon: Gift,
    },
    {
      title: "Bautismos & Comunión",
      tag: "Familia",
      tagline: "Calidez y encuentro íntimo",
      revealedText: "Ambiente sereno y acogedor para compartir con padrinos, abuelos y seres queridos.",
      image: adentro1,
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300 group-hover:bg-amber-200 group-hover:border-amber-400",
      accentBorder: "group-hover:border-amber-400 group-hover:ring-2 group-hover:ring-amber-300/60",
      tintWash: "bg-yellow-300/45",
      tintBlend: "bg-amber-300/65 mix-blend-color",
      iconColor: "text-amber-700",
      icon: HeartHandshake,
    },
    {
      title: "Festejos Familiares",
      tag: "Reuniones",
      tagline: "Aniversarios y cumpleaños",
      revealedText: "Vajilla, mobiliario confortable y parrilla listos para que todos disfruten a pleno.",
      image: festejo3,
      badgeColor: "bg-rose-100 text-rose-900 border-rose-300 group-hover:bg-rose-200 group-hover:border-rose-400",
      accentBorder: "group-hover:border-rose-400 group-hover:ring-2 group-hover:ring-rose-300/60",
      tintWash: "bg-rose-400/40",
      tintBlend: "bg-rose-300/65 mix-blend-color",
      iconColor: "text-rose-700",
      icon: Users,
    },
    {
      title: "Celebraciones Únicas",
      tag: "A tu medida",
      tagline: "Propuestas personalizadas",
      revealedText: "Nos adaptamos al formato de encuentro que soñaste con atención cercana y dedicada.",
      image: adentroJpg1,
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300 group-hover:bg-emerald-200 group-hover:border-emerald-400",
      accentBorder: "group-hover:border-emerald-400 group-hover:ring-2 group-hover:ring-emerald-300/60",
      tintWash: "bg-emerald-400/35",
      tintBlend: "bg-emerald-300/60 mix-blend-color",
      iconColor: "text-emerald-700",
      icon: Sparkles,
    },
  ];

  return (
    <section id="eventos" className="py-20 bg-[#FAF6F0] text-stone-900 relative overflow-hidden">
      {/* Festive floating pastel confetti dots */}
      <div className="absolute top-10 left-[8%] w-3 h-3 rounded-full bg-sky-300/60 animate-bounce pointer-events-none" />
      <div className="absolute top-24 right-[12%] w-4 h-4 rounded-full bg-amber-400/50 pointer-events-none" />
      <div className="absolute bottom-20 left-[15%] w-2.5 h-2.5 rounded-full bg-rose-300/60 pointer-events-none" />
      <div className="absolute top-1/2 right-[6%] w-3 h-3 rounded-full bg-emerald-300/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - concise and festive */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200 shadow-xs">
            <span>Propuestas</span>
          </div>

          <h2 className="font-script text-3xl sm:text-4xl lg:text-5xl text-amber-800 font-normal tracking-wide mb-2">
            Cada Festejo Tiene su Lugar
          </h2>
          <p className="text-stone-600 text-sm max-w-lg mx-auto">
            Pasá el cursor sobre cada propuesta para conocer los detalles de cada celebración en Domínica.
          </p>
        </div>

        {/* 4 Elongated Cards Strip in a Single Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {eventsList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group relative rounded-3xl overflow-hidden bg-white border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[420px] sm:h-[440px] cursor-pointer ${item.accentBorder}`}
              >
                {/* Background Photo with Zoom on Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Base subtle dark gradient to guarantee text contrast at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-stone-900/10 transition-colors duration-300" />

                  {/* Full image pastel color dye on hover */}
                  <div className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${item.tintBlend}`} />
                  <div className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${item.tintWash}`} />
                </div>

                {/* Top: Pill Tag */}
                <div className="relative z-10 p-4 flex items-center justify-between">
                  <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold border shadow-xs backdrop-blur-md transition-all duration-300 group-hover:scale-105 ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center shadow-xs transition-colors duration-300 group-hover:bg-white">
                    <Icon className={`w-4 h-4 transition-colors duration-300 ${item.iconColor}`} />
                  </div>
                </div>

                {/* Bottom: Title, Subtitle and Hover-revealed text */}
                <div className="relative z-10 p-5 flex flex-col justify-end text-white">
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-white group-hover:text-amber-200 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-amber-300/90 text-xs font-medium mt-0.5">
                    {item.tagline}
                  </p>

                  {/* Animated revealed text on hover */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-36 group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden mt-0 group-hover:mt-2.5">
                    <p className="text-stone-200 text-xs leading-relaxed border-t border-white/15 pt-2">
                      {item.revealedText}
                    </p>
                    <a
                      href={`https://wa.me/${salonData.whatsapp}?text=${encodeURIComponent(
                        `Hola Domínica Eventos! Me interesa consultar fecha para ${item.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white mt-2 group/btn"
                    >
                      <span>Consultar fecha</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Disruptive bottom wave transition to Galería de Momentos */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#FDF8F2] fill-current"
        >
          <path d="M0,0 C250,80 500,-10 750,70 C1000,140 1120,30 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
