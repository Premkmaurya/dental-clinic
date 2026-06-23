import { Link } from 'react-router-dom';
import { 
  HeartPulse, 
  Activity, 
  Stethoscope, 
  Clock, 
  PhoneCall, 
  Calendar, 
  Pill, 
  FlaskConical, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface HomeProps {
  onOpenAppointmentModal: () => void;
}

export default function Home({ onOpenAppointmentModal }: HomeProps) {

  const whyChooseUs = [
    { title: '2+ Years of Trusted Care', desc: 'Serving the Bengaluru community with dedication and proven clinical outcomes.' },
    { title: 'Specialist Consultation', desc: 'Expert medical professionals providing accurate diagnosis and comprehensive treatment plans.' },
    { title: 'Chronic Disease Management', desc: 'Specialized programs for diabetes, hypertension, and thyroid conditions.' },
    { title: 'In-house Laboratory', desc: 'Fast, accurate diagnostic testing available directly within our clinic.' },
    { title: 'Convenient Day Care', desc: 'Comfortable day care facilities for observation, IV fluids, and minor procedures.' },
    { title: 'Pharmacy Services', desc: 'Fully stocked pharmacy on-site to ensure you get your medications immediately.' }
  ];

  const servicesPreview = [
    {
      title: 'Specialist Consultation',
      desc: 'Expert medical evaluation, accurate diagnosis, and personalized treatment plans for adults and children.',
      icon: Stethoscope
    },
    {
      title: 'Diabetes Management',
      desc: 'Comprehensive blood sugar monitoring, diet planning, and medication adjustment for long-term health.',
      icon: Activity
    },
    {
      title: 'Laboratory Services',
      desc: 'Accurate and timely diagnostic blood tests, profiles, and screenings conducted in-house.',
      icon: FlaskConical
    },
    {
      title: 'Pharmacy',
      desc: 'Authentic medicines and healthcare products available immediately after your consultation.',
      icon: Pill
    }
  ];

  const journeySteps = [
    { title: 'Book Appointment', desc: 'Schedule your visit online or via phone.', icon: Calendar },
    { title: 'Visit Clinic', desc: 'Arrive at our welcoming facility in Arekere.', icon: ShieldCheck },
    { title: 'Get Diagnosis', desc: 'Consult with our expert medical specialists.', icon: Stethoscope },
    { title: 'Receive Treatment', desc: 'Get prescriptions, lab tests, or day care.', icon: Pill },
    { title: 'Ongoing Care', desc: 'Follow-ups and chronic condition monitoring.', icon: HeartPulse }
  ];

  return (
    <div className="relative w-full">
      {/* 1. Healthcare Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-secondary/30">
        {/* Background elements for soft healthcare theme */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute top-[40%] -left-[10%] w-[40%] h-[60%] rounded-full bg-blue-500/5 blur-[120px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center px-4 pt-20">
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            <Activity size={14} /> Suraksha Multispeciality Clinic
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-5xl text-foreground leading-[1.1] animate-fade-rise">
            Trusted Healthcare for <br className="hidden sm:inline" />
            <span className="text-primary">You and Your Family</span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-xl max-w-3xl leading-relaxed mt-6 animate-fade-rise-delay font-light">
            Comprehensive consultations, laboratory services, pharmacy support, and chronic disease management under one roof.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-rise-delay-2 w-full sm:w-auto">
            <button
              onClick={onOpenAppointmentModal}
              className="rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold hover:bg-primary/90 hover:-translate-y-0.5 shadow-lg transition-all duration-200 cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Calendar size={18} />
              Book Appointment
            </button>
            <a
              href="tel:+918105200448"
              className="rounded-full bg-white text-primary border border-border px-8 py-4 text-sm font-semibold hover:bg-secondary transition-all duration-200 cursor-pointer w-full sm:w-auto shadow-sm flex items-center justify-center gap-2"
            >
              <PhoneCall size={18} />
              Call Now
            </a>
          </div>
        </div>

        {/* Hero Info Bar */}
        <div className="relative z-10 w-full max-w-5xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 px-4 animate-fade-rise-delay-2">
          <div className="liquid-glass rounded-2xl p-6 flex flex-col items-center text-center gap-3">
            <div className="bg-primary/10 p-3 rounded-full text-primary"><Clock size={20} /></div>
            <div>
              <h4 className="font-semibold text-foreground text-sm">Clinic Timings</h4>
              <p className="text-xs text-muted-foreground mt-1">8:00 AM – 10:00 PM (Mon-Sun)</p>
            </div>
          </div>
          <div className="liquid-glass rounded-2xl p-6 flex flex-col items-center text-center gap-3">
            <div className="bg-primary/10 p-3 rounded-full text-primary"><PhoneCall size={20} /></div>
            <div>
              <h4 className="font-semibold text-foreground text-sm">Emergency & Contact</h4>
              <p className="text-xs text-muted-foreground mt-1">+91 81052 00448</p>
            </div>
          </div>
          <div className="liquid-glass rounded-2xl p-6 flex flex-col items-center text-center gap-3">
            <div className="bg-primary/10 p-3 rounded-full text-primary"><ShieldCheck size={20} /></div>
            <div>
              <h4 className="font-semibold text-foreground text-sm">Service Highlights</h4>
              <p className="text-xs text-muted-foreground mt-1">Consultation, Lab, Pharmacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us */}
      <section className="py-24 bg-white border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">Why Choose Suraksha</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Comprehensive Care Built on Trust
            </h2>
            <p className="text-muted-foreground">
              We provide utmost care and treatment with proper diagnosis, offering a complete healthcare ecosystem for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-6 rounded-2xl bg-secondary/50 border border-border/50 hover:bg-secondary transition-colors">
                <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Special Chronic Care Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="text-primary-foreground/80 font-semibold tracking-wider text-sm uppercase">Specialized Focus</span>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Managing Diabetes, Blood Pressure & Thyroid Conditions
            </h2>
            <p className="text-primary-foreground/90 text-lg font-light leading-relaxed">
              Chronic conditions require continuous, dedicated care. At Suraksha Multispeciality Clinic, we offer structured programs to keep your health metrics in perfect balance.
            </p>
            
            <ul className="space-y-4 pt-4">
              {[
                'Regular monitoring of vitals and blood parameters',
                'Precise medication management and adjustments',
                'Personalized lifestyle and dietary guidance',
                'Long-term patient support to prevent complications'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-white/20 p-1 rounded-full"><CheckCircle2 size={16} className="text-white" /></div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <button
                onClick={onOpenAppointmentModal}
                className="rounded-full bg-white text-primary px-8 py-3.5 text-sm font-bold hover:scale-105 shadow-xl transition-all duration-200 cursor-pointer"
              >
                Consult a Specialist Today
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white/10">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                alt="Doctor checking blood pressure" 
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Preview */}
      <section className="py-24 bg-white border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">Our Expertise</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Healthcare Services
              </h2>
            </div>
            <Link
              to="/services"
              className="text-primary font-semibold hover:underline flex items-center gap-2"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesPreview.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="liquid-glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-border">
                  <div className="bg-secondary p-3 rounded-xl w-fit text-primary mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground flex-grow mb-6">{service.desc}</p>
                  <Link to="/services" className="text-sm text-primary font-medium flex items-center gap-1 group">
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Patient Journey Section */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Your Journey to Better Health
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 z-0" />
            
            {journeySteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative z-10 flex flex-col items-center w-full md:w-1/5 mb-10 md:mb-0 px-2 group">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-secondary flex items-center justify-center text-primary font-bold shadow-lg mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">Step {i + 1}</h4>
                  <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
            Ready to prioritize your health?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Our specialists are here to provide the accurate diagnosis and compassionate care you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onOpenAppointmentModal}
              className="rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 shadow-lg transition-all"
            >
              Book an Appointment
            </button>
            <a
              href="https://wa.me/918105200448"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#25D366] text-white px-8 py-4 font-semibold hover:bg-[#20b858] shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
