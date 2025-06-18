import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const floatingElements = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingElements.current) return;

      const elements = floatingElements.current.querySelectorAll('.floating-element');
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      elements.forEach((el, i) => {
        const htmlEl = el as HTMLElement;
        const factor = (i + 1) * 0.01;
        const x = (clientX - centerX) * factor;
        const y = (clientY - centerY) * factor;

        htmlEl.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleStartClick = () => {
    window.location.href = `${import.meta.env.VITE_Client_URL}/register`;
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50"></div>

      {/* Animated shapes */}
      <div ref={floatingElements} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-[10%] right-[15%] w-64 h-64 rounded-full bg-gradient-to-r from-colective-purple/20 to-colective-blue/20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="floating-element absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-gradient-to-r from-colective-orange/20 to-colective-purple/20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="floating-element absolute top-[40%] right-[25%] w-40 h-40 rounded-full bg-gradient-to-r from-colective-blue/20 to-colective-orange/20 animate-pulse-light" style={{ animationDelay: '2s' }}></div>
        <div className="floating-element absolute top-[60%] left-[30%] w-32 h-32 rounded-full bg-colective-purple/10 animate-pulse-light" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block px-3 py-1 rounded-full bg-colective-purple/10 text-colective-purple font-medium text-sm mb-6">
              Team Collaboration Reimagined
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="gradient-text">Collaborate</span> with your team like never before
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Colective brings your team together with a powerful, intuitive platform that makes collaboration seamless, fun, and productive.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="bg-colective-purple hover:bg-colective-purple-dark text-white"
                onClick={handleStartClick}
              >
                Get Started Free
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Start collaborating now...</p>
          </div>

          <div className="relative mt-10 lg:mt-0 animate-zoom-in" style={{ animationDelay: '0.5s' }}>
            <div className="glass-card p-4 shadow-xl mx-auto max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration dashboard"
                className="rounded-lg w-full object-cover shadow-md"
              />

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-3 max-w-[200px]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="text-sm font-medium">Project completion rate</p>
                </div>
                <p className="text-2xl font-bold text-colective-purple-dark">+27%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#features" className="flex flex-col items-center text-gray-500 hover:text-colective-purple transition-colors">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
