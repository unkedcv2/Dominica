import { Heart, Cake, PartyPopper, Smile, Star, CheckCircle, Calendar } from "lucide-react";
import { salonData } from "../data/salonData";

export default function Experience() {
  const experiences = [
    {
      icon: PartyPopper,
      color: "from-amber-100 to-amber-200 text-amber-800 border-amber-300",
      badgeColor: "bg-amber-100 text-amber-900 font-bold",
      title: "Decoración & Temática",
      tag: "Ambientación",
      description:
        "Cada detalle visual transforma el salón en el mundo soñado del agasajado, creando el marco perfecto para fotos memorables.",
    },
    {
      icon: Smile,
      color: "from-rose-100 to-rose-200 text-rose-800 border-rose-300",
      badgeColor: "bg-rose-100 text-rose-900 font-bold",
      title: "Juegos & Encuentro",
      tag: "Diversión",
      description:
        "Risas, dinamismo y momentos compartidos entre chicos y grandes que llenan de alegría y energía la jornada.",
    },
    {
      icon: Cake,
      color: "from-teal-100 to-teal-200 text-teal-800 border-teal-300",
      badgeColor: "bg-teal-100 text-teal-900 font-bold",
      title: "Torta & Momento Especial",
      tag: "El Brindis",
      description:
        "El instante cumbre del festejo: cantar el feliz cumpleaños, soplar las velitas y brindar con quienes más querés.",
    },
    {
      icon: Heart,
      color: "from-purple-100 to-pink-200 text-pink-800 border-pink-300",
      badgeColor: "bg-pink-100 text-pink-900 font-bold",
      title: "Recuerdos para Siempre",
      tag: "Para Siempre",
      description:
        "Un festejo que trasciende el día: anécdotas, fotos y sonrisas que perduran con calidez en la memoria familiar.",
    },
  ];

  return (
    <section id="experiencia" className="py-24 bg-[#FAF5EE] text-stone-800 relative overflow-hidden">
      {/* Subtle Glows & Confetti */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-16 right-24 w-3.5 h-3.5 bg-amber-400 rounded-full animate-confetti-1 opacity-70 pointer-events-none" />
      <div className="absolute bottom-20 left-16 w-3 h-3 bg-rose-400 rounded-sm rotate-45 animate-confetti-2 opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-300 shadow-sm">
            <Star className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-sans font-bold">La Experiencia Domínica</span>
          </div>

          <h2 className="leading-tight mb-4">
            <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-amber-800 block">
              Más que un Lugar
            </span>
            <span className="font-sans font-bold text-2xl sm:text-3xl text-stone-900 block mt-1">
              Un momento inolvidable lleno de emoción
            </span>
          </h2>
        </div>

        {/* 4 Pillars of the Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {experiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-amber-200/70 rounded-3xl p-6 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center border shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs text-amber-800 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>En cada festejo</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Celebratory Banner */}
        <div className="bg-gradient-to-r from-amber-100/90 via-rose-50 to-amber-100/90 border border-amber-200/90 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-md relative overflow-hidden mb-12">
          <div className="w-14 h-14 rounded-2xl bg-white text-amber-700 flex items-center justify-center mx-auto mb-4 border border-amber-300 shadow-sm">
            <PartyPopper className="w-7 h-7" />
          </div>

          <p className="text-stone-700 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-medium">
            Estamos en cada detalle para que vos y tu familia solo se ocupen de festejar, soplar las velitas y disfrutar en grande.
          </p>

          <a
            id="experience-cta-reservas"
            href="#reservas"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#reservas")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-rose-400 hover:from-amber-300 hover:to-rose-300 text-stone-950 font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-300/50 hover:scale-105 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-stone-950" />
            <span>Consultar Calendario de Turnos</span>
          </a>
        </div>
      </div>

      {/* Disruptive bottom transition to Contact */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#FFFDF9] fill-current"
        >
          <path d="M0,50 C250,120 500,-10 750,70 C980,130 1120,40 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
