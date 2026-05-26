import { useState } from 'react';
import { Clock, ArrowRight, X } from 'lucide-react';

export default function Blog() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const categories = ['All', 'Preventive', 'Cosmetic', 'Restorative', 'Orthodontic'];

  const articles = [
    {
      id: 1,
      category: 'Preventive',
      readTime: '4 Min Read',
      title: 'Oral Hygiene Reimagined: Daily Rituals for Enamel Longevity',
      excerpt: 'Beyond basic brushing — explore the molecular importance of pH balancing, flossing techniques under surgical insight, and curating an enamel-safe diet.',
      img: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=600',
      content: `The traditional routine of brushing for two minutes and spitting has remained unchanged for generations, yet periodontal and decay issues persist. To achieve absolute oral wellness, we must treat our hygiene routine as a curated medical ritual.

First, consider oral pH. Decay-causing bacteria thrive in acidic environments (below 5.5 pH). Standard brushing immediately after consuming acidic foods like coffee or citrus physically grinds the temporarily softened enamel. Instead, rinse with alkaline water to neutralize pH before brushing.

Second, the structural importance of micro-flossing cannot be overstated. Standard nylon floss often shreds or bypasses crucial micro-cavities. We recommend PTFE (monofilament) or premium expandable dental tapes. Guide the floss in a gentle "C" pattern around each tooth, sweeping sub-gingivally without snapping the delicate periodontal ligament.

Lastly, consider chemical ingredients. Avoid sodium lauryl sulfate (SLS) which causes aphthous ulcers. Opt instead for premium dentifrices featuring micro-crystalline hydroxyapatite (nHa), a mineral that naturally rebuilds micro-pores in enamel, restoring brilliant defense from within.`
    },
    {
      id: 2,
      category: 'Cosmetic',
      readTime: '6 Min Read',
      title: 'Teeth Whitening Myths: Separating Medical Truth from Marketing',
      excerpt: 'Analyze the active biological differences between over-the-counter hydrogen peroxide kits, charcoal abrasives, and safe clinic laser whitening systems.',
      img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600',
      content: `The modern consumer is bombarded with social media advertisements promising instant blinding-white smiles via charcoal powders, purple toners, and inexpensive LED mouthpieces. Biologically, many of these methods are not only ineffective but permanently destructive to enamel.

Myth 1: Active Charcoal Powders are a safe, natural whitening agent.
The Truth: Charcoal is extremely abrasive. While it may scrape away surface-level coffee stains initially, it physically wears down the microscopic outer layer of enamel. This exposes the underlying dentin, which is naturally yellow-brown. The result? A darker smile that is highly sensitive and prone to decay.

Myth 2: Over-the-counter whitening lights work just like clinical dental lasers.
The Truth: Retail LED lights are completely cosmetic placeholders. In clinical suites, lasers emit precise wavelengths to heat and accelerate high-concentration hydrogen peroxide gels safely. OTC lights do not have the power or chemical catalyst to trigger deep dentin oxidation.

Myth 3: Whitening permanently ruins your tooth enamel.
The Truth: Under clinical supervision, teeth whitening is perfectly safe. Standard peroxide formulas simply oxidize organic stain molecules inside the enamel pores without dissolving the mineral crystal structure. When combined with post-whitening calcium-phosphate applications, enamel remains dense and healthy.`
    },
    {
      id: 3,
      category: 'Preventive',
      readTime: '5 Min Read',
      title: 'Gentle Beginnings: Constructive Pediatric Dental Rituals',
      excerpt: 'How to build early microbial defense in infants, protect early primary teeth with sealants, and eliminate dental anxiety prior to their first clinic visit.',
      img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
      content: `Fostering positive, anxiety-free relationships with dental health in childhood sets the anatomical blueprint for a lifetime of confidence. At Ark Dental, our pediatric philosophy centers on physiological comfort and proactive decay shielding.

First, microbial safety starts early. Infant gum tissues should be gently wiped with clean, damp sterile gauze after feedings to minimize early acid-producing bacterial colonization. Once the first primary tooth erupts (around six months), introduce a ultra-soft silicone finger brush with a rice-sized portion of fluoride-free hydroxyapatite toothpaste.

Second, protect early primary molars with professional dental sealants. Sealants act as a microscopic BPA-free clear acrylic shield over the deep grooves and fissures of the chewing surfaces. This prevents up to 80% of childhood decay by blocking food particles and plaque from nesting in hard-to-reach pockets.

Third, neutralize anxiety through atmospheric normalization. Avoid using terms like "pain," "hurt," or "needles." Instead, frame visits as a playful "tickle cleaning" and explore the clinic beforehand. By scheduling short, friendly introductory checkups without active treatment, children learn to treat the dental atelier as a comfortable sanctuary.`
    },
    {
      id: 4,
      category: 'Orthodontic',
      readTime: '5 Min Read',
      title: 'Modern Orthodontics: Subtle Indicators of Structural Relapse',
      excerpt: 'Discover why teeth shift after orthodontic procedures, the neurological benefits of aligned jaws, and how clear aligners address alignment changes.',
      img: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=600',
      content: `Many adults who underwent comprehensive orthodontic treatment in their teens discover that their teeth are slowly crowding or shifting back to their original positions. This phenomenon, known as structural orthodontic relapse, is highly common yet easily correctable.

Why do teeth shift? The periodontal ligament that holds each tooth root inside the jawbone possesses elastic memory. Without active retainer support, these fibrous bands naturally pull the tooth structure back. Additionally, physiological changes in bone density and natural age-related jaw narrowing can exacerbate dental crowding.

The neurological and systemic benefits of proper alignment go far beyond simple aesthetics:
1. TMJ Health: Misaligned teeth force the temporomandibular jaw joints to compensate, triggering chronic headaches, neck tension, and grinding.
2. Periodontal Safety: Crowded teeth create tight plaque-trapping zones that standard brushing cannot clean, leading to early localized bone loss.
3. Airway Support: Aligning dental arches often widens the oral airway, improving breathing and minimizing sleep disturbances.

At Ark Dental, we address orthodontic relapse with custom, low-profile clear aligner series. Crafted using 3D digital scanners, these clear retainers gently shift structures back with minimal clinical intervention.`
    },
    {
      id: 5,
      category: 'Restorative',
      readTime: '7 Min Read',
      title: 'The Biological Blueprint: An Anatomical Guide to Dental Implants',
      excerpt: 'Explore the titanium dental osseointegration process, bone grafting science, and how advanced implants restore natural chewing stability.',
      img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600',
      content: `When a natural tooth structure is lost due to trauma or deep decay, it sets off a biological chain reaction in the jawbone. The surrounding bone tissue, lacking mechanical stimulation from chewing, immediately begins to resorb and shrink. Dental implants represent the gold standard of care because they replace the biological root structure.

The science of osseointegration is what makes dental implants so successful. Implants are constructed from medical-grade, highly biocompatible titanium or ceramic (zirconia). Once placed inside the bone, the surrounding osteoblast cells naturally fuse and grow directly into the microscopic pores of the titanium surface. This integration creates a permanent anchor capable of absorbing biting force exactly like natural teeth.

What if there is insufficient bone? Under modern 3D diagnostic imaging, if we detect bone loss, we perform a micro-bone graft prior to or during implant placement. Using biocompatible mineral matrices, we encourage your body to naturally regenerate dense bone scaffolding to secure the implant.

Once osseointegrated, we place a custom zirconia abutment and crown, handcrafted to match the shade and geometry of your surrounding teeth, providing absolute biomechanical and aesthetic restoration.`
    },
    {
      id: 6,
      category: 'Cosmetic',
      readTime: '8 Min Read',
      title: 'Curating Confidence: A Guide to Bespoke Smile Makeovers',
      excerpt: 'A comprehensive structural walk-through of modern smile makeovers. Discover the balance between facial geometry and porcelain design.',
      img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600',
      content: `A Smile Makeover is not a generic "one-size-fits-all" application of identical white crowns. At Ark Dental, a smile makeover is a highly comprehensive aesthetic mapping process that respects your unique facial geometry, lip curvature, skin tone, and personal character.

The process of Bespoke Smile Design involves three distinct phases:

Phase 1: Digital Facial Analysis. We capture high-resolution clinical photographs and 3D digital scans. We measure key structural markers: the interpupillary line (eye level), the midline of your nose, and the curvature of your lower lip when smiling. Your veneers are designed to flow parallel to your lip curve for optimal harmony.

Phase 2: The Physical Mockup. Before touching a single tooth, we create a temporary clinical mockup. We apply life-like diagnostic acrylic directly to your teeth, allowing you to test, speak, and preview your new smile in natural daylight. This ensures you approve the length, volume, and feel prior to laboratory creation.

Phase 3: Ceramic Mastery. Our master ceramicists layer high-density feldspathic porcelain by hand, adding micro-incisal translucencies and warm dentin depth. The result is a natural, vibrant, healthy smile that perfectly complements your character and elevates your confidence.`
    }
  ];

  const filteredArticles = selectedFilter === 'All' 
    ? articles 
    : articles.filter(a => a.category === selectedFilter);

  return (
    <div className="relative w-full">
      {/* 1. Blog Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-16 text-center">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-6 animate-fade-rise">
          The Clinical Journal
        </span>
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl mx-auto font-normal text-foreground animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Insights on wellness <br />
          <em className="text-muted-foreground not-italic">& oral health.</em>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-8 animate-fade-rise-delay font-light">
          An educational archive exploring dental science, cosmetic aesthetics, modern medical technologies, and the biology of healthy smiles.
        </p>
      </section>

      {/* 2. Interactive Category Filter */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-12 flex justify-center">
        <div className="flex flex-wrap gap-2 justify-center border-b border-border/40 pb-8 w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`rounded-full px-5 py-2 text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/5 border border-white/5 text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-32">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground font-light">
            No journal articles found under this specific category at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <div 
                key={art.id} 
                className="liquid-glass group rounded-2xl overflow-hidden border border-white/5 bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="aspect-video w-full overflow-hidden relative border-b border-border/40 bg-black/20">
                    <img 
                      src={art.img} 
                      alt={art.title}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-90 group-hover:scale-103 transition-all duration-500" 
                    />
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase tracking-wider font-semibold border border-white/10">
                      {art.category}
                    </div>
                  </div>

                  {/* Info block */}
                  <div className="p-8 space-y-4">
                    <div className="flex gap-2 items-center text-[10px] text-muted-foreground font-mono">
                      <Clock size={10} />
                      <span>{art.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-normal text-foreground leading-snug group-hover:text-muted-foreground transition-colors" style={{ fontFamily: "'Instrument Serif', serif" }}>
                      {art.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-8 pb-8">
                  <button
                    onClick={() => setSelectedArticle(art.id - 1)}
                    className="text-xs text-foreground font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:gap-2.5 transition-all cursor-pointer group/btn bg-transparent border-none p-0"
                  >
                    Read Article 
                    <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Full Article Reader Modal Overlays */}
      {selectedArticle !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/90 backdrop-blur-md"
            onClick={() => setSelectedArticle(null)}
          />

          {/* Panel */}
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-secondary shadow-2xl transition-all duration-300 animate-fade-rise max-h-[85vh] flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-border/40 p-6">
              <div className="flex gap-4 items-center">
                <span className="text-[10px] bg-white/5 border border-white/10 text-foreground px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                  {articles[selectedArticle].category}
                </span>
                <span className="text-[10px] text-muted-foreground font-mono flex items-center gap-1">
                  <Clock size={10} /> {articles[selectedArticle].readTime}
                </span>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scroll Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {/* Cover */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border bg-black/20 relative">
                <img 
                  src={articles[selectedArticle].img} 
                  alt={articles[selectedArticle].title}
                  className="w-full h-full object-cover grayscale opacity-75"
                />
              </div>

              <h2 className="text-3xl sm:text-4xl font-normal text-foreground leading-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {articles[selectedArticle].title}
              </h2>

              <div className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed whitespace-pre-wrap space-y-4">
                {articles[selectedArticle].content}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border/40 p-6 text-center">
              <button 
                onClick={() => setSelectedArticle(null)}
                className="rounded-full bg-white text-black px-6 py-2.5 text-xs font-semibold cursor-pointer"
              >
                Close Journal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
