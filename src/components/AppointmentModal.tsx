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
              Request a Consultation
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Let us help you customize your smile journey.
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
                Consultation Requested
              </h4>
              <p className="text-sm text-muted-foreground max-w-sm mt-2 leading-relaxed">
                Thank you for choosing Ark Dental Clinic. One of our specialists will reach out to you shortly to confirm your preferred timing.
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="mt-8 rounded-full border border-border bg-white/5 px-6 py-2.5 text-sm font-medium text-foreground hover:bg-white/10 transition-all duration-200"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                  <User size={12} /> Full Name
                </label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Julianne Vance"
                  className="w-full rounded-xl border border-border bg-black/10 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 focus:border-white/40 focus:outline-none transition-colors"
                />
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <Phone size={12} /> Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl border border-border bg-black/10 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 focus:border-white/40 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <Mail size={12} /> Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="julianne@example.com"
                    className="w-full rounded-xl border border-border bg-black/10 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 focus:border-white/40 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Treatment & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <FileText size={12} /> Treatment Interest
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-[#101319] px-4 py-3 text-sm text-foreground focus:border-white/40 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Root Canal Treatment">Root Canal Treatment</option>
                    <option value="Orthodontics / Braces">Orthodontics & Aligners</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                    <option value="Smile Makeover">Full Smile Makeover</option>
                    <option value="General Dentistry">General Checkup</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <Calendar size={12} /> Preferred Date
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
                  Additional Details (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your dental goals or concerns..."
                  className="w-full rounded-xl border border-border bg-black/10 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 focus:border-white/40 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-white text-black py-3.5 text-sm font-semibold hover:scale-[1.01] transition-transform duration-200 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing Consultation...
                  </>
                ) : (
                  'Schedule Consultation'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
