
import React, { useEffect, useRef } from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Sign up your team",
    description: "Create your Colective workspace in seconds and invite your team members."
  },
  {
    number: 2,
    title: "Set up your first project",
    description: "Create a project, define milestones, and assign tasks to your team."
  },
  {
    number: 3,
    title: "Collaborate in real-time",
    description: "Work together on documents, chat, share files, and track progress."
  },
  {
    number: 4,
    title: "Analyze and optimize",
    description: "Use insights and analytics to improve team performance and workflows."
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
            elements?.forEach(el => {
              el.classList.add('active');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-colective-purple font-medium">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Four simple steps to transform your team</h2>
          <p className="text-gray-600 text-lg">Getting started with Colective is easy and your team will be collaborating in no time.</p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-colective-purple/50 to-colective-blue/50 transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-16 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 reveal-on-scroll`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className="flex-1">
                  <div className={`text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="inline-block w-12 h-12 rounded-full bg-colective-purple text-white flex items-center justify-center font-bold text-lg mb-4">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-10 h-10 rounded-full bg-white shadow-md border-4 border-colective-purple/20"></div>
                
                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${
                    index % 2 === 0 
                      ? 'from-colective-blue/20 to-colective-purple/20' 
                      : 'from-colective-purple/20 to-colective-orange/20'
                    } rounded-xl p-4 h-full aspect-video flex items-center justify-center`}>
                    {/* This would be an image or illustration in a real implementation */}
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/80 rounded-full shadow-sm">
                        <span className="text-2xl font-bold text-colective-purple">{step.number}</span>
                      </div>
                      <p className="text-lg font-medium">{step.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
