import { useState } from 'react';
import { Clock, Plus, Minus, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onOpenAppointmentModal: () => void;
}

export default function Services({ onOpenAppointmentModal }: ServicesProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const treatments = [
    {
      title: 'Odontología General',
      explanation: 'Exámenes de diagnóstico avanzados, limpieza ultrasónica, pulido profesional y restauraciones estéticas de alta resistencia.',
      duration: '45 – 60 Mins',
      benefits: ['Resinas estéticas premium', 'Limpieza profunda y pulido', 'Guardas nocturnas personalizadas'],
    },
    {
      title: 'Ortodoncia',
      explanation: 'Alineación integral de los dientes utilizando alineadores transparentes de última generación y brackets estéticos de bajo perfil.',
      duration: '6 – 18 Meses',
      benefits: ['Terapia con alineadores invisibles', 'Brackets estéticos de cerámica', 'Alineación precisa y cómoda'],
    },
    {
      title: 'Implantes Dentales',
      explanation: 'Sistemas de implantes líderes a nivel mundial. Colocación guiada de alta precisión para dientes individuales o prótesis sobre implantes.',
      duration: '3 – 6 Meses',
      benefits: ['Implantes de titanio premium', 'Reconstrucción ósea especializada', 'Recuperación de la fuerza de masticación'],
    },
    {
      title: 'Blanqueamiento Dental',
      explanation: 'Blanqueamiento láser clínico premium y seguro, combinado con kits de mantenimiento en casa para disolver manchas profundas.',
      duration: '60 Mins',
      benefits: ['Resultados visibles en 1 visita', 'Tecnología desensibilizante segura', 'Incluye kit de retoque personalizado'],
    },
    {
      title: 'Odontología Estética',
      explanation: 'Una combinación personalizada de carillas de porcelana, alineación y contorneado láser para un rejuvenecimiento estético.',
      duration: '2 – 3 Semanas',
      benefits: ['Diseño armonizado con el rostro', 'Revisión completa antes de la aplicación', 'Aumenta drásticamente la confianza'],
    },
    {
      title: 'Endodoncia',
      explanation: 'Tratamientos de conducto cómodos y sin dolor, utilizando anestésicos modernos y herramientas endodónticas de alta precisión.',
      duration: '60 – 90 Mins',
      benefits: ['Totalmente sin dolor', 'Preservación del diente natural', 'Protocolos clínicos especializados']
    }
  ];

  const faqs = [
    {
      q: '¿Aceptan seguros dentales?',
      a: 'Sí. En dental.Clinic aceptamos la mayoría de los seguros dentales y nuestro personal te ayudará a procesar los reclamos para maximizar tus beneficios.'
    },
    {
      q: '¿Qué hace que la odontología estética se vea natural?',
      a: 'Evitamos restauraciones blancas y planas. Utilizamos materiales premium multicapa y altamente translúcidos. Cada restauración se detalla a mano con texturas microscópicas y gradientes de color naturales.'
    },
    {
      q: '¿Es doloroso el tratamiento de endodoncia?',
      a: 'Absolutamente no. Con los anestésicos locales modernos y herramientas de alta precisión, los tratamientos de conducto en dental.Clinic son completamente cómodos y prácticamente indoloros.'
    },
    {
      q: '¿Cuánto duran las restauraciones y carillas?',
      a: 'Con el cuidado adecuado y buena higiene bucal, las carillas y restauraciones personalizadas suelen durar entre 15 y 20 años. Ofrecemos revisiones para preservar tu sonrisa a largo plazo.'
    },
    {
      q: '¿Cómo puedo agendar una cita?',
      a: 'Puedes solicitar una consulta a través de nuestro formulario en línea o enviarnos un mensaje directo por WhatsApp al 664 208 8413. Encontraremos el horario que mejor se adapte a ti.'
    }
  ];

  return (
    <div className="relative w-full">
      {/* 1. Services Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-24 text-center">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-6 animate-fade-rise">
          Tratamientos a la Medida
        </span>
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl mx-auto font-normal text-foreground animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Servicios <br />
          <em className="text-muted-foreground not-italic">exclusivos.</em>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-8 animate-fade-rise-delay font-light">
          Un menú premium de intervenciones preventivas, estéticas y quirúrgicas. Basado en diagnósticos de alta tecnología y comodidad absoluta.
        </p>
      </section>

      {/* 2. Services Grid */}
      <section className="bg-secondary/10 py-32 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t, idx) => (
              <div 
                key={idx}
                className="liquid-glass rounded-2xl p-8 border border-white/5 bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Title & Duration */}
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl font-normal text-foreground leading-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                      {t.title}
                    </h3>
                    <span className="shrink-0 inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider text-muted-foreground bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                      <Clock size={10} /> {t.duration}
                    </span>
                  </div>

                  {/* Overview */}
                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                    {t.explanation}
                  </p>

                  {/* Benefits checklist */}
                  <div className="border-t border-border/30 pt-5 space-y-2.5">
                    <span className="text-[10px] text-muted-foreground/60 uppercase font-mono block tracking-wider">Beneficios</span>
                    <ul className="space-y-2">
                      {t.benefits.map((b, i) => (
                        <li key={i} className="flex gap-2 items-start text-xs text-foreground font-light">
                          <Check size={12} className="text-muted-foreground shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={onOpenAppointmentModal}
                  className="w-full mt-8 rounded-full border border-white/10 bg-white/5 py-3 text-xs font-semibold tracking-wider uppercase text-foreground hover:bg-white hover:text-black hover:scale-[1.01] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  Agendar Consulta
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. General FAQs (Elegant Accordion) */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-32">
        <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Respuestas</span>
          <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Preguntas Frecuentes
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Respuestas detalladas sobre nuestros procedimientos, opciones financieras y protocolos de comodidad clínica.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = activeFaq === i;
            return (
              <div 
                key={i} 
                className="border-b border-border/40 pb-4 transition-all"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center text-left py-4 text-foreground hover:text-muted-foreground transition-colors cursor-pointer"
                >
                  <h3 className="text-lg sm:text-xl font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>
                    {faq.q}
                  </h3>
                  <span className="text-muted-foreground bg-white/5 rounded-full p-1 border border-white/5">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed pt-2 pb-4 animate-fade-rise">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center space-y-4">
          <p className="text-xs text-muted-foreground">¿Tienes dudas adicionales sobre algún procedimiento?</p>
          <button
            onClick={onOpenAppointmentModal}
            className="rounded-full bg-white text-black px-8 py-3.5 text-sm font-semibold hover:scale-[1.03] transition-transform duration-200 cursor-pointer shadow-lg inline-flex items-center gap-2"
          >
            Hablar con un Especialista
          </button>
        </div>
      </section>
    </div>
  );
}
