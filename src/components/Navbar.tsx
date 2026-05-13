import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LulimLogo } from './Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Insights', path: '/insights' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Dark background on home until scrolled, then white. Or always white on other pages?
  // The brief says: "Home Page... Hero Section Full-width background image with a dark overlay... Modern navbar overlaying hero section... Sticky transparent navbar".
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHome
      ? 'bg-brand-bg/80 backdrop-blur-md border-b border-border-light py-4'
      : 'bg-transparent py-8'
  }`;

  const textClasses = isScrolled || !isHome ? 'text-brand-dark' : 'text-white';
  const logoClasses = isScrolled || !isHome ? 'text-brand-dark' : 'text-white';

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`flex items-center gap-2 ${logoClasses}`}>
          <LulimLogo className="h-7 md:h-9" />
          <span className={`hidden md:block text-[10px] uppercase tracking-[0.3em] font-semibold border-l ml-2 pl-4 ${isScrolled || !isHome ? 'text-text-muted border-border-light' : 'text-white/60 border-white/20'}`}>Consulting</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-brand-gold ${isActive ? 'text-brand-gold' : (isScrolled || !isHome ? 'text-brand-dark' : 'text-white')}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className={`px-6 py-3 text-[11px] uppercase tracking-widest font-bold transition-all ${
              isScrolled || !isHome
                ? 'bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark'
                : 'bg-white text-black hover:bg-brand-gold hover:text-white'
            }`}
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-md ${textClasses}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-brand-bg border-b border-border-light shadow-xl py-6 px-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium py-2 border-b border-border-light ${
                    isActive ? 'text-brand-gold' : 'text-brand-dark'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-4 flex items-center justify-center gap-2 w-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark px-6 py-4 uppercase tracking-widest text-[11px] font-bold transition-colors"
            >
              Book Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
