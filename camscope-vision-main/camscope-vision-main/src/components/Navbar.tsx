
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Github } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass' : 'py-5 bg-transparent'}`}>
      <div className="mx-auto px-6 lg:px-12 max-w-7xl flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            <li><a href="#features" className="nav-link">Features</a></li>
            <li><a href="#technology" className="nav-link">Technology</a></li>
            <li><a href="#demo" className="nav-link">Demo</a></li>
          </ul>
          
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn-secondary"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full glass transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-64 py-4 border-t border-white/10' : 'max-h-0'}`}>
        <div className="px-6">
          <ul className="flex flex-col gap-4">
            <li><a href="#features" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Features</a></li>
            <li><a href="#technology" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Technology</a></li>
            <li><a href="#demo" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Demo</a></li>
            <li>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
