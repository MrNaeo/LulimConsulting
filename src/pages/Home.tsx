import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, CheckCircle2, TrendingUp, Lightbulb, Users, BarChart3, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-gray">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/15 blur-[120px] rounded-full z-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-tertiary/15 blur-[120px] rounded-full z-10"></div>
          
          {/* Architectural Concrete / Shadows */}
          <img 
            src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=2000&q=80" 
            alt="Architectural shadows" 
            className="w-full h-full object-cover opacity-30 filter grayscale mix-blend-overlay z-0"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mt-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-brand-tertiary"></span>
              <span className="text-brand-tertiary uppercase tracking-[0.2em] text-[10px] font-bold">Lulim Consulting</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-heading font-light text-brand-dark leading-[1.05] tracking-tight mb-6"
            >
              From Service Provider to <span className="italic font-normal">Market Leader.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-text-subtle mb-10 leading-relaxed font-light"
            >
              Aligning high-tier technical capabilities with premium market perception through elite strategy and creative excellence.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="px-10 py-5 bg-brand-tertiary text-brand-dark font-bold text-[11px] uppercase tracking-widest shadow-xl shadow-brand-tertiary/20 hover:scale-105 transition-transform flex items-center justify-center gap-2 group"
              >
                Book a Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="px-10 py-5 border border-border-dark text-brand-dark font-bold text-[11px] uppercase tracking-widest bg-brand-bg/50 hover:bg-brand-bg transition-colors flex items-center justify-center text-center backdrop-blur-sm"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-text-muted text-[10px] font-bold tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-border-dark relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-1/2 bg-brand-gold absolute top-0"
            />
          </div>
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-brand-gray-light border-y border-border-light relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-tertiary/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <p className="text-[10px] font-bold text-text-muted tracking-[0.2em] uppercase mb-10">Institutional Trust & Global Standards</p>
          <motion.p 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeInUp}
             className="text-2xl md:text-3xl font-heading font-medium text-brand-dark mb-12 max-w-3xl mx-auto"
          >
            Partnering with industry leaders to deliver measurable growth across diverse sectors.
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            <div className="h-12 flex items-center justify-center font-bold text-xl text-brand-dark tracking-tighter uppercase">AWS</div>
            <div className="h-12 flex items-center justify-center font-bold text-xl text-brand-dark tracking-tighter uppercase">Eskom</div>
            <div className="h-12 flex items-center justify-center font-bold text-xl text-brand-dark tracking-tighter uppercase">Momentum</div>
            <div className="h-12 flex items-center justify-center font-bold text-xl text-brand-dark tracking-tighter leading-none uppercase">Amazon<br/>Prime</div>
            <div className="h-12 flex items-center justify-center font-bold text-xl text-brand-dark tracking-tighter uppercase hidden lg:flex">British Airways</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-bg border-b border-border-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16">
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted mb-8 text-center md:text-left">Why Choose Us</h3>
            <div className="md:flex justify-between items-end">
              <h2 className="text-4xl md:text-5xl font-heading text-brand-dark mb-6 md:mb-0 max-w-xl">
                Diagnostic precision for <span className="italic">sustainable</span> growth.
              </h2>
            </div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: 'Strategic Thinking',
                desc: 'We don’t execute without direction. Every move is calculated for maximum market impact.',
                icon: <Lightbulb className="text-brand-dark w-5 h-5 group-hover:text-brand-gold transition-colors" />,
                accentLine: 'bg-brand-gold'
              },
              {
                title: 'Industry Expertise',
                desc: 'Leaders with 50+ years of combined experience in Corporate South Africa.',
                icon: <Users className="text-brand-dark w-5 h-5 group-hover:text-brand-tertiary transition-colors" />,
                accentLine: 'bg-brand-tertiary'
              },
              {
                title: 'Tailored Solutions',
                desc: 'Agile, premium outputs specifically designed for high-stakes B2B environments.',
                icon: <Presentation className="text-brand-dark w-5 h-5 group-hover:text-brand-gold transition-colors" />,
                accentLine: 'bg-brand-gold'
              },
              {
                title: 'Reliable Partnerships',
                desc: 'Moving beyond vendor status to become your digital and institutional growth partner.',
                icon: <CheckCircle2 className="text-brand-dark w-5 h-5 group-hover:text-brand-tertiary transition-colors" />,
                accentLine: 'bg-brand-tertiary'
              }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-brand-gray p-8 border-t border-l border-border-light hover:shadow-lg transition-shadow duration-300 group relative">
                <div className={`absolute top-0 left-0 w-full h-[2px] ${feature.accentLine} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}></div>
                <div className="w-10 h-10 mb-6 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wide mb-3">{feature.title}</h3>
                <p className="text-text-subtle leading-relaxed text-[13px] font-light">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview (Grid) */}
      <section className="py-24 bg-brand-beige relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-tertiary/5 blur-[150px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-gold/5 blur-[150px] pointer-events-none rounded-full"></div>
        <div className="absolute top-0 left-0 w-full shadow-[inset_0_1px_0_0_var(--color-border-light)]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-border-light pb-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-brand-dark">Our Expertise</h2>
              <p className="text-text-subtle text-lg font-light">
                Solving complex business problems against objectives. Providing solutions that move the needle towards growth and scale.
              </p>
            </div>
            <Link to="/services" className="shrink-0 flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest hover:text-brand-dark transition-colors group">
              View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border-light">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-gray-light p-10 lg:col-span-2 flex flex-col md:flex-row gap-8 items-center group cursor-pointer hover:bg-brand-gray transition-colors border-b border-border-light"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 font-heading text-brand-dark">Strategy & Communications</h3>
                <p className="text-text-subtle mb-6 leading-relaxed font-light text-sm">
                  Insights-driven business strategy effectively diagnosing business problems against objectives. Effective media management and stakeholder relations through advanced Public Relations tactics.
                </p>
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-tertiary">
                  Explore <ChevronRight size={14} />
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-brand-bg overflow-hidden relative border border-border-light">
                  <img src="/lulim-consulting-beautiful-african-woman-monochrome-portrait.jpg" alt="Strategy" className="w-full h-full object-cover grayscale opacity-70 hover:opacity-100 hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="bg-brand-bg p-10 group cursor-pointer border-r border-b md:border-b-0 border-border-light hover:bg-brand-gray transition-colors relative overflow-hidden"
            >
              <BarChart3 className="text-brand-tertiary/5 w-48 h-48 absolute -right-10 -bottom-10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 font-heading text-brand-dark">Digital Marketing</h3>
                <p className="text-text-subtle mb-6 text-sm leading-relaxed font-light">
                  Technical visibility for high-intent consumers. Suite includes SEO, Performance Marketing, Social Media branding, and UI/UX services.
                </p>
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark group-hover:text-brand-tertiary transition-colors">
                  Details <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="bg-brand-bg p-10 group cursor-pointer hover:bg-brand-gray transition-colors relative overflow-hidden"
            >
              <TrendingUp className="text-brand-gold/5 w-48 h-48 absolute -right-10 -bottom-10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 font-heading text-brand-dark">Creative Design</h3>
                <p className="text-text-subtle mb-6 text-sm leading-relaxed font-light">
                  Highest quality design outputs. We create brand assets to ensure consistent positioning and a "Future-Ready" visual identity.
                </p>
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark group-hover:text-brand-gold transition-colors">
                  Details <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-bg relative border-y border-border-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto border-b border-border-light pb-8">
            <h2 className="text-3xl md:text-5xl font-heading font-light text-brand-dark mb-4">Our Process</h2>
            <p className="text-sm font-bold uppercase tracking-widest text-text-muted">
              Methodical Approach
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[40px] left-0 w-full h-[1px] bg-border-dark -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: '01', title: 'Discovery', desc: 'Diagnosing core challenges & identifying gaps.' },
                { step: '02', title: 'Strategy', desc: 'Crafting the blueprint for sustainable growth.' },
                { step: '03', title: 'Execution', desc: 'Implementing technical & creative solutions.' },
                { step: '04', title: 'Growth', desc: 'Measuring impact & scaling success.' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-brand-gray p-8 border border-border-light text-center max-w-sm mx-auto hover:bg-brand-beige transition-colors group relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 blur-[40px] rounded-full z-0 ${i % 2 === 0 ? 'bg-brand-gold/10' : 'bg-brand-tertiary/10'}`}></div>
                  <div className={`w-12 h-12 mx-auto ${i % 2 === 0 ? 'text-brand-gold' : 'text-brand-tertiary'} flex items-center justify-center font-bold text-sm mb-6 leading-none relative z-10 border border-border-light`}>
                    {item.step}
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wide text-brand-dark mb-3 relative z-10">{item.title}</h4>
                  <p className="text-text-subtle text-[13px] font-light leading-relaxed relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden bg-brand-gray">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 filter grayscale mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-brand-tertiary/5 blur-[120px] rounded-full z-0 block"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-border-light p-12 md:p-20 relative bg-brand-bg/80 backdrop-blur-md"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-gold to-brand-tertiary scale-x-75 transform origin-left"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-brand-dark mb-6">Ready to lead your market?</h2>
            <p className="text-md text-text-subtle mb-10 max-w-xl mx-auto font-light">
              Where do you feel the biggest friction exists in your current brand? Let’s solve it together.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex px-10 py-5 bg-brand-dark text-brand-bg text-[11px] font-bold uppercase tracking-widest hover:bg-brand-gold transition-all items-center gap-2"
            >
              Start Your Growth Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
