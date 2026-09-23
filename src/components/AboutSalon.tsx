import { CheckCircle2, ShieldCheck, SunMedium, PartyPopper, Heart, Sparkles } from "lucide-react";
import { salonData } from "../data/salonData";
import adentro01 from "../assets/images/ellugar_adentro_01.jpg";
import adentro02 from "../assets/images/ellugar_adentro_02.jpg";
import adentroWebp2 from "../assets/images/ellugar_adentro (2).webp";
import afueraNoche from "../assets/images/ellugar_afuera_noche_01.jpg";
import festejo01 from "../assets/images/ellugar_festejo_01.jpg";
import festejo03 from "../assets/images/ellugar_festejo_03.jpg";

export default function AboutSalon() {
  return (
    <section id="salon" className="py-20 bg-[#E0F2FE] text-stone-800 relative overflow-hidden">
      {/* Festive Background: Square Papel Picado (Confetti Burst) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Soft festive glows */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-amber-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-200/30 rounded-full blur-[100px]" />

        {/* Dense Small Rectangular Confetti & Botanical Ramitas */}
        <div className="absolute top-8 left-10 w-2.5 h-1 bg-amber-400 rounded-none rotate-12 animate-confetti-1 opacity-85 shadow-xs" />
        <div className="absolute top-16 left-1/4 w-3 h-1.5 bg-rose-400 rounded-none animate-confetti-2 opacity-85" />
        <div className="absolute top-12 right-24 w-2.5 h-1 bg-emerald-400 rounded-none rotate-45 animate-confetti-3 opacity-80" />
        <div className="absolute top-32 right-1/4 w-3 h-1.5 bg-sky-400 rounded-none -rotate-12 animate-confetti-1 opacity-80" />
        <div className="absolute top-44 left-16 w-2 h-1 bg-pink-400 rounded-none animate-confetti-2 opacity-85" />
        <div className="absolute top-60 right-12 w-3 h-1.5 bg-yellow-400 rounded-none rotate-45 animate-confetti-3 opacity-90 shadow-xs" />
        <div className="absolute top-80 left-1/3 w-2.5 h-1 bg-purple-400 rounded-none rotate-12 animate-confetti-1 opacity-75" />
        <div className="absolute top-96 right-1/3 w-2 h-1 bg-teal-400 rounded-none animate-confetti-2 opacity-80" />

        {/* Botanical Ramitas */}
        <svg className="absolute top-20 left-16 w-8 h-8 text-amber-700/50 animate-confetti-1 rotate-45" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M30 55 C30 40 30 25 30 5" />
          <path d="M30 40 C20 35 12 25 8 18 C15 22 24 30 30 40 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M30 30 C40 25 48 15 52 8 C45 12 36 20 30 30 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M30 18 C22 12 16 5 12 2 C18 6 24 12 30 18 Z" fill="currentColor" fillOpacity="0.2" />
        </svg>

        <svg className="absolute bottom-32 right-20 w-9 h-9 text-amber-800/40 animate-confetti-3 -rotate-12" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M30 55 C30 40 30 25 30 5" />
          <path d="M30 40 C20 35 12 25 8 18 C15 22 24 30 30 40 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M30 30 C40 25 48 15 52 8 C45 12 36 20 30 30 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M30 18 C22 12 16 5 12 2 C18 6 24 12 30 18 Z" fill="currentColor" fillOpacity="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-300 shadow-sm">
            <PartyPopper className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-sans">El Salón en Brandsen</span>
          </div>

          <h2 className="leading-tight mb-3">
            <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-amber-800 block">
              Un Espacio Pensado para Compartir
            </span>
            <span className="font-sans font-bold text-2xl sm:text-3xl text-stone-900 block mt-1">
              Confort, calidez y diversión para toda la familia
            </span>
          </h2>

          <p className="font-handwriting text-2xl sm:text-3xl text-amber-700 font-semibold mb-3">
            “{salonData.brandMessages.specialMoments}”
          </p>
        </div>

        {/* Highlight Feature Card with Summarized Text & Dynamic Photos */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-amber-200/80 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Summarized Text */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold mb-3 border border-rose-200">
                <span>Salón Climatizado & Equipado</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4 leading-tight">
                “{salonData.brandMessages.climateAdaptation}”
              </h3>

              {/* Summarized Paragraph as requested by the user */}
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-6 font-medium">
                Un salón moderno y completamente climatizado con todas las comodidades, preparado para que tu encuentro sea siempre acogedor y memorable en cualquier época del año.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 bg-amber-50/80 p-3 rounded-2xl border border-amber-200/80 text-stone-800 text-xs sm:text-sm font-medium">
                  <SunMedium className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Clima asegurado todo el año</span>
                </div>
                <div className="flex items-center gap-2.5 bg-emerald-50/80 p-3 rounded-2xl border border-emerald-200/80 text-stone-800 text-xs sm:text-sm font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Espacio seguro para los chicos</span>
                </div>
                <div className="flex items-center gap-2.5 bg-rose-50/80 p-3 rounded-2xl border border-rose-200/80 text-stone-800 text-xs sm:text-sm font-medium">
                  <PartyPopper className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>Sector para mesas y baile</span>
                </div>
                <div className="flex items-center gap-2.5 bg-amber-50/80 p-3 rounded-2xl border border-amber-200/80 text-stone-800 text-xs sm:text-sm font-medium">
                  <Heart className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Atención cordial en todo momento</span>
                </div>
              </div>

              <a
                id="about-salon-reservas-btn"
                href="#reservas"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#reservas")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-rose-400 hover:from-amber-300 hover:to-rose-300 text-stone-950 font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-amber-300/50 transition-all hover:scale-105 cursor-pointer"
              >
                <span>Reservar Fecha para tu Fiesta</span>
              </a>
            </div>

            {/* Dynamic Asymmetric Photo Presentation */}
            <div className="lg:col-span-6 relative">
              {/* Floating party stickers/badges */}
              <div className="absolute -top-4 -left-4 z-20 bg-amber-400 text-stone-950 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg rotate-[-6deg] border border-white">
                🎉 Salón Climatizado
              </div>
              <div className="absolute -bottom-4 right-4 z-20 bg-rose-500 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg rotate-[4deg] border border-white">
                📍 Brandsen, Bs. As.
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden border-2 border-amber-300/80 aspect-[4/3] shadow-lg transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 group">
                    <img
                      src={adentro01}
                      alt="Salón interior ambientado"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden border-2 border-rose-200 aspect-[4/3] shadow-lg transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 group">
                    <img
                      src={afueraNoche}
                      alt="Patio exterior iluminado"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="rounded-3xl overflow-hidden border-2 border-emerald-200 aspect-[4/3] shadow-lg transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 group">
                    <img
                      src={adentroWebp2}
                      alt="Sector de mesas de cumpleaños"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden border-2 border-amber-300/80 aspect-[4/3] shadow-lg transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 group">
                    <img
                      src={adentro02}
                      alt="Salón principal iluminado"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sectors and Facilities Grid with Festive Light Styling */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-script text-3xl sm:text-4xl text-amber-800 mb-2">
              Comodidades para tu celebración
            </h3>
            <p className="text-stone-600 text-sm">
              Pasá el mouse por cada tarjeta para descubrir las fotos de cada espacio en vivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 01: Salón Principal */}
            <div className="group relative bg-white p-6 rounded-3xl border border-amber-200/80 hover:border-amber-400 shadow-md min-h-[260px] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl overflow-hidden cursor-pointer">
              {/* Normal Content */}
              <div className="transition-opacity duration-300 group-hover:opacity-0 flex flex-col justify-between h-full">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg mb-4 border border-amber-300">
                    01
                  </div>
                  <h4 className="font-sans font-bold text-lg text-stone-900 mb-2">
                    Salón Principal
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    Área versátil preparada para disponer mesas, sillas y la circulación cómoda de los invitados durante todo el festejo.
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-amber-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Espacio modulable según el evento</span>
                </div>
              </div>

              {/* Hover Image Replacement */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden flex flex-col justify-end p-5">
                <img
                  src={adentro01}
                  alt="Salón Principal Domínica"
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                <div className="relative z-10">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500 text-stone-950 font-bold text-[11px] uppercase tracking-wider mb-1.5 inline-block shadow">
                    Salón Principal
                  </span>
                  <p className="text-white text-xs font-medium leading-tight">
                    Mesas, ambientación y espacio amplio
                  </p>
                </div>
              </div>
            </div>

            {/* Card 02: Sector de Juegos */}
            <div className="group relative bg-white p-6 rounded-3xl border border-rose-200/80 hover:border-rose-400 shadow-md min-h-[260px] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl overflow-hidden cursor-pointer">
              {/* Normal Content */}
              <div className="transition-opacity duration-300 group-hover:opacity-0 flex flex-col justify-between h-full">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg mb-4 border border-rose-300">
                    02
                  </div>
                  <h4 className="font-sans font-bold text-lg text-stone-900 mb-2">
                    Sector de Juegos
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    Zona dedicada al entretenimiento y la diversión compartida, diseñada para que los más chicos disfruten a pleno con seguridad.
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-rose-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Diversión y entretenimiento seguro</span>
                </div>
              </div>

              {/* Hover Image Replacement */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden flex flex-col justify-end p-5">
                <img
                  src={festejo01}
                  alt="Sector de Juegos y Festejos"
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                <div className="relative z-10">
                  <span className="px-2.5 py-1 rounded-full bg-rose-500 text-white font-bold text-[11px] uppercase tracking-wider mb-1.5 inline-block shadow">
                    Sector de Juegos
                  </span>
                  <p className="text-white text-xs font-medium leading-tight">
                    Diversión y juegos para todas las edades
                  </p>
                </div>
              </div>
            </div>

            {/* Card 03: Sector de Candy & Torta */}
            <div className="group relative bg-white p-6 rounded-3xl border border-emerald-200/80 hover:border-emerald-400 shadow-md min-h-[260px] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl overflow-hidden cursor-pointer">
              {/* Normal Content */}
              <div className="transition-opacity duration-300 group-hover:opacity-0 flex flex-col justify-between h-full">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg mb-4 border border-emerald-300">
                    03
                  </div>
                  <h4 className="font-sans font-bold text-lg text-stone-900 mb-2">
                    Sector de Candy & Torta
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    Lugar privilegiado para armar la ambientación temática, la mesa principal, la torta y la foto del brindis familiar.
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Apto para ambientaciones temáticas</span>
                </div>
              </div>

              {/* Hover Image Replacement */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden flex flex-col justify-end p-5">
                <img
                  src={festejo03}
                  alt="Mesa principal de cumpleaños y torta"
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                <div className="relative z-10">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white font-bold text-[11px] uppercase tracking-wider mb-1.5 inline-block shadow">
                    Candy & Torta
                  </span>
                  <p className="text-white text-xs font-medium leading-tight">
                    Mesa central para fotos y momentos especiales
                  </p>
                </div>
              </div>
            </div>

            {/* Card 04: Atención & Exteriores */}
            <div className="group relative bg-white p-6 rounded-3xl border border-amber-200/80 hover:border-amber-400 shadow-md min-h-[260px] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl overflow-hidden cursor-pointer">
              {/* Normal Content */}
              <div className="transition-opacity duration-300 group-hover:opacity-0 flex flex-col justify-between h-full">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg mb-4 border border-amber-300">
                    04
                  </div>
                  <h4 className="font-sans font-bold text-lg text-stone-900 mb-2">
                    Atención & Coordinación
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    Acompañamiento cercano durante la preparación para que organices tu evento con tranquilidad y confianza en Brandsen.
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-amber-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Atención personalizada</span>
                </div>
              </div>

              {/* Hover Image Replacement */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden flex flex-col justify-end p-5">
                <img
                  src={afueraNoche}
                  alt="Instalaciones exteriores de Domínica"
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                <div className="relative z-10">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500 text-stone-950 font-bold text-[11px] uppercase tracking-wider mb-1.5 inline-block shadow">
                    Atención & Salón
                  </span>
                  <p className="text-white text-xs font-medium leading-tight">
                    Iluminación cálida y coordinación en Brandsen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disruptive festive wave transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#FFFDF9] fill-current"
        >
          <path d="M0,0 C300,70 600,10 900,80 L1200,20 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
