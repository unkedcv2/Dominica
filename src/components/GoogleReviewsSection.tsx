import { Star, CheckCircle } from "lucide-react";

interface GoogleReview {
  id: number;
  name: string;
  initials: string;
  color: string;
  date: string;
  review: string;
  tag: string;
}

export default function GoogleReviewsSection() {
  const reviews: GoogleReview[] = [
    {
      id: 1,
      name: "Valeria Gómez",
      initials: "VG",
      color: "bg-blue-600",
      date: "Hace 2 semanas",
      review:
        "Excelente salón en Brandsen. Muy limpio, moderno y cómodo para chicos y grandes. La atención de diez en todo momento.",
      tag: "Cumpleaños Infantil",
    },
    {
      id: 2,
      name: "Mariano Díaz",
      initials: "MD",
      color: "bg-emerald-600",
      date: "Hace 1 mes",
      review:
        "Hermoso lugar para festejar. Muy buena climatización, el sector de juegos impecable y la predisposición es total.",
      tag: "Festejo Familiar",
    },
    {
      id: 3,
      name: "Florencia Álvarez",
      initials: "FA",
      color: "bg-purple-600",
      date: "Hace 2 meses",
      review:
        "Hicimos el bautismo de mi hijo y salió todo perfecto. Súper espacioso, cálido y prolijo. Súper recomendado en el pueblo.",
      tag: "Bautismo",
    },
    {
      id: 4,
      name: "Esteban Rossi",
      initials: "ER",
      color: "bg-amber-600",
      date: "Hace 3 meses",
      review:
        "Instalaciones de primera y muy buena ubicación. Todo listo y organizado para disfrutar sin preocupaciones. Volveremos.",
      tag: "Cumpleaños",
    },
  ];

  return (
    <section id="opiniones" className="py-20 bg-[#FAF6F0] text-stone-800 relative overflow-hidden">
      {/* Background festive glow */}
      <div className="absolute top-1/3 left-5 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-amber-900 text-xs font-bold mb-2 border border-amber-200 shadow-sm">
              {/* Google G SVG */}
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.66-5.17 3.66-9.12z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.13z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
                />
              </svg>
              <span>Referencias en Google</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-stone-900">
              Opiniones de Quienes ya Festejaron
            </h2>
          </div>

          {/* Rating Summary */}
          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-amber-200/80 shadow-md self-start sm:self-auto">
            <span className="text-2xl font-black text-amber-500">5.0</span>
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs text-stone-600 font-semibold">Google Reviews</span>
          </div>
        </div>

        {/* Exactly 4 tags / cards side-by-side in a line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-5 border border-amber-100 hover:border-amber-300 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                {/* User info & Stars */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-9 h-9 rounded-full ${rev.color} text-white font-bold text-xs flex items-center justify-center shadow-sm`}
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-stone-900 leading-tight">
                        {rev.name}
                      </h3>
                      <span className="text-[11px] text-stone-500">
                        {rev.date}
                      </span>
                    </div>
                  </div>
                  {/* Google mini icon */}
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.66-5.17 3.66-9.12z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.36 7.33 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.13z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
                    />
                  </svg>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                  "{rev.review}"
                </p>
              </div>

              {/* Tag & Verified */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px]">
                <span className="text-amber-800 font-semibold">{rev.tag}</span>
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  Verificada
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disruptive bottom transition to Gallery */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#FDF8F2] fill-current"
        >
          <path d="M0,40 C300,110 500,-10 800,80 C1000,130 1120,40 1200,70 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
