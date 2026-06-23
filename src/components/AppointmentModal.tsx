import { useState } from 'react';
import { X, Calendar, User, Phone, Mail, FileText, CheckCircle2 } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatment: 'General Dentistry',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        treatment: 'General Dentistry',
        date: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Glassmorphic Backdrop */}
      <div 
        className="absolute inset-0 bg-background/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-secondary/90 shadow-2xl transition-all duration-300 animate-fade-rise max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/40 p-6">
          <div>
            <h3 className="text-2xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Solicitar una Cita
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Déjanos ayudarte a personalizar tu sonrisa.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content body */}
        <div className="flex-1 overflow-y-auto p-6">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-rise">
              <div className="mb-4 rounded-full bg-emerald-500/10 p-4 text-emerald-400">
                <CheckCircle2 size={48} className="stroke-[1.5]" />
              </div>
              <h4 className="text-2xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Cita Solicitada
              </h4>
              <p className="text-sm text-muted-foreground max-w-sm mt-2 leading-relaxed">
                Gracias por elegir dental.Clinic. Uno de nuestros especialistas se pondrá en contacto contigo en breve para confirmar el horario.
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="mt-8 rounded-full border border-border bg-white/5 px-6 py-2.5 text-sm font-medium text-foreground hover:bg-white/10 transition-all duration-200"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                  <User size={12} /> Nombre Completo
                </label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Ej. María García"
                  className="w-full rounded-xl border border-border bg-black/10 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 focus:border-white/40 focus:outline-none transition-colors"
                />
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <Phone size={12} /> Teléfono
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="664 208 8413"
                    className="w-full rounded-xl border border-border bg-black/10 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 focus:border-white/40 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <Mail size={12} /> Correo Electrónico
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    className="w-full rounded-xl border border-border bg-black/10 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 focus:border-white/40 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Treatment & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <FileText size={12} /> Tratamiento
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-[#101319] px-4 py-3 text-sm text-foreground focus:border-white/40 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="Odontología General">Odontología General</option>
                    <option value="Ortodoncia">Ortodoncia</option>
                    <option value="Implantes Dentales">Implantes Dentales</option>
                    <option value="Blanqueamiento Dental">Blanqueamiento Dental</option>
                    <option value="Odontología Estética">Odontología Estética</option>
                    <option value="Endodoncia">Endodoncia</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <Calendar size={12} /> Fecha Preferida
                  </label>
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-black/10 px-4 py-3 text-sm text-foreground focus:border-white/40 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">
                  Detalles Adicionales (Opcional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Cuéntanos sobre tus dudas o necesidades..."
                  className="w-full rounded-xl border border-border bg-black/10 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 focus:border-white/40 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-white text-black py-3.5 text-sm font-semibold hover:scale-[1.01] transition-transform duration-200 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Procesando...
                    </>
                  ) : (
                    'Agendar Cita'
                  )}
                </button>
                <div className="text-center text-xs text-muted-foreground/60 py-1">— o —</div>
                <a 
                  href="https://wa.me/526642088413" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full rounded-full bg-[#25D366] text-white py-3.5 text-sm font-semibold hover:scale-[1.01] transition-transform duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.000000.com/" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.027 6.988 2.895a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Contactar por WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
