import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  onOpenAppointmentModal: () => void;
}

export default function Testimonials({ onOpenAppointmentModal }: TestimonialsProps) {

  const genericReviews = [
    { 
      name: 'Ramesh K.', 
      role: 'Diabetes Patient', 
      rating: 5, 
      date: 'March 2026', 
      content: 'Suraksha Multispeciality Clinic has been incredible in helping me manage my diabetes. The regular monitoring and diet guidance have stabilized my sugar levels completely. The doctors are very patient and explain everything clearly.' 
    },
    { 
      name: 'Priya Sharma', 
      role: 'Local Resident', 
      rating: 5, 
      date: 'February 2026', 
      content: 'I brought my entire family here for general checkups and the experience was flawless. Having the laboratory and pharmacy in the same building saves so much time. Friendly doctors and very accurate diagnoses.' 
    },
    { 
      name: 'Vikram Singh', 
      role: 'Hypertension Patient', 
      rating: 5, 
      date: 'January 2026', 
      content: 'I was struggling with high blood pressure, but the specialist consultation here put me on the right track. They don\'t just prescribe medicines; they actually care about your long-term health and lifestyle.' 
    },
    { 
      name: 'Anita Desai', 
      role: 'Family Healthcare', 
      rating: 5, 
      date: 'December 2025', 
      content: 'The day care service was a lifesaver when my mother needed IV fluids. The staff is compassionate, the facility is clean, and the doctors build genuine long-term relationships with their patients. Highly recommended.' 
    }
  ];

  return (
    <div className="relative w-full">
      {/* 1. Testimonials Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-20 text-center">
        <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-4 animate-fade-rise">
          Patient Stories
        </span>
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-5xl mx-auto text-foreground animate-fade-rise"
        >
          Trusted by the <br />
          <span className="text-primary">Community</span>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-xl max-w-2xl mx-auto leading-relaxed mt-6 animate-fade-rise-delay font-light">
          Read genuine reviews from our patients in Bengaluru. Discover how our accurate diagnoses and compassionate care have built long-term relationships.
        </p>
      </section>

      {/* 2. Full Review Listing */}
      <section className="bg-secondary/30 py-24 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {genericReviews.map((rev, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-8 border border-border/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <Quote size={32} className="text-primary/20 rotate-180" />
                    <span className="text-xs text-muted-foreground font-medium">{rev.date}</span>
                  </div>
                  <p className="text-base text-foreground leading-relaxed italic">
                    "{rev.content}"
                  </p>
                </div>

                <div className="border-t border-border/50 pt-6 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-foreground">{rev.name}</h4>
                    <p className="text-xs text-muted-foreground">{rev.role}</p>
                  </div>
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" className="stroke-none" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center space-y-6">
            <p className="text-muted-foreground text-lg">Experience healthcare built on trust and reliability.</p>
            <button
              onClick={onOpenAppointmentModal}
              className="rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 shadow-lg transition-all inline-flex items-center gap-2"
            >
              Book Your Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
