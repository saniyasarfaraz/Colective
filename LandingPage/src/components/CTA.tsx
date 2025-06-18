import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = ctaRef.current?.querySelectorAll('.reveal-on-scroll');
            elements?.forEach(el => {
              el.classList.add('active');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    window.location.href = `${import.meta.env.VITE_Client_URL}/register`; // ✅ Navigate to another project

  };

  return (
    <section className="py-20 bg-gradient-to-br from-colective-purple/90 to-colective-blue/90 text-white" ref={ctaRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to transform your academic collaboration?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-white/80">
            Join students from SRMS CET and SRMS CET&R who use Colective to work better together on projects and assignments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-colective-purple hover:bg-white/90"
              onClick={handleClick}
            >
              Sign Up Free
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/70">
            Free for students • Start collaborating today
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
