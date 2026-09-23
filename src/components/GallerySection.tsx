import { useState, useEffect } from "react";
import { Camera, Instagram, X, ChevronLeft, ChevronRight, ZoomIn, PartyPopper, MessageCircle } from "lucide-react";
import { salonData } from "../data/salonData";

// Real client photo imports
import fachadaNoche from "../assets/images/ellugar_fachada_noche.jpg";
import afueraNoche1 from "../assets/images/ellugar_afuera_noche_01.jpg";
import adentroJpg1 from "../assets/images/ellugar_adentro_01.jpg";
import adentroJpg2 from "../assets/images/ellugar_adentro_02.jpg";
import adentroJpg3 from "../assets/images/ellugar_adentro_03.jpg";
import adentroWebp1 from "../assets/images/ellugar_adentro (1).webp";
import adentroWebp2 from "../assets/images/ellugar_adentro (2).webp";
import adentroWebp3 from "../assets/images/ellugar_adentro (3).webp";
import adentroWebp4 from "../assets/images/ellugar_adentro (4).webp";
import festejo1 from "../assets/images/ellugar_festejo_01.jpg";
import festejo2 from "../assets/images/ellugar_festejo_02.jpg";
import festejo3 from "../assets/images/ellugar_festejo_03.jpg";
import festejo4 from "../assets/images/ellugar_festejo_04.jpg";

