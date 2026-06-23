import { Stethoscope, Activity, HeartPulse, Droplet, FlaskConical, Pill, Bed, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onOpenAppointmentModal: () => void;
}

export default function Services({ onOpenAppointmentModal }: ServicesProps) {

  const treatments = [
    {
      title: 'Specialist Consultation',
      explanation: 'Expert medical evaluation by experienced doctors. We ensure an accurate diagnosis and create a personalized treatment plan for you.',
      icon: Stethoscope,
      benefits: ['Experienced Medical Experts', 'Comprehensive Health Evaluation', 'Personalized Care Plans'],
    },
    {
      title: 'Diabetes Management',
      explanation: 'Dedicated programs to monitor and control blood sugar levels effectively to prevent long-term complications.',
      icon: Activity,
      benefits: ['Continuous Glucose Monitoring', 'Diet & Lifestyle Planning', 'Preventive Care Approach'],
    },
    {
      title: 'Hypertension Care',
      explanation: 'Regular blood pressure monitoring and medication management to maintain heart health and prevent strokes.',
      icon: HeartPulse,
      benefits: ['BP Monitoring Protocols', 'Cardiovascular Risk Assessment', 'Stress Management Guidance'],
    },
    {
      title: 'Thyroid & Hypothyroidism Care',
      explanation: 'Specialized care for thyroid imbalances, ensuring the right hormonal therapy and regular profile tracking.',
      icon: Droplet,
      benefits: ['Thyroid Profile Tracking', 'Hormonal Balance Therapy', 'Long-term Health Support'],
    },
    {
      title: 'Laboratory Services',
      explanation: 'Fast, accurate, and reliable diagnostic tests conducted in our state-of-the-art in-house laboratory.',
      icon: FlaskConical,
      benefits: ['Comprehensive Blood Tests', 'Quick Report Turnaround', 'Accurate Diagnostics'],
    },
    {
      title: 'Pharmacy',
      explanation: 'Convenient on-site pharmacy providing authentic medicines prescribed by our doctors immediately after your visit.',
      icon: Pill,
      benefits: ['100% Authentic Medicines', 'Immediate Availability', 'Prescription Guidance']
    },
    {
      title: 'Day Care Services',
      explanation: 'Comfortable day care facilities for observation, IV fluid administration, and minor clinical procedures.',
      icon: Bed,
      benefits: ['Comfortable Patient Beds', 'Continuous Medical Observation', 'IV Fluids & Minor Care']
    }
  ];

  return (
    <div className="relative w-full">
      {/* 1. Services Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-24 text-center">
        <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-4 animate-fade-rise">
          Comprehensive Care
        </span>
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-5xl mx-auto text-foreground animate-fade-rise"
        >
          Healthcare Services
        </h1>
        <p className="text-muted-foreground text-sm sm:text-xl max-w-2xl mx-auto leading-relaxed mt-6 animate-fade-rise-delay font-light">
          From specialist consultations to fully-equipped laboratory and pharmacy support, Suraksha Multispeciality Clinic offers everything you need for complete health management.
        </p>
      </section>

      {/* 2. Services Grid */}
      <section className="bg-secondary/30 py-24 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t, idx) => {
              const Icon = t.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-border/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Icon & Title */}
                    <div className="flex flex-col gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl w-fit text-primary">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {t.title}
                      </h3>
                    </div>

                    {/* Overview */}
                    <p className="text-muted-foreground leading-relaxed">
                      {t.explanation}
                    </p>

                    {/* Benefits checklist */}
                    <div className="border-t border-border/50 pt-5 space-y-3">
                      <span className="text-xs text-foreground font-semibold uppercase tracking-wider block">Key Benefits</span>
                      <ul className="space-y-2">
                        {t.benefits.map((b, i) => (
                          <li key={i} className="flex gap-2 items-start text-sm text-muted-foreground">
                            <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card CTA */}
                  <button
                    onClick={onOpenAppointmentModal}
                    className="w-full mt-8 rounded-xl bg-primary/10 text-primary py-3 text-sm font-bold hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    Consult Now 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Need a comprehensive checkup?
        </h2>
        <p className="text-muted-foreground mb-10 text-lg">
          Our clinic is fully equipped to handle all your family's healthcare needs. Reach out to schedule a visit today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenAppointmentModal}
            className="rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 shadow-lg transition-all"
          >
            Book an Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
