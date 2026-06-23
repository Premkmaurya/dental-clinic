import { useState } from 'react';
import { Star, Play } from 'lucide-react';

interface TestimonialsProps {
  onOpenAppointmentModal: () => void;
}

export default function Testimonials({ onOpenAppointmentModal }: TestimonialsProps) {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videoTestimonials = [
    {
      name: 'Victoria Sánchez',
      role: 'Pianista Clásica',
      title: 'Una transformación con carillas que se siente completamente natural',
      bgImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
      duration: '2:14'
    },
    {
      name: 'Dr. Alejandro Robles',
      role: 'Profesor de Cirugía',
      title: 'Precisión clínica e implantes dentales sin dolor absoluto',
      bgImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      duration: '1:45'
    }
  ];

  const smileStories = [
    {
      title: 'Restauración de Arco Completo',
      patient: 'Roberto K., Arquitecto',
      treatment: 'Implantes Dentales Guiados y Puente Cerámico',
      challenge: 'Desalineación persistente de la mordida, molares faltantes y ansiedad dental severa que impedía el tratamiento.',
      outcome: 'Un arco hermoso y totalmente funcional construido con implantes quirúrgicos guiados. Completado en 2 visitas bajo sedación.',
      quote: 'dental.Clinic tomó en serio mis miedos. La cirugía digital guiada fue rápida, limpia y completamente indolora. Puedo volver a reír con total confianza.',
      img: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Refinamiento Estético',
      patient: 'Elena Varela, Curadora de Arte',
      treatment: '8 Carillas de Porcelana Artesanales',
      challenge: 'Incisivos laterales decolorados, manchas de fluorosis y leve superposición que oscurecían sus proporciones naturales.',
      outcome: 'Carillas de porcelana multicapa diseñadas a mano para coincidir con su simetría facial, ofreciendo alta translucidez.',
      quote: 'Los doctores son perfeccionistas. Diseñaron mis carillas para que coincidieran con mi simetría facial, manteniendo la textura. ¡La gente se asombra de lo naturales que se ven!',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const genericReviews = [
    { name: 'Diana R.', role: 'Arquitecta', rating: 5, date: 'Mayo 2026', content: 'El diseño de la clínica y el espacio acústico eliminan cualquier miedo. Las limpiezas son increíblemente suaves y me atendieron con mucha amabilidad.' },
    { name: 'Julio V.', role: 'Director Creativo', rating: 5, date: 'Abril 2026', content: 'Verdaderamente un santuario de bienestar. ¡Me quedé dormido durante mi blanqueamiento! Los resultados son brillantes y completamente naturales.' },
    { name: 'Dr. Tomás M.', role: 'Especialista', rating: 5, date: 'Marzo 2026', content: 'Como profesional médico, soy muy crítico con la esterilización y el equipo de diagnóstico. dental.Clinic opera en el más alto nivel de seguridad clínica.' },
    { name: 'Andrea S.', role: 'Autora', rating: 5, date: 'Enero 2026', content: 'Después de años de problemas ortodónticos, recibí alineadores aquí. El plan de tratamiento fue preciso, fácil de seguir y se completó a tiempo. Un equipo de clase mundial.' }
  ];

  return (
    <div className="relative w-full">
      {/* 1. Testimonials Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-24 text-center">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-6 animate-fade-rise">
          Experiencias de Clientes
        </span>
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl mx-auto font-normal text-foreground animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Historias de <br />
          <em className="text-muted-foreground not-italic">confianza renovada.</em>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-8 animate-fade-rise-delay font-light">
          Lee testimonios genuinos, mira casos en video y descubre cómo nuestra clínica ha transformado por completo las experiencias de atención dental.
        </p>
      </section>

      {/* 2. Simulated Video Testimonials Section */}
      <section className="bg-secondary/15 py-32 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-xl mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Videos Testimoniales</span>
            <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
              En Sus Propias Palabras
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Haz clic para reproducir estos testimonios que documentan momentos de cuidado, procesos de tratamiento y transformaciones estéticas.
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTestimonials.map((vid, idx) => (
              <div 
                key={idx}
                className="group relative rounded-3xl overflow-hidden border border-border bg-[#0b0e14] aspect-video flex flex-col justify-end"
              >
                {/* Background Frame */}
                <div className="absolute inset-0 overflow-hidden">
                  {playingVideo === idx ? (
                    <video
                      autoPlay
                      controls
                      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                      className="w-full h-full object-cover"
                      onEnded={() => setPlayingVideo(null)}
                    />
                  ) : (
                    <>
                      <img 
                        src={vid.bgImg} 
                        alt={vid.name}
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-102 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    </>
                  )}
                </div>

                {/* Video Play Overlay */}
                {playingVideo !== idx && (
                  <>
                    {/* Play Button Trigger */}
                    <button
                      onClick={() => setPlayingVideo(idx)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer group/btn"
                      aria-label="Play video testimonial"
                    >
                      <span className="rounded-full bg-white text-black p-5 hover:scale-110 shadow-2xl transition-all duration-300 relative overflow-hidden flex items-center justify-center">
                        <Play size={22} className="fill-current translate-x-0.5" />
                      </span>
                    </button>

                    {/* Metadata Footer */}
                    <div className="relative z-10 p-8 space-y-2 pointer-events-none">
                      <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
                        <span>{vid.name} // {vid.role}</span>
                        <span>{vid.duration}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-normal text-white leading-snug" style={{ fontFamily: "'Instrument Serif', serif" }}>
                        "{vid.title}"
                      </h3>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Restorative Smile Stories (Case Studies) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-32 border-b border-border/40">
        <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Portafolio Clínico</span>
          <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Viajes Restaurativos
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Estudios de casos detallados sobre nuestros procedimientos estéticos y restauraciones complejas.
          </p>
        </div>

        <div className="space-y-24">
          {smileStories.map((story, i) => (
            <div 
              key={i} 
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Frame */}
              <div className="w-full lg:w-[45%] aspect-square rounded-3xl overflow-hidden border border-border bg-[#0b0e14]">
                <img 
                  src={story.img} 
                  alt={story.title}
                  className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:scale-102 transition-all duration-700" 
                />
              </div>

              {/* Case Notes */}
              <div className="w-full lg:w-[55%] space-y-6">
                <span className="text-xs font-mono text-muted-foreground/60 block">Caso Clínico // 0{i + 1}</span>
                <h3 className="text-3xl sm:text-4xl font-normal text-foreground leading-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {story.title}
                </h3>

                <div className="space-y-4 text-sm sm:text-base font-light text-muted-foreground">
                  <div className="border-l-2 border-white/20 pl-4 space-y-1">
                    <span className="text-xs text-foreground uppercase font-semibold">Perfil del Paciente</span>
                    <p className="text-sm font-medium text-foreground">{story.patient}</p>
                    <p className="text-xs italic">Tratamiento: {story.treatment}</p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs text-foreground uppercase font-semibold block">Desafío Clínico</span>
                    <p className="text-sm leading-relaxed">{story.challenge}</p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs text-foreground uppercase font-semibold block">El Resultado</span>
                    <p className="text-sm leading-relaxed">{story.outcome}</p>
                  </div>
                </div>

                <div className="liquid-glass rounded-2xl p-6 bg-secondary/15 border border-white/5 space-y-3">
                  <span className="text-[10px] text-muted-foreground uppercase font-mono block">Testimonio del Paciente</span>
                  <p className="text-sm text-foreground italic font-light leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Full Editorial Review Listing */}
      <section className="bg-secondary/10 py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Nuestra Reputación</span>
            <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Reseñas de Clientes
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Testimonios sinceros registrados por nuestros pacientes, destacando nuestra honestidad clínica y atención cómoda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {genericReviews.map((rev, i) => (
              <div 
                key={i} 
                className="liquid-glass rounded-2xl p-8 border border-white/5 bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
                    <span>{rev.name} // {rev.role}</span>
                    <span>{rev.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    "{rev.content}"
                  </p>
                </div>

                <div className="flex gap-1 text-yellow-500/80">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} size={12} fill="currentColor" className="stroke-none" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center space-y-6">
            <p className="text-xs text-muted-foreground">Experimenta la odontología diseñada completamente a tu alrededor.</p>
            <button
              onClick={onOpenAppointmentModal}
              className="rounded-full bg-white text-black px-8 py-3.5 text-sm font-semibold hover:scale-[1.03] transition-transform duration-200 cursor-pointer shadow-lg inline-flex items-center gap-2"
            >
              Solicitar una Cita
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
