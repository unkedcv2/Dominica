import { useState } from "react";
import { Calendar as CalendarIcon, Clock, User, Phone, Check, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { salonData } from "../data/salonData";

const MONTH_NAMES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const SHIFTS = [
  { id: "tarde", name: "Turno Tarde", hours: "14:00 a 18:00 hs" },
  { id: "noche", name: "Turno Noche", hours: "19:30 a 23:30 hs" },
  { id: "personalizado", name: "Turno Especial", hours: "Horario a convenir" },
];

export default function BookingCalendarSection() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  
  // Default selected date: tomorrow or upcoming weekend
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const [selectedDate, setSelectedDate] = useState<Date>(tomorrow);
  const [selectedShift, setSelectedShift] = useState("tarde");
  const [eventType, setEventType] = useState("Cumpleaños Infantil");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [booked, setBooked] = useState(false);

  // Month navigation
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Calendar math
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay(); // 0 is Sun

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanksArray = Array.from({ length: firstDayIndex }, (_, i) => i);

  const isPastDate = (day: number) => {
    const checkDate = new Date(currentYear, currentMonth, day);
    checkDate.setHours(0, 0, 0, 0);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return checkDate < now;
  };

  const isSelected = (day: number) => {
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    );
  };

  const handleSelectDay = (day: number) => {
    if (isPastDate(day)) return;
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setBooked(false);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDate = `${selectedDate.getDate()} de ${MONTH_NAMES[selectedDate.getMonth()]} de ${selectedDate.getFullYear()}`;
    const shiftInfo = SHIFTS.find((s) => s.id === selectedShift);
    
    const message = `Hola Domínica Eventos! Quiero reservar un turno para mi fiesta:
📅 Fecha: ${formattedDate}
⏰ ${shiftInfo?.name} (${shiftInfo?.hours})
🎉 Tipo de evento: ${eventType}
👤 Nombre: ${clientName || "Sin especificar"}
📱 Contacto: ${clientPhone || "Sin especificar"}
¿Tienen disponibilidad para esta fecha?`;

    const url = `https://wa.me/${salonData.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setBooked(true);
  };

  const formattedSelected = `${selectedDate.getDate()} de ${MONTH_NAMES[selectedDate.getMonth()]} de ${selectedDate.getFullYear()}`;
  const selectedShiftDetails = SHIFTS.find((s) => s.id === selectedShift);

  return (
    <section id="reservas" className="py-20 bg-[#FFFDF9] text-stone-800 relative overflow-hidden">
      {/* Background festive glows and confetti */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Confetti specks */}
      <div className="absolute top-10 right-20 w-3 h-3 bg-amber-400 rounded-sm rotate-45 animate-confetti-1 opacity-70 pointer-events-none" />
      <div className="absolute bottom-20 left-12 w-3.5 h-3.5 bg-rose-400 rounded-full animate-confetti-2 opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Simple & Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-300 shadow-sm">
            <CalendarIcon className="w-3.5 h-3.5 text-amber-600" />
            <span>Turnos Disponibles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-amber-800">
            Reservá tu Turno
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Elegí el día y horario que preferís para tu festejo.
          </p>
        </div>

        {/* Intuitive 2-Column Booking Layout perfectly aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* 1. Interactive Visual Calendar (Slightly more compact, aligned) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-6 border border-amber-200/80 shadow-xl flex flex-col justify-between h-full">
            <div>
              {/* Month Header Navigation */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                <h3 className="font-sans font-bold text-lg sm:text-xl text-stone-900 flex items-center gap-2">
                  <span>{MONTH_NAMES[currentMonth]}</span>
                  <span className="text-amber-600 font-semibold">{currentYear}</span>
                </h3>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={prevMonth}
                    aria-label="Mes anterior"
                    className="p-1.5 rounded-xl bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextMonth}
                    aria-label="Mes siguiente"
                    className="p-1.5 rounded-xl bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Days of week */}
              <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1.5">
                <span>Do</span>
                <span>Lu</span>
                <span>Ma</span>
                <span>Mi</span>
                <span>Ju</span>
                <span>Vi</span>
                <span>Sá</span>
              </div>

              {/* Calendar Grid (Compact cells for precise vertical alignment) */}
              <div className="grid grid-cols-7 gap-1">
                {blanksArray.map((_, index) => (
                  <div key={`blank-${index}`} className="h-8 sm:h-9" />
                ))}

                {daysArray.map((day) => {
                  const past = isPastDate(day);
                  const active = isSelected(day);
                  return (
                    <button
                      key={`day-${day}`}
                      type="button"
                      disabled={past}
                      onClick={() => handleSelectDay(day)}
                      className={`h-8 sm:h-9 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center transition-all ${
                        past
                          ? "text-stone-300 cursor-not-allowed"
                          : active
                          ? "bg-gradient-to-br from-amber-400 to-amber-500 text-stone-950 font-bold shadow-md shadow-amber-300/50 scale-105"
                          : "text-stone-700 hover:bg-amber-100 hover:text-amber-900 cursor-pointer"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Shift Selection Pills */}
            <div className="mt-5 pt-4 border-t border-stone-100">
              <span className="block text-[11px] uppercase tracking-wider text-amber-800 font-bold mb-2">
                Seleccioná el Turno
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {SHIFTS.map((shift) => (
                  <button
                    key={shift.id}
                    type="button"
                    onClick={() => setSelectedShift(shift.id)}
                    className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedShift === shift.id
                        ? "bg-amber-50 border-2 border-amber-500 text-amber-950 shadow-sm"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-amber-50/60"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>{shift.name}</span>
                    </div>
                    <span className="text-[10px] text-stone-500 block mt-0.5 font-medium">
                      {shift.hours}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Fast Reservation Summary & Direct Confirmation (Aligned height) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-5 sm:p-6 border border-amber-200/80 shadow-xl flex flex-col justify-between h-full">
            <div>
              <h3 className="font-sans font-bold text-lg sm:text-xl text-stone-900 mb-0.5">
                Tu Selección
              </h3>
              <p className="text-stone-500 text-xs mb-3.5">
                Confirmá tus datos para consultar la reserva por WhatsApp.
              </p>

              {/* Selected Date & Shift Badge */}
              <div className="bg-amber-50/90 rounded-2xl p-3 sm:p-3.5 border border-amber-200/80 mb-4">
                <div className="flex items-center justify-between text-xs text-amber-900 font-semibold mb-0.5">
                  <span>Fecha Elegida</span>
                  <span className="bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    {selectedShiftDetails?.name}
                  </span>
                </div>
                <p className="text-base sm:text-lg font-bold text-stone-900">
                  {formattedSelected}
                </p>
                <p className="text-xs text-stone-600 mt-0.5">
                  Horario: {selectedShiftDetails?.hours}
                </p>
              </div>

              {/* Mini Quick Form */}
              <form onSubmit={handleBooking} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Tipo de Festejo
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white"
                  >
                    <option value="Cumpleaños Infantil">Cumpleaños Infantil</option>
                    <option value="Bautismo o Comunión">Bautismo / Comunión</option>
                    <option value="Festejo Familiar">Festejo Familiar</option>
                    <option value="Cumpleaños de Adultos">Cumpleaños de Adultos</option>
                    <option value="Celebración Especial">Otro Tipo de Evento</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Tu Nombre
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="Ej. Sofía"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-xs sm:text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Teléfono / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 2223 123456"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-xs sm:text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white"
                    />
                  </div>
                </div>

                {booked && (
                  <div className="p-2.5 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>¡Consulta abierta en WhatsApp! Te responderemos a la brevedad.</span>
                  </div>
                )}

                <button
                  type="submit"
                  id="booking-submit-button"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-rose-400 hover:from-amber-300 hover:to-rose-300 text-stone-950 font-bold py-3 px-4 rounded-xl shadow-md shadow-amber-300/50 hover:scale-[1.01] transition-all text-xs sm:text-sm cursor-pointer mt-1"
                >
                  <MessageCircle className="w-4 h-4 text-stone-950" />
                  <span>Reservar Turno por WhatsApp</span>
                </button>
              </form>
            </div>

            <p className="text-[11px] text-stone-400 text-center mt-3">
              Sin compromiso · Coordinamos visita personalizada al salón
            </p>
          </div>
        </div>
      </div>

      {/* Disruptive transition to Google reviews */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#FAF6F0] fill-current"
        >
          <path d="M0,0 C200,90 450,-20 700,70 C950,140 1100,20 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
