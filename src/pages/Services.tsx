import React from 'react';
import { motion } from 'motion/react';
import { Target, PenTool, Layout, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Services() {
  const services = [
    {
      id: "strategy",
      title: "Strategy & Communications",
      desc: "Insights-driven business strategy effectively diagnosing business problems against objectives. We provide solutions that move the needle towards growth and scale, including effective media management and stakeholder relations through advanced Public Relations and communication tactics.",
      icon: <Target className="w-10 h-10 text-brand-gold" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "creative",
      title: "Creative Design & Branding",
      desc: "Highest quality design outputs that resonate with various stakeholders. We create brand assets to ensure consistent positioning and a 'Future-Ready' visual identity. Our campaign management meets and exceeds key performance metrics through suitable optimization strategies.",
      icon: <PenTool className="w-10 h-10 text-brand-gold" />,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "digital",
      title: "Digital Marketing & UI/UX",
      desc: "Technical visibility for high-intent consumers. Our suite includes SEO, Performance Marketing, Social Media branding, Search Optimization, Website & App development, and professional UI & UX services.",
      icon: <Layout className="w-10 h-10 text-brand-gold" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "sales",
      title: "Sales Enablement & Authority Building",
      desc: "Closing the visibility void through whitepapers, case studies, and targeted media engagement. We position your business as a primary source of industry intelligence and audit customer touchpoints to facilitate high-stakes B2B decision-making.",
      icon: <TrendingUp className="w-10 h-10 text-brand-gold" />,
      image: "https://images.unsplash.com/photo-1557425955-df376b5903c8?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="w-full bg-brand-bg pt-24 pb-10">
      {/* Page Header */}
      <section className="bg-brand-bg py-24 md:py-32 outline-none relative overflow-hidden border-b border-border-light">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/2 w-[600px] h-[600px] bg-brand-tertiary/10 blur-[130px] rounded-full z-0 transform translate-x-1/2"></div>
          <img 
             src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000" 
             alt="Consulting Background" 
             className="w-full h-full object-cover opacity-20 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-4xl md:text-6xl font-heading font-light text-brand-dark mb-6"
          >
            An Integrated <span className="italic">Growth System.</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-xl text-text-subtle max-w-2xl mx-auto font-light"
          >
            Effectively diagnosing business challenges to capture and retain the advocacy of your target market.
          </motion.p>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-24">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2 overflow-hidden relative border border-border-light bg-brand-gray p-2">
                <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 mix-blend-lighten" />
              </div>
              <div className="w-full md:w-1/2 md:px-8">
                <div className="w-16 h-16 border border-border-light bg-brand-bg flex items-center justify-center mb-8 shadow-sm">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">{service.title}</h2>
                <p className="text-[15px] font-light text-text-subtle leading-relaxed mb-8">
                  {service.desc}
                </p>
                <Link to="/contact" className="inline-flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors">
                  Learn More &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-gray py-24 mb-[-40px] border-t border-border-light">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-light text-brand-dark mb-6">Need a tailored solution?</h2>
          <p className="text-text-subtle mb-10 text-md font-light max-w-xl mx-auto">
            Let's discuss how our integrated growth system can be applied to your specific business challenges.
          </p>
          <Link to="/contact" className="inline-flex px-10 py-5 bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-[11px] uppercase tracking-widest font-bold transition-all">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
