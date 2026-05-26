// React core and assets

import useVideo from '../assets/video.mp4';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Heart, 
  Compass, 
  Zap, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Eye,
  Plus
} from 'lucide-react';

interface HomeProps {
  onOpenAppointmentModal: () => void;
}

export default function Home({ onOpenAppointmentModal }: HomeProps) {


  // Smooth scroll helper to top of next section
  const handleScrollDown = () => {
    const nextSection = document.getElementById('services-preview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Cosmetic Dentistry',
      desc: 'Masterfully crafted porcelain veneers and aesthetic bondings designed to enhance natural facial harmony.',
      icon: Sparkles
    },
    {
      title: 'Dental Implants',
      desc: 'State-of-the-art titanium and ceramic reconstructions that restore natural biting force and dental anatomy.',
      icon: Plus
    },
    {
      title: 'Root Canal Treatment',
      desc: 'Microscope-assisted endodontics focusing on conservative preservation of natural tooth structures, fully pain-free.',
      icon: ShieldCheck
    },
    {
      title: 'Orthodontics & Braces',
      desc: 'Modern aligners and low-profile ceramic braces designed for precision alignment with minimal life disruption.',
      icon: Compass
    },
    {
      title: 'Teeth Whitening',
      desc: 'Advanced in-office dental bleaching combined with premium home treatments for a naturally brilliant luster.',
      icon: Zap
    },
    {
      title: 'Pediatric Dentistry',
      desc: 'Gentle, comforting preventive care tailored for child development to foster positive dental relationships.',
      icon: Heart
    }
  ];

  const trustPillars = [
    { title: 'Experienced Specialists', desc: 'Our clinicians hold elite credentials from top-tier dental institutions and engage in active international research.' },
    { title: 'Modern Technology', desc: 'Utilizing 3D cone-beam computed tomography, digital oral scanners, and advanced surgical microscopes.' },
    { title: 'Pain-Free Procedures', desc: 'Gentle local anesthesia techniques combined with optional conscious sedation protocols for a completely anxiety-free experience.' },
    { title: 'Personalized Care', desc: 'We schedule extended reservation times to ensure your goals, comfort, and clinical details receive absolute attention.' },
    { title: 'Comfortable Environment', desc: 'A calming clinical space resembling a luxury boutique spa, featuring active soundproofing and calming aromatherapy.' },
    { title: 'Transparent Pricing', desc: 'Comprehensive digital treatment plans outlined in full detail prior to care, with direct insurance and finance options.' }
  ];

  const testimonials = [
    {
      name: 'Adeline Sterling',
      role: 'Creative Director',
      rating: 5,
      story: 'The care here is unlike any other medical office I have visited. The team treated my veneer transformation with the precision of fine artists. Truly a calming, luxury experience.',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'Marcus Sterling',
      role: 'Investment Partner',
      rating: 5,
      story: 'My implant procedure was completely pain-free, fast, and handled with impeccable surgical precision. The clinical environment is stunningly serene, making visits genuinely pleasant.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'Elena Rostova',
      role: 'Concert Violinist',
      rating: 5,
      story: 'As a performer, my smile is key. The teeth whitening and cosmetic alignment at Ark Dental completely elevated my confidence. The attention to detail is world-class.',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200'
    }
  ];

  const galleryItems = [
    { title: 'Aesthetic Restoration', category: 'Porcelain Veneers', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=500' },
    { title: 'Implant Reconstruction', category: 'Full Arch Restoration', img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=500' },
    { title: 'Smile Whitening', category: 'Laser Luster Treatment', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=500' },
    { title: 'Precision Alignment', category: 'Clear Aligner System', img: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=500' }
  ];

  return (
    <div className="relative w-full">
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-[#001726] via-[#00223b] to-[#000a12]">
        {/* Fullscreen Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover opacity-60 scale-[1.02]"
          src={useVideo}
        />

        {/* Cinematic Backdrop Overlay */}
        <div className="absolute inset-0 bg-background/50 z-0 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center px-4">
          <h1 
            className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-6xl font-normal text-foreground animate-fade-rise"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Confident <em className="text-muted-foreground not-italic">smiles</em> begin with <br className="hidden sm:inline" />
            exceptional <em className="text-muted-foreground not-italic">care.</em>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed mt-8 animate-fade-rise-delay font-light">
            Premium dental care designed around comfort, precision, and confidence. From preventive checkups to smile transformations, we help you experience dentistry differently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-rise-delay-2 w-full sm:w-auto">
            <button
              onClick={onOpenAppointmentModal}
              className="rounded-full bg-white text-black px-8 py-3.5 text-sm font-semibold hover:scale-[1.03] transition-transform duration-200 cursor-pointer shadow-lg w-full sm:w-auto"
            >
              Book Appointment
            </button>
            <Link
              to="/services"
              className="liquid-glass rounded-full px-8 py-3.5 text-sm text-foreground hover:scale-[1.03] transition-transform duration-200 cursor-pointer w-full sm:w-auto border border-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={handleScrollDown}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-xs tracking-widest text-muted-foreground uppercase flex flex-col items-center gap-2 hover:text-foreground transition-colors cursor-pointer group"
        >
          <span>Scroll Down</span>
          <span className="w-[1px] h-8 bg-muted-foreground/30 group-hover:h-12 transition-all duration-300 relative overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[bounce_2s_infinite]" />
          </span>
        </button>
      </section>

      {/* 2. Premium Services Preview */}
      <section id="services-preview" className="max-w-7xl mx-auto px-6 sm:px-8 py-32 border-b border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Signature Offerings</span>
            <h2 className="text-4xl sm:text-5xl font-normal text-foreground leading-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Clinical Excellence, <br />Artistic Precision
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm font-light leading-relaxed">
            We provide a comprehensive range of premium dental procedures custom-tailored to preserve your health, mechanics, and facial aesthetic.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title} 
                className="liquid-glass group rounded-2xl p-8 border border-white/5 bg-secondary/20 hover:bg-secondary/40 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="mb-6 rounded-full bg-white/5 p-3.5 text-foreground w-fit group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <Icon size={20} className="stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link 
                  to="/services" 
                  className="text-xs text-foreground font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:gap-2.5 transition-all"
                >
                  Learn More <ArrowRight size={12} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="liquid-glass rounded-full px-8 py-3.5 text-sm text-foreground hover:scale-[1.02] transition-transform duration-200 inline-flex items-center gap-2 border border-white/10"
          >
            View Our Full Catalog
          </Link>
        </div>
      </section>

      {/* 3. Why Choose Us (Trust Section) */}
      <section className="bg-secondary/10 py-32 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Our Philosophy</span>
            <h2 className="text-4xl sm:text-6xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Redefining the Dental Experience
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed pt-2">
              Ark Dental Clinic was established with a singular mission: to strip away the sterile, anxiety-inducing traditional clinical model and replace it with bespoke wellness and meticulous patient attention.
            </p>
          </div>

          {/* Pillars Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustPillars.map((pillar, i) => (
              <div key={pillar.title} className="space-y-3.5 border-t border-border/40 pt-6">
                <span className="text-xs text-muted-foreground/60 font-mono">0{i + 1} //</span>
                <h3 className="text-xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Before/After Smile Gallery */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-32 border-b border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Transformations</span>
            <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Signature Smile Gallery
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm font-light leading-relaxed">
            A curated display of actual clinical transformations showcasing the restorative art of Ark Dental. Subtle, organic, and beautifully life-like.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-[#0b0e14]">
              {/* Image Frame */}
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              </div>
              
              {/* Metadata */}
              <div className="absolute bottom-0 left-0 w-full p-6 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-mono">{item.category}</span>
                <h4 className="text-lg font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {item.title}
                </h4>
              </div>

              {/* View Overlay Tag */}
              <div className="absolute top-4 right-4 rounded-full bg-black/60 backdrop-blur-md p-2 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Testimonials Preview */}
      <section className="bg-[#0b0e14] py-32 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Client Journeys</span>
            <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Shared Confidences
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Read how our dedicated care and serene environment have completely reshaped how our patients perceive dental visits.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div key={index} className="liquid-glass rounded-2xl p-8 border border-white/5 bg-secondary/10 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1 text-yellow-500/80">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" className="stroke-none" />
                    ))}
                  </div>
                  {/* Review Text */}
                  <p className="text-sm text-muted-foreground font-light leading-relaxed italic">
                    "{test.story}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-border/30 pt-4">
                  <img 
                    src={test.img} 
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10" 
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{test.name}</h4>
                    <span className="text-xs text-muted-foreground font-light">{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/testimonials"
              className="text-sm text-foreground font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:gap-2.5 transition-all justify-center"
            >
              Read More Client Experiences <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CTA Strip */}
      <section className="relative w-full overflow-hidden py-32 px-6 sm:px-8 text-center bg-secondary/20">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10 flex flex-col items-center">
          <h2 className="text-4xl sm:text-7xl font-normal leading-tight text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Your healthiest smile starts today.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed font-light">
            Indulge in absolute comfort, elite medical expertise, and transparent modern care. Register your private consult reservations online in under two minutes.
          </p>
          <button
            onClick={onOpenAppointmentModal}
            className="rounded-full bg-white text-black px-8 py-3.5 text-sm font-semibold hover:scale-[1.03] transition-transform duration-200 cursor-pointer shadow-lg w-full sm:w-auto mt-4"
          >
            Book Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
