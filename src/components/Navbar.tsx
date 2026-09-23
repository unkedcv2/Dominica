import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import dominicaLogo from "../assets/logos/dominica_logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "El Salón", href: "#salon" },
    { name: "Reserva", href: "#reservas", icon: Calendar },
    { name: "Opiniones", href: "#opiniones" },
    { name: "Galería", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-navigation-header"
      style={{ backgroundColor: "#F4F3EE" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "shadow-sm py-1.5 border-b border-stone-200/70 backdrop-blur-sm"
          : "py-2 border-b border-stone-200/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-between gap-4">
          {/* Logo centered on mobile, left-aligned on desktop - 100% transparent without any box or rectangle */}
          <a
            id="brand-logo-link"
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#inicio");
            }}
            className="flex items-center group py-0.5 flex-shrink-0"
          >
            <img
              src={dominicaLogo}
              alt="Domínica Eventos"
              className={`object-contain transition-all duration-300 group-hover:scale-105 ${
                isScrolled
                  ? "h-14 w-14 sm:h-16 sm:w-16"
                  : "h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28"
              }`}
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation Links - Centered/Balanced nicely */}
          <nav id="desktop-navbar" className="hidden md:flex items-center gap-1.5 lg:gap-3 flex-wrap justify-center">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-stone-700 hover:text-amber-900 text-xs lg:text-[13px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-white hover:shadow-xs hover:border hover:border-amber-200/70 inline-flex items-center gap-1.5"
                >
                  {IconComponent && <IconComponent className="w-3.5 h-3.5 text-amber-600" />}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* WhatsApp Direct CTA button on right of header */}
          <div className="hidden lg:flex items-center">
            <a
              id="header-whatsapp-cta"
              href="https://wa.me/5492223444444?text=Hola%20Domínica%20Eventos!%20Quiero%20consultar%20disponibilidad."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:scale-105 flex items-center gap-1.5"
            >
              <span>Consultar</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
