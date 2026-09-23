import { Home, Building2, Calendar, MessageCircle } from "lucide-react";
import { salonData } from "../data/salonData";

export default function MobileAppDock() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappUrl = `https://wa.me/${salonData.whatsapp}?text=${encodeURIComponent(
    "Hola Domínica Eventos! Me gustaría consultar disponibilidad desde el celular."
  )}`;

  return (
    <div
      style={{ backgroundColor: "#F4F3EE" }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-lg border-t border-stone-200 px-3 py-2 shadow-2xl"
    >
      <div className="grid grid-cols-4 gap-1 items-center">
        {/* 1. Inicio */}
        <a
          id="mobile-dock-inicio"
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className="flex flex-col items-center justify-center py-2 text-stone-700 hover:text-amber-900 active:scale-95 transition-all"
        >
          <Home className="w-5 h-5 text-amber-600 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Inicio</span>
        </a>

        {/* 2. El Salón */}
        <a
          id="mobile-dock-salon"
          href="#salon"
          onClick={(e) => handleNavClick(e, "#salon")}
          className="flex flex-col items-center justify-center py-2 text-stone-700 hover:text-amber-900 active:scale-95 transition-all"
        >
          <Building2 className="w-5 h-5 text-amber-600 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">El Salón</span>
        </a>

        {/* 3. Reserva */}
        <a
          id="mobile-dock-reserva"
          href="#reservas"
          onClick={(e) => handleNavClick(e, "#reservas")}
          className="flex flex-col items-center justify-center py-2 text-stone-700 hover:text-amber-900 active:scale-95 transition-all"
        >
          <Calendar className="w-5 h-5 text-amber-600 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Reserva</span>
        </a>

        {/* 4. WhatsApp */}
        <a
          id="mobile-dock-whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 text-emerald-700 hover:text-emerald-800 active:scale-95 transition-all"
        >
          <MessageCircle className="w-5 h-5 text-emerald-600 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
