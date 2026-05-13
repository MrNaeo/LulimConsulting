import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Award, Briefcase, Zap, Globe, Target } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function About() {
  const team = [
    {
      name: "Thembeka Mabaso, CM(SA)",
      title: "Director",
      bio: "An award-winning Strategic Marketer and Chartered Marketer with over 16 years of experience. She holds a BCOM Honours in Marketing Management and is currently pursuing a Masters in Corporate Strategy through the Gordon Institute of Business Science.",
      image: "/Thembeka_Mabaso.png"
    },
    {
      name: "Nkateko Siweya",
      title: "Head of Digital",
      bio: "Over 20 years of experience in IT and Digital Marketing. Passionate about AI, Machine Learning, and technology, his unique skills deliver meaningful results.",
      image: "/Nkateko_Siweya.png"
    },
    {
      name: "Andrew Muleba",
      title: "Head of Design",
      bio: "Strategic Design Lead with over 14 years of experience for various tier-one businesses. He pursues work meticulously to ensure brands are not only distinctive but outperform competitors.",
      image: "/Andrew_Muleba.png"
    }
  ];

  return (
    <div className="w-full bg-brand-bg pt-24 pb-0">
      {/* Hero Section */}
      <section className="bg-brand-bg py-24 md:py-32 relative overflow-hidden border-b border-border-light">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-tertiary/10 blur-[130px] rounded-full z-0"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/10 blur-[120px] rounded-full z-0"></div>
          <img 
             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
             alt="Team working" 
             className="w-full h-full object-cover opacity-20 filter grayscale contrast-125"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-4xl md:text-6xl font-heading font-light text-brand-dark mb-6"
          >
            50+ Years of <span className="italic">Corporate Excellence.</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-xl text-text-subtle max-w-3xl mx-auto font-light leading-relaxed"
          >
            Expert knowledge gained through decades of experience in Branding, Marketing, and Business Strategy.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-light text-brand-dark mb-6">Our Story</h2>
            <div className="w-12 h-[1px] bg-brand-gold mb-8"></div>
            <p className="text-[15px] font-light text-text-subtle leading-relaxed mb-6">
              Lulim Executive is a full-service Business Strategy and Creative Agency. Officially registered in 2026, Lulim prides itself in expert knowledge gained by its leaders through years of experience in Corporate South Africa. 
            </p>
            <p className="text-[15px] font-light text-text-subtle leading-relaxed mb-8">
              Our leaders possess a combined 50+ years of experience across Branding, Marketing, Communications, Business Strategy, and Digital Services.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12 py-8 border-y border-border-light relative">
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-border-light"></div>
              <div className="text-center">
                <Award className="w-6 h-6 text-brand-dark mx-auto mb-3" />
                <h4 className="text-4xl font-heading text-brand-dark mb-2">50+</h4>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Years Experience</p>
              </div>
              <div className="text-center">
                <Briefcase className="w-6 h-6 text-brand-dark mx-auto mb-3" />
                <h4 className="text-4xl font-heading text-brand-dark mb-2">2026</h4>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Established</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand-gold/10 blur-xl"></div>
              <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600" alt="Corporate" className="mt-8 border border-border-light grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-700 shadow-sm" />
              <img src="public/lulim-consulting-avant-garde-furniture-design.jpg" alt="Strategy" className="border border-border-light grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-700 shadow-sm" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Essence / Values */}
      <section className="py-24 bg-brand-gray relative border-y border-border-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted mb-16">Our Essence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border-light bg-brand-bg">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="p-12 border-b md:border-b-0 border-border-light md:border-r relative group"
            >
              <Globe className="w-8 h-8 text-brand-dark mx-auto mb-6 group-hover:text-brand-tertiary transition-colors" />
              <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wide mb-4">Vision</h3>
              <p className="text-text-subtle font-light text-[14px]">To be a leading and trusted Strategy and Creative partner to businesses in Africa.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="p-12 border-b md:border-b-0 border-border-light md:border-r relative bg-brand-gray-light group"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-tertiary"></div>
              <Target className="w-8 h-8 text-brand-dark mx-auto mb-6 group-hover:text-brand-tertiary transition-colors" />
              <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wide mb-4">Mission</h3>
              <p className="text-text-subtle font-light text-[14px]">To provide value that exceeds investment through impactful and measurable solutions.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="p-12 relative group"
            >
              <Zap className="w-8 h-8 text-brand-dark mx-auto mb-6 group-hover:text-brand-tertiary transition-colors" />
              <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wide mb-4">Values</h3>
              <p className="text-text-subtle font-light text-[14px]">Innovation. Agility. Excellence.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 bg-brand-bg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-light text-brand-dark mb-6">Leadership Team</h2>
          <div className="w-12 h-[2px] bg-brand-tertiary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="group border border-border-light bg-brand-gray-light p-2"
            >
              <div className="overflow-hidden mb-6 relative aspect-[3/4] border border-border-light">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors z-10 flex items-end">
                  <div className="p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link to="/contact" className="text-xs font-bold uppercase tracking-widest text-brand-dark bg-brand-beige px-4 py-2 hover:bg-brand-tertiary hover:text-brand-dark transition-colors">Connect</Link>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-6 border-b border-border-light">
                <h3 className="text-sm font-bold uppercase tracking-wide text-brand-dark mb-1">{member.name}</h3>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-tertiary mb-4">{member.title}</p>
                <p className="text-text-subtle text-[13px] font-light leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gray-light py-24 text-center border-y border-border-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-tertiary/5 blur-[120px] rounded-full z-0"></div>
        <h2 className="text-3xl font-heading font-light text-brand-dark mb-8 relative z-10">Partner with Industry Experts</h2>
        <Link to="/contact" className="inline-flex px-10 py-5 bg-brand-tertiary text-brand-dark text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-brand-tertiary/20 hover:scale-105 transition-transform relative z-10">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
