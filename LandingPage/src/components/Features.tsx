
import React, { useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { Users, Rocket, Zap, Layout, Kanban } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white reveal-on-scroll" style={{transitionDelay: `${delay}ms`}}>
    <div className="h-12 w-12 rounded-lg bg-colective-purple/10 flex items-center justify-center mb-4 text-colective-purple">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Card>
);

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = featuresRef.current?.querySelectorAll('.reveal-on-scroll');
            elements?.forEach(el => {
              el.classList.add('active');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-gray-50" ref={featuresRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-colective-purple font-medium">Our Features</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Everything you need for seamless college collaboration</h2>
          <p className="text-gray-600 text-lg">Designed specifically for college students to collaborate effectively on academic projects.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Users size={24} />}
            title="Team Management"
            description="Create and manage student teams with roles and permissions for class projects and assignments."
            delay={100}
          />
          <FeatureCard 
            icon={<Layout size={24} />}
            title="Project Dashboard"
            description="Get a complete overview of all your academic projects with intuitive tracking tools."
            delay={200}
          />
          <FeatureCard 
            icon={<Zap size={24} />}
            title="Real-time Collaboration"
            description="Work together simultaneously on assignments, research papers, and projects with instant updates."
            delay={300}
          />
          <FeatureCard 
            icon={<Kanban size={24} />}
            title="Progress Tracking"
            description="Track project milestones and tasks with Kanban boards to ensure assignments are completed on time."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
