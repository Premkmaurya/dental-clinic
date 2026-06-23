import { ShieldCheck, HeartPulse, Stethoscope, Activity } from 'lucide-react';

interface AboutProps {
  onOpenAppointmentModal: () => void;
}

export default function About({ onOpenAppointmentModal }: AboutProps) {
  
  const values = [
    {
      title: 'Accurate Diagnosis',
      desc: 'We rely on thorough clinical evaluations and advanced laboratory tests to ensure precision in every diagnosis.',
      icon: Stethoscope
    },
    {
      title: 'Chronic Care Focus',
      desc: 'Specialized focus on managing long-term conditions like diabetes, hypertension, and hypothyroidism.',
      icon: Activity
    },
    {
      title: 'Compassionate Treatment',
      desc: 'Our approach is rooted in empathy, ensuring every patient feels heard, respected, and comfortable.',
      icon: HeartPulse
    },
    {
      title: 'Trust & Transparency',
      desc: 'We maintain clear communication regarding treatments, progress, and medication, building lasting trust.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="relative w-full">
      {/* 1. Minimalist Editorial Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-24 text-center">
        <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-4 animate-fade-rise">
          About Suraksha Clinic
        </span>
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-5xl mx-auto text-foreground animate-fade-rise"
        >
          Dedicated to Your <br />
          <span className="text-primary">Complete Well-being</span>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-xl max-w-2xl mx-auto leading-relaxed mt-8 animate-fade-rise-delay font-light">
          For over 2 years, Suraksha Multispeciality Clinic has been a pillar of health in Arekere, Bengaluru, offering utmost care and treatment with proper diagnosis under one roof.
        </p>
      </section>

      {/* 2. Narrative Section */}
      <section className="bg-secondary/30 py-24 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase block">Our Story</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight">
              2+ Years of Trusted Care in Bengaluru
            </h2>
            <div className="text-base text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Suraksha Multispeciality Clinic was founded with a clear vision: to provide comprehensive, accessible, and high-quality healthcare to families in Bengaluru. We understand that managing health can be overwhelming, which is why we brought expert consultations, laboratory diagnostics, and a fully stocked pharmacy together under one roof.
              </p>
              <p>
                Over the past 2+ years, we have successfully treated countless patients, earning their trust through our commitment to accurate diagnosis and effective treatment plans. We take special pride in our chronic disease management programs, helping patients maintain healthy lives despite conditions like diabetes and hypertension.
              </p>
              <p>
                Our philosophy is simple: We provide utmost care. Every patient journey at our clinic is guided by compassion, transparency, and clinical excellence.
              </p>
            </div>
          </div>
          
          {/* Side Image Frame */}
          <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
              alt="Modern Hospital and Medical Staff"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700" 
            />
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-24 border-b border-border/40">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">Our Core Principles</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            The Pillars of Our Care
          </h2>
          <p className="text-muted-foreground text-lg">
            These values guide every interaction, consultation, and diagnosis at Suraksha Multispeciality Clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <div key={i} className="bg-white rounded-2xl p-8 border border-border/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="mb-6 bg-primary/10 p-3 rounded-xl text-primary w-fit">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Experience the Suraksha Standard
        </h2>
        <p className="text-muted-foreground mb-10 text-lg max-w-2xl mx-auto">
          Join the hundreds of families who trust us for their healthcare needs.
        </p>
        <button
          onClick={onOpenAppointmentModal}
          className="rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 shadow-lg transition-all"
        >
          Book Your Visit Today
        </button>
      </section>
    </div>
  );
}
