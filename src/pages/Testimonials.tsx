import { useState } from 'react';
import { Star, Play } from 'lucide-react';

interface TestimonialsProps {
  onOpenAppointmentModal: () => void;
}

export default function Testimonials({ onOpenAppointmentModal }: TestimonialsProps) {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videoTestimonials = [
    {
      name: 'Victoria Sterling',
      role: 'Classical Pianist',
      title: 'A veneered transformation that feels completely weightless',
      bgImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
      duration: '2:14'
    },
    {
      name: 'Dr. Alistair Grant',
      role: 'Professor of Surgery',
      title: 'Clinical precision and absolute pain-free dental implants',
      bgImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      duration: '1:45'
    }
  ];

  const smileStories = [
    {
      title: 'Full Arch Restoration',
      patient: 'Robert Kensington, Architect',
      treatment: 'Guided Dental Implants & Ceramic Bridge',
      challenge: 'Persistent bite misalignment, missing molars, and severe dental anxiety preventing standard clinical treatment.',
      outcome: 'A gorgeous, fully functional arch built using state-of-the-art guided surgical implants. Completed in 2 visits under conscious oral sedation.',
      quote: 'Ark Dental took my fears seriously. The guided digital surgery was fast, clean, and completely pain-free. I can chew, speak, and laugh with complete confidence again.',
      img: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Cosmetic Refinement',
      patient: 'Elena Varela, Gallery Curator',
      treatment: '8 Handcrafted Porcelain Veneers',
      challenge: 'Discolored lateral incisors, fluorosis spotting, and minor overlapping that obscured her natural tooth proportions.',
      outcome: 'Multi-layered feldspathic porcelain veneers layered by hand to match her facial geometry, offering high translucency and light refraction.',
      quote: 'The doctors are absolute perfectionists. They designed my veneers to match my facial symmetry, keeping the texture life-like. People are amazed when I tell them they are not organic!',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const genericReviews = [
    { name: 'Diana Sterling', role: 'Interior Architect', rating: 5, date: 'May 2026', content: 'The glassmorphic design and peaceful acoustic spacing immediately take away any clinical fear. The scaling and cleanings are incredibly gentle, and the concierge files all insurance claims immediately.' },
    { name: 'Julian Vance', role: 'Creative Director', rating: 5, date: 'April 2026', content: 'Truly a wellness sanctuary. I fell asleep during my teeth whitening! The results are brilliant and completely natural. I highly recommend Dr. Sinclair to anyone seeking elite care.' },
    { name: 'Dr. Timothy Vance', role: 'Cardiology Specialist', rating: 5, date: 'March 2026', content: 'As a fellow medical clinician, I am highly critical of sterilization and diagnostic equipment. Ark Dental operates at the absolute zenith of clinical safety, digital microscopy, and patient care.' },
    { name: 'Audrey Sinclair', role: 'Author & Lecturer', rating: 5, date: 'January 2026', content: 'After years of orthodontic relapse, I received clear aligners here. The treatment plan was precise, easy to follow, and completed exactly on schedule. A world-class dental team.' }
  ];

  return (
    <div className="relative w-full">
      {/* 1. Testimonials Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-24 text-center">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-6 animate-fade-rise">
          Client Experiences
        </span>
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl mx-auto font-normal text-foreground animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Stories of elevated <br />
          <em className="text-muted-foreground not-italic">confidence.</em>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-8 animate-fade-rise-delay font-light">
          Read genuine case reviews, view video testimonies, and discover how our luxury clinic has completely transformed oral healthcare experiences for our clients.
        </p>
      </section>

      {/* 2. Simulated Video Testimonials Section */}
      <section className="bg-secondary/15 py-32 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-xl mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Video Journals</span>
            <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
              In Their Own Words
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Click to play these quick video clips documenting the patient care moments, treatment schedules, and aesthetic transformations.
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
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Clinical Portfolios</span>
          <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Restorative Journeys
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            In-depth structural studies of aesthetic and biological restoration paths carried out in our surgical suites.
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
                <span className="text-xs font-mono text-muted-foreground/60 block">Case Study // 0{i + 1}</span>
                <h3 className="text-3xl sm:text-4xl font-normal text-foreground leading-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {story.title}
                </h3>

                <div className="space-y-4 text-sm sm:text-base font-light text-muted-foreground">
                  <div className="border-l-2 border-white/20 pl-4 space-y-1">
                    <span className="text-xs text-foreground uppercase font-semibold">Patient Profiles</span>
                    <p className="text-sm font-medium text-foreground">{story.patient}</p>
                    <p className="text-xs italic">Treatment: {story.treatment}</p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs text-foreground uppercase font-semibold block">Clinical Challenge</span>
                    <p className="text-sm leading-relaxed">{story.challenge}</p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs text-foreground uppercase font-semibold block">The Restorative Outcome</span>
                    <p className="text-sm leading-relaxed">{story.outcome}</p>
                  </div>
                </div>

                <div className="liquid-glass rounded-2xl p-6 bg-secondary/15 border border-white/5 space-y-3">
                  <span className="text-[10px] text-muted-foreground uppercase font-mono block">Patient Testimony</span>
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
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Atelier Ledger</span>
            <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Client Journal Reviews
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Candid testimonials submitted to our clinical atelier registry, emphasizing absolute clinical honesty and comfortable care.
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
            <p className="text-xs text-muted-foreground">Experience dentistry designed entirely around you.</p>
            <button
              onClick={onOpenAppointmentModal}
              className="rounded-full bg-white text-black px-8 py-3.5 text-sm font-semibold hover:scale-[1.03] transition-transform duration-200 cursor-pointer shadow-lg inline-flex items-center gap-2"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
