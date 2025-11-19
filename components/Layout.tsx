import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fetchMeta } from "../services/api";
import { MetaData } from "../types";

export default function Layout() {
  const [meta, setMeta] = useState<MetaData | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetchMeta().then(setMeta);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Academic Recognition", href: "/#academic" },
    { label: "Skill Development", href: "/#skills" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slateInk">
      {/* Top Utility Bar */}
      <div className="bg-slateInk text-white text-xs tracking-widest z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
          <span className="uppercase hidden sm:inline-block">Global Education Standard</span>
          <div className="flex gap-6 ml-auto">
            <a href="#" className="hover:text-crimson transition-colors">Student Portal</a>
            <a href="#" className="hover:text-crimson transition-colors">Faculty</a>
            <a href="#" className="hover:text-crimson transition-colors">News</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 border-b border-transparent ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-100 py-3" : "bg-white py-6 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex flex-col group">
            <span className="text-2xl md:text-3xl font-serif text-crimson font-bold tracking-tighter group-hover:opacity-90 transition-opacity">
              NOVA VISTA
            </span>
            <span className="text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.3em] text-slateInk/60">Education</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.href} 
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                  location.pathname === link.href ? "text-crimson" : "text-slateInk/70 hover:text-crimson"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-crimson text-white text-sm font-semibold rounded-full hover:bg-crimsonDark transition-colors shadow-lg shadow-crimson/20"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slateInk"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
             <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
             </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif text-slateInk hover:text-crimson"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 bg-parchment relative">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slateInk text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 px-6">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-serif text-white font-bold tracking-tight block mb-4">NOVA VISTA</span>
            <p className="text-white/60 text-sm leading-relaxed">
              Empowering Growth. Elevating Futures through academic recognition and skill enhancement.
            </p>
          </div>
          
          <div>
            <p className="kicker text-white/40 mb-6">Headquarters</p>
            <p className="text-white/90 font-serif">10 Hudson Yards</p>
            <p className="text-white/90 font-serif">New York, NY 10001</p>
            <p className="mt-4 text-white/60 text-sm">+1 (415) 555-0110</p>
          </div>

          <div>
            <p className="kicker text-white/40 mb-6">Programs</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/#academic" className="hover:text-white transition-colors">Academic Recognition</Link></li>
              <li><Link to="/#skills" className="hover:text-white transition-colors">Skill Development</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Admissions</Link></li>
            </ul>
          </div>

          <div>
            <p className="kicker text-white/40 mb-6">Connect</p>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
              <span className="text-white/20">·</span>
              <a href="#" className="text-white/60 hover:text-white transition-colors">YouTube</a>
              <span className="text-white/20">·</span>
              <a href="#" className="text-white/60 hover:text-white transition-colors">X (Twitter)</a>
            </div>
            <Link 
              to="/contact" 
              className="inline-block px-6 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-slateInk transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center md:text-left text-xs text-white/30 uppercase tracking-widest">
          © {new Date().getFullYear()} Nova Vista Education. All rights reserved.
        </div>
      </footer>
    </div>
  );
}