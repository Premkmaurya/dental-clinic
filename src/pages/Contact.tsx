import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Compass, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Contact() {
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
    <div className="relative w-full">
      {/* 1. Contact Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-16 text-center">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-6 animate-fade-rise">
          Connect & Inquire
        </span>
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl mx-auto font-normal text-foreground animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Let us help you <br />
          <em className="text-muted-foreground not-italic">experience dentistry differently.</em>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-8 animate-fade-rise-delay font-light">
          Have an inquiry, referral, or dental concern? Complete our consultation form, phone our concierge desks directly, or chat via instant messaging.
        </p>
      </section>

      {/* 2. Main Contact Columns */}
      <section className="bg-secondary/10 py-32 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Column A: Custom Consult Form */}
          <div className="liquid-glass rounded-3xl border border-white/5 bg-secondary/30 p-8 sm:p-10 shadow-xl space-y-6">
            <div>
              <h2 className="text-3xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Consultation Request
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Share your timeline and care goals, and our concierge will secure your private suite booking.
              </p>
            </div>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-rise">
                <div className="mb-4 rounded-full bg-emerald-500/10 p-4 text-emerald-400">
                  <CheckCircle2 size={44} className="stroke-[1.5]" />
                </div>
                <h4 className="text-xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Inquiry Logged Successful
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-xs mt-2 leading-relaxed font-light">
                  Thank you. Your request is registered under Ark Dental Clinic archives. Our scheduling coordinator will phone you in under 4 operating hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 rounded-full border border-border bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Submit Another Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">Full Name</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Robert Vance"
                    className="w-full rounded-xl border border-border bg-black/15 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/30 focus:border-white/40 focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-border bg-black/15 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/30 focus:border-white/40 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="robert@example.com"
                      className="w-full rounded-xl border border-border bg-black/15 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/30 focus:border-white/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Treatment & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">Treatment Interest</label>
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
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">Preferred Date</label>
                    <input
                      required
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-black/15 px-4 py-3 text-sm text-foreground focus:border-white/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your current symptoms, goals, or scheduling preferences..."
                    className="w-full rounded-xl border border-border bg-black/15 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/30 focus:border-white/40 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 rounded-full bg-white text-black py-4 text-xs font-semibold tracking-wider uppercase hover:scale-[1.01] transition-transform duration-200 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Registering Consultation...' : 'Schedule Consultation'}
                </button>
              </form>
            )}
          </div>

          {/* Column B: Clinic Info */}
          <div className="space-y-12">
            
            {/* Clinic details */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Concierge Desk</span>
              <h3 className="text-3xl font-normal text-foreground leading-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Ark Dental® Headquarters
              </h3>
              
              <div className="space-y-5 text-sm sm:text-base font-light text-muted-foreground">
                <div className="flex gap-4 items-start">
                  <MapPin size={18} className="text-white shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-foreground uppercase font-semibold block mb-1">Our Location</span>
                    <p>R-27, Block R, Greater Kailash-1,<br />New Delhi - 110048, India</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone size={18} className="text-white shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-foreground uppercase font-semibold block mb-1">Inquiry Lines</span>
                    <p className="font-medium text-foreground">+91 99905 09300</p>
                    <p className="text-xs italic mt-0.5">Clinic Landline: 011-41001313</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Mail size={18} className="text-white shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-foreground uppercase font-semibold block mb-1">Concierge Email</span>
                    <p className="font-medium text-foreground font-sans">care@arkdental.in</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock size={18} className="text-white shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-foreground uppercase font-semibold block mb-1">Clinic Hours</span>
                    <p>Mon – Sat: 09:00 – 19:00</p>
                    <p>Sun: 10:00 – 15:00</p>
                    <p className="italic text-xs font-semibold text-white mt-0.5">24/7 Emergency Registry Active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp & Instant CTAs */}
            <div className="border-t border-border/40 pt-10 space-y-4">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono block">Direct Channels</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/919990509300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass rounded-xl border border-white/5 bg-[#128c7e]/10 p-5 hover:bg-[#128c7e]/20 transition-all duration-300 flex items-center gap-4 cursor-pointer"
                >
                  <span className="rounded-full bg-[#25d366]/10 p-3 text-[#25d366]">
                    <MessageCircle size={20} className="fill-current" />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">WhatsApp Clinic</h4>
                    <p className="text-xs text-muted-foreground">Live text chat support</p>
                  </div>
                </a>

                {/* Instant Chat Trigger */}
                <button
                  onClick={() => alert("Connecting you with our concierge team... please hold.")}
                  className="liquid-glass text-left rounded-xl border border-white/5 bg-white/5 p-5 hover:bg-white/10 transition-all duration-300 flex items-center gap-4 cursor-pointer"
                >
                  <span className="rounded-full bg-white/5 p-3 text-white">
                    <MessageSquare size={20} />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Chat With Us</h4>
                    <p className="text-xs text-muted-foreground">Standard web chat portal</p>
                  </div>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Artistic Styled Premium Map Showcase */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-32 text-center">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Clinical Geometry</span>
          <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
            The Clinic Location Map
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Beautifully situated in the prime Greater Kailash-1 (GK-1) South Delhi health corridor.
          </p>
        </div>

        {/* Custom Premium SVG Vector Map Panel */}
        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden border border-border bg-[#0b0f16] flex items-center justify-center p-6 group">
          {/* Artistic SVG background grid representing city grid layout */}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none stroke-white stroke-[0.5]" fill="none">
            <defs>
              <pattern id="cityGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cityGrid)" />
            {/* Curved diagonal lines representing streets */}
            <path d="M-100,200 C300,50 800,450 1400,100" strokeWidth="2" />
            <path d="M100,-100 C400,600 600,-200 900,600" strokeWidth="1.5" />
            <path d="M400,500 L1200,-100" strokeWidth="1" />
          </svg>

          {/* Compass Graphic */}
          <div className="absolute bottom-6 left-6 text-muted-foreground/30 flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider">
            <Compass size={16} /> 28.5484° N, 77.2345° E
          </div>

          {/* Stylized Pin Marker Card */}
          <div className="relative z-10 liquid-glass rounded-2xl border border-white/10 bg-background/80 p-6 max-w-xs text-center shadow-2xl space-y-4 backdrop-blur-md animate-fade-rise">
            <div className="mx-auto rounded-full bg-white text-black p-3 w-fit">
              <MapPin size={22} className="stroke-[2.5]" />
            </div>
            <div>
              <h4 className="text-lg font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Ark Dental Clinic (GK-1)
              </h4>
              <p className="text-[11px] text-muted-foreground mt-1">R-27, Block R, Greater Kailash-1, New Delhi 110048</p>
            </div>
            <a 
              href="https://maps.google.com/?q=R-27,+Block+R,+Greater+Kailash-1,+New+Delhi+-+110048"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-foreground font-semibold uppercase tracking-wider hover:gap-2.5 transition-all"
            >
              Open in Google Maps <Send size={10} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
