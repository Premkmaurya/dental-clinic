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
      title: 'General Dentistry & Prevention',
      explanation: 'Advanced diagnostic screening, ultrasonic scaling, professional polishing, and high-strength aesthetic restorations.',
      duration: '45 – 60 Mins',
      benefits: ['Premium Tooth Colored Fillings', 'Deep Cleaning & Polishing', 'Custom Night Guards & Gummy Smile therapy'],
    },
    {
      title: 'Aesthetic Composite Bonding',
      explanation: 'Artistic contouring and tooth-colored composite layers handcrafted to seamlessly correct gaps, chips, and alignment.',
      duration: '1 Session',
      benefits: ['Immediate aesthetic enhancements', 'Preserves natural tooth structure', 'Bespoke hand-sculpted design'],
    },
    {
      title: 'Advanced Teeth Whitening',
      explanation: 'Safe, premium clinical laser whitening coupled with custom take-home maintenance kits to dissolve deep stains.',
      duration: '60 Mins',
      benefits: ['Up to 8 shades lighter in 1 visit', 'Enamel-safe desensitizing technology', 'Includes personalized touch-up kit'],
    },
    {
      title: 'Straumann® Dental Implants',
      explanation: 'World-leading Swiss implant systems. High-precision guided placement for single teeth, All-on-4, or implant-supported dentures.',
      duration: '3 – 6 Months',
      benefits: ['Authorized Straumann® Partner', 'Dr. Ameet Dixit: 17,000+ Implants Placed', 'Surgical Bone Grafting integration'],
    },
    {
      title: 'Zirconia Crowns & Bridges',
      explanation: 'Ultra-durable, highly translucent custom crowns fabricated using advanced CAD/CAM technology to restore structural power.',
      duration: '2 Sessions',
      benefits: ['Metal-free premium Zirconia', 'Computer-designed perfect fit', 'Bridges to beautifully close gaps'],
    },
    {
      title: 'Orthodontics & Invisalign®',
      explanation: 'Comprehensive teeth alignment utilizing state-of-the-art clear Invisalign aligners, Damon self-ligating braces, or ceramic brackets.',
      duration: '6 – 18 Months',
      benefits: ['Invisalign® Clear Aligner therapy', 'Damon® Self-Ligating system', 'Low-profile ceramic aesthetic braces'],
    },
    {
      title: 'Painless Extractions & Surgery',
      explanation: 'Gentle, comfortable atraumatic extractions under specialized local anesthetics designed to maximize healing and safety.',
      duration: '30 – 60 Mins',
      benefits: ['100% painless computer anesthesia', 'Atraumatic bone-preserving techniques', 'Specialized clinical post-care protocols'],
    },
    {
      title: 'Luxury Smile Makeovers',
      explanation: 'A customized blend of porcelain veneers, alignment, and laser contouring for a fully personalized aesthetic rejuvenation.',
      duration: '2 – 3 Weeks',
      benefits: ['Bespoke face-harmonized design', 'Full mockup review prior to bonding', 'Drastically elevates social confidence']
    }
  ];

  const faqs = [
    {
      q: 'Do you accept private dental insurance?',
      a: 'Yes. Ark Dental Clinic GK-1 operates as an out-of-network concierge provider. We accept major insurances and our dedicated desk will assist in compiling all clinical files and claims on your behalf to maximize your reimbursement.'
    },
    {
      q: 'What makes your cosmetic dentistry look natural?',
      a: 'We avoid basic, flat-white hospital restorations. Our laboratory partners utilize multi-layered, highly translucent premium materials. Each restoration is hand-detailed with natural microscopic texturing and color gradients to reflect light exactly like organic enamel.'
    },
    {
      q: 'Is the root canal procedure painful?',
      a: 'Absolutely not. With modern advanced local anesthetics and highly precise endodontic tools, root canal treatments at Ark Dental are completely comfortable and virtually painless. Most patients experience no more sensation than a standard filling.'
    },
    {
      q: 'How long do custom restorations and veneers last?',
      a: 'When meticulously bonded and cared for with normal oral hygiene, custom dental veneers and restorations regularly last between 15 to 20 years. We offer comprehensive diagnostic checkups to monitor and preserve your long-term smile investment.'
    },
    {
      q: 'How do I schedule an appointment with Dr. Ameet Dixit?',
      a: 'You can easily request a consultation through our online appointment form, call our front desk at 011-41001313, or send a direct message on WhatsApp to +91 99905 09300. We will tailor a time that fits your schedule.'
    }
  ];

  return (
    <div className="relative w-full">
      {/* 1. Services Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-24 text-center">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-6 animate-fade-rise">
          Bespoke Treatments
        </span>
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl mx-auto font-normal text-foreground animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Signature Dental <br />
          <em className="text-muted-foreground not-italic">services.</em>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-8 animate-fade-rise-delay font-light">
          A luxury menu of preventive, aesthetic, and surgical interventions. Built on high-end diagnostics, surgical magnification, and absolute comfort.
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
                    <span className="text-[10px] text-muted-foreground/60 uppercase font-mono block tracking-wider">Care Highlights</span>
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
                  Book Inquiry 
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
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Answers</span>
          <h2 className="text-4xl sm:text-5xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Treatment Intelligence
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Quick, detailed answers regarding our financial files, bespoke restorative procedures, and clinical comfort protocols.
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
          <p className="text-xs text-muted-foreground">Have additional specific inquiries about a procedure?</p>
          <button
            onClick={onOpenAppointmentModal}
            className="rounded-full bg-white text-black px-8 py-3.5 text-sm font-semibold hover:scale-[1.03] transition-transform duration-200 cursor-pointer shadow-lg inline-flex items-center gap-2"
          >
            Speak with our Concierge
          </button>
        </div>
      </section>
    </div>
  );
}
