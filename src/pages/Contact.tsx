import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Contact() {
  return (
    <div className="w-full bg-brand-bg pt-24 pb-0">
      {/* Hero Section */}
      <section className="bg-brand-bg py-24 md:py-32 relative overflow-hidden border-b border-border-light">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-tertiary/10 blur-[120px] rounded-full z-0"></div>
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-gold/10 blur-[120px] rounded-full z-0"></div>
          <img 
             src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
             alt="Office" 
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
            Start Your <span className="italic">Growth Journey.</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-xl text-text-subtle max-w-2xl mx-auto font-light"
          >
            Where do you feel the biggest friction exists in your current brand? Let’s solve it together.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full lg:w-3/5"
          >
            <div className="bg-brand-bg p-8 md:p-12 border border-border-light relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-gold scale-x-50 origin-left"></div>
              <h2 className="text-2xl font-heading font-light text-brand-dark mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-text-muted mb-2">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-brand-bg border border-border-light focus:border-brand-gold outline-none transition-all rounded-none text-brand-dark" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-text-muted mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 bg-brand-bg border border-border-light focus:border-brand-gold outline-none transition-all rounded-none text-brand-dark" placeholder="john@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-text-muted mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 bg-brand-bg border border-border-light focus:border-brand-gold outline-none transition-all rounded-none text-brand-dark" placeholder="+27 00 000 0000" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-text-muted mb-2">How can we help?</label>
                  <textarea rows={5} className="w-full px-4 py-3 bg-brand-bg border border-border-light focus:border-brand-gold outline-none transition-all resize-none rounded-none text-brand-dark" placeholder="Tell us about your project or challenges..."></textarea>
                </div>
                <button type="button" className="w-full py-5 bg-brand-dark text-brand-bg text-[11px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-brand-gold hover:text-brand-dark transition-all relative overflow-hidden group">
                  <span className="relative z-10 w-full flex items-center justify-center gap-2">Send Message <Send size={16} /></span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full lg:w-2/5 flex flex-col gap-10"
          >
            <div>
              <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-6">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-bg border border-border-light flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="text-brand-gold w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark mb-1 uppercase tracking-wide">Office Address</h4>
                    <p className="text-text-subtle font-light text-[14px]">18 Craydon Street, <br/>Centurion, 0157</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-bg border border-border-light flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="text-brand-gold w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark mb-1 uppercase tracking-wide">Phone Number</h4>
                    <p className="text-text-subtle font-light text-[14px]">+27 71 451 9543</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-bg border border-border-light flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="text-brand-gold w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark mb-1 uppercase tracking-wide">Email Address</h4>
                    <p className="text-text-subtle font-light text-[14px]">info@lulimconsulting.co.za</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-gray text-brand-dark p-10 relative overflow-hidden border-t-2 border-brand-gold">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-bg/5 blur-2xl"></div>
              <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-6">Business Hours</h3>
              <div className="space-y-4 text-[13px] font-light">
                <div className="flex justify-between items-center border-b border-border-light pb-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-brand-gold" />
                    <span>Monday - Friday</span>
                  </div>
                  <span className="font-semibold text-brand-dark">08:00 – 17:00</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-2 text-text-subtle">
                    <Clock size={16} />
                    <span>Saturday - Sunday</span>
                  </div>
                  <span className="font-semibold text-text-subtle">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-96 w-full bg-brand-bg relative border-t border-border-light">
         <div className="absolute inset-0 bg-brand-dark/5 flex items-center justify-center text-center px-4">
            <div className="bg-brand-bg p-10 border border-border-light max-w-md w-full relative">
               <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-gold"></div>
               <MapPin className="w-8 h-8 text-brand-dark mx-auto mb-4" />
               <h3 className="font-bold text-brand-dark uppercase tracking-wide mb-2 text-sm">Visit Our Office</h3>
               <p className="text-text-subtle mb-6 font-light text-[14px]">18 Craydon Street, Centurion, 0157</p>
               <a href="https://maps.google.com/?q=18+Craydon+Street,+Centurion,+0157" target="_blank" rel="noreferrer" className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors">Open in Maps</a>
            </div>
         </div>
      </section>
    </div>
  );
}
