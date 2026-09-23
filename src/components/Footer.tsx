import { Heart, Instagram, Facebook, MessageCircle, MapPin } from "lucide-react";
import { salonData } from "../data/salonData";
import dominicaLogo from "../assets/logos/dominica_logo.jfif";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <img
                src={dominicaLogo}
                alt="Domínica Eventos Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-amber-400/40 shadow-md shadow-amber-950/40"
              />
            </div>

            <p className="font-handwriting text-xl text-amber-300 font-semibold mb-3">
              “{salonData.brandMessages.specialMoments}”
            </p>

            <p className="text-stone-400 text-sm leading-relaxed max-w-sm mb-6">
              Espacio integral preparado con todas las comodidades para celebrar tus fechas más importantes junto a familia y amigos en Coronel Brandsen.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={salonData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Domínica Eventos"
                className="w-11 h-11 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-pink-400 hover:border-pink-500/50 hover:bg-stone-800 transition-all shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={salonData.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Domínica Eventos"
                className="w-11 h-11 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-stone-800 transition-all shadow-sm"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${salonData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Domínica Eventos"
                className="w-11 h-11 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-stone-800 transition-all shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-xs font-bold text-stone-100 uppercase tracking-widest mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <a href="#inicio" className="hover:text-amber-300 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#salon" className="hover:text-amber-300 transition-colors">
                  El Salón & Comodidades
                </a>
              </li>
              <li>
                <a href="#reservas" className="hover:text-amber-300 transition-colors">
                  Reservar Turno
                </a>
              </li>
              <li>
                <a href="#opiniones" className="hover:text-amber-300 transition-colors">
                  Opiniones de Google
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber-300 transition-colors">
                  Galería de Momentos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-amber-300 transition-colors">
                  Ubicación & Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Official Location & Contact (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="font-sans text-xs font-bold text-stone-100 uppercase tracking-widest mb-4">
              Contacto Confirmado
            </h4>
            <div className="space-y-3.5 text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{salonData.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${salonData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors font-medium text-stone-300"
                >
                  WhatsApp: {salonData.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <a
                  href={salonData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 transition-colors font-medium text-stone-300"
                >
                  Instagram: {salonData.instagramHandle}
                </a>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-stone-800 text-xs text-stone-500">
              Domínica se adapta al clima y a las necesidades de cada festejo.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {currentYear} Domínica Eventos. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5 text-stone-400">
            <span>Hecho con alegría para celebrar en Brandsen, Buenos Aires</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
