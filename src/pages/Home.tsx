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
      title: 'Odontología General',
      desc: 'Cuidado dental preventivo integral, limpiezas profundas y exámenes completos para mantener tu salud bucal en óptimas condiciones.',
      icon: ShieldCheck
    },
    {
      title: 'Ortodoncia',
      desc: 'Alineadores modernos y brackets estéticos diseñados para lograr una alineación precisa con mínima interrupción en tu vida.',
      icon: Compass
    },
    {
      title: 'Implantes Dentales',
      desc: 'Reconstrucciones avanzadas de titanio y cerámica que restauran la fuerza de masticación natural y la anatomía dental.',
      icon: Plus
    },
    {
      title: 'Blanqueamiento Dental',
      desc: 'Tratamiento avanzado en consultorio combinado con opciones premium para el hogar, logrando un brillo naturalmente deslumbrante.',
      icon: Zap
    },
    {
      title: 'Odontología Estética',
      desc: 'Carillas de porcelana y uniones estéticas elaboradas magistralmente y diseñadas para mejorar la armonía facial natural.',
      icon: Sparkles
    },
    {
      title: 'Endodoncia',
      desc: 'Tratamiento de conductos enfocado en preservar la estructura natural del diente, totalmente sin dolor y de la más alta calidad.',
      icon: Heart
    }
  ];

  const trustPillars = [
    { title: 'Especialistas Experimentados', desc: 'Nuestros clínicos cuentan con credenciales de élite de las mejores instituciones dentales.' },
    { title: 'Tecnología Moderna', desc: 'Utilizamos tomografía computarizada 3D, escáneres orales digitales y microscopios avanzados.' },
    { title: 'Procedimientos Sin Dolor', desc: 'Técnicas de anestesia local suave para una experiencia completamente libre de ansiedad.' },
    { title: 'Atención Personalizada', desc: 'Programamos tiempos extendidos de reserva para asegurar que tus objetivos y comodidad reciban atención absoluta.' },
    { title: 'Ambiente Confortable', desc: 'Un espacio clínico relajante que se asemeja a un spa boutique de lujo, para tu mayor tranquilidad.' },
    { title: 'Precios Transparentes', desc: 'Planes de tratamiento digitales completos y detallados presentados antes de iniciar el procedimiento.' }
  ];

  const testimonials = [
    {
      name: 'Sofía Álvarez',
      role: 'Directora Creativa',
      rating: 5,
      story: 'La atención aquí no se compara con ningún otro consultorio que haya visitado. El equipo trató mi transformación con carillas con la precisión de verdaderos artistas. Una experiencia de lujo.',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Emprendedor',
      rating: 5,
      story: 'Mi procedimiento de implante fue rápido, sin dolor y manejado con una precisión impecable. El ambiente de la clínica es increíblemente sereno, haciendo que las visitas sean agradables.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'Elena Rodríguez',
      role: 'Profesora',
      rating: 5,
      story: 'El blanqueamiento y la alineación estética en dental.Clinic elevaron completamente mi confianza. La atención al detalle que tienen aquí es de clase mundial.',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200'
    }
  ];

  const galleryItems = [
    { title: 'Restauración Estética', category: 'Carillas de Porcelana', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=500' },
    { title: 'Reconstrucción con Implantes', category: 'Arco Completo', img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=500' },
    { title: 'Blanqueamiento', category: 'Tratamiento Láser', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=500' },
    { title: 'Alineación de Precisión', category: 'Alineadores Invisibles', img: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=500' }
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
            Sonrisas de <em className="text-muted-foreground not-italic">confianza</em> comienzan con <br className="hidden sm:inline" />
            cuidado <em className="text-muted-foreground not-italic">excepcional.</em>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed mt-8 animate-fade-rise-delay font-light">
            Atención dental premium diseñada en torno a la comodidad, precisión y confianza. Desde revisiones preventivas hasta transformaciones de sonrisa, te ayudamos a vivir la odontología de manera diferente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-rise-delay-2 w-full sm:w-auto">
            <button
              onClick={onOpenAppointmentModal}
              className="rounded-full bg-white text-black px-8 py-3.5 text-sm font-semibold hover:scale-[1.03] transition-transform duration-200 cursor-pointer shadow-lg w-full sm:w-auto"
            >
              Agendar Cita
            </button>
            <Link
              to="/services"
              className="liquid-glass rounded-full px-8 py-3.5 text-sm text-foreground hover:scale-[1.03] transition-transform duration-200 cursor-pointer w-full sm:w-auto border border-white/10"
            >
              Explorar Servicios
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={handleScrollDown}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-xs tracking-widest text-muted-foreground uppercase flex flex-col items-center gap-2 hover:text-foreground transition-colors cursor-pointer group"
        >
          <span>Desplazar</span>
          <span className="w-[1px] h-8 bg-muted-foreground/30 group-hover:h-12 transition-all duration-300 relative overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[bounce_2s_infinite]" />
          </span>
        </button>
      </section>

      {/* 2. Premium Services Preview */}
      <section id="services-preview" className="max-w-7xl mx-auto px-6 sm:px-8 py-32 border-b border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Ofertas Exclusivas</span>
            <h2 className="text-4xl sm:text-5xl font-normal text-foreground leading-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Excelencia Clínica, <br />Precisión Artística
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm font-light leading-relaxed">
            Brindamos una gama completa de procedimientos dentales premium diseñados para preservar tu salud, mecánica y estética facial.
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
                  Conocer Más <ArrowRight size={12} />
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
            Ver Catálogo Completo
          </Link>
        </div>
      </section>

      {/* 3. Why Choose Us (Trust Section) */}
      <section className="bg-secondary/10 py-32 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Nuestra Filosofía</span>
            <h2 className="text-4xl sm:text-6xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Redefiniendo la Experiencia Dental
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed pt-2">
              dental.Clinic fue establecida con una misión singular: eliminar el modelo clínico tradicional que genera ansiedad y reemplazarlo con bienestar personalizado y atención meticulosa al paciente.
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
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Transformaciones</span>
            <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Galería de Sonrisas
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm font-light leading-relaxed">
            Una muestra de transformaciones clínicas reales que destacan el arte restaurativo de dental.Clinic. Sutil, orgánico y bellamente realista.
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
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Experiencias de Clientes</span>
            <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Confianzas Compartidas
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Lee cómo nuestra atención dedicada y ambiente sereno han reformado por completo la forma en que nuestros pacientes perciben las visitas al dentista.
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
              Leer Más Experiencias <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CTA Strip */}
      <section className="relative w-full overflow-hidden py-32 px-6 sm:px-8 text-center bg-secondary/20">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10 flex flex-col items-center">
          <h2 className="text-4xl sm:text-7xl font-normal leading-tight text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Tu sonrisa más saludable comienza hoy.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed font-light">
            Disfruta de comodidad absoluta, experiencia médica de élite y cuidado moderno y transparente. Registra tu consulta privada en línea en menos de dos minutos.
          </p>
          <button
            onClick={onOpenAppointmentModal}
            className="rounded-full bg-white text-black px-8 py-3.5 text-sm font-semibold hover:scale-[1.03] transition-transform duration-200 cursor-pointer shadow-lg w-full sm:w-auto mt-4"
          >
            Agendar Cita
          </button>
        </div>
      </section>
    </div>
  );
}