interface PhotoItem {
  id: number;
  src: string;
  category: "salon" | "noche" | "festejos" | "detalles";
  title: string;
  subtitle: string;
  tag: string;
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "todos", label: "Todos los momentos" },
    { id: "salon", label: "El Salón & Mesas" },
    { id: "festejos", label: "Festejos & Alegría" },
    { id: "noche", label: "Noche & Fachada" },
    { id: "detalles", label: "Espacios & Deco" },
  ];

  const galleryItems: PhotoItem[] = [
    {
      id: 1,
      src: fachadaNoche,
      category: "noche",
      title: "Fachada Nocturna Iluminada",
      subtitle: "La bienvenida cálida a Domínica sobre Bv. San Martín 695",
      tag: "Fachada & Noche",
    },
    {
      id: 2,
      src: festejo1,
      category: "festejos",
      title: "Alegría y Encuentro en Familia",
      subtitle: "Sonrisas y momentos únicos compartidos entre amigos y seres queridos",
      tag: "Festejos Reales",
    },
    {
      id: 3,
      src: adentroWebp1,
      category: "salon",
      title: "Salón Principal Acondicionado",
      subtitle: "Distribución amplia para mesas, sillas y cómoda circulación",
      tag: "El Salón",
    },
    {
      id: 4,
      src: adentroJpg1,
      category: "salon",
      title: "Ambientación & Pista de Encuentro",
      subtitle: "Luces, deco y calidez preparadas para cualquier época del año",
      tag: "El Salón",
    },
    {
      id: 5,
      src: festejo2,
      category: "festejos",
      title: "Momentos Inolvidables",
      subtitle: "Cada celebración es un recuerdo imborrable para grandes y chicos",
      tag: "Festejos Reales",
    },
    {
      id: 6,
      src: afueraNoche1,
      category: "noche",
      title: "Patio Exterior Iluminado",
      subtitle: "El rincón exterior para disfrutar al aire libre en noches templadas",
      tag: "Espacio Exterior",
    },
    {
      id: 7,
      src: adentroWebp2,
      category: "detalles",
      title: "Sector de Mesas & Celebración",
      subtitle: "Espacios cuidados al detalle para agasajar a tus invitados",
      tag: "Decoración",
    },
    {
      id: 8,
      src: festejo3,
      category: "festejos",
      title: "Diversión y Brindis Compartido",
      subtitle: "El ambiente perfecto para cantar, festejar y bailar",
      tag: "Festejos Reales",
    },
    {
      id: 9,
      src: adentroJpg2,
      category: "salon",
      title: "Salón Amplio y Climatizado",
      subtitle: "Comodidad asegurada ante cualquier condición climática",
      tag: "El Salón",
    },
    {
      id: 10,
      src: festejo4,
      category: "festejos",
      title: "Risas y Alegría en la Fiesta",
      subtitle: "Familias celebrando momentos inolvidables en Brandsen",
      tag: "Festejos Reales",
    },
    {
      id: 11,
      src: adentroWebp3,
      category: "detalles",
      title: "Área de Juegos & Entretenimiento",
      subtitle: "Espacio pensado para que los chicos jueguen seguros y felices",
      tag: "Entretenimiento",
    },
    {
      id: 12,
      src: adentroJpg3,
      category: "salon",
      title: "Vista de Comodidades y Mesas",
      subtitle: "Todo listo para recibir a tus seres queridos con comodidad",
      tag: "El Salón",
    },
    {
      id: 13,
      src: adentroWebp4,
      category: "detalles",
      title: "Preparativos y Detalles del Salón",
      subtitle: "Cuidamos cada rincón para que tu evento sea perfecto",
      tag: "Decoración",
    },
  ];

  const filteredItems =
    activeCategory === "todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  };

  return (
    <section id="galeria" className="py-24 bg-[#FDF8F2] text-stone-800 relative overflow-hidden">
      {/* Background Subtle Party Glows & Small Rectangular Confetti & Botanical Ramitas */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-rose-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-2.5 h-1 bg-amber-400 rounded-none animate-confetti-1 opacity-70 pointer-events-none" />
      <div className="absolute bottom-24 right-1/3 w-3 h-1.5 bg-rose-400 rounded-none rotate-45 animate-confetti-2 opacity-70 pointer-events-none" />
      
      <svg className="absolute top-16 right-20 w-8 h-8 text-amber-700/40 animate-confetti-2 rotate-12 pointer-events-none" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M30 55 C30 40 30 25 30 5" />
        <path d="M30 40 C20 35 12 25 8 18 C15 22 24 30 30 40 Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M30 30 C40 25 48 15 52 8 C45 12 36 20 30 30 Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M30 18 C22 12 16 5 12 2 C18 6 24 12 30 18 Z" fill="currentColor" fillOpacity="0.2" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Galería de Momentos */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-300 shadow-xs">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-sans font-bold">Galería de Momentos</span>
          </div>

          <h2 className="leading-tight mb-3">
            <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-amber-800 block">
              Galería de Momentos
            </span>
          </h2>

          <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto">
            Las fotos avanzan lentamente. Pasá el cursor para pausar y <strong className="text-stone-900 font-semibold">hacé doble clic</strong> en cualquiera para abrirla en grande.
          </p>
        </div>
      </div>

      {/* Auto-scrolling Continuous Photo Ribbon (Infinite smooth marquee with minimal text) */}
      <div className="relative w-full overflow-hidden py-4 mb-16">
        {/* Left & Right subtle edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#FDF8F2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FDF8F2] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-slow flex items-center gap-5 px-4">
          {/* Double list for seamless 100% infinite marquee loop */}
          {[...galleryItems, ...galleryItems].map((item, idx) => {
            const actualIndex = idx % galleryItems.length;
            return (
              <div
                key={`${item.id}-${idx}`}
                onDoubleClick={() => setLightboxIndex(actualIndex)}
                title="Doble clic para ver en grande"
                className="group relative w-72 sm:w-80 h-72 sm:h-80 rounded-3xl overflow-hidden bg-stone-200 border border-amber-200/70 shadow-md hover:shadow-xl flex-shrink-0 transition-all duration-300 cursor-pointer select-none"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Minimal gradient overlay with title pill on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-900/10 to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />

                {/* Minimalist floating title pill */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold tracking-wide truncate max-w-[75%] border border-white/10">
                    {item.title}
                  </span>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(actualIndex);
                    }}
                    className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-stone-900 flex items-center justify-center shadow-md pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ZoomIn className="w-4 h-4 text-amber-700" />
                  </div>
                </div>

                {/* Double click instruction tooltip on hover */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-stone-950 font-bold text-[10px] shadow-sm">
                    Doble clic 🔍
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Instagram Call to Action Box - "Historias y festejos cada semana" (word 'reales' removed) */}
        <div className="bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 border border-amber-200/80 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-lg relative overflow-hidden mb-12">
          <div className="w-14 h-14 rounded-2xl bg-white text-rose-500 flex items-center justify-center mx-auto mb-4 border border-rose-200 shadow-sm">
            <Instagram className="w-7 h-7" />
          </div>
          <span className="font-handwriting text-2xl sm:text-3xl text-amber-800 font-bold block mb-1">
            ¡Historias y festejos cada semana!
          </span>
          <h3 className="font-sans font-bold text-2xl sm:text-3xl text-stone-900 mb-2">
            Seguinos en Instagram {salonData.instagramHandle}
          </h3>
          <p className="text-stone-600 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            Publicamos historias de cada decoración temática, cómo se vive el brindis, los juegos de los chicos y las novedades del salón en Brandsen.
          </p>
          <a
            id="gallery-instagram-btn"
            href={salonData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-rose-400 hover:from-amber-300 hover:to-rose-300 text-stone-950 font-bold text-sm px-8 py-3.5 rounded-full transition-all shadow-lg shadow-amber-300/50 hover:scale-105"
          >
            <Instagram className="w-4 h-4" />
            <span>Visitar @dominica.eventos</span>
          </a>
        </div>
      </div>

      {/* Disruptive bottom transition directly to Contact Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#FFFDF9] fill-current"
        >
          <path d="M0,0 C350,90 600,10 850,80 C1050,130 1150,30 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Cerrar vista completa"
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-stone-900/90 text-stone-200 hover:text-white hover:bg-stone-800 flex items-center justify-center border border-stone-700 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Foto anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-stone-900/90 text-stone-200 hover:text-white hover:bg-stone-800 flex items-center justify-center border border-stone-700 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Foto siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-stone-900/90 text-stone-200 hover:text-white hover:bg-stone-800 flex items-center justify-center border border-stone-700 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black border border-stone-800">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] max-w-full w-auto object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Caption & Info */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                    {filteredItems[lightboxIndex].tag}
                  </span>
                  <span className="text-xs text-stone-400">
                    Foto {lightboxIndex + 1} de {filteredItems.length}
                  </span>
                </div>
                <h4 className="font-sans font-bold text-lg text-white">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-stone-300 text-xs sm:text-sm">
                  {filteredItems[lightboxIndex].subtitle}
                </p>
              </div>

              <a
                href={`https://wa.me/${salonData.whatsapp}?text=${encodeURIComponent(
                  `Hola Domínica Eventos! Vi la foto "${filteredItems[lightboxIndex].title}" en la web y me gustaría consultar disponibilidad de fecha para una celebración.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-md flex-shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar por esta opción</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
