import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSalon from "./components/AboutSalon";
import BookingCalendarSection from "./components/BookingCalendarSection";
import GoogleReviewsSection from "./components/GoogleReviewsSection";
import EventsTypes from "./components/EventsTypes";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import MobileAppDock from "./components/MobileAppDock";
import IntroScreen from "./components/IntroScreen";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div id="dominica-app" className="min-h-screen flex flex-col bg-stone-900 text-stone-100 pb-16 md:pb-0">
      {showIntro && <IntroScreen onEnter={() => setShowIntro(false)} />}
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. El Salón & Comodidades */}
        <AboutSalon />

        {/* 3. Reservar Turno (Calendario Simple & Intuitivo) */}
        <BookingCalendarSection />

        {/* 4. Referencias en Google (4 en línea) */}
        <GoogleReviewsSection />

        {/* 5. Celebraciones & Eventos */}
        <EventsTypes />

        {/* 6. Galería de Momentos */}
        <GallerySection />

        {/* 7. Ubicación & Contacto (Dirección, Mapa, Canales) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <WhatsAppFloatingButton />

      {/* Mobile App Bottom Dock for native app feel */}
      <MobileAppDock />
    </div>
  );
}

