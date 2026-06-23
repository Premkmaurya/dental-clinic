import { ShieldCheck, HeartHandshake, Eye, Sparkles } from 'lucide-react';

interface AboutProps {
  onOpenAppointmentModal: () => void;
}

export default function About({ onOpenAppointmentModal }: AboutProps) {
  const doctors = [
    {
      name: 'Nuestros Especialistas',
      role: 'Cirujanos y Especialistas Dentales',
      exp: 'Atención Integral',
      education: 'Instituciones de élite a nivel mundial',
      bio: 'En dental.Clinic, contamos con un equipo multidisciplinario de expertos. Cada tratamiento es realizado por un especialista certificado para garantizar resultados de calidad superior.',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=500'
    },
    {
      name: 'El Equipo dental.Clinic',
      role: 'Ortodoncistas y Endodoncistas Asociados',
      exp: 'Cuidado Multidisciplinario Meticuloso',
      education: 'Universidades dentales reconocidas',
      bio: 'Para mantener la más alta calidad en odontología, nos asociamos con los mejores profesionales en Tijuana. Nuestro panel incluye ortodoncistas expertos, endodoncistas y especialistas en estética dental.',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=500'
    }
  ];

  const values = [
    {
      title: 'Integridad y Confianza',
      desc: 'Nunca prescribimos de más. Cada plan de tratamiento está respaldado por imágenes clínicas de alta resolución y evidencia profesional clara.',
      icon: ShieldCheck
    },
    {
      title: 'Precisión Microquirúrgica',
      desc: 'Operamos bajo magnificación para asegurar la máxima preservación del esmalte natural del diente y el tejido biológico.',
      icon: Sparkles
    },
    {
      title: 'Comodidad Absoluta',
      desc: 'Desde instrumentos silenciosos hasta opciones de sedación consciente, personalizamos cada visita para tu relajación física.',
      icon: HeartHandshake
    },
    {
      title: 'Transparencia Total',
      desc: 'Sin tarifas ocultas. Los diseños dentales y los costos asociados se comparten, analizan y aprueban contigo por adelantado.',
      icon: Eye
    }
  ];

  const environmentImages = [
    { title: 'Sala de Bienestar', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600' },
    { title: 'Suite Quirúrgica Avanzada', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600' },
    { title: 'Estudio de Consultas', img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600' }
  ];

  return (
    <div className="relative w-full">
      {/* 1. Minimalist Editorial Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-24 text-center">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-6 animate-fade-rise">
          Nuestra Filosofía
        </span>
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl mx-auto font-normal text-foreground animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Odontología moderna, <br />
          <em className="text-muted-foreground not-italic">atención humana.</em>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-8 animate-fade-rise-delay font-light">
          Creemos que visitar al dentista debe sentirse como entrar a un santuario de paz. dental.Clinic está diseñada en torno a la comodidad sensorial, el arte clínico y la honestidad absoluta.
        </p>
      </section>

      {/* 2. Narrative Section */}
      <section className="bg-secondary/15 py-32 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block">La Historia de dental.Clinic</span>
            <h2 className="text-3xl sm:text-5xl font-normal text-foreground leading-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Creando un Estándar <br />de Salud Relajante
            </h2>
            <div className="text-sm sm:text-base text-muted-foreground space-y-4 font-light leading-relaxed">
              <p>
                dental.Clinic fue creada como un antídoto a la naturaleza apresurada y clínica de las prácticas dentales tradicionales de alto volumen.
              </p>
              <p>
                Nuestra visión es ofrecer un espacio clínico en Tijuana donde los pacientes sean tratados con la mejor hospitalidad. Al integrar flujos de trabajo avanzados, acústica cálida y sistemas de implantes premium, hemos transformado el cuidado bucal en una experiencia profundamente reconfortante.
              </p>
              <p>
                En dental.Clinic no solo restauramos dientes; elevamos tu salud, confianza y tranquilidad mental. Cada diseño dental se elabora con una profunda reverencia por la forma anatómica natural.
              </p>
            </div>
          </div>
          
          {/* Side Image Frame */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-[#0b0e14]">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
              alt="Interior de Clínica de Lujo"
              className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:scale-102 transition-all duration-700" 
            />
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-32 border-b border-border/40">
        <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Nuestro ADN</span>
          <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Los Pilares de Nuestro Cuidado
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Estos valores definen cada consulta, diagnóstico y restauración que realizamos.
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
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold font-mono">Especialistas</span>
              <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Directores Médicos
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm font-light leading-relaxed">
              Conoce a los especialistas que lideran nuestras operaciones, aportando entrenamiento de clase mundial y maestría estética.
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
                    <span className="text-[10px] bg-white/5 border border-white/10 text-foreground px-2.5 py-1 rounded-full">Odontología Estética</span>
                    <span className="text-[10px] bg-white/5 border border-white/10 text-foreground px-2.5 py-1 rounded-full">Certificados</span>
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
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">El Santuario</span>
          <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Ambiente Clínico
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Un santuario tranquilo estructurado con geometría arquitectónica, luz cálida y habitaciones privadas insonorizadas.
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
            Programa un Recorrido Privado
          </button>
        </div>
      </section>
    </div>
  );
}
