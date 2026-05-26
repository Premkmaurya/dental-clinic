import { ShieldCheck, HeartHandshake, Eye, Sparkles } from 'lucide-react';

interface AboutProps {
  onOpenAppointmentModal: () => void;
}

export default function About({ onOpenAppointmentModal }: AboutProps) {
  const doctors = [
    {
      name: 'Dr. Ameet S. Dixit, BDS',
      role: 'Founder & Principal Implantologist',
      exp: '22+ Years of Experience',
      education: 'AIIMS Hospital Resident | Univ of Miami & Univ of Toronto Alumni',
      bio: 'A BDS Gold Medalist, Dr. Dixit completed his Implantology specializations from Miami and Toronto. Formerly a Resident Surgeon at the prestigious AIIMS Hospital, he has placed over 17,000+ successful dental implants using world-class Straumann systems.',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=500'
    },
    {
      name: 'The Ark Dental Specialist Panel',
      role: 'Associated Endodontists & Pediatric Experts',
      exp: 'Meticulous Multi-disciplinary Care',
      education: 'Elite global dental universities',
      bio: 'To maintain the highest quality of dentistry, Ark Dental partners with elite consultancies across South Delhi. Our clinical panel incorporates expert orthodontists (Invisalign certified), endodontists for veneers, and pedodontists.',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=500'
    }
  ];

  const values = [
    {
      title: 'Trust-First Integrity',
      desc: 'We never over-prescribe. Every single care path is backed by high-resolution clinical imaging, microscopes, and clear peer evidence.',
      icon: ShieldCheck
    },
    {
      title: 'Microsurgical Precision',
      desc: 'Our clinicians operate under active surgical magnification to ensure we preserve maximal natural tooth enamel and biological tissue.',
      icon: Sparkles
    },
    {
      title: 'Absolute Comfort',
      desc: 'From quiet electronic drills and warm neck wraps to conscious sedation options, we customize each visit around physical relaxation.',
      icon: HeartHandshake
    },
    {
      title: 'Absolute Transparency',
      desc: 'No hidden fees. Detailed dental designs and all associated laboratory costs are shared, analyzed, and approved by you upfront.',
      icon: Eye
    }
  ];

  const environmentImages = [
    { title: 'The Wellness Lounge', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600' },
    { title: 'Advanced Surgical Suite', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600' },
    { title: 'Consultation Atelier', img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600' }
  ];

  return (
    <div className="relative w-full">
      {/* 1. Minimalist Editorial Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-24 text-center">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-6 animate-fade-rise">
          Our Atelier & Philosophy
        </span>
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl mx-auto font-normal text-foreground animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Modern dentistry, <br />
          <em className="text-muted-foreground not-italic">human care.</em>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-8 animate-fade-rise-delay font-light">
          We believe visiting the dentist should feel like stepping into a peaceful sanctuary. Ark Dental Clinic is designed entirely around sensory comfort, clinical artistry, and absolute diagnostic honesty.
        </p>
      </section>

      {/* 2. Narrative Section */}
      <section className="bg-secondary/15 py-32 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block">The Ark Dental Story</span>
            <h2 className="text-3xl sm:text-5xl font-normal text-foreground leading-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Crafting a Calming <br />Standard of Health
            </h2>
            <div className="text-sm sm:text-base text-muted-foreground space-y-4 font-light leading-relaxed">
              <p>
                Founded by BDS Gold Medalist and former AIIMS Resident Doctor, Dr. Ameet S. Dixit, Ark Dental Clinic was created as an antidote to the rushed, clinical, and sometimes scary nature of traditional high-volume dentist practices.
              </p>
              <p>
                Dr. Dixit envisioned a clinical space where South Delhi patients are treated with world-class hospitality. By integrating advanced computer-aided design (CAD/CAM) workflows, warm active acoustics, and Straumann premium implant systems, we have turned complex oral healthcare into a deeply comforting restorative experience.
              </p>
              <p>
                At Ark Dental Clinic, we do not simply restore teeth; we elevate your systemic health, confidence, and peace of mind. Every dental design is crafted with deep reverence for natural anatomical form.
              </p>
            </div>
          </div>
          
          {/* Side Image Frame */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-[#0b0e14]">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
              alt="Luxury Clinic Interior"
              className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:scale-102 transition-all duration-700" 
            />
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-32 border-b border-border/40">
        <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Our DNA</span>
          <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
            The Pillars of Our Care
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            These guiding values define every consultation, diagnostic scan, and custom restoration we perform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <div key={i} className="liquid-glass rounded-2xl p-6 border border-white/5 bg-secondary/10 hover:bg-secondary/20 transition-all duration-300">
                <div className="mb-5 rounded-full bg-white/5 p-3 text-foreground w-fit">
                  <Icon size={16} className="stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-normal text-foreground mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Meet The Doctors */}
      <section className="bg-secondary/10 py-32 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold font-mono">Expert Clinicians</span>
              <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Our Medical Directors
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm font-light leading-relaxed">
              Meet the specialists leading our medical operations, bringing unparalleled global training and aesthetic mastery directly to your care.
            </p>
          </div>

          {/* Doctors Column Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {doctors.map((doc, idx) => (
              <div 
                key={idx} 
                className="liquid-glass rounded-3xl border border-white/5 bg-secondary/20 overflow-hidden flex flex-col sm:flex-row"
              >
                {/* Photo */}
                <div className="w-full sm:w-[45%] aspect-[4/5] sm:aspect-auto overflow-hidden relative border-b sm:border-b-0 sm:border-r border-border/40 bg-black/20">
                  <img 
                    src={doc.img} 
                    alt={doc.name}
                    className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:scale-103 transition-all duration-500" 
                  />
                </div>
                
                {/* Info Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] text-muted-foreground uppercase font-mono block tracking-wider">{doc.exp}</span>
                    <h3 className="text-2xl font-normal text-foreground leading-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                      {doc.name}
                    </h3>
                    <h4 className="text-xs text-muted-foreground font-medium italic">{doc.role}</h4>
                    <p className="text-xs text-muted-foreground/60 font-medium pt-1">Edu: {doc.education}</p>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                    {doc.bio}
                  </p>

                  <div className="border-t border-border/30 pt-4 flex gap-2">
                    <span className="text-[10px] bg-white/5 border border-white/10 text-foreground px-2.5 py-1 rounded-full">Aesthetic Dentistry</span>
                    <span className="text-[10px] bg-white/5 border border-white/10 text-foreground px-2.5 py-1 rounded-full">ADA Accredited</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Elegant Clinic Environment Gallery */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-32">
        <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">The Sanctuary</span>
          <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
            The Dental Atelier Environment
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            A quiet sanctuary structured with architectural geometry, gentle warm lighting, and private soundproof rooms to provide peaceful solace.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {environmentImages.map((env, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-[#0b0e14]">
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img 
                  src={env.img} 
                  alt={env.title}
                  className="w-full h-full object-cover grayscale opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-65" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h4 className="text-lg font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {env.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-24 text-center">
          <button
            onClick={onOpenAppointmentModal}
            className="rounded-full bg-white text-black px-8 py-3.5 text-sm font-semibold hover:scale-[1.03] transition-transform duration-200 cursor-pointer shadow-lg inline-flex items-center gap-2"
          >
            Schedule a Private Tour
          </button>
        </div>
      </section>
    </div>
  );
}
