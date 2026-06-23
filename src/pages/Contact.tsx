import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, PhoneCall, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatment: 'Specialist Consultation',
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
        treatment: 'Specialist Consultation',
        date: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="relative w-full">
      {/* 1. Contact Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-16 text-center">
        <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-4 animate-fade-rise">
          Connect With Us
        </span>
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-5xl mx-auto text-foreground animate-fade-rise"
        >
          Your Health is Our <br />
          <span className="text-primary">Priority</span>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-xl max-w-2xl mx-auto leading-relaxed mt-6 animate-fade-rise-delay font-light">
          Have an inquiry, need a consultation, or managing a chronic condition? Complete our form, call us directly, or chat via WhatsApp.
        </p>
      </section>

      {/* 2. Main Contact Columns */}
      <section className="bg-secondary/30 py-24 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Column A: Custom Consult Form */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 sm:p-10 shadow-xl space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Appointment Request
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                Share your timeline and we will secure your appointment.
              </p>
            </div>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-rise">
                <div className="mb-4 rounded-full bg-emerald-500/10 p-4 text-emerald-500">
                  <CheckCircle2 size={44} className="stroke-[2]" />
                </div>
                <h4 className="text-xl font-bold text-foreground">
                  Inquiry Logged Successfully
                </h4>
                <p className="text-sm text-muted-foreground max-w-xs mt-2 leading-relaxed">
                  Thank you. Your request is registered with Suraksha Multispeciality Clinic. Our coordinator will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 rounded-full border border-border bg-secondary px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-border transition-colors cursor-pointer"
                >
                  Submit Another Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 81052 00448"
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com"
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Treatment & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service Required</label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors appearance-none"
                    >
                      <option value="Specialist Consultation">Specialist Consultation</option>
                      <option value="Diabetes Management">Diabetes Management</option>
                      <option value="Hypertension Care">Hypertension Care</option>
                      <option value="Thyroid Care">Thyroid Care</option>
                      <option value="Laboratory Services">Laboratory Services</option>
                      <option value="Day Care Services">Day Care Services</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Preferred Date</label>
                    <input
                      required
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe your current symptoms or scheduling preferences..."
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 rounded-full bg-primary text-primary-foreground py-4 text-sm font-bold hover:bg-primary/90 transition-all duration-200 cursor-pointer disabled:opacity-50 flex items-center justify-center shadow-lg"
                >
                  {isSubmitting ? 'Registering...' : 'Request Appointment'}
                </button>
              </form>
            )}
          </div>

          {/* Column B: Clinic Info */}
          <div className="space-y-12">
            
            {/* Clinic details */}
            <div className="space-y-6">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">Contact Details</span>
              <h3 className="text-4xl font-bold text-foreground leading-tight">
                Suraksha Multispeciality Clinic
              </h3>
              
              <div className="space-y-6 text-base text-muted-foreground">
                <div className="flex gap-4 items-start">
                  <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground block mb-1">Our Location</span>
                    <p>2nd Cross Rd, Arekere,<br />Bengaluru, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground block mb-1">Phone Number</span>
                    <p className="font-medium text-foreground">+91 81052 00448</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Mail size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground block mb-1">Email Address</span>
                    <p className="font-medium text-foreground">info.surakshaclinic@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground block mb-1">Clinic Hours</span>
                    <p>Monday – Sunday: 8:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp & Instant CTAs */}
            <div className="border-t border-border/60 pt-10 space-y-4">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-4">Direct Channels</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Call Link */}
                <a
                  href="tel:+918105200448"
                  className="bg-white rounded-xl border border-border/60 p-5 hover:shadow-lg transition-all duration-300 flex items-center gap-4 cursor-pointer"
                >
                  <span className="rounded-full bg-primary/10 p-3 text-primary">
                    <PhoneCall size={20} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Call Clinic</h4>
                    <p className="text-xs text-muted-foreground">Speak to our reception</p>
                  </div>
                </a>

                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/918105200448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366]/10 rounded-xl border border-[#25D366]/20 p-5 hover:bg-[#25D366]/20 transition-all duration-300 flex items-center gap-4 cursor-pointer"
                >
                  <span className="rounded-full bg-[#25D366] p-3 text-white">
                    <MessageCircle size={20} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">WhatsApp Us</h4>
                    <p className="text-xs text-muted-foreground">Fastest response time</p>
                  </div>
                </a>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Map Showcase */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-24 text-center">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">Find Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Visit the Clinic
          </h2>
          <p className="text-muted-foreground text-lg">
            Located conveniently in Arekere, Bengaluru to serve the community.
          </p>
        </div>

        {/* Google Maps Placeholder via Embed iframe */}
        <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.760163359648!2d77.5959556!3d12.8954751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152f204ba5eb%3A0x89fcddb621e7d3a0!2sArekere%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Suraksha Multispeciality Clinic Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
