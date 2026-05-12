import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-bg text-brand-dark border-t border-border-light pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <Link to="/" className="font-logo font-bold text-2xl tracking-tighter flex items-center gap-2 mb-6 uppercase">
              <span className="font-bold">Lulim<span className="text-brand-gold">.</span></span>
            </Link>
            <p className="text-text-subtle text-sm leading-relaxed mb-6 font-light">
              A full-service Business Strategy and Creative Agency. Aligning high-tier technical capabilities with premium market perception.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-dark hover:text-brand-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-brand-dark hover:text-brand-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-brand-dark hover:text-brand-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted mb-6">Quick Links</h4>
            <ul className="space-y-3 text-[13px] font-semibold text-brand-dark">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Expertise</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Consultation</Link></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Insights</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted mb-6">Services</h4>
            <ul className="space-y-3 text-[13px] font-semibold text-brand-dark">
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Strategy & Communications</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Creative Design & Branding</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Digital Marketing & UI/UX</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Sales Enablement</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted mb-6">Contact Us</h4>
            <ul className="space-y-4 text-[13px] font-semibold text-brand-dark">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <span>18 Craydon Street, Centurion, 0157</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>+27 71 451 9543</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>info@lulimexecutive.co.za</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold text-text-muted">
          <p>&copy; {new Date().getFullYear()} Lulim Executive. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-gold">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
