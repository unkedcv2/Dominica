export interface ContactInfo {
  name: string;
  activity: string;
  tagline: string;
  location: string;
  address: string;
  whatsapp: string;
  whatsappDisplay: string;
  instagramUrl: string;
  instagramHandle: string;
  facebookUrl: string;
  brandMessages: {
    hero: string;
    subhero: string;
    climateAdaptation: string;
    specialMoments: string;
    celebrateWithUs: string;
    memories: string;
  };
}

export const salonData: ContactInfo = {
  name: "Domínica Eventos",
  activity: "Salón de fiestas y eventos",
  tagline: "Celebrá tus momentos más especiales con nosotros",
  location: "Brandsen, Provincia de Buenos Aires",
  address: "Bv. San Martín 695, Coronel Brandsen, Provincia de Buenos Aires",
  whatsapp: "5492223671590",
  whatsappDisplay: "2223 671590",
  instagramUrl: "https://www.instagram.com/dominica.eventos",
  instagramHandle: "@dominica.eventos",
  facebookUrl: "https://www.facebook.com",
  brandMessages: {
    hero: "Celebrá tus momentos más especiales con nosotros.",
    subhero: "Un salón con todas las comodidades en Brandsen. Domínica se adapta al clima y a tus necesidades.",
    climateAdaptation: "Domínica se adapta al clima y a tus necesidades.",
    specialMoments: "Seguimos acompañándote en tus momentos más especiales.",
    celebrateWithUs: "Celebrá con nosotros.",
    memories: "Cada evento, cada decoración, cada juego, cada torta compartida forma parte de un momento inolvidable. Un recuerdo que queda para siempre."
  }
};
