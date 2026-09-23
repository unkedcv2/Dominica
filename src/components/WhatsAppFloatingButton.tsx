import { MessageCircle } from "lucide-react";
import { salonData } from "../data/salonData";

export default function WhatsAppFloatingButton() {
  const whatsappUrl = `https://wa.me/${salonData.whatsapp}?text=${encodeURIComponent(
    "Hola Domínica Eventos, quisiera consultar disponibilidad y detalles para una celebración."
  )}`;

  return (
    <aside
      id="floating-whatsapp-container"
      aria-label="Contacto rápido por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      <span className="hidden sm:inline-block bg-stone-900 text-stone-100 text-xs font-medium py-1.5 px-3 rounded-full shadow-lg border border-stone-800 opacity-90 group-hover:opacity-100 transition-opacity">
        ¿Consultas? Escribinos
      </span>
      <a
        id="floating-whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Domínica Eventos por WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
}
