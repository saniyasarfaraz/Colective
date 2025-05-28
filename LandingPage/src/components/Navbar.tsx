import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold">
            <span className="text-colective-purple">Co</span>
            <span className="text-black">lective</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-colective-purple transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-colective-purple transition-colors">How it works</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-colective-purple transition-colors">Testimonials</a>
          <a href="#pricing" className="text-sm font-medium hover:text-colective-purple transition-colors">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-sm" onClick={() => window.location.href = 'http://localhost:5173/login'}>
            Log in
          </Button>
          <Button className="bg-colective-purple hover:bg-colective-purple-dark" onClick={() => window.location.href = 'http://localhost:5173/register'}>
            Sign up free
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden bg-white/80 backdrop-blur-md rounded-full p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a 
              href="#features" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-colective-purple/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-colective-purple/10"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-colective-purple/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-colective-purple/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="ghost" onClick={() => window.location.href = 'http://localhost:5173/login'}>
                Log in
              </Button>
              <Button className="bg-colective-purple hover:bg-colective-purple-dark" onClick={() => window.location.href = 'http://localhost:5173/register'}>
                Sign up free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
