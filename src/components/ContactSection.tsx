import { MessageCircle, MapPin, Instagram, Facebook } from "lucide-react";
import { salonData } from "../data/salonData";

export default function ContactSection() {
  const directWhatsappUrl = `https://wa.me/${salonData.whatsapp}?text=${encodeURIComponent(
    "Hola Domínica Eventos! Me gustaría hacer una consulta sobre el salón y fechas."
  )}`;

  return (
    <section id="contacto" className="py-20 bg-[#FFFDF9] text-stone-800 relative overflow-hidden">
      {/* Background festive glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Simple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-300 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Ubicación & Contacto</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-stone-900 tracking-tight">
            Ubicación & Canales de Contacto
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            Encontranos en Coronel Brandsen o escribinos de forma directa.
          </p>
        </div>

        {/* Simplified 2-Column Layout: Left Info & Right Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center border border-amber-300 flex-shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-amber-800 font-bold block">
                    Dirección
                  </span>
                  <h4 className="font-sans font-bold text-base sm:text-lg text-stone-900">
                    {salonData.address}
                  </h4>
                  <p className="text-stone-600 text-xs mt-0.5">
                    Coronel Brandsen, Prov. de Buenos Aires.
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-300 flex-shrink-0 shadow-xs">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <span className="text-[11px] uppercase tracking-wider text-emerald-800 font-bold block">
                    WhatsApp Oficial
                  </span>
                  <h4 className="font-sans font-bold text-base sm:text-lg text-stone-900">
                    {salonData.whatsappDisplay}
                  </h4>
                  <a
                    id="contact-direct-whatsapp-button"
                    href={directWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2 px-3.5 rounded-xl transition-all shadow-sm mt-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enviar Mensaje</span>
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-stone-100">
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block mb-2">
                  Redes Sociales
                </span>
                <div className="flex items-center gap-3">
                  <a
                    id="contact-instagram-channel"
                    href={salonData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-900 text-xs font-semibold border border-pink-200 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span>{salonData.instagramHandle}</span>
                  </a>
                  <a
                    id="contact-facebook-channel"
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs font-semibold border border-blue-200 transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>Domínica</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 text-center">
              <span className="text-[11px] text-stone-400">
                Visitas coordinadas previamente por WhatsApp
              </span>
            </div>
          </div>

          {/* Right Column: Embedded Map */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 border border-amber-200/80 shadow-xl flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-3 px-1">
              <div>
                <h3 className="font-sans font-bold text-base sm:text-lg text-stone-900">
                  Ubicación en Google Maps
                </h3>
                <p className="text-stone-500 text-xs">
                  Bv. San Martín 695, Coronel Brandsen
                </p>
              </div>
              <a
                id="google-maps-full-button"
                href="https://maps.google.com/?q=Bv.+San+Mart%C3%ADn+695,+Coronel+Brandsen,+Provincia+de+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 hover:text-stone-950 bg-amber-100 hover:bg-amber-200 px-3.5 py-1.5 rounded-full border border-amber-300 transition-colors shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Ampliar Mapa</span>
              </a>
            </div>

            <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 flex-grow">
              <iframe
                title="Ubicación de Domínica Eventos en Coronel Brandsen"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Bv.+San+Mart%C3%ADn+695,+Coronel+Brandsen,+Buenos+Aires,+Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Disruptive bottom transition to Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#231F1C] fill-current"
        >
          <path d="M0,0 C280,100 560,-20 840,80 C1020,130 1140,30 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
